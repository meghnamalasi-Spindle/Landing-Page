const team = [
  {
    name: 'Alex Rivera',
    role: 'Co-founder & CEO',
    bio: 'Former ops lead in industrial energy; focused on getting critical work unstuck.',
    seed: 'AlexRivera',
  },
  {
    name: 'Jordan Okonkwo',
    role: 'Co-founder & CTO',
    bio: 'Systems and workflow automation; previously platform engineering at scale.',
    seed: 'JordanOkonkwo',
  },
  {
    name: 'Samira Patel',
    role: 'Head of Product',
    bio: 'Designs for desk workers and field teams under compliance pressure.',
    seed: 'SamiraPatel',
  },
  {
    name: 'Chris Nguyen',
    role: 'Engineering',
    bio: 'Builds routing, evidence capture, and learning loops you can trust.',
    seed: 'ChrisNguyen',
  },
]

function avatarUrl(seed: string) {
  const q = encodeURIComponent(seed)
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${q}`
}

export function Team() {
  return (
    <section
      id="team"
      className="border-b border-zinc-200/80 bg-[#FAFAFA] py-16 sm:py-20"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="team-heading"
          className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
        >
          Team
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
          A small group obsessed with operational truth: what is waiting, on
          whom, and why.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.seed}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="aspect-square bg-gradient-to-br from-indigo-50 to-cyan-50 p-6">
                  <img
                    src={avatarUrl(person.seed)}
                    alt=""
                    className="h-full w-full object-contain"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-zinc-100 p-4">
                  <p className="text-[15px] font-semibold text-zinc-900">
                    {person.name}
                  </p>
                  <p className="mt-0.5 text-[12px] font-medium text-indigo-700">
                    {person.role}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-zinc-600">
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
