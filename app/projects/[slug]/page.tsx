import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-stone-100 text-stone-900">
      <main className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 md:py-24">
        
        {/* BACK */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm font-medium text-stone-600 hover:text-stone-900"
          >
            ← Back to homepage
          </Link>
        </div>

        <article className="space-y-16">

          {/* HERO */}
          <header className="rounded-2xl border border-stone-200 bg-white px-8 py-10 md:px-11 md:py-14">
            
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
              {project.introduction}
            </p>

            {/* KPI */}
            <div className="mt-10">
              <div className="rounded-lg border border-stone-200 bg-[#F1DFE0] px-6 py-6 max-w-md">
                <p className="text-3xl font-semibold text-stone-900">
                  {project.metrics.mainResult}
                </p>
              </div>
            </div>
          </header>

          {/* SITUATION */}
          <section className="max-w-2xl space-y-6">
            
            <p className="text-lg text-stone-700 leading-relaxed">
              {project.content.context}
            </p>

            <p className="text-lg font-medium text-stone-900">
              {project.content.problem}
            </p>

          </section>

          {/* APPROACH */}
          <section className="max-w-2xl">
            <h2 className="text-2xl font-semibold">How I approached it</h2>

            <p className="mt-4 text-stone-600">
              {project.content.approach}
            </p>
          </section>

          {/* ACTIONS */}
          <section className="max-w-2xl">
            <h2 className="text-2xl font-semibold">What I did</h2>

            <ul className="mt-6 space-y-3">
              {project.content.actions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* RESULTS */}
          <section className="max-w-2xl">
            <h2 className="text-2xl font-semibold">What changed</h2>

            <div className="mt-6 rounded-xl border border-stone-200 bg-[#F1DFE0] p-6">
              <p className="text-3xl font-semibold text-stone-900">
                {project.metrics.mainResult}
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {project.content.results.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* LEARNINGS */}
          <section className="max-w-2xl">
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

      </main>
    </div>
  );
}