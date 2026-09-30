import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Flow } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function FlowDiagram({ flow }: { flow: Flow }) {
  if (flow.direction === "horizontal") {
    return (
      <div className="mt-6 max-w-2xl rounded-lg border border-stone-200 bg-stone-100 p-5">
        {flow.frameLabel && (
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
            {flow.frameLabel}
          </p>
        )}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {flow.steps.flatMap((step, index) => {
            const chip = (
              <span
                key={step}
                className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-900"
              >
                {step}
              </span>
            );
            const isLast = index === flow.steps.length - 1;
            return isLast
              ? [chip]
              : [
                  chip,
                  <span key={`arrow-${step}`} className="text-stone-400" aria-hidden>
                    →
                  </span>,
                ];
          })}
        </div>
      </div>
    );
  }

  const nodes: { key: string; lines: string[]; emphasized: boolean }[] = [
    ...flow.steps.map((step) => ({ key: step, lines: [step], emphasized: false })),
    ...(flow.resultLines
      ? [{ key: "result", lines: flow.resultLines, emphasized: true }]
      : []),
  ];

  return (
    <div className="mt-6 max-w-sm space-y-2">
      {nodes.map((node, index) => (
        <div key={node.key}>
          <div
            className={`rounded-lg border border-stone-200 px-5 py-3 text-center ${
              node.emphasized ? "bg-[#F1DFE0]" : "bg-stone-100"
            }`}
          >
            {node.lines.map((line) => (
              <p
                key={line}
                className={`text-sm ${
                  node.emphasized ? "font-semibold" : "font-medium"
                } text-stone-900`}
              >
                {line}
              </p>
            ))}
          </div>
          {index < nodes.length - 1 && (
            <p className="text-center text-stone-400" aria-hidden>
              ↓
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  // All case studies share one container/width system (see the
  // "Building a Unified Platform" reference layout). `contentWidth` is
  // kept on the data model for now but no longer drives layout branching.
  const mainWidth = "max-w-5xl";
  const sectionWidth = "max-w-3xl";

  const actionsSection = (
    <section key="actions" className={sectionWidth}>
      <h2 className="text-2xl font-semibold">
        {project.content.actionsHeading ?? "What I did"}
      </h2>

      <ul className="mt-6 space-y-3">
        {project.content.actions.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );

  const resultsSection = (
    <section key="results" className={sectionWidth}>
      <h2 className="text-2xl font-semibold">
        {project.content.resultsHeading ?? "What changed"}
      </h2>

      {project.content.status && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.content.status.steps.map((step) => (
            <span
              key={step}
              className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-900"
            >
              {step} ✓
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-stone-200 bg-[#F1DFE0] p-6">
        <p className="text-3xl font-semibold text-stone-900">
          {project.metrics.mainResult}
        </p>
        {project.metrics.label && (
          <p className="mt-2 text-sm font-medium text-stone-700">
            {project.metrics.label}
          </p>
        )}
        {project.metrics.context && (
          <p className="mt-1 text-xs text-stone-500">
            {project.metrics.context}
          </p>
        )}
      </div>

      <ul className="mt-6 space-y-3">
        {project.content.results.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {project.content.secondaryMetric && (
        <div className="mt-6 rounded-lg border border-stone-200 bg-stone-100 p-6">
          <p className="text-2xl font-semibold text-stone-900">
            {project.content.secondaryMetric.value}
          </p>
          <p className="mt-1 text-sm text-stone-600">
            {project.content.secondaryMetric.label} —{" "}
            {project.content.secondaryMetric.context}
          </p>
          {project.content.secondaryMetric.note && (
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-stone-400">
              {project.content.secondaryMetric.note}
            </p>
          )}
        </div>
      )}
    </section>
  );

  return (
    <div className="bg-stone-100 text-stone-900">
      <main className={`mx-auto w-full ${mainWidth} px-6 py-16 md:px-10 md:py-24`}>

        {/* BACK */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm font-medium text-stone-600 hover:text-stone-900"
          >
            ← Back to homepage
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
        <article className="space-y-16 px-6 py-10 sm:px-10 md:px-14 md:py-16">

          {/* HERO */}
          <header>

            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
              {project.category}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-stone-600 md:text-xl">
              {project.subtitle}
            </p>

            {/* INTRO */}
            <p className="mt-6 max-w-2xl text-lg text-stone-700 leading-relaxed">
              {project.description}
            </p>

            {/* KPI */}
            <div className="mt-10">
              <div className="rounded-lg border border-stone-200 bg-[#F1DFE0] px-6 py-6 max-w-md">
                <p className="text-3xl font-semibold text-stone-900">
                  {project.metrics.mainResult}
                </p>
                {project.metrics.label && (
                  <p className="mt-2 text-sm font-medium text-stone-700">
                    {project.metrics.label}
                  </p>
                )}
                {project.metrics.context && (
                  <p className="mt-1 text-xs text-stone-500">
                    {project.metrics.context}
                  </p>
                )}
              </div>
            </div>
          </header>

          {/* SITUATION */}
          <section className={`${sectionWidth} space-y-6`}>
            {project.content.situationHeading && (
              <h2 className="text-2xl font-semibold">
                {project.content.situationHeading}
              </h2>
            )}

            <p className="text-lg text-stone-700 leading-relaxed">
              {project.content.context}
            </p>

            <p className="text-lg font-medium text-stone-900">
              {project.content.problem}
            </p>

            {project.content.stats && (
              <div className="grid grid-cols-3 gap-4 max-w-lg">
                {project.content.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-stone-200 bg-stone-100 px-4 py-4 text-center"
                  >
                    <p className="text-xl font-semibold text-stone-900">{stat.value}</p>
                    <p className="mt-1 text-xs text-stone-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {project.content.situationQuotes && (
              <div className="space-y-2 border-l-2 border-stone-200 pl-4">
                {project.content.situationQuotes.map((quote) => (
                  <p key={quote} className="italic text-stone-500">
                    {quote}
                  </p>
                ))}
              </div>
            )}

            {project.content.situationFlow && (
              <FlowDiagram flow={project.content.situationFlow} />
            )}
          </section>

          {/* APPROACH (optional) */}
          {project.content.approach && (
            <section className={sectionWidth}>
              <h2 className="text-2xl font-semibold">How I approached it</h2>

              <p className="mt-4 text-stone-600">
                {project.content.approach}
              </p>
            </section>
          )}

          {/* NARRATIVE SECTIONS (optional, used by richer case studies) */}
          {project.content.narrative?.[0] && (
            <section className={sectionWidth}>
              <h2 className="text-2xl font-semibold">
                {project.content.narrative[0].heading}
              </h2>
              <div className="mt-4 space-y-4 text-stone-600">
                {project.content.narrative[0].body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {project.content.narrative[0].bullets && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.content.narrative[0].bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-900"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              )}
              {project.content.narrative[0].flow && (
                <FlowDiagram flow={project.content.narrative[0].flow} />
              )}
            </section>
          )}

          {/* FRAMEWORK (optional): RICE vs TSI */}
          {project.content.framework && (
            <section className={sectionWidth}>
              {project.content.framework.heading && (
                <h2 className="text-2xl font-semibold">
                  {project.content.framework.heading}
                </h2>
              )}

              <div className="mt-2 max-w-sm space-y-3">
                <div className="rounded-lg border border-stone-200 bg-stone-100 px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                    {project.content.framework.rice.label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-stone-900">
                    “{project.content.framework.rice.question}”
                  </p>
                </div>

                <p className="text-center text-stone-400">↓</p>

                <div className="rounded-lg border border-stone-200 bg-[#F1DFE0] px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-700">
                    {project.content.framework.tsi.label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-stone-900">
                    “{project.content.framework.tsi.question}”
                  </p>
                </div>
              </div>

              {project.content.framework.note && (
                <p className="mt-3 text-sm italic text-stone-500">
                  {project.content.framework.note}
                </p>
              )}

              {project.content.framework.description && (
                <p className="mt-6 text-stone-600">
                  {project.content.framework.description}
                </p>
              )}
            </section>
          )}

          {/* DECISION PATHS (optional): Automate / Enable / Build */}
          {project.content.paths && (
            <section className={sectionWidth}>
              <h2 className="text-2xl font-semibold">
                {project.content.paths.heading}
              </h2>

              {project.content.paths.intro && (
                <p className="mt-4 text-stone-600">{project.content.paths.intro}</p>
              )}

              {project.content.paths.inputs && (
                <>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                    {project.content.paths.inputs.flatMap((input, index) => {
                      const box = (
                        <div
                          key={input.label}
                          className="flex-1 rounded-lg border border-stone-200 bg-stone-100 px-4 py-4"
                        >
                          <p className="text-sm font-semibold text-stone-900">{input.label}</p>
                          <p className="mt-1 text-xs text-stone-600">{input.description}</p>
                        </div>
                      );
                      const isLast = index === project.content.paths!.inputs!.length - 1;
                      return isLast
                        ? [box]
                        : [
                            box,
                            <span
                              key={`plus-${input.label}`}
                              className="hidden text-center text-stone-400 sm:block sm:self-center"
                              aria-hidden
                            >
                              +
                            </span>,
                          ];
                    })}
                  </div>
                  <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                    ↓ Decision
                  </p>
                </>
              )}

              <div
                className={`mt-6 grid gap-4 ${
                  project.content.paths.items.length >= 4
                    ? "sm:grid-cols-2 lg:grid-cols-4"
                    : "sm:grid-cols-3"
                }`}
              >
                {project.content.paths.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-stone-200 bg-white p-5"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-stone-900">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-stone-600">{item.description}</p>
                  </div>
                ))}
              </div>

              {project.content.paths.closing && (
                <p className="mt-6 text-lg font-medium text-stone-900">
                  {project.content.paths.closing}
                </p>
              )}
            </section>
          )}

          {/* VISION (optional): what the product should become */}
          {project.content.vision && (
            <section className={sectionWidth}>
              <h2 className="text-2xl font-semibold">{project.content.vision.heading}</h2>
              <div className="mt-4 space-y-4 text-stone-600">
                {project.content.vision.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {project.content.vision.flow && (
                <FlowDiagram flow={project.content.vision.flow} />
              )}
            </section>
          )}

          {/* LAYERS (optional): what had to change, by layer */}
          {project.content.layers && (
            <section className={sectionWidth}>
              <h2 className="text-2xl font-semibold">{project.content.layers.heading}</h2>

              {project.content.layers.intro && (
                <p className="mt-4 text-stone-600">{project.content.layers.intro}</p>
              )}

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {project.content.layers.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-stone-200 bg-white p-5"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-stone-900">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-stone-600">{item.description}</p>
                  </div>
                ))}
              </div>

              {project.content.layers.closing && (
                <p className="mt-6 text-lg font-medium text-stone-900">
                  {project.content.layers.closing}
                </p>
              )}
            </section>
          )}

          {/* PRODUCT JUDGMENT COMPARISON (optional): two-option comparison, or a boundary "vs." split */}
          {project.content.comparison && (
            <section className={sectionWidth}>
              <h2 className="text-2xl font-semibold">
                {project.content.comparison.heading}
              </h2>

              {project.content.comparison.intro && (
                <p className="mt-4 text-stone-600">{project.content.comparison.intro}</p>
              )}

              {project.content.comparison.decision ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.content.comparison.options.map((option) => {
                    const isChosen = option.label === project.content.comparison!.decision;

                    return (
                      <div
                        key={option.label}
                        className={`rounded-xl border p-5 ${
                          isChosen
                            ? "border-stone-900 bg-[#F1DFE0]"
                            : "border-stone-200 bg-white"
                        }`}
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                          {option.label}
                          {isChosen ? " · Chosen" : ""}
                        </p>
                        {option.title && (
                          <h3 className="mt-2 text-base font-semibold text-stone-900">
                            {option.title}
                          </h3>
                        )}
                        <p className="mt-2 text-sm text-stone-600">{option.description}</p>
                        {option.tag && (
                          <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-stone-500">
                            {option.tag}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                  {project.content.comparison.options.flatMap((option, index) => {
                    const card = (
                      <div
                        key={option.label}
                        className="flex-1 rounded-xl border border-stone-200 bg-white p-5"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                          {option.label}
                        </p>
                        {option.title && (
                          <h3 className="mt-2 text-base font-semibold text-stone-900">
                            {option.title}
                          </h3>
                        )}
                        <p className="mt-2 text-sm text-stone-600">{option.description}</p>
                        {option.tag && (
                          <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-stone-500">
                            {option.tag}
                          </p>
                        )}
                      </div>
                    );
                    const isLast = index === project.content.comparison!.options.length - 1;
                    return isLast
                      ? [card]
                      : [
                          card,
                          <p
                            key={`vs-${option.label}`}
                            className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-stone-400"
                            aria-hidden
                          >
                            vs.
                          </p>,
                        ];
                  })}
                </div>
              )}

              {project.content.comparison.closing && (
                <p className="mt-6 text-lg font-medium text-stone-900">
                  {project.content.comparison.closing}
                </p>
              )}
            </section>
          )}

          {project.content.narrative?.slice(1).map((section) => (
            <section key={section.heading} className={sectionWidth}>
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-stone-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-900"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              )}
              {section.flow && <FlowDiagram flow={section.flow} />}
            </section>
          ))}

          {/* ACTIONS / RESULTS (order configurable per project) */}
          {project.content.resultsBeforeActions
            ? [resultsSection, actionsSection]
            : [actionsSection, resultsSection]}

          {/* LEARNINGS */}
          <section className={sectionWidth}>
            <h2 className="text-2xl font-semibold">What I learned</h2>

            <ul className="mt-6 space-y-3">
              {project.content.learnings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

        </article>
        </div>

      </main>
    </div>
  );
}