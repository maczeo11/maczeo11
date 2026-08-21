# PowerPoint Key Points — Intelligent Low-Resource MT System Using RLHF

---

## Slide 1: Title + Problem

- **Project:** Intelligent Low-Resource MT System Using RLHF
- **Problem:** Retraining MT models needs expensive annotated data + compute; low-resource Indic languages lack parallel corpora
- **Solution:** Feedback-driven Translation Memory — removes retraining from the loop entirely
- **What it is:** A platform with an ML core (70% system engineering, 30% ML)

---

## Slide 2: How It Works

```
User corrects a translation
        ↓
Correction → TM database + FAISS vector index
        ↓
Next similar sentence retrieves correction as context
        ↓
Model produces corrected form — NO RETRAINING
```

| Method | Compute | Latency |
|---|---|---|
| (a) Frozen baseline | — | — |
| **(b) TM → Retrieval** | **Negligible** | **Instant** |
| (c) LoRA fine-tune | GPU hours | Hours |
| (d) DPO | GPU hours | Hours |

**Claim:** Retrieval captures most gain of fine-tuning at 1/1000th compute, zero delay.

---

## Slide 3: System Architecture

- **Translation Service** — FastAPI + IndicTrans2, batching
- **Correction Interface** — UI for user corrections
- **Feedback Store** — Persistent correction storage
- **Update Pipeline** — Write-back to TM + vector index
- **Versioning** — Track model versions + TM snapshots
- **Evaluation** — BLEU/chrF/COMET scoring per update

**Base model:** IndicTrans2 / NLLB-600M distilled
**Data:** Samanantar, BPCC | **Eval:** FLORES-200, IN22

---

## Slide 4: Team (5 Members)

| Role | Work |
|---|---|
| You | ML core, retrieval system, evaluation |
| TM 1 | Correction UI frontend |
| TM 2 | Feedback store + write-back pipeline |
| TM 3 | TM versioning + deployment |
| TM 4 | Annotation + human study coordination |

Teammates are **structurally necessary** — human feedback needs humans producing feedback.

---

## Slide 5: 24-Week Roadmap

| Weeks | Deliverable |
|---|---|
| **1–3** | FastAPI + IndicTrans2 + baseline eval |
| **4–7** | **TM store + FAISS retrieval (safe submission point)** |
| **8–11** | **Correction UI + feedback loop (end-to-end system)** |
| **12–15** | LoRA + DPO arms for comparison |
| **16–19** | **Simulated experiments + forgetting analysis** |
| **20–21** | Human study — teammates correct ~200 sentences |
| **22–24** | Adaptive attention stretch, demo, writeup |

**Floor: Week 7** — working system regardless of experiment outcomes.

---

## Slide 6: Evaluation + Critical Guardrail

### Metrics
- **BLEU/chrF/COMET** — translation quality per adaptation arm
- **Terminology accuracy** — glossary compliance
- **Catastrophic forgetting** — held-out general text performance

### Guardrail
- **Dedupe TM index against FLORES/IN22 before first run**
- Retrieval leakage invalidates everything

### Simulated → Real
- Thousands of rounds via simulated corrections (held-out refs)
- 200 real human corrections from teammates for validation

---

## Slide 7: Connection to Spandan's Research

| Project | Role in This System |
|---|---|
| **#10 (this)** | Core — feedback-driven MT platform |
| **#145** | Retrieval mechanism (TM + vector index) |
| **#103** | Adaptive attention — stretch goal |

**Pitch:** One project covering three of his listings. Builds his research direction, not just one item off it.

---

## Slide 8: Risk Mitigation + Demo

### Risks
- Retrieval leakage → dedupe against eval sets
- PPO instability → avoid PPO entirely
- Scope creep → Week 7 floor guarantees a system
- Team dependency → each role is independent

### Demo Plan
1. Live translation via FastAPI
2. User corrects → correction stored
3. Next similar sentence uses correction as context
4. Side-by-side: frozen vs. retrieval-augmented vs. fine-tuned
5. Human study results with quality scores

---

## Slide 9: Closing

- Not an ML project — **a platform with an ML core**
- Removes retraining from the feedback loop
- Team has structurally honest roles
- Week 7 floor → guaranteed working system
- "Build systems that scale, write code that lasts."
