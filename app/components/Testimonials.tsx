"use client";

const testimonials = [
  {
    name: "Daniel Walters",
    title: "AI Workflow Architect",
    quote:
      "Chris brings a consultant's brain and an operator's hands to his clients. He's a true full-stack marketer — equally comfortable at the strategic level and in the execution details.",
  },
  {
    name: "John Ferguson",
    title: "Director of Business Development, J.H. Findorff & Son, Inc.",
    quote:
      "Chris possesses one of the purest leadership styles I've ever been around. Add to that his strategic abilities and communication skills and you've got something truly special.",
  },
  {
    name: "Gordon Cortez",
    title: "Owner & Operator, Lamon Luther",
    quote:
      "Chris is the epitome of a great businessman, superb leader of people, and true creative professional. His ability to lead, strategize, and solve problems is only overshadowed by the results he produces.",
  },
  {
    name: "Scott McDuffie, MBA, GBDS",
    title: "Strategic Employee Benefits Advisor",
    quote:
      "I hired Chris and his team to help overhaul our direct marketing efforts. They produced excellent, consistent work, their costs were reasonable, and our results were excellent.",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="rounded-2xl border border-border bg-warm-bg p-8"
        >
          <svg
            className="mb-4 h-8 w-8 text-red/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="mb-6 font-body text-base leading-relaxed text-body">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div>
            <p className="font-body text-base font-semibold text-dark">{t.name}</p>
            {t.title && (
              <p className="font-body text-sm text-muted">{t.title}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
