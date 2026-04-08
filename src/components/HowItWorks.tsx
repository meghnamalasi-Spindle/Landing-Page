const steps = [
  {
    step: '01',
    title: 'Open a work package',
    detail:
      'Describe the job once—scope, site, policy—and attach what reviewers need.',
  },
  {
    step: '02',
    title: 'Route with clarity',
    detail:
      'Spindle tracks who has the ball, who is waiting, and what is missing.',
  },
  {
    step: '03',
    title: 'Prove it',
    detail:
      'Collect evidence in-line: signatures, photos, checklists—before work releases.',
  },
  {
    step: '04',
    title: 'Learn and tighten',
    detail:
      'See bottlenecks and repeat patterns so the next cycle is calmer than the last.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-zinc-200/80 bg-[#FAFAFA] py-16 sm:py-20"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="how-heading"
          className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
        >
          How it works
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600">
          A straight path from intake to release—without losing history in
          inboxes or chat.
        </p>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {steps.map((s) => (
            <li key={s.step} className="relative flex gap-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-[13px] font-bold text-white shadow-sm"
                aria-hidden
              >
                {s.step}
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-zinc-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-zinc-600">
                  {s.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
