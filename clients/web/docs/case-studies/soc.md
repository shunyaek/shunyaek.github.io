### ✨ Case-Study — Cloud-Native SOC-as-a-Service Platform (Concise)

---

#### 1. Project Snapshot

* **Domain**  Cyber-Security Monitoring & Incident Response
* **Engagement**  Green-field, full-stack SaaS build for 24 × 7 SOC operations
* **Timeline**  Jan 2025 – Jun 2025 (6 mos)
* **Tech Highlights**  Next.js · TypeScript · Mantine · EmotionJS · React Native (Expo) · Python · Starlette · AuthJS · PostgreSQL · Docker · Kubernetes · GitHub Actions

---

#### 2. Challenge

A fast-growing security provider needed to productise its managed-SOC offering. The new platform had to:

* ingest multi-tenant logs in real time,
* surface AI-driven threat scores on web & mobile, and
* meet strict compliance (GDPR, PCI-DSS) without a large ops team.

---

#### 3. Goals & Success Metrics

* **Primary objective**  Launch a SOC-as-a-Service MVP in < 6 months and onboard the first ten customers by day 100.
* **KPIs**

  * End-to-end onboarding wizard ≤ 15 min per tenant
  * Alert latency ≤ 60 sec from log ingestion to analyst console
  * Mobile push latency ≤ 5 sec for P1 incidents
  * CI green-build rate ≥ 95 % on `main`

---

#### 4. Our Role

| Role                    | Scope (examples)                             | % Effort |
| ----------------------- | -------------------------------------------- | -------- |
| Full-stack Lead         | Next.js web, React Native app, design system | 45 %     |
| Platform & API Engineer | Starlette services, AuthJS, Postgres schema  | 35 %     |
| Dev-Ops & SRE Advocate  | Docker, K8s helm charts, GitHub Actions CI   | 20 %     |

---

#### 5. Approach & Process

* **Mantine + EmotionJS** design tokens → 35 reusable components in 4 weeks.
* Implemented **multi-tenant auth** (AuthJS) with row-level RLS in PostgreSQL.
* **Starlette** API layer streams JSON logs → Kafka → anomaly-scoring worker.
* Built **Next.js dashboard** (server components + React Query) and **Expo** mobile app sharing a single GraphQL client.
* CI/CD: GitHub Actions → Docker build → helm deploy to managed K8s; Trivy + OPA gates.
* Synthetic k6 tests guarantee **≤ 60 sec** alert SLA before each release.

---

#### 6. Solution Highlights

* **Onboarding Wizard** provisions tenant DB schema, API keys, and S3 log bucket in < 15 min.
* **Live Threat Map** updates every 5 sec via websockets; supports drill-down to raw event.
* **Mobile SOC Companion** pushes P1/P2 alerts with swipe-to-ack flows.
* **Cost-aware autoscaling** (KEDA + Prometheus) saves 30 % compute on quiet nights.

---

#### 7. Impact

| Metric                     | Before (manual MSSP) | After (SaaS) | Δ     |
| -------------------------- | -------------------- | ------------ | ----- |
| Tenant onboarding time     | 2–3 days             | **14 min**   | −99 % |
| Alert latency (sec)        | 180                  | **48**       | −73 % |
| Push latency mobile (sec)  | —                    | **4.2**      | n/a   |
| Monthly ops hours / tenant | 12                   | **2**        | −83 % |

---

#### 8. Key Learnings

* **Shared design tokens** cut mobile & web UI effort by \~40 %.
* **Row-level security** in Postgres is simpler than per-table sharding for SMB SOC workloads.
* Embedding SLA tests in CI prevents silent performance regressions.

---

#### 9. Visual Glimpse *(optional)*

> *Log → Kafka → Anomaly-Worker → Starlette API → Next.js / Expo clients*

---

#### 10. What’s Next?

* Add MITRE ATT\&CK-mapped playbooks for auto-response.
* Offer customer-managed keys via envelope encryption.

---
