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
openTo:    Backend / Cloud-Native / Platform roles
currently: Building event-driven platforms on AWS + Postgres/Kafka/Redis
```

I'm a final-year B.Tech Computer Science student focused on building backend systems that stay correct under concurrent load. Most of my work centers around **AWS serverless architectures**, **event streaming with Kafka**, and **transactional data patterns in Go & PostgreSQL** — designing for idempotency, optimistic locking, and single-table database access.

Recent focus areas:
- **Serverless Approval Engine (PRAJNA)** — Multi-stage approval state machine across 3 campuses, using optimistic concurrency control in DynamoDB and EventBridge event routing.
- **Event-Driven Services (CineFund)** — Transactional outbox pattern on PostgreSQL + Debezium CDC $\rightarrow$ Kafka, paired with Redis `SETNX` dual-layer payment idempotency.
- **Microservices & Tooling** — Modular document extraction pipelines, Redis caching layers, and Infrastructure-as-Code with AWS CDK.

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

### AWS & Cloud-Native Services

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

## Linux & Distributed Systems Toolkit

<p align="center">
<img src="https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" />
<img src="https://img.shields.io/badge/gRPC-4285F4?style=for-the-badge&logo=grpc&logoColor=white" />
<img src="https://img.shields.io/badge/Protocol_Buffers-4285F4?style=for-the-badge&logo=protobuf&logoColor=white" />
<img src="https://img.shields.io/badge/Redis_Cluster-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/systemd-0B3D2E?style=for-the-badge&logo=linux&logoColor=white" />
<img src="https://img.shields.io/badge/podman-003DA5?style=for-the-badge&logo=podman&logoColor=white" />
<img src="https://img.shields.io/badge/kubectl-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" />
<img src="https://img.shields.io/badge/terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" />
</p>

<p align="center"><sub>Kafka, gRPC+Protobuf, Redis, systemd, podman, kubectl, Terraform.</sub></p>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## Engineering Focus & Principles

<details>
<summary><b>7 distributed systems principles I apply day-to-day</b> — click to expand</summary>
<br/>

| Principle | Core Practice |
|---|---|
| **Idempotency** | Designing writes so a Lambda retry or webhook burst can't double-create or double-charge anything. |
| **Optimistic locking** | Version-checked conditional writes so two approvers racing the same record don't silently clobber each other. |
| **Single-table DynamoDB design** | Modeling access patterns first, then collapsing entities into one table with GSIs instead of one table per entity. |
| **Event-driven workflows** | EventBridge as the backbone for state changes, instead of services polling each other for status. |
| **Multi-tenant isolation** | Scoping every query by role and campus at the auth layer, not trusting the client to ask nicely. |
| **Policy as data** | Encoding business rules as a registry the code interprets, so a policy change is a data edit and the API contract stays unified. |
| **Explainable state** | Keeping an append-only record of *why* a number is what it is — a running balance can't answer audit questions six months later. |

</details>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## Featured Work

### PRAJNA — Approval Workflow Engine

<sub>Team platform at GITAM — see architecture and implementation details below</sub>

A multi-stage approval engine for faculty submissions across three campuses. Designed to maintain strict consistency when multiple approvers or automated escalation timers act on the same submission simultaneously.

<div align="center">
<img src="assets/architecture.svg" alt="PRAJNA Approval Workflow Engine architecture diagram" width="85%" />
</div>

<br/>

**Key Engineering Challenges & Solutions:**
- **Race Condition Prevention:** A scheduled Lambda escalates submissions past their SLA while human approvers act concurrently. Solved via DynamoDB optimistic locking (`ConditionExpression: version = :expected`) — stale writes abort cleanly instead of clobbering state.
- **Idempotent Workflow Instantiation:** Workflow creation uses unique client tokens so network retries cannot spin up duplicate approval chains.
- **Rank-Based Escalation:** Implemented hierarchy graph validation with cycle detection to prevent requests from looping back to prior approvers.
- **Server-Side Campus Scoping:** Authentication is enforced via Cognito + JWT with role and campus claims validated server-side.

<p>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/AWS_CDK-FF9900?style=flat-square&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white" />
<img src="https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white" />
<img src="https://img.shields.io/badge/EventBridge-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Cognito-DD344C?style=flat-square&logo=amazonaws&logoColor=white" />
</p>

<details>
<summary><b>🏗️ Architecture Deep Dive: Single-Table DynamoDB & Access Patterns (AWS CDK)</b></summary>
<br/>

```typescript
// Single-table DynamoDB construct with secondary indexes for efficient access patterns
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

