const industries = [
  'Manufacturing (discrete & process)',
  'Logistics & fleet',
  'Facilities (multi-site)',
  'Construction & infrastructure',
  'Energy, utilities & industrial services',
]

const personas = [
  {
    role: 'Primary buyer',
    title: 'Head / Director of Operations',
    note: 'Owns efficiency, uptime, and P&L across sites.',
  },
  {
    role: 'Economic buyer',
    title: 'COO / VP Operations',
    note: 'Cost reduction, scalability, and performance.',
  },
  {
    role: 'Champion',
    title: 'Maintenance / Plant Manager',
    note: 'Feels broken workflows and downtime every day.',
  },
  {
    role: 'End users',
    title: 'Technicians & field workers',
    note: 'Execute work in real environments—not desks.',
  },
]

const signals = [
  'Using CMMS today but outgrowing it (MaintainX, UpKeep, Fiix…)',
  'Recent investment in IoT, telematics, or sensors',
  'Scaling to multiple regions or locations',
  'Frequent downtime or coordination drag',
  'Predictive maintenance stuck in pilot',
  'Heavy use of WhatsApp, spreadsheets, informal channels',
]

export function MarketsPersonas() {
  return (
    <section
      id="markets"
      className="scroll-mt-24 border-b border-[#dadada] bg-[#f2ede5] py-20 sm:py-28"
      aria-labelledby="markets-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="markets-heading"
          className="font-display text-3xl font-semibold tracking-tight text-[#0f0f0f] sm:text-4xl"
        >
          Who Spindle is built for.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#2f4366]/80">
          Mid-market to enterprise ({' '}
          <strong className="font-medium text-[#1a475c]">~200–20,000+</strong>{' '}
          employees), multi-location, asset-heavy, with high recurring
          maintenance volume and blended field + on-site workforces.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {industries.map((i) => (
            <span
              key={i}
              className="rounded-full border border-[#dadada] bg-[#f9fafb] px-3 py-1.5 text-[12px] text-[#2f4366]"
            >
              {i}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p) => (
            <div
              key={p.role}
              className="rounded-xl border border-[#dadada] bg-[#f9fafb] p-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2f4366]/70">
                {p.role}
              </p>
              <p className="font-display mt-2 text-[15px] font-semibold text-[#0f0f0f]">
                {p.title}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#2f4366]/80">
                {p.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2f4366]/70">
            high-intent signals
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {signals.map((s) => (
              <li
                key={s}
                className="flex gap-2 text-[14px] leading-relaxed text-[#2f4366]/80"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#a8d4d4]" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
