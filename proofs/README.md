# Proofs — how to verify every resume number

> **Repo:** `maczeo11/maczeo11` `main` — this folder is the single source of truth for `resume.tex:137,150-154,160-161`.
> Pin each pointer to a commit: `https://github.com/maczeo11/maczeo11/blob/<sha>/proofs/...`

## Quick verify (30 sec each)

| Claim | One-liner to prove | Artifact |
|---|---|---|
| PRAJNA M13 optimistic lock | `DynamoDBClientAdapter.ts:208` `ConditionExpression: '#v = :expectedVersion'` (private repo) | `proofs/prajna/cdk-snippet.txt`, `proofs/prajna/README.md` |
| PRAJNA M13 atomic create + idempotency guard | `DynamoDBClientAdapter.ts:100-125`, `ApprovalWorkflowEngine.ts:161-167` | `proofs/prajna/README.md` |
| PRAJNA campus/role/faculty/deadline GSIs | `DynamoDBClientAdapter.ts:64-69` | `proofs/prajna/README.md` |
| PRAJNA Approval table owned by M5 (designed, not provisioned) | `PRAJNA_ACCOUNT_INVENTORY.md` §4 | `proofs/prajna/README.md` |
| PRAJNA dev API is Cognito-gated → 403 unauthenticated | `curl -i https://uvremjs67f.execute-api.ap-south-2.amazonaws.com/dev/` | `proofs/prajna/hey.txt` |
| CineFund 50 concurrent 1/49/0 | `go test ./internal/pledge -run TestHandleWebhook_SameEvent50xConcurrent -v` | `proofs/cinefund/idempotency-50concurrent.txt` + `test-source-50x.txt` |
| CineFund SETNX + UNIQUE(provider, provider_event_id) | `cat migrations/0008_payment_events.up.sql` | `proofs/cinefund/0008_payment_events.up.sql` |
| CineFund outbox SKIP LOCKED | `grep -r "SKIP LOCKED" internal/outbox` | `proofs/cinefund/README.md` |
| Extractor magic-byte + Otsu | `cat app/utils.py`, `cat app/main.py` | `proofs/extractor/magic-snippet.py`, `proofs/extractor/otsu-snippet.py` |

## What still needs a live run

* `proofs/cinefund/bench.txt` — run `hey -n 100 -c 20` against Docker Postgres+Redis (real latency)
* `proofs/prajna/*` — PRAJNA repos are **private**; verify by code walkthrough (file:line above). `hey.txt` documents the `403`, not a latency number.

Until those are filled, don't quote `p95 115ms` or `p95 467ms` as live — say `local/Docker` and point here.
