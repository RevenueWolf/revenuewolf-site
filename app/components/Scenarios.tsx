"use client";

const models = [
  {
    title: "No marketing help at all?",
    body: "You've been running on referrals, word of mouth, and hustle. That's gotten you this far — but you know it won't get you to the next level. We come in, build the foundation, and start getting you in front of the right people.",
  },
  {
    title: "Have a team but no strategy?",
    body: "Your person or your team is working hard — posting, emailing, updating the site. But there's no plan driving it. We become the strategic layer that connects what they're doing to what's actually growing the business.",
  },
  {
    title: "Have an agency but not sure it's working?",
    body: "You're writing checks but you can't point to what they're getting you. We help you figure out what's worth keeping, what's not, and where your money should actually be going.",
  },
  {
    title: "Have the strategy but need hands?",
    body: "You know what needs to get done — you just don't have the bandwidth to do it. We plug in fast, execute, and get things off your backlog without a six-month onboarding.",
  },
];

export default function Scenarios() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        {models.map((model) => (
          <div
            key={model.title}
            className="flex flex-col rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-md"
          >
            <h3 className="mb-4 font-heading text-xl text-dark">{model.title}</h3>
            <p className="mb-6 flex-1 font-body text-base leading-relaxed text-body">
              {model.body}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-red transition-colors hover:text-red-dark"
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
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="font-body text-lg text-body">
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
