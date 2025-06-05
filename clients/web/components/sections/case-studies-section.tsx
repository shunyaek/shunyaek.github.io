"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomButton } from "@/components/ui/custom-button"
import { Pill } from "@/components/ui/pill"

/* ──────────────────────────────────────────────────────────────
   Case-Study schema - inspired by leading B2B templates
   Sections:
     • Snapshot           – 100-word overview with key facts
     • Challenge          – problem/opportunity framing
     • Goals & Metrics    – quantified success criteria
     • Team & Role Matrix – who did what, and how much
     • Approach           – bullet timeline or pillar list
     • Solution Highlights– headline features or innovations
     • Impact Table       – before/after KPIs
     • Key Learnings      – transferable insights
     • Visual Assets      – screenshots / diagrams
     • Next Steps         – roadmap or follow-up phases
   ────────────────────────────────────────────────────────────── */

interface CaseStudyMetric {
  /** e.g. "API p95 latency", "PCF batch lead-time" */
  metric: string;
  before: string | number;
  after: string | number;
  delta: string | number;
}

interface CaseStudyGoal {
  /** one-line primary objective */
  primaryObjective: string;
  /** supporting, quantified KPIs */
  kpis: string[];
}

interface CaseStudyTeamRole {
  role: string;          // e.g. "Full-stack Engineer (lead)"
  scope: string;         // brief description of responsibility
  effortPercentage: number; // 0–100
}

interface CaseStudy {
  /* — Snapshot — */
  id: string;
  title: string;
  domain: string;               // industry / problem space
  engagement: string;           // type of work (e.g. "Full-stack engineering")
  timeline: string;             // "Apr 2023 – Dec 2023 (9 mos)"
  techHighlights: string[];     // major stacks / tools

  /* — Narrative — */
  snapshot: string;             // 80-100-word elevator summary
  challenge: string;            // problem statement
  goals: CaseStudyGoal;

  /* — Delivery — */
  team: CaseStudyTeamRole[];    // role matrix
  approach: string[];           // 3-5 bullets (chronological or pillar)
  solutionHighlights: string[]; // 3-5 headline wins

  /* — Outcomes — */
  impact: CaseStudyMetric[];    // before / after / Δ table
  keyLearnings: string[];       // transferable insights

  /* — Extras — */
  visualAsset?: string;         // hero image or diagram URL
  nextSteps?: string[];         // roadmap, phase-2 ideas
  externalLink?: string;        // public article / press release
}

