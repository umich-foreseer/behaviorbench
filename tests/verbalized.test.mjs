// Tests for verbalized.html and the two data files it reads.
//
//   node --test tests/
//
// Loads data.js, data_verbalized.js and verbalized.js the way the browser
// does (one shared global scope), then recomputes every number the page
// prints with independent code, so a stale sentence or a broken mapping
// fails here before it is deployed.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = f => readFileSync(path.join(ROOT, f), "utf8");

const ctx = vm.createContext({});
for (const f of ["data.js", "data_verbalized.js", "verbalized.js"]) {
  vm.runInContext(read(f), ctx, { filename: f });
}
const LB = ctx.LEADERBOARD_DATA;
const VD = ctx.VERBALIZED_DATA;
const TABLE = ctx.vdBuild(LB, VD);
const SUMMARY = ctx.vdSummary(LB, VD, TABLE);
const TASK_IDS = VD.tasks.map(t => t.id);

const HTML = read("verbalized.html");
const INDEX = read("index.html");
const METHODOLOGY = read("methodology.html");

// index.html's normalizeModelName, reduced to what the printed name needs:
// drop the temperature and five-run suffixes, drop the reasoning-effort
// suffix (it becomes a chip), canonicalise Be.FM.
function printedName(name) {
  let out = name.replace(/\s*\(T=[^)]*\)/g, "").trim();
  out = out.replace(/\s*\(\s*5\s*runs?[^)]*\)\s*$/i, "").trim();
  out = out.replace(/\s*\(\s*(none|minimal|low|medium|high|max|xhigh)\s*\)\s*$/i, "").trim();
  return out.replace(/\bBeFM(\d+(?:\.\d+)?)(-\d+B)/g, "Be.FM-$1$2");
}

const isFinite = v => typeof v === "number" && Number.isFinite(v);

test("every row has nine finite values in both settings", () => {
  assert.equal(VD.tasks.length, 9);
  assert.ok(TABLE.rows.length >= 19, "fewer rows than the paper figure");
  for (const r of TABLE.rows) {
    for (const t of TASK_IDS) {
      assert.ok(isFinite(r.verb[t]), `${r.id} verbalized ${t}`);
      assert.ok(isFinite(r.sim[t]), `${r.id} simulated ${t}`);
    }
    assert.ok(isFinite(r.verbWR) && isFinite(r.simWR), r.id);
  }
});

test("every row is a main-leaderboard model and prints the main board's name", () => {
  const byId = Object.fromEntries(LB.models.map(m => [m.id, m]));
  for (const m of VD.models) {
    assert.ok(byId[m.id], `${m.id} is not on the main leaderboard`);
    assert.ok(byId[m.simId], `${m.simId} is not on the main leaderboard`);
    assert.equal(m.name, printedName(byId[m.id].name), m.id);
    assert.equal(m.family, byId[m.id].family, m.id);
  }
  const ids = VD.models.map(m => m.id);
  assert.equal(new Set(ids).size, ids.length, "duplicate row");
});

test("Be.FM-1.5 rows read the five-run mean, as the public leaderboard does", () => {
  for (const m of VD.models.filter(m => /^befm15_/.test(m.id))) {
    assert.equal(m.simId, `${m.id}_5runs`, m.id);
  }
});

test("simulated cells are the main leaderboard's cells with Push/Pull merged", () => {
  // The public data.js ships no parse-failure flags; if one ever lands on a
  // row used here, vdSimulated drops that cell from the ranking like the main
  // page does, and this assertion is the place to notice.
  for (const m of VD.models) {
    assert.deepEqual(Object.keys((LB.flags || {})[m.simId] || {}), [], `flag on ${m.simId}`);
  }
  for (const r of TABLE.rows) {
    const row = LB.results[r.simId];
    for (const t of VD.tasks) {
      let expected = row[t.sim_scenario];
      if (t.sim_pushpull) expected = (expected * row[t.sim_n] + row[t.sim_pushpull]) / (row[t.sim_n] + 1);
      assert.ok(Math.abs(r.sim[t.id] - expected) < 1e-12, `${r.id} ${t.id}`);
    }
  }
});

test("win rates equal an independent pairwise count, lower distance wins", () => {
  const n = TABLE.rows.length;
  for (const side of ["verb", "sim"]) {
    for (const t of TASK_IDS) {
      for (const a of TABLE.rows) {
        let score = 0;
        for (const b of TABLE.rows) {
          if (a === b) continue;
          if (a[side][t] < b[side][t]) score += 1;
          else if (a[side][t] === b[side][t]) score += 0.5;
        }
        const expected = score / (n - 1);
        assert.ok(Math.abs(TABLE.taskWinRates[side][a.id][t] - expected) < 1e-12, `${side} ${a.id} ${t}`);
      }
    }
    for (const r of TABLE.rows) {
      const mean = TASK_IDS.reduce((s, t) => s + TABLE.taskWinRates[side][r.id][t], 0) / TASK_IDS.length;
      const got = side === "verb" ? r.verbWR : r.simWR;
      assert.ok(Math.abs(got - mean) < 1e-12, `${side} mean ${r.id}`);
    }
  }
});

