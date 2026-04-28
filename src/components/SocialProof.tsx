const proofItems = [
  'Manufacturing',
  'Logistics & Fleet',
  'Facilities',
  'Construction',
  'Energy & Utilities',
]

const competitorMentions = ['MaintainX', 'UpKeep', 'Fiix', 'IBM Maximo', 'SAP PM']

export function SocialProof() {
  return (
    <section className="border-y border-[#dadada] bg-[#f2ede5] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2f4366]/70">
          Asset operations teams evaluating modern and legacy CMMS platforms
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {competitorMentions.map((name) => (
            <span
              key={name}
              className="rounded-md border border-[#dadada] bg-[#f9fafb] px-2.5 py-1 text-[11px] text-[#2f4366]/80"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {proofItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#dadada] bg-[#f9fafb] px-3 py-1.5 text-[12px] text-[#2f4366]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
