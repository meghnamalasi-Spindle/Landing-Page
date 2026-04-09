export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:min-h-[min(100svh,900px)] lg:pb-28 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1504917595217-d002dc672b32?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#0a0a0b]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(99,102,241,0.2),transparent_55%)]" />
        <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#c9a227]/10 blur-[100px]" />
        <div className="absolute inset-0 grain opacity-100" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.4em] text-zinc-400">
          AI-native frontline execution · Industry 4.0
        </p>
        <h1
          id="hero-heading"
          className="font-display animate-fade-up animation-delay-100 mt-6 max-w-[18ch] text-[2.65rem] font-semibold leading-[0.98] tracking-tight text-white sm:max-w-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem]"
        >
          <span className="block">Turn frontline chaos into</span>
          <span className="mt-1 block bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent sm:mt-2">
            structured execution.
          </span>
        </h1>
        <p className="animate-fade-up animation-delay-200 mt-8 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:text-lg">
          Spindle is an{' '}
          <strong className="font-semibold text-zinc-200">
            AI-native frontline execution platform
          </strong>
          : the first agentic CMMS that integrates voice, vision, IoT, and
          organizational context—so maintenance moves from reacting to{' '}
          <strong className="font-semibold text-zinc-200">executing</strong>{' '}
          with traceable, intelligent workflows.
        </p>
        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-wrap items-center gap-4">
          <a
            id="cta"
            href="#cta-form"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#0a0a0b] transition-colors hover:bg-zinc-200"
          >
            request early access
          </a>
          <a
            href="https://spindle-org.github.io/spindle-prototype/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-white/40 hover:bg-white/[0.04]"
            target="_blank"
            rel="noreferrer"
          >
            open live prototype
          </a>
        </div>
        <p className="mt-10 max-w-2xl text-[13px] leading-relaxed text-zinc-600">
          For asset-heavy, multi-site operations: manufacturing, logistics,
          facilities, infrastructure, energy—and teams stuck between legacy CMMS
          and informal channels.
        </p>
      </div>
    </section>
  )
}
