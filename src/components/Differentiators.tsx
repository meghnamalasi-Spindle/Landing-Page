const items = [
  {
    title: 'Agents first—not tickets first',
    body: 'The first CMMS built agent-first: autonomous agents plan and collaborate to create personalized maintenance frameworks—not another passive system of record.',
  },
  {
    title: 'Multimodal operational intelligence',
    body: 'Vision (asset recognition, condition), voice (natural task input), and data (IoT, logs, history)—a live contextual model of operations, not static rows.',
  },
  {
    title: 'Deep asset identity & memory',
    body: 'Every asset uniquely identifiable and continuously tracked. A persistent memory layer covering history, performance, issues, and actions.',
  },
  {
    title: 'Real-time awareness—not dashboards',
    body: 'IoT signals, frontline input, and environmental context—closer to real-time perception than traditional SaaS charts.',
  },
  {
    title: 'Compound knowledge engine',
    body: 'Images, voice logs, and documents convert messy field data into reusable intelligence that compounds over time.',
  },
  {
    title: 'Self-optimizing & governed',
    body: 'Learns from past tasks, adapts to each company, and logs agent decisions—AI usable in regulated industries.',
  },
]

export function Differentiators() {
  return (
    <section
      className="border-b border-white/[0.08] bg-[#0a0a0b] py-20 sm:py-28"
      aria-labelledby="diff-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          unique characteristics
        </p>
        <h2
          id="diff-heading"
          className="font-display mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
        >
          Why Spindle is not “another CMMS.”
        </h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-zinc-500">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-12 max-w-3xl text-center text-[15px] leading-relaxed text-zinc-500">
          Spindle connects{' '}
          <span className="text-zinc-300">
            machine + human signals → agent decisions → human + automated
            execution
          </span>
          —maintenance becomes traceable, intelligent workflows, not static
          tickets.
        </p>
      </div>
    </section>
  )
}
