import Link from "next/link";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-stone-100 text-stone-900">
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <section className="rounded-2xl border border-stone-200 bg-white px-8 py-10 md:px-12 md:py-14">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Projects
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg">
            A closer look at the product, data and systems problems I’ve worked on.
          </p>
        </section>

        <section className="mt-12">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col rounded-xl border border-stone-200 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-sm"
              >
                {/* TOP CONTENT */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-stone-900">
                    {project.title}
                  </h2>

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
      </main>
    </div>
  );
}
