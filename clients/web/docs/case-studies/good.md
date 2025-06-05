### ✨ Case-Study — Cloud-Native Social Fundraising Platform (Concise)

---

#### 1. Project Snapshot

* **Domain**  Digital Fundraising & Volunteer Engagement
* **Engagement**  Green-field product build → cloud-native scale-up
* **Timeline**  Feb 2023 – May 2025 (two phases, 22 mos total)
* **Tech Highlights**  TypeScript · React · Tailwind CSS · Zustand · React Query · XState · FastAPI · Python · Kubernetes · Docker · Pulumi · Spotify Backstage · GitHub Actions

---

#### 2. Challenge

A mission-driven startup set out to launch a social network that connects nonprofits with donors and volunteers. Phase 1 required a polished, accessible front-end that could evolve quickly; Phase 2 demanded a **turn-key micro-service factory** to speed feature delivery without compromising reliability or cost.

---

#### 3. Goals & Success Metrics

* **Primary objective**  Ship an MVP in six months and create an infra runway that supports rapid module proliferation with “form-to-prod” automation.
* **KPIs**

  * MVP feature velocity ≥ 4 releases/week (Phase 1)
  * Micro-service spin-up time ≤ 15 min from schema form to live pod (Phase 2)
  * 99.9 % service availability under 3× traffic spikes
  * CI pipeline green rate ≥ 95 % on main branch

---

#### 4. Our Role

| Phase | Role                              | Scope (examples)                                      | % Effort |
| ----- | --------------------------------- | ----------------------------------------------------- | -------- |
| 1     | Senior Front-end Engineer         | Design system, React SPA, testing stack               | 60 %     |
| 1     | Dev-Experience Advocate           | Vite, Storybook, GitHub Actions CI                    | 40 %     |
| 2     | Lead Software / Platform Engineer | Kubernetes architecture, Pulumi IaC, Backstage portal | 70 %     |
| 2     | Automation Engineer               | Form-to-pod generator, schema DSL, XState flows       | 30 %     |

---

#### 5. Approach & Process

* **Design-tokenised component library**: Tailwind CSS + Storybook produced 40 re-usable primitives in five weeks.
* **State-machine UX** with XState unified onboarding, post creation, and donation flows.
* **Form-to-Pod Generator**:

  * Low-code wizard captures table schema (column + type).
  * Terraform-like schema is converted to FastAPI scaffolds via cookie-cutter templates.
  * GitHub Actions builds Docker image, Pulumi injects it into EKS, Backstage registers the service card—**end-to-end in < 15 min**.
* **Pulumi stack** codifies VPC, IAM, RDS Postgres, and cert-manager; blue-green deploys via Argo Rollouts.
* **Observability**: Loki + Tempo with Grafana dashboards; auto-alerts in Slack.
* **Test Pyramid**: Jest + RTL (UI), PyTest (API), k6 (load) baked into PR checks.

---

#### 6. Solution Highlights

* **Instant Data-Driven Modules** — any internal PM can launch a new cause, poll, or donation workflow without platform engineer touchpoints.
* **Self-Service Service Catalog** — Backstage templates ensure docs, SLOs, and ownership set at birth.
* **Cost-Aware Autoscaling** — KEDA scales Celery workers on queue depth, saving \~38 % monthly compute.
* **Progressive Web App** — offline pledge queue syncs when mobile bandwidth is intermittent.

---

#### 7. Impact

| Metric                              | Before        | After       | Δ            |
| ----------------------------------- | ------------- | ----------- | ------------ |
| Feature releases per week (Phase 1) | —             | **4.3**     | —            |
| Micro-service spin-up time          | Manual (days) | **14 min**  | >95 % faster |
| Mean deploys/day (main)             | 1             | **7**       | +600 %       |
| Uptime during traffic spikes        | 97.5 %        | **99.94 %** | +2.44 pp     |

---

#### 8. Key Learnings

* **State machines** clarify complex social workflows and ease QA.
* A **service catalog** with baked-in SLO templates prevents ownership gaps.
* **Pulumi + GitHub Actions** offers faster feedback than static YAML for a small platform team.

---

#### 9. Visual Glimpse *(optional)*

> *Schema Form → Code Gen → CI Build → Pulumi Deploy → Backstage Card*

---

#### 10. What’s Next?

* Add **multi-tenant sharding** for region-specific nonprofits.
* Introduce **server-side React streaming** to shave initial load times on 3G devices.

---
