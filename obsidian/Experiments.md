---
aliases: [Experiment log]
tags: [experiments, results, capstone]
---

# Experiments

> [!warning] Read this before the tables
> Every result below is on **synthetic** sine/spike workloads unless explicitly labelled
> otherwise. Real-trace claims are deliberately absent until the held-out split is touched
> once, after tuning is frozen.

## Protocol

- Controllers: 7 baselines + trained PPO/DQN agents
- Workloads: `sine`, `spike` (synthetic)
- Seeds: 0–9 (10 runs per controller)
- Episode: 500 steps
- Aggregation: IQM with 95% percentile bootstrap CI (2,000 resamples, seeded)
- Difference rule: overlapping CIs = **no proven difference**

## Learning curves

PPO and DQN, 3 seeds each, 50,000 training steps on `sine`. Per-episode reward is logged to
CSV by an SB3 callback and plotted with a shaded min/max band.

![[Figures/learning-curves.png]]

> [!warning] What the curves actually say
> PPO improves quickly in the first ~10k steps, but one of three seeds diverges to about
> −4,500 final episode reward while the other two finish near −400. DQN stays essentially flat
> near −4,545. This is a *learning* result, not yet a *beats-HPA* result — see
> [[Findings and Changes]]. Three seeds are not enough to decide anything, which is why the
> final table uses ten.

## Trained agents vs baselines

The final 10-seed leaderboard, including IQM and confidence intervals, is written here once
the evaluation completes. The earlier 5,000-step checkpoints are kept as a cautionary row:
they were worse than almost every baseline. That was a training-budget finding, not an RL
failure — see [[Findings and Changes]].

## Ablations

| ID | Change | Question |
|---|---|---|
| A1 | `w_cost = 0` | Does the policy still shed idle replicas when cost is free? |
| A2 | `w_sla = 0` | If it still looks good, was the dominant SLA term decoration? |
| A4 | Zero `obs[7]` (queue) | Is backlog awareness load-bearing? |

Each ablation is trained with 3 seeds and evaluated with the same harness.

## Figures available for reuse

- ![[Figures/latency_sine_seed0.png]]
- ![[Figures/replicas_sine_seed0.png]]

## Links

- [[Capstone - Adaptive Cloud Allocation]]
- [[How to Read the Numbers]]
- [[Findings and Changes]]
