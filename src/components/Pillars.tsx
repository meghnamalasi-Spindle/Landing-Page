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
      className="scroll-mt-24 border-b border-[#dadada] bg-[#f2ede5] py-16 sm:py-20"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2f4366]/70">
          platform pillars
        </p>
        <h2
          id="pillars-heading"
          className="font-display mt-4 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-[#0f0f0f] sm:text-4xl"
        >
          The first agentic CMMS for Industry 4.0.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#2f4366]">
          Integrate across organizational structure, asset systems, and IoT—so
          frontline execution stays structured as work crosses channels,
          teams, and contractors.
        </p>
        <ul className="mt-10 grid gap-4 lg:grid-cols-2">
          {pillars.map((p) => (
            <li
              key={p.title}
              className="flex flex-col rounded-xl border border-[#dadada] bg-[#f9fafb] p-5 sm:p-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#bbbbdd]">
                {p.eyebrow}
              </p>
              <h3 className="font-display mt-3 text-lg font-semibold leading-snug text-[#0f0f0f] sm:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#2f4366]/80">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
