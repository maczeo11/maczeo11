<div align="center">

<img src="assets/banner.svg" alt="Bhanu Teja Komma — Backend Engineer, Cloud-Native Systems on AWS" width="100%" />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1200&color=A371F7&center=true&vCenter=true&width=560&lines=Cloud-native+backend+systems;Go+for+backend%2C+Rust+for+fun%2C+FastAPI+for+speed;CachyOS+%2B+x86-64-v4;systemd+timers%2C+not+cron;bpftune+tunes%3B+I+supervise;firewalld%3A+default+zone+is+home;Single-table+design+patterns;Idempotent+by+default;Event-driven%2C+not+event-ual)](https://git.io/typing-svg)

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
role:      Business Logic Layer Lead, Project PRAJNA
owns:      6 of 30 modules · 36 Lambda handlers · contracts for 5 partner teams
currently: FEI-1000 — a 9-cluster, 70-parameter faculty scoring engine
location:  Bengaluru, India
openTo:    Backend / cloud-native roles
```

I build backend systems where the interesting part isn't the CRUD, it's what happens when two requests race each other. Most of my time lives inside AWS Lambda, DynamoDB, and EventBridge — thinking through idempotency, optimistic locking, and single-table design instead of bolting them on after something breaks in production.

I lead the Business Logic Layer on **PRAJNA**, a faculty performance platform built by a 24-developer team under alumni mentorship. I own six serverless modules — approvals, scoring, leaderboards, notifications, accreditation reporting and appraisals — and the frozen event contracts five partner teams build against.

The two pieces I'd point at first: the **Approval Workflow Engine**, which every approval decision across three campuses passes through and has to get right under concurrent access; and **FEI-1000**, the scoring engine that turns those approvals into a defensible 0–1000 faculty score.

<br/>

## Tech Stack

**Core**
<img src="https://skillicons.dev/icons?i=ts,python,java,nodejs" />

**Backend & Data — what I lean on**

<img src="https://skillicons.dev/icons?i=go,fastapi,postgres,redis" />
<sub>Go for the hot path, FastAPI when Python fits, Postgres when I need a real database, Redis for the speed layer.</sub>

**AWS & Infrastructure**

![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white)
![CDK](https://img.shields.io/badge/CDK_(TypeScript)-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![EventBridge](https://img.shields.io/badge/EventBridge-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white)
![Cognito](https://img.shields.io/badge/Cognito-DD344C?style=flat-square&logo=amazonaws&logoColor=white)
![API Gateway](https://img.shields.io/badge/API_Gateway-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white)
![S3](https://img.shields.io/badge/S3-569A31?style=flat-square&logo=amazons3&logoColor=white)

**Languages I Reach For**

<img src="https://skillicons.dev/icons?i=rust" />
<sub>Rust for systems-level projects — for the fun of it.</sub>

**Tools & Workflow**

<img src="https://skillicons.dev/icons?i=git,linux,docker,vscode,neovim" />

![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-0D597F?style=flat-square&logo=alpinelinux&logoColor=white)
![Arch Linux](https://img.shields.io/badge/Arch_Linux-1793D1?style=flat-square&logo=archlinux&logoColor=white)

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
<img src="https://img.shields.io/badge/CachyOS-1793D1?style=for-the-badge&logo=cachyos&logoColor=white" />
<img src="https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=archlinux&logoColor=white" />
<img src="https://img.shields.io/badge/KDE_Plasma-1DC3FF?style=for-the-badge&logo=kdeplasma&logoColor=white" />
<img src="https://img.shields.io/badge/systemd-0B3D2E?style=for-the-badge&logo=linux&logoColor=white" />
<img src="https://img.shields.io/badge/firewalld-C5102E?style=for-the-badge&logo=linux&logoColor=white" />
<img src="https://img.shields.io/badge/eBPF-003DA5?style=for-the-badge&logo=linux&logoColor=white" />
<img src="https://img.shields.io/badge/bpftune-FF6E40?style=for-the-badge&logo=oracle&logoColor=white" />
<img src="https://img.shields.io/github/stars/oracle/bpftune?style=for-the-badge&label=bpftune&logo=oracle" />
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

<table>
<tr><td width="30%"><b>Idempotency</b></td><td>Designing writes so a Lambda retry can't double-create or double-charge anything.</td></tr>
<tr><td><b>Optimistic locking</b></td><td>Version-checked conditional writes so two approvers racing the same record don't silently clobber each other.</td></tr>
<tr><td><b>Single-table DynamoDB design</b></td><td>Modeling access patterns first, then collapsing entities into one table with GSIs instead of one table per entity.</td></tr>
<tr><td><b>Event-driven workflows</b></td><td>EventBridge as the backbone for state changes, instead of services polling each other for status.</td></tr>
<tr><td><b>Multi-tenant isolation</b></td><td>Scoping every query by role and campus at the auth layer, not trusting the client to ask nicely.</td></tr>
<tr><td><b>Policy as data</b></td><td>Encoding business rules as a registry the code interprets, so a policy change is a data edit and the API contract can be generated from the same source the engine runs on.</td></tr>
<tr><td><b>Explainable state</b></td><td>Keeping an append-only record of <i>why</i> a number is what it is — a running balance can't answer questions six months later, and the inputs can't be reconstructed after the fact.</td></tr>
</table>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## Featured Work

<img src="https://capsule-render.vercel.app/api?type=rect&height=90&color=0:1a1030,50:3b1f6e,100:6e40c9&text=PRAJNA%20%E2%80%94%20Approval%20Workflow%20Engine&fontSize=26&fontColor=ffffff&fontAlignY=58&animation=fadeIn" width="100%" alt="PRAJNA — Approval Workflow Engine" />

<sub>Team repo, private — see the architecture below instead of the source</sub>

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

<img src="https://capsule-render.vercel.app/api?type=rect&height=90&color=0:1a1030,50:3b1f6e,100:6e40c9&text=FEI-1000%20%E2%80%94%20Faculty%20Scoring%20Engine&fontSize=26&fontColor=ffffff&fontAlignY=58&animation=fadeIn" width="100%" alt="FEI-1000 — Faculty Scoring Engine" />

<sub>Team repo, private</sub>

Turning approved evidence into a defensible 0–1000 faculty score across **9 weighted clusters and 70 rubric-driven parameters**. The hard part isn't the arithmetic — it's that the output decides promotions and feeds NAAC/NBA accreditation, so every number has to be explainable years later.

- **Rubrics are data, not code** — 70 parameters live in a registry with declarative conditions, so a policy change from the framework author is a data edit. If I'm writing `if (parameterId === 20)`, I've modelled it wrong. The frontend contract is *generated* from that same registry, so the UI can't drift from the engine.
- **Weights are runtime-tunable without a deploy** — an admin re-weights the framework and a largest-remainder normaliser keeps nine cluster ceilings summing to exactly 1000 (nine `Math.round()` calls sum to 999 or 1001). Completed academic years are frozen, so a re-weighting can never retroactively move someone's score.
- **Append-only contribution ledger** — every score records which submission earned what, under which rubric rung, with which multipliers and config version. "Why is my score 842?" becomes answerable, and rubric changes become recomputable.
- **The framework contradicted itself in three places** — parameter maxima summing to 1072 rather than 1000, a cover page disagreeing with its own tables. I documented each assumption and pinned it with invariant tests instead of silently picking a number.

`TypeScript` `AWS Lambda` `DynamoDB` `EventBridge`

---

<img src="https://capsule-render.vercel.app/api?type=rect&height=90&color=0:0f2027,50:1a3a4a,100:2d6a4f&text=cineFund%20%E2%80%94%20Short-Film%20Crowdfunding&fontSize=26&fontColor=ffffff&fontAlignY=58&animation=fadeIn" width="100%" alt="cineFund — Short-Film Crowdfunding" />

Event-driven Go backend for crowdfunding short films — money handled with idempotency guarantees and video transcoding pushed off the request path. Grew out of MagicStream, a movie streaming server whose JWT/httpOnly-cookie auth, MongoDB layer and HTTP Range streaming became the foundation here.

- **Transactional outbox** → Mongo Change Streams → Kafka, driving async FFmpeg/HLS transcoding workers over gRPC (Protobuf)
- **Payments** — Redis `SETNX` idempotency guards on webhooks, so a retried callback can't double-charge or double-credit a pledge
- **Streaming** — MinIO/S3 presigned uploads and HTTP Range serving, so `<video>` seeks without downloading the whole file
- **Production habits** — token-bucket rate limiting (tighter on auth routes), request-ID tracing, `log/slog` structured logs, Docker + Makefile, graceful shutdown

Full API spec, architecture, data model, and security docs live in the repo's `docs/` folder — the standard I hold every project to.

`Go` `Kafka` `gRPC` `Redis` `MongoDB` `JWT` `Docker` — **[Repository →](https://github.com/maczeo11/go-movie-streaming)**

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
- **[Tourism Safety App](https://github.com/maczeo11/tourism_safety_app)** — cross-platform Flutter app with a Python backend aggregating traveller safety data.

</details>

<br/>

<div align="center">
<img src="assets/divider.svg" width="100%" alt="divider" />
</div>

<br/>

## GitHub Activity

<div align="center">
<img src="https://raw.githubusercontent.com/maczeo11/maczeo11/stats/stats.svg" width="48%" alt="GitHub stats for maczeo11" />
<img src="https://raw.githubusercontent.com/maczeo11/maczeo11/stats/top-langs.svg" width="48%" alt="Top languages for maczeo11" />
</div>

<div align="center">
<img src="https://github-readme-activity-graph.vercel.app/graph?username=maczeo11&theme=tokyo-night&hide_border=true&area=true&height=300" width="100%" alt="Contribution graph for maczeo11" />
</div>

<br/>

<div align="center">
<img src="assets/footer.svg" width="100%" alt="" />
<br/>
<img src="https://raw.githubusercontent.com/maczeo11/maczeo11/output/github-contribution-grid-snake-dark.svg" width="100%" alt="Contribution snake animation" />
<br/><br/>
<sub>Build systems that scale, write code that lasts.</sub>
</div>