const caseStudySustainabilityPlatform: CaseStudy = {
  /* — Snapshot — */
  id: "sustainability-action-platform",
  title: "Enterprise Sustainability Action Platform",
  domain: "Decarbonization & Sustainability Intelligence",
  engagement: "Full-stack Engineering · AI Integration · Secure Auth",
  timeline: "Apr 2023 – Dec 2023 (9 mos)",
  techHighlights: [
    "Python",
    "FastAPI",
    "React",
    "TypeScript",
    "Keycloak",
    "Material UI",
    "ReCharts",
    "TanStack Table",
    "AWS"
  ],

  /* — Narrative — */
  snapshot:
    "This sustainability action platform delivers audit-ready corporate and product carbon footprints, harnesses AI-powered emission-factor matching to boost data quality and speed by 90 %, runs real-time what-if simulations, and securely exchanges primary supplier data through a CDP-backed ecosystem.",

  challenge:
    "Global manufacturers relied on labour-intensive spreadsheets that took weeks to assemble life-cycle data, lacked integrated what-if simulation and supplier-data exchange, and still failed to satisfy emerging CSRD and CDP disclosure rules.",

  goals: {
    primaryObjective:
      "Generate verifiable Scope 1-3 emissions footprints 10× faster than legacy processes while laying the foundation for proactive decarbonisation road-mapping.",
    kpis: [
      "Reduce product-carbon-footprint cycle time from >3 weeks to ≤2 days",
      "Achieve API p95 latency <250 ms for simulation endpoints",
      "Reach 100 % SSO adoption across all tenants at launch"
    ]
  },

  /* — Delivery — */
  team: [
    {
      role: "Full-stack Engineer (lead)",
      scope: "Auth, core APIs, data-viz UI",
      effortPercentage: 70
    },
    {
      role: "DevOps Contributor",
      scope: "CI/CD pipelines, IaC modules",
      effortPercentage: 15
    },
    {
      role: "Stakeholder Liaison",
      scope: "Weekly demos, documentation",
      effortPercentage: 15
    }
  ],

  approach: [
    "Provisioned a bespoke Keycloak cluster with tenant-aware RBAC and OIDC tokens",
    "Designed FastAPI micro-services that wrap the platform's ML library for hotspot analytics and scenario simulations",
    "Adopted contract-first APIs (OpenAPI 3) to auto-generate TypeScript clients and keep FE/BE in sync",
    "Built high-density UI components (Material UI, ReCharts, TanStack Table) with virtual scrolling for 10 k-row data sets",
    "Automated multi-stage Docker builds and blue-green deploys through GitHub Actions"
  ],

  solutionHighlights: [
    "AI-powered emission-factor matching maps raw BOM data to 110 k+ factors within minutes",
    "Generative-AI footprinting engine classifies materials and suggests reduction levers on the fly",
    "What-if simulation service lets users evaluate ingredient or supplier changes in <90 s for 5 k+ SKUs",
    "Supply-chain data-exchange module gathers primary data from 100+ suppliers via the Product Ecosystem partner network",
    "Interactive hotspot explorer visualises emissions by ingredient, process, or site with drill-down and scenario testing",
    "Glidepath simulation models decarbonisation roadmaps and quantifies impact before execution",
    "Customer success story shows AI-based factor matching performed in record time for corporate footprinting"
  ],

  /* — Outcomes — */
  impact: [
    {
      metric: "PCF batch lead-time (days)",
      before: 21,
      after: 2,
      delta: "-90 %"
    },
    {
      metric: "API p95 latency (ms)",
      before: 820,
      after: 190,
      delta: "-77 %"
    },
    {
      metric: "Manual data-prep hours / month",
      before: 160,
      after: 32,
      delta: "-80 %"
    },
    {
      metric: "Active users (month 1)",
      before: 0,
      after: 300,
      delta: "+300"
    }
  ],

  keyLearnings: [
    "Treat authentication as a first-class product component to avoid downstream security debt",
    "Contract-first APIs accelerate multi-team delivery and reduce integration bugs",
    "Incremental performance profiling keeps interactive charts responsive even with million-row data sets"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/sustainability.png",
  nextSteps: [
    "Introduce a no-code scenario builder for non-technical sustainability teams",
    "Open-source the simulation SDK to foster a partner ecosystem"
  ],
  externalLink: ""
};

const caseStudyPrivateCloudAutomation: CaseStudy = {
  /* — Snapshot — */
  id: "ehr-private-cloud-automation",
  title: "Private-Cloud Automation for a Flagship EHR Platform",
  domain: "Healthcare IT · Electronic Health Records",
  engagement: "Systems & DevOps Engineering · Infrastructure Automation · Observability",
  timeline: "Dec 2019 – Sep 2021 (22 mos)",
  techHighlights: [
    "Python",
    "Django",
    "React",
    "Bash",
    "Ansible",
    "Terraform",
    "Jenkins",
    "Elastic Stack",
    "New Relic",
    "VMware vSphere / VxRail",
    "Kubernetes",
    "HL7",
    "FHIR",
    "SOAP",
    "REST"
  ],

  snapshot:
    "Modernised a mission-critical private cloud running a leading EHR: replaced ticket-driven change management with a Django-React CI/CD portal, automated server hardening via policy-as-code, and implemented an Elastic–New Relic observability mesh. Outcome: release lead-time ↓ 88 % and mean-time-to-knowledge ↓ 73 %, all while preserving 24 × 7 clinical uptime.",

  /* — Narrative — */
  challenge:
    "Legacy, ticket-based workflows delayed clinical feature roll-outs and security patches. Fragmented monitoring obscured root causes, and new HL7/FHIR mandates plus stricter security baselines required faster, fully auditable delivery across hundreds of clusters—without jeopardising always-on patient care.",

  goals: {
    primaryObjective:
      "Shrink infrastructure change-management lead-time by ≥ 80 % while maintaining uninterrupted clinical service.",
    kpis: [
      "Reduce change cycle from >14 days to ≤48 hours",
      "Achieve MTTK <15 min for P1 incidents",
      "Reach 100 % automated CIS-hardened images across clusters"
    ]
  },

  /* — Delivery — */
  team: [
    {
      role: "Systems & DevOps Engineer (lead)",
      scope: "Private-cloud automation, CI/CD portal, server hardening",
      effortPercentage: 70
    },
    {
      role: "Observability Champion",
      scope: "Elastic + New Relic rollout, run-books, incident drill-downs",
      effortPercentage: 20
    },
    {
      role: "On-call Front-Line Engineer",
      scope: "24/7 rotation, RCA and stakeholder communication",
      effortPercentage: 10
    }
  ],

  approach: [
    "Modelled VMware and Kubernetes estates with Ansible playbooks and Terraform-style blueprints aligned to Dell VxRail 'always-on' reference architecture",
    "Built a Django-React portal wrapping Jenkins pipelines that auto-generated change tickets, embedded policy gates, and slashed approval overhead by 87 %",
    "Integrated Oracle Health security baselines (OHAI) into image-bake pipeline to enforce CIS controls at build time",
    "Deployed Elastic Stack + New Relic APM for unified logs, metrics, tracing and MTTK dashboards",
    "Added HL7-v2 & FHIR contract tests to every pipeline stage for interoperability assurance",
    "Adopted blue-green deployment strategy with automated smoke tests via GitHub-hosted runners",
    "Aligned artefacts with Oracle Cloud Infrastructure migration blueprint to enable future lift-and-shift"
  ],

  solutionHighlights: [
    "Change-as-Code portal triggers immutable image builds, policy scans, and blue-green roll-outs across 2 400+ VMs",
    "Zero-touch PXE + Ansible provisioning cuts bare-metal build time from 4 h to 40 min while inheriting hardened baselines",
    "Elastic dashboards surface root-cause signals 65 % faster, powering 12 min MTTK and reducing pager fatigue",
    "Nightly FHIR R4 validation guards 45 critical resources against regressions, ensuring partner-app compatibility",
    "Policy-as-Code gates keep compliance drift at zero and guarantee 100 % hardened baseline coverage"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "Change cycle time (hrs)", before: 336, after: 42, delta: "-88 %" },
    { metric: "Mean-time-to-knowledge", before: "45 min", after: "12 min", delta: "-73 %" },
    { metric: "Compliance drift tickets / quarter", before: 120, after: 8, delta: "-94 %" },
    { metric: "Manual release steps", before: 32, after: 5, delta: "-84 %" }
  ],

  keyLearnings: [
    "Policy-as-Code turns governance from paperwork into developer-friendly guard-rails",
    "Early, unified observability slashes MTTK and prevents pager fatigue",
    "Embedding HL7/FHIR tests in CI keeps interoperability regressions at zero even as delivery velocity accelerates"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/healthcare.png",
  nextSteps: [
    "Lift-and-shift artefacts to Oracle Cloud Infrastructure with native compliance scanning",
    "Extend Change-as-Code to database schema migrations and HL7 interface engines"
  ],
  externalLink: ""
};

const caseStudyTechDataConsulting: CaseStudy = {
  /* — Snapshot — */
  id: "tech-data-consulting-accelerators",
  title: "Data & Technology Consulting Enablement",
  domain: "Technology · Software · Data Consulting",
  engagement: "Platform Engineering · Data Accelerators · AI Enablement",
  timeline: "Oct 2021 – Jan 2023 (16 mos)",
  techHighlights: [
    "Python",
    "FastAPI",
    "Airflow",
    "Docker",
    "Kubernetes",
    "Snowflake",
    "Terraform",
    "AWS",
    "React",
    "TypeScript",
    "Tableau"
  ],

  /* — Narrative — */
  snapshot:
    "Delivered a reusable technology and data-platform toolkit that cuts time-to-first-insight from 30 to 10 days, re-uses >80 % of code across consulting engagements, and passes security review on the first attempt.",

  challenge:
    "Consulting teams lost weeks rebuilding basic pipelines and struggled to maintain consistent security compliance across diverse client environments. A standardised, drop-in solution was required to accelerate delivery and enforce best practices.",

  goals: {
    primaryObjective:
      "Provide production-ready tech and data foundations 3× faster while meeting stringent security benchmarks.",
    kpis: [
      "Reduce time-to-first-insight from 30 days to ≤10 days",
      "Achieve ≥80 % module reuse across client projects",
      "Eliminate security re-submissions (first-pass approval rate 100 %)"
    ]
  },

  /* — Delivery — */
  team: [
    {
      role: "Platform Engineer (lead)",
      scope: "Cloud templates, CI/CD workflows",
      effortPercentage: 50
    },
    {
      role: "Data Integration Developer",
      scope: "Ingestion connectors, API gateways",
      effortPercentage: 30
    },
    {
      role: "Front-end Contributor",
      scope: "React dashboards, Tableau embedding",
      effortPercentage: 20
    }
  ],

  approach: [
    "Created cloud-agnostic Terraform and helm modules for rapid VPC deployment",
    "Packaged parametrised Airflow DAGs for ingest → transform → serve",
    "Exposed common services via FastAPI micro-service layer with JWT auth",
    "Built a React wizard and CLI that scaffold repositories and infra scripts in minutes",
    "Integrated OPA & Checkov scans into GitHub Actions for policy enforcement",
    "Published onboarding notebooks and run-books to speed consultant ramp-up"
  ],

  solutionHighlights: [
    "Accelerator library offers plug-and-play modules for data ingestion, ML training, and dashboarding",
    "One-click deployment installs the full stack into client VPCs with least-privilege IAM",
    "Security-as-Code gates block non-compliant merges at CI stage",
    "Self-service dashboards authenticate via signed URLs, eliminating credential sprawl",
    "CLI + wizard UX balances power-user flexibility with no-code accessibility"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "Time-to-first-insight (days)", before: 30, after: 10, delta: "-67 %" },
    { metric: "Module reuse (%)", before: 40, after: 85, delta: "+45 pp" },
    { metric: "Security re-submissions per deployment", before: 4, after: 0, delta: "Eliminated" },
    { metric: "Non-billable ramp-up (weeks)", before: 4, after: 1, delta: "-75 %" }
  ],

  keyLearnings: [
    "Blueprints that run out-of-the-box drive far higher adoption than static guidelines",
    "Embedding compliance checks in CI eliminates surprise security findings",
    "Providing both GUI and CLI interfaces meets the needs of diverse consultant personas"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/technology-consulting.png",
  nextSteps: [
    "Add Kafka-based streaming ingestion for high-velocity datasets",
    "Open-source selected accelerator modules to grow the ecosystem"
  ],
  externalLink: ""
};

const caseStudyAirlineRevenueAI: CaseStudy = {
  /* — Snapshot — */
  id: "airline-revenue-ai",
  title: "AI-Driven Revenue Management for a Low-Cost Carrier",
  domain: "Airline Revenue Management & Pricing",
  engagement: "Full-stack ML Engineering · Data Warehousing · Analyst UX",
  timeline: "Feb 2022 – Dec 2022 (11 mos)",
  techHighlights: [
    "Python",
    "Django REST",
    "FastAPI",
    "React",
    "TypeScript",
    "Material UI",
    "Airflow",
    "Scikit-learn",
    "XGBoost",
    "MLflow",
    "Snowflake",
    "PostgreSQL",
    "Redis",
    "Kubernetes",
    "AWS"
  ],

  /* — Narrative — */
  snapshot:
    "Built an end-to-end AI revenue-management platform that forecasts demand, recommends optimal fares, and logs every override for IATA compliance—boosting revenue per seat by 6 % while cutting analyst cycle time by 94 %.",

  challenge:
    "Revenue analysts relied on daily spreadsheets and manual fare tweaks, leading to slow reactions and revenue leakage. The airline needed a secure, auditable system that provided near-real-time demand forecasts and pricing recommendations without disrupting existing reservation flows.",

  goals: {
    primaryObjective:
      "Increase flight revenue per seat by at least 5 % while reducing manual turnaround time for fare updates.",
    kpis: [
      "Improve forecast MAPE to ≤8 %",
      "Reduce fare-adjustment cycle from 24 h to <2 h",
      "Achieve 100 % IATA RP-1835 audit compliance on day 1"
    ]
  },

  /* — Delivery — */
  team: [
    {
      role: "ML & Back-end Engineer (lead)",
      scope: "Demand-forecast models, pricing API, Django auth bridge",
      effortPercentage: 60
    },
    {
      role: "Data Engineer",
      scope: "Airflow ETL, Snowflake pipelines, schema design",
      effortPercentage: 20
    },
    {
      role: "Front-end Engineer",
      scope: "React dashboards, Material UI integration",
      effortPercentage: 20
    }
  ],

  approach: [
    "Orchestrated ETL with Airflow to ingest PSS, DCS, and macro datasets into Snowflake every 30 min",
    "Trained XGBoost models (logged in MLflow) for leg-date demand forecasting with holiday and competitor features",
    "Exposed pricing recommendations via Django + FastAPI micro-service, returning sub-150 ms responses",
    "Implemented SAML SSO with fine-grained roles; integrated with airline's identity provider",
    "Built Material UI dashboards using React Query and WebSockets for live revenue metrics",
    "Deployed to EKS via Helm; mixed Spot and On-Demand nodes for 23 % compute savings"
  ],

  solutionHighlights: [
    "Recommendation engine delivers fare buckets in ≤150 ms and supports advisory or auto-apply modes",
    "Scenario Sandbox lets analysts simulate competitor moves and see revenue lift instantly",
    "Compliance module logs before/after fare-class, user, and timestamp to meet IATA RP-1835",
    "Anomaly alerts in Slack fire when actual vs. predicted load diverges by >5 pp",
    "CI/CD includes OPA & Trivy scans, guaranteeing secure images and configs"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "Revenue per seat (selected routes)", before: "baseline", after: "+6.4 %", delta: "+6.4 %" },
    { metric: "Forecast MAPE", before: "15 %", after: "7.8 %", delta: "-48 %" },
    { metric: "Fare-adjustment cycle time", before: "24 h", after: "1.4 h", delta: "-94 %" },
    { metric: "Analyst manual data-prep (hrs/wk)", before: 18, after: 4, delta: "-78 %" }
  ],

  keyLearnings: [
    "Embedding domain compliance rules early prevents costly retrofits",
    "Live dashboards with WebSockets improve analyst trust and adoption",
    "Offering both advisory and auto-apply pricing modes eases change management"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/airline.png",
  nextSteps: [
    "Integrate ancillary-revenue optimisation (bags, seats, meals)",
    "Enable real-time streaming from boarding-pass scans for close-in demand updates"
  ],
  externalLink: ""
};

const caseStudyFmcgPromoAI: CaseStudy = {
  /* — Snapshot — */
  id: "fmcg-promo-ai",
  title: "AI-Powered Marketing & Promotion for a Global Beverages Brand",
  domain: "FMCG Marketing & Trade Promotion",
  engagement: "ML Engineering · Micro-API Pipelines · Calendar-Driven UX",
  timeline: "May 2023 – Feb 2024 (10 mos)",
  techHighlights: [
    "Python",
    "FastAPI",
    "CatBoost",
    "Airflow",
    "PostgreSQL",
    "Snowflake",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "React (Next.js)",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "ReCharts"
  ],

  /* — Narrative — */
  snapshot:
    "Delivered a micro-API–driven AI platform that forecasts promotion uplift, recommends optimal discount windows, and visualises campaigns on a smart calendar—raising promo yield by 7 % and slashing planning cycle time from three weeks to three days.",

  challenge:
    "Marketing teams juggled siloed POS and spend spreadsheets, causing late reactions and sub-optimal discounts. They needed a single, secure application that ingested multi-source data hourly, predicted demand uplift, and presented recommendations in an intuitive calendar UI.",

  goals: {
    primaryObjective:
      "Boost average promotion yield by at least 6 % while reducing manual planning lead-time.",
    kpis: [
      "Achieve forecast MAPE ≤10 %",
      "Cut planning cycle from 21 days to ≤3 days",
      "Maintain data freshness <60 min from POS to dashboard"
    ]
  },

  /* — Delivery — */
  team: [
    {
      role: "ML & Back-end Engineer (lead)",
      scope: "Uplift models, pricing API, SSO integration",
      effortPercentage: 55
    },
    {
      role: "Data Engineer",
      scope: "Airflow ETL, schema design, POS connectors",
      effortPercentage: 25
    },
    {
      role: "Front-end Engineer",
      scope: "Calendar UI, Tailwind & Radix integration",
      effortPercentage: 20
    }
  ],

  approach: [
    "Implemented Airflow pipelines that ingest POS, inventory, weather and holiday data every 30 min",
    "Trained CatBoost uplift models (tracked in MLflow) incorporating seasonality and price-elasticity features",
    "Exposed FastAPI micro-services for ingest, cleanse, feature generation and recommendation serving (p95 < 120 ms)",
    "Added SAML SSO and JWT scopes for differentiated analyst and manager roles",
    "Built a Next.js dashboard with Tailwind CSS and Radix UI; calendar view and KPI charts update live via WebSockets",
    "Deployed via helm charts to EKS using a Spot + On-Demand blend, enforced OPA & Trivy scans in CI"
  ],

  solutionHighlights: [
    "Smart-calendar planner suggests campaign windows that minimise cannibalisation and overlap",
    "Compliance logger captures price before/after, user ID and timestamp for full audit trails",
    "Slack anomaly alerts trigger when actual load deviates from forecast by >5 pp",
    "Micro-API boundary lets ingestion scale independently of ML serving",
    "CI/CD chain auto-builds, scans and rolls back on failed health checks"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "Promotion yield (selected SKUs)", before: "baseline", after: "+7.2 %", delta: "+7.2 %" },
    { metric: "Forecast MAPE", before: "18 %", after: "9.6 %", delta: "-47 %" },
    { metric: "Planning cycle time", before: "21 d", after: "3 d", delta: "-86 %" },
    { metric: "Data-ingest latency", before: "24 h", after: "45 min", delta: "-97 %" }
  ],

  keyLearnings: [
    "Micro-service ETL isolates ingestion spikes and keeps ML serving stable",
    "Tailwind + Radix accelerates UI delivery while enforcing design consistency",
    "Advisory-first rollout builds stakeholder trust before enabling auto-apply discounts"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/FMCG.png",
  nextSteps: [
    "Fuse loyalty-card datasets for household-level targeting",
    "Stream real-time price-elasticity updates from point-of-sale scanners"
  ],
  externalLink: ""
};

const caseStudyMarketingCopilot: CaseStudy = {
  /* — Snapshot — */
  id: "marketing-data-copilot",
  title: "AI-Copilot for Marketing Teams",
  domain: "Marketing Analytics & Workflow Automation",
  engagement: "Full-stack Product Engineering · AI Micro-services · Integrations",
  timeline: "Feb 2023 – Sep 2023 (8 mos)",
  techHighlights: [
    "Python",
    "FastAPI",
    "Celery",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "React (Next.js)",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "OpenAI Embeddings",
    "Meta & Google Marketing APIs"
  ],

  /* — Narrative — */
  snapshot:
    "Delivered an AI-powered data copilot that automates reporting and optimisation workflows in under 10 minutes, unifies ad & web data via secure integrations, and surfaces GPT-based insights—cutting analyst effort by 80 % and achieving sub-second dashboard queries.",

  challenge:
    "Marketing teams juggled siloed ad, web, and CRM data, spending hours on manual reports and slow campaign tweaks. A single copilot was needed to ingest multi-source data, answer natural-language questions, and automate optimisation workflows without compromising security.",

  goals: {
    primaryObjective:
      "Automate critical marketing workflows and cut weekly analyst effort by ≥ 75 %.",
    kpis: [
      "Workflow setup time ≤10 min via self-service wizard",
      "Median dashboard query latency <800 ms",
      "Data freshness <30 min from API pull to insight feed",
      "Pass SOC 2 Type II audit on first submission"
    ]
  },

  /* — Delivery — */
  team: [
    {
      role: "Full-stack Engineer (lead)",
      scope: "Radix/Tailwind UI, Next.js dashboard, auth",
      effortPercentage: 45
    },
    {
      role: "Back-end & DevOps Engineer",
      scope: "FastAPI services, Celery queues, AWS/K8s",
      effortPercentage: 35
    },
    {
      role: "Integration Engineer",
      scope: "Meta, Google, HubSpot, GA4 connectors",
      effortPercentage: 20
    }
  ],

  approach: [
    "Defined design tokens and built 45 Radix-based components with Tailwind CSS",
    "Modelled multi-tenant schemas in PostgreSQL with row-level security",
    "Implemented FastAPI gateways and Celery workers handling 2 M+ rows/hour",
    "Converted AI research notebooks to Dockerised micro-services exposed via gRPC & REST",
    "Added natural-language query layer using OpenAI embeddings + pgvector",
    "Integrated major ad and analytics APIs with async OAuth, webhooks, and retry logic",
    "CI/CD via GitHub Actions → Docker → helm deploy on EKS with OPA & Trivy scans"
  ],

  solutionHighlights: [
    "Workflow wizard translates natural-language prompts into scheduled Celery jobs",
    "Insight feed posts GPT-summarised anomalies and opportunities to Slack",
    "Real-time spend guardrails auto-pause overshooting campaigns",
    "Design-token library enables dark/light and brand theming with zero extra CSS",
    "Micro-API boundary separates ingestion spikes from ML serving (p95 <120 ms)"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "Weekly reporting effort (hrs)", before: 5, after: 1, delta: "-80 %" },
    { metric: "Workflow setup time", before: "3–4 days", after: "10 min", delta: "-99 %" },
    { metric: "Dashboard p50 latency (ms)", before: 1800, after: 700, delta: "-61 %" },
    { metric: "ETL freshness (min)", before: 360, after: 28, delta: "-92 %" }
  ],

  keyLearnings: [
    "Design-tokenised Radix + Tailwind accelerates enterprise UI delivery",
    "Early conversion of research notebooks to micro-services prevents production drift",
    "Async ETL with pgvector embeddings keeps NLP queries fast at scale"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/marketing.png",
  nextSteps: [
    "Add reinforcement-learning budget pacing",
    "Release a connector SDK for niche ad networks"
  ],
  externalLink: ""
};

const caseStudyCloudFinOpsPortal: CaseStudy = {
  /* — Snapshot — */
  id: "cloud-finops-portal",
  title: "FinOps Cost Governance for Cloud Resources",
  domain: "Cloud Resource Management & Cost Governance",
  engagement: "Front-end Architecture · Design-System Leadership · Developer Enablement",
  timeline: "Nov 2023 – Nov 2024 (12 mos)",
  techHighlights: [
    "React",
    "TypeScript",
    "Fluent UI",
    "XState",
    "ImmerJS",
    "React Query",
    "Jest",
    "React-Testing-Library",
    "Storybook",
    "Vite"
  ],

  /* — Narrative — */
  snapshot:
    "Led the front-end rebuild of a global payments provider's internal cloud-budgeting portal: delivered a Fluent-UI design-system, XState-driven request wizard, and real-time cost dashboards—cutting ticket cycles from 7 days to 32 hours and achieving 99/100 Lighthouse accessibility.",

  challenge:
    "Siloed spreadsheets and ticket queues slowed cloud requests and obscured spend. A responsive, accessible web app with live cost validation was required, built to the client's industry-leading design standards and shipped within a year.",

  goals: {
    primaryObjective:
      "Reduce infra request-to-approval time by at least 75 % through a self-service portal.",
    kpis: [
      "Cut cycle time from 7 days to <36 h",
      "Achieve ≥90 % design-system adoption across internal apps",
      "Reach ≥85 % unit + integration test coverage",
      "Score ≥98 % on Lighthouse accessibility"
    ]
  },

  /* — Delivery — */
  team: [
    {
      role: "Consulting Front-end Lead",
      scope: "Architecture, component library, XState flows",
      effortPercentage: 60
    },
    {
      role: "Design-system Steward",
      scope: "Tokens, theming, Storybook documentation",
      effortPercentage: 20
    },
    {
      role: "Testing & Dev-Experience Advocate",
      scope: "Jest/RTL suites, CI gates, performance tuning",
      effortPercentage: 20
    }
  ],

  approach: [
    "Implemented Fluent UI design-tokens and built 55 reusable components in Storybook",
    "Modelled complex approval logic with XState and shared JSON charts with BE validation",
    "Leveraged ImmerJS for immutable form drafts and React Query for live cost estimates (<800 ms)",
    "Integrated Lighthouse-CI, axe-core, and Chromatic into GitHub Actions for a11y and visual regression gates",
    "Adopted Vite + esbuild for 2× faster local feedback loops and <1 s HMR",
    "Bridged OAuth2 auth and RBAC with typed OpenAPI hooks, ensuring secure per-role data access"
  ],

  solutionHighlights: [
    "Dynamic request wizard with policy-aware fields and cost deltas",
    "Real-time cost dashboard updating via web-socket streams",
    "One-click decommission workflow with reversible grace period",
    "Dark/Light theming via design tokens; no custom CSS overrides",
    "CI pipeline enforces >85 % coverage and 98+ a11y before merge"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "Request-to-approval cycle (hrs)", before: 168, after: 32, delta: "-81 %" },
    { metric: "Design-system adoption (apps)", before: 0, after: 6, delta: "+6" },
    { metric: "Test coverage (%)", before: 42, after: 88, delta: "+46 pp" },
    { metric: "Lighthouse accessibility score", before: 79, after: 99, delta: "+20" }
  ],

  keyLearnings: [
    "State-machine diagrams streamline complex approval logic and QA",
    "Design-tokens unify UI and accelerate new team onboarding",
    "Automated a11y/performance gates maintain quality without manual policing"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/payments.png",
  nextSteps: [
    "Incorporate AI-based resource right-sizing suggestions",
    "Publish GraphQL façade and component package for other internal tools"
  ],
  externalLink: ""
};

const caseStudyDataPlatformNGO: CaseStudy = {
  /* — Snapshot — */
  id: "data-platform-modernisation-ngo",
  title: "Unified Data & Platform Modernization for Non-Profits",
  domain: "Social-Impact Data Consulting & Analytics",
  engagement: "Data Engineering · ETL Automation · BI Enablement",
  timeline: "Feb 2023 – Oct 2023 (9 mos)",
  techHighlights: [
    "Python",
    "FastAPI",
    "Celery",
    "Azure Data Factory",
    "Microsoft SQL Server",
    "Tableau",
    "Power BI",
    "Jupyter Notebooks",
    "WSL",
    "Windows Server",
    "Docker",
    "XML",
    "WSDL",
    "SOAP",
    "REST"
  ],

  /* — Narrative — */
  snapshot:
    "Delivered a unified, auditable data platform that refreshes key dashboards in under 30 minutes, boosts reconciliation accuracy to 99.7 %, and slashes ad-hoc script maintenance by 85 %.",

  challenge:
    "Legacy scripts and SSIS jobs ingested disparate CRM and government feeds via SOAP, leading to 24-hour reporting lags and audit pain. The organisation needed a modern, low-latency pipeline with governed BI layers.",

  goals: {
    primaryObjective:
      "Cut reporting latency from next-day to near-real-time while improving data quality and developer productivity.",
    kpis: [
      "ETL latency ≤30 min",
      "Data reconciliation accuracy ≥99.5 %",
      "Dashboard build time ≤2 days",
      "Reduce ad-hoc script maintenance ≥80 %"
    ]
  },

  /* — Delivery — */
  team: [
    { role: "Lead Data Engineer", scope: "Pipeline design, FastAPI services", effortPercentage: 60 },
    { role: "BI & Visualisation Engineer", scope: "Tableau / Power BI models", effortPercentage: 25 },
    { role: "DevOps Contributor", scope: "Docker, CI/CD, monitoring", effortPercentage: 15 }
  ],

  approach: [
    "Built Azure Data Factory pipelines to stage SOAP/XML and REST JSON feeds into SQL Server",
    "Developed FastAPI micro-services for schema normalisation and ingestion logging",
    "Orchestrated heavy transforms with Celery on Docker/WSL within Windows Server",
    "Implemented metadata-driven data-quality checks with rule outcomes stored for audit",
    "Created semantic layers and governed measures in Tableau & Power BI",
    "Automated notebook-based tests with PyTest/nbval to document and validate every pipeline"
  ],

  solutionHighlights: [
    "SOAP-to-SQL bridge ingests 2 k+ records/min with zero loss",
    "CDC module trims nightly load times by 67 %",
    "YAML-driven KPI builder spins up new dashboards in <2 days",
    "Dynamic SLA monitor posts latency and quality metrics to collaboration chat"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "ETL latency (min)", before: 1440, after: 26, delta: "-98 %" },
    { metric: "Reconciliation accuracy (%)", before: 96.8, after: 99.7, delta: "+2.9 pp" },
    { metric: "Dashboard build time (days)", before: 10, after: 2, delta: "-80 %" },
    { metric: "Monthly script maintenance (hrs)", before: 40, after: 6, delta: "-85 %" }
  ],

  keyLearnings: [
    "Notebook-to-task conversion keeps research and production in sync",
    "Metadata quality rules detect schema drift early",
    "Wrapping legacy SOAP feeds with modern APIs saves rewrite costs"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/data-engineering.png",
  nextSteps: [
    "Move CDC pipeline to Azure Synapse for lakehouse scalability",
    "Introduce AutoML-based donor-churn predictions"
  ],
  externalLink: ""
};

const caseStudySocialFundraisingPlatform: CaseStudy = {
  /* — Snapshot — */
  id: "social-fundraising-network",
  title: "Cloud-Native Social Fundraising Network",
  domain: "Digital Fundraising & Volunteer Engagement",
  engagement: "Front-End MVP · Cloud-Native Automation · Micro-Service Factory",
  timeline: "Feb 2023 – May 2025 (22 mos)",
  techHighlights: [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Zustand",
    "React Query",
    "XState",
    "Python",
    "FastAPI",
    "Kubernetes",
    "Docker",
    "Pulumi",
    "Spotify Backstage",
    "GitHub Actions"
  ],

  /* — Narrative — */
  snapshot:
    "Delivered a full-stack social-impact platform: first an accessible React MVP, then a form-to-pod micro-service factory on Kubernetes that spins up new services in under 15 minutes and sustains 99.9 % uptime under 3× load.",

  challenge:
    "The startup needed to launch quickly yet scale features without a large platform team. Manual micro-service scaffolding slowed iteration and risked config drift across environments.",

  goals: {
    primaryObjective:
      "Launch MVP fast and enable near-instant micro-service creation to keep pace with new social-good initiatives.",
    kpis: [
      "≥4 releases/week post-MVP",
      "New micro-service live in ≤15 min",
      "Maintain 99.9 % availability during 3× traffic spikes",
      "CI main-branch pass rate ≥95 %"
    ]
  },

  /* — Delivery — */
  team: [
    { role: "Senior Front-end Engineer", scope: "Design system, React SPA, CI", effortPercentage: 40 },
    { role: "Lead Platform Engineer", scope: "Kubernetes architecture, Pulumi IaC", effortPercentage: 40 },
    { role: "Automation Engineer", scope: "Form-to-pod generator, Backstage templates", effortPercentage: 20 }
  ],

  approach: [
    "Created Tailwind-based design tokens and 40+ Radix-style components in Storybook",
    "Implemented state-machine flows (XState) for onboarding, posts, and donations",
    "Built a low-code schema wizard that generates FastAPI scaffolds and deployment manifests",
    "Automated CI/CD via GitHub Actions → Docker build → Pulumi deploy → EKS",
    "Integrated Backstage service catalog to enforce docs/SLOs at service creation",
    "Set up Loki, Tempo, Grafana, and Slack alerts for full-stack observability"
  ],

  solutionHighlights: [
    "Form-to-pod pipeline provisions new micro-services in <15 min",
    "Backstage templates ensure every service has ownership, run-books, and SLOs",
    "KEDA-based autoscaling trims compute by ~38 % month-over-month",
    "Offline-first PWA queue sync keeps pledges reliable on poor networks"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "Feature releases per week", before: "—", after: 4.3, delta: "N/A" },
    { metric: "Service spin-up time (min)", before: 1440, after: 14, delta: "-99 %" },
    { metric: "Deploys per day", before: 1, after: 7, delta: "+600 %" },
    { metric: "Uptime during spikes (%)", before: 97.5, after: 99.94, delta: "+2.44 pp" }
  ],

  keyLearnings: [
    "State machines reduce logic bugs in social workflows",
    "Service catalogs with baked-in SLOs eliminate ownership gaps",
    "Pulumi's fast feedback loop fits small teams better than static YAML"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/good.png",
  nextSteps: [
    "Implement regional sharding for multi-tenant nonprofits",
    "Adopt React server-side streaming to improve first-paint on slow networks"
  ],
  externalLink: ""
};

const caseStudySocSaaS: CaseStudy = {
  /* — Snapshot — */
  id: "soc-saas-platform",
  title: "Cloud-Native SOC-as-a-Service Platform",
  domain: "Cyber-Security Monitoring & Incident Response",
  engagement: "Full-Stack SaaS Build · Web & Mobile · Cloud Native",
  timeline: "Jan 2025 – Jun 2025 (6 mos)",
  techHighlights: [
    "Next.js",
    "TypeScript",
    "Mantine",
    "EmotionJS",
    "React Native (Expo)",
    "Python",
    "Starlette",
    "PostgreSQL",
    "AuthJS",
    "Docker",
    "Kubernetes",
    "GitHub Actions"
  ],

  /* — Narrative — */
  snapshot:
    "Delivered a multi-tenant SOC-as-a-Service platform that ingests logs in real time, surfaces AI-scored threats on web & mobile, and onboards new customers in under 15 minutes.",

  challenge:
    "Manual MSSP workflows delayed onboarding and incident response. A cloud-native portal was needed to automate provisioning, alerting, and compliance reporting without inflating ops head-count.",

  goals: {
    primaryObjective:
      "Ship MVP in <6 months and achieve sub-minute alert latency.",
    kpis: [
      "Tenant onboarding wizard ≤15 min",
      "Alert latency ≤60 sec",
      "Mobile push latency ≤5 sec",
      "CI main-branch green rate ≥95 %"
    ]
  },

  /* — Delivery — */
  team: [
    { role: "Full-stack Lead", scope: "Next.js web, design system, mobile app", effortPercentage: 45 },
    { role: "Platform & API Engineer", scope: "Starlette services, AuthJS, DB schema", effortPercentage: 35 },
    { role: "Dev-Ops & SRE Advocate", scope: "Docker, K8s, CI/CD, monitoring", effortPercentage: 20 }
  ],

  approach: [
    "Created Mantine + EmotionJS design tokens; 35 reusable components documented in Storybook",
    "Implemented multi-tenant auth with AuthJS and PostgreSQL RLS",
    "Built Starlette API, Kafka pipeline, anomaly-scoring worker pods",
    "Developed Next.js dashboard (web-sockets) and Expo mobile app with shared GraphQL layer",
    "CI/CD pipeline with Trivy & OPA gates, helm deploys on managed K8s",
    "Synthetic k6 tests enforce <60 sec alert-delivery SLA before merge"
  ],

  solutionHighlights: [
    "Self-service onboarding wizard provisions full tenant stack in <15 min",
    "Live threat map & drill-down dashboards refresh every 5 sec",
    "Mobile SOC companion app delivers push alerts with swipe-to-ack",
    "Autoscaling via KEDA saves 30 % compute during low-traffic hours"
  ],

  /* — Outcomes — */
  impact: [
    { metric: "Onboarding time (min)", before: 2880, after: 14, delta: "-99 %" },
    { metric: "Alert latency (sec)", before: 180, after: 48, delta: "-73 %" },
    { metric: "Ops hours/tenant/month", before: 12, after: 2, delta: "-83 %" },
    { metric: "Mobile push latency (sec)", before: "—", after: 4.2, delta: "n/a" }
  ],

  keyLearnings: [
    "Shared design tokens accelerate cross-platform parity",
    "PostgreSQL RLS offers simple, robust multitenancy for SMB SOC workloads",
    "Embedding SLA performance tests in CI prevents regressions"
  ],

  /* — Extras — */
  visualAsset: "/images/case-studies/soc.png",
  nextSteps: [
    "Introduce MITRE-aligned auto-response playbooks",
    "Enable customer-managed encryption keys for regulated verticals"
  ],
  externalLink: ""
};

export function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    caseStudyPrivateCloudAutomation,
    caseStudySustainabilityPlatform,
    caseStudyCloudFinOpsPortal,
    caseStudyAirlineRevenueAI,
    caseStudyDataPlatformNGO,
    caseStudyFmcgPromoAI,
    caseStudyTechDataConsulting,
    caseStudyMarketingCopilot,
    caseStudySocialFundraisingPlatform,
    caseStudySocSaaS,
  ]

  const [cardMinWidth, setCardMinWidth] = useState(400)

  // Update card width based on screen size
  const updateCardWidth = () => {
    if (typeof window === 'undefined') return

    if (window.innerWidth < 480) {
      setCardMinWidth(280) // Smaller for mobile
    } else if (window.innerWidth < 768) {
      setCardMinWidth(320) // Medium mobile/large phone
    } else if (window.innerWidth < 1024) {
      setCardMinWidth(350) // Tablet
    } else {
      setCardMinWidth(400) // Desktop
    }
  }

  // Initialize card width on component mount
  useEffect(() => {
    updateCardWidth()
    window.addEventListener("resize", updateCardWidth)
    return () => window.removeEventListener("resize", updateCardWidth)
  }, [])

  return (
    <section id="case-studies" className="">
      {/* Wider container for peek effect */}
      <div className="w-full overflow-hidden">
        <div className="relative max-w-full px-0 md:px-0">
          <div className="relative">
            {/* Horizontal scrolling carousel with mouse/touchpad scroll */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-24 md:pb-32 pt-6 sm:pt-8 md:pt-12 overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing mx-0">
              <div className="flex gap-3 sm:gap-4 md:gap-6 p-0" style={{ width: 'max-content' }}>
                {caseStudies.map((study) => (
                  <Card
                    key={study.id}
                    className="group border bg-background transition-all duration-300 hover:brand-shadow hover:scale-[1.02] flex flex-col flex-shrink-0"
                    style={{
                      width: `${cardMinWidth}px`,
                      minWidth: `${cardMinWidth}px`
                    }}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={study.visualAsset || "/placeholder.svg"}
                        alt={study.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3 md:p-4">
                        <div className="text-white">
                          <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl font-playfair">{study.title}</p>
                          <p className="text-xs sm:text-sm md:text-base font-urbanist">{study.domain}</p>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
                      <CardDescription className="card-description text-xs sm:text-sm">{study.snapshot}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow px-3 sm:px-4 md:px-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="font-semibold font-playfair text-xs sm:text-sm">Challenge</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground font-urbanist">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold font-playfair text-xs sm:text-sm">Primary Goal</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground font-urbanist">{study.goals.primaryObjective}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold font-playfair text-xs sm:text-sm">Key Impact</h4>
                          <div className="space-y-1">
                            {study.impact.slice(0, 2).map((metric, idx) => (
                              <p key={idx} className="text-xs sm:text-sm text-muted-foreground font-urbanist">
                                <span className="font-medium">{metric.metric}:</span> {metric.before} → {metric.after}
                                <span className="text-primary font-medium ml-1">({metric.delta})</span>
                              </p>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold font-playfair text-xs sm:text-sm">Technologies</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                            {study.techHighlights.slice(0, 4).map((tech) => (
                              <Pill key={tech} variant={"gradient"} className="text-xs">{tech}</Pill>
                            ))}
                            {study.techHighlights.length > 4 && (
                              <Pill variant={"outline"} className="text-xs">+{study.techHighlights.length - 4}</Pill>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold font-playfair text-xs sm:text-sm">Timeline & Engagement</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground font-urbanist">{study.timeline}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground font-urbanist">{study.engagement}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-3 sm:pt-4 mt-auto px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

