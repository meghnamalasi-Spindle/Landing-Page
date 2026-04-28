export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#dadada] bg-[#f9fafb] pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1504917595217-d002dc672b32?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-[#f9fafb]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(187,187,221,0.35),transparent_60%)]" />
        <div className="absolute inset-0 grain opacity-20" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-10">
          <div>
            <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.4em] text-[#2f4366]/70">
              AI-native frontline execution · Industry 4.0
            </p>
            <h1
              id="hero-heading"
              className="font-display animate-fade-up animation-delay-100 mt-5 max-w-[18ch] text-[2.45rem] font-semibold leading-[1] tracking-tight text-[#0f0f0f] sm:max-w-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem]"
            >
              <span className="block">Turn frontline chaos into</span>
              <span className="mt-1 block bg-gradient-to-r from-[#2f4366] via-[#1a475c] to-[#a8d4d4] bg-clip-text text-transparent sm:mt-2">
                structured execution.
              </span>
            </h1>
            <p className="animate-fade-up animation-delay-200 mt-6 max-w-2xl text-[15px] leading-relaxed text-[#2f4366] sm:text-base">
              Spindle is an{' '}
              <strong className="font-semibold text-[#1a475c]">
                AI-native frontline execution platform
              </strong>
              : the first agentic CMMS that integrates voice, vision, IoT, and
              organizational context-so maintenance moves from reacting to{' '}
              <strong className="font-semibold text-[#1a475c]">executing</strong>{' '}
              with traceable, intelligent workflows.
            </p>
            <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap items-center gap-3">
              <a
                id="cta"
                href="#cta-form"
                className="inline-flex items-center justify-center rounded-full bg-[#2f4366] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f9fafb] transition-colors hover:bg-[#1a475c]"
              >
                request early access
              </a>
              <a
                href="https://spindle-org.github.io/spindle-prototype/"
                className="inline-flex items-center justify-center rounded-full border border-[#2f4366]/30 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#2f4366] transition-colors hover:border-[#2f4366] hover:bg-[#f2ede5]"
                target="_blank"
                rel="noreferrer"
              >
                open live prototype
              </a>
            </div>
          </div>
          <aside className="animate-fade-up animation-delay-200 rounded-xl border border-[#dadada] bg-[#f2ede5] p-5 backdrop-blur-sm sm:p-6">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2f4366]/70">
              platform snapshot
            </p>
            <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[#2f4366]">
              <li>Agentic Asset Management</li>
              <li>Agentic Crew Management</li>
              <li>Agentic Work Order Management</li>
            </ul>
            <div className="mt-5 border-t border-[#dadada] pt-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1a475c]">
                Best-fit profile
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#2f4366]/80">
                Mid-market to enterprise, multi-location, asset-heavy teams with
                recurring maintenance and frontline workforce complexity.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
