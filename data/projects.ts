// A short sequence/flow diagram: steps chained by arrows, optionally ending
// in an emphasized multi-line result and/or wrapped in a labeled frame.
export type Flow = {
  direction?: "horizontal" | "vertical";
  frameLabel?: string;
  steps: string[];
  resultLines?: string[];
};

export type ProjectContent = {
  context: string;
  problem: string;
  // Optional: most projects fold their approach into a single paragraph
  // rendered under "How I approached it". A project can omit it entirely
  // (e.g. when the story is told through the sections below instead).
  approach?: string;
  actions: string[];
  results: string[];
  learnings: string[];
  // Optional, additive fields used by richer case studies that need more
  // structure than context/problem/approach/actions/results/learnings.
  // Existing projects omit these and render exactly as before.
  situationHeading?: string;
  situationQuotes?: string[];
  situationFlow?: Flow;
  actionsHeading?: string;
  resultsHeading?: string;
  stats?: { value: string; label: string }[];
  narrative?: {
    heading: string;
    body: string[];
    flow?: Flow;
    bullets?: string[];
  }[];
  framework?: {
    heading?: string;
    description?: string;
    note?: string;
    rice: { label: string; question: string };
    tsi: { label: string; question: string };
  };
  paths?: {
    heading: string;
    intro?: string;
    inputs?: { label: string; description: string }[];
    items: { name: string; description: string }[];
    closing?: string;
  };
  vision?: {
    heading: string;
    body: string[];
    flow?: Flow;
  };
  layers?: {
    heading: string;
    intro?: string;
    items: { name: string; description: string }[];
    closing?: string;
  };
  comparison?: {
    heading: string;
    intro?: string;
    options: { label: string; title?: string; description: string; tag?: string }[];
    decision?: string;
    closing?: string;
  };
  status?: { steps: string[] };
  secondaryMetric?: {
    value: string;
    label: string;
    context: string;
    note?: string;
  };
  // Optional: when true, renders the results ("what changed") section before
  // the actions ("what I did") section instead of after it. Existing
  // projects omit this and keep the default actions-then-results order.
  resultsBeforeActions?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "CRM" | "Data" | "Automation" | "Product" | "Strategy";
  description: string;
  // Optional: image shown on project cards (e.g. homepage "Selected Work").
  // Existing projects omit this; cards fall back to a simple placeholder.
  image?: {
    src: string;
    alt: string;
  };
  metrics: {
    mainResult: string;
    label?: string;
    context?: string;
  };
  content: ProjectContent;
  // Optional: widens the main content column for case studies that need
  // more room to breathe. Existing projects omit this and keep the
  // default (narrower) column width.
  contentWidth?: "wide";
};

