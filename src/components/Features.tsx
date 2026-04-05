import {
  Rocket,
  Bot,
  Inbox,
  Store,
  Shield,
  LayoutGrid,
  GitBranch,
  DollarSign,
  Mic,
} from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'BYO OpenClaw Runtime',
    description:
      'Connect your existing OpenClaw gateway and import your entire agent team. Your runtime, your agents, managed from one place.',
  },
  {
    icon: Rocket,
    title: 'One-Click Agent Team Import',
    description:
      'Connect to your OpenClaw gateway and import your agents with one click. Or deploy a pre-built blueprint to spin up a whole crew instantly.',
  },
  {
    icon: Inbox,
    title: 'Action Items Inbox',
    description:
      'A centralized inbox for items that need your attention. Agents surface decisions, blockers, and approvals. You review and act.',
  },
  {
    icon: Store,
    title: 'Skills Marketplace',
    description:
      'Browse ClawHub, skills.sh, and GitHub for plug-and-play agent capabilities.',
  },
  {
    icon: Shield,
    title: 'Access Control',
    description:
      'Private, shared, or team-wide agents. You decide who sees and controls what.',
  },
  {
    icon: LayoutGrid,
    title: 'Shared Task Board',
    description:
      'Humans and agents on the same board. See who is doing what at a glance.',
  },
  {
    icon: GitBranch,
    title: 'Visual Org Chart',
    description:
      'Map your team structure with humans and agents side by side. Set reporting lines and delegation rules.',
  },
  {
    icon: DollarSign,
    title: 'Budgets & Guardrails',
    description:
      'Set spending limits and behavioral guardrails for every agent.',
  },
  {
    icon: Mic,
    title: 'Voice Chat',
    description:
      'Talk to your agents naturally. Voice in, structured actions out.',
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Everything your crew needs
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A complete workspace for humans and AI agents working together.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-[var(--color-surface-300)] bg-[var(--color-surface-100)] p-6 transition hover:border-cyan-500/30 hover:bg-[var(--color-surface-200)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400 transition group-hover:bg-cyan-500/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
