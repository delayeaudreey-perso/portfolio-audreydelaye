import Link from "next/link";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="bg-stone-100 text-stone-900">
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <section className="rounded-2xl border border-stone-200 bg-white px-8 py-10 md:px-12 md:py-14">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
    Product & Data Consulting
  </p>

  <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
    I start with people.
    <br />
    <span className="text-[#F1DFE0]">
      Then I build the systems around them.
    </span>
  </h1>

  <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
  I’ve built my approach at the intersection of users, data and business — 
  understanding what really drives behavior, and turning it into useful, actionable systems.
</p>

<p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">
  From CRM and customer journeys to data-driven products, I design solutions that connect business, tech and real user needs.
</p>

  <p className="mt-5 text-xs text-stone-400">
    Built from real projects, not just theory.
  </p>

  <div className="mt-10 flex gap-4">
    <a
      href="#insights"
      className="inline-flex items-center justify-center rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
    >
      View my work
    </a>
    <a
      href="#contact"
      className="inline-flex items-center justify-center rounded-md border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
    >
      Contact me
    </a>
  </div>
</section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
  <article className="rounded-xl border border-stone-200 bg-white p-7">
    <h2 className="text-xl font-semibold">I started with people</h2>
<p className="mt-4 text-stone-600">
  My background in marketing taught me how people think, decide and behave — 
  not just what they say, but what actually drives action.
</p>
  </article>

  <article className="rounded-xl border border-stone-200 bg-white p-7">
    <h2 className="text-xl font-semibold">Then I learned to structure it</h2>
<p className="mt-4 text-stone-600">
  Working with CRM and data, I started turning those human insights into systems — 
  segmentation, journeys, and decision frameworks that teams could rely on.
</p>
  </article>

  <article className="rounded-xl border border-stone-200 bg-white p-7">
    <h2 className="text-xl font-semibold">Now I make it work at scale</h2>
<p className="mt-4 text-stone-600">
  Today, I design and deliver products and systems that connect business, data and execution — 
  so ideas don’t just exist, they actually work.
</p>
  </article>
</section>

        <section className="mt-20" aria-labelledby="skills-title">
          <h2 className="text-3xl font-semibold tracking-tight">
              How I bring value
          </h2>
          <p className="mt-4 max-w-2xl text-stone-600">
  What I’ve learned from working across marketing, CRM and data — and how I apply it today.
</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

  <div className="rounded-xl border border-stone-200 bg-white p-7">
    <h3 className="text-lg font-semibold">
      Understanding what drives behavior
    </h3>
    <p className="mt-4 text-stone-600">
      I use my marketing background to go beyond surface signals — 
      understanding how users think, decide and act.
    </p>
  </div>

  <div className="rounded-xl border border-stone-200 bg-white p-7">
    <h3 className="text-lg font-semibold">
      Turning data into decisions
    </h3>
    <p className="mt-4 text-stone-600">
      I structure data into clear frameworks that help teams prioritize, align and move forward.
    </p>
  </div>

  <div className="rounded-xl border border-stone-200 bg-white p-7">
    <h3 className="text-lg font-semibold">
      Designing systems that scale
    </h3>
    <p className="mt-4 text-stone-600">
      From CRM to automation, I build systems that are not only efficient, but usable and scalable.
    </p>
  </div>

  <div className="rounded-xl border border-stone-200 bg-white p-7">
    <h3 className="text-lg font-semibold">
      Connecting teams and execution
    </h3>
    <p className="mt-4 text-stone-600">
      I align business, tech and operations so projects don’t get stuck between teams.
    </p>
  </div>

  <div className="rounded-xl border border-stone-200 bg-white p-7">
    <h3 className="text-lg font-semibold">
      Bringing structure to complexity
    </h3>
    <p className="mt-4 text-stone-600">
      I turn unclear situations into structured plans, clear ownership and actionable next steps.
    </p>
  </div>

  <div className="rounded-xl border border-stone-200 bg-white p-7">
    <h3 className="text-lg font-semibold">
      Delivering what actually works
    </h3>
    <p className="mt-4 text-stone-600">
      I focus on execution — making sure ideas turn into real, measurable outcomes.
    </p>
  </div>

</div>
        </section>

       <section
  id="insights"
  className="mt-20"
  aria-labelledby="insights-title"
>
          <h2 id="insights-title" className="text-3xl font-semibold tracking-tight">
            Insights
          </h2>
          <p className="mt-4 max-w-2xl text-stone-600">
            Real-world case studies on CRM, data, and product challenges.
          </p>
          <div className="mt-9 grid gap-7 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
  key={project.title}
  href={`/projects/${project.slug}`}
  className="group flex flex-col rounded-xl border border-stone-200 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-sm"
>
  {/* TOP CONTENT */}
  <div>
    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
      {project.category}
    </p>

    <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-stone-900">
      {project.title}
    </h3>

    {/* DESCRIPTION + CTA FIXED HEIGHT */}
    <div className="mt-3 min-h-[90px]">
      <p className="text-sm leading-relaxed text-stone-600">
        {project.description}
      </p>

      <p className="mt-4 text-sm font-medium text-stone-900 group-hover:underline">
        Read case study →
      </p>
    </div>
  </div>

  {/* METRIC BOTTOM */}
  <div className="mt-auto rounded-lg border border-stone-200 bg-stone-100 px-5 py-6 flex items-center justify-center">
  <p className="text-2xl font-semibold !text-[#D9AEB1] text-center">
    {project.metrics.mainResult}
  </p>
</div>
</Link>
            ))}
          </div>
        </section>

        <section
  id="contact"
  className="mt-20 rounded-2xl border border-stone-200 bg-white px-8 py-10 md:px-12 md:py-14 text-center"
>
  <h2 className="text-3xl font-semibold tracking-tight">
    Let’s build something that works
  </h2>

  <div className="mt-8 space-y-4 text-base text-stone-800">
    <p>📍 Lausanne, Switzerland</p>

    <p>
      📧{" "}
      <a
        href="mailto:delaye.audreey@gmail.com"
        className="underline font-medium"
      >
        delaye.audreey@gmail.com
      </a>
    </p>

    <p>
      📞{" "}
      <a href="tel:+33637732634" className="underline font-medium">
        +33 6 37 73 26 34
      </a>
    </p>

    <p>
      💼{" "}
      <a
        href="https://www.linkedin.com/in/audrey-delaye/"
        target="_blank"
        className="underline font-medium"
      >
        LinkedIn profile
      </a>
    </p>
  </div>
</section>
      </main>
    </div>
  );
}