*Key Pattern:* Access patterns are modeled upfront into a single table with Global Secondary Indexes, allowing low-latency queries without multi-table relational joins.
</details>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

### CineFund — Crowdfunding & Streaming

An event-driven Go backend for crowdfunding short films, built around **PostgreSQL + Kafka + Redis** with a focus on transactional integrity and video streaming.

<div align="center">
<img src="assets/cinefund-demo.svg" alt="CineFund 50x Concurrent Idempotency Test" width="100%" />
</div>

<br/>

- **Transactional Outbox Pattern** — Domain record updates and outbox events are committed in a single ACID PostgreSQL transaction. A dedicated worker pool polls using `FOR UPDATE SKIP LOCKED` and publishes to Kafka without double-dispatch.
- **Dual-Layer Payment Idempotency** — Redis `SETNX` (24h TTL, `idem:wh:<eventID>`) provides a sub-millisecond fast-path check, backed authoritatively by a PostgreSQL `UNIQUE(provider, provider_event_id)` constraint. Verified under 50 concurrent requests (1 success, 49 duplicate rejections).
- **Video Processing & Streaming** — Outbox events drive async FFmpeg transcoding workers over gRPC (Protobuf), outputting HLS segments with HTTP Range request support for seamless video seeking.
- **Production Practices** — Token-bucket rate limiting, structured logging with Go `log/slog`, request-ID propagation, Docker containerization, and graceful shutdown.

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
<summary><b>⚙️ Under the Hood: Transactional Outbox Schema & Concurrency Dispatcher (SQL)</b></summary>
<br/>

```sql
-- Outbox table: stores domain events atomically with business transactions
CREATE TABLE outbox (
    id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_id       UUID NOT NULL UNIQUE,        -- dedupe key for Kafka consumers
    event_type     TEXT NOT NULL,               -- e.g. 'pledge.captured'
    event_version  INTEGER NOT NULL DEFAULT 1,
    aggregate_type TEXT NOT NULL,               -- e.g. 'pledge'
    aggregate_id   UUID NOT NULL,               -- Kafka partition key
    payload        JSONB NOT NULL,
    trace_id       TEXT,                        -- W3C distributed traceparent
    created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
    published_at   TIMESTAMPTZ,
    attempts       INTEGER NOT NULL DEFAULT 0,
    last_error     TEXT
);

-- Partial index scanning only unpublished events for high dispatcher throughput
CREATE INDEX idx_outbox_unpublished ON outbox (id) WHERE published_at IS NULL;

-- Dispatcher query: SKIP LOCKED allows multiple worker threads to pull batches without lock contention
SELECT id, payload 
FROM outbox 
WHERE published_at IS NULL 
ORDER BY id 
LIMIT 50 
FOR UPDATE SKIP LOCKED;
```

*Key Pattern:* `FOR UPDATE SKIP LOCKED` enables horizontal scaling of background Go dispatchers without rows being double-processed or causing transaction deadlocks.
</details>

---

### Serverless Apartment Maintenance Portal

A full-stack maintenance portal for campus residential blocks — built to explore single-table DynamoDB access pattern modeling and AWS CDK Infrastructure-as-Code prior to incorporating them into PRAJNA.

- Scheduled SLA escalations triggered via EventBridge cron rules every 15 minutes.
- Single-table DynamoDB design with Cognito-based role-based access control (Admin / Resident).
- 100% Infrastructure-as-Code via AWS CDK in TypeScript.

<p>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/AWS_CDK-FF9900?style=flat-square&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white" />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
&nbsp; <b><a href="https://github.com/maczeo11/serverless-apartment-manager">Repository →</a></b>
</p>

<br/>

### Universal Text Extractor

A document processing pipeline that normalizes heterogeneous file formats (PDFs, Word documents, spreadsheets, images) into structured JSON.

- Strategy pattern architecture to support new file extractors modularly without modifying existing pipelines (Open/Closed Principle).
- Hybrid OCR pipeline utilizing OpenCV preprocessing and Tesseract LSTM recognition for scanned or low-contrast documents.
- In-memory stream processing and chunking to ensure bounded resource consumption on constrained compute instances.

<p>
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
&nbsp; <b><a href="https://github.com/maczeo11/File_extractor">Repository →</a></b>
</p>

<details>
<summary><b>🔍 Implementation Highlight: Binary Magic-Byte Detection & Processing (Python)</b></summary>
<br/>

```python
def detect_file_type(buffer: bytes) -> str:
    """Identifies file formats from true binary header signatures rather than trusting file extensions."""
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

*Key Pattern:* Inspecting binary magic headers prevents MIME spoofing vulnerabilities and avoids pipeline crashes from mislabeled file extensions.
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
