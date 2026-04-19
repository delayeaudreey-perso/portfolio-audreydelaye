export type ProjectContent = {
  context: string;
  problem: string;
  approach: string;
  actions: string[];
  results: string[];
  learnings: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "CRM" | "Data" | "Automation" | "Product" | "Strategy";
  description: string;
  metrics: {
    mainResult: string;
  };
  content: ProjectContent;
};

export const projects: Project[] = [
  {
    slug: "esp-migration",
    title: "How to Migrate an ESP Without Losing Deliverability (or Your Mind)",    subtitle: "Migrating to a modern email platform without disrupting campaign performance.",
    category: "CRM",
    description:
      "High-risk ESP migration with no margin for deliverability failure.",
    metrics: {
      mainResult: "+26% deliverability improvement",
    },
    content: {
  context:
    "Email performance had started to decline, but the real issue was deeper. The existing ESP was reaching its limits — technically and operationally — just as the business was entering a critical commercial period.",

  problem:
    "The platform lacked proper deliverability controls, automation capabilities, and consistent tracking. Combined with high sending volumes, this created a major risk: any mistake during migration could damage sender reputation and directly impact revenue.",

  approach:
    "Instead of treating the migration as a simple technical switch, I designed it as a controlled transformation — prioritizing deliverability stability, data integrity, and operational continuity at every step.",

  actions: [
    "Designed a phased migration plan to progressively transition traffic and reduce risk",
    "Set up domain authentication, IP warm-up strategy, and deliverability monitoring",
    "Rebuilt key lifecycle journeys and aligned tracking across systems",
    "Ran parallel campaigns on both ESPs to validate performance before full cutover",
  ],

  results: [
    "Deliverability improved by 26% within the first quarter after migration",
    "Campaign deployment time decreased by 38%, improving team efficiency",
    "Tracking reliability enabled better attribution and performance analysis",
  ],

  learnings: [
    "An ESP migration is not a technical task — it’s an operational transformation",
    "Deliverability strategy must be designed before any migration starts",
    "Running systems in parallel is key to de-risk high-impact transitions",
  ],
},
  },
  {
    slug: "email-blacklist-management",
    title: "When Your Database Becomes the Problem: Fixing Deliverability at Scale",
    subtitle: "Protecting sender reputation through smarter suppression and reactivation policies.",
    category: "CRM",
    description:
      "When poor data starts killing performance — and how to fix it.",
    metrics: {
      mainResult: "-42% hard-bounce rate",
    },
    content: {
  context:
    "Deliverability issues don’t always come from campaigns — sometimes they come from the database itself. Over time, suppression rules had grown without real governance, slowly degrading both performance and data quality.",

  problem:
    "Some valuable contacts were being unnecessarily excluded, while risky or invalid addresses were still being targeted. This imbalance increased bounce rates, spam complaints, and ultimately threatened sender reputation across markets.",

  approach:
    "Instead of simply tightening suppression rules, I designed a system that treated blacklist management as a dynamic risk model — balancing compliance, performance, and business impact.",

  actions: [
    "Mapped all existing suppression rules and identified inconsistencies across regions",
    "Created a standardized blacklist taxonomy based on risk levels and business impact",
    "Implemented automated validation checks (invalid domains, role-based emails, risky patterns)",
    "Designed reactivation workflows to safely recover low-risk dormant contacts",
    "Set up weekly governance rituals with CRM and marketing teams to monitor deliverability health",
  ],

  results: [
    "Hard-bounce rate decreased by 42%, significantly improving sender reputation",
    "Spam complaint rate dropped by 31% across key markets",
    "Recovered qualified contacts increased reachable audience without degrading performance",
  ],

  learnings: [
    "Blacklist management is a risk system, not a static rule set",
    "Over-suppression can be as damaging as under-control",
    "Data governance must be continuous to protect long-term performance",
  ],
},
  },
  {
    slug: "omnichannel-journey",
    title: "Adding WhatsApp Without Breaking the Customer Journey",
    subtitle: "Connecting touchpoints into one coherent customer lifecycle experience.",
    category: "Product",
    description:
      "Why adding one channel can break everything — if you don’t design it right.",
    metrics: {
      mainResult: "+19% cross-channel conversion",
    },
    content: {
  context:
    "Customer interactions were managed channel by channel — email, web, CRM — each optimized in isolation. As new channels like WhatsApp were introduced, complexity increased, but coherence didn’t.",

  problem:
    "Messages overlapped, timing conflicted, and users received inconsistent experiences. Instead of improving engagement, adding WhatsApp risked accelerating drop-offs across the journey.",

  approach:
    "I redesigned the customer journey as a system — defining the role of each channel, aligning triggers with user intent, and ensuring every interaction had a clear purpose within the lifecycle.",

  actions: [
    "Mapped end-to-end customer journeys across acquisition, engagement, and conversion phases.",
    "Defined the specific role of each channel (email, WhatsApp, web) based on intent and urgency.",
    "Built unified triggers and decision rules across CRM and behavioral data.",
    "Redesigned messaging logic to eliminate overlap and reduce user fatigue.",
  ],

  results: [
    "Cross-channel conversion increased by 19%.",
    "Customer experience became consistent and measurable across touchpoints.",
  ],

  learnings: [
    "Adding channels without orchestration increases complexity, not performance.",
    "Customer journeys should be designed as systems, not channel stacks.",
    "Clarity of channel roles is key to both user experience and team execution.",
  ],
},
  },
  {
    slug: "automation-architecture",
    title: "From Chaos to Control: Designing a Scalable Automation System",
    subtitle: "Designing scalable automation foundations across CRM and operations stacks.",
    category: "Automation",
    description:
      "An architecture blueprint that standardized automation patterns, data flows, and operational controls.",
    metrics: {
      mainResult: "+33% automation coverage",
    },
    content: {
  context:
    "Automation use cases had grown quickly across CRM and operations, but were built independently. Each new workflow solved a short-term need, adding layers of complexity over time.",

  problem:
    "Workflows became fragile, logic was duplicated, and no one had a clear view of how the system behaved. Small changes created unexpected issues, and teams lost confidence in automation.",

  approach:
    "I redesigned automation as a system — introducing clear architecture principles, reusable patterns, and governance rules to ensure consistency, scalability, and control.",

  actions: [
    "Audited existing workflows to identify duplication, dependencies, and failure points.",
    "Defined a modular architecture with reusable automation building blocks.",
    "Standardized event naming, data structures, and trigger logic across systems.",
    "Implemented monitoring dashboards and alerting to detect failures in real time.",
    "Introduced governance checkpoints to validate new automations before deployment.",
  ],

  results: [
    "Automation coverage increased by 33% across priority processes.",
    "Incident resolution time decreased by 29% thanks to improved visibility.",
    "Delivery speed improved through reusable components and clearer system logic.",
  ],

  learnings: [
    "Automation doesn’t scale without architecture.",
    "Reusable patterns reduce both delivery time and operational risk.",
    "Visibility and monitoring are essential parts of system design.",
  ],
},
  },
  {
    slug: "email-strategy",
    title: "Rebuilding Email Performance After COVID",
    subtitle: "Repositioning email from tactical channel to strategic growth engine.",
    category: "CRM",
    description:
      "After COVID, email performance dropped sharply. Campaigns were still running — but they had lost impact. This project was about turning a broken CRM into a real growth engine.",
    metrics: {
      mainResult: "+21% email-driven revenue",
    },
    content: {
  context:
    "Following the COVID period, customer behavior had changed significantly, but CRM practices hadn’t adapted. Campaigns were still sent at high volume, but engagement and conversion were declining.",

  problem:
    "The issue wasn’t email itself — it was how it was used. Poor segmentation, repetitive messaging, and lack of strategic direction turned CRM into a low-impact channel instead of a growth driver.",

  approach:
    "I rebuilt the CRM strategy around customer value and lifecycle — focusing on relevance, segmentation, and long-term engagement instead of short-term volume.",

  actions: [
    "Restructured the database and implemented value-based segmentation.",
    "Redefined campaign strategy based on lifecycle stages and business objectives.",
    "Redesigned email content to shift from promotional to inspirational messaging.",
    "Introduced automation workflows to support engagement and retention.",
  ],

  results: [
    "Open rates increased by 20 points within 12 months.",
    "Database grew by 15% with higher quality contacts.",
    "Engagement and conversion improved significantly across campaigns.",
  ],

  learnings: [
    "CRM performance depends more on relevance than volume.",
    "Segmentation is the foundation of any effective strategy.",
    "Email becomes a growth engine when aligned with business objectives.",
  ],
},
  },
  {
    slug: "customer-insight-strategy",
    title: "What Happens When You Finally Listen to Your Customers",
    subtitle: "Converting fragmented customer signals into strategic decision intelligence.",
    category: "Data",
    description:
"Customer data was everywhere — but rarely used to make decisions. This project was about turning fragmented insights into a system teams could actually act on.",
    metrics: {
      mainResult: "+28% insight-to-action adoption",
    },
    content: {
  context:
    "Customer data existed across CRM, analytics, and support tools. But each team worked with its own metrics and interpretation, making alignment and prioritization difficult.",

  problem:
    "Insights were descriptive, not actionable. Teams spent time analyzing data, but struggled to translate it into clear decisions, slowing down execution and reducing impact.",

  approach:
    "I redesigned how insights were produced and used — focusing on decision-making rather than reporting, and creating a shared framework across teams.",

  actions: [
    "Defined a unified customer signal framework across behavioral, transactional, and qualitative data.",
    "Created decision-oriented insight formats to support product and marketing use cases.",
    "Set up a recurring insight governance ritual connecting data, CRM, and business teams.",
    "Tracked insight adoption and linked it to downstream business impact.",
  ],

  results: [
    "Insight-to-action adoption increased by 28%.",
    "Time to strategic decision decreased by 34%.",
    "Cross-team alignment improved through shared data interpretation frameworks.",
  ],

  learnings: [
    "The value of data lies in decisions, not dashboards.",
    "Shared frameworks reduce ambiguity and speed up execution.",
    "Insight production should be designed with the end decision in mind.",
  ],
},
  },
];
