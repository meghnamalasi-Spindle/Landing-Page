export function Statement() {
  return (
    <section
      className="border-y border-[#dadada] bg-[#f9fafb] py-16 sm:py-20"
      aria-labelledby="statement-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2f4366]/70">
          the platform
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
          <div>
            <h2
              id="statement-heading"
              className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[#0f0f0f] sm:text-4xl md:text-5xl"
            >
              Maintenance that{' '}
              <span className="text-[#a8d4d4]">executes</span>, not just logs.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] font-normal leading-relaxed text-[#2f4366] sm:text-lg">
              Spindle transforms maintenance from reactive, fragmented workflows
              into{' '}
              <strong className="font-semibold text-[#1a475c]">
                autonomous, intelligent operations
              </strong>
              . Using agentic AI, it closes the gap between where work starts-in
              calls, chats, photos, and voice-and the structured execution your
              assets and auditors require.
            </p>
          </div>
          <div className="rounded-xl border border-[#dadada] bg-[#f2ede5] p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2f4366]/70">
              Category
            </p>
            <p className="font-display mt-2 text-lg font-semibold text-[#0f0f0f]">
              Agentic CMMS + Frontline Copilot + Mission-Control Layer
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-[#2f4366]/80">
              Physical AI for the frontline-not another passive CMMS.
            </p>
            <a
              href="#product"
              className="mt-5 inline-flex text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2f4366] underline decoration-[#2f4366]/30 underline-offset-8 transition-colors hover:text-[#1a475c]"
            >
              explore capabilities
            </a>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'Agentic Asset Management',
            'Agentic Crew Management',
            'Agentic Work Order Management',
            'Agentic Predictive Maintenance',
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#dadada] bg-[#f9fafb] px-4 py-3 text-[12px] font-medium text-[#2f4366]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
