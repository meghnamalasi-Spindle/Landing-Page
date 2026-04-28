const pains = [
  {
    title: 'Operational',
    items: [
      'Reactive maintenance and constant firefighting',
      'No real-time visibility into asset health',
      'Poor coordination across teams and shifts',
    ],
  },
  {
    title: 'System',
    items: [
      'Legacy CMMS as a record system—not execution',
      'Heavy forms → low adoption',
      'Incomplete data; weak ERP / IoT integration',
    ],
  },
  {
    title: 'Communication',
    items: [
      'Work lives in WhatsApp, Slack, calls',
      'No structured record of decisions',
      'Context lost between teams',
    ],
  },
  {
    title: 'Strategic',
    items: [
      'Predictive maintenance stuck in slides',
      'No unified view of cost, downtime, performance',
      'Scaling ops means scaling headcount',
    ],
  },
]

export function PainOutcomes() {
  return (
    <section
      className="border-b border-[#dadada] bg-[#f9fafb] py-20 sm:py-28"
      aria-labelledby="pain-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="pain-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[#0f0f0f] sm:text-4xl"
            >
              The pain Spindle removes.
            </h2>
            <div className="mt-8 space-y-8">
              {pains.map((p) => (
                <div key={p.title}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2f4366]/70">
                    {p.title}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {p.items.map((i) => (
                      <li
                        key={i}
                        className="text-[14px] leading-relaxed text-[#2f4366]/80"
                      >
                        — {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#dadada] bg-[#f2ede5] p-8 sm:p-10">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-[#bbbbdd]">
              value proposition
            </p>
            <p className="font-display mt-4 text-2xl font-semibold leading-snug text-[#0f0f0f] sm:text-3xl">
              From reactive, manual workflows to autonomous, intelligent
              operations.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#2f4366]">
              Spindle uses agentic AI to{' '}
              <strong className="font-semibold text-[#1a475c]">execute</strong>{' '}
              work—not just track it—so you can reduce downtime, scale without
              linear headcount, standardize across sites, and future-proof for
              Industry 4.0 with governance-grade auditability.
            </p>
            <ul className="mt-8 space-y-3 text-[14px] text-[#2f4366]/80">
              <li className="flex gap-2">
                <span className="text-emerald-500/90">✓</span>
                Lower maintenance cost; higher uptime and asset life
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500/90">✓</span>
                Workforce efficiency, accountability, and better decisions from
                data—not dashboards alone
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500/90">✓</span>
                Compliance & safety: agents align to your rules to shape
                maintenance frameworks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
