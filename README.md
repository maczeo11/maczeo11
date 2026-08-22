<div align="center">

<img src="assets/banner.svg" alt="Bhanu Teja Komma — Backend Engineer, Cloud-Native Systems on AWS" width="100%" />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1200&color=A371F7&center=true&vCenter=true&width=560&lines=Cloud-native+backend+systems;Go+%C2%B7+Kafka+%C2%B7+AWS+Lambda+%C2%B7+DynamoDB;Idempotent+by+default%2C+event-driven+by+design;Distributed+systems+that+stay+correct+under+load;CachyOS+%2B+x86-64-v4+%2B+systemd+at+PID+1;Build+systems+that+scale%2C+write+code+that+lasts)](https://git.io/typing-svg)

<a href="https://maczeo.me"><img src="https://img.shields.io/badge/Portfolio-maczeo.me-D93D2E?style=for-the-badge&logo=safari&logoColor=white" /></a>
<a href="https://www.linkedin.com/in/bhanu-teja-komma-4b5547293/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:bhanu0005a@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://leetcode.com/u/GB2023002633/"><img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" /></a>
<a href="https://github.com/maczeo11"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>

![](https://komarev.com/ghpvc/?username=maczeo11&style=for-the-badge&color=A371F7)

</div>

<br/>

## About

```yaml
name:      Bhanu Teja Komma
role:      Backend Engineer — Cloud-Native / Distributed Systems
focus:     Go, Rust, FastAPI, AWS, Kafka, Redis, Spring Boot, React, Docker, Kubernetes, PyTorch, gRPC, MongoDB
location:  Bengaluru, India
portfolio: https://maczeo.me
openTo:    Backend / cloud-native / platform roles
currently: Building event-driven platforms; exploring RAG architectures; hardening Linux systems
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

| | |
|---|---|
| **Languages** | <img src="https://skillicons.dev/icons?i=ts,python,java,go,rust,nodejs" /> |
| **Backend & Data** | <img src="https://skillicons.dev/icons?i=fastapi,spring,postgres,redis,mongodb,kafka" /> |
| **Frontend** | <img src="https://skillicons.dev/icons?i=react" /> |
| **Infra & Tools** | <img src="https://skillicons.dev/icons?i=aws,docker,kubernetes,terraform,linux,git,neovim" /> |
| **AI / ML** | <img src="https://skillicons.dev/icons?i=pytorch" /> |

<sub>Go for the hot path, FastAPI when Python fits, Spring Boot for JVM services, Postgres when I need a real database, Redis for the speed layer, Kafka for event streaming, React + TS when the backend needs a UI, Rust for systems-level projects, and PyTorch for applied LLM/RAG work.</sub>

**AWS services I lean on**

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

<sub>Plus a personal Linux touch: Alpine & Arch for lightweight and rolling environments.</sub>

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

<sub>Daily drivers: systemd for services, firewalld/nftables for network policy, podman for containers, kubectl for managed K8s (EKS/GKE), Terraform for IaC, tmux/fzf/rg in the terminal.</sub>

<br/>


## Distributed Systems Toolkit

<p align="center">
<img src="https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" />
<img src="https://img.shields.io/badge/gRPC-4285F4?style=for-the-badge&logo=grpc&logoColor=white" />
<img src="https://img.shields.io/badge/Protocol_Buffers-4285F4?style=for-the-badge&logo=protobuf&logoColor=white" />
<img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" />
<img src="https://img.shields.io/badge/Redis_Cluster-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
</p>

<sub>Event streaming with Kafka, gRPC+Protobuf for service contracts, Grafana dashboards for observability, Redis Cluster for distributed caching.</sub>

<br/>


<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>


## The Linux Tinkerer

<div align="center">
<img src="assets/terminal.svg" width="100%" alt="Animated terminal session — CachyOS tinkerer" />
</div>

<br/>

Rolling-release, x86-64-v4, systemd at PID 1. When I'm not shipping serverless APIs, I'm the guy in `/usr/src/linux` making the box run faster.

**The rig:**

```text
OS:        CachyOS x86-64-v4
KERNEL:    6.x-cachyos
SHELL:     zsh
DE:        KDE Plasma 6
INIT:      systemd (PID 1)
FIREWALL:  firewalld
TUNING:    bpftune (eBPF)
PACKAGES:  ~2000 (pacman)
```

**Badges:**

<p align="center">
<img src="https://img.shields.io/badge/CachyOS-1793D1?style=for-the-badge&logo=archlinux&logoColor=white" />
<img src="https://img.shields.io/badge/KDE_Plasma-1DC3FF?style=for-the-badge&logo=kdeplasma&logoColor=white" />
<img src="https://img.shields.io/badge/zsh-333333?style=for-the-badge&logo=gnubash&logoColor=white" />
<img src="https://img.shields.io/badge/eBPF-003DA5?style=for-the-badge&logo=linux&logoColor=white" />
<img src="https://img.shields.io/badge/bpftune-FF6E40?style=for-the-badge&logo=oracle&logoColor=white" />
<img src="https://img.shields.io/github/stars/oracle/bpftune?style=for-the-badge&label=⭐%20bpftune&logo=oracle&logoColor=white" />
</p>

**Things I've tinkered with**

- systemd timer replacing cron (`OnCalendar=*-*-* 03:00:00`, `Persistent=true`)
- bpftune auto-tuning TCP congestion control — it chose BBR
- firewalld zone juggling — default is `home`, work happens in `dmz`
- Plasma KDE theming until 3 AM (and breaking it, then fixing it)
- CachyOS repos: x86-64-v4 optimized packages, `-O3 -march=x86-64-v4`
- systemd unit hardening: `NoNewPrivileges=yes`, `ProtectSystem=strict`, `PrivateTmp=yes`
- eBPF programs for custom observability — because `perf` isn't enough

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## What I Actually Think About

<details>
<summary><b>7 distributed systems principles I actually apply day-to-day</b> — click to expand</summary>
<br/>

<table>
<tr><td width="30%"><b>Idempotency</b></td><td>Designing writes so a Lambda retry can't double-create or double-charge anything.</td></tr>
<tr><td><b>Optimistic locking</b></td><td>Version-checked conditional writes so two approvers racing the same record don't silently clobber each other.</td></tr>
<tr><td><b>Single-table DynamoDB design</b></td><td>Modeling access patterns first, then collapsing entities into one table with GSIs instead of one table per entity.</td></tr>
<tr><td><b>Event-driven workflows</b></td><td>EventBridge as the backbone for state changes, instead of services polling each other for status.</td></tr>
<tr><td><b>Multi-tenant isolation</b></td><td>Scoping every query by role and campus at the auth layer, not trusting the client to ask nicely.</td></tr>
<tr><td><b>Policy as data</b></td><td>Encoding business rules as a registry the code interprets, so a policy change is a data edit and the API contract can be generated from the same source the engine runs on.</td></tr>
<tr><td><b>Explainable state</b></td><td>Keeping an append-only record of <em>why</em> a number is what it is — a running balance can't answer questions six months later, and the inputs can't be reconstructed after the fact.</td></tr>
</table>

</details>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## Featured Work

<img src="https://capsule-render.vercel.app/api?type=rect&height=90&color=0:1a1030,50:3b1f6e,100:6e40c9&text=PRAJNA%20%E2%80%94%20Approval%20Workflow%20Engine&fontSize=26&fontColor=ffffff&fontAlignY=58&animation=fadeIn" width="100%" alt="PRAJNA — Approval Workflow Engine" />

<sub>Team repo, private — see the architecture and engineering breakdown below</sub>

The single authority for approval state on every faculty submission across three campuses. If this system is wrong, someone's approval either gets stuck forever or gets approved twice — so correctness under concurrent access was the actual design brief, not a nice-to-have.

<div align="center">
<img src="assets/architecture.svg" alt="PRAJNA Approval Workflow Engine architecture diagram" width="85%" />
</div>

**The engineering problem:** approvers escalate submissions up a rank ladder, a scheduled Lambda escalates anything past its SLA, and a human can act on a record at the exact moment the escalation cron fires on it. That's a straightforward race condition if you're not careful.

**How it's handled:**
- Workflow creation is idempotent, so a Lambda retry after a timeout can't spin up a duplicate approval chain
- Every state update is optimistic-locked — a version mismatch fails the write instead of silently overwriting a concurrent change
- The escalation ladder is rank-based with cycle checks, so a misconfigured hierarchy can't loop a request back to someone who already approved it
- Auth is Cognito + JWT, scoped by role and campus, so the isolation between campuses is enforced server-side, not assumed client-side

**Result:** hardened through a dedicated review pass that surfaced and fixed 11 correctness/security issues, including an IDOR that let any authenticated user act as any faculty member in any campus.
`TypeScript` `AWS CDK` `Lambda` `DynamoDB` `EventBridge` `Cognito`

<br/>


<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>


<img src="https://capsule-render.vercel.app/api?type=rect&height=90&color=0:0f2027,50:1a3a4a,100:2d6a4f&text=CineFund%20%E2%80%94%20Crowdfunding%20%26%20Streaming&fontSize=26&fontColor=ffffff&fontAlignY=58&animation=fadeIn" width="100%" alt="CineFund — Crowdfunding & Streaming" />

Event-driven Go backend for crowdfunding short films — money path built before video with **Postgres + Kafka + Redis**, inspired by MagicStream (movie streaming foundation with JWT/httpOnly-cookie auth and HTTP Range streaming).

- **Transactional outbox** → Postgres + Debezium CDC — domain write + outbox insert in one TX, `SKIP LOCKED` dispatcher → Kafka, driving async FFmpeg/HLS transcoding workers over gRPC (Protobuf) — see `proofs/cinefund/0013_outbox.up.sql:1` + `proofs/cinefund/README.md:13`
- **Payments** — Redis `SETNX` (24h TTL, `idem:wh:<eventID>`) in front of Postgres `UNIQUE(provider, provider_event_id)` (`proofs/cinefund/0008_payment_events.up.sql:13`) — 50 concurrent webhooks → 1 success / 49 `ErrDuplicateEvent` (`proofs/cinefund/idempotency-50concurrent.txt:1`), double-entry ledger (`proofs/cinefund/0011_ledger.up.sql:1`)
- **Streaming** — MinIO/S3 presigned uploads and HTTP Range serving, so `<video>` seeks without downloading the whole file
- **Production habits** — token-bucket rate limiting (tighter on auth routes), request-ID tracing, `log/slog` structured logs, Docker + Makefile, graceful shutdown

Full API spec, architecture, data model, and security docs live in the repo's `docs/` folder — the standard I hold every project to.

`Go` `PostgreSQL` `Kafka` `Redis` `gRPC` `FFmpeg` `Docker` — **[Repository →](https://github.com/maczeo11/cinefund)**

---

<img src="https://capsule-render.vercel.app/api?type=rect&height=60&color=0:1a1030,100:2d1a5c&text=Serverless%20Apartment%20Maintenance%20Portal&fontSize=17&fontColor=e6e9f0&fontAlignY=58&animation=fadeIn" width="100%" alt="Serverless Apartment Maintenance Portal" />

Full-stack maintenance-request system for 50+ residents and 15+ admins across 3 campuses — the project I used to get single-table DynamoDB design and CDK-as-IaC right before bringing them to PRAJNA.

- SLA tracking runs on an EventBridge cron firing every 15 minutes, not a human checking a dashboard
- Single-table DynamoDB design with Cognito-backed role-based access
- 100% infrastructure-as-code via AWS CDK (TypeScript) — no console-clicked resources

`TypeScript` `AWS CDK` `DynamoDB` `React` — **[Repository →](https://github.com/maczeo11/serverless-apartment-manager)**

<img src="https://capsule-render.vercel.app/api?type=rect&height=60&color=0:1a1030,100:2d1a5c&text=Universal%20Text%20Extractor&fontSize=17&fontColor=e6e9f0&fontAlignY=58&animation=fadeIn" width="100%" alt="Universal Text Extractor" />

A hybrid extraction pipeline that turns PDFs, Word docs, spreadsheets, images, and HTML into one standardized JSON shape — built to handle the "dark data" problem of documents that don't come pre-structured.

- Strategy pattern on the backend, so adding a new file format doesn't touch existing extractors (Open/Closed Principle)
- Hybrid OCR pipeline: OpenCV preprocessing feeding Tesseract's LSTM engine, for scanned documents that plain text extraction can't touch
- Queue-managed frontend to keep memory bounded on free-tier hosting

`Python` `OpenCV` `Docker` `JavaScript` — **[Repository →](https://github.com/maczeo11/File_extractor)**

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

<div align="center">
<img src="https://gh-readme-stats-liart.vercel.app/api?username=maczeo11&show_icons=true&theme=tokyonight&hide_border=true&rank_icon=github&include_all_commits=true&count_private=true" width="48%" alt="GitHub stats for maczeo11" />
<img src="https://streak-stats.demolab.com/?user=maczeo11&theme=tokyonight&hide_border=true&fire=FF6E40&currStreakLabel=FF6E40&sideNums=FFF&sideLabels=A371F7&dates=A371F7" width="48%" alt="GitHub streak stats" />
</div>

<div align="center">
<img src="https://gh-readme-stats-liart.vercel.app/api/top-langs/?username=maczeo11&layout=compact&theme=tokyonight&hide_border=true&langs_count=8&size_weight=0.5&count_weight=0.5" width="48%" alt="Top languages for maczeo11" />
<img src="https://github-readme-stats.vercel.app/api/wakatime?username=maczeo11&theme=tokyonight&hide_border=true&layout=compact" width="48%" alt="WakaTime coding stats" />
</div>

<div align="center">
<img src="https://github-readme-activity-graph.vercel.app/graph?username=maczeo11&theme=tokyo-night&hide_border=true&area=true&height=300" width="100%" alt="Contribution graph for maczeo11" />
</div>

<br/>

<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/maczeo11/maczeo11/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/maczeo11/maczeo11/output/github-contribution-grid-snake.svg">
  <img alt="Contribution snake animation" width="100%" src="https://raw.githubusercontent.com/maczeo11/maczeo11/output/github-contribution-grid-snake.svg">
</picture>
</div>

<br/>

<div align="center">
<img src="https://gitcity-azure.vercel.app/api/svg?username=maczeo11&theme=violet" width="100%" alt="3D isometric contribution skyline" />
</div>

<br/>

<div align="center">
<img src="assets/footer.svg" width="100%" alt="" />
<br/><br/>
<sub>Build systems that scale, write code that lasts.</sub>
</div>
