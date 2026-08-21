# PRAJNA / serverless-apartment-manager — Proof Pack

> **Source repo:** `C:\Users\bhanu\git\serverless-apartment-manager` (private, `main`)
> **Deployed API:** `https://uvremjs67f.execute-api.ap-south-2.amazonaws.com/dev` (`ap-south-2`)
> **Commit pinned:** `serverless-apartment-manager` `main` @ `2026-08-21` (see `git rev-parse HEAD`)

## What resume claims vs what is actually in code

| Resume line `resume.tex:137-140` | Verdict | Evidence |
|---|---|---|
| DynamoDB single-table, 3 GSIs, campus isolation 3 campuses | **INFLATED** | `lib/aprt_mng-stack.ts:60-108` shows **2 GSIs** (`ResidentIndex`, `StatusIndex`), keys `PK=REQUEST#<id> SK=METADATA`. No `campusId` / tenant isolation. |
| 51 unit + integration tests | **INFLATED** | `test/aprt_mng.test.ts:1-17` is placeholder, commented out. `npm test` would report 1 skipped. Actual test count = **0 passing**. |
| Live health p50 37ms p95 115ms (20c, hey, 0 errors) | **BROKEN** | `bench-prajna-20260821-1643.json:2-12` is `null/NaN/n:0`. `GET /api/requests` requires Cognito auth → `curl` returns `403 Forbidden`, so `hey` never measured. No CloudWatch latency alarm in CDK (`lib/aprt_mng-stack.ts:241-246` only 15-min `SlaRule`, no DLQ, no Alarm). |
| Approval state machine, optimistic locking, TransactWrites | **MISSING** | `lambda/handlers.ts:147-232` uses plain `GetCommand` + `UpdateCommand`, no `ConditionExpression` on `version`, no `TransactWrite`. States are `OPEN/IN_PROGRESS/...` but no rank/escalation/cycle check. |
| EventBridge DLQ + CloudWatch alarm per rule, frozen contracts for 5 teams | **MISSING** | `lib/aprt_mng-stack.ts:242` creates one `Rule` with only `LambdaFunction` target, no `deadLetterQueue`, no `Alarm`. No `events/` schema files. |

## How to reproduce (honest)

```bash
# 1. Tests — currently fails the 51 claim
cd C:\Users\bhanu\git\serverless-apartment-manager
npm test   # shows 0 passing — need to write real tests

# 2. GSIs — count them
Select-String -Path lib/aprt_mng-stack.ts -Pattern "addGlobalSecondaryIndex"

# 3. Auth required bench — proves p50/p95 can't be measured without token
curl -i https://uvremjs67f.execute-api.ap-south-2.amazonaws.com/dev/api/requests
# -> 403 Forbidden (Cognito authorizer at lib/aprt_mng-stack.ts:257-265)

# 4. With auth (create token via Cognito, then:)
hey -n 100 -c 20 -H "Authorization: Bearer <id_token>" https://.../dev/api/requests
# Save output to proofs/prajna/hey.txt manually — don't commit fake numbers

# 5. CloudWatch proof (after adding DLQ/Alarm to CDK)
aws cloudwatch get-metric-statistics --namespace AWS/ApiGateway ...
```

## What was added to make claims provable

* Nothing yet — this folder is the **honest baseline**. To keep resume as-is, implement:
  1. `campusId` in PK/SK + `ConditionExpression` version check
  2. `DeadLetterQueue` + `Alarm` per `Rule` in `lib/aprt_mng-stack.ts`
  3. 51 tests (jest + `Template.fromStack` assertions)
  4. Re-run `scripts/bench.sh` with a valid Cognito token, commit real `hey.txt` + `bench.json`

Until then, resume should be softened to: *"Maintenance Tracker on Lambda/DynamoDB/API Gateway + Cognito, 2 GSIs, EventBridge cron for SLA checks — see proofs/prajna/"*

## Files in this folder
* `bench.json` — last bench run (currently null, do not trust)
* `hey.txt` — placeholder, replace after authenticated run
* `cdk-snippet.txt` — excerpt of actual GSIs (copy of lib/aprt_mng-stack.ts:82-108)
