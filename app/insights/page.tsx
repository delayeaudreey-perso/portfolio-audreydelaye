"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "../projects/data";

const filters = ["All", "CRM", "Data", "Product", "Automation"] as const;

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-stone-100 text-stone-900">
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <section className="rounded-2xl border border-stone-200 bg-white px-8 py-10 md:px-12 md:py-14">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Insights</h1>
          <p className="mt-3 text-sm font-medium tracking-wide text-stone-500 md:text-base">
            Perspectives on data, CRM, and product execution.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg">
            Real-world case studies on CRM, data, product, and automation
            challenges, focused on measurable business impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                    isActive
                      ? "border-stone-900 bg-stone-900 text-white"
                      : "border-stone-300 bg-white text-stone-600 hover:border-stone-400 hover:text-stone-900"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-12">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block rounded-xl border border-stone-200 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                  {project.category}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-stone-900">
                  {project.title}
                </h2>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone-600">
                  {project.summary}
                </p>

                <div className="mt-7 rounded-lg border border-stone-200 bg-stone-100 px-5 py-5">
                  <p className="text-4xl font-extrabold leading-none tracking-tight text-stone-950 md:text-5xl">
                    {project.metric}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-700">
                    {project.resultLabel}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-stone-900">
                    {project.secondaryMetric}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-xl border border-dashed border-stone-300 bg-white p-8 text-center text-stone-600">
              No case studies yet in this category.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