test("ranks are competition ranks of the mean win rate, and equal means share a rank", () => {
  const EPS = ctx.VD_TIE_EPS;
  for (const [wrKey, rankKey] of [["verbWR", "verbRank"], ["simWR", "simRank"]]) {
    const sorted = [...TABLE.rows].sort((a, b) => b[wrKey] - a[wrKey]);
    sorted.forEach(r => {
      const better = sorted.filter(o => o[wrKey] > r[wrKey] + EPS).length;
      assert.equal(r[rankKey], better + 1, `${rankKey} ${r.id}`);
    });
    assert.equal(sorted[0][rankKey], 1);
    // Mean win rates are exact rationals; float summation order must not split a tie.
    for (const a of TABLE.rows) for (const b of TABLE.rows) {
      if (Math.abs(a[wrKey] - b[wrKey]) < EPS) assert.equal(a[rankKey], b[rankKey], `${rankKey} tie ${a.id} vs ${b.id}`);
    }
  }
  // The data has genuine ties today; the page must show them as ties.
  const tied = TABLE.rows.filter(a => TABLE.rows.some(b => b !== a && Math.abs(a.simWR - b.simWR) < EPS));
  assert.ok(tied.length >= 2, "expected at least one tied pair on the simulated side");
  // Default order is by verbalized rank.
  TABLE.rows.forEach((r, i) => {
    if (i > 0) assert.ok(r.verbRank >= TABLE.rows[i - 1].verbRank);
  });
});

test("reference rows: uniform above the binning floor, fully failed rows sit on uniform", () => {
  for (const t of TASK_IDS) {
    assert.ok(VD.reference.binFloor[t] < VD.reference.uniform[t], t);
  }
  const fullyFlagged = TABLE.rows.filter(r => TASK_IDS.every(t => r.flags[t] === 1));
  assert.ok(fullyFlagged.length >= 1, "expected at least one row that never parsed");
  for (const r of fullyFlagged) {
    for (const t of TASK_IDS) assert.ok(Math.abs(r.verb[t] - VD.reference.uniform[t]) < 1e-6, `${r.id} ${t}`);
  }
  assert.deepEqual(SUMMARY.fullyFlagged, fullyFlagged.map(r => r.name));
  for (const [mid, flags] of Object.entries(VD.failedParse)) {
    for (const [t, rate] of Object.entries(flags)) assert.ok(rate > 0 && rate <= 1, `${mid} ${t}`);
  }
});

test("the summary the prose is built from matches the data", () => {
  assert.equal(SUMMARY.nModels, VD.models.length);
  assert.equal(SUMMARY.nTasks, 9);
  assert.equal(SUMMARY.repeats, VD.repeats);
  assert.equal(SUMMARY.conditions, VD.tasks.reduce((s, t) => s + t.conditions, 0));
  assert.equal(SUMMARY.gamesPerTask, "9/8/9");
  assert.equal(SUMMARY.mainModels, LB.models.filter(m => !m.id.endsWith("_5runs")).length);
  assert.ok(SUMMARY.mainModels > SUMMARY.nModels, "the main board should be the larger pool");
  assert.deepEqual(SUMMARY.nonDefaultReasoning, VD.models.filter(m => m.reasoningEffort).map(m => `${m.name} (${m.reasoningEffort})`));
});

test("no count the page computes is typed into its source", () => {
  for (const n of [SUMMARY.nModels, SUMMARY.mainModels, SUMMARY.conditions]) {
    assert.ok(!new RegExp(`\\b${n} (models|conditions)\\b`).test(HTML), `literal "${n}" in verbalized.html`);
  }
  assert.ok(!/\b9\/8\/9\b/.test(HTML), "literal games-per-task in verbalized.html");
  assert.ok(!/\b(five|5) repeats\b/.test(HTML), "literal repeat count in verbalized.html");
  assert.ok(!/\b(three|3) economic-game tasks\b/.test(HTML), "literal game-task count in verbalized.html");
  assert.ok(!/\b(five|5)-run mean\b/.test(HTML), "literal Be.FM run count in verbalized.html");
  assert.equal(SUMMARY.nGameTasks, VD.tasks.filter(t => t.family === "games").length);
  assert.equal(SUMMARY.befmRuns, 5, "the five-run sibling should be read off data.js");
});

test("house style: no em dashes on the new page", () => {
  for (const [name, text] of [["verbalized.html", HTML], ["verbalized.js", read("verbalized.js")]]) {
    assert.ok(!text.includes("—") && !text.includes("&mdash;"), `em dash in ${name}`);
  }
});

test("the pages link to each other and load the same data.js", () => {
  assert.ok(INDEX.includes('href="verbalized.html"'), "index.html does not link the page");
  assert.ok(HTML.includes('href="index.html"') && HTML.includes('href="methodology.html"'));
  assert.ok(METHODOLOGY.includes('href="verbalized.html"'), "methodology.html does not link the page");
  const v = s => (s.match(/src="data\.js\?v=(\d+)"/) || [])[1];
  assert.ok(v(INDEX) && v(INDEX) === v(HTML), `data.js cache-bust differs: index ${v(INDEX)} vs page ${v(HTML)}`);
});

test("the main leaderboard carries the models added in this release", () => {
  const ids = new Set(LB.models.map(m => m.id));
  for (const id of ["glm_5_2", "hy3", "gpt5_6_terra", "gpt5_6_sol", "claude_opus_5", "osim_8b"]) {
    assert.ok(ids.has(id), `${id} missing from data.js`);
    assert.ok(Object.values(LB.results[id]).every(v => v != null), `${id} has an empty cell`);
  }
  const byId = Object.fromEntries(LB.models.map(m => [m.id, m]));
  assert.equal(byId.hy3.name, "HY3 (high)", "HY3 should carry its reasoning-effort chip");
  assert.equal(byId.glm_5_2.name, "GLM-5.2");
});
