---
aliases: [Adaptive Cloud Allocation, DRL autoscaler]
tags: [capstone, systems, reinforcement-learning, kubernetes]
---

# Capstone — Adaptive Cloud Allocation

> [!abstract] The problem in one breath
> Static cloud allocation wastes capacity. Kubernetes HPA only reacts *after* utilization
> crosses a threshold, and its 5-minute scale-down window keeps idle pods alive. Bursts arrive
> first, latency spikes, and the SLA breaks.

## Objective

Learn a **proactive** scaling policy with deep RL that jointly optimizes:

| Objective | Target |
|---|---|
| Utilization | +15% |
| SLA violations | −40% |
| p95 tail latency | −20% |
| Resource wastage | −25% |
| Cost | −15% |
| Oscillation | reported / suppressed |

The reward is the actual thesis:

```
r = 1.0·U − 5.0·S − 0.5·L − 1.0·W − 0.3·C − 0.5·O
```

SLA violations dominate (−5.0). This is not "make latency zero" — it is "keep p95 ≤ 200 ms
while spending fewer replica-seconds".

## How it works

1. Gymnasium simulator replaying synthetic and later real cluster traces
2. 8-dimensional state: `[cpu, mem, req_rate, p95, replicas, cpu_alloc, mem_alloc, queue]`
3. PPO (primary) / DQN (baseline) choose a scaling action
4. Benchmark against seven baselines, including native HPA v2, with multi-seed statistics
5. Deploy the trained policy as [[Python-ONNX-Go|a Go controller]] on a live `kind` cluster

## My role

Lead architect: system architecture, MDP + reward design, and sim-to-real integration.
The code and results are private; these notes are the public, sanitized version.

## Links

- [[Python-ONNX-Go]] — runtime architecture
- [[Experiments]] — what actually ran
- [[Findings and Changes]] — mistakes and corrections
- [[How to Read the Numbers]] — statistics cheat sheet
