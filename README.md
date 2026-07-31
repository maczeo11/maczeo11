<div align="center">

<img src="assets/banner.svg" alt="Bhanu Teja Komma — Backend Engineer, Cloud-Native Systems on AWS" width="100%" />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1200&color=A371F7&center=true&vCenter=true&width=560&lines=Serverless+backends+on+AWS;Event-driven%2C+not+event-ual;Single-table+DynamoDB+design;Idempotent+by+default;Optimistic+locks%2C+not+hopeful+ones;Leading+PRAJNA%27s+workflow+engine;Go+for+backend%2C+Rust+for+fun)](https://git.io/typing-svg)

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
role:      Business Logic Layer Lead, Project PRAJNA (team of 5)
currently: Building the Approval Workflow Engine (Module 13)
location:  Bengaluru, India
openTo:    Backend / cloud-native roles
```

I build backend systems where the interesting part isn't the CRUD, it's what happens when two requests race each other. Most of my time lives inside AWS Lambda, DynamoDB, and EventBridge — thinking through idempotency, optimistic locking, and single-table design instead of bolting them on after something breaks in production.

Right now I lead the Business Logic Layer on **PRAJNA**, a faculty performance management platform built under alumni mentorship, where I own the **Approval Workflow Engine** — the system every approval decision across three campuses has to pass through correctly, every time.

<br/>

## Tech Stack

**Core**

<img src="https://skillicons.dev/icons?i=ts,python,java,nodejs" />

**AWS & Infrastructure**

![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white)
![CDK](https://img.shields.io/badge/CDK_(TypeScript)-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![EventBridge](https://img.shields.io/badge/EventBridge-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white)
![Cognito](https://img.shields.io/badge/Cognito-DD344C?style=flat-square&logo=amazonaws&logoColor=white)
![API Gateway](https://img.shields.io/badge/API_Gateway-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white)
![S3](https://img.shields.io/badge/S3-569A31?style=flat-square&logo=amazons3&logoColor=white)

**Databases & Backend Frameworks**

<img src="https://skillicons.dev/icons?i=postgres,fastapi" />

**Languages I Reach For**

<img src="https://skillicons.dev/icons?i=go,rust" /> <sub>Go for backend services, Rust for systems-level projects — both because I care about how things actually run.</sub>

**Tools & Workflow**

<img src="https://skillicons.dev/icons?i=git,linux,docker,vscode,neovim" />

![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-0D597F?style=flat-square&logo=alpinelinux&logoColor=white)
![Arch Linux](https://img.shields.io/badge/Arch_Linux-1793D1?style=flat-square&logo=archlinux&logoColor=white)

<sub>I split these by how much production weight I'd put behind them, not by what I've merely touched — happy to go deep on any of the AWS/core row in an interview.</sub>

<br/>

## What I Actually Think About

<table>
<tr><td width="30%"><b>Idempotency</b></td><td>Designing writes so a Lambda retry can't double-create or double-charge anything.</td></tr>
<tr><td><b>Optimistic locking</b></td><td>Version-checked conditional writes so two approvers racing the same record don't silently clobber each other.</td></tr>
<tr><td><b>Single-table DynamoDB design</b></td><td>Modeling access patterns first, then collapsing entities into one table with GSIs instead of one table per entity.</td></tr>
<tr><td><b>Event-driven workflows</b></td><td>EventBridge as the backbone for state changes, instead of services polling each other for status.</td></tr>
<tr><td><b>Multi-tenant isolation</b></td><td>Scoping every query by role and campus at the auth layer, not trusting the client to ask nicely.</td></tr>
</table>

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

**Result:** hardened through a dedicated review pass that surfaced and fixed 11 correctness/security issues, and backed by 37 unit tests at 92% coverage on the core module.

`TypeScript` `AWS CDK` `Lambda` `DynamoDB` `EventBridge` `Cognito`

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

## GitHub Activity

<div align="center">
<img src="https://github-readme-stats-sigma.vercel.app/api?username=maczeo11&show_icons=true&theme=tokyonight&hide_border=true&hide_title=true&count_private=true&include_all_commits=true" width="48%" alt="GitHub stats for maczeo11" />
<img src="https://github-readme-stats-sigma.vercel.app/api/top-langs/?username=maczeo11&layout=compact&theme=tokyonight&hide_border=true&langs_count=8&include_all_commits=true" width="48%" alt="Top languages for maczeo11" />
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
