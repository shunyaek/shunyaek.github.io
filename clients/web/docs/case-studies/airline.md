### ✨ Case-Study — AI-Driven Revenue Management for a Turkish Low-Cost Carrier (Concise)

---

#### 1. Project Snapshot

* **Domain**  Airline Revenue Management & Pricing
* **Engagement**  Full-stack ML engineering, data warehousing, UX for revenue analysts
* **Timeline**  Feb 2022 – Dec 2022 (11 mos)
* **Tech Highlights**  Python · Django REST · React + TypeScript · Material UI · Scikit-learn · XGBoost · Airflow · PostgreSQL · Redis · Snowflake · Kubernetes · AWS

---

#### 2. Challenge

The carrier’s revenue team relied on nightly spreadsheets to tweak fares, leaving millions on the table when demand shifted mid-day. Data lived in siloed DCS, PSS, and ancillary sales systems; **IATA Recommended Practice 1835** required auditable fare-class changes and historical logs. The ask: **one application that forecasts demand, recommends optimal fares, and records every override—without breaking existing reservation flows or security policies.**

---

#### 3. Goals & Success Metrics

* **Primary objective**  Lift flight revenue per available seat by ≥ 5 % while cutting analyst cycle time.
* **KPIs**

  * Improve forecast MAPE to ≤ 8 % (was 15 %)
  * Reduce fare-adjustment cycle from 24 h to < 2 h
  * Achieve full IATA RP-1835 audit compliance from day 1

---

#### 4. Our Role

| Role                          | Scope (examples)                                        | % Effort |
| ----------------------------- | ------------------------------------------------------- | -------- |
| ML & Back-end Engineer (lead) | Demand-forecast models, pricing API, Django auth bridge | 60 %     |
| Data Engineer                 | Airflow ETL, Snowflake pipelines, schema design         | 20 %     |
| Front-end Engineer            | React dashboards, Material UI design-system integration | 20 %     |

---

#### 5. Approach & Process

* **ETL blueprints** in Airflow pulled PSS, DCS, weather, and macro data into Snowflake, writing partitioned tables every 30 min.
* Trained **XGBoost + holiday / event features** for load-factor forecasts at leg-date granularity; logged experiments in MLflow.
* Exposed a **pricing micro-service** (Django + FastAPI) that returned recommended fare buckets and wrote overrides to an audit ledger (PostgreSQL → Parquet).
* Implemented **SAML SSO** using the airline’s identity provider and fine-grained role mapping for analysts vs. managers.
* Built **Material UI dashboards**—capacity curves, bid-price charts, override forms—with React Query for real-time updates.
* Deployed via **Helm charts on EKS**, using Spot + On-Demand mix for 23 % compute savings.

---

#### 6. Solution Highlights

* **Real-time Recommendation Engine** serves ≤ 150 ms responses; can be polled by PSS for auto-apply.
* **Scenario Sandbox** lets analysts simulate competitor moves and see revenue deltas instantly.
* **Fare-Class Compliance Module** stores before/after RBD, user ID, UTC timestamp—fulfilling IATA RP-1835 traceability.
* **Anomaly Alerts** (Airflow → Slack) flag routes where predicted vs. actual load diverges by > 5 pp.

---

#### 7. Impact

| Metric                                 | Before | After      | Δ      |
| -------------------------------------- | ------ | ---------- | ------ |
| Rev / Seat (selected routes)           | ­—     | **+6.4 %** | +6.4 % |
| Forecast MAPE                          | 15 %   | **7.8 %**  | −48 %  |
| Fare-adjustment cycle time             | 24 h   | **1.4 h**  | −94 %  |
| Analyst hours on manual data prep / wk | 18 h   | **4 h**    | −78 %  |

---

#### 8. Key Learnings

* Integrating **domain rules (IATA RP-1835)** early avoids retro-fit audits later.
* **React Query + WebSockets** gives analysts “live P\&L” without page reloads.
* Separate **advisory vs. auto-apply modes** eased stakeholder trust in the ML outputs.

---

#### 9. Visual Glimpse *(optional)*

> *Data Warehouse → ML Forecast → Pricing API → React Dashboards → Audit Ledger*

---

#### 10. What’s Next?

* Integrate **ancillary upsell optimisation** (bags, seats, meals).
* Enable **real-time streaming** from boarding-pass scans to refine close-in demand curves.

---
