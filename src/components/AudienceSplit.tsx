export function AudienceSplit() {
  return (
    <section
      className="border-b border-[#dadada] bg-[#f9fafb] py-16 sm:py-20"
      aria-labelledby="audience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2f4366]/70">
          capabilities by role
        </p>
        <h2
          id="audience-heading"
          className="font-display mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#0f0f0f] sm:text-4xl"
        >
          Built for maintenance teams and operations teams.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-[#dadada] bg-[#f2ede5] p-6 sm:p-7">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-[#bbbbdd]">
              Capabilities for operations teams
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[#2f4366]">
              Real-time operational awareness across assets, teams, and
              workflows—better coordination, faster decisions, and complete
              visibility without drowning in dashboards that only show the past.
            </p>
          </div>
          <div className="rounded-xl border border-[#dadada] bg-[#f2ede5] p-6 sm:p-7">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a8d4d4]">
              Capabilities for maintenance teams
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[#2f4366]">
              Seamless task capture through multimodal input—voice, vision, and
              IoT signals—with a low-friction interface for real-world use.
              Technicians execute efficiently without wrestling with heavy,
              form-first tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
