# PRAJNA — Module 13 Proof Pack

> **Project:** PRAJNA — faculty companion platform, built by a team at GITAM.
> **Scope owned by Bhanu (Komma Bhanu Teja):** Business Logic layer lead (Modules 13–18) and the **Module 13 Approval Workflow Engine** itself, plus the shared types/interfaces and auth step enforcement.
> **Repos:** private — org `Prajna-AI-Gitam` (`prajna-business-logic`, `prajna-core-platform`, `prajna-faculty-data`, …) and mirror `maczeo11/prajna-business-service`. Verify by code walkthrough; file:line pointers below.
> **Live (dev):** AWS account `485464494231` · region `ap-south-2` · shared API `https://uvremjs67f.execute-api.ap-south-2.amazonaws.com/dev`.

## What is claimed vs. what is in the code

| Claim | Verdict | Evidence (private repo `prajna-business-logic`) |
|---|---|---|
| Optimistic concurrency control on DynamoDB | ✅ verified | `src/modules/approval-workflow/adapters/DynamoDBClientAdapter.ts:208` — `ConditionExpression: '#v = :expectedVersion'` on the write, version bumped at `:188-189`, mismatch → typed `ConflictError` (`:216-221`) |
| Atomic workflow creation (`TransactWriteItems`) | ✅ verified | `DynamoDBClientAdapter.ts:100-125` — main item + lookup pointer + idempotency pointer written in one transaction, each `attribute_not_exists(PK)` |
| Idempotent workflow creation | ✅ verified | `src/modules/approval-workflow/services/ApprovalWorkflowEngine.ts:161-167` — returns the existing `requestId` if a PENDING workflow already exists for the entity; the pointer item closes the TOCTOU race (`DynamoDBClientAdapter.ts:81-96`) |
| Single-table design with campus partition + GSIs | ✅ verified | `DynamoDBClientAdapter.ts:64-69` — `PK=CAMPUS#<campus>`; GSI1 `STATUS#<status>#ROLE#<role>` (role+campus queue), GSI2 `FACULTY#<id>` (history), GSI3 `DEADLINE` (escalation scan) |
| Escalation ladder | ✅ verified | `ApprovalWorkflowEngine.ts:79-134,586-670` — Day 3 reminder → Day 7 Director → Day 10 PVC, rank-ordered with a self-loop guard (`ROLE_RANK`) |
| Campus/role scoping from Cognito JWT | ✅ verified | `custom:role` / `custom:campus` claims enforced in `handlers/auth.ts` + `submitAction.handler.ts` (role must match the current step role) |

## What is NOT claimed (corrections)

- **Schema designed, not provisioned.** The `Prajna_Approvals-dev` table (GSI1/2/3) is owned by Module 5 (Harini). Bhanu **designed** the approval schema and wrote the access-pattern code — he did not provision the table. See `PRAJNA_ACCOUNT_INVENTORY.md` §4.
- **Module 13 is his; Modules 14–18 are the team's.** He leads the BL layer and built M13 + shared contracts; Score/Leaderboard/Notifications/Reports/APAR are teammates' modules.
- **The platform is a team project, not solo.** 24 modules, ~48 Lambdas; "dev-wired", dev stage.
- **No campus count is asserted here** beyond what the platform's `custom:campus` tenant supports. A single `BENGALURU` test user is what appears in the dev inventory.

## How to verify (walkthrough)

```text
1. prajna-business-logic/src/modules/approval-workflow/adapters/DynamoDBClientAdapter.ts
   → :64-69  key + GSI layout
   → :100    TransactWriteCommand (atomic 3-item create)
   → :208    ConditionExpression '#v = :expectedVersion'  (optimistic lock)
2. prajna-business-logic/src/modules/approval-workflow/services/ApprovalWorkflowEngine.ts
   → :161-167 idempotency guard
   → :79-134  workflow configs (STANDARD / FAST_TRACK / RESEARCH_HIGH_IMPACT)
   → :586-670 escalation ladder walk + self-loop guard
3. prajna-business-logic/src/modules/approval-workflow/__tests__/  (jest unit suite)
```

Live API is Cognito-gated: an unauthenticated `GET` returns `403` (see `hey.txt`). Numbers there are **not** a latency claim — the dev API is auth-gated so no unauthenticated bench exists. Do not quote p50/p95 for PRAJNA.

## Files in this folder

* `cdk-snippet.txt` — the real Module 13 key layout + optimistic-lock write (from `DynamoDBClientAdapter.ts`)
* `bench.json` — an invalid, auth-gated bench (`n:0`, nulls); kept only to show why the number can't be measured unauthenticated
* `hey.txt` — the `403` proof (Cognito authorizer)

## Note on `serverless-apartment-manager`

`maczeo11/serverless-apartment-manager` is a **separate, earlier solo project** (2 GSIs, Cognito RBAC, EventBridge SLA cron). It is featured on its own and is **not** PRAJNA. An earlier version of this proof pack mislabeled apartment-manager evidence as "PRAJNA" — that was wrong and has been corrected.
