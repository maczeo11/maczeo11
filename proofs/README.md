# Proofs — how to verify every resume number

> **Repo:** `maczeo11/maczeo11` `main` — this folder is the single source of truth for `resume.tex:137,150-154,160-161`.
> Pin each pointer to a commit: `https://github.com/maczeo11/maczeo11/blob/<sha>/proofs/...`

## Quick verify (30 sec each)

| Claim | One-liner to prove | Artifact |
|---|---|---|
| PRAJNA 2 GSIs, not 3, no campus isolation **yet** | `Select-String lib/aprt_mng-stack.ts -Pattern addGlobalSecondaryIndex` | `proofs/prajna/cdk-snippet.txt`, `proofs/prajna/README.md` |
| PRAJNA 0 tests, not 51 | `npm test` in `serverless-apartment-manager` | `proofs/prajna/README.md` + placeholder `bench.json` (null) |
| PRAJNA health needs Cognito auth → hey 403 | `curl -i https://uvremjs67f.../dev/api/requests` | `proofs/prajna/hey.txt` (placeholder) |
| CineFund 50 concurrent 1/49/0 | `go test ./internal/pledge -run TestHandleWebhook_SameEvent50xConcurrent -v` | `proofs/cinefund/idempotency-50concurrent.txt` + `test-source-50x.txt` |
| CineFund SETNX + UNIQUE(provider, provider_event_id) | `cat migrations/0008_payment_events.up.sql` | `proofs/cinefund/0008_payment_events.up.sql` |
| CineFund outbox SKIP LOCKED | `grep -r "SKIP LOCKED" internal/outbox` | `proofs/cinefund/README.md` |
| Extractor magic-byte + Otsu | `cat app/utils.py`, `cat app/main.py` | `proofs/extractor/magic-snippet.py`, `proofs/extractor/otsu-snippet.py` |

## What still needs a live run

* `proofs/prajna/hey.txt` — run authenticated `hey` and replace placeholder
* `proofs/cinefund/bench.txt` — run `hey -n 100 -c 20` against Docker Postgres+Redis

Until those are filled, don't quote `p95 115ms` or `p95 467ms` as live — say `local/Docker` and point here.
