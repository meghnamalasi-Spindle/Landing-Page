const pillars = [
  {
    eyebrow: 'Agentic CMMS · system of execution',
    title: 'Move from tracking work to executing work.',
    body: 'Autonomous agents plan and collaborate to build personalized maintenance frameworks. Three pillars: agentic asset management, agentic crew management, and agentic work order management.',
  },
  {
    eyebrow: 'Frontline copilot',
    title: 'AI built for technicians—not spreadsheets.',
    body: 'Visual + geotagged asset identification in the field. Voice-first commands across the full task lifecycle (create, update, close). Minimum-effort reporting and alerting—formless forms. Minimal training, zero dependency on clunky interfaces.',
  },
  {
    eyebrow: 'Mission-control platform',
    title: 'Operational intelligence, not vanity dashboards.',
    body: 'A central command layer for leadership: decision-making workspaces, cost tracking and trends, operational simulations and planning—beyond charts that only show what already happened.',
  },
  {
    eyebrow: 'Agentic predictive maintenance',
    title: 'Predict failures before they become outages.',
    body: 'Recommend and trigger corrective actions automatically. Continuously improves using real-time data and historical patterns—closing the loop from signal to execution.',
  },
]

export function Pillars() {
  return (
    <section
      id="product"
      className="scroll-mt-24 border-b border-white/[0.08] bg-[#0a0a0b] py-20 sm:py-28"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          platform pillars
        </p>
        <h2
          id="pillars-heading"
          className="font-display mt-4 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          The first agentic CMMS for Industry 4.0.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-500">
          Integrate across organizational structure, asset systems, and IoT—so
          frontline execution stays structured as work crosses channels,
          teams, and contractors.
        </p>
        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {pillars.map((p) => (
            <li
              key={p.title}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a227]/90">
                {p.eyebrow}
              </p>
              <h3 className="font-display mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-zinc-500">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
