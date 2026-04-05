import { Github, Star } from 'lucide-react'

export function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-2xl border border-[var(--color-surface-300)] bg-gradient-to-b from-[var(--color-surface-200)] to-[var(--color-surface-100)] p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to deploy your crew?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-400">
            Open source. Self-hosted. Your team of 3 operates like 30.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/axislabs-dev/crewcmd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            <a
              href="https://github.com/axislabs-dev/crewcmd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-6 py-3 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-500/20"
            >
              <Star className="h-4 w-4" />
              Star the Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