export const projects: Project[] = [
  {
    slug: "esp-migration",
    title: "How to Migrate an ESP Without Losing Deliverability (or Your Mind)",
    subtitle:
      "Migrating six years of marketing operations to a new ESP without interrupting customer communication.",
    category: "Product",
    description:
      "A ~6-month migration from Salesforce Marketing Cloud to BlueShift for a dietary supplements company, run without interrupting customer communication.",
    metrics: {
      mainResult: "Zero service interruption",
      label: "Deliverability better than the previous ESP",
      context: "6-month migration · 3-week warm-up",
    },
    content: {
      situationHeading: "The migration was bigger than the platform.",
      context:
        "The client, a dietary supplements company, had run six years of marketing operations on Salesforce Marketing Cloud. With a marketing-led team and limited technical resources, they decided to move to BlueShift — a much easier platform to operate day-to-day.",
      problem:
        "This wasn’t a simple data move. We had to reproduce six years of marketing operations on a new platform, while continuing to send to millions of customers without interruption.",
      stats: [
        { value: "20M", label: "emails / mo" },
        { value: "3–4M", label: "contacts" },
        { value: "200", label: "journeys" },
        { value: "~10", label: "campaigns / day" },
        { value: "15", label: "team members" },
        { value: "0", label: "interruption" },
      ],
      narrative: [
        {
          heading: "What could go wrong?",
          body: [
            "The risk wasn’t only technical. It spanned deliverability, data integrity, automation logic and whether the client team could operate the new platform.",
          ],
          bullets: [
            "Deliverability loss",
            "Data mapping issues",
            "Incorrect data formats (dates)",
            "Broken automation journeys",
            "Wrong audience or send time",
            "Client team unable to operate the platform",
          ],
        },
        {
          heading:
            "We didn’t just reproduce the old system — we used the migration to start from a cleaner base.",
          body: [
            "Rather than reproducing six years of history blindly, we used the migration to clean up the setup.",
          ],
          bullets: [
            "Cleaned the contact database",
            "Removed outdated / low-value contacts",
            "Reviewed automation journeys",
            "Reworked sending schedules",
            "Adjusted sending density",
            "Improved contact base freshness",
          ],
        },
        {
          heading: "The safest way to move faster was to slow down.",
          body: [
            "The biggest decision was to prioritize deliverability over the migration timeline. There was no arbitrary deadline forcing the warm-up to finish faster — we took the time required to protect performance.",
            "The warm-up ultimately took three weeks. It let us launch on a stable deliverability baseline.",
          ],
        },
      ],
      paths: {
        heading:
          "I joined mid-project to bring structure — and make deliverability the decision gate.",
        intro:
          "I joined the migration after it had already started. My role was to bring structure to a project with many dependencies and precise timelines — and to make deliverability the gate that controlled the pace.",
        inputs: [
          { label: "Salesforce baseline", description: "Deliverability, opens, clicks, bounces" },
          { label: "By mailbox provider", description: "Gmail · Microsoft · Yahoo" },
          { label: "Target performance", description: "Warm-up plan & thresholds" },
        ],
        items: [
          { name: "Monitor", description: "Track deliverability against baseline." },
          { name: "Adjust", description: "Tune warm-up pace by provider." },
          { name: "Decide", description: "Accelerate, slow down, pause or resume." },
        ],
        closing: "Every acceleration, pause or resume came back to this loop — not the calendar.",
      },
      vision: {
        heading: "We measured the old system before changing it.",
        body: [
          "Before migration, we analysed several months of performance on Salesforce Marketing Cloud — deliverability, open rate, click rate and bounce rate — including by major mailbox provider: Gmail, Microsoft and Yahoo. This became the reference point the new setup needed to maintain.",
        ],
        flow: {
          direction: "vertical",
          steps: ["Test", "Warm-up", "Monitor", "Scale"],
          resultLines: [
            "No fixed deadline — deliverability set the pace.",
            "Zero interruption, including the 3-week warm-up.",
          ],
        },
      },
      actionsHeading: "My contribution",
      actions: [
        "Defined the migration strategy and sequencing",
        "Completed the data mapping between the two ESPs",
        "Coordinated the technical work during migration",
        "Defined and monitored the email warm-up plan",
        "Monitored deliverability throughout the migration",
        "Coordinated deployment and post-migration monitoring",
        "Decided when to accelerate, slow down, pause or resume the migration",
      ],
      resultsHeading: "The client moved without breaking customer communication.",
      status: {
        steps: ["Baseline", "Test", "Warm-up", "Scale", "Live"],
      },
      results: [
        "Bounce rates were lower than on the previous ESP.",
        "Email sending volume remained stable throughout the migration.",
        "No interruption to customer communications — including during the three-week warm-up.",
      ],
      learnings: [
        "A migration is a product problem, not just a technical one. Success depended on business continuity, customer impact and team adoption — not simply moving the data.",
        "You need a baseline before you can protect performance. The pre-migration analysis gave us the reference point needed to make decisions throughout the transition.",
        "Sometimes the safest way to move faster is to slow down. Taking three weeks for the warm-up avoided a much costlier failure and let the client launch with stronger deliverability.",
      ],
    },
  },
  {
    slug: "email-blacklist-management",
    title: "When Your Database Starts Working Against You",
    subtitle:
      "Fixing deliverability at scale by rebuilding how risky email addresses enter and stay in our clients’ databases.",
    category: "Data",
    description:
      "Diagnosing why risky email addresses kept reaching client databases, and rebuilding validation to stop it at the source.",
    metrics: {
      mainResult: "99% deliverability",
      label: "-42% hard-bounce rate · +2–3 pts open rate · +0.5 pt click rate",
      context: "Hundreds of thousands of risky or invalid addresses removed",
    },
    content: {
      situationHeading: "One blacklist became a systemic problem.",
      context:
        "One client was hit by an email blacklist caused by spam traps and unhealthy email addresses. Then a second, a third, a fourth. The problem spread faster than expected, eventually affecting almost all of our clients — and for clients where email was a primary sales channel, it put business performance at risk. The problem wasn’t only the databases themselves: our validation controls weren’t strong enough to stop risky or invalid addresses from entering the system in the first place.",
      problem:
        "We didn’t just need to clean the lists. We needed to understand why bad addresses were entering them.",
      narrative: [
        {
          heading: "I led the project from diagnosis to rollout.",
          body: [
            "I owned the project end-to-end, orchestrating database, system and market analysis with support from a data analyst, then leading the rollout and monitoring its impact on deliverability and engagement.",
          ],
        },
        {
          heading: "A cleaner list meant a smaller list.",
          body: [
            "The new validation rules meant removing hundreds of thousands of risky or invalid addresses from client databases. For clients, that initially looked like a direct business loss — fewer contacts, a smaller database.",
            "But these addresses weren’t healthy business assets. The real work was explaining that a smaller, healthier database could outperform a larger one filled with risk — and getting clients aligned before removing contacts we didn’t own.",
          ],
        },
        {
          heading: "We didn’t just add new rules. We cleaned what was already there.",
          body: [
            "Existing databases were cleaned using multiple validation tools in sequence — addresses were checked through 2–3 processes before we decided whether they should remain. Anything that failed was removed, and the entry validation system was rebuilt to prevent the same contamination from recurring.",
          ],
        },
      ],
      paths: {
        heading: "We traced the problem upstream.",
        intro:
          "We investigated three areas to understand why risky addresses kept reaching client databases.",
        inputs: [
          { label: "Database analysis", description: "Malformed or suspicious domains, including major-provider variants" },
          { label: "System analysis", description: "What was accepted, rejected, and returned as errors" },
          { label: "Market benchmark", description: "How reliable the validation tools in use actually were" },
        ],
        items: [
          { name: "Weak validation", description: "Allowed risky addresses into client lists." },
          { name: "Accumulated risk", description: "Years of risk already sitting in the databases." },
        ],
        closing: "The problem was systemic — not a one-off blacklist.",
      },
      comparison: {
        heading: "We rebuilt the validation system.",
        intro: "Incoming addresses used to pass two checks before reaching a list.",
        options: [
          { label: "Before", title: "2 checks", description: "A relatively light validation layer." },
          {
            label: "After",
            title: "5 checks",
            description:
              "A multi-step validation system, plus one additional check for high-volume / mass-marketing clients.",
            tag: "+1 for high-volume clients",
          },
        ],
        decision: "After",
        closing:
          "We moved from a light validation layer to a multi-step system designed to stop risky addresses before they reached client lists.",
      },
      actionsHeading: "My contribution",
      actions: [
        "Led the overall project and prioritisation.",
        "Coordinated database and system analysis with the data team.",
        "Led the benchmark of email validation solutions.",
        "Defined the new validation rules and escalation logic.",
        "Coordinated communication with clients.",
        "Led the rollout and monitored the impact on deliverability and engagement.",
      ],
      resultsHeading: "The smaller lists performed better.",
      results: [
        "After the cleanup and validation changes, clients reached up to 99% deliverability, with lower hard-bounce rates and improved engagement.",
        "The result wasn’t simply fewer addresses — it was healthier lists that performed better.",
      ],
      learnings: [
        "A PM doesn’t only manage systems. The hardest part was helping people understand why changing a system they depended on was necessary.",
        "A smaller database can be a healthier database. Removing risky contacts looked like a loss at first, but the resulting lists performed better.",
        "The best fix is often upstream. Cleaning the existing data solved the immediate problem; rebuilding the validation layer prevented it from recurring.",
      ],
    },
  },
  {
    slug: "email-strategy",
    title: "Rebuilding Email Performance After COVID",
    subtitle:
      "Restarting a dormant CRM, rebuilding a compliant audience and creating an email strategy from scratch.",
    category: "Data",
    description:
      "The client was a world-renowned ski resort whose CRM had been dormant for nearly two years after COVID — no active platform, a non-compliant database and customer history stored in a JSON file.",
    metrics: {
      mainResult: "~60K → ~25K contacts",
      label: "after GDPR cleanup and email validation",
      context: "CRM dormant for 2 years after COVID",
    },
    content: {
      situationHeading: "The CRM wasn’t underperforming. It was simply stopped.",
      context:
        "The client was a world-renowned ski resort. Its CRM had been inactive for almost two years after COVID: no usable email platform, a database that was no longer fully GDPR-compliant, and customer history preserved mostly in a JSON file.",
      problem:
        "This wasn’t a newsletter to optimize. It was a channel to rebuild — data, platform, editorial strategy, campaigns and measurement, from scratch.",
      stats: [
        { value: "2 years", label: "CRM dormant" },
        { value: "2 / week", label: "emails during peak season" },
        { value: "90%", label: "French-speaking audience" },
      ],
      narrative: [
        {
          heading: "The first decision was to make the database smaller.",
          body: [
            "The existing database held around 60,000 contacts, but a significant share was no longer GDPR-compliant or safe to validate.",
            "We chose to lose more than 60% of the database rather than rebuild the newsletter on an unhealthy audience.",
          ],
          flow: {
            direction: "vertical",
            steps: ["~60,000 existing contacts", "GDPR cleanup + email validation"],
            resultLines: ["~25,000 healthy contacts"],
          },
        },
        {
          heading: "One newsletter, built around the season.",
          body: [
            "A ski resort has a highly seasonal customer journey, so the editorial calendar was built around the rhythm of the season rather than a generic sending schedule.",
          ],
          bullets: ["Highlighted offers", "Activities", "Events", "Local recommendations"],
        },
        {
          heading: "From email metrics to customer behaviour.",
          body: [
            "Measurement started with the fundamentals — deliverability, opens and clicks. Once those were reliable, I connected an analytics solution in V2 to understand what the newsletter actually drove beyond opens and clicks.",
          ],
          flow: {
            direction: "vertical",
            steps: ["V1 — Open → Click"],
            resultLines: ["V2 — Behaviour, engagement", "What happens after the newsletter"],
          },
        },
        {
          heading: "A healthy CRM also needs a way to grow.",
          body: [
            "The resort had few direct channels to keep acquiring newsletter subscribers, so I worked with hotels, restaurants and activity providers to create opt-in opportunities and rebuild the audience over several seasons.",
          ],
          bullets: ["Hotel partners", "Restaurants", "Activity providers"],
        },
      ],
      vision: {
        heading: "We rebuilt the channel from data to measurement.",
        body: [
          "Restarting the channel meant rebuilding it end to end, not just relaunching campaigns.",
        ],
        flow: {
          direction: "vertical",
          steps: [
            "DATA — Recover and validate the historical JSON data",
            "PLATFORM — Move to Sendinblue (now Brevo)",
            "CONTENT — Redefine the newsletter strategy and editorial line",
            "DISTRIBUTION — Rebuild audience acquisition through local partners",
            "MEASUREMENT — Track deliverability, opens and clicks",
          ],
          resultLines: ["Later: add behavioural analytics"],
        },
      },
      layers: {
        heading: "We rebuilt the stack around what the team actually needed.",
        intro:
          "The historical database was recovered from the JSON file with a specialised consulting company, then injected into the new platform with the IT team.",
        items: [
          { name: "Simple", description: "Easy for the client team to operate day to day." },
          { name: "Fit for the need", description: "Covered exactly what a single newsletter required." },
          { name: "No cost", description: "Available at no cost for this use case." },
        ],
        closing:
          "The goal wasn’t to rebuild the old system. It was to create a simple setup the client could actually use.",
      },
      actionsHeading: "I owned the project end-to-end.",
      actions: [
        "Diagnosed the CRM, data and tooling situation.",
        "Defined the database cleanup and migration strategy.",
        "Selected and implemented Sendinblue with the technical team.",
        "Defined the newsletter positioning, editorial line and content structure.",
        "Built the editorial calendar and managed campaign execution.",
        "Defined and monitored deliverability, open and click KPIs.",
      ],
      resultsHeading: "We rebuilt the channel from a dormant CRM.",
      results: [
        "Deliverability, open rate and click rate became the core KPIs tracked on every campaign.",
        "The result was a cleaner, compliant audience, a functioning CRM, a repeatable editorial strategy and a measurement setup that could evolve beyond basic email metrics.",
        "In hindsight, the renewed connection with the audience post-COVID could have been used more aggressively from a commercial perspective — the main change I’d make in a next iteration.",
      ],
      learnings: [
        "A dormant CRM isn’t something you simply restart — you rebuild the data foundation, tooling, content strategy and acquisition channels around it.",
        "A smaller audience can be a stronger audience. Losing more than 60% of the database was the trade-off for a clean, compliant foundation.",
        "Measurement should evolve with the product. Once the basic channel worked, the next step was understanding behaviour beyond opens and clicks.",
      ],
    },
  },
  {
    slug: "customer-insight-strategy",
    title: "What Happens When You Finally Listen to Your Customers",
    subtitle: "Turning years of ignored customer feedback into actionable product insights.",
    category: "Data",
    description:
      "The resort had years of customer reviews across TripAdvisor and Google Reviews — but no structured way to know what customers actually thought about the overall experience.",
    metrics: {
      mainResult: "Reviews → insight → product opportunities",
      label:
        "Years of largely ignored customer feedback, simplified into signals the executive committee could act on",
      context: "TripAdvisor · Google Reviews · years of history",
    },
    content: {
      situationHeading: "The feedback was there. Nobody was really listening.",
      context:
        "The resort had years of customer reviews across TripAdvisor, Google Reviews and other platforms. Customers were continuously saying what they liked, disliked and expected — but those comments were treated as individual reviews, not as a source of structured product insight.",
      problem:
        "There was no systematic way to know what customers consistently liked, what frustrated them, or whether perception changed by season.",
      narrative: [
        {
          heading: "We started with the data we already had.",
          body: [
            "Rather than creating another feedback mechanism, I exported and structured years of customer reviews from the platforms where they already existed.",
            "We analysed them across themes, topics, languages, seasons, lexical fields and emotional signals — to see what patterns were emerging across thousands of individual comments.",
          ],
          flow: {
            direction: "vertical",
            steps: [
              "Years of customer reviews",
              "Text analysis — themes, languages, seasons, emotions",
              "Customer insights",
            ],
            resultLines: ["Product opportunities"],
          },
        },
        {
          heading: "I chose usefulness over sophistication.",
          body: [
            "The technically richer analysis wasn’t necessarily the better product. When the executive committee struggled to connect sophisticated KPIs to operational decisions, we simplified the output.",
            "The goal was never to abandon advanced analysis — it was to choose the level of complexity that helps the people using the information make better decisions.",
          ],
        },
      ],
      comparison: {
        heading: "Better analysis didn’t automatically mean better decisions.",
        intro:
          "We pushed the analysis further using early text-analysis technology, extracting emotional signals and a sophisticated “emotional temperature” indicator. It was technically impressive — but when we presented it to the resort’s executive committee, it was too far removed from operational reality.",
        options: [
          {
            label: "More sophisticated",
            title: "Emotional temperature",
            description: "Emotions, sentiment and complex KPIs.",
            tag: "Not actionable enough",
          },
          {
            label: "Simplified",
            title: "1–5 star rating",
            description: "Simple, understandable customer signals.",
            tag: "Ready for product discussion",
          },
        ],
        decision: "Simplified",
        closing:
          "We deliberately reduced the sophistication of the analysis to make it useful to the people making decisions.",
      },
      paths: {
        heading: "The useful output wasn’t a dashboard. It was a better conversation.",
        intro: "Once the indicators were simplified, two concrete signals stood out.",
        items: [
          {
            name: "Restaurant diversity",
            description:
              "“The restaurant offer doesn’t feel diverse enough” — despite around 120 restaurants. Product question: how could the ecosystem offer more perceived diversity?",
          },
          {
            name: "Summer mountain experience",
            description:
              "“We pay to reach the top, but there’s little to do once we’re there.” Product question: how should the summer mountain experience be redesigned?",
          },
        ],
        closing: "These opened discussions — not implemented changes.",
      },
      actionsHeading: "I turned an ignored data source into a discovery tool.",
      actions: [
        "Identified customer reviews as an underused source of product insight.",
        "Exported and structured years of customer feedback for analysis.",
        "Defined the dimensions used to analyse the reviews.",
        "Explored early AI/text-analysis capabilities to extract emotional and thematic signals.",
        "Presented the findings to the executive committee and adapted the analysis to their decision-making needs.",
        "Translated customer signals into concrete product and experience opportunities.",
      ],
      resultsHeading: "Customer feedback became a starting point for product decisions.",
      results: [
        "Years of previously underused customer feedback became structured insight.",
        "The resort gained a clearer view of recurring customer perceptions, including signals on restaurant diversity and the summer mountain experience.",
        "The analysis opened new discussions around the customer experience and future product and territory initiatives — insight, not implemented change.",
      ],
      learnings: [
        "The best insight is the one people can act on. A sophisticated metric is useless if decision-makers can’t connect it to a real problem.",
        "Discovery is also about finding the right level of abstraction. We moved from complex emotional analysis back to simple signals that reflected the language of the business.",
        "Listening to customers only creates value when it changes the conversation — the goal was evidence people could use to discuss what should change, not another dashboard.",
      ],
    },
  },
  {
    slug: "sports-association-automation",
    title: "Automating the Administrative Backbone of a Growing Sports Association",
    subtitle: "Turning a manual invoicing process into a simple workflow the association could run itself.",
    category: "Product",
    description:
      "A small sports association of about 60 members was creating every invoice manually — copying a Word document, editing it by hand and sending an individual email, again and again.",
    image: {
      src: "/projects/sports-association.jpg",
      alt: "Automated invoicing workflow for a growing sports association",
    },
    metrics: {
      mainResult: "Several hours → ~2 minutes",
      label: "to generate and send an invoice",
      context: "~60 members · built around Google Drive and spreadsheets",
    },
    content: {
      situationHeading: "Growth was creating an administrative problem.",
      context:
        "The association was growing but had no real administrative infrastructure. For around 60 members, invoices were created manually — one by one — using Word documents and individual emails. New activities, such as producing a group jersey, would only mean more purchases and more invoices. And issuing invoices is a legal requirement for a registered association.",
      problem:
        "The association didn’t need more administration. It needed a process that could absorb growth without adding work.",
      narrative: [
        {
          heading: "Before: every invoice was a manual task.",
          body: [
            "For every member, the same manual sequence was repeated from scratch.",
          ],
          flow: {
            direction: "vertical",
            steps: [
              "Member information",
              "Copy template",
              "Edit Word document",
              "Change amount / details",
              "Save PDF",
              "Write email",
              "Send",
            ],
            resultLines: ["Repeat × 60"],
          },
        },
      ],
      vision: {
        heading: "They didn’t need another tool. They needed their existing tools to work together.",
        body: [
          "The association already worked with Google Drive and spreadsheets. Instead of introducing a new invoicing platform, we designed a lightweight workflow around the tools they already knew.",
          "We structured their existing files into a more reliable spreadsheet-based data source, then added invoice templates, scripts, automated PDF generation, an email workflow and record updates around it.",
        ],
      },
      layers: {
        heading: "The new workflow: three simple actions.",
        intro: "Generate invoice → Send email → Update records.",
        items: [
          { name: "Generate", description: "Create the invoice from the member data and a predefined template." },
          { name: "Send", description: "Prepare and send the corresponding email without manually creating each message." },
          { name: "Update", description: "Update the underlying records so the process stays traceable." },
        ],
        closing: "Three actions, one traceable workflow — run from the same member database.",
      },
      comparison: {
        heading: "Several hours of manual work, reduced to about two minutes.",
        options: [
          { label: "Before", title: "Manual", description: "Copy → edit → save → email, repeated for every member." },
          { label: "After", title: "Automated", description: "Generate → send → update." },
        ],
        decision: "After",
        closing:
          "The workflow cut the process from several hours to about two minutes, with consistent formatting and fewer opportunities for manual error.",
      },
      actionsHeading: "I took the project from problem to working workflow.",
      actions: [
        "Discussed the association’s current organisation and pain points.",
        "Identified invoicing as the clearest repetitive process to automate.",
        "Defined the workflow and the required data structure.",
        "Designed the solution around Google Drive and spreadsheets.",
        "Built and coordinated the automation, templates and scripts.",
        "Tested and monitored the resulting workflow.",
      ],
      resultsHeading: "From hours of administration to a two-minute workflow.",
      results: [
        "The association could generate and send invoices through a repeatable workflow instead of manually creating every document and email.",
        "The process was faster, more consistent and easier to repeat as the association grew.",
        "The same approach created a foundation that could absorb future administrative needs, such as additional purchases and member-related invoicing.",
      ],
      secondaryMetric: {
        value: "~60",
        label: "members",
        context: "invoiced through the new workflow",
      },
      learnings: [
        "The best automation is not always the most sophisticated one. For a small organisation, a lightweight workflow around existing tools can create more value than introducing a new platform.",
        "Start with the repetitive task that blocks growth. Invoicing was simple but painful, legally necessary and directly connected to the association’s ability to grow.",
        "Good product design starts with the user’s reality. The solution worked because it fit the tools and habits the association already had, instead of asking them to completely change how they worked.",
      ],
    },
  },
  {
    slug: "deliverability-alerting-system",
    title: "Rethinking Deliverability Monitoring Through Simplicity",
    subtitle: "Replacing a complex €90K/year monitoring tool with a simpler system built around how customers actually work.",
    category: "Product",
    description:
      "The team relied on a market-leading deliverability monitoring tool that cost around €90,000 a year — comprehensive, but barely used.",
    image: {
      src: "/projects/deliverability-monitoring.jpg",
      alt: "Simplified deliverability monitoring replacing a complex alerting tool",
    },
    metrics: {
      mainResult: "100% client adoption",
      label: "of clients use the new monitoring system",
      context: "~10 alerts · replacing a €90K/year tool",
    },
    content: {
      situationHeading: "We were paying for more data than people could use.",
      context:
        "We used a market-leading deliverability monitoring tool — comprehensive, with many KPIs and dashboards, at a cost of around €90,000 per year. But adoption was very low: few people logged in, and those who did tended to return to the same single view.",
      problem:
        "The gap wasn’t missing functionality. It was the distance between what the product exposed and what people actually needed to manage deliverability.",
      situationFlow: {
        direction: "vertical",
        steps: ["€90K / year · many KPIs · many dashboards", "Low usage"],
        resultLines: ["Same view, repeatedly"],
      },
      narrative: [
        {
          heading: "So we asked why.",
          body: [
            "I led interviews with the people using — or expected to use — the monitoring solution, and analysed how the existing product was actually being used.",
            "Two issues kept coming up, and both led to the same outcome: low adoption.",
          ],
          bullets: ["Too much data — “Where do I look?”", "Low trust — “Can I trust this?”"],
        },
        {
          heading: "More information wasn’t the answer.",
          body: [
            "The existing tool was technically richer and contained far more information. But people didn’t need all of that information to manage deliverability day to day.",
            "The decision was to optimise for clarity and actionability rather than completeness.",
          ],
        },
      ],
      comparison: {
        heading: "The problem wasn’t a lack of data. It was turning data into action.",
        intro:
          "Instead of asking people to explore a large monitoring product, we wanted to surface the signals that actually required attention — and stopped paying for the complexity we weren’t using.",
        options: [
          {
            label: "Before",
            title: "Market monitoring tool",
            description: "Many KPIs, many dashboards — users had to search for the signal that mattered.",
            tag: "€90K / year · low adoption",
          },
          {
            label: "After",
            title: "Internal monitoring solution",
            description: "Relevant signals surfaced as alerts, in the channels people already use.",
            tag: "~10 alerts · built around actual needs",
          },
        ],
        decision: "After",
        closing: "The product became less about showing everything and more about surfacing what matters.",
      },
      vision: {
        heading: "From dashboards to alerts.",
        body: [
          "Monitoring doesn’t have to mean constantly checking a dashboard. Relevant alerts are surfaced directly in the channels people already use.",
        ],
        flow: {
          direction: "vertical",
          steps: ["Deliverability data", "Monitoring logic", "~10 alerts"],
          resultLines: ["Urgent → Slack", "Other alerts → the client’s email platform", "Action"],
        },
      },
      actionsHeading: "I led the shift from monitoring product to monitoring system.",
      actions: [
        "Identified low adoption of the existing monitoring tool as a product problem worth investigating.",
        "Led user interviews to understand why teams were not using the product.",
        "Analysed the existing monitoring experience and identified complexity and trust issues.",
        "Helped define the requirements for a simpler monitoring and alerting solution.",
        "Contributed to the decision to move away from the €90K/year external tool.",
        "Worked on the new monitoring experience and alerting logic around the signals users actually needed.",
      ],
      resultsHeading: "The new system is actually used.",
      results: [
        "The new monitoring system gives clients a much simpler way to understand whether their deliverability requires attention.",
        "Instead of navigating multiple dashboards, relevant issues are surfaced through alerts in the channels they already use.",
        "The outcome that mattered wasn’t a smaller product — it was adoption.",
      ],
      secondaryMetric: {
        value: "~10",
        label: "alerts",
        context: "urgent alerts in Slack, others in the client’s email platform",
      },
      learnings: [
        "Adoption is a product signal. If people consistently avoid a product, it may be solving the wrong problem at the wrong level of complexity.",
        "Trust is part of the product. Even a technically rich monitoring tool becomes useless when people stop believing the data behind it.",
        "Sometimes the best product is the smaller one. Removing information can create more value when it makes the remaining signals easier to act on.",
      ],
    },
  },
  {
    slug: "product-capacity",
    title: "From Reactive Requests to Product Capacity",
    subtitle:
      "A framework for deciding not just what to build, but what should never reach engineering.",
    category: "Product",
    description:
      "Redesigning how a lean product team evaluates, prioritizes and absorbs incoming work.",
    image: {
      src: "/projects/product-capacity.jpg",
      alt: "Framework for turning reactive requests into planned product capacity",
    },
    metrics: {
      mainResult: "5 → 3 developer-days",
      label: "of operational work per week",
      context: "over 5 months",
    },
    content: {
      situationHeading: "When everything becomes urgent, nothing gets prioritized.",
      context:
        "The product team was supporting 8 core tools and 10 connected systems, while engineering capacity had dropped from four developers to one.",
      problem:
        "We were still receiving 10–15 requests per week, excluding larger projects — creating delays and increasing client frustration. The problem wasn’t simply a lack of capacity. We needed a better way to decide where that capacity should go.",
      stats: [
        { value: "4 → 1", label: "developers" },
        { value: "10–15", label: "requests / week" },
        { value: "8 + 10", label: "core + connected tools" },
      ],
      narrative: [
        {
          heading: "RICE told us what was valuable. It didn’t tell us what was sustainable.",
          body: [
            "When a developer left the team, the impact wasn’t only quantitative. Pressure increased, priorities shifted constantly and tensions started appearing.",
            "We already used RICE to assess the value and priority of incoming work. But I realized it was missing a critical dimension: the human cost of our decisions.",
            "That’s why I created the Team Sustainability Indicator (TSI) — to make team sustainability part of our prioritization decisions.",
          ],
        },
        {
          heading: "The framework only worked if it became part of how we worked.",
          body: [
            "We integrated it into the team’s existing rhythm: daily alignment for immediate work, and a Thursday session to review the following week’s priorities and discuss the TSI.",
            "The hardest trade-off was accepting a small delay at intake to avoid much larger delays later. We slowed down before we could speed up.",
          ],
        },
      ],
      framework: {
        note: "TSI extends RICE — it doesn’t replace it.",
        rice: { label: "RICE", question: "Is this valuable enough to do?" },
        tsi: { label: "TSI", question: "Can we sustainably do it?" },
      },
      paths: {
        heading: "Not every request needed a developer.",
        intro: "I combined three lenses to understand what each request actually required.",
        inputs: [
          { label: "RICE", description: "Value & priority" },
          { label: "TSI", description: "Team sustainability" },
          { label: "AI-assisted analysis", description: "Problem & solution hypotheses" },
        ],
        items: [
          { name: "Automate", description: "Recurring / time-consuming work." },
          { name: "Enable", description: "Existing tools, configuration or process." },
          { name: "Build", description: "Requires product / engineering work." },
        ],
        closing: "The goal wasn’t to reject requests. It was to make the trade-offs explicit.",
      },
      comparison: {
        heading: "A request that looked like a development task — but wasn’t.",
        intro:
          "A client wanted an email to trigger from a specific event. The initial assumption was that this required development.",
        options: [
          {
            label: "Option 1",
            title: "Development",
            description: "Build a new event-driven mechanism.",
            tag: "Complex / engineering-heavy",
          },
          {
            label: "Option 2",
            title: "Configuration",
            description: "Use existing email-platform functionality.",
            tag: "Client-managed",
          },
        ],
        decision: "Option 2",
        closing: "The client could solve the problem autonomously, without creating new engineering work.",
      },
      actionsHeading: "What I owned",
      actions: [
        "Identified and framed the capacity problem.",
        "Created the request analysis framework.",
        "Created and integrated the TSI into prioritization.",
        "Initiated RICE scoring, with developers validating it.",
        "Used AI-assisted analysis to explore technical solutions and alternatives.",
        "Worked with engineering to decide what to automate, enable or build.",
      ],
      resultsHeading: "From reactive work to product capacity",
      results: [
        "Reduced the time spent on small tasks and bugs by removing work that didn’t actually require engineering and automating time-consuming recurring tasks.",
        "The recovered capacity allowed the team to start tackling technical debt accumulated through years of reactive work and make visible progress on larger, higher-impact projects.",
        "Clients started seeing the team move forward on larger projects with more visible impact.",
      ],
      secondaryMetric: {
        value: "~40%",
        label: "of accumulated technical debt addressed",
        context: "within 6 months",
        note: "Internal estimate",
      },
      learnings: [
        "Prioritization is also about what you don’t build. Capacity isn’t shaped only by team size, but by what enters the system and who is best placed to solve it.",
        "Frameworks are only useful when teams trust them. The TSI worked because it created a transparent space for the team to challenge priorities and discuss capacity openly.",
        "Sustainable delivery starts with visible trade-offs. Good product decisions make the trade-offs between value, capacity and people explicit.",
      ],
    },
  },
  {
    slug: "unified-platform",
    title: "Building a Unified Platform",
    subtitle: "Turning 15+ disconnected tools into one coherent product experience.",
    category: "Product",
    description:
      "Bringing a fragmented product ecosystem together into one customer-facing platform.",
    image: {
      src: "/projects/unified-platform.jpg",
      alt: "15+ disconnected tools brought together into one unified platform",
    },
    metrics: {
      mainResult: "First unified version live with several clients",
    },
    contentWidth: "wide",
    content: {
      situationHeading: "15+ tools. One customer journey.",
      context:
        "We had built more than 15 tools over time, each solving a specific business need — from acquisition and CRM to email campaigns, order tracking and other operational workflows. For customers, however, they didn’t experience them as separate products. They experienced one journey.",
      problem:
        "The fragmentation wasn’t only a navigation problem. Our products also used terminology and interfaces that were increasingly far from the language customers encountered in the market.",
      situationQuotes: [
        "“Which tool is this in again?”",
        "“What’s the link?”",
        "“Where do I find this functionality?”",
      ],
      situationFlow: {
        direction: "vertical",
        steps: ["15+ tools", "Multiple links", "Multiple interfaces", "Inconsistent terminology"],
        resultLines: ["One fragmented customer experience"],
      },
      narrative: [
        {
          heading: "The problem wasn’t the number of tools. It was the fragmented experience.",
          body: [
            "The need for a unified platform had been known for a long time, but the project had never been started.",
            "The Head of Product brought the topic back to the table. I strongly supported the initiative because I had repeatedly encountered the problem during customer interactions.",
            "Instead of improving the tools one by one, we decided to rethink the experience as one product.",
          ],
          flow: {
            direction: "vertical",
            steps: ["15+ products", "1 unified platform"],
            resultLines: ["One experience", "One language", "One system"],
          },
        },
        {
          heading: "The hardest decisions were product decisions.",
          body: [
            "With 15+ existing tools, the challenge wasn’t simply putting everything together.",
            "We had to decide what should be included, where it should live, how it should work, which use case it should serve, and especially which language should be used.",
            "A large part of the work was therefore not technical consolidation, but deciding how the new product should make sense to users.",
          ],
          bullets: ["What?", "Where?", "For whom?", "What wording?"],
        },
      ],
      paths: {
        heading: "Before unifying the products, we needed to understand the system.",
        items: [
          {
            name: "User interviews",
            description: "Understand how customers actually experienced the fragmented ecosystem.",
          },
          {
            name: "Market research & product testing",
            description: "See how comparable products solved the same kind of fragmentation.",
          },
          {
            name: "Opportunity Solution Tree",
            description: "Turn what we learned into opportunities worth pursuing.",
          },
          {
            name: "Technical workshops",
            description: "Decide what could realistically be unified on the technical side.",
          },
        ],
        closing:
          "The discovery combined customer feedback, market observation, opportunity mapping and technical exploration — to decide not only what the new experience should look like, but what could realistically be built.",
      },
      vision: {
        heading: "One product, not fifteen connected products.",
        body: [
          "We decided to bring our 15+ existing tools into one unified product covering the customer journey from acquisition through CRM, email campaigns, order tracking and the other workflows currently spread across separate tools.",
        ],
        flow: {
          direction: "horizontal",
          frameLabel: "One unified platform",
          steps: ["Acquisition", "CRM", "Email campaigns", "Order tracking", "..."],
        },
      },
      layers: {
        heading: "Unification had to happen at every layer.",
        intro:
          "The ambition wasn’t simply to put links to existing tools into a common homepage. The platform brings unification together at every layer:",
        items: [
          { name: "Product", description: "Navigation · Information architecture · User journeys · Terminology" },
          { name: "Design", description: "Shared UI patterns · Common design system · Consistent experience" },
          { name: "Technology", description: "Frontend · Backend · Functional capabilities" },
        ],
        closing:
          "The goal was to make the tools feel like one product rather than a collection of connected products.",
      },
      comparison: {
        heading: "Unified doesn’t mean everything belongs in the platform.",
        intro:
          "Not every tool belongs in the customer-facing platform. Technical infrastructure such as connectors and routers remains outside the unified experience.",
        options: [
          { label: "Customer-facing platform", description: "15+ product capabilities" },
          { label: "Infrastructure", description: "Connectors, routers" },
        ],
        closing:
          "The goal was not to put everything in one place. It was to decide what creates value for the user and what should remain infrastructure.",
      },
      actionsHeading: "My contribution",
      actions: [
        "Customer discovery — contributed to interviews and translated recurring friction into product opportunities.",
        "Product definition — helped shape what the unified experience should include and how users should navigate it.",
        "Prototype — designed and iterated on the unified product experience.",
        "Design system — helped establish shared UI foundations across previously separate products.",
        "Technical collaboration — worked with technical teams through workshops and iteration.",
        "Validation — tested the experience and early product versions.",
      ],
      resultsHeading: "From concept to a first product in production.",
      resultsBeforeActions: true,
      status: {
        steps: [
          "Discovery",
          "Product vision",
          "Design",
          "Prototype",
          "Design system",
          "First unified version",
          "Production",
        ],
      },
      results: [
        "We now have the design and prototype for the unified platform, and a first version with two key capabilities is already live in production with several clients.",
        "The project is still evolving, with the broader platform continuing to take shape.",
      ],
      learnings: [
        "Unifying a product is not the same as putting products together. The hard part isn’t simply merging interfaces or systems — it’s deciding what the new product should mean to users.",
        "Product strategy starts with boundaries. Not everything needs to be unified; a strong product vision also defines what should remain outside the customer-facing experience.",
        "Simplification is a product decision. When customers need to remember which tool to open, the product is exposing internal complexity — the goal of the unified platform is to make that complexity disappear from the customer’s journey.",
      ],
    },
  },
];
