const steps = [
  {
    label: 'Signals in',
    detail: 'IoT, vision, voice, documents, and field context enter one execution layer.',
  },
  {
    label: 'Agents decide',
    detail: 'Agentic workflows plan, route, and collaborate across asset, crew, and work-order surfaces.',
  },
  {
    label: 'Humans + automation execute',
    detail: 'Technicians and systems complete work with traceable decisions and proof.',
  },
  {
    label: 'Memory compounds',
    detail: 'Every action improves models, workflows, and governance for the next cycle.',
  },
]

export function ExecutionLoop() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-b border-white/[0.08] bg-[#080809] py-20 sm:py-28"
      aria-labelledby="loop-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          system of execution
        </p>
        <h2
          id="loop-heading"
          className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Machine + human signals → decisions → execution.
        </h2>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.label}
              className="relative rounded-xl border border-white/[0.08] bg-[#0a0a0b] p-6"
            >
              <span className="font-display text-[11px] font-bold text-zinc-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold text-white">
                {s.label}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">
                {s.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
