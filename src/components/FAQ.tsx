const faqs = [
  {
    q: 'Is Spindle a generic task tracker?',
    a: 'No. It is oriented around operational work packages—approvals, evidence, SLAs, and escalation—so teams are not forced to translate their world into generic tickets.',
  },
  {
    q: 'Who is it for?',
    a: 'Organizations that run physical operations: plants, campuses, infrastructure, and regulated environments where sign-offs and proof matter.',
  },
  {
    q: 'How does this relate to the public prototype?',
    a: 'The GitHub-hosted prototype is a design system and sample surfaces so teams can preview interaction patterns. The product roadmap will extend beyond that shell based on pilot feedback.',
  },
  {
    q: 'Are you handling production workloads today?',
    a: 'We are speaking with design partners. Request access to join the conversation and shape priorities.',
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-zinc-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
        >
          FAQ
        </h2>
        <dl className="mt-10 max-w-3xl space-y-8">
          {faqs.map((item) => (
            <div key={item.q}>
              <dt className="text-[15px] font-semibold text-zinc-900">
                {item.q}
              </dt>
              <dd className="mt-2 text-[14px] leading-relaxed text-zinc-600">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
