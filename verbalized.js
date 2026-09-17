// verbalized.js: the logic behind verbalized.html, kept free of DOM access so
// tests/verbalized.test.mjs can load it beside data.js and data_verbalized.js
// with node:vm and recompute everything the page prints.
//
// Inputs are the two generated files:
//   LEADERBOARD_DATA (data.js)            the main leaderboard, simulated side
//   VERBALIZED_DATA  (data_verbalized.js) the verbalized side plus the ids that
//                                         map each row and task onto data.js
"use strict";

// Simulated value for one task, with Push/Pull merged into the three game
// tasks the way index.html's applyMergePushpull does:
// (avg * n + pushpull) / (n + 1). The main leaderboard shows exactly this.
function vdSimulated(row, task, flags) {
  if (!row) return null;
  // The main page keeps a flagged cell out of its ranking (rankVal); so do we.
  if (flags && (flags[task.sim_scenario] != null || (task.sim_pushpull && flags[task.sim_pushpull] != null))) return null;
  const base = row[task.sim_scenario];
  if (base == null) return null;
  if (!task.sim_pushpull) return base;
  const n = row[task.sim_n];
  const pp = row[task.sim_pushpull];
  if (n == null || pp == null) return null;
  return (base * n + pp) / (n + 1);
}

// HELM-style win rate on one task, lower value better:
// (models beaten + 0.5 * models tied) / (N - 1), the same tie handling as
// index.html's computeWinRates. Missing values take no part.
function vdTaskWinRates(valueById) {
  const entries = Object.keys(valueById)
    .filter(id => valueById[id] != null)
    .map(id => ({ id, val: valueById[id] }));
  const out = {};
  Object.keys(valueById).forEach(id => { out[id] = null; });
  if (entries.length < 2) return out;
  entries.sort((a, b) => a.val - b.val);
  const n = entries.length;
  let i = 0;
  while (i < n) {
    let j = i;
    while (j < n && entries[j].val === entries[i].val) j++;
    const wr = ((n - j) + 0.5 * (j - i - 1)) / (n - 1);
    for (let k = i; k < j; k++) out[entries[k].id] = wr;
    i = j;
  }
  return out;
}

function vdMean(values) {
  const v = values.filter(x => x != null);
  if (v.length === 0) return null;
  return v.reduce((a, b) => a + b, 0) / v.length;
}

// Competition ranking (1, 2, 2, 4) of a higher-is-better score. Mean win
// rates are exact rationals (multiples of 1/(2(N-1)) averaged over the tasks)
// but reach here as float sums in task order, so two equal means can differ
// in the last bit; scores within VD_TIE_EPS share a rank.
var VD_TIE_EPS = 1e-9;  // var, not const: node:vm exposes it to the tests as a global
function vdRanks(scoreById) {
  const out = {};
  Object.keys(scoreById).forEach(id => { out[id] = null; });
  const entries = Object.keys(scoreById)
    .filter(id => scoreById[id] != null)
    .map(id => ({ id, s: scoreById[id] }))
    .sort((a, b) => b.s - a.s);
  entries.forEach((e, i) => {
    const tied = i > 0 && Math.abs(entries[i - 1].s - e.s) < VD_TIE_EPS;
    out[e.id] = tied ? out[entries[i - 1].id] : i + 1;
  });
  return out;
}

function vdRound2(v) {
  return v == null ? null : Number(v.toFixed(2));
}

// One row per model of VERBALIZED_DATA: both settings' per-task distances,
// per-task win rates, mean win rates and ranks. Rows come back sorted by
// verbalized rank, the page's default order.
function vdBuild(LB, VD) {
  const tasks = VD.tasks;
  const rows = VD.models.map(m => {
    const verb = {};
    const sim = {};
    tasks.forEach(t => {
      const v = VD.results[m.id] ? VD.results[m.id][t.id] : null;
      verb[t.id] = v == null ? null : v;
      sim[t.id] = vdSimulated(LB.results[m.simId], t, LB.flags && LB.flags[m.simId]);
    });
    return {
      id: m.id, simId: m.simId, name: m.name, family: m.family,
      verb, sim, flags: VD.failedParse[m.id] || {},
    };
  });

  const taskWinRates = { verb: {}, sim: {} };
  rows.forEach(r => { taskWinRates.verb[r.id] = {}; taskWinRates.sim[r.id] = {}; });
  tasks.forEach(t => {
    ["verb", "sim"].forEach(side => {
      const byId = {};
      rows.forEach(r => { byId[r.id] = r[side][t.id]; });
      const w = vdTaskWinRates(byId);
      rows.forEach(r => { taskWinRates[side][r.id][t.id] = w[r.id]; });
    });
  });
  rows.forEach(r => {
    r.verbWR = vdMean(tasks.map(t => taskWinRates.verb[r.id][t.id]));
    r.simWR = vdMean(tasks.map(t => taskWinRates.sim[r.id][t.id]));
  });

  const verbScores = {};
  const simScores = {};
  rows.forEach(r => { verbScores[r.id] = r.verbWR; simScores[r.id] = r.simWR; });
  const verbRank = vdRanks(verbScores);
  const simRank = vdRanks(simScores);
  rows.forEach(r => { r.verbRank = verbRank[r.id]; r.simRank = simRank[r.id]; });

  // Best value per task column, on the printed (two-decimal) numbers so that
  // two cells that print the same are both marked, as on the main page.
  const best = { verb: {}, sim: {} };
  tasks.forEach(t => {
    ["verb", "sim"].forEach(side => {
      const vals = rows.map(r => vdRound2(r[side][t.id])).filter(v => v != null);
      best[side][t.id] = vals.length ? Math.min.apply(null, vals) : null;
    });
  });

  rows.sort((a, b) => {
    const ra = a.verbRank == null ? Infinity : a.verbRank;
    const rb = b.verbRank == null ? Infinity : b.verbRank;
    return ra - rb || a.name.localeCompare(b.name);
  });
  return { tasks, rows, best, taskWinRates };
}

// The numbers the page prints in prose, derived from the data rather than typed.
function vdSummary(VD, table) {
  return {
    nModels: table.rows.length,
    nTasks: table.tasks.length,
    repeats: VD.repeats,
    conditions: table.tasks.reduce((s, t) => s + t.conditions, 0),
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { vdSimulated, vdTaskWinRates, vdMean, vdRanks, vdRound2, vdBuild, vdSummary, VD_TIE_EPS };
}
