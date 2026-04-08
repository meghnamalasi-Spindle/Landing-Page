const pillars = [
  {
    title: 'Inbox & judgment',
    body: 'Surface what needs a human decision now—work packages with context, not another unread email thread.',
    tone: 'indigo' as const,
  },
  {
    title: 'Routing & proof',
    body: 'Send the right packet to the right owner. Capture signatures, photos, and attachments where compliance demands it.',
    tone: 'cyan' as const,
  },
  {
    title: 'Risk & bottlenecks',
    body: 'See what is blocked, escalated, or drifting from SLA before it becomes an incident or audit finding.',
    tone: 'amber' as const,
  },
  {
    title: 'Learning loops',
    body: 'Spot recurring delays—vendor patterns, noisy approval paths—and tune the operational system over time.',
    tone: 'violet' as const,
  },
]

const toneMap = {
  indigo: 'border-indigo-100 bg-indigo-50/60 ring-indigo-100',
  cyan: 'border-cyan-100 bg-cyan-50/50 ring-cyan-100',
  amber: 'border-amber-100 bg-amber-50/70 ring-amber-100',
  violet: 'border-violet-100 bg-violet-50/60 ring-violet-100',
}

export function Pillars() {
  return (
    <section
      id="product"
      className="border-b border-zinc-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="pillars-heading"
          className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
        >
          One layer for serious operations
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600 sm:text-base">
          Spindle is not generic task software. It mirrors how industrial and
          campus teams actually work: packets, sign-offs, evidence, and
          escalation paths—made legible in one place.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {pillars.map((p) => (
            <li
              key={p.title}
              className={`rounded-2xl border p-5 shadow-[0_1px_2px_rgba(24,24,27,0.04)] ring-1 ${toneMap[p.tone]}`}
            >
              <h3 className="text-[16px] font-semibold text-zinc-900">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-zinc-600">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
