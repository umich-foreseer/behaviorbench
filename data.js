// BeFM Leaderboard Data
// Auto-generated on 2026-05-07 by generate_leaderboard_data.py
// 24 models, n_v1 for MobLab/BigFive, full-set for IEO/workflow

var LEADERBOARD_DATA = {
  models: [
    // Open-source models (cost = 0, self-hosted)
    { id: "qwen3_4b", name: "Qwen3-4B (T=0.6)", family: "general", base: "Qwen/Qwen3-4B-Instruct-2507", cost: 0 },
    { id: "befm15_4b_v3", name: "BeFM1.5-4B (T=0.6)", family: "befm", base: "qwen3-4b-befm15-v3", cost: 0 },
    { id: "befm15_4b_v3_5runs", name: "BeFM1.5-4B (5 runs, mean)", family: "befm", base: "qwen3-4b-befm15-v3", cost: 0 },
    { id: "befm1_8b", name: "BeFM1-8B (T=0.7)", family: "befm", base: "BeFM_1_8b_merged", cost: 0 },
    { id: "befm1_70b", name: "BeFM1-70B (T=0.7)", family: "befm", base: "BeFM_1_70b", cost: 0 },
    { id: "llama_70b", name: "Llama3.3-70B (T=0.6)", family: "general", base: "meta-llama/Llama-3.3-70B-Instruct", cost: 0 },
    { id: "befm15_70b_v3", name: "BeFM1.5-70B (T=0.6)", family: "befm", base: "BeFM1.5-70B-v3", cost: 0 },
    { id: "befm15_70b_v3_5runs", name: "BeFM1.5-70B (5 runs, mean)", family: "befm", base: "BeFM1.5-70B-v3", cost: 0 },
    { id: "centaur_70b", name: "Centaur-70B (T=0.6)", family: "general", base: "marcelbinz/Llama-3.1-Centaur-70B", cost: 0 },
    { id: "socrates_llama3_8b_sft", name: "Socrates-Llama3-8B-SFT (T=0.6)", family: "general", base: "socratesft/llama3-8b-sft", cost: 0 },
    { id: "socrates_llama3_8b_dpo", name: "Socrates-Llama3-8B-DPO (T=0.6)", family: "general", base: "socratesft/llama3-8b-dpo", cost: 0 },
    { id: "socrates_qwen25_14b_sft", name: "Socrates-Qwen-14B-SFT (T=0.6)", family: "general", base: "socratesft/qwen2.5-14b-sft", cost: 0 },
    { id: "socrates_qwen25_14b_dpo", name: "Socrates-Qwen-14B-DPO (T=0.6)", family: "general", base: "socratesft/qwen2.5-14b-dpo", cost: 0 },
    // API models (cost = total API spend for full eval in USD)
    { id: "gpt5_4", name: "GPT 5.4", family: "api", base: "gpt-5.4", cost: 13.4 },
    { id: "gpt5_4_high", name: "GPT 5.4 (high)", family: "api", base: "gpt-5.4", cost: 13.4 },
    { id: "gpt5_4_mini", name: "GPT 5.4 mini", family: "api", base: "gpt-5.4-mini", cost: 2.08 },
    { id: "gpt5_4_mini_high", name: "GPT 5.4 mini (high)", family: "api", base: "gpt-5.4-mini", cost: 2.08 },
    { id: "gpt4_1", name: "GPT 4.1", family: "api", base: "gpt-4.1", cost: 10.39 },
    { id: "claude_opus", name: "Claude Opus 4.6", family: "api", base: "claude-opus-4-6", cost: 90.65 },
    { id: "claude_sonnet", name: "Claude Sonnet 4.6", family: "api", base: "claude-sonnet-4-6", cost: 18.13 },
    { id: "claude_haiku", name: "Claude Haiku 4.5", family: "api", base: "claude-haiku-4-5", cost: 4.83 },
    { id: "deepseek_v3_2", name: "DeepSeek V3.2", family: "api", base: "DeepSeek-V3.2", cost: 1.5 },
    { id: "gemini_flash_lite", name: "Gemini 3.1 Flash", family: "api", base: "gemini-3.1-flash-lite-preview", cost: 0.46 },
    { id: "gemini_pro", name: "Gemini 3.1 Pro", family: "api", base: "gemini-3.1-pro-preview", cost: 7.13 },
  ],

  scenarios: [
    // -- Individual-Level Alignment --
    { id: "ml_multiround_mae", name: "Multi-Round Pred.", fullName: "Multi-round game behavior prediction", metric: "Avg MAE", direction: "lower", level: "individual", category: "predict_behavior" },
    { id: "ml_acrossgame_mae", name: "Across-Ctx Pred.", fullName: "Single-round game behavior prediction given observations from other games", metric: "Avg MAE", direction: "lower", level: "individual", category: "predict_behavior" },
    { id: "ho_pp_multiround_f1", name: "Multi-Round Pred. (Push/Pull)", fullName: "Push/Pull multi-round prediction", metric: "F1", direction: "higher", level: "individual", category: "predict_behavior" },
    { id: "ho_pp_acrossgame_f1", name: "Across-Ctx Pred. (Push/Pull)", fullName: "Push/Pull across-game prediction", metric: "F1", direction: "higher", level: "individual", category: "predict_behavior" },
    { id: "bf_pers_score", name: "Demo. To Pers.", fullName: "Personality score prediction given demographics", metric: "MAE", direction: "lower", level: "individual", category: "infer_characteristics" },
    { id: "bf_acrossdim", name: "Across-Dim Pers. Pred.", fullName: "Personality score prediction given scores from other dimensions", metric: "MAE", direction: "lower", level: "individual", category: "infer_characteristics" },
    { id: "bf_singleq_acc", name: "Demo. To Resp.", fullName: "Survey response prediction given demographics", metric: "Accuracy", direction: "higher", level: "individual", category: "predict_behavior" },
    { id: "bf_missing_acc", name: "Masked Resp. Pred.", fullName: "Masked survey response prediction", metric: "Accuracy", direction: "higher", level: "individual", category: "predict_behavior" },
    { id: "bf_sequential_acc", name: "Seq. Resp. Pred.", fullName: "Sequential survey response prediction", metric: "Accuracy", direction: "higher", level: "individual", category: "predict_behavior" },
    { id: "bf_age", name: "Pers. To Demo.", fullName: "Age prediction given personality scores", metric: "MAE", direction: "lower", level: "individual", category: "infer_characteristics" },
    { id: "sg_winrate", name: "Strategic Game Play", fullName: "Strategic game play", metric: "Win Rate %", direction: "higher", level: "individual", category: "strategic_reasoning" },
    { id: "wf_bleurt", name: "Sci. Workflow Pred.", fullName: "Scientific workflow prediction", metric: "BLEURT", direction: "higher", level: "individual", category: "knowledge_reasoning" },
    { id: "ho_ieo", name: "Economics Contest", fullName: "Economics contest problem solving", metric: "Accuracy %", direction: "higher", level: "individual", category: "knowledge_reasoning" },

    // -- Distributional Alignment --
    { id: "ml_game", name: "Game Behav. Sim.", fullName: "Single-round game behavior simulation", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "ml_multiround", name: "Multi-Round Pred.", fullName: "Multi-round game behavior prediction", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "ml_acrossgame", name: "Across-Ctx Pred.", fullName: "Single-round game behavior prediction given observations from other games", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "ho_pushpull", name: "Game Behav. Sim. (Push/Pull)", fullName: "Push/Pull single-round simulation", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "ho_pp_multiround_wd", name: "Multi-Round Pred. (Push/Pull)", fullName: "Push/Pull multi-round prediction", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "ho_pp_acrossgame_wd", name: "Across-Ctx Pred. (Push/Pull)", fullName: "Push/Pull across-game prediction", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "bf_pers_score_wdist", name: "Demo. To Pers.", fullName: "Personality score prediction given demographics", metric: "W Distance", direction: "lower", level: "distributional", category: "infer_characteristics" },
    { id: "bf_acrossdim_wdist", name: "Across-Dim Pers. Pred.", fullName: "Personality score prediction given scores from other dimensions", metric: "W Distance", direction: "lower", level: "distributional", category: "infer_characteristics" },
    { id: "bf_singleq_wdist", name: "Demo. To Resp.", fullName: "Survey response prediction given demographics", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "bf_missing_wdist", name: "Masked Resp. Pred.", fullName: "Masked survey response prediction", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "bf_sequential_wdist", name: "Seq. Resp. Pred.", fullName: "Sequential survey response prediction", metric: "W Distance", direction: "lower", level: "distributional", category: "predict_behavior" },
    { id: "bf_age_wdist", name: "Pers. To Demo.", fullName: "Age prediction given personality scores", metric: "W Distance", direction: "lower", level: "distributional", category: "infer_characteristics" },
  ],

  // flags[modelId][scenarioId] = failed parse rate (only present when > threshold)
  flags: {
  },

  // results[modelId][scenarioId] = raw metric value (null = missing/pending eval)
  // n_v1 for MobLab/BigFive, full-set for IEO/workflow
  results: {
    qwen3_4b: {
      // Individual
      ml_multiround_mae: 19.9105, ml_acrossgame_mae: 25.4692, ho_pp_multiround_f1: 0.6233, ho_pp_acrossgame_f1: 0.5032, bf_pers_score: 7.31159, bf_acrossdim: 7.64127, bf_singleq_acc: 0.24315, bf_missing_acc: 0.37178, bf_sequential_acc: 0.37011, bf_age: 11.235, sg_winrate: 0.094, wf_bleurt: 0.4504, ho_ieo: 73.871,
      // Distributional
      ml_game: 27.9577, ml_multiround: 14.3627, ml_acrossgame: 21.4024, ho_pushpull: 18.1759, ho_pp_multiround_wd: 4, ho_pp_acrossgame_wd: 9.4667, bf_pers_score_wdist: 5.14475, bf_acrossdim_wdist: 5.20888, bf_singleq_wdist: 1.13915, bf_missing_wdist: 0.65537, bf_sequential_wdist: 0.64659, bf_age_wdist: 10.439,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 34, ho_pp_acrossgame_mae: 47.3333,
    },
    befm15_4b_v3: {
      // Individual
      ml_multiround_mae: 16.4214, ml_acrossgame_mae: 24.978, ho_pp_multiround_f1: 0.618, ho_pp_acrossgame_f1: 0.4739, bf_pers_score: 7.5277, bf_acrossdim: 6.95942, bf_singleq_acc: 0.28318, bf_missing_acc: 0.45255, bf_sequential_acc: 0.41389, bf_age: 9.665, sg_winrate: 0.487, wf_bleurt: 0.4683, ho_ieo: 52.4194,
      // Distributional
      ml_game: 6.4695, ml_multiround: 3.8319, ml_acrossgame: 6.2284, ho_pushpull: 8.6759, ho_pp_multiround_wd: 17.4, ho_pp_acrossgame_wd: 5.6, bf_pers_score_wdist: 1.79202, bf_acrossdim_wdist: 1.60582, bf_singleq_wdist: 0.43206, bf_missing_wdist: 0.32078, bf_sequential_wdist: 0.3565, bf_age_wdist: 4.917,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 30.6, ho_pp_acrossgame_mae: 50.9333,
    },
    befm15_4b_v3_5runs: {
      // Individual
      ml_multiround_mae: 16.4077, ml_acrossgame_mae: 24.6935, ho_pp_multiround_f1: 0.6061, ho_pp_acrossgame_f1: 0.4853, bf_pers_score: 7.41788, bf_acrossdim: 6.97072, bf_singleq_acc: 0.28425, bf_missing_acc: 0.44692, bf_sequential_acc: 0.39945, bf_age: 9.5192, sg_winrate: 0.4772, wf_bleurt: 0.4683, ho_ieo: 53.3226,
      // Distributional
      ml_game: 6.8451, ml_multiround: 4.2881, ml_acrossgame: 6.2567, ho_pushpull: 8.6152, ho_pp_multiround_wd: 15.48, ho_pp_acrossgame_wd: 3.4133, bf_pers_score_wdist: 1.77374, bf_acrossdim_wdist: 1.56376, bf_singleq_wdist: 0.42249, bf_missing_wdist: 0.34032, bf_sequential_wdist: 0.36212, bf_age_wdist: 4.786,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 32.2, ho_pp_acrossgame_mae: 50.1867,
    },
    befm1_8b: {
      // Individual
      ml_multiround_mae: 30.5422, ml_acrossgame_mae: 28.6217, ho_pp_multiround_f1: 0.4047, ho_pp_acrossgame_f1: 0.1039, bf_pers_score: 7.83535, bf_acrossdim: 8.22689, bf_singleq_acc: 0.21593, bf_missing_acc: 0.24384, bf_sequential_acc: 0.27076, bf_age: 9.589, sg_winrate: 0.021, wf_bleurt: 0.4347, ho_ieo: 41.7742,
      // Distributional
      ml_game: 6.0546, ml_multiround: 8.918, ml_acrossgame: 5.9353, ho_pushpull: 30.8241, ho_pp_multiround_wd: 36.6, ho_pp_acrossgame_wd: 1.1765, bf_pers_score_wdist: 1.95148, bf_acrossdim_wdist: 2.53046, bf_singleq_wdist: 0.59709, bf_missing_wdist: 0.61578, bf_sequential_wdist: 0.59078, bf_age_wdist: 5.575,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 59, ho_pp_acrossgame_mae: 89.6,
    },
    befm1_70b: {
      // Individual
      ml_multiround_mae: 29.4855, ml_acrossgame_mae: 27.9774, ho_pp_multiround_f1: 0.4941, ho_pp_acrossgame_f1: 0.098, bf_pers_score: 7.7927, bf_acrossdim: 8.56344, bf_singleq_acc: 0.2232, bf_missing_acc: 0.3407, bf_sequential_acc: 0.31399, bf_age: 9.474, sg_winrate: 0.015, wf_bleurt: 0.4458, ho_ieo: 60.4839,
      // Distributional
      ml_game: 5.9294, ml_multiround: 7.9546, ml_acrossgame: 4.9085, ho_pushpull: 30.8241, ho_pp_multiround_wd: 13.2, ho_pp_acrossgame_wd: 28.75, bf_pers_score_wdist: 1.91903, bf_acrossdim_wdist: 2.72073, bf_singleq_wdist: 0.48668, bf_missing_wdist: 0.49063, bf_sequential_wdist: 0.45542, bf_age_wdist: 5.478,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 49.6, ho_pp_acrossgame_mae: 90.1333,
    },
    llama_70b: {
      // Individual
      ml_multiround_mae: 23.2296, ml_acrossgame_mae: 23.5797, ho_pp_multiround_f1: 0.4527, ho_pp_acrossgame_f1: 0.51, bf_pers_score: 6.90034, bf_acrossdim: 8.34673, bf_singleq_acc: 0.2839, bf_missing_acc: 0.43853, bf_sequential_acc: 0.37663, bf_age: 9.29, sg_winrate: 0.065, wf_bleurt: 0.4301, ho_ieo: 65.8065,
      // Distributional
      ml_game: 21.5757, ml_multiround: 15.6736, ml_acrossgame: 14.38, ho_pushpull: 45.3241, ho_pp_multiround_wd: 12.8, ho_pp_acrossgame_wd: 18.6667, bf_pers_score_wdist: 5.17695, bf_acrossdim_wdist: 5.19155, bf_singleq_wdist: 1.01698, bf_missing_wdist: 0.46607, bf_sequential_wdist: 0.59136, bf_age_wdist: 7.672,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 53.6, ho_pp_acrossgame_mae: 48.8,
    },
    befm15_70b_v3: {
      // Individual
      ml_multiround_mae: 16.7223, ml_acrossgame_mae: 25.6218, ho_pp_multiround_f1: 0.6738, ho_pp_acrossgame_f1: 0.4956, bf_pers_score: 7.26556, bf_acrossdim: 6.80398, bf_singleq_acc: 0.30105, bf_missing_acc: 0.44791, bf_sequential_acc: 0.39899, bf_age: 9.405, sg_winrate: 0.488, wf_bleurt: 0.4771, ho_ieo: 74.0323,
      // Distributional
      ml_game: 6.6272, ml_multiround: 3.3796, ml_acrossgame: 6.218, ho_pushpull: 15.3241, ho_pp_multiround_wd: 5.2, ho_pp_acrossgame_wd: 9.6, bf_pers_score_wdist: 2.37074, bf_acrossdim_wdist: 1.7929, bf_singleq_wdist: 0.44083, bf_missing_wdist: 0.35731, bf_sequential_wdist: 0.38084, bf_age_wdist: 6.421,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 29.2, ho_pp_acrossgame_mae: 50.4,
    },
    befm15_70b_v3_5runs: {
      // Individual
      ml_multiround_mae: 16.1821, ml_acrossgame_mae: 25.0179, ho_pp_multiround_f1: 0.6599, ho_pp_acrossgame_f1: 0.5001, bf_pers_score: 7.17305, bf_acrossdim: 6.7665, bf_singleq_acc: 0.28605, bf_missing_acc: 0.4492, bf_sequential_acc: 0.40434, bf_age: 9.3756, sg_winrate: 0.501, wf_bleurt: 0.4771, ho_ieo: 72.9677,
      // Distributional
      ml_game: 7.1629, ml_multiround: 3.5851, ml_acrossgame: 6.0061, ho_pushpull: 23.0648, ho_pp_multiround_wd: 3.12, ho_pp_acrossgame_wd: 10.7733, bf_pers_score_wdist: 2.30234, bf_acrossdim_wdist: 1.67923, bf_singleq_wdist: 0.44167, bf_missing_wdist: 0.33, bf_sequential_wdist: 0.36008, bf_age_wdist: 6.596,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 30.88, ho_pp_acrossgame_mae: 49.9733,
    },
    centaur_70b: {
      // Individual
      ml_multiround_mae: 21.6837, ml_acrossgame_mae: 27.2685, ho_pp_multiround_f1: 0.5101, ho_pp_acrossgame_f1: 0.4714, bf_pers_score: 9.77742, bf_acrossdim: 9.3214, bf_singleq_acc: 0.2474, bf_missing_acc: 0.36118, bf_sequential_acc: 0.3307, bf_age: 10.59664, sg_winrate: 0.041, wf_bleurt: 0.4298, ho_ieo: 37.7419,
      // Distributional
      ml_game: 15.7753, ml_multiround: 8.8056, ml_acrossgame: 12.5069, ho_pushpull: 26, ho_pp_multiround_wd: 27, ho_pp_acrossgame_wd: 24.8, bf_pers_score_wdist: 3.23221, bf_acrossdim_wdist: 3.82967, bf_singleq_wdist: 0.42878, bf_missing_wdist: 0.4859, bf_sequential_wdist: 0.48447, bf_age_wdist: 5.18279,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 34.6, ho_pp_acrossgame_mae: 45.6,
    },
    socrates_llama3_8b_sft: {
      // Individual
      ml_multiround_mae: 30.9131, ml_acrossgame_mae: 29.906, ho_pp_multiround_f1: 0, ho_pp_acrossgame_f1: 0, bf_pers_score: 13.296, bf_acrossdim: 12.38867, bf_singleq_acc: 0.24042, bf_missing_acc: 0.24029, bf_sequential_acc: 0.23519, bf_age: 12.634, sg_winrate: 0.021, wf_bleurt: 0.026, ho_ieo: 0,
      // Distributional
      ml_game: 11.2466, ml_multiround: 17.0899, ml_acrossgame: 9.6362, ho_pushpull: 57, ho_pp_multiround_wd: 50.8, ho_pp_acrossgame_wd: 54.2667, bf_pers_score_wdist: 10.37504, bf_acrossdim_wdist: 9.46734, bf_singleq_wdist: 0.55064, bf_missing_wdist: 0.66777, bf_sequential_wdist: 0.61753, bf_age_wdist: 4.806,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 100, ho_pp_acrossgame_mae: 100,
    },
    socrates_llama3_8b_dpo: {
      // Individual
      ml_multiround_mae: 22.8972, ml_acrossgame_mae: 24.0492, ho_pp_multiround_f1: 0.4127, ho_pp_acrossgame_f1: 0.3597, bf_pers_score: 8.68014, bf_acrossdim: 8.641, bf_singleq_acc: 0.24748, bf_missing_acc: 0.28422, bf_sequential_acc: 0.25889, bf_age: 9.568, sg_winrate: 0.031, wf_bleurt: 0.4259, ho_ieo: 39.6774,
      // Distributional
      ml_game: 22.5553, ml_multiround: 16.776, ml_acrossgame: 18.1943, ho_pushpull: 57, ho_pp_multiround_wd: 40.121, ho_pp_acrossgame_wd: 46.8835, bf_pers_score_wdist: 6.14402, bf_acrossdim_wdist: 6.73142, bf_singleq_wdist: 0.93409, bf_missing_wdist: 0.76005, bf_sequential_wdist: 0.9582, bf_age_wdist: 5.968,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 57.8, ho_pp_acrossgame_mae: 56.8,
    },
    socrates_qwen25_14b_sft: {
      // Individual
      ml_multiround_mae: 26.7673, ml_acrossgame_mae: 28.7321, ho_pp_multiround_f1: 0, ho_pp_acrossgame_f1: 0, bf_pers_score: 8.99489, bf_acrossdim: 9.83728, bf_singleq_acc: 0.23763, bf_missing_acc: 0.26208, bf_sequential_acc: 0.23826, bf_age: 11.049, sg_winrate: 0.017, wf_bleurt: 0.0238, ho_ieo: 0,
      // Distributional
      ml_game: 13.0562, ml_multiround: 10.8582, ml_acrossgame: 9.8053, ho_pushpull: 57, ho_pp_multiround_wd: 50.8, ho_pp_acrossgame_wd: 54.2667, bf_pers_score_wdist: 3.76601, bf_acrossdim_wdist: 4.89552, bf_singleq_wdist: 0.69453, bf_missing_wdist: 0.68964, bf_sequential_wdist: 0.70605, bf_age_wdist: 3.689,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 100, ho_pp_acrossgame_mae: 100,
    },
    socrates_qwen25_14b_dpo: {
      // Individual
      ml_multiround_mae: 18.9765, ml_acrossgame_mae: 21.9038, ho_pp_multiround_f1: 0.5704, ho_pp_acrossgame_f1: 0.4672, bf_pers_score: 8.09029, bf_acrossdim: 8.98331, bf_singleq_acc: 0.23902, bf_missing_acc: 0.37778, bf_sequential_acc: 0.35276, bf_age: 10.464, sg_winrate: 0.083, wf_bleurt: 0.4481, ho_ieo: 70.3226,
      // Distributional
      ml_game: 22.1008, ml_multiround: 12.7982, ml_acrossgame: 17.6157, ho_pushpull: 3.6, ho_pp_multiround_wd: 26, ho_pp_acrossgame_wd: 18.8, bf_pers_score_wdist: 6.46329, bf_acrossdim_wdist: 6.85057, bf_singleq_wdist: 1.01435, bf_missing_wdist: 0.56011, bf_sequential_wdist: 0.70733, bf_age_wdist: 7.834,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 30.8, ho_pp_acrossgame_mae: 48.1333,
    },
    gpt5_4: {
      // Individual
      ml_multiround_mae: 16.3922, ml_acrossgame_mae: 24.8836, ho_pp_multiround_f1: 0.6459, ho_pp_acrossgame_f1: 0.4444, bf_pers_score: 7.09556, bf_acrossdim: 7.36438, bf_singleq_acc: 0.28989, bf_missing_acc: 0.463, bf_sequential_acc: 0.41831, bf_age: 11.571, sg_winrate: 0.108, wf_bleurt: 0.4645, ho_ieo: 79.6774,
      // Distributional
      ml_game: 24.789, ml_multiround: 7.6953, ml_acrossgame: 15.4142, ho_pushpull: 43, ho_pp_multiround_wd: 10.4, ho_pp_acrossgame_wd: 33.8667, bf_pers_score_wdist: 5.9486, bf_acrossdim_wdist: 5.32275, bf_singleq_wdist: 0.88202, bf_missing_wdist: 0.42039, bf_sequential_wdist: 0.49139, bf_age_wdist: 8.377,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 30.4, ho_pp_acrossgame_mae: 43.7333,
    },
    gpt5_4_high: {
      // Individual
      ml_multiround_mae: 19.6811, ml_acrossgame_mae: 23.7893, ho_pp_multiround_f1: 0.544, ho_pp_acrossgame_f1: 0.4086, bf_pers_score: 7.44244, bf_acrossdim: 7.26258, bf_singleq_acc: 0.29578, bf_missing_acc: 0.47335, bf_sequential_acc: 0.42356, bf_age: 10.542, sg_winrate: 0.085, wf_bleurt: 0.4623, ho_ieo: 95.6452,
      // Distributional
      ml_game: 30.0688, ml_multiround: 13.2639, ml_acrossgame: 11.1556, ho_pushpull: 42, ho_pp_multiround_wd: 28.6, ho_pp_acrossgame_wd: 37.2, bf_pers_score_wdist: 5.70107, bf_acrossdim_wdist: 4.40115, bf_singleq_wdist: 0.90216, bf_missing_wdist: 0.38208, bf_sequential_wdist: 0.46063, bf_age_wdist: 4.05,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 31.4, ho_pp_acrossgame_mae: 44.6667,
    },
    gpt5_4_mini: {
      // Individual
      ml_multiround_mae: 17.6918, ml_acrossgame_mae: 28.1302, ho_pp_multiround_f1: 0.5992, ho_pp_acrossgame_f1: 0.4773, bf_pers_score: 7.20514, bf_acrossdim: 7.16858, bf_singleq_acc: 0.26618, bf_missing_acc: 0.40373, bf_sequential_acc: 0.40733, bf_age: 10.893, sg_winrate: 0.103, wf_bleurt: 0.4553, ho_ieo: 68.0645,
      // Distributional
      ml_game: 22.3993, ml_multiround: 9.6663, ml_acrossgame: 16.9625, ho_pushpull: 36.8, ho_pp_multiround_wd: 0.4, ho_pp_acrossgame_wd: 23.4667, bf_pers_score_wdist: 6.13741, bf_acrossdim_wdist: 5.11652, bf_singleq_wdist: 0.90683, bf_missing_wdist: 0.49473, bf_sequential_wdist: 0.51412, bf_age_wdist: 9.003,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 37.2, ho_pp_acrossgame_mae: 45.6,
    },
    gpt5_4_mini_high: {
      // Individual
      ml_multiround_mae: 21.779, ml_acrossgame_mae: 25.3066, ho_pp_multiround_f1: 0.4014, ho_pp_acrossgame_f1: 0.3612, bf_pers_score: 7.16741, bf_acrossdim: 7.38175, bf_singleq_acc: 0.28761, bf_missing_acc: 0.44317, bf_sequential_acc: 0.41703, bf_age: 10.9, sg_winrate: 0.102, wf_bleurt: 0.4538, ho_ieo: 93.2258,
      // Distributional
      ml_game: 27.4069, ml_multiround: 15.1569, ml_acrossgame: 14.7835, ho_pushpull: 42, ho_pp_multiround_wd: 34.6, ho_pp_acrossgame_wd: 43.3333, bf_pers_score_wdist: 5.53253, bf_acrossdim_wdist: 5.0156, bf_singleq_wdist: 0.91333, bf_missing_wdist: 0.45775, bf_sequential_wdist: 0.4852, bf_age_wdist: 6.128,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 37, ho_pp_acrossgame_mae: 44.1333,
    },
    gpt4_1: {
      // Individual
      ml_multiround_mae: 16.074, ml_acrossgame_mae: 24.0237, ho_pp_multiround_f1: 0.6601, ho_pp_acrossgame_f1: 0.4668, bf_pers_score: 6.86808, bf_acrossdim: 7.21385, bf_singleq_acc: 0.29233, bf_missing_acc: 0.46392, bf_sequential_acc: 0.38953, bf_age: 10.625, sg_winrate: 0.167, wf_bleurt: 0.4602, ho_ieo: 78.3871,
      // Distributional
      ml_game: 25.3965, ml_multiround: 7.1064, ml_acrossgame: 14.418, ho_pushpull: 44.5, ho_pp_multiround_wd: 5.6, ho_pp_acrossgame_wd: 30.9333, bf_pers_score_wdist: 4.91897, bf_acrossdim_wdist: 3.9324, bf_singleq_wdist: 0.79362, bf_missing_wdist: 0.37731, bf_sequential_wdist: 0.47569, bf_age_wdist: 4.007,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 32.4, ho_pp_acrossgame_mae: 51.4667,
    },
    claude_opus: {
      // Individual
      ml_multiround_mae: 17.3969, ml_acrossgame_mae: 22.0768, ho_pp_multiround_f1: 0.6666, ho_pp_acrossgame_f1: 0.3184, bf_pers_score: 7.00245, bf_acrossdim: 6.72587, bf_singleq_acc: 0.29718, bf_missing_acc: 0.45105, bf_sequential_acc: 0.41841, bf_age: 13.285, sg_winrate: 0.152, wf_bleurt: 0.4775, ho_ieo: 95.6452,
      // Distributional
      ml_game: 22.13, ml_multiround: 11.8342, ml_acrossgame: 15.817, ho_pushpull: 57, ho_pp_multiround_wd: 10.4, ho_pp_acrossgame_wd: 54.2667, bf_pers_score_wdist: 5.18483, bf_acrossdim_wdist: 4.4931, bf_singleq_wdist: 0.85969, bf_missing_wdist: 0.36968, bf_sequential_wdist: 0.43295, bf_age_wdist: 8.473,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 32.4, ho_pp_acrossgame_mae: 56.1333,
    },
    claude_sonnet: {
      // Individual
      ml_multiround_mae: 17.2954, ml_acrossgame_mae: 21.5531, ho_pp_multiround_f1: 0.6875, ho_pp_acrossgame_f1: 0.3525, bf_pers_score: 7.58442, bf_acrossdim: 7.2025, bf_singleq_acc: 0.28608, bf_missing_acc: 0.4666, bf_sequential_acc: 0.4184, bf_age: 14.498, sg_winrate: 0.169, wf_bleurt: 0.4725, ho_ieo: 83.0645,
      // Distributional
      ml_game: 20.59, ml_multiround: 11.9907, ml_acrossgame: 15.3798, ho_pushpull: 57, ho_pp_multiround_wd: 0.8, ho_pp_acrossgame_wd: 50.6667, bf_pers_score_wdist: 5.83024, bf_acrossdim_wdist: 4.36611, bf_singleq_wdist: 0.85553, bf_missing_wdist: 0.3588, bf_sequential_wdist: 0.44824, bf_age_wdist: 8.724,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 28.8, ho_pp_acrossgame_mae: 55.2,
    },
    claude_haiku: {
      // Individual
      ml_multiround_mae: 19.5628, ml_acrossgame_mae: 22.8289, ho_pp_multiround_f1: 0.6631, ho_pp_acrossgame_f1: 0.4748, bf_pers_score: 7.64205, bf_acrossdim: 7.16678, bf_singleq_acc: 0.25998, bf_missing_acc: 0.44703, bf_sequential_acc: 0.40183, bf_age: 11.814, sg_winrate: 0.13, wf_bleurt: 0.4284, ho_ieo: 70,
      // Distributional
      ml_game: 21.9796, ml_multiround: 14.2533, ml_acrossgame: 16.1918, ho_pushpull: 44.5, ho_pp_multiround_wd: 0, ho_pp_acrossgame_wd: 26.4, bf_pers_score_wdist: 5.94424, bf_acrossdim_wdist: 4.59236, bf_singleq_wdist: 0.92992, bf_missing_wdist: 0.42585, bf_sequential_wdist: 0.52224, bf_age_wdist: 6.002,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 31.2, ho_pp_acrossgame_mae: 51.4667,
    },
    deepseek_v3_2: {
      // Individual
      ml_multiround_mae: 19.6813, ml_acrossgame_mae: 24.2709, ho_pp_multiround_f1: 0.6765, ho_pp_acrossgame_f1: 0.4706, bf_pers_score: 7.26792, bf_acrossdim: 7.50554, bf_singleq_acc: 0.27187, bf_missing_acc: 0.40635, bf_sequential_acc: 0.36152, bf_age: 10.703, sg_winrate: 0.137, wf_bleurt: 0.4304, ho_ieo: 74.3548,
      // Distributional
      ml_game: 16.7292, ml_multiround: 11.1113, ml_acrossgame: 12.2289, ho_pushpull: 18, ho_pp_multiround_wd: 3, ho_pp_acrossgame_wd: 12.9333, bf_pers_score_wdist: 5.1158, bf_acrossdim_wdist: 4.60557, bf_singleq_wdist: 0.76124, bf_missing_wdist: 0.47495, bf_sequential_wdist: 0.53915, bf_age_wdist: 7.569,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 29.4, ho_pp_acrossgame_mae: 52.9333,
    },
    gemini_flash_lite: {
      // Individual
      ml_multiround_mae: 20.6494, ml_acrossgame_mae: 26.3809, ho_pp_multiround_f1: 0.3731, ho_pp_acrossgame_f1: 0.4155, bf_pers_score: 7.06321, bf_acrossdim: 7.10371, bf_singleq_acc: 0.30474, bf_missing_acc: 0.46332, bf_sequential_acc: 0.40512, bf_age: 14.01, sg_winrate: 0.14, wf_bleurt: 0.4319, ho_ieo: 77.5806,
      // Distributional
      ml_game: 28.4197, ml_multiround: 13.9747, ml_acrossgame: 14.2893, ho_pushpull: 54, ho_pp_multiround_wd: 50.8, ho_pp_acrossgame_wd: 41.0667, bf_pers_score_wdist: 4.78408, bf_acrossdim_wdist: 4.97679, bf_singleq_wdist: 0.82239, bf_missing_wdist: 0.40916, bf_sequential_wdist: 0.5212, bf_age_wdist: 8.17,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 59.2, ho_pp_acrossgame_mae: 53.6,
    },
    gemini_pro: {
      // Individual
      ml_multiround_mae: 18.8286, ml_acrossgame_mae: 24.1603, ho_pp_multiround_f1: 0.7153, ho_pp_acrossgame_f1: 0.4905, bf_pers_score: 6.40162, bf_acrossdim: 6.82004, bf_singleq_acc: 0.30488, bf_missing_acc: 0.48468, bf_sequential_acc: 0.42511, bf_age: 10.541, sg_winrate: 0.123, wf_bleurt: 0.4701, ho_ieo: 95.6452,
      // Distributional
      ml_game: 22.1308, ml_multiround: 12.1231, ml_acrossgame: 9.6592, ho_pushpull: 15, ho_pp_multiround_wd: 15, ho_pp_acrossgame_wd: 15.3333, bf_pers_score_wdist: 4.38455, bf_acrossdim_wdist: 3.59805, bf_singleq_wdist: 0.75072, bf_missing_wdist: 0.36015, bf_sequential_wdist: 0.45981, bf_age_wdist: 1.667,
      // Merge Push/Pull extras (data-only; consumed by leaderboard toggle)
      ml_multiround_mae_n: 7, ml_acrossgame_mae_n: 8, ml_multiround_n: 7, ml_acrossgame_n: 8, ml_game_n: 8, ho_pp_multiround_mae: 23.4, ho_pp_acrossgame_mae: 47.0667,
    },
  },
};
