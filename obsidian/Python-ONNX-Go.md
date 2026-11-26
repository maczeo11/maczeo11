---
aliases: [ONNX contract, Go autoscaler]
tags: [architecture, go, onnx, deployment]
---

# Python trains · ONNX contracts · Go executes

> [!important] Why this split
> Putting PyTorch inside a 10-second Kubernetes control loop is a bad trade: GIL, heavy
> dependencies, and a training stack in the hot path. ONNX is the boundary. Go is the actuator.

## Offline (Python)

- Gymnasium `CloudEnv` + PPO/DQN (Stable-Baselines3)
- Trained actor is exported to `policy.onnx`
- Normalization constants are **embedded in the ONNX metadata**, not in a side config — one
  atomic artifact, no config drift

## Live (Go)

1. 10-second reconcile loop
2. Prometheus scrape (5 s) → 8-d observation
3. ONNX Runtime inference (CGO bindings)
4. `Δreplicas = round(a · replicas)`, clamped to 1..20
5. Patch `Deployment.Spec.Replicas` via `client-go`

## Safety decisions

- 2-step (20 s) actuation delay before a new direction is applied
- Fail-safe hold if Prometheus queries fail
- Planned freshness guard: stale-but-successful metrics must also trigger hold
- Single active controller pod for the demo — [[Findings and Changes|leader election and model
  rollback are explicitly future work]], not hidden

> [!quote] Human note
> The most useful thing in the design doc was not the diagram. It was the second adversarial
> review that asked "what if a scrape arrives 200 ms late?" A 10-second PromQL window with a
> 5-second scrape can silently become one sample and `rate()` returns NaN. We widened it to
> 15 seconds. Boring detail; exactly the kind that breaks a live controller.

## Links

- [[Capstone - Adaptive Cloud Allocation]]
- [[Experiments]]
- [[Findings and Changes]]
