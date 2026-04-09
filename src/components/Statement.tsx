export function Statement() {
  return (
    <section
      className="border-y border-white/[0.08] bg-[#080809] py-20 sm:py-28"
      aria-labelledby="statement-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
          value proposition
        </p>
        <h2
          id="statement-heading"
          className="font-display mt-6 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Maintenance that{' '}
          <span className="text-[#c9a227]">executes</span>, not just logs.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-[15px] font-normal leading-relaxed text-zinc-400 sm:text-lg">
          Spindle transforms maintenance from reactive, fragmented workflows into{' '}
          <strong className="font-semibold text-zinc-200">
            autonomous, intelligent operations
          </strong>
          . Using agentic AI, it closes the gap between where work starts—in
          calls, chats, photos, and voice—and the structured execution your
          assets and auditors require.
        </p>
        <p className="font-display mx-auto mt-12 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
          Physical AI for the frontline—not another passive CMMS.
        </p>
        <a
          href="#product"
          className="mt-8 inline-flex text-[13px] font-semibold uppercase tracking-[0.2em] text-zinc-400 underline decoration-white/20 underline-offset-8 transition-colors hover:text-white"
        >
          explore the platform
        </a>
      </div>
    </section>
  )
}
