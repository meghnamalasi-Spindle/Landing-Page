const metrics = [
  {
    value: 'Downtime',
    label: 'Reduced through predictive actions and faster corrective execution.',
  },
  {
    value: 'Visibility',
    label: 'Real-time awareness across assets, crews, and multi-site operations.',
  },
  {
    value: 'Efficiency',
    label: 'Higher workforce output with lower form burden and cleaner handoffs.',
  },
]

export function TrustStrip() {
  return (
    <section
      className="border-b border-[#dadada] bg-[#f9fafb] py-16 sm:py-20"
      aria-labelledby="outcomes-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#bbbbdd]">
          outcomes by stakeholder
        </p>
        <h2
          id="outcomes-heading"
          className="font-display mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold leading-tight tracking-tight text-[#0f0f0f] sm:text-4xl"
        >
          Built for ROI—not slideware.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="rounded-xl border border-[#dadada] bg-[#f2ede5] p-5 sm:p-6"
            >
              <p className="font-display text-2xl font-semibold text-[#1a475c] sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#2f4366]/80">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
