### ✨ Case-Study — AI-Powered Trade-Promotion Optimisation for a Global Beverages Brand (Concise)

---

#### 1. Project Snapshot

* **Domain**  FMCG Marketing & Trade Promotion Optimisation
* **Engagement**  AI modelling, micro-API data pipelines, calendar-driven UX for campaign planners
* **Timeline**  May 2023 – Feb 2024 (10 mos)
* **Tech Highlights**  Python · FastAPI · Airflow · PostgreSQL · Redis · Docker · Kubernetes · React (Next.js) · TypeScript · Tailwind CSS · Radix UI · ReCharts · AWS

---

#### 2. Challenge

A global beverages conglomerate ran hundreds of in-store price & display campaigns with a major Eastern-European retail chain.
Campaigns were planned in spreadsheets, fed by siloed POS, inventory and marketing-spend extracts that arrived **24 h late** and in conflicting formats.
Marketing managers could not see real-time lift or confidently schedule overlapping promos, often eroding margins instead of boosting volume.

---

#### 3. Goals & Success Metrics

* **Primary objective**  Lift average promotion yield by **≥ 6 %** while shrinking planning lead-time.
* **KPIs**

  * Improve uplift-forecast MAPE to ≤ 10 % (was 18 %)
  * Cut promo-planning cycle from 3 weeks to **3 days**
  * Deliver data freshness < 60 min from store POS to dashboard

---

#### 4. Our Role

| Role                          | Scope (examples)                                      | % Effort |
| ----------------------------- | ----------------------------------------------------- | -------- |
| ML / Back-end Engineer (lead) | Uplift models, FastAPI services, auth bridge          | 55 %     |
| Data Engineer                 | Airflow ETL, schema design, POS/ERP connectors        | 25 %     |
| Front-end Engineer            | Calendar UI, Tailwind/Radix design-system integration | 20 %     |

---

#### 5. Approach & Process

* **Airflow pipelines** ingest POS, inventory, weather & holiday data every 30 min into PostgreSQL/S3 partitions.
* Crafted **event-driven micro-APIs** (FastAPI) for ingest, cleansing and feature generation; each deploys independently via helm.
* Trained **CatBoost uplift models** with seasonality & price-elasticity features; tracked runs in MLflow.
* Exposed a **recommendation endpoint** returning optimal discount depth & run-length per SKU-store-week.
* Implemented **SAML SSO** and JWT scopes for analyst vs. manager roles.
* Built a **Next.js dashboard**:

  * **Calendar view** (Radix UI + Tailwind) showing live and scheduled campaigns
  * **Lift & ROI charts** (ReCharts) with drill-down to store clusters
  * Real-time updates via WebSockets + React Query
* Deployed on EKS (Spot + On-Demand nodes) with OPA policy scans in CI.

---

#### 6. Solution Highlights

* **Smart-Calendar Planner** auto-suggests campaign windows that minimise cannibalisation.
* **Compliance Logger** stores before/after price, user, and timestamp for audit readiness.
* **Anomaly Alerts** (Airflow → Slack) fire when actual vs. predicted lift diverges by > 5 pp.
* **Micro-API Boundary** lets ingestion scale separately from ML serving (p95 < 120 ms).

---

#### 7. Impact

| Metric                               | Before  | After      | Δ      |
| ------------------------------------ | ------- | ---------- | ------ |
| Avg. promotion yield (selected SKUs) | —       | **+7.2 %** | +7.2 % |
| Uplift forecast MAPE                 | 18 %    | **9.6 %**  | −47 %  |
| Planning cycle time                  | 21 days | **3 days** | −86 %  |
| Data-ingest latency                  | 24 h    | **45 min** | −97 %  |
| Analyst hours on data prep / month   | 60 h    | **12 h**   | −80 %  |

---

#### 8. Key Learnings

* **Micro-service ETL** isolates ingestion bursts and keeps ML serving stable.
* Calendar-driven UX with **design-tokenised Tailwind + Radix** speeds feature delivery & brand consistency.
* Presenting models in **advisory mode first** boosts stakeholder trust before auto-apply rollout.

---

#### 9. Visual Glimpse *(optional)*

> *Airflow ETL → Feature Store → Uplift Model API → Calendar UI & KPI Dashboards → Audit DB*

---

#### 10. What’s Next?

* Integrate **loyalty-card data** for household-level targeting.
* Add **real-time price elasticity** updates as store scans stream in.

---
