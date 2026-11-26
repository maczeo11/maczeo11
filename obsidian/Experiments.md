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

Ten seeds, 500 steps, synthetic **sine** only. IQM with 95% bootstrap CI.

| Controller | Reward IQM [CI] | SLA% | p95(p95) ms | Cost | Osc |
|---|---|---|---|---|---|
| EWMA-Predictor | 109.31 [106.64, 110.20] | 2.6 | 88.5 | 0.17367 | 12.5 |
| **PPO seed 0** | **93.03 [90.48, 95.05]** | 2.6 | 88.6 | **0.17187** | **0.0** |
| Native-HPA-v2 | −99.92 [−103.50, −97.75] | 2.6 | 82.4 | 0.24980 | 0.0 |
| PPO seed 1 | −231.07 [−231.30, −230.89] | 2.6 | 69.7 | 0.32823 | 0.0 |
| PPO seed 2 / all DQN seeds | ≈ −2260 to −2280 | 100.0 | 150k–292k | 0.02–0.07 | 0–1 |

> [!warning] The honest sentence
> One PPO seed beats HPA on reward and cost with SLA parity and zero flapping. The other two
> PPO seeds and all three DQN seeds collapse. This is **not** "DRL beats HPA" as a general
> claim. EWMA still has the highest reward, but flaps 12.5 times; PPO seed 0 gets close with
> zero flapping. See [[How to Read the Numbers]].

## Ablations

Ten seeds each, synthetic sine. Three seeds trained per variant.

| ID | Change | Result | Reading |
|---|---|---|---|
| A1 | `w_cost = 0` | 2 of 3 seeds cost **more** (0.27983 vs 0.17187) | Cost term matters, but variance is high |
| A2 | `w_sla = 0` | **All 3 seeds: 100% SLA breach**, p95 ~198k–293k ms | Cleanest proof the SLA term is load-bearing |
| A4 | Zero `obs[7]` (queue) | 2 of 3 seeds collapse; 1 survives with cost 0.31213 | Queue feature matters, evidence weaker than A2 |

> [!quote] Human note
> The ablation I expected to be scariest (A2) gave the cleanest answer. The one I thought
> would be obvious (A1) was messy. The term I was most reluctant to remove was the one
> holding the policy up.

## Proportional scaling (Phase 1)

A second opt-in environment (`ContinuousCloudEnv`) implements Decision #16:
`Box([-0.3, 0.3])` with `round(a·replicas)`, a deadband for tiny actions, and
bounds 1..20. 10 seeds × sine + spike + dual_freq:

> [!warning] Honest verdict
> PPO seed 1 beats the *simplified* HPA on reward and cost with SLA parity, but its reward
> CI **overlaps** the faithful multi-pod HPA. It is worse on p95 (511.5 vs 459.2 ms) and
> flaps 44.9 times/episode vs 0. Two of three PPO seeds collapse to 100% SLA breach.
> Proportional scaling is now usable end-to-end; it is **not** proof of beating HPA.

The next levers are training budget, action smoothing / a stronger oscillation penalty,
then a live `kind` comparison. Leader election comes only after the Go controller exists.

## Figures available for reuse

- ![[Figures/latency_sine_seed0.png]]
- ![[Figures/replicas_sine_seed0.png]]

## Links

- [[Capstone - Adaptive Cloud Allocation]]
- [[How to Read the Numbers]]
- [[Findings and Changes]]
