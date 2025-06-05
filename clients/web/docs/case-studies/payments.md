### ✨ Case-Study — Self-Service Cloud Budgeting Portal for an Enterprise FinOps Team (Concise)

---

#### 1. Project Snapshot

* **Domain**  Cloud Resource Management & Cost Governance
* **Engagement**  Front-end architecture, design-system leadership, developer enablement
* **Timeline**  Nov 2023 – Nov 2024 (12 mos)
* **Tech Highlights**  React (18) · TypeScript · Fluent UI · XState · ImmerJS · React Query · Jest & React-Testing-Library · Storybook · Vite

---

#### 2. Challenge

PayPal’s platform teams were tracking cloud budgets and resource requests in siloed spreadsheets and ServiceNow tickets, delaying approvals and obscuring spend forecasts. A new portal needed to:

* give engineers a **self-service wizard** for requesting VMs, DB clusters, and SaaS add-ons,
* surface **real-time cost & policy checks**, and
* export live data to FinOps dashboards—while meeting WCAG 2.2 AA accessibility and PayPal’s strict design-language guidelines.

---

#### 3. Goals & Success Metrics

* **Primary objective**  Cut infrastructure request-to-approval time by **≥ 75 %**.
* **KPIs**

  * Median ticket cycle ↓ from 7 days to **< 36 h**
  * Design-system adoption across 6+ internal apps ≥ 90 %
  * Unit + integration test coverage ≥ 85 % lines
  * Accessibility Lighthouse score ≥ 98 %

---

#### 4. Our Role

| Role                              | Scope (examples)                              | % Effort |
| --------------------------------- | --------------------------------------------- | -------- |
| Consulting Front-end Lead         | Architecture, component library, XState flows | 60 %     |
| Design-system Steward             | Tokens, theming, Storybook docs               | 20 %     |
| Testing & Dev-Experience Advocate | Jest/RTL, CI rules, Vite performance tuning   | 20 %     |

---

#### 5. Approach & Process

* **Fluent UI + design tokens** ⇒ produced 55 reusable components in 6 weeks.
* Modelled complex approval logic with **XState**; statecharts shared between FE & BE for validation parity.
* Used **ImmerJS** for immutable form drafts; **React Query** streamed cost estimates (< 800 ms).
* Storybook + Chromatic visual tests locked UI regressions before merge.
* Integrated **Lighthouse-CI** and **axe-core** into GitHub Actions to gate a11y and performance.
* Auth & RBAC bridged via PayPal OAuth2; all API calls typed with generated OpenAPI hooks.

---

#### 6. Solution Highlights

* **Request Wizard** — dynamic, policy-aware forms adapt to tenant quotas and display live cost deltas.
* **Cost Dashboard** — React-Query cache+web-socket pushes spend and forecast variances in real time.
* **One-click Decommission** with confirmable state machine prevents orphaned resources.
* **Dark-/Light-mode tokens** meet PayPal brand and WCAG contrast with zero extra CSS.

---

#### 7. Impact

| Metric                         | Before | After    | Δ      |
| ------------------------------ | ------ | -------- | ------ |
| Request-to-approval cycle      | 7 days | **32 h** | −81 %  |
| Design-system adoption (apps)  | 0      | **6**    | +6     |
| Test coverage (lines)          | 42 %   | **88 %** | +46 pp |
| Accessibility Lighthouse score | 79     | **99**   | +20    |

---

#### 8. Key Learnings

* **State machines** clarify approval edge-cases and ease QA hand-offs.
* **Tokenised Fluent UI** accelerates new apps—single source of truth.
* Enforcing **a11y & perf gates in CI** keeps quality high without manual reviews.

---

#### 9. Visual Glimpse *(optional)*

> *State-chart diagram → Component library tokens → Request Wizard UI → Cost Dashboard*

---

#### 10. What’s Next?

* Embed **AI-assisted sizing suggestions** using historical utilisation.
* Expose **GraphQL façade** so other PayPal tools consume the design-system components natively.

---
