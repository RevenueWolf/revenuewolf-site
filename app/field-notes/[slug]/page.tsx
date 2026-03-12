import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import { fieldNotes, getFieldNoteBySlug } from "../../data/fieldNotes";
import type { Metadata } from "next";

export function generateStaticParams() {
  return fieldNotes.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getFieldNoteBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Field Notes | RevenueWolf`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      siteName: "RevenueWolf",
      url: `https://revenuewolf.com/field-notes/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function FieldNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getFieldNoteBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Chris Cleland",
            },
            publisher: {
              "@type": "Organization",
              name: "RevenueWolf",
              url: "https://revenuewolf.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://revenuewolf.com/field-notes/${slug}`,
            },
          }),
        }}
      />

      <article className="bg-warm-bg px-6 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/field-notes"
            className="mb-8 inline-flex items-center gap-2 font-body text-sm font-medium text-muted transition-colors hover:text-red"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Field Notes
          </Link>

          {/* Header */}
          <p className="mb-4 font-body text-sm font-medium text-muted">
            {post.date}
          </p>
          <h1 className="font-heading text-3xl text-dark md:text-5xl">
            {post.title}
          </h1>

          {/* Body */}
          <div className="prose-rw mt-10 space-y-5 font-body text-lg leading-relaxed text-body [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:font-heading [&>h2]:text-2xl [&>h2]:text-dark [&>h2]:md:text-3xl [&>p>strong]:text-dark [&>p>em]:text-body">
            {post.body}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl text-dark md:text-4xl">
            Want to talk about this?
          </h2>
          <p className="mt-4 font-body text-lg text-muted">
            Start a conversation — no pitch, no pressure.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://calendly.com/chris-revenuewolf/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-red-dark hover:shadow-lg"
            >
              Book a call
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
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
            <a
              href="/#contact"
              className="font-body text-base font-semibold text-muted transition-colors hover:text-red"
            >
              Or send a message &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
