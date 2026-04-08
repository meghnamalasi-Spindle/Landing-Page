export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-zinc-200/80 bg-[#FAFAFA] pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.18),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex items-center rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-indigo-800">
          Operations workflow intelligence
        </p>
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
        >
          Operational approvals that actually finish.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
          Spindle turns scattered work packages—procurement, safety waivers,
          certifications—into one layer of routing, evidence, and
          accountability. Fewer escalations. Faster safe operations.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            id="cta"
            href="#cta-form"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-[15px] font-semibold text-white shadow-md shadow-indigo-600/20 transition-colors hover:bg-indigo-700"
          >
            Request early access
          </a>
          <a
            href="https://spindle-org.github.io/spindle-prototype/"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-[15px] font-semibold text-zinc-800 shadow-sm transition-colors hover:border-indigo-200 hover:bg-zinc-50"
            target="_blank"
            rel="noreferrer"
          >
            Explore the design system
          </a>
        </div>
        <p className="mt-6 text-[13px] text-zinc-500">
          Built for desk workers and field teams who live under SLAs, audits,
          and real-world consequences.
        </p>
      </div>
    </section>
  )
}
