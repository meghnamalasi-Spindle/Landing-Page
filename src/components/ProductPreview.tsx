export function ProductPreview() {
  return (
    <section
      className="border-b border-[#dadada] bg-[#f2ede5] py-20 sm:py-28"
      aria-labelledby="preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-12">
          <div>
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2f4366]/70">
              live design system
            </p>
            <h2
              id="preview-heading"
              className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#0f0f0f] sm:text-4xl"
            >
              See Spindle surfaces in the browser.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#2f4366]/80">
              The public prototype on GitHub Pages mirrors judgment queues,
              bottlenecks, and execution language—an interactive slice of how
              mission-control and frontline workflows come together.{' '}
              <a
                href="https://spindle-org.github.io/spindle-prototype/"
                className="font-medium text-[#a8d4d4] underline decoration-[#a8d4d4]/30 underline-offset-4 hover:text-[#bbbbdd]"
                target="_blank"
                rel="noreferrer"
              >
                Open fullscreen
              </a>{' '}
              if the embed is clipped.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#dadada]">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80"
                alt="Logistics yard and fleet operations at dusk"
                className="aspect-[4/3] w-full object-cover"
                width={1000}
                height={750}
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-[11px] text-[#2f4366]/70">
              Photo: fleet & logistics operations — representative of multi-site
              asset environments Spindle serves.
            </p>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-[#dadada] bg-[#f9fafb] shadow-xl shadow-[#2f4366]/10 ring-1 ring-[#dadada]">
              <div className="flex items-center justify-between border-b border-[#dadada] bg-[#f2ede5] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
                </div>
                <span className="truncate font-mono text-[11px] text-[#2f4366]/70">
                  spindle-org.github.io/spindle-prototype
                </span>
              </div>
              <div className="relative aspect-[16/11] w-full bg-[#dadada]">
                <iframe
                  src="https://spindle-org.github.io/spindle-prototype/"
                  title="Spindle design system prototype — interactive preview"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-[#2f4366]/70">
              Interactive preview of the{' '}
              <strong className="font-medium text-[#1a475c]">
                Spindle — Design System
              </strong>{' '}
              experience; scroll and explore inside the frame above.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
