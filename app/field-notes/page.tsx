import Link from "next/link";
import Header from "../components/Header";
import { fieldNotes } from "../data/fieldNotes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes | RevenueWolf",
  description:
    "Ideas, insights, and honest takes on marketing, sales, and growth.",
};

export default function FieldNotesPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-warm-bg px-6 pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl uppercase text-dark md:text-6xl">
            Field Notes
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-muted md:text-xl">
            Ideas, insights, and honest takes on marketing, sales, and growth in B2B.
          </p>
        </div>
      </section>

      {/* Post listing */}
      <section className="bg-warm-bg px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fieldNotes.map((post) => (
              <Link
                key={post.slug}
                href={`/field-notes/${post.slug}`}
                className="group rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-md"
              >
                <p className="mb-3 font-body text-sm font-medium text-muted">
                  {post.date}
                </p>
                <h2 className="mb-3 font-heading text-xl text-dark transition-colors group-hover:text-red">
                  {post.title}
                </h2>
                <p className="mb-4 font-body text-base leading-relaxed text-body line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="font-body text-sm font-semibold text-red">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl text-dark md:text-4xl">
            Want to talk about what you&apos;re reading?
          </h2>
          <p className="mt-4 font-body text-lg text-muted">
            No pitch. No pressure. Just a conversation about what&apos;s possible.
          </p>
          <div className="mt-8">
            <a
              href="/#contact"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
