"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Daniel Walters",
    title: "AI Workflow Architect",
    quote:
      "Chris brings a consultant's brain and an operator's hands to his clients. He's a true full-stack marketer — equally comfortable at the strategic level (ICP, positioning, messaging, GTM planning) and in the execution details. He can step into any business, quickly diagnose what's broken and then implement practical fixes that create momentum fast. I'd recommend Chris to any team that needs someone creative, versatile, dependable, and focused on results.",
  },
  {
    name: "Christian Williams",
    title: "Marketing Leader",
    quote:
      "Chris is a great leader of his teams. He helped us build out the first website for the manufacturer I worked for and we couldn't have asked for a better partner to guide the ship for us. The dedication he put in to learning our needs and company culture was incredible. Truly one of the great marketing leaders to lean on.",
  },
  {
    name: "John Ferguson",
    title: "Director of Business Development, J.H. Findorff & Son, Inc.",
    quote:
      "Chris possesses one of the purest leadership styles I've ever been around. Add to that his strategic abilities and communication skills and you've got something truly special. I learned quickly while working with Chris; the value of his insight is something you'll want to have as often as you can.",
  },
  {
    name: "Gordon Cortez",
    title: "Owner & Operator, Lamon Luther",
    quote:
      "Chris is the epitome of a great businessman, superb leader of people, and true creative professional. His ability to lead, strategize, and solve problems is only overshadowed by the results he produces. He is fair, smart, and does what he says he will.",
  },
  {
    name: "Russell Poe",
    title: "",
    quote:
      "Chris is an extremely unique individual in that the sterling qualities he possesses and exhibits as a person are equal to those regarding his business expertise. I haven't met many other people who are so consistently helpful to those who need it, and treats everyone according to the 'Golden Rule.' Chris has helped me with my business by providing excellent marketing advice and direction and I consider him one of the finest examples of a man in regards to his integrity, his business acumen, and his kindness towards each person.",
  },
  {
    name: "Scott McDuffie, MBA, GBDS",
    title: "Strategic Employee Benefits Advisor",
    quote:
      "I hired Chris and his team to help overhaul our direct marketing efforts. They did a tremendous job, and acted as an extension of our company. They produced excellent, consistent work, their costs were reasonable, and our results were excellent. Their work improved the image of our product line.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden">
        <div className="mx-auto max-w-3xl text-center">
          <svg
            className="mx-auto mb-6 h-10 w-10 text-red/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="mb-8 min-h-[160px]">
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
          </blockquote>

          <div className="mb-8">
            <p className="text-base font-semibold text-gray-900">{testimonials[current].name}</p>
            {testimonials[current].title && (
              <p className="text-sm text-gray-500">{testimonials[current].title}</p>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-red hover:text-red"
          aria-label="Previous testimonial"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? "w-6 bg-red" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-red hover:text-red"
          aria-label="Next testimonial"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
