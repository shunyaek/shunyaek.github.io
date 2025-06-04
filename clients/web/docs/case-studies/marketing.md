### ✨ Case-Study — AI Data Copilot for Marketing Teams (Concise)

---

#### 1. Project Snapshot

* **Domain**  Marketing Analytics & Workflow Automation
* **Engagement**  Full-stack product engineering, AI micro-services, third-party integrations
* **Timeline**  Feb 2023 – Sep 2023 (8 mos)
* **Tech Highlights**  Python · FastAPI · Celery · PostgreSQL · Redis · AWS · Docker · Kubernetes · React (Next.js) · TypeScript · Tailwind CSS · Radix UI · ReCharts · Meta & Google Marketing APIs

---

#### 2. Challenge

Growth and performance-marketing teams were losing five-plus hours each week assembling reports, tweaking campaigns, and chasing fragmented metrics across ad platforms and web-analytics tools. They needed a single **“data copilot”** that:

* understands natural-language questions,
* unifies ad, web, and CRM data via secure APIs, and
* automates critical optimisation workflows in **≤ 10 minutes**.

The MVP had to ship in eight months, scale to terabytes of ad logs, and deliver sub-second query latency.

---

#### 3. Goals & Success Metrics

* **Primary objective**  Automate reporting and campaign optimisation workflows, cutting weekly analyst effort by ≥ 75 %.
* **KPIs**

  * Time to deploy a new workflow ≤ 10 min (self-service wizard)
  * Median dashboard query latency < 800 ms
  * ETL freshness < 30 min from API pull to insight feed
  * Pass SOC 2 Type II security audit on first attempt

---

#### 4. Our Role

| Role                       | Scope (examples)                                   | % Effort |
| -------------------------- | -------------------------------------------------- | -------- |
| Full-stack Engineer (lead) | React/Next.js UI, Radix UI design-system, Tailwind | 45 %     |
| Back-end & DevOps Engineer | FastAPI, Celery task queues, AWS & Kubernetes      | 35 %     |
| Integration Engineer       | Meta, Google, HubSpot, GA4 connectors              | 20 %     |

---

#### 5. Approach & Process

* Designed a **token-based design system** (Radix primitives + Tailwind CSS) → shipped 45 reusable components in four weeks.
* Modelled **PostgreSQL schemas** for multi-tenant ad, web, and revenue data with row-level security.
* Implemented **FastAPI** gateways and Celery workers for high-volume ETL (2.1 M rows / hour peak).
* Converted research notebooks (propensity scoring, uplift detection) into **Dockerised micro-services** with gRPC + REST facades.
* Added **natural-language query layer** using OpenAI embeddings + Postgres pgvector; hydrated answers with source citations.
* Integrated Meta Ads, Google Ads, Google Analytics 4, HubSpot, TikTok Ads via async OAuth flows and webhooks.
* CI/CD: GitHub Actions → Docker build → helm deploy to EKS; OPA & Trivy scans gate every merge.

---

#### 6. Solution Highlights

* **Workflow Wizard** – drag-and-drop UI turns natural-language prompts into scheduled Celery jobs.
* **Insight Feed** – GPT-powered summaries push anomalies and opportunities straight to Slack.
* **Real-time Spend Guardrails** – streaming rules engine halts campaigns when CPA > target for 30 min.
* **Design-Token Library** – dark/light modes + brand theming delivered with zero extra CSS.

---

#### 7. Impact

| Metric                             | Before             | After        | Δ          |
| ---------------------------------- | ------------------ | ------------ | ---------- |
| Analyst hours on weekly reporting  | 5 h / team         | **1 h**      | −80 %      |
| Workflow setup time                | 3–4 days (scripts) | **< 10 min** | −99 %      |
| Dashboard p50 query latency        | 1.8 s              | **0.7 s**    | −61 %      |
| ETL data freshness                 | 6 h                | **28 min**   | −92 %      |
| Security audit re-submission count | 3                  | **0**        | Eliminated |

---

#### 8. Key Learnings

* **Design tokens + Radix** accelerate enterprise-grade UIs without custom CSS debt.
* Shipping **research → micro-service** hand-offs early prevents “notebook drift.”
* Async ETL plus on-demand embedding keeps NLP queries snappy under heavy load.

---

#### 9. Visual Glimpse *(optional)*

> *ETL / Integrations → Feature Store → ML Micro-services → FastAPI GraphQL → React Dashboard & Slack Bot*

---

#### 10. What’s Next?

* Add **predictive budget pacing** with reinforcement learning.
* Launch **self-service connector SDK** for niche ad networks.

---
