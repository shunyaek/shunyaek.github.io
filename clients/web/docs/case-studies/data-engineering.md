### ✨ Case-Study — Data Platform Modernisation for a Mission-Driven Analytics Provider (Concise)

---

#### 1. Project Snapshot

* **Domain**  Social-Impact Data Consulting & Analytics
* **Engagement**  Data engineering, ETL automation, BI enablement
* **Timeline**  Feb 2023 – Oct 2023 (9 mos)
* **Tech Highlights**  Python · FastAPI · Celery · Jupyter · Azure Data Factory · Microsoft SQL Server · Tableau · Power BI · XML/WSDL · SOAP/REST · Windows Server · WSL · Docker

---

#### 2. Challenge

A nonprofit-focused analytics firm relied on manual scripts and legacy SSIS jobs to ingest donation, program, and engagement data from disparate CRM systems and government open-data feeds delivered via SOAP. Reports took days to refresh, insights lagged, and auditors lacked a single source of truth.

---

#### 3. Goals & Success Metrics

* **Primary objective**  Deliver a unified, auditable data platform that refreshes key dashboards within 30 minutes of source arrival.
* **KPIs**

  * ETL latency ≤ 30 min (was 24 h)
  * Data reconciliation accuracy ≥ 99.5 %
  * Dashboard build time for new KPIs ↓ from 10 days to ≤ 2 days
  * Reduce ad-hoc script maintenance by ≥ 80 %

---

#### 4. Our Role

| Role                        | Scope (examples)                           | % Effort |
| --------------------------- | ------------------------------------------ | -------- |
| Lead Data Engineer          | Pipeline design, FastAPI micro-services    | 60 %     |
| BI & Visualisation Engineer | Tableau / Power BI models, data dictionary | 25 %     |
| DevOps Contributor          | Dockerisation, Azure CI/CD, monitoring     | 15 %     |

---

#### 5. Approach & Process

* **Azure Data Factory pipelines** staged SOAP/WSDL feeds (XML) and REST JSON into Microsoft SQL Server.
* Wrote **Python & FastAPI micro-APIs** to normalise complex XML schemas and expose versioned ingestion logs.
* Orchestrated heavy transforms in **Celery** workers running on Docker/WSL nodes inside Windows Server.
* Implemented **data-quality framework** (row-count, checksum, business rules) stored in metadata tables.
* Built **semantic layers** in Tableau + Power BI with reusable measures and a governed data dictionary.
* Added **role-based query routing** so analysts hit read-only replicas while ETL loads primary.
* Automated tests with **PyTest & nbval** against Jupyter notebooks that document each pipeline.

---

#### 6. Solution Highlights

* **SOAP-to-SQL Bridge** converts 2 000+ XML records/min into typed tables with zero data loss.
* **Change-Data-Capture** detects delta rows, trimming nightly load times by 67 %.
* **One-Click KPI Builder** (Tableau Prep flows + YAML metadata) spins up new dashboards in under 2 days.
* **Dynamic SLA Monitor** posts latency and quality metrics to Teams every hour.

---

#### 7. Impact

| Metric                             | Before | After      | Δ       |
| ---------------------------------- | ------ | ---------- | ------- |
| ETL latency                        | 24 h   | **26 min** | −98 %   |
| Reconciliation accuracy            | 96.8 % | **99.7 %** | +2.9 pp |
| Dashboard build time (days)        | 10     | **2**      | −80 %   |
| Ad-hoc script maintenance (hrs/mo) | 40     | **6**      | −85 %   |

---

#### 8. Key Learnings

* Converting **Jupyter research notebooks** straight into parametrised Celery tasks prevents drift.
* **Metadata-driven quality rules** catch upstream schema changes before they hit BI layers.
* A **SOAP-first ingestion layer** still wins when partners can’t upgrade—wrap with micro-APIs, don’t rewrite them.

---

#### 9. Visual Glimpse *(optional)*

> *Azure Data Factory → FastAPI Normalisers → SQL Server → Tableau/Power BI Dashboards*

---

#### 10. What’s Next?

* Migrate CDC pipeline to Azure Synapse for lakehouse scalability.
* Add **predictive churn scoring** for donor segments using AutoML.

---
