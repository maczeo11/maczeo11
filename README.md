<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=30&pause=1000&color=6E40C9&center=true&vCenter=true&width=700&lines=Hey+there%2C+I'm+Bhanu+Teja+%F0%9F%91%8B;Backend+%26+Cloud-Native+Engineer;AWS+CDK+%7C+TypeScript+%7C+DynamoDB;Building+systems+that+scale+%F0%9F%9A%80)](https://git.io/typing-svg)

<img src="https://komarev.com/ghpvc/?username=maczeo11&style=for-the-badge&color=6E40C9&label=PROFILE+VIEWS" />

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bhanu-teja-komma-4b5547293/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:bhanu0005a@gmail.com)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/GB2023002633/)

</div>

---

## 🧠 About Me

```yaml
name       : Bhanu Teja Komma
education  : B.Tech CSE @ GITAM University Bengaluru (2027) | CGPA: 8.9
role       : Business Logic Layer Lead — Project PRAJNA
             → University product initiative; own Modules 13–18,
             → personally building the Approval Workflow Engine (Module 13)
focus      : Cloud-native backend engineering · System design · Event-driven architecture
currently  : Building the Approval Workflow Engine for PRAJNA;
             studying distributed systems and agentic AI patterns
location   : Bangalore, India 🇮🇳
interests  : Distributed systems, infrastructure as code, AI agents
```

---

## 🛠️ Tech Stack

**Languages I work in**

[![My Skills](https://skillicons.dev/icons?i=ts,python,java)](https://skillicons.dev)

**Exploring**

[![My Skills](https://skillicons.dev/icons?i=cpp,go,rust)](https://skillicons.dev)

**Cloud & Backend**

[![My Skills](https://skillicons.dev/icons?i=aws,nodejs,react,fastapi,spring)](https://skillicons.dev)

**Tools & DevEnv**

[![My Skills](https://skillicons.dev/icons?i=git,linux,docker,vscode,powershell)](https://skillicons.dev)

**AWS services I actually use:**

![AWS CDK](https://img.shields.io/badge/CDK-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white)
![EventBridge](https://img.shields.io/badge/EventBridge-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white)
![Cognito](https://img.shields.io/badge/Cognito-DD344C?style=flat-square&logo=amazonaws&logoColor=white)
![API Gateway](https://img.shields.io/badge/API_Gateway-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white)
![S3](https://img.shields.io/badge/S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![SSM](https://img.shields.io/badge/SSM-FF9900?style=flat-square&logo=amazonaws&logoColor=white)

---

## 🚀 Featured Work

### 🏛️ Project PRAJNA — Approval Workflow Engine *(team repo, private)*

University product initiative under **alumni mentorship**. I lead the Business Logic Layer (Modules 13–18) and personally build the **Approval Workflow Engine (Module 13)** — the single authority over approval state for every faculty submission across 3 campuses.

- **Serverless, event-driven** — AWS Lambda + DynamoDB (single-table, 3 GSIs) + EventBridge, defined as IaC with AWS CDK in TypeScript
- **Rank-based escalation ladder** that prevents self-loops on multi-step workflows
- **Idempotent** workflow creation (safe under Lambda retries) + **optimistic locking** (no lost updates when an approver races the escalation cron)
- **Cognito + JWT** auth scoped by role and campus; multi-tenant isolation across campuses
- Hardened via a code-review pass that fixed 11 correctness/security issues; backed by 37 unit tests

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![AWS CDK](https://img.shields.io/badge/-AWS_CDK-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Lambda](https://img.shields.io/badge/-Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)
![DynamoDB](https://img.shields.io/badge/-DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white)
![EventBridge](https://img.shields.io/badge/-EventBridge-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white)
![Cognito](https://img.shields.io/badge/-Cognito-DD344C?style=flat-square&logo=amazonaws&logoColor=white)

---

## 🛠️ Personal Projects

<table>
<tr>
<td width="50%">

### 🏠 Serverless Apartment Portal
Full-stack serverless maintenance system on AWS with role-based access (Resident / Admin).
- **Automated SLA tracking** via EventBridge cron (every 15 min)
- **Single-table DynamoDB** design + Cognito RBAC
- **100% IaC** — defined with AWS CDK (TypeScript)

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![AWS CDK](https://img.shields.io/badge/-AWS_CDK-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![DynamoDB](https://img.shields.io/badge/-DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)

[![Repo](https://img.shields.io/badge/View_Repo-181717?style=flat-square&logo=github)](https://github.com/maczeo11/serverless-apartment-manager)

</td>
<td width="50%">

### 📄 Universal Text Extractor
Solves the "Dark Data" problem — extracts from PDF, Word, Excel, Images & HTML into standardized JSON.
- **Strategy Pattern** backend (Open/Closed Principle)
- **Hybrid OCR pipeline** — OpenCV pre-processing + Tesseract LSTM
- **Smart frontend queue** for free-tier memory management

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![OpenCV](https://img.shields.io/badge/-OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

[![Repo](https://img.shields.io/badge/View_Repo-181717?style=flat-square&logo=github)](https://github.com/maczeo11/File_extractor)

</td>
</tr>
<tr>
<td width="50%">

### 🤖 TechBot — AI Lab Assistant
Terminal-based AI agent for IT troubleshooting & live system diagnostics.
- **LangChain LCEL** agent with Groq `llama-3.3-70b`
- **Live psutil diagnostics** — CPU, RAM, Disk, Processes
- **Whitelisted shell execution** (`ping`, `netstat`, `df`)
- Rich terminal UI

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![LangChain](https://img.shields.io/badge/-LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![Groq](https://img.shields.io/badge/-Groq-F55036?style=flat-square&logoColor=white)

[![Repo](https://img.shields.io/badge/View_Repo-181717?style=flat-square&logo=github)](https://github.com/maczeo11/sys-ai)

</td>
<td width="50%">

### ✈️ Tourism Safety App
Mobile-first safety application for travellers.
- Cross-platform **Flutter** frontend
- Python backend for safety data

![Flutter](https://img.shields.io/badge/-Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/-Dart-0175C2?style=flat-square&logo=dart&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)

[![Repo](https://img.shields.io/badge/View_Repo-181717?style=flat-square&logo=github)](https://github.com/maczeo11/tourism_safety_app)

</td>
</tr>
</table>

---

## 📊 GitHub Stats

<div align="center">

[![GitHub Streak](https://streak-stats.demolab.com?user=maczeo11&theme=tokyonight&hide_border=true)](https://git.io/streak-stats)

</div>

---

## 🏆 Trophies

<div align="center">

[![trophy](https://github-profile-trophy.vercel.app/?username=maczeo11&theme=tokyonight&column=7&margin-w=10&no-frame=true)](https://github.com/ryo-ma/github-profile-trophy)

</div>

---

## 📈 Contribution Activity

<div align="center">

[![Bhanu's Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=maczeo11&theme=tokyo-night&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)

</div>

---

<div align="center">

*"Build systems that scale, write code that lasts."*

![Wave](https://capsule-render.vercel.app/api?type=waving&color=6E40C9&height=80&section=footer)

</div>
