---
aliases: [Surprises, Mistakes log]
tags: [lessons, capstone, honest-notes]
---

# Findings → changes

> [!info] Why this note exists
> A result table tells you what worked. This note tells you what nearly went wrong and what
> I changed because of it. I kept it deliberately unpolished.

| Finding | Why it mattered | What I changed |
|---|---|---|
| DQN checkpoints were loaded with the PPO loader | Evaluation crashed before producing any result | Loader now routes by checkpoint name; regression test added |
| Learning-curve CSV had only a header | No episode info was emitted, so "convergence" was unmeasurable | Wrapped the env in SB3 `Monitor`; curve logging now works |
| GPU training warned it was wrong for an MLP, and was 3× slower | Reproducibility and time | Forced CPU for the MLP policies; 205 s → 67 s per run |
| 5,000-step agents were near the worst baseline | I almost concluded "PPO doesn't work" | Raised budget to 50,000 steps; first curve then showed learning |
| EWMA won reward while HPA won SLA | The problem is multi-objective, not a single score | Kept six separate reward terms and made ablations test them |
| Greedy-Oracle had great utilization but 19.7 flaps | A flapping policy can hide behind good averages | Kept oscillation as a first-class metric and reward term |
| Baseline CIs were wide and overlapping | 3 seeds cannot prove a difference | Final leaderboard uses 10 seeds; "no proven difference" is stated literally |
| Ablation runs would overwrite the headline checkpoint | I nearly lost my best model | Every run now has an explicit tag suffix |
| A4's queue-mask wrapper existed but had no CLI | The ablation could not be reproduced from one command | Wired `--zero_queue` through training and evaluation |
| One controller pod means no HA | An honest limitation, not a hidden one | Scoped as a demonstrator; leader election and rollback are future work |
| Final 10-seed run: only one of three PPO seeds beats HPA; all DQN seeds collapse | A general "DRL wins" claim would be false | Report per-seed results; DQN is documented as a weak baseline at this budget |
| Removing the SLA term collapsed every seed (A2) | The reward design was load-bearing, not decoration | Kept the locked 6-term reward; A2 is the viva proof |

## Human quirks

- The curve CSV was empty and I blamed the plotting library for ten minutes. It was the
  missing `Monitor`, not matplotlib.
- The agent's first "clever" behaviour was to keep ~20 pods permanently. Safe on SLA,
  useless on cost. The reward terms are what stop that.
- The DQN crash looked like a policy/math bug. It was a filename routing bug. Read the
  traceback before touching the science.
- I assumed 5,000 steps was enough. It very much was not.

## Links

- [[Experiments]]
- [[Capstone - Adaptive Cloud Allocation]]
