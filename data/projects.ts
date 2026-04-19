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
      "A high-risk ESP migration — with teams under pressure, tight timelines, and a single mistake that could impact revenue.",
    metrics: {
      mainResult: "+26% deliverability — restoring reliable communication at scale",
    },
    content: {
  context:
"Email performance wasn’t the real issue. What was actually slowing things down was something less visible: teams had outgrown their current ESP, but weren’t fully convinced about moving to a new one. The platform had become rigid, limiting what could be done — but at the same time, switching tools meant changing habits, workflows, and ways of working.",
  problem:
"The challenge wasn’t just technical — it was about alignment. Some teams were pushing for change, others were hesitant. There was no shared confidence that a migration could happen without impacting performance. At the same time, the existing setup lacked proper deliverability control, automation flexibility, and reliable tracking — creating both frustration for teams and risk for the business.",
  approach:
"We approached the migration not just as a technical transition, but as a change process. The goal was to create enough confidence for teams to move forward — while protecting deliverability, data integrity, and ongoing operations.",
  actions: [
    "Working closely with CRM, tech and marketing teams, we",
    "Designed a phased migration plan to progressively transition traffic and reduce risk",
    "Set up domain authentication, IP warm-up strategy, and deliverability monitoring",
    "Rebuilt key lifecycle journeys and aligned tracking across systems",
    "Ran parallel campaigns on both ESPs to validate performance before full cutover",
  ],

  results: [
    "Deliverability improved by 26% within the first quarter — restoring stable communication at scale.",
    "More importantly, teams gained confidence in the new system and started adopting new capabilities more quickly.",
    "Campaign deployment became faster and more reliable, reducing operational friction.",
  ],

  learnings: [
    "A Tool changes don’t fail because of technology — they fail because of adoption.",
    "Building trust is as important as building the system itself.",
    "A successful migration is one that teams are ready to use — not just one that works technically.",
  ],
},
  },
  {
    slug: "email-blacklist-management",
    title: "When Your Database starts working against you: Fixing Deliverability at Scale",
    subtitle: "Protecting sender reputation through smarter suppression and reactivation policies.",
    category: "CRM",
    description:
      "When poor data starts killing performance — and how to fix it.",
    metrics: {
      mainResult: "-42% hard-bounce rate — protecting sender reputation across markets",
    },
    content: {
context: `Deliverability issues don’t always come from campaigns — sometimes they come from what sits quietly behind them: the database.
            Over time, suppression rules had grown organically, shaped by different teams, use cases, and constraints.
            What looked like a safe system was actually becoming harder to understand, harder to trust — and slowly degrading both performance and data quality.`,
  
problem: `Teams were working with a system they didn’t fully control.
            Some valuable contacts were excluded without clear reason, while risky or invalid addresses were still being targeted.
            This created frustration on one side, risk on the other — and no clear way to balance performance, compliance, and business needs.
            The issue wasn’t just data quality.
            It was the lack of shared logic behind it.`,

approach: `We reframed blacklist management as a system — not a set of rules.
          The goal was to bring clarity, consistency, and shared understanding across teams, while balancing risk, performance, and business impact.`,

actions: [
  "Worked closely with CRM, data and marketing teams to map existing suppression rules and identify inconsistencies",
  "Created a shared blacklist taxonomy based on risk levels and business impact",
  "Implemented automated validation checks (invalid domains, role-based emails, risky patterns)",
  "Designed reactivation workflows to safely recover low-risk dormant contacts",
  "Introduced weekly governance rituals to monitor deliverability health and align decisions across teams",
],

results: [
  "Hard-bounce rate decreased by 42%, significantly improving sender reputation",
  "Teams regained confidence in the database and could make more informed targeting decisions",
  "Recovered qualified contacts increased reachable audience without degrading performance",
],

learnings: [
  "Data systems don’t fail loudly — they slowly become harder to trust",
  "Over-suppression can be as damaging as under-control",
  "Shared logic is what allows teams to make confident decisions",
],
},
  },
  {
    slug: "omnichannel-journey",
    title: "Adding WhatsApp Without Breaking the Customer Journey",
    subtitle: "Adding one more channel sounds simple — until it starts breaking the customer experience.",
    category: "Product",
    description:
      "Why adding one channel can break everything — if you don’t design it right.",
    metrics: {
      mainResult: "+2% cross-channel conversion — with a more consistent customer experience",
    },
    content: {
  context: `Customer interactions were managed channel by channel — email, web, CRM — each optimized in isolation.
  From a team perspective, everything made sense.
  But from a user perspective, it was already starting to feel fragmented.
  When WhatsApp was introduced, it didn’t just add a new touchpoint — it amplified the existing lack of coordination between channels.`,
  
  problem: `Users were receiving overlapping messages, conflicting timing, and inconsistent experiences across channels.
  For teams, each action was logical.
  For users, the journey felt noisy and sometimes confusing.
  Adding WhatsApp risked making this worse — accelerating drop-offs instead of improving engagement.
  The issue wasn’t the channel itself.
  It was the lack of orchestration across the system.`,
  
  approach: `We approached the problem by redesigning the customer journey as a system — not as a collection of channels.
  The objective was to bring clarity: define the role of each touchpoint, align interactions with user intent, and ensure that every message had a purpose within the overall experience.`,
  
  actions: [
  "Worked closely with CRM, product and marketing teams to map end-to-end customer journeys",
  "Defined clear roles for each channel (email, WhatsApp, web) based on user intent and urgency",
  "Built unified triggers and decision rules across CRM and behavioral data",
  "Redesigned messaging logic to reduce overlap and create a more coherent experience",
],

  results: [
  "Cross-channel conversion increased by 2%",
  "Customer experience became more consistent and easier to navigate",
  "Teams gained a clearer understanding of how channels should work together",
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
      "Automation had grown fast — but no one really had control over how it all worked.",
    metrics: {
      mainResult: "+33% automation coverage — with clearer control and reliability",
    },
    content: {
  context: `Automation had grown quickly across CRM and operations — driven by real needs from different teams.
  Each workflow made sense on its own.
  But over time, the system became harder to read, harder to understand, and harder to trust.
  What started as a way to gain efficiency was slowly turning into a source of complexity.`,

  problem: `Workflows became fragile, logic was duplicated, and dependencies were unclear.
  Small changes could trigger unexpected issues, creating tension between teams and slowing down execution.
  Over time, teams started losing confidence in automation — not because it didn’t work, but because it was no longer predictable.
  The issue wasn’t the number of workflows.
  It was the absence of structure behind them.`,

  approach: `We approached automation as a system that needed structure, not just fixes.
  The goal was to bring clarity, consistency, and control — by defining shared principles, reusable patterns, and governance rules that teams could rely on.`,
 
  actions: [
  "Worked closely with CRM, operations and tech teams to audit existing workflows and identify failure points",
  "Defined a modular architecture with reusable automation building blocks",
  "Standardized event naming, data structures, and trigger logic across systems",
  "Implemented monitoring dashboards and alerting to detect failures in real time",
  "Introduced governance checkpoints to validate new automations before deployment",
],

  results: [
  "Automation coverage increased by 33% across priority processes",
  "Incident resolution time decreased by 29%, improving system reliability",
  "Teams regained confidence in automation and could work with greater predictability",
],

  learnings: [
  "Automation doesn’t fail suddenly — it becomes harder to understand and trust over time",
  "Structure is what allows systems to scale sustainably",
  "Reusable patterns reduce both delivery time and operational risk",
],
},
  },
  {
    slug: "email-strategy",
    title: "Rebuilding Email Performance After COVID",
    subtitle: "Repositioning email from tactical channel to strategic growth engine.",
    category: "CRM",
    description:
      "After COVID, email performance dropped — not because of the channel, but because it no longer matched how people behaved.",
    metrics: {
      mainResult: "+21% email-driven revenue — turning CRM back into a growth driver",
    },
    content: {
  context: `After COVID, customer behavior had shifted — expectations, attention, and engagement patterns were no longer the same.
  But internally, CRM practices hadn’t evolved at the same pace.
  Campaigns were still being sent at high volume, following simple patterns — even though they no longer resonated in the same way.
  The gap between what was sent and what people actually cared about kept growing.`,

 problem: `The issue wasn’t email itself — it was the loss of relevance.
  Messages felt repetitive, segmentation was too broad, and there was no clear strategic direction behind campaigns.
  For teams, activity remained high. For users, the experience became less meaningful.
  CRM had slowly shifted from a growth lever to a background noise.`,
  
  approach: `We rethought CRM as a system built around customer value and lifecycle — not just volume.
  The focus was to reconnect with what actually matters to users: relevance, timing, and intent.
  Rather than sending more, we aimed to send better — aligning strategy, segmentation, and content with real customer behavior.`,
  
  actions: [
  "Worked closely with CRM, marketing and data teams to restructure the database and implement value-based segmentation",
  "Redefined campaign strategy based on lifecycle stages and business priorities",
  "Redesigned email content to move from promotional pressure to more inspirational and contextual messaging",
  "Introduced automation workflows to support engagement, retention, and long-term relationship building",
],

  results: [
  "Open rates increased by 20 points within 12 months, reflecting stronger engagement",
  "Database grew by 15% with higher quality and more active contacts",
  "CRM became a more reliable contributor to revenue, with a +21% increase in email-driven performance",
],

  learnings: [
  "When behavior changes, strategy must change with it",
  "Relevance always outperforms volume in the long run",
  "CRM becomes a growth engine when it aligns with real user expectations",
],
},
  },
  {
    slug: "customer-insight-strategy",
    title: "What Happens When You Finally Listen to Your Customers",
    subtitle: "Converting fragmented customer signals into strategic decision intelligence.",
    category: "Data",
    description:
"Customer data was everywhere — but rarely helping teams make real decisions.",
    metrics: {
      mainResult: "+28% insight-to-action adoption — helping teams move from analysis to decisions",
    },
    content: {
  context: `Customer data was everywhere — across CRM, analytics, and support tools.
  Each team had access to insights, dashboards, and reports.
  But in practice, everyone was looking at things differently.
  What should have helped teams align was actually creating more fragmentation — making it harder to prioritize and move forward.`,
  
  problem: `Teams were spending time analyzing data, but struggling to turn it into clear decisions.
  Insights were descriptive, sometimes interesting — but rarely actionable.
  Discussions would start from data, but often end without alignment or concrete next steps.
  The issue wasn’t the lack of data.
  It was the absence of a shared way to interpret and use it.`,

  approach: `We reframed insights as a decision tool — not as a reporting output.
  The goal was to help teams move from analysis to action, by creating a shared language, clearer formats, and a structure that connects data directly to decisions.`,
  
  actions: [
  "Worked closely with data, CRM and business teams to define a unified customer signal framework",
  "Created decision-oriented insight formats tailored to product and marketing use cases",
  "Introduced a recurring insight governance ritual to align teams and prioritize actions",
  "Tracked insight adoption and linked it to downstream business impact",
],

  results: [
  "Insight-to-action adoption increased by 28%",
  "Time to strategic decision decreased by 34%, enabling faster execution",
  "Teams aligned more easily and gained confidence in how to use data for decision-making",
],

  learnings: [
    "The value of data lies in decisions, not dashboards.",
    "More insights don’t mean more clarity — shared interpretation does",
    "Designing how data is used is as important as collecting it",
  ],
},
  },
];
