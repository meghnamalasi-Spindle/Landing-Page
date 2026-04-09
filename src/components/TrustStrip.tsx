const blocks = [
  {
    title: 'For operations leaders',
    lines: [
      'Reduce downtime and surprise failures',
      'Real-time visibility across assets, teams, and locations',
      'Scale operations without linear headcount growth',
    ],
  },
  {
    title: 'For maintenance & plant managers',
    lines: [
      'Replace coordination chaos across teams and shifts',
      'Standardize workflows across sites',
      'Turn incomplete data into action—with voice & visual understanding',
    ],
  },
  {
    title: 'For the business',
    lines: [
      'Lower maintenance cost; higher uptime and asset life',
      'Workforce efficiency and accountability',
      'Data-driven decisions, compliance-ready governance',
    ],
  },
]

export function TrustStrip() {
  return (
    <section
      className="border-b border-white/[0.08] bg-[#080809] py-20 sm:py-28"
      aria-labelledby="outcomes-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          outcomes by stakeholder
        </p>
        <h2
          id="outcomes-heading"
          className="font-display mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
        >
          Built for ROI—not slideware.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/[0.08] bg-[#0a0a0b] p-6 sm:p-7"
            >
              <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-[#c9a227]">
                {b.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {b.lines.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-[14px] leading-relaxed text-zinc-500"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
