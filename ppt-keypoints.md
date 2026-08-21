# PowerPoint Key Points — Bhanu Teja Komma (Profile Presentation)

---

## Slide 1: Title Slide

- **Name:** Bhanu Teja Komma
- **Role:** Business Logic Layer Lead, Project PRAJNA (Team of 5)
- **Focus:** Cloud-Native Backend Systems on AWS
- **Location:** Bengaluru, India
- **Open to:** Backend / Cloud-Native roles

---

## Slide 2: About Me

- Backend engineer focused on **concurrency, idempotency, and event-driven architecture**
- Core stack: AWS Lambda, DynamoDB, EventBridge
- Lead the **Business Logic Layer** on PRAJNA — a faculty performance management platform
- Owns the **Approval Workflow Engine** (Module 13) — the single authority for approval state across 3 campuses
- Philosophy: "The interesting part isn't the CRUD, it's what happens when two requests race each other"

---

## Slide 3: Tech Stack

### Core Languages
- TypeScript, Python, Java, Node.js

### AWS & Infrastructure
- Lambda, DynamoDB, CDK (TypeScript), EventBridge, Cognito, API Gateway, S3

### Databases & Frameworks
- PostgreSQL, FastAPI

### Languages of Choice
- **Go** — backend services
- **Rust** — systems-level projects

### Tools & Workflow
- Git, Linux (Alpine, Arch), Docker, VS Code, Neovim

---

## Slide 4: Engineering Mindset — What I Think About

| Concept | Description |
|---|---|
| **Idempotency** | Designing writes so Lambda retries can't double-create or double-charge |
| **Optimistic Locking** | Version-checked conditional writes to prevent race conditions between concurrent approvers |
| **Single-Table DynamoDB** | Modeling access patterns first, collapsing entities into one table with GSIs |
| **Event-Driven Workflows** | EventBridge as backbone for state changes instead of polling |
| **Multi-Tenant Isolation** | Scoping every query by role and campus at the auth layer |

---

## Slide 5: Featured Project — PRAJNA Approval Workflow Engine

- **What:** Single authority for approval state on every faculty submission across 3 campuses
- **Problem:** Approvals escalate up a rank ladder; a scheduled Lambda escalates past-SLA items — race condition between human action and automated escalation
- **Solutions:**
  - Idempotent workflow creation (no duplicate chains on Lambda retry)
  - Optimistic locking on every state update (version mismatch fails the write)
  - Rank-based escalation ladder with cycle detection
  - Cognito + JWT auth scoped by role and campus (server-side isolation)
- **Result:** 11 correctness/security issues found and fixed; 37 unit tests at 92% coverage
- **Tech:** TypeScript, AWS CDK, Lambda, DynamoDB, EventBridge, Cognito

---

## Slide 6: Featured Project — MagicStream (Movie Streaming Server)

- **What:** Go movie streaming server with React frontend
- **Key Features:**
  - Token-bucket rate limiting (tighter on auth routes, per-client isolation)
  - HTTP Range media streaming (`<video>` seeks without full download)
  - JWT access + refresh tokens in httpOnly cookies, bcrypt, token rotation
  - Request-ID tracing, structured logs (log/slog), health endpoint, Docker + Makefile
  - AI curator reviews via OpenAI (langchaingo)
- **Tech:** Go, Gin, MongoDB, JWT, React, TypeScript

---

## Slide 7: Featured Project — Serverless Apartment Maintenance Portal

- **What:** Full-stack maintenance-request system for 50+ residents and 15+ admins across 3 campuses
- **Key Points:**
  - SLA tracking via EventBridge cron (every 15 min), not manual dashboard checks
  - Single-table DynamoDB design with Cognito-backed role-based access
  - 100% infrastructure-as-code via AWS CDK (TypeScript)
- **Purpose:** Learning ground for single-table DynamoDB and CDK before PRAJNA
- **Tech:** TypeScript, AWS CDK, DynamoDB, React

---

## Slide 8: Other Projects

### Universal Text Extractor
- Hybrid extraction pipeline: PDFs, Word docs, spreadsheets, images, HTML → standardized JSON
- Strategy pattern (Open/Closed Principle), hybrid OCR (OpenCV + Tesseract LSTM)
- Queue-managed frontend for bounded memory on free-tier hosting
- **Tech:** Python, OpenCV, Docker, JavaScript

### TechBot
- Terminal AI agent for IT troubleshooting
- LangChain LCEL agent (Groq llama-3.3-70b) with live psutil diagnostics
- Whitelisted shell execution (ping, netstat, df)

### Tourism Safety App
- Cross-platform Flutter app with Python backend for traveller safety data

---

## Slide 9: Key Design Principles

1. **Idempotent by default** — retries never cause duplicate side effects
2. **Optimistic locks, not hopeful ones** — concurrent writes fail safely
3. **Event-driven, not event-ual** — EventBridge for state transitions
4. **Single-table design** — access patterns drive the model
5. **Server-side isolation** — never trust the client for multi-tenancy
6. **Infrastructure as Code** — CDK for every AWS resource

---

## Slide 10: Closing / Contact

- **GitHub:** [maczeo11](https://github.com/maczeo11)
- **LinkedIn:** [Bhanu Teja Komma](https://www.linkedin.com/in/bhanu-teja-komma-4b5547293/)
- **Email:** bhanu0005a@gmail.com
- **LeetCode:** [GB2023002633](https://leetcode.com/u/GB2023002633/)
- **Tagline:** "Build systems that scale, write code that lasts."
