import { Download, Building2, Bot, Users } from 'lucide-react'

const steps = [
  {
    icon: Download,
    step: '01',
    title: 'Clone & Install',
    description:
      'Clone the repo and install dependencies. No Docker, no cloud database, no config files.',
    code: 'git clone https://github.com/axislabs-dev/crewcmd.git && pnpm install',
  },
  {
    icon: Building2,
    step: '02',
    title: 'Create Your Company',
    description:
      'Set up your organization. This is the home for your human and agent team.',
    code: 'pnpm dev:https → /onboarding',
  },
  {
    icon: Bot,
    step: '03',
    title: 'Build Your Team',
    description:
      'Connect your OpenClaw runtime to import agents, deploy a blueprint, or create agents from scratch.',
    code: '→ Choose blueprint, connect runtime, or start from scratch',
  },
  {
    icon: Users,
    step: '04',
    title: 'Invite & Go',
    description:
      'Invite your human team members and start collaborating. Agents and humans, one workspace.',
    code: '→ Your crew is live at https://localhost:3000',
  },
]

export function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Up and running in 4 steps
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            From zero to a full human+agent workspace in under 5 minutes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-12 right-0 hidden h-px w-8 translate-x-full bg-[var(--color-surface-300)] lg:block" />
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
