const faqs = [
  {
    q: 'What is an “agentic CMMS”?',
    a: 'A maintenance system where autonomous agents plan, route, and collaborate across assets, crews, and work orders—moving orgs from tracking work in forms to executing work with context. Spindle is built agent-first for Industry 4.0.',
  },
  {
    q: 'How is Spindle different from MaintainX, UpKeep, or Fiix?',
    a: 'Those tools excel at records and mobility; Spindle is designed as a system of execution—multimodal capture (vision, voice, IoT), agentic workflows, mission-control intelligence, and governed automation. Compare against both modern CMMS and enterprise EAM (e.g. Maximo, SAP PM) depending on your stack.',
  },
  {
    q: 'Who is the ideal customer?',
    a: 'Mid-market to enterprise, 200–20,000+ employees, multi-location, asset-heavy, with field and on-site workforces—manufacturing, logistics, facilities, infrastructure, energy, and industrial services. Strong fit when IoT investments are in flight or informal tools (WhatsApp, spreadsheets) still run the floor.',
  },
  {
    q: 'How does IoT and ERP data fit in?',
    a: 'Spindle is designed to integrate across organizational structure, asset systems, and IoT—feeding real-time awareness (not just historical dashboards) and closing the loop to corrective action. Specific connectors depend on your environment and rollout phase.',
  },
  {
    q: 'Is AI usage auditable for regulated environments?',
    a: 'Governance is a core design constraint: traceable actions, logged agent decisions, and controlled sensitive data—so teams in regulated industries can adopt AI without sacrificing audit posture.',
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-[#dadada] bg-[#f2ede5] py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="font-display text-3xl font-semibold tracking-tight text-[#0f0f0f] sm:text-4xl"
        >
          FAQs
        </h2>
        <p className="mt-3 text-[15px] text-[#2f4366]/80">
          Spindle in practice—agentic CMMS, frontline AI, and enterprise fit.
        </p>
        <div className="mt-10 divide-y divide-[#dadada] border-t border-[#dadada]">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-[15px] font-semibold text-[#0f0f0f]">
                <span>{item.q}</span>
                <span className="mt-0.5 shrink-0 text-[#2f4366]/70 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-[#2f4366]/80">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
