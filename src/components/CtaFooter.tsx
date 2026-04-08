export function CtaFooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div
        id="cta-form"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="rounded-2xl border border-zinc-700/80 bg-zinc-800/50 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Get early access
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">
              Leave your email—we will follow up with next steps for pilots and
              design partners. (Demo form; wire to your backend when ready.)
            </p>
          </div>
          <form
            className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
              className="min-h-11 flex-1 rounded-lg border border-zinc-600 bg-zinc-900/80 px-3 py-2 text-[14px] text-white placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
            <button
              type="submit"
              className="min-h-11 rounded-lg bg-indigo-500 px-4 text-[14px] font-semibold text-white transition-colors hover:bg-indigo-400"
            >
              Notify me
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-[14px] text-zinc-400">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500 text-[11px] font-bold text-white"
              aria-hidden
            >
              S
            </span>
            © {new Date().getFullYear()} Spindle. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-[13px]">
            <a
              href="https://spindle-org.github.io/spindle-prototype/"
              className="text-zinc-400 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Design prototype
            </a>
            <span className="text-zinc-600">Privacy</span>
            <span className="text-zinc-600">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
