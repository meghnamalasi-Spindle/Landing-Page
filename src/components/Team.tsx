const founders = [
  {
    name: 'Ayush',
    role: 'Co-founder · Operations & product',
    bio: 'Deep operational insight from India’s largest EV company—where day-to-day battery maintenance relied on inefficient tools like Slack—shaping a product built for real frontline workflows.',
    seed: 'AyushSpindle',
  },
  {
    name: 'Krishanu',
    role: 'Co-founder · Compliance & architecture',
    bio: 'Experience in compliance and financial systems at Goldman Sachs—building secure, auditable, transparent AI architecture critical for industrial and regulated environments.',
    seed: 'KrishanuSpindle',
  },
]

function avatarUrl(seed: string) {
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}`
}

export function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-24 border-b border-[#dadada] bg-[#f9fafb] py-20 sm:py-28"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2f4366]/70">
          founders
        </p>
        <h2
          id="team-heading"
          className="font-display mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#0f0f0f] sm:text-4xl md:text-5xl"
        >
          Frontline pain × agentic AI.
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#2f4366]/80">
          A blend of firsthand operational reality and deep expertise in
          agentic AI, operational systems, and high-scale frontline
          environments—so Spindle solves problems competitors have not lived
          directly.
        </p>
        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {founders.map((person) => (
            <li key={person.seed}>
              <div className="overflow-hidden rounded-2xl border border-[#dadada] bg-[#f2ede5] transition-colors hover:border-[#bbbbdd]">
                <div className="aspect-[5/3] bg-gradient-to-br from-[#2f4366]/80 to-[#1a475c]/70 p-8 sm:p-10">
                  <img
                    src={avatarUrl(person.seed)}
                    alt=""
                    className="mx-auto h-full max-h-48 w-auto object-contain opacity-95"
                    width={280}
                    height={280}
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-[#dadada] p-6 sm:p-8">
                  <p className="font-display text-2xl font-semibold text-[#0f0f0f]">
                    {person.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#a8d4d4]">
                    {person.role}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-[#2f4366]/80">
                    {person.bio}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
