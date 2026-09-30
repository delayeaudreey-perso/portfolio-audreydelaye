import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "The problem, the users and what is getting in the way.",
  },
  {
    number: "02",
    title: "Decide",
    description: "The right solution based on business and user needs.",
  },
  {
    number: "03",
    title: "Build",
    description: "The solution, with the right people and tools.",
  },
  {
    number: "04",
    title: "Make it work",
    description: "In practice, with adoption and measurable impact.",
  },
];

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

export default function ProjectsPage() {
  return (
    <div className="bg-about-cream text-stone-900">
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
          {/* Subtle blush arc, echoing the About page accents */}
          <div
            aria-hidden
            className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-about-blush md:-top-40 md:-right-32 md:h-[28rem] md:w-[28rem] xl:right-[calc((100vw-72rem)/2-6rem)]"
          />
          <div
            aria-hidden
            className="absolute -top-20 -right-36 h-72 w-72 rounded-full border border-about-accent/15 md:-top-28 md:-right-44 md:h-[28rem] md:w-[28rem] xl:right-[calc((100vw-72rem)/2-9rem)]"
          />

          <Container>
            <div className="relative max-w-3xl">
              <SectionLabel>SELECTED WORK</SectionLabel>

              <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
                A few problems I’ve helped solve.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed">
                A closer look at the product, data and systems problems I’ve
                worked on.
              </p>
            </div>
          </Container>
        </section>

        {/* PROJECTS */}
        <section className="border-y border-about-blush-strong/70 bg-about-blush py-16 md:py-20 lg:py-24">
          <Container>
            <ul className="grid gap-6 md:auto-rows-fr xl:grid-cols-2">
              {projects.map((project, index) => (
                <li key={project.slug} className="flex">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group grid w-full overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-200 hover:border-stone-300 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:grid-rows-[1fr_auto] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)_minmax(0,4fr)] lg:grid-rows-1 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:grid-rows-[1fr_auto]"
                  >
                    {/* IMAGE */}
                    <div className="p-3 pb-0 md:row-span-2 md:pr-0 md:pb-3 lg:row-span-1 xl:row-span-1 xl:pb-0">
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-about-cream md:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-48 xl:aspect-[4/5] xl:h-auto xl:min-h-0">
                        {project.image ? (
                          <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            fill
                            loading={index < 2 ? "eager" : undefined}
                            sizes="(min-width: 1280px) 210px, (min-width: 1024px) 300px, (min-width: 768px) 260px, 100vw"
                            className="object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div
                            aria-hidden
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="absolute top-1/2 left-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-about-blush" />
                            <div className="absolute top-1/2 left-1/2 h-[55%] w-[55%] -translate-x-[40%] -translate-y-[40%] rounded-xl border border-about-accent/20" />
                            <span className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                              {project.category}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* INFORMATION */}
                    <div className="flex flex-col p-6 md:p-7 lg:py-8 xl:pt-6 xl:pb-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                        {project.category}
                      </p>

                      <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight">
                        {project.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-auto pt-5">
                        <p className="text-sm font-medium !text-stone-900 group-hover:underline">
                          Read case study →
                        </p>
                      </div>
                    </div>

                    {/* RESULT */}
                    <div className="mx-6 border-t border-stone-200 py-6 md:col-start-2 md:mx-7 md:min-h-[9rem] md:pt-5 lg:col-start-3 lg:row-start-1 lg:mx-0 lg:min-h-0 lg:flex lg:items-center lg:border-t-0 lg:border-l lg:py-8 lg:pr-7 lg:pl-6 xl:col-span-2 xl:col-start-1 xl:row-start-2 xl:mx-3 xl:mt-6 xl:block xl:border-t xl:min-h-[7.25rem] xl:border-l-0 xl:px-4 xl:pt-5 xl:pb-6">
                      <div className="border-l-2 border-about-accent pl-4">
                        <p className="text-xl font-semibold leading-snug !text-about-accent-ink">
                          {project.metrics.mainResult}
                        </p>
                        {project.metrics.label && (
                          <p className="mt-1 text-xs leading-relaxed">
                            {project.metrics.label}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* HOW I WORK */}
        <section className="py-20 md:py-24 lg:py-28">
          <Container>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div>
                <SectionLabel>HOW I WORK</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  From problem to impact.
                </h2>
              </div>
              <p className="max-w-sm text-lg leading-relaxed lg:text-right">
                I don’t start with a tool. I start by understanding what
                actually needs to work.
              </p>
            </div>

            <ol className="mt-12 max-w-md lg:mt-16 lg:grid lg:max-w-none lg:grid-cols-4">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                return (
                  <li key={step.number} className="flex gap-5 lg:block">
                    <div className="flex flex-col items-center lg:flex-row">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-about-accent/30 bg-white text-xs font-semibold text-about-accent-ink">
                        {step.number}
                      </span>
                      {!isLast && (
                        <span
                          className="my-1 w-px flex-1 bg-about-accent/25 lg:mx-4 lg:my-0 lg:h-px lg:w-auto"
                          aria-hidden
                        />
                      )}
                    </div>
                    <div
                      className={`pt-1 lg:mt-5 lg:pt-0 lg:pr-8 ${isLast ? "" : "pb-8 lg:pb-0"}`}
                    >
                      <h3 className="text-base font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="pb-24 md:pb-32">
          <Container>
            <div className="border-t border-stone-200 pt-20 text-center md:pt-24">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Have a complex problem to solve?
              </h2>

              <p className="mt-4 text-lg">
                Let’s figure out what the right solution looks like.
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                >
                  Let’s talk →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
