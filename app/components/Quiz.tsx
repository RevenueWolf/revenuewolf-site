"use client";

import { useState } from "react";

const questions = [
  "Do you know exactly which marketing channels are bringing you customers?",
  "Are you still doing things manually that should be automated?",
  "Could you tell me right now what your cost to acquire a customer is?",
  "Do you have a system for following up with leads, or does stuff just fall through the cracks?",
  "Is anyone on your team using AI in your marketing right now?",
];

const options = ["Yes", "No", "Not sure"];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  function handleAnswer(answer: string) {
    const next = [...answers, answer];
    setAnswers(next);
    if (next.length < questions.length) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  }

  function reset() {
    setCurrent(0);
    setAnswers([]);
    setDone(false);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-6 font-heading text-2xl text-dark md:text-3xl">
          You&apos;re not broken — but you&apos;re probably leaving money on the table.
        </p>
        <p className="mb-8 font-body text-lg text-body">
          Here&apos;s where we&apos;d start.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-red-dark hover:shadow-lg"
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
          <button
            onClick={reset}
            className="font-body text-sm font-medium text-muted transition-colors hover:text-dark"
          >
            Retake quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex gap-2">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all ${
              i < current ? "bg-red" : i === current ? "bg-red/50" : "bg-border"
            }`}
          />
        ))}
      </div>

      <p className="mb-2 font-body text-sm font-medium text-muted">
        Question {current + 1} of {questions.length}
      </p>
      <p className="mb-8 font-heading text-xl text-dark md:text-2xl">
        {questions[current]}
      </p>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="rounded-full border-2 border-border bg-white px-8 py-3 font-body text-base font-semibold text-dark transition-all hover:border-red hover:text-red"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
