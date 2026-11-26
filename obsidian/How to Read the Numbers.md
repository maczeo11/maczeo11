---
aliases: [Statistics cheat sheet]
tags: [statistics, evaluation]
---

# How to read the numbers

> [!tip] Three rules
> 1. Headline latency is **p95**, never the mean.
> 2. Report **IQM**, not a bare mean — one bad seed should not decide the result.
> 3. If confidence intervals overlap, say **no proven difference**.

## Why IQM

IQM (interquartile mean) drops the worst 25% and best 25% of runs before averaging. With
10 seeds it is robust to one unlucky seed; with 3 seeds it degrades to an ordinary mean,
which is why the final comparison uses 10.

## Why bootstrap CIs

We resample our own runs 2,000 times with a fixed seed. If the resulting 95% interval for
one controller does not overlap another's, we have a real difference at this sample size.
If it overlaps, we do not have evidence — even when the point estimates look different.

## Why p95, not mean

A autoscaler can serve 99% of requests in 20 ms and still breach an SLA because 1% waited
in an ingress queue for 400 ms. The mean hides that. Tail latency is where the SLA lives.

## What we do not claim

- No claim from a single seed.
- No transfer of synthetic results to real traces.
- No "DRL beats HPA" until a multi-seed result with CIs says so.

## Links

- [[Experiments]]
- [[Capstone - Adaptive Cloud Allocation]]
