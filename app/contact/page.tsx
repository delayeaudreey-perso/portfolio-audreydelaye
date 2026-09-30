const EMAIL = "delaye.audreey@gmail.com";

const contactOptions: {
  number: string;
  label: string;
  value: string;
  action: string;
  href: string;
  external?: boolean;
}[] = [
  {
    number: "01",
    label: "EMAIL",
    value: EMAIL,
    action: "Send me an email",
    href: `mailto:${EMAIL}`,
  },
  {
    number: "02",
    label: "PHONE",
    value: "+33637732634",
    action: "Give me a call",
    href: "tel:+33637732634",
  },
  {
    number: "03",
    label: "LINKEDIN",
    value: "LinkedIn",
    action: "Connect with me",
    href: "https://www.linkedin.com/in/audrey-delaye/",
    external: true,
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

export default function ContactPage() {
  return (
    <div className="bg-about-cream text-stone-900">
      <main>
        {/* HERO */}
        <section className="pt-16 pb-14 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>CONTACT</SectionLabel>

              <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
                Let’s talk<span className="text-about-accent">.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
                Have a problem you’re trying to solve,
                <br className="hidden sm:block" /> a project you’d like to
                discuss, or simply want to say hello?
              </p>
            </div>
          </Container>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="pb-20 md:pb-24 lg:pb-28">
          <Container>
            <ul className="grid gap-5 lg:grid-cols-3 lg:gap-6">
              {contactOptions.map((option) => (
                <li key={option.label}>
                  <a
                    href={option.href}
                    {...(option.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-7 transition duration-200 hover:border-about-accent/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900 md:grid md:grid-cols-[9rem_minmax(0,1fr)_auto] md:items-center md:gap-8 md:p-8 lg:flex lg:items-stretch lg:gap-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-about-accent/30 bg-white text-xs font-semibold text-about-accent-ink">
                        {option.number}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                        {option.label}
                      </span>
                    </div>

                    <p className="mt-8 text-lg font-semibold leading-snug tracking-tight !text-stone-900 [overflow-wrap:anywhere] md:mt-0 lg:mt-8">
                      {option.value}
                    </p>

                    <p className="mt-8 text-sm font-medium !text-stone-900 md:mt-0 lg:mt-auto lg:pt-10">
                      {option.action}{" "}
                      <span
                        aria-hidden
                        className="inline-block text-about-accent-ink transition duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* FINAL INVITATION */}
        <section className="pb-24 md:pb-32">
          <Container>
            <div className="border-t border-stone-200 pt-20 text-center md:pt-24">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Not sure where to start? That’s okay.
              </h2>

              <p className="mt-4 text-lg">Tell me what’s on your mind.</p>

              <div className="mt-8 flex justify-center">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                >
                  Let’s talk →
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
