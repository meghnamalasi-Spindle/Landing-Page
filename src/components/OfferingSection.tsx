export function OfferingSection() {
  return (
    <section
      className="border-b border-white/[0.08] bg-[#0a0a0b] py-20 sm:py-28"
      aria-labelledby="offering-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
            alt="Technician reviewing machinery in an industrial facility"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={900}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-90" />
          <p className="absolute bottom-4 left-4 right-4 font-display text-sm font-semibold text-white">
            Frontline execution starts where work is physical.
          </p>
        </div>
        <div>
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
            the offering
          </p>
          <h2
            id="offering-heading"
            className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
          >
            AI-native execution for the frontline.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-zinc-400">
            Spindle is an{' '}
            <strong className="font-semibold text-zinc-200">
              AI-native frontline execution platform
            </strong>
            . It solves the maintenance and coordination chaos where work begins
            in fragmented channels—calls, email, SMS, voice notes, and
            photos—and then breaks down as it moves across technicians,
            maintenance teams, operations managers, and contractors.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
            Spindle turns that chaos into{' '}
            <strong className="font-semibold text-zinc-200">
              structured, executable workflows
            </strong>{' '}
            with the first{' '}
            <strong className="font-semibold text-zinc-200">
              agentic CMMS built for Industry 4.0
            </strong>
            , designed to integrate across your org structure, asset systems, and
            IoT infrastructure.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
            A self-optimizing operations copilot for desk-based operators and
            field specialists—so maintenance shifts from reacting to executing.
          </p>
        </div>
      </div>
    </section>
  )
}
