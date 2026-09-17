// BehaviorBench verbalized-distribution data
// Auto-generated on 2026-09-17 by generate_verbalized_data.py
// 23 models x 9 tasks, 5 repeats per condition, source: befm_eval_v2 eval_runs/direct_distribution (rescored)
var VERBALIZED_DATA = {
  "generated": "2026-09-17",
  "metric": "W Distance",
  "repeats": 5,
  "tasks": [
    {
      "id": "vd_game",
      "name": "Game Behav. Sim.",
      "family": "games",
      "direct_task": "direct_dist_game_behavior",
      "sim_scenario": "ml_game",
      "sim_pushpull": "ho_pushpull",
      "sim_n": "ml_game_n",
      "conditions": 9
    },
    {
      "id": "vd_multiround",
      "name": "Multi-Round Pred.",
      "family": "games",
      "direct_task": "direct_dist_multiround_behavior",
      "sim_scenario": "ml_multiround",
      "sim_pushpull": "ho_pp_multiround_wd",
      "sim_n": "ml_multiround_n",
      "conditions": 8
    },
    {
      "id": "vd_acrossgame",
      "name": "Across-Ctx Pred.",
      "family": "games",
      "direct_task": "direct_dist_acrossgame_behavior",
      "sim_scenario": "ml_acrossgame",
      "sim_pushpull": "ho_pp_acrossgame_wd",
      "sim_n": "ml_acrossgame_n",
      "conditions": 9
    },
    {
      "id": "vd_singleq",
      "name": "Demo. To Resp.",
      "family": "survey",
      "direct_task": "direct_dist_surv_resp",
      "sim_scenario": "bf_singleq_wdist",
      "sim_pushpull": null,
      "sim_n": null,
      "conditions": 50
    },
    {
      "id": "vd_sequential",
      "name": "Seq. Resp. Pred.",
      "family": "survey",
      "direct_task": "direct_dist_seq_surv_resp",
      "sim_scenario": "bf_sequential_wdist",
      "sim_pushpull": null,
      "sim_n": null,
      "conditions": 49
    },
    {
      "id": "vd_missing",
      "name": "Masked Resp. Pred.",
      "family": "survey",
      "direct_task": "direct_dist_missing_surv_resp",
      "sim_scenario": "bf_missing_wdist",
      "sim_pushpull": null,
      "sim_n": null,
      "conditions": 50
    },
    {
      "id": "vd_pers_score",
      "name": "Demo. To Pers.",
      "family": "personality",
      "direct_task": "direct_dist_pers_score",
      "sim_scenario": "bf_pers_score_wdist",
      "sim_pushpull": null,
      "sim_n": null,
      "conditions": 5
    },
    {
      "id": "vd_acrossdim",
      "name": "Across-Dim Pers. Pred.",
      "family": "personality",
      "direct_task": "direct_dist_acrossdim_pers_score",
      "sim_scenario": "bf_acrossdim_wdist",
      "sim_pushpull": null,
      "sim_n": null,
      "conditions": 5
    },
    {
      "id": "vd_age",
      "name": "Pers. To Demo.",
      "family": "age",
      "direct_task": "direct_dist_demo_age",
      "sim_scenario": "bf_age_wdist",
      "sim_pushpull": null,
      "sim_n": null,
      "conditions": 1
    }
  ],
  "models": [
    {
      "id": "qwen3_4b",
      "simId": "qwen3_4b",
      "name": "Qwen3-4B",
      "family": "general",
      "run": "run_27453197/results/qwen3-4b-base/direct_dist_game_behavior_direct_dist_multiround_behavior_20260730_030238.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "llama_70b",
      "simId": "llama_70b",
      "name": "Llama3.3-70B",
      "family": "general",
      "run": "run_27463829/results/llama33-70b-base/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_203048.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "deepseek_v3_2",
      "simId": "deepseek_v3_2",
      "name": "DeepSeek V3.2",
      "family": "api",
      "run": "api/DeepSeek-V3.2/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_183215.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "glm_5_2",
      "simId": "glm_5_2",
      "name": "GLM-5.2",
      "family": "api",
      "run": "api/z-ai/glm-5.2/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_190852.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "hy3",
      "simId": "hy3",
      "name": "HY3",
      "family": "api",
      "run": "api/tencent/hy3/direct_dist_game_behavior_direct_dist_multiround_behavior_20260803_004117.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": "high"
    },
    {
      "id": "claude_sonnet",
      "simId": "claude_sonnet",
      "name": "Claude Sonnet 4.6",
      "family": "api",
      "run": "api/claude-sonnet-4-6/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_191020.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "claude_opus",
      "simId": "claude_opus",
      "name": "Claude Opus 4.6",
      "family": "api",
      "run": "api/claude-opus-4-6/direct_dist_game_behavior_direct_dist_multiround_behavior_20260730_031227.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "claude_opus_5",
      "simId": "claude_opus_5",
      "name": "Claude Opus 5",
      "family": "api",
      "run": "api/claude-opus-5/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_191937.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "gpt4_1",
      "simId": "gpt4_1",
      "name": "GPT 4.1",
      "family": "api",
      "run": "api/gpt-4.1/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_182702.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "gpt5_4",
      "simId": "gpt5_4",
      "name": "GPT 5.4",
      "family": "api",
      "run": "api/gpt-5.4/direct_dist_game_behavior_direct_dist_multiround_behavior_20260730_030016.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "gpt5_6_terra",
      "simId": "gpt5_6_terra",
      "name": "GPT 5.6 Terra",
      "family": "api",
      "run": "api/gpt-5.6-terra/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_185755.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "gpt5_6_sol",
      "simId": "gpt5_6_sol",
      "name": "GPT 5.6 Sol",
      "family": "api",
      "run": "api/gpt-5.6-sol/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_185004.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "gemini_flash_lite",
      "simId": "gemini_flash_lite",
      "name": "Gemini 3.1 Flash",
      "family": "api",
      "run": "api/gemini-3.1-flash-lite/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_185923.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "gemini_pro",
      "simId": "gemini_pro",
      "name": "Gemini 3.1 Pro",
      "family": "api",
      "run": "api/gemini-3.1-pro-preview/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_184716.rescored.json",
      "temperature": 1.0,
      "reasoningEffort": null
    },
    {
      "id": "socrates_llama3_8b_sft",
      "simId": "socrates_llama3_8b_sft",
      "name": "Socrates-Llama3-8B-SFT",
      "family": "general",
      "run": "run_27463890/results/socrates-llama3-8b-sft/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_232509.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "socrates_llama3_8b_dpo",
      "simId": "socrates_llama3_8b_dpo",
      "name": "Socrates-Llama3-8B-DPO",
      "family": "general",
      "run": "run_27463890/results/socrates-llama3-8b-dpo/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_233018.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "socrates_qwen25_14b_sft",
      "simId": "socrates_qwen25_14b_sft",
      "name": "Socrates-Qwen-14B-SFT",
      "family": "general",
      "run": "run_27463890/results/socrates-qwen25-14b-sft/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_233747.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "socrates_qwen25_14b_dpo",
      "simId": "socrates_qwen25_14b_dpo",
      "name": "Socrates-Qwen-14B-DPO",
      "family": "general",
      "run": "run_27463890/results/socrates-qwen25-14b-dpo/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_234549.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "centaur_70b",
      "simId": "centaur_70b",
      "name": "Centaur-70B",
      "family": "general",
      "run": "run_27463875/results/centaur-70b/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_222630.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "osim_8b",
      "simId": "osim_8b",
      "name": "OSim-8B",
      "family": "general",
      "run": "run_27463829/results/osim-8b/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_200305.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "befm15_4b_v3",
      "simId": "befm15_4b_v3_5runs",
      "name": "Be.FM-1.5-4B",
      "family": "befm",
      "run": "run_27453216/results/befm15-4b/direct_dist_game_behavior_direct_dist_multiround_behavior_20260730_031857.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "befm15_70b_v3",
      "simId": "befm15_70b_v3_5runs",
      "name": "Be.FM-1.5-70B",
      "family": "befm",
      "run": "run_27463829/results/befm15-70b/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_203658.rescored.json",
      "temperature": 0.6,
      "reasoningEffort": null
    },
    {
      "id": "befm1_8b",
      "simId": "befm1_8b",
      "name": "Be.FM-1-8B",
      "family": "befm",
      "run": "run_27463829/results/befm1-8b/direct_dist_game_behavior_direct_dist_multiround_behavior_20260802_195928.rescored.json",
      "temperature": 0.7,
      "reasoningEffort": null
    }
  ],
  "results": {
    "qwen3_4b": {
      "vd_game": 12.237157,
      "vd_multiround": 15.227497,
      "vd_acrossgame": 11.616379,
      "vd_singleq": 0.582591,
      "vd_sequential": 0.561966,
      "vd_missing": 0.558803,
      "vd_pers_score": 9.728804,
      "vd_acrossdim": 10.344623,
      "vd_age": 12.25
    },
    "llama_70b": {
      "vd_game": 10.454444,
      "vd_multiround": 15.067693,
      "vd_acrossgame": 10.963983,
      "vd_singleq": 0.514125,
      "vd_sequential": 0.478831,
      "vd_missing": 0.585309,
      "vd_pers_score": 3.542504,
      "vd_acrossdim": 4.589466,
      "vd_age": 12.322
    },
    "deepseek_v3_2": {
      "vd_game": 9.397907,
      "vd_multiround": 10.896497,
      "vd_acrossgame": 9.016339,
      "vd_singleq": 0.497878,
      "vd_sequential": 0.475977,
      "vd_missing": 0.505469,
      "vd_pers_score": 5.164132,
      "vd_acrossdim": 4.93929,
      "vd_age": 11.206
    },
    "glm_5_2": {
      "vd_game": 6.685,
      "vd_multiround": 8.031998,
      "vd_acrossgame": 6.470174,
      "vd_singleq": 0.39814,
      "vd_sequential": 0.412644,
      "vd_missing": 0.418233,
      "vd_pers_score": 3.975866,
      "vd_acrossdim": 3.509708,
      "vd_age": 9.79
    },
    "hy3": {
      "vd_game": 9.57,
      "vd_multiround": 13.565325,
      "vd_acrossgame": 10.057823,
      "vd_singleq": 0.492116,
      "vd_sequential": 0.494366,
      "vd_missing": 0.558719,
      "vd_pers_score": 5.30384,
      "vd_acrossdim": 5.49473,
      "vd_age": 13.83
    },
    "claude_sonnet": {
      "vd_game": 8.672222,
      "vd_multiround": 9.235578,
      "vd_acrossgame": 7.413572,
      "vd_singleq": 0.356293,
      "vd_sequential": 0.383151,
      "vd_missing": 0.395651,
      "vd_pers_score": 2.681618,
      "vd_acrossdim": 3.205483,
      "vd_age": 6.75
    },
    "claude_opus": {
      "vd_game": 9.689892,
      "vd_multiround": 9.632078,
      "vd_acrossgame": 8.139305,
      "vd_singleq": 0.357918,
      "vd_sequential": 0.365565,
      "vd_missing": 0.421523,
      "vd_pers_score": 2.016968,
      "vd_acrossdim": 2.382212,
      "vd_age": 10.89
    },
    "claude_opus_5": {
      "vd_game": 8.853333,
      "vd_multiround": 6.335382,
      "vd_acrossgame": 7.694569,
      "vd_singleq": 0.357184,
      "vd_sequential": 0.378292,
      "vd_missing": 0.38916,
      "vd_pers_score": 1.249308,
      "vd_acrossdim": 1.355803,
      "vd_age": 5.9
    },
    "gpt4_1": {
      "vd_game": 9.734,
      "vd_multiround": 9.558876,
      "vd_acrossgame": 9.697444,
      "vd_singleq": 0.396365,
      "vd_sequential": 0.39834,
      "vd_missing": 0.41329,
      "vd_pers_score": 2.709938,
      "vd_acrossdim": 2.714684,
      "vd_age": 9.85
    },
    "gpt5_4": {
      "vd_game": 9.395111,
      "vd_multiround": 7.216451,
      "vd_acrossgame": 8.089391,
      "vd_singleq": 0.430095,
      "vd_sequential": 0.408855,
      "vd_missing": 0.43622,
      "vd_pers_score": 3.774214,
      "vd_acrossdim": 3.851341,
      "vd_age": 6.91
    },
    "gpt5_6_terra": {
      "vd_game": 6.903333,
      "vd_multiround": 7.549195,
      "vd_acrossgame": 6.626931,
      "vd_singleq": 0.394774,
      "vd_sequential": 0.393068,
      "vd_missing": 0.428216,
      "vd_pers_score": 2.791172,
      "vd_acrossdim": 2.948538,
      "vd_age": 6.81
    },
    "gpt5_6_sol": {
      "vd_game": 6.541111,
      "vd_multiround": 6.831423,
      "vd_acrossgame": 6.442754,
      "vd_singleq": 0.393152,
      "vd_sequential": 0.407063,
      "vd_missing": 0.449892,
      "vd_pers_score": 2.053497,
      "vd_acrossdim": 2.449129,
      "vd_age": 5.33
    },
    "gemini_flash_lite": {
      "vd_game": 9.672222,
      "vd_multiround": 11.308773,
      "vd_acrossgame": 9.47263,
      "vd_singleq": 0.420451,
      "vd_sequential": 0.390148,
      "vd_missing": 0.449993,
      "vd_pers_score": 5.020406,
      "vd_acrossdim": 5.409881,
      "vd_age": 12.37
    },
    "gemini_pro": {
      "vd_game": 5.358889,
      "vd_multiround": 8.560909,
      "vd_acrossgame": 4.210411,
      "vd_singleq": 0.411818,
      "vd_sequential": 0.407247,
      "vd_missing": 0.437033,
      "vd_pers_score": 2.129641,
      "vd_acrossdim": 2.426983,
      "vd_age": 1.864
    },
    "socrates_llama3_8b_sft": {
      "vd_game": 11.461111,
      "vd_multiround": 13.213825,
      "vd_acrossgame": 10.711145,
      "vd_singleq": 0.667889,
      "vd_sequential": 0.645897,
      "vd_missing": 0.653089,
      "vd_pers_score": 5.631994,
      "vd_acrossdim": 5.798216,
      "vd_age": 17.75
    },
    "socrates_llama3_8b_dpo": {
      "vd_game": 9.435937,
      "vd_multiround": 14.776901,
      "vd_acrossgame": 10.252173,
      "vd_singleq": 0.728904,
      "vd_sequential": 0.70119,
      "vd_missing": 0.717353,
      "vd_pers_score": 10.078798,
      "vd_acrossdim": 10.345965,
      "vd_age": 15.390946
    },
    "socrates_qwen25_14b_sft": {
      "vd_game": 11.461111,
      "vd_multiround": 13.213825,
      "vd_acrossgame": 10.711145,
      "vd_singleq": 0.667889,
      "vd_sequential": 0.645897,
      "vd_missing": 0.653089,
      "vd_pers_score": 5.631994,
      "vd_acrossdim": 5.798216,
      "vd_age": 17.75
    },
    "socrates_qwen25_14b_dpo": {
      "vd_game": 10.215633,
      "vd_multiround": 15.723146,
      "vd_acrossgame": 10.322983,
      "vd_singleq": 0.541464,
      "vd_sequential": 0.541904,
      "vd_missing": 0.566531,
      "vd_pers_score": 7.031387,
      "vd_acrossdim": 7.171936,
      "vd_age": 12.43
    },
    "centaur_70b": {
      "vd_game": 32.312573,
      "vd_multiround": 40.362065,
      "vd_acrossgame": 38.049737,
      "vd_singleq": 0.776748,
      "vd_sequential": 0.773494,
      "vd_missing": 0.865566,
      "vd_pers_score": 5.236917,
      "vd_acrossdim": 4.859442,
      "vd_age": 15.728947
    },
    "osim_8b": {
      "vd_game": 11.890559,
      "vd_multiround": 17.051627,
      "vd_acrossgame": 13.775201,
      "vd_singleq": 0.534909,
      "vd_sequential": 0.529413,
      "vd_missing": 0.615481,
      "vd_pers_score": 8.056057,
      "vd_acrossdim": 8.33245,
      "vd_age": 9.698
    },
    "befm15_4b_v3": {
      "vd_game": 14.817541,
      "vd_multiround": 19.630667,
      "vd_acrossgame": 13.948054,
      "vd_singleq": 0.820597,
      "vd_sequential": 0.766992,
      "vd_missing": 0.784833,
      "vd_pers_score": 9.017197,
      "vd_acrossdim": 9.791403,
      "vd_age": 8.074
    },
    "befm15_70b_v3": {
      "vd_game": 17.770072,
      "vd_multiround": 19.576173,
      "vd_acrossgame": 17.011442,
      "vd_singleq": 0.618053,
      "vd_sequential": 0.586168,
      "vd_missing": 0.648088,
      "vd_pers_score": 3.195958,
      "vd_acrossdim": 3.270607,
      "vd_age": 14.326
    },
    "befm1_8b": {
      "vd_game": 22.493015,
      "vd_multiround": 22.476152,
      "vd_acrossgame": 20.078084,
      "vd_singleq": 0.918868,
      "vd_sequential": 0.855584,
      "vd_missing": 0.913285,
      "vd_pers_score": 7.537103,
      "vd_acrossdim": 8.288717,
      "vd_age": 14.532517
    }
  },
  "failedParse": {
    "deepseek_v3_2": {
      "vd_singleq": 0.004,
      "vd_sequential": 0.0041
    },
    "glm_5_2": {
      "vd_multiround": 0.025,
      "vd_singleq": 0.004,
      "vd_sequential": 0.0163,
      "vd_missing": 0.004,
      "vd_pers_score": 0.12,
      "vd_acrossdim": 0.04
    },
    "hy3": {
      "vd_game": 0.6444,
      "vd_multiround": 0.925,
      "vd_acrossgame": 0.6222,
      "vd_singleq": 0.272,
      "vd_sequential": 0.3796,
      "vd_missing": 0.356,
      "vd_pers_score": 0.84,
      "vd_acrossdim": 0.96,
      "vd_age": 0.4
    },
    "claude_sonnet": {
      "vd_game": 0.0222,
      "vd_acrossgame": 0.0222,
      "vd_pers_score": 0.08,
      "vd_acrossdim": 0.08
    },
    "socrates_llama3_8b_sft": {
      "vd_game": 1.0,
      "vd_multiround": 1.0,
      "vd_acrossgame": 1.0,
      "vd_singleq": 1.0,
      "vd_sequential": 1.0,
      "vd_missing": 1.0,
      "vd_pers_score": 1.0,
      "vd_acrossdim": 1.0,
      "vd_age": 1.0
    },
    "socrates_llama3_8b_dpo": {
      "vd_game": 0.0667,
      "vd_multiround": 0.1,
      "vd_acrossgame": 0.0444,
      "vd_singleq": 0.04,
      "vd_sequential": 0.0408,
      "vd_missing": 0.036
    },
    "socrates_qwen25_14b_sft": {
      "vd_game": 1.0,
      "vd_multiround": 1.0,
      "vd_acrossgame": 1.0,
      "vd_singleq": 1.0,
      "vd_sequential": 1.0,
      "vd_missing": 1.0,
      "vd_pers_score": 1.0,
      "vd_acrossdim": 1.0,
      "vd_age": 1.0
    },
    "centaur_70b": {
      "vd_game": 0.0667,
      "vd_multiround": 0.05,
      "vd_singleq": 0.064,
      "vd_sequential": 0.0449,
      "vd_missing": 0.012,
      "vd_pers_score": 0.32,
      "vd_acrossdim": 0.4
    },
    "befm15_4b_v3": {
      "vd_acrossgame": 0.0222,
      "vd_sequential": 0.0041,
      "vd_missing": 0.004
    },
    "befm15_70b_v3": {
      "vd_game": 0.0667,
      "vd_acrossgame": 0.0222,
      "vd_singleq": 0.004,
      "vd_sequential": 0.0082,
      "vd_missing": 0.004,
      "vd_age": 0.2
    },
    "befm1_8b": {
      "vd_game": 0.0222,
      "vd_multiround": 0.05,
      "vd_singleq": 0.004,
      "vd_sequential": 0.0041,
      "vd_pers_score": 0.08,
      "vd_acrossdim": 0.08,
      "vd_age": 0.2
    }
  },
  "reference": {
    "uniform": {
      "vd_game": 11.461111,
      "vd_multiround": 13.213825,
      "vd_acrossgame": 10.711145,
      "vd_singleq": 0.667889,
      "vd_sequential": 0.645897,
      "vd_missing": 0.653089,
      "vd_pers_score": 5.631994,
      "vd_acrossdim": 5.798216,
      "vd_age": 17.75
    },
    "binFloor": {
      "vd_game": 2.977222,
      "vd_multiround": 3.292778,
      "vd_acrossgame": 2.991475,
      "vd_singleq": 0.0,
      "vd_sequential": 0.0,
      "vd_missing": 0.0,
      "vd_pers_score": 0.990626,
      "vd_acrossdim": 1.034836,
      "vd_age": 2.488
    }
  }
};
