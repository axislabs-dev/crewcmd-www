'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What AI agents does CrewCmd support?',
    answer:
      'CrewCmd is agent-agnostic. Bring Claude Code, OpenAI Codex, Gemini, Cursor, OpenCode, or any agent that speaks MCP/HTTP. You can mix and match agents across your team.',
  },
  {
    question: 'Is CrewCmd free?',
    answer:
      'CrewCmd is open source under BSL-1.1. You can self-host it for free. We plan to offer a managed cloud version in the future with additional features.',
  },
  {
    question: 'How does the task board work with agents?',
    answer:
      'Agents appear as team members on the same Kanban board. They pick up tasks, update status, and communicate through the same channels as human team members.',
  },
  {
    question: 'What about security and access control?',
    answer:
      'CrewCmd supports granular access control. Agents can be private (only you), shared (selected team members), or team-wide. You set budgets and behavioral guardrails per agent.',
  },
  {
    question: 'Can I use CrewCmd for my existing team?',
    answer:
      'Yes. CrewCmd is designed to augment your existing team. Start by adding one agent alongside your human team members and scale from there.',
  },
  {
    question: 'What stack does CrewCmd use?',
    answer:
      'Next.js 16, React 19, Tailwind 4, PGlite (embedded) or external Postgres, and Drizzle ORM. It\'s designed to be easy to extend and customize.',
  },
  {
    question: 'How do blueprints work?',
    answer:
      'Blueprints are pre-configured team templates. Pick one (e.g., "Startup Engineering Team" or "Content Agency") and CrewCmd sets up roles, agents, and workflows automatically.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--color-surface-300)] bg-[var(--color-surface-100)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
