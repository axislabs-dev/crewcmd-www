import { Download, Settings, Zap } from 'lucide-react'

const steps = [
  {
    icon: Download,
    step: '01',
    title: 'Clone',
    description:
      'Clone the repo, install deps. Up and running in under a minute.',
    code: 'git clone https://github.com/axislabs-dev/crewcmd.git',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Configure',
    description:
      'Pick a blueprint or build your own. Add your agents, set roles, define guardrails.',
    code: 'pnpm install && pnpm dev:https',
  },
  {
    icon: Zap,
    step: '03',
    title: 'Deploy Your Crew',
    description:
      'Hit go. Your team of humans and agents is live, collaborating on the same board.',
    code: '→ Your crew is live at https://localhost:3000',
  },
]

export function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Up and running in 3 steps
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            From zero to a full human+agent workspace in under 5 minutes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-12 right-0 hidden h-px w-8 translate-x-full bg-[var(--color-surface-300)] md:block" />
              )}

              <div className="rounded-xl border border-[var(--color-surface-300)] bg-[var(--color-surface-100)] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-zinc-500">
                    STEP {s.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                  {s.description}
                </p>
                <div className="rounded-lg bg-[var(--color-surface-50)] px-4 py-2.5 font-[family-name:var(--font-mono)] text-xs text-zinc-500">
                  <span className="text-cyan-400">$</span> {s.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
