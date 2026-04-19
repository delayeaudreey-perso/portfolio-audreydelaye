export type Project = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  introduction: string;
  summary: string;
  metric: string;
  resultLabel: string;
  secondaryMetric: string;
  problem: string;
  action: string;
  context: string;
  approach: string;
  actions: string[];
  results: string[];
  keyLearnings: string[];
};

export const projects: Project[] = [
  {
    slug: "crm-emailing-transformation",
    category: "CRM",
    title: "CRM & Emailing Transformation",
    subtitle: "Rebuilding CRM performance after post-COVID demand disruption.",
    introduction:
      "When performance drops, CRM becomes an operating lever, not just a channel. This case shows how data quality and automation restored growth momentum.",
    summary:
      "How a CRM reset restored email performance and reactivated growth after post-COVID disruption.",
    metric: "+20 pts",
    resultLabel: "open rate increase",
    secondaryMetric: "+15% database growth",
    problem:
      "Email campaigns were underperforming due to poor data quality, weak segmentation, and outdated communication strategy. This reduced engagement and created missed commercial opportunities.",
    action:
      "Designed a full CRM recovery strategy focused on data quality, segmentation, and marketing automation to rebuild a clean, actionable database and relaunch performance-driven campaigns.",
    context:
      "After two years of COVID disruption, email performance dropped and the customer database degraded. At the same time, CRM became a critical lever to relaunch activity and support revenue growth.",
    approach:
      "Defined a CRM transformation plan centered on database quality, behavioral segmentation, and automated lifecycle communication.",
    actions: [
      "Cleaned and restructured the database to ensure GDPR compliance.",
      "Implemented segmentation based on behavior and customer lifecycle.",
      "Built automated workflows for opt-in, engagement, and reactivation.",
      "Redesigned email content to increase visual impact and conversion.",
    ],
    results: [
      "+20 pts increase in open rate within 12 months.",
      "+15% database growth.",
      "Strong increase in engagement and conversions from email campaigns.",
    ],
    keyLearnings: [
      "Data quality is the foundation of CRM performance.",
      "Simplicity in KPIs drives stronger team adoption.",
      "Visual storytelling outperforms promotional messaging.",
    ],
  },
  {
    slug: "product-launch-recovery-program",
    category: "Product",
    title: "Product Launch Recovery Program",
    subtitle: "Turning a high-risk launch into a controlled delivery program.",
    introduction:
      "Launch pressure exposes weak governance quickly. This intervention reset ownership and cadence to recover critical time.",
    summary:
      "How governance redesign and sharper prioritization brought a high-risk launch back on track.",
    metric: "8 weeks",
    resultLabel: "timeline recovered",
    secondaryMetric: "98% scope completion",
    problem:
      "A critical launch was off-track due to unclear ownership and dependency slippage.",
    action:
      "Set a decision cadence, enforced risk governance, and reprioritized scope using delivery data.",
    context:
      "The launch involved multiple teams with conflicting priorities and no shared view of critical path risks.",
    approach:
      "Built a recovery governance model with clear accountability, fast decision cycles, and data-backed trade-offs.",
    actions: [
      "Established a single owner model for each critical dependency.",
      "Set weekly risk forums with escalation thresholds.",
      "Re-sequenced delivery backlog based on impact and feasibility.",
      "Implemented executive checkpoint rituals to unblock decisions quickly.",
    ],
    results: [
      "Recovered eight weeks on the delivery timeline.",
      "Delivered 98% of committed scope at launch.",
      "Reduced late-stage change requests through early governance.",
    ],
    keyLearnings: [
      "Recovery programs succeed when decision rights are explicit.",
      "High-frequency risk governance prevents downstream execution drift.",
    ],
  },
  {
    slug: "operational-efficiency-service-delivery",
    category: "Strategy",
    title: "Operational Efficiency in Service Delivery",
    subtitle: "Restoring operational flow to improve client and business outcomes.",
    introduction:
      "Service performance depends on execution visibility. This case details how structured operating routines reduced delays and escalations.",
    summary:
      "How delivery operations were rebuilt to reduce cycle time and improve client experience.",
    metric: "30%",
    resultLabel: "cycle time reduction",
    secondaryMetric: "+17 CSAT points",
    problem:
      "Delivery bottlenecks were hidden, driving repeat escalations and margin pressure.",
    action:
      "Implemented workstream KPIs and execution playbooks with clear owner accountability.",
    context:
      "Service teams lacked visibility on throughput and handoff quality, which increased delays and client friction.",
    approach:
      "Introduced a performance management system linking operational metrics to client outcomes and escalation control.",
    actions: [
      "Defined operational baselines and bottleneck indicators per workstream.",
      "Created playbooks for issue triage, handoffs, and escalation prevention.",
      "Assigned accountable owners with weekly performance reviews.",
      "Standardized client communication milestones to reduce uncertainty.",
    ],
    results: [
      "Reduced average cycle time by 30%.",
      "Improved customer satisfaction by 17 points.",
      "Lowered escalation frequency and protected delivery margins.",
    ],
    keyLearnings: [
      "Execution discipline scales when operating routines are explicit.",
      "Client experience improves when internal flow metrics are actively managed.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
