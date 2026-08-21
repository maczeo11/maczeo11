# CineFund — Proof Pack

> **Repo:** `https://github.com/maczeo11/cinefund` (commit pinned: see `go.mod`, cloned 2026-08-21)
> **Bench env:** in-process fake + Docker Postgres+Redis (integration tests require `POSTGRES_DSN`/`REDIS_ADDR`)

## Claim → Proof mapping for `resume.tex:147-154`

| Resume line | File pointer | How to verify |
|---|---|---|
| `Redis SETNX guards + Postgres unique constraint, 50 concurrent → 1/49/0` | `internal/pledge/service.go:242-248` SETNX `idem:wh:<eventID>` + `migrations/0008_payment_events.up.sql:14` `UNIQUE(provider, provider_event_id)` with comment explaining SETNX is only fast-path | `go test ./internal/pledge -run TestHandleWebhook_SameEvent50xConcurrent -v` → `PASS` — see `idempotency-50concurrent.txt`. Source in `test-source-50x.txt`. |
| `p95 0.4ms in-process vs p95 467ms / p99 645ms (100 req, 20c, 95 req/s, 0 failures)` | In-process is `idempotency-50concurrent.txt` (0.00s for 50 concurrent, ~0.4ms/req). Docker numbers are **not reproduced here** — integration test `webhook_integration_test.go:40-120` needs live Postgres+Redis. Run `scripts/bench.sh` locally to generate `bench.txt`. | `go test ./internal/pledge -v` → all 14 pledge tests pass (`pledge-tests.txt`). `go test ./...` → `all-tests.txt` |
| `Double-entry ledger debits/credits balance` | `migrations/0011_ledger.up.sql` + `internal/pledge/ledger.go:1-45` `PLATFORM_ESCROW/CAMPAIGN_ESCROW/CREATOR_PAYABLE/...` | `grep -r Ledger migrations/ internal/pledge/ledger.go` |
| `Kafka transactional outbox, domain writes + outbox in one TX, SKIP LOCKED dispatcher` | `migrations/0013_outbox.up.sql` + `internal/outbox/dispatcher.go:55-82` `Claim()` uses `FOR UPDATE SKIP LOCKED` | `Select-String -Pattern "SKIP LOCKED" internal/outbox/dispatcher.go internal/media/repo.go` |
| `FFmpeg HLS, presigned S3, retry-safe worker leasing` | `internal/media/transcode/worker.go` + `internal/platform/objectstore/objectstore.go:30` `PresignedPut` + `internal/media/upload.go` | `go test ./internal/media/transcode -v` → `PASS` (`all-tests.txt`) |

## Reproduce locally (copy-paste)

```bash
# 1. Clone
git clone https://github.com/maczeo11/cinefund && cd cinefund

# 2. In-process proof (no Docker) — proves 1/49/0 idempotency
go test ./internal/pledge -run TestHandleWebhook_SameEvent50xConcurrent -v
# expected: --- PASS: TestHandleWebhook_SameEvent50xConcurrent (0.00s)

# 3. All unit tests (no Docker)
go test ./... -v
# expected: ok pledge 2s, ok outbox 0.9s, ok transcode 0.9s — see all-tests.txt

# 4. Integration (needs Docker — real Postgres+Redis latency numbers)
docker compose up -d postgres redis kafka
POSTGRES_DSN=postgres://cinefund:cinefund@localhost:5433/cinefund go test -tags=integration ./internal/pledge -run TestWebhook -v
# Save hey/wrk output to bench.txt for the p95 467ms claim
```

## Files in this folder
* `idempotency-50concurrent.txt` — `go test -run TestHandleWebhook_SameEvent50xConcurrent` output (PASS)
* `pledge-tests.txt` — all `internal/pledge` tests
* `all-tests.txt` — `go test ./...`
* `test-source-50x.txt` — excerpt of the 50-concurrent test proving `n=50, 1 success 49 ErrDuplicateEvent`
* `bench.txt` — **TODO**: fill after `hey -n 100 -c 20` against Docker Postgres+Redis

## Notes for interview
* Redis guard is **not** the guarantee — `uq_provider_event` is. Code comment in `0008_payment_events.up.sql:14-20` says so explicitly, and test `TestHandleWebhook_RedisFlushedStillOnce` proves it.
* `SETNX` key is `idem:wh:<eventID>` with 24h TTL (`service.go:244`), released on failure (`service.go:263-266`) so retries aren't swallowed.
