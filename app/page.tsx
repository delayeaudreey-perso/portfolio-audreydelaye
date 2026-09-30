import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "../data/projects";
import heroImage from "@/public/projects/deliverability-monitoring.jpg";

const services = [
  {
    number: "01",
    title: "Figure it out",
    subtitle: "Consulting & Product Strategy",
    description:
      "Understand the problem, assess the options and define the right approach.",
  },
  {
    number: "02",
    title: "Set it up",
    subtitle: "Market Solutions & Implementation",
    description:
      "Choose, configure and implement the right tools — and make them work for your teams.",
  },
  {
    number: "03",
    title: "Build it",
    subtitle: "Custom Systems & Automation",
    description:
      "Design and build tailored solutions when existing tools don’t fit the problem.",
  },
];

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

const selectedSlugs = [
  "product-capacity",
  "unified-platform",
  "deliverability-alerting-system",
  "sports-association-automation",
];

const selectedProjects = selectedSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

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

export default function Home() {
  return (
    <div className="bg-about-cream text-stone-900">
      <main>
        {/* HERO */}
        <section className="pt-14 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
          <Container>
            <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-10 md:gap-y-12 lg:gap-x-12">
              <div className="md:col-span-12 lg:col-span-7">
                <SectionLabel>PRODUCT MANAGER · DATA · DIGITAL</SectionLabel>

                <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
                  I start with people.
                  <br />
                  <span className="block text-balance text-about-accent">
                    Then I build the systems around them.
                  </span>
                </h1>
              </div>

              <div className="md:col-span-6 md:col-start-1 md:row-start-2 lg:col-span-6">
                <p className="max-w-xl text-lg leading-relaxed">
                  I help organisations solve complex problems by finding, setting
                  up or building the right solution.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#insights"
                    className="inline-flex items-center justify-center rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                  >
                    View my work →
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white"
                  >
                    Let’s talk
                  </Link>
                </div>
              </div>

              <div className="md:col-span-6 md:col-start-7 md:row-start-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
                <div className="relative mr-3 md:mr-4">
                  <div
                    aria-hidden
                    className="absolute -right-3 -bottom-3 left-6 top-6 rounded-2xl bg-about-blush-strong md:-right-4 md:-bottom-4 md:left-8 md:top-8"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
                    <Image
                      src={heroImage}
                      alt=""
                      fill
                      placeholder="blur"
                      loading="eager"
                      fetchPriority="high"
                      sizes="(min-width: 1152px) 440px, (min-width: 768px) 45vw, 100vw"
                      className="object-cover object-[60%_center]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT I DO */}
        <section className="border-t border-stone-200/80 py-20 md:py-24 lg:py-28">
          <Container>
            <div className="grid gap-10 xl:grid-cols-12 xl:gap-12">
              <div className="xl:col-span-4">
                <SectionLabel>WHAT I DO</SectionLabel>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Complex problem?
                  <br />
                  Let’s make it work.
                </h2>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  MARKET SOLUTIONS · CUSTOM SYSTEMS · AUTOMATION
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-3 lg:gap-6 xl:col-span-8">
                {services.map((service) => (
                  <div
                    key={service.number}
                    className="rounded-2xl border border-stone-200 bg-white p-7 md:grid md:grid-cols-2 md:gap-10 md:p-9 lg:block lg:p-7"
                  >
                    <div>
                      <p className="text-sm font-semibold !text-about-accent-ink">
                        {service.number}
                      </p>
                      <h3 className="mt-4 text-xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                    <p className="mt-4 leading-relaxed md:mt-9 lg:mt-4">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SELECTED WORK */}
        <section
          id="insights"
          className="scroll-mt-16 border-y border-about-blush-strong/70 bg-about-blush py-20 md:py-24 lg:py-28"
        >
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
              <div>
                <SectionLabel>SELECTED WORK</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  A few problems I’ve helped solve.
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-sm font-semibold text-stone-900 transition hover:underline"
              >
                View all projects →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {selectedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-sm"
                >
                  {/* IMAGE */}
                  {project.image ? (
                    <div className="relative aspect-[16/10] w-full border-b border-stone-200 bg-stone-100">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 1280px) 260px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] w-full items-center justify-center border-b border-stone-200 bg-stone-100">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                        {project.category}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-stone-900">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <p className="mt-4 text-sm font-medium !text-stone-900 group-hover:underline">
                      Read case study →
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="rounded-lg border border-stone-200 bg-about-cream px-4 py-4">
                        <p className="text-xl font-semibold leading-snug !text-about-accent">
                          {project.metrics.mainResult}
                        </p>
                        {project.metrics.label && (
                          <p className="mt-1 text-xs leading-relaxed">
                            {project.metrics.label}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
        <section id="contact" className="scroll-mt-16 pb-24 md:pb-32">
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
