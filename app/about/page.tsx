import Image from "next/image";
import Link from "next/link";
import portrait from "@/public/about/portrait_audrey.jpg";
import sportPhoto from "@/public/about/audrey_sport.jpg";

const flowSteps = [
  { number: "01", label: "People", description: "Understand what they need" },
  { number: "02", label: "Problem", description: "Identify what’s not working" },
  { number: "03", label: "Approach", description: "Find the right solution" },
  { number: "04", label: "Impact", description: "Make it work in real life" },
];

const beliefs = [
  {
    number: "01",
    title: "Start with people.",
    description:
      "Listen before designing. The people experiencing the problem usually know more about it than the process or the tool does.",
  },
  {
    number: "02",
    title: "Don’t fall in love with the solution too early.",
    description:
      "A new tool isn’t necessarily a better solution. Sometimes the answer is configuration, simplification or simply stopping something that isn’t useful.",
  },
  {
    number: "03",
    title: "Make it work in real life.",
    description:
      "A solution isn’t finished when it is designed or deployed. It has to work for the people who use it.",
  },
];

const intersection = ["People", "Product", "Data", "Systems"];

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

export default function AboutPage() {
  return (
    <div className="bg-about-cream text-stone-900">
      <main>
        {/* INTRO */}
        <section className="pt-14 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32">
          <Container>
            <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-10 md:gap-y-12 lg:gap-x-12">
              <div className="md:col-span-12 lg:col-span-7">
                <SectionLabel>ABOUT</SectionLabel>

                <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
                  I like solving problems.
                  <br />
                  <span className="text-about-accent">
                    But first, I need to understand them.
                  </span>
                </h1>
              </div>

              <div className="md:col-span-5 md:col-start-8 md:row-start-2 lg:row-span-2 lg:row-start-1">
                <div className="relative mx-auto w-full max-w-sm md:max-w-none">
                  <div
                    aria-hidden
                    className="absolute -right-3 -bottom-3 left-6 top-6 rounded-2xl bg-about-blush-strong md:-right-4 md:-bottom-4 md:left-8 md:top-8"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
                    <Image
                      src={portrait}
                      alt="Portrait of Audrey Delaye"
                      fill
                      placeholder="blur"
                      loading="eager"
                      fetchPriority="high"
                      sizes="(min-width: 1152px) 420px, (min-width: 768px) 40vw, 384px"
                      className="object-cover object-[62%_center]"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 md:col-start-1 md:row-start-2 lg:col-span-6">
                <div className="max-w-xl space-y-5 text-lg leading-relaxed">
                  <p>
                    I’ve always been drawn to problems that don’t have an
                    obvious answer.
                  </p>
                  <p>
                    For me, the starting point is people. Problems are usually
                    revealed by the people experiencing them — through what
                    frustrates them, what slows them down, or what simply
                    doesn’t work.
                  </p>
                  <p>
                    That’s why I listen first. I want to understand how people
                    actually work, what they need, and where the friction
                    really comes from before deciding what the solution should
                    be.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FROM USING SYSTEMS TO DESIGNING THEM */}
        <section className="border-y border-about-blush-strong/70 bg-about-blush py-20 md:py-24 lg:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <SectionLabel>FROM USING SYSTEMS TO DESIGNING THEM</SectionLabel>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  A different way of looking at problems.
                </h2>

                <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed">
                  <p>
                    A big part of my career has been spent working with digital
                    tools, data and customer systems.
                  </p>
                  <p>
                    Over time, I realised that some of the biggest problems
                    weren’t caused by a lack of tools. They came from using
                    tools that didn’t actually fit the way people needed to
                    work.
                  </p>
                  <p>
                    I’ve experienced that frustration myself: losing time
                    because a system was too complex, forcing a process around
                    a tool, or paying for something people barely used.
                  </p>
                  <p className="border-l-2 border-about-accent py-1 pl-5 text-xl leading-relaxed font-medium !text-stone-900 md:pl-6 md:text-2xl md:leading-snug">
                    At one point, we were spending around €90,000 a year on a
                    monitoring tool that people rarely used. Instead of
                    accepting that as the cost of doing business, I wanted to
                    understand why.
                  </p>
                  <p className="font-medium !text-stone-900">
                    That question changed the way I think about product and
                    systems.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <ol className="max-w-sm lg:sticky lg:top-28 lg:mt-24">
                  {flowSteps.map((step, index) => (
                    <li key={step.number} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-about-accent/30 bg-white text-xs font-semibold text-about-accent-ink">
                          {step.number}
                        </span>
                        {index < flowSteps.length - 1 && (
                          <span
                            className="my-1 w-px flex-1 bg-about-accent/25"
                            aria-hidden
                          />
                        )}
                      </div>
                      <div
                        className={`pt-1 ${index < flowSteps.length - 1 ? "pb-8" : ""}`}
                      >
                        <h3 className="text-base font-semibold tracking-tight">
                          {step.label}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT I DO TODAY */}
        <section className="py-20 md:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-12">
              <div className="md:col-span-5">
                <SectionLabel>WHAT I DO TODAY</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  At the intersection of people, product, data and systems.
                </h2>

                <div
                  aria-hidden
                  className="relative mt-10 grid max-w-xs grid-cols-2 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700"
                >
                  {intersection.map((word, index) => (
                    <span
                      key={word}
                      className={`px-4 py-5 ${index % 2 === 0 ? "border-r pl-0" : "pr-0"} ${index < 2 ? "border-b" : ""} border-stone-300/80 ${index % 2 === 1 ? "text-right" : ""}`}
                    >
                      {word}
                    </span>
                  ))}
                  <span className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-about-accent" />
                </div>
              </div>

              <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
                <div className="max-w-xl text-lg leading-relaxed md:pt-10">
                  <p>
                    Today, I work at the intersection of people, product, data
                    and systems.
                  </p>

                  <ul className="mt-8 border-t border-stone-300/80">
                    <li className="border-b border-stone-300/80 py-5">
                      <p className="text-xl leading-snug font-medium !text-stone-900">
                        Sometimes the right answer is to rethink the problem.
                      </p>
                    </li>
                    <li className="border-b border-stone-300/80 py-5">
                      <p className="text-xl leading-snug font-medium !text-stone-900">
                        Sometimes it’s to find and implement an existing tool.
                      </p>
                    </li>
                    <li className="border-b border-stone-300/80 py-5">
                      <p className="text-xl leading-snug font-medium !text-stone-900">
                        Sometimes it’s to build something tailored.
                      </p>
                    </li>
                  </ul>

                  <p className="mt-8">
                    I’m not attached to one type of solution. I’m interested in
                    finding the one that actually solves the problem.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* A LITTLE MORE ABOUT ME */}
        <section className="border-y border-about-blush-strong/70 bg-about-blush py-20 md:py-24 lg:py-28">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-12">
              <div className="md:col-span-7 lg:col-span-6">
                <SectionLabel>A LITTLE MORE ABOUT ME</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  International by experience.
                  <br className="hidden sm:block" /> Grounded by sport.
                </h2>

                <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed">
                  <p>
                    I first went to live abroad at sixteen and have since lived
                    in five countries — studying in Canada, experiencing Brexit
                    from the UK, Covid from Spain, and seeing how differently
                    societies can work from the inside.
                  </p>
                  <p>
                    Competitive sport has been a big part of my life for more
                    than 16 years, across cross-country, track, road and trail.
                    Competition gives you very direct feedback: a time, a
                    place, a result.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
                <div className="relative ml-auto aspect-[3/4] w-4/5 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 sm:w-3/5 md:w-full">
                  <Image
                    src={sportPhoto}
                    alt="Audrey Delaye and teammates holding their medals after an athletics race"
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1152px) 340px, (min-width: 768px) 40vw, 80vw"
                    className="object-cover object-[center_35%]"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* THREE THINGS I BELIEVE */}
        <section className="py-20 md:py-24 lg:py-28">
          <Container>
            <SectionLabel>THREE THINGS I BELIEVE</SectionLabel>

            <div className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-6">
              {beliefs.map((belief) => (
                <div
                  key={belief.number}
                  className="rounded-2xl border border-stone-200 bg-white p-7 md:grid md:grid-cols-2 md:gap-10 md:p-9 lg:block lg:p-8"
                >
                  <div>
                    <p className="text-sm font-semibold !text-about-accent-ink">
                      {belief.number}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight">
                      {belief.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-relaxed md:mt-9 lg:mt-4">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="pb-24 md:pb-32">
          <Container>
            <div className="border-t border-stone-200 pt-20 text-center md:pt-24">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Want to talk about a problem you’re trying to solve?
              </h2>

              <p className="mt-4 text-lg">I’d love to hear more.</p>

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
