function MiniRow({
  title,
  meta,
  badge,
  badgeClass,
}: {
  title: string
  meta: string
  badge: string
  badgeClass: string
}) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-zinc-100 py-3 last:border-0">
      <div className="min-w-0">
        <p className="truncate text-[13px] font-medium text-zinc-900">{title}</p>
        <p className="mt-0.5 text-[11px] text-zinc-500">{meta}</p>
      </div>
      <span
        className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeClass}`}
      >
        {badge}
      </span>
    </div>
  )
}

export function ProductPreview() {
  return (
    <section className="border-b border-zinc-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Familiar surfaces, aligned to the job
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">
              The prototype mirrors real operational language: judgment queues,
              waiting states, risk, and proof—so teams do not have to translate
              their world into generic tickets.
            </p>
            <ul className="mt-6 space-y-3 text-[14px] text-zinc-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                Open inbox for what needs a decision today
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                Bottleneck and SLA signals before they escalate
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                Evidence gaps called out explicitly—not discovered in an audit
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-1 shadow-xl shadow-zinc-900/5">
            <div className="overflow-hidden rounded-[14px] border border-zinc-200/80 bg-white">
              <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/90 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                <span className="ml-2 text-[11px] text-zinc-400">
                  spindle.app / Acme Corp
                </span>
              </div>
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-zinc-100 p-4 md:border-b-0 md:border-r">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Needs your judgment
                  </p>
                  <div className="mt-3">
                    <MiniRow
                      title="Emergency procurement — turbine seal"
                      meta="WP-1402 · West Plant"
                      badge="Review"
                      badgeClass="bg-blue-50 text-blue-800 ring-1 ring-blue-100"
                    />
                    <MiniRow
                      title="Safety waiver — Confined space entry"
                      meta="WP-1407 · East Campus"
                      badge="Review"
                      badgeClass="bg-blue-50 text-blue-800 ring-1 ring-blue-100"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Bottlenecks
                  </p>
                  <div className="mt-3 rounded-lg border border-amber-200/80 bg-amber-50/80 p-3">
                    <p className="text-[12px] font-semibold text-amber-900">
                      Legal Review
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-amber-800/90">
                      Trailing SLA deviation. 8 packets stuck.
                    </p>
                  </div>
                  <div className="mt-3 rounded-lg border border-rose-200/80 bg-rose-50/80 p-3">
                    <p className="text-[12px] font-semibold text-rose-900">
                      Needs proof
                    </p>
                    <p className="mt-1 text-[11px] text-rose-800/90">
                      Chemical spill cleanup log — photo evidence required
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
