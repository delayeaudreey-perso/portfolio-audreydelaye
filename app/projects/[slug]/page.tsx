import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Flow, type ProjectContent } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
      {children}
    </p>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 md:py-14 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

// Small uppercase label used inside a section (e.g. "Situation", "Options").
function MiniLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
      {children}
    </p>
  );
}

// A flow rendered as a single typographic line: steps chained by arrows,
// with the emphasized result in the accent colour. No boxes.
function FlowLine({ flow }: { flow: Flow }) {
  const nodes = [
    ...flow.steps.map((step) => ({ text: step, emphasized: false })),
    ...(flow.resultLines
      ? [{ text: flow.resultLines.join(" · "), emphasized: true }]
      : []),
  ];

  return (
    <div className="mt-5">
      {flow.frameLabel && <MiniLabel>{flow.frameLabel}</MiniLabel>}
      <ol className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm leading-relaxed">
        {nodes.map((node, index) => (
          <li key={node.text} className="flex items-center gap-2.5">
            {index > 0 && (
              <span className="text-about-accent" aria-hidden>
                →
              </span>
            )}
            <span
              className={
                node.emphasized
                  ? "font-semibold text-about-accent-ink"
                  : "font-medium text-stone-800"
              }
            >
              {node.text}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-stone-800">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="h-1 w-1 shrink-0 rounded-full bg-about-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Paragraphs({ body }: { body: string[] }) {
  return (
    <div className="space-y-3 leading-relaxed">
      {body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function Closing({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 border-l-2 border-about-accent pl-4 text-lg leading-snug font-medium !text-stone-900">
      {children}
    </p>
  );
}

// Decision framework: the inputs (e.g. RICE + TSI + AI-assisted analysis)
// feeding the possible outcomes (e.g. Automate / Enable / Build).
function DecisionPaths({ content }: { content: ProjectContent }) {
  const paths = content.paths!;
  const framework = content.framework;
  const questionFor = (label: string) =>
    framework?.rice.label === label
      ? framework.rice.question
      : framework?.tsi.label === label
        ? framework.tsi.question
        : undefined;

  return (
    <>
      {paths.intro && <p className="leading-relaxed">{paths.intro}</p>}

      {paths.inputs ? (
        <div className="mt-6 grid items-center gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-5">
          <div>
            <ul className="divide-y divide-stone-200 overflow-hidden rounded-xl border border-stone-200 bg-white">
              {paths.inputs.map((input) => {
                const question = questionFor(input.label);
                return (
                  <li key={input.label} className="px-4 py-3">
                    <p className="text-sm">
                      <span className="font-semibold text-stone-900">
                        {input.label}
                      </span>{" "}
                      · {input.description}
                    </p>
                    {question && (
                      <p className="mt-0.5 text-sm italic">“{question}”</p>
                    )}
                  </li>
                );
              })}
            </ul>
            {framework?.note && (
              <p className="mt-2 text-sm italic">{framework.note}</p>
            )}
          </div>

          <p className="text-center text-about-accent" aria-hidden>
            <span className="sm:hidden">↓</span>
            <span className="max-sm:hidden">→</span>
          </p>

          <ul className="space-y-3">
            {paths.items.map((item) => (
              <li key={item.name} className="border-l-2 border-about-accent/40 pl-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.1em]">
                  {item.name}
                </h4>
                <p className="mt-0.5 text-sm leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className={`mt-6 grid gap-5 ${
            paths.items.length >= 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : paths.items.length === 3
                ? "sm:grid-cols-3"
                : "sm:grid-cols-2"
          }`}
        >
          {paths.items.map((item) => (
            <div key={item.name} className="border-t border-about-accent/40 pt-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.1em]">
                {item.name}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {framework?.description && (
        <p className="mt-6 leading-relaxed">{framework.description}</p>
      )}
      {paths.closing && <Closing>{paths.closing}</Closing>}
    </>
  );
}

// A framework on its own (without decision paths): value question → sustainability question.
function FrameworkLine({
  framework,
}: {
  framework: NonNullable<ProjectContent["framework"]>;
}) {
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {[framework.rice, framework.tsi].map((item, index) => (
          <div key={item.label} className="flex items-center gap-3">
            {index > 0 && (
              <span className="text-about-accent" aria-hidden>
                →
              </span>
            )}
            <p className="text-sm">
              <span className="font-semibold text-stone-900">{item.label}</span>{" "}
              <span className="italic">“{item.question}”</span>
            </p>
          </div>
        ))}
      </div>
      {framework.note && <p className="mt-3 text-sm italic">{framework.note}</p>}
      {framework.description && (
        <p className="mt-4 leading-relaxed">{framework.description}</p>
      )}
    </>
  );
}

// Splits "Statement. Explanation…" so the first sentence can act as a heading.
function splitLearning(text: string) {
  const end = text.indexOf(". ");
  if (end === -1) return { head: text, rest: "" };
  return { head: text.slice(0, end + 1), rest: text.slice(end + 2) };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const { content, metrics } = project;

  // THE APPROACH: every "how" section of the case study becomes one step of
  // a single numbered sequence, in story order.
  const [firstNarrative, ...laterNarrative] = content.narrative ?? [];
  const steps: { key: string; heading?: string; body: React.ReactNode }[] = [];

  if (content.approach) {
    steps.push({
      key: "approach",
      heading: "How I approached it",
      body: <p className="leading-relaxed">{content.approach}</p>,
    });
  }

  if (firstNarrative) {
    steps.push({
      key: "narrative-0",
      heading: firstNarrative.heading,
      body: (
        <>
          <Paragraphs body={firstNarrative.body} />
          {firstNarrative.bullets && <Bullets items={firstNarrative.bullets} />}
          {firstNarrative.flow && <FlowLine flow={firstNarrative.flow} />}
        </>
      ),
    });
  }

  if (content.paths) {
    steps.push({
      key: "paths",
      heading: content.paths.heading,
      body: <DecisionPaths content={content} />,
    });
  } else if (content.framework) {
    steps.push({
      key: "framework",
      heading: content.framework.heading,
      body: <FrameworkLine framework={content.framework} />,
    });
  }

  if (content.vision) {
    steps.push({
      key: "vision",
      heading: content.vision.heading,
      body: (
        <>
          <Paragraphs body={content.vision.body} />
          {content.vision.flow && <FlowLine flow={content.vision.flow} />}
        </>
      ),
    });
  }

  if (content.layers) {
    const layers = content.layers;
    steps.push({
      key: "layers",
      heading: layers.heading,
      body: (
        <>
          {layers.intro && <p className="leading-relaxed">{layers.intro}</p>}
          <div className={`grid gap-5 sm:grid-cols-3 ${layers.intro ? "mt-5" : ""}`}>
            {layers.items.map((item) => (
              <div key={item.name} className="border-t border-about-accent/40 pt-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.1em]">
                  {item.name}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          {layers.closing && <Closing>{layers.closing}</Closing>}
        </>
      ),
    });
  }

  laterNarrative.forEach((section) => {
    steps.push({
      key: section.heading,
      heading: section.heading,
      body: (
        <>
          <Paragraphs body={section.body} />
          {section.bullets && <Bullets items={section.bullets} />}
          {section.flow && <FlowLine flow={section.flow} />}
        </>
      ),
    });
  });

  const comparison = content.comparison;
  const chosen = comparison?.decision
    ? comparison.options.find((option) => option.label === comparison.decision)
    : undefined;

  const roleSection = (
    <Section key="role" className="border-t border-stone-200/80">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionLabel>MY ROLE</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            {content.actionsHeading ?? "What I did"}
          </h2>
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
          {content.actions.map((action) => (
            <li
              key={action}
              className="flex gap-3 border-t border-stone-300/70 py-3 text-[0.9375rem] leading-snug"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-about-accent"
                aria-hidden
              />
              <p className="!text-stone-800">{action}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );

  const outcomeSection = (
    <Section
      key="outcome"
      className="border-y border-about-blush-strong/70 bg-about-blush"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionLabel>OUTCOME</SectionLabel>
          {content.resultsHeading && (
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              {content.resultsHeading}
            </h2>
          )}

          <div className="mt-6">
            <p
              className={`text-balance font-semibold leading-[1.05] tracking-tight !text-about-accent ${
                metrics.mainResult.length > 28
                  ? "text-3xl md:text-4xl"
                  : "text-4xl md:text-5xl"
              }`}
            >
              {metrics.mainResult}
            </p>
            {metrics.label && (
              <p className="mt-3 text-lg font-medium !text-stone-900">
                {metrics.label}
              </p>
            )}
            {metrics.context && <p className="mt-1 text-sm">{metrics.context}</p>}
          </div>

        </div>

        <div className="lg:col-span-7 lg:pt-2">
          {content.secondaryMetric && (
            <div className="mb-6 flex items-baseline gap-4">
              <p className="shrink-0 text-3xl font-semibold tracking-tight !text-stone-900 md:text-4xl">
                {content.secondaryMetric.value}
              </p>
              <div>
                <p className="font-medium !text-stone-900">
                  {content.secondaryMetric.label}
                </p>
                <p className="text-sm">
                  {content.secondaryMetric.context}
                  {content.secondaryMetric.note &&
                    ` · ${content.secondaryMetric.note}`}
                </p>
              </div>
            </div>
          )}
          {content.status && (
            <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-stone-800">
              {content.status.steps.map((step) => (
                <li key={step} className="flex items-center gap-1.5">
                  <span className="text-about-accent-ink" aria-hidden>
                    ✓
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          )}
          <ul className="border-b border-about-accent/20">
            {content.results.map((result) => (
              <li
                key={result}
                className="border-t border-about-accent/20 py-4 leading-relaxed"
              >
                <p className="!text-stone-800">{result}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );

  return (
    <div className="bg-about-cream text-stone-900">
      <main>
        {/* HEADER */}
        <section className="pt-8 pb-12 md:pt-10 md:pb-14 lg:pb-16">
          <Container>
            <Link
              href="/projects"
              className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
            >
              ← All projects
            </Link>

            <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <SectionLabel>{project.category}</SectionLabel>

                <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[2.75rem] md:text-5xl lg:text-[3.25rem]">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-2xl text-xl leading-snug font-medium !text-about-accent md:text-2xl">
                  {project.subtitle}
                </p>

                <p className="mt-5 max-w-xl text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-8 border-l-2 border-about-accent pl-5">
                  <p className="text-2xl font-semibold leading-snug tracking-tight !text-about-accent-ink">
                    {metrics.mainResult}
                  </p>
                  {metrics.label && <p className="mt-1 text-sm">{metrics.label}</p>}
                </div>
              </div>

              {project.image && (
                <div className="lg:col-span-5 lg:self-center">
                  <div className="relative mr-3 md:mr-4">
                    <div
                      aria-hidden
                      className="absolute -right-3 -bottom-3 left-6 top-6 rounded-2xl bg-about-blush-strong md:-right-4 md:-bottom-4 md:left-8 md:top-8"
                    />
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 lg:aspect-[4/3]">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        loading="eager"
                        fetchPriority="high"
                        sizes="(min-width: 1152px) 440px, (min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* THE PROBLEM */}
        <Section className="border-t border-stone-200/80">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionLabel>THE PROBLEM</SectionLabel>
              {content.situationHeading && (
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                  {content.situationHeading}
                </h2>
              )}

              <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed">
                <p>{content.context}</p>
                <p className="font-medium !text-stone-900">{content.problem}</p>
              </div>

              {content.situationQuotes && content.stats && (
                <div className="mt-6 space-y-1.5 border-l-2 border-about-accent/40 pl-4">
                  {content.situationQuotes.map((quote) => (
                    <p key={quote} className="italic">
                      {quote}
                    </p>
                  ))}
                </div>
              )}

              {content.situationFlow && <FlowLine flow={content.situationFlow} />}
            </div>

            {!content.stats && content.situationQuotes && (
              <div className="space-y-4 lg:col-span-4 lg:col-start-9 lg:pt-10">
                {content.situationQuotes.map((quote) => (
                  <p
                    key={quote}
                    className="border-l-2 border-about-accent pl-4 text-xl leading-snug italic !text-stone-800"
                  >
                    {quote}
                  </p>
                ))}
              </div>
            )}

            {content.stats && (
              <dl
                className={`grid content-start gap-x-8 lg:col-span-4 lg:col-start-9 lg:pt-10 ${
                  content.stats.length > 3
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-2"
                    : "grid-cols-3 lg:grid-cols-1"
                }`}
              >
                {content.stats.map((stat) => (
                  <div key={stat.label} className="border-t border-stone-300/70 py-4">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <p className="text-2xl font-semibold tracking-tight !text-stone-900 md:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm">{stat.label}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </Section>

        {/* THE APPROACH */}
        {steps.length > 0 && (
          <Section className="border-t border-stone-200/80">
            <SectionLabel>THE APPROACH</SectionLabel>

            <ol className="mt-6">
              {steps.map((step, index) => (
                <li
                  key={step.key}
                  className="grid gap-3 border-t border-stone-300/70 py-6 last:pb-0 lg:grid-cols-12 lg:gap-12"
                >
                  <div className="lg:col-span-4">
                    <p className="text-sm font-semibold !text-about-accent-ink">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    {step.heading && (
                      <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight">
                        {step.heading}
                      </h3>
                    )}
                  </div>
                  <div className="lg:col-span-8">{step.body}</div>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* A KEY EXAMPLE */}
        {comparison && (
          <Section className="border-t border-stone-200/80">
            <div>
              <div>
                <SectionLabel>A KEY EXAMPLE</SectionLabel>
                <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                  {comparison.heading}
                </h2>
              </div>

              {chosen ? (
                <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                  {comparison.intro && (
                    <div className="border-t border-stone-300/70 pt-4">
                      <MiniLabel>Situation</MiniLabel>
                      <p className="mt-2 leading-relaxed">{comparison.intro}</p>
                    </div>
                  )}

                  <div className="border-t border-stone-300/70 pt-4">
                    <MiniLabel>Options</MiniLabel>
                    <ul className="mt-2 space-y-3">
                      {comparison.options.map((option) => (
                        <li key={option.label} className="leading-snug">
                          <p className="font-semibold !text-stone-900">
                            {option.title ?? option.label}
                          </p>
                          <p className="mt-0.5 text-sm">
                            {option.description}
                            {option.tag && (
                              <span className="text-stone-400"> · {option.tag}</span>
                            )}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-about-accent/50 pt-4">
                    <MiniLabel>Decision</MiniLabel>
                    <p className="mt-2 text-xl font-semibold tracking-tight !text-about-accent-ink">
                      {chosen.title ?? chosen.label}
                    </p>
                    <p className="mt-1 text-sm">{chosen.description}</p>
                  </div>

                  {comparison.closing && (
                    <div className="border-t border-stone-300/70 pt-4">
                      <MiniLabel>Why</MiniLabel>
                      <p className="mt-2 leading-relaxed font-medium !text-stone-900">
                        {comparison.closing}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-6 max-w-4xl">
                  {comparison.intro && (
                    <p className="leading-relaxed">{comparison.intro}</p>
                  )}
                  <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
                    {comparison.options.flatMap((option, index) => [
                      ...(index > 0
                        ? [
                            <p
                              key={`vs-${option.label}`}
                              className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400 sm:pt-5"
                              aria-hidden
                            >
                              vs.
                            </p>,
                          ]
                        : []),
                      <div key={option.label} className="border-t border-stone-300/70 pt-4">
                        <MiniLabel>{option.label}</MiniLabel>
                        {option.title && (
                          <p className="mt-2 font-semibold !text-stone-900">{option.title}</p>
                        )}
                        <p className="mt-1 text-sm leading-relaxed">{option.description}</p>
                        {option.tag && (
                          <p className="mt-2 text-xs font-medium uppercase tracking-[0.1em]">
                            {option.tag}
                          </p>
                        )}
                      </div>,
                    ])}
                  </div>
                  {comparison.closing && <Closing>{comparison.closing}</Closing>}
                </div>
              )}
            </div>
          </Section>
        )}

        {/* MY ROLE / OUTCOME (order configurable per project) */}
        {content.resultsBeforeActions
          ? [outcomeSection, roleSection]
          : [roleSection, outcomeSection]}

        {/* WHAT I LEARNED */}
        <Section
          className={content.resultsBeforeActions ? "border-t border-stone-200/80" : ""}
        >
          <SectionLabel>WHAT I LEARNED</SectionLabel>
          <div className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
            {content.learnings.slice(0, 3).map((learning, index) => {
              const { head, rest } = splitLearning(learning);
              return (
                <div key={learning} className="border-t border-stone-300/70 pt-5">
                  <p className="text-sm font-semibold !text-about-accent-ink">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">
                    {head}
                  </h3>
                  {rest && <p className="mt-2 leading-relaxed">{rest}</p>}
                </div>
              );
            })}
          </div>
        </Section>

        {/* NEXT */}
        <section className="pb-16 md:pb-20">
          <Container>
            <div className="flex flex-col gap-6 border-t border-stone-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/projects"
                className="text-sm font-semibold text-stone-900 transition hover:underline"
              >
                ← All projects
              </Link>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group max-w-md sm:text-right"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                  Next project
                </span>
                <span className="mt-1 block font-semibold text-stone-900 group-hover:underline">
                  {nextProject.title} →
                </span>
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
