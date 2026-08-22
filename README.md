<div align="center">

<img src="assets/banner.svg" alt="Bhanu Teja Komma — Backend Engineer, Cloud-Native Systems on AWS" width="100%" />

<br/>
<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=19&pause=1200&color=A371F7&center=true&vCenter=true&width=560&lines=Cloud-native+backend+systems;Go+%C2%B7+Kafka+%C2%B7+AWS+Lambda+%C2%B7+DynamoDB;Idempotent+by+default%2C+event-driven+by+design;Distributed+systems+that+stay+correct+under+load;Build+systems+that+scale%2C+write+code+that+lasts)](https://git.io/typing-svg)

<br/>

<a href="https://maczeo.me"><img src="https://img.shields.io/badge/Portfolio-maczeo.me-D93D2E?style=for-the-badge&logo=safari&logoColor=white" /></a>
<a href="https://www.linkedin.com/in/bhanu-teja-komma-4b5547293/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:bhanu0005a@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://leetcode.com/u/GB2023002633/"><img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
<a href="https://github.com/maczeo11"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>

</div>

<br/>

## About

```yaml
name:      Bhanu Teja Komma
role:      Backend Engineer — Cloud-Native / Distributed Systems
focus:     TypeScript, Go, Python, AWS (Lambda, DynamoDB, EventBridge, CDK), Postgres, MongoDB, Kafka, Redis
exploring: Rust, gRPC, Spring Boot
location:  Bengaluru, India
portfolio: https://maczeo.me
openTo:    Backend / cloud-native / platform roles
currently: Building event-driven platforms on AWS + Postgres/Kafka/Redis
```

I build backend systems where the interesting part isn't the CRUD — it's what happens when two requests race each other. Most of my time lives inside **AWS** (Lambda, DynamoDB, EventBridge, CDK, Step Functions), **Kafka** for event streaming, and **Postgres/Redis** for data — thinking through idempotency, optimistic locking, single-table design, and event-driven workflows instead of bolting them on after something breaks in production.

Recent work spans:
- **Serverless approval workflow engine** — 6 modules, 36 Lambda handlers, frozen event contracts across 5 partner teams; correctness under concurrent access was the design brief
- **Event-driven Go/Kafka services** — transactional outbox → Postgres + Debezium CDC → Kafka → gRPC/FFmpeg workers; `SKIP LOCKED` dispatcher, Redis `SETNX` + Postgres `UNIQUE(provider, provider_event_id)` idempotency on payments — verified via `proofs/cinefund/`
- **Spring Boot JVM services** — DI, transaction boundaries, domain-driven structure
- **React/TypeScript frontends** — when the backend needs a UI

The common thread: distributed systems that stay correct under load, with observable, explainable state.

<br/>

## Tech Stack

| Category | Skills & Tools |
|---|---|
| **Languages** | <img src="https://skillicons.dev/icons?i=ts,python,go" /> |
| **Backend & Data** | <img src="https://skillicons.dev/icons?i=fastapi,postgres,redis,mongodb,kafka" /> |
| **Frontend** | <img src="https://skillicons.dev/icons?i=react" /> |
| **Infra & Tools** | <img src="https://skillicons.dev/icons?i=aws,docker,linux,git" /> |
| **Exploring** | <img src="https://skillicons.dev/icons?i=rust,spring" /> |

<br/>

### AWS Services

<p align="center">
<img src="https://img.shields.io/badge/Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white" />
<img src="https://img.shields.io/badge/DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb&logoColor=white" />
<img src="https://img.shields.io/badge/CDK_(TypeScript)-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/EventBridge-FF4F8B?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Cognito-DD344C?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/API_Gateway-FF4F8B?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white" />
<img src="https://img.shields.io/badge/SQS-FF4F8B?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Step_Functions-FF4F8B?style=for-the-badge&logo=amazonaws&logoColor=white" />
</p>

<p align="center"><sub>Alpine & Arch for lightweight and rolling environments.</sub></p>

<br/>

> **Open source by default.** If it's not a secret, it's public — issues, PRs, and docs welcome.

<br/>

## Linux Admin Toolkit

<p align="center">
<img src="https://img.shields.io/badge/systemd-0B3D2E?style=for-the-badge&logo=linux&logoColor=white" />
<img src="https://img.shields.io/badge/firewalld-C5102E?style=for-the-badge&logo=linux&logoColor=white" />
<img src="https://img.shields.io/badge/nftables-C5102E?style=for-the-badge&logo=linux&logoColor=white" />
<img src="https://img.shields.io/badge/podman-003DA5?style=for-the-badge&logo=podman&logoColor=white" />
<img src="https://img.shields.io/badge/kubectl-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" />
<img src="https://img.shields.io/badge/terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" />
<img src="https://img.shields.io/badge/tmux-1BB0E6?style=for-the-badge&logo=tmux&logoColor=white" />
<img src="https://img.shields.io/badge/fzf-0F0F0F?style=for-the-badge&logo=fzf&logoColor=white" />
<img src="https://img.shields.io/badge/ripgrep-0F0F0F?style=for-the-badge&logo=rust&logoColor=white" />
</p>

<p align="center"><sub>systemd, firewalld/nftables, podman, kubectl (EKS/GKE), Terraform, tmux/fzf/rg.</sub></p>

<br/>

## Distributed Systems Toolkit

<p align="center">
<img src="https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" />
<img src="https://img.shields.io/badge/gRPC-4285F4?style=for-the-badge&logo=grpc&logoColor=white" />
<img src="https://img.shields.io/badge/Protocol_Buffers-4285F4?style=for-the-badge&logo=protobuf&logoColor=white" />
<img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" />
<img src="https://img.shields.io/badge/Redis_Cluster-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
</p>

<p align="center"><sub>Kafka, gRPC+Protobuf, Grafana, Redis Cluster.</sub></p>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## What I Actually Think About

<details>
<summary><b>7 distributed systems principles I actually apply day-to-day</b> — click to expand</summary>
<br/>

| Principle | Core Practice |
|---|---|
| **Idempotency** | Designing writes so a Lambda retry can't double-create or double-charge anything. |
| **Optimistic locking** | Version-checked conditional writes so two approvers racing the same record don't silently clobber each other. |
| **Single-table DynamoDB design** | Modeling access patterns first, then collapsing entities into one table with GSIs instead of one table per entity. |
| **Event-driven workflows** | EventBridge as the backbone for state changes, instead of services polling each other for status. |
| **Multi-tenant isolation** | Scoping every query by role and campus at the auth layer, not trusting the client to ask nicely. |
| **Policy as data** | Encoding business rules as a registry the code interprets, so a policy change is a data edit and the API contract can be generated from the same source the engine runs on. |
| **Explainable state** | Keeping an append-only record of *why* a number is what it is — a running balance can't answer questions six months later, and the inputs can't be reconstructed after the fact. |

</details>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## Featured Work

### PRAJNA — Approval Workflow Engine

<sub>Team repo, private — see the architecture and engineering breakdown below</sub>

The single authority for approval state on every faculty submission across three campuses. If this system is wrong, someone's approval either gets stuck forever or gets approved twice — so correctness under concurrent access was the actual design brief, not a nice-to-have.

<div align="center">
<img src="assets/architecture.svg" alt="PRAJNA Approval Workflow Engine architecture diagram" width="85%" />
</div>

<br/>

**The engineering problem:** approvers escalate submissions up a rank ladder, a scheduled Lambda escalates anything past its SLA, and a human can act on a record at the exact moment the escalation cron fires on it. That's a straightforward race condition if you're not careful.

**How it's handled:**
- Workflow creation is idempotent, so a Lambda retry after a timeout can't spin up a duplicate approval chain
- Every state update is optimistic-locked — a version mismatch fails the write instead of silently overwriting a concurrent change
- The escalation ladder is rank-based with cycle checks, so a misconfigured hierarchy can't loop a request back to someone who already approved it
- Auth is Cognito + JWT, scoped by role and campus, so the isolation between campuses is enforced server-side, not assumed client-side

**Result:** hardened through a dedicated review pass that surfaced and fixed 11 correctness/security issues, including an IDOR that let any authenticated user act as any faculty member in any campus.

<p>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/AWS_CDK-FF9900?style=flat-square&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white" />
<img src="https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white" />
<img src="https://img.shields.io/badge/EventBridge-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Cognito-DD344C?style=flat-square&logo=amazonaws&logoColor=white" />
</p>

<details>
<summary><b>Proof — Single-Table DynamoDB Schema & Access Patterns (AWS CDK)</b></summary>
<br/>

```typescript
// proofs/prajna/cdk-snippet.txt (AWS CDK in TypeScript)
const requestsTable = new dynamodb.Table(this, 'RequestsTable', {
  tableName: `maintenance-requests-${stage}`,
  partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
  sortKey:      { name: 'SK', type: dynamodb.AttributeType.STRING },
  billingMode:  dynamodb.BillingMode.PAY_PER_REQUEST,
  timeToLiveAttribute: 'ttl',
  removalPolicy: isProd ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
});

// GSI 1: Query all requests filed by a specific resident (PK=residentId, SK=createdAt)
requestsTable.addGlobalSecondaryIndex({
  indexName:    'ResidentIndex',
  partitionKey: { name: 'residentId', type: dynamodb.AttributeType.STRING },
  sortKey:      { name: 'createdAt',  type: dynamodb.AttributeType.STRING },
});

// GSI 2: SLA Escalation worker query (PK=status, SK=slaDeadline)
requestsTable.addGlobalSecondaryIndex({
  indexName:    'StatusIndex',
  partitionKey: { name: 'status',      type: dynamodb.AttributeType.STRING },
  sortKey:      { name: 'slaDeadline', type: dynamodb.AttributeType.STRING },
});
```

<sub>Full CDK construct & architecture verification in [`proofs/prajna/`](proofs/prajna/)</sub>
</details>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

### CineFund — Crowdfunding & Streaming

Event-driven Go backend for crowdfunding short films — money path built before video with **Postgres + Kafka + Redis**, inspired by MagicStream (movie streaming foundation with JWT/httpOnly-cookie auth and HTTP Range streaming).

<div align="center">
<img src="assets/cinefund-demo.svg" alt="CineFund 50x Concurrent Idempotency Test" width="100%" />
</div>

<br/>

- **Transactional outbox** → Postgres + Debezium CDC — domain write + outbox insert in one TX, `SKIP LOCKED` dispatcher → Kafka, driving async FFmpeg/HLS transcoding workers over gRPC (Protobuf) — see [`proofs/cinefund/0013_outbox.up.sql`](proofs/cinefund/0013_outbox.up.sql) + [`proofs/cinefund/README.md`](proofs/cinefund/README.md)
- **Payments** — Redis `SETNX` (24h TTL, `idem:wh:<eventID>`) in front of Postgres `UNIQUE(provider, provider_event_id)` ([`proofs/cinefund/0008_payment_events.up.sql`](proofs/cinefund/0008_payment_events.up.sql)) — 50 concurrent webhooks → 1 success / 49 `ErrDuplicateEvent` ([`proofs/cinefund/idempotency-50concurrent.txt`](proofs/cinefund/idempotency-50concurrent.txt)), double-entry ledger ([`proofs/cinefund/0011_ledger.up.sql`](proofs/cinefund/0011_ledger.up.sql))
- **Streaming** — MinIO/S3 presigned uploads and HTTP Range serving, so `<video>` seeks without downloading the whole file
- **Production habits** — token-bucket rate limiting (tighter on auth routes), request-ID tracing, `log/slog` structured logs, Docker + Makefile, graceful shutdown

Full API spec, architecture, data model, and security docs live in the repo's `docs/` folder — the standard I hold every project to.

<p>
<img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white" />
<img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/gRPC-4285F4?style=flat-square&logo=grpc&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
&nbsp; <b><a href="https://github.com/maczeo11/cinefund">Repository →</a></b>
</p>

<details>
<summary><b>Proof — Outbox Table Schema + SKIP LOCKED Dispatcher Query</b></summary>
<br/>

```sql
-- proofs/cinefund/0013_outbox.up.sql
CREATE TABLE outbox (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_id       UUID NOT NULL UNIQUE,        -- dedupe key for Kafka consumers
    event_type     TEXT NOT NULL,               -- 'pledge.captured'
    event_version  INTEGER NOT NULL DEFAULT 1,
    aggregate_type TEXT NOT NULL,               -- 'pledge'
    aggregate_id   UUID NOT NULL,               -- Kafka partition key
    payload        JSONB NOT NULL,
    trace_id       TEXT,                        -- W3C traceparent
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    published_at   TIMESTAMPTZ,
    attempts       INTEGER NOT NULL DEFAULT 0,
    last_error     TEXT
);

-- Monotonic integer scan of unpublished rows (only scans unhandled events)
CREATE INDEX idx_outbox_unpublished ON outbox (id) WHERE published_at IS NULL;

-- Dispatcher worker query (SKIP LOCKED guarantees concurrent worker safety without deadlock)
SELECT id, payload FROM outbox WHERE published_at IS NULL ORDER BY id LIMIT 50 FOR UPDATE SKIP LOCKED;
```

<sub>Full migration DDL, ledger, and 50x concurrent test outputs in [`proofs/cinefund/`](proofs/cinefund/)</sub>
</details>

---

### Serverless Apartment Maintenance Portal

Full-stack maintenance-request system for 50+ residents and 15+ admins across 3 campuses — the project I used to get single-table DynamoDB design and CDK-as-IaC right before bringing them to PRAJNA.

- SLA tracking runs on an EventBridge cron firing every 15 minutes, not a human checking a dashboard
- Single-table DynamoDB design with Cognito-backed role-based access
- 100% infrastructure-as-code via AWS CDK (TypeScript) — no console-clicked resources

<p>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/AWS_CDK-FF9900?style=flat-square&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white" />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
&nbsp; <b><a href="https://github.com/maczeo11/serverless-apartment-manager">Repository →</a></b>
</p>

<br/>

### Universal Text Extractor

A hybrid extraction pipeline that turns PDFs, Word docs, spreadsheets, images, and HTML into one standardized JSON shape — built to handle the "dark data" problem of documents that don't come pre-structured.

- Strategy pattern on the backend, so adding a new file format doesn't touch existing extractors (Open/Closed Principle)
- Hybrid OCR pipeline: OpenCV preprocessing feeding Tesseract's LSTM engine, for scanned documents that plain text extraction can't touch
- Queue-managed frontend to keep memory bounded on free-tier hosting

<p>
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
&nbsp; <b><a href="https://github.com/maczeo11/File_extractor">Repository →</a></b>
</p>

<details>
<summary><b>Proof — Magic-Byte Signature Detection Pipeline</b></summary>
<br/>

```python
# proofs/extractor/magic-snippet.py
def detect_file_type(buffer: bytes) -> str:
    """Identifies true file format from binary magic bytes rather than trusting file extension."""
    if buffer.startswith(b'%PDF'):
        return 'application/pdf'
    if buffer.startswith(b'\x89PNG\r\n\x1a\n'):
        return 'image/png'
    if buffer.startswith(b'\xff\xd8\xff'):
        return 'image/jpeg'
    if buffer.startswith(b'PK\x03\x04'):
        return 'application/vnd.openxmlformats-officedocument' # docx, xlsx
    return 'application/octet-stream'
```

<sub>Full extractor implementation & Otsu binarization pipeline in [`proofs/extractor/`](proofs/extractor/)</sub>
</details>

<br/>

<details>
<summary><b>Other projects</b> — smaller in scope, still shipped</summary>
<br/>

- **[TechBot](https://github.com/maczeo11/sys-ai)** — terminal AI agent for IT troubleshooting; LangChain LCEL agent (Groq `llama-3.3-70b`) with live `psutil` diagnostics and whitelisted shell execution (`ping`, `netstat`, `df`).
- **[go-movie-streaming](https://github.com/maczeo11/go-movie-streaming)** — earlier MagicStream fork (MongoDB + JWT/httpOnly-cookie) that CineFund grew out of; kept as side project.

</details>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## GitHub Activity

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <img src="https://gh-readme-stats-liart.vercel.app/api?username=maczeo11&show_icons=true&theme=tokyonight&hide_border=true&rank_icon=github&include_all_commits=true" width="100%" alt="GitHub stats for maczeo11" />
    </td>
    <td width="50%" align="center">
      <img src="https://streak-stats.demolab.com/?user=maczeo11&theme=tokyonight&hide_border=true&fire=FF6E40&currStreakLabel=FF6E40&sideNums=FFF&sideLabels=A371F7&dates=A371F7" width="100%" alt="GitHub streak stats" />
    </td>
  </tr>
</table>

<div align="center">
<img src="https://gh-readme-stats-liart.vercel.app/api/top-langs/?username=maczeo11&layout=compact&theme=tokyonight&hide_border=true&langs_count=8&size_weight=0.5&count_weight=0.5" width="48%" alt="Top languages for maczeo11" />
</div>

<br/>

<div align="center">
<img src="assets/footer.svg" width="100%" alt="" />
<br/><br/>
<sub>Build systems that scale, write code that lasts.</sub>
</div>
