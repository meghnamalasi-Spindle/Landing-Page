export function AudienceSplit() {
  return (
    <section
      className="border-b border-white/[0.08] bg-[#080809] py-20 sm:py-28"
      aria-labelledby="audience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="audience-heading"
          className="font-display max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
        >
          Built for the control room and the field.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          <div className="bg-[#0a0a0b] p-8 sm:p-10">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a227]">
              Desk operations
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
              Real-time operational awareness across assets, teams, and
              workflows—better coordination, faster decisions, and complete
              visibility without drowning in dashboards that only show the past.
            </p>
          </div>
          <div className="bg-[#0a0a0b] p-8 sm:p-10">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400/90">
              Field specialists
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
              Seamless task capture through multimodal input—voice, vision, and
              IoT signals—with a low-friction interface for real-world use.
              Technicians execute efficiently without wrestling with heavy,
              form-first tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
