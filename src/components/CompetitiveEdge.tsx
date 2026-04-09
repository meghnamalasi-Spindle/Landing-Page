const competitors = [
  'MaintainX',
  'UpKeep',
  'Fiix (Rockwell)',
  'IBM Maximo / SAP PM',
]

export function CompetitiveEdge() {
  return (
    <section
      className="border-b border-white/[0.08] bg-[#0a0a0b] py-20 sm:py-28"
      aria-labelledby="edge-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="edge-heading"
          className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
        >
          Agent-first CMMS. Physical AI for maintenance—not another tracker.
        </h2>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-zinc-500">
          Teams today compare Spindle to modern and legacy CMMS / EAM platforms.
          The difference: Spindle moves beyond tracking into{' '}
          <strong className="font-medium text-zinc-300">execution</strong>, with
          agents that plan and collaborate across your maintenance reality—not
          just digitize forms.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {competitors.map((c) => (
            <span
              key={c}
              className="rounded-md border border-white/10 px-2.5 py-1 text-[12px] text-zinc-500"
            >
              vs {c}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 border-t border-white/[0.08] pt-12 md:grid-cols-2">
          <div>
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
              operational depth
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-zinc-500">
              Founding insight from operating India’s largest EV fleet—where
              battery maintenance lived in Slack and ad-hoc tools—shapes a
              product built for real frontline workflows, not slide decks.
            </p>
          </div>
          <div>
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
              governance & architecture
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-zinc-500">
              Experience in compliance-heavy financial systems ensures
              auditable, transparent AI architecture—critical for industrial and
              regulated environments—paired with deep work in agentic AI and
              operational systems at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
