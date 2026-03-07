"use client";

import { useState } from "react";

const scenarios = [
  {
    id: 1,
    title: "Building from zero",
    description:
      "You've got a great product or service, maybe a salesperson or two — but no marketing engine. No brand, no site that works, no pipeline beyond your personal network. We become your growth team. We build the strategy, the brand, the digital presence, and the systems from the ground up — side by side with you.",
    weBecome: "Your fractional growth leader",
    includes: [
      "Brand identity & messaging",
      "Website design & development",
      "CRM setup & automation",
      "Content strategy & creation",
      "Sales support & enablement",
    ],
  },
  {
    id: 2,
    title: "Modernizing what works",
    description:
      "You've built something real on relationships and reputation. But the world has changed and you know it. Competitors are showing up in places you're not. Your team is doing things manually that should be automated. We respect what you've built and help you modernize it — better systems, better content, better processes, without blowing up what's working.",
    weBecome: "Your strategic marketing & RevOps partner",
    includes: [
      "Go-to-market strategy",
      "Process & pipeline optimization",
      "Marketing automation & CRM",
      "Content & digital presence",
      "Sales team enablement",
    ],
  },
  {
    id: 3,
    title: "Leveling up your team",
    description:
      "You've got someone handling marketing — posting, emailing, updating the site. They're good at execution but there's no strategic brain driving the plan. We don't replace your people. We become the strategic layer they've been missing — giving them a playbook, better tools, and a partner who connects what marketing does to what sales needs.",
    weBecome: "The strategic layer your team is missing",
    includes: [
      "Marketing strategy & planning",
      "Team coaching & enablement",
      "Technology & tool optimization",
      "Content strategy & direction",
      "Sales-marketing alignment",
    ],
  },
  {
    id: 4,
    title: "Getting things done",
    description:
      "You've got the team and the budget. What you don't have is bandwidth. There are projects on the backlog that never get done — campaigns to launch, automations to build, systems to fix. We're your on-demand execution team. Fast, focused, and no six-month onboarding.",
    weBecome: "Your on-demand execution team",
    includes: [
      "Campaign builds & launches",
      "Automation & workflow development",
      "CRM cleanup & optimization",
      "Website updates & builds",
      "Special projects & sprints",
    ],
  },
];

export default function Scenarios() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {scenarios.map((scenario) => {
        const isOpen = openId === scenario.id;
        return (
          <div
            key={scenario.id}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-red/20 bg-white shadow-lg"
                : "border-border bg-white hover:border-muted/30 hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : scenario.id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left md:px-8 md:py-6"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 font-heading text-sm text-red">
                  {scenario.id}
                </span>
                <span className="font-heading text-lg text-dark md:text-xl">
                  {scenario.title}
                </span>
              </div>
              <svg
                className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <p className="mb-6 text-base leading-relaxed text-body md:text-lg">
                    {scenario.description}
                  </p>

                  <div className="mb-6 rounded-xl bg-warm-bg p-5">
                    <p className="mb-1 font-body text-xs font-semibold uppercase tracking-wider text-red">
                      We become
                    </p>
                    <p className="font-heading text-lg text-dark">{scenario.weBecome}</p>
                  </div>

                  <div className="mb-6">
                    <p className="mb-3 font-body text-sm font-semibold uppercase tracking-wider text-muted">
                      What that looks like
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {scenario.includes.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-warm-bg px-4 py-2 font-body text-sm font-medium text-body"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
                  >
                    Start a conversation
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <p className="mt-3 text-sm text-muted">
                    Free 30-minute conversation. No pitch, just clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="mt-8 text-center">
        <p className="text-lg text-body">
          Not sure which fits?{" "}
          <a href="#contact" className="font-semibold text-red hover:text-red-dark">
            That&apos;s fine — just reach out
          </a>{" "}
          and we&apos;ll figure it out together.
        </p>
      </div>
    </div>
  );
}
