import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Scenarios from "./components/Scenarios";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Quiz from "./components/Quiz";
import HeroDashboard from "./components/HeroDashboard";
import HeroGeo from "./components/HeroGeo";
import { fieldNotes } from "./data/fieldNotes";

const services = [
  {
    title: "Get Found",
    description:
      "Nobody can buy from you if they don't know you exist. We build your digital presence — website, SEO, content, social — so the right people find you before they find your competitors.",
    includes: "Website design & development, SEO, social media, content strategy, brand identity",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Get Leads",
    description:
      "Traffic is nice. Customers are better. We build the campaigns and targeting that put real prospects in front of you — not just clicks on a dashboard.",
    includes: "Lead generation, inbound & outbound campaigns, paid media, email marketing, audience targeting",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Close More",
    description:
      "Getting interest is one thing. Converting it is another. We give you the tools, content, and follow-up systems that turn \"maybe\" into \"yes\" — faster and more often.",
    includes: "Sales collateral, email sequences, follow-up automation, landing pages, conversion optimization",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Keep & Grow",
    description:
      "The first sale isn't the finish line. We help you keep customers longer, get them to come back, and turn them into your best source of new business.",
    includes: "Retention campaigns, onboarding support, review & referral programs, cross-sell and upsell strategies",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Run Smarter",
    description:
      "If your team is still doing things manually that a machine should handle, we need to talk. We set up the systems, automations, and reporting that keep everything running without burning people out.",
    includes: "CRM setup & optimization, workflow automation, reporting & dashboards, integrations",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
];

const problemPoints = [
  "You feel like you're paying too much — but you can't quite prove what's working and what's not.",
  "You know the tactics that once worked are losing steam.",
  "AI is changing the game, but you're not sure exactly how to use it for your business.",
  "You don't have extra help for your existing team, and you know you need a full-pack approach — but you don't have a full-pack budget.",
];


export default function Home() {
  return (
    <>
      <Header />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-32" style={{background: "#D50000"}}>
        <HeroGeo />

        <div className="relative mx-auto max-w-4xl">
          <h1 className="font-heading text-6xl leading-tight tracking-tight text-white md:text-8xl md:leading-[1.05]">
            Marketing has changed. Your agency should too.
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-white/90 md:text-xl">
            RevenueWolf runs on AI, data, and 20+ years of knowing what actually drives revenue. No fluff. No vanity metrics. Just the marketing, automation, and strategy that gets you more customers.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-lg font-semibold text-[#D50000] transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Start a conversation
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THE PROBLEM ===== */}
      <section className="px-6 py-20 md:py-28" style={{ background: "#F5F5F2" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 font-heading text-3xl md:text-5xl" style={{ color: "#1a1a1a" }}>
            Does any of this sound familiar?
          </h2>

          <div className="space-y-2">
            {problemPoints.map((point, i) => (
              <div
                key={i}
                style={{ borderLeft: "3px solid #D50000", padding: "12px 0 12px 24px" }}
              >
                <p className="font-body leading-relaxed" style={{ color: "#444444", fontSize: "1.1rem" }}>{point}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 font-heading" style={{ color: "#1a1a1a", fontSize: "2rem", fontWeight: 700 }}>
            If any of this rings true, you&apos;re not alone — and it&apos;s fixable. It&apos;s exactly why we built RevenueWolf.
          </p>
        </div>
      </section>

      {/* ===== SECTION 3: WHAT WE DO ===== */}
      <section id="what-we-do" className="bg-warm-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              What we do
            </h2>
            <p className="mt-4 font-body text-lg text-muted md:text-xl">
              Everything your business needs to grow — connected, coherent, and built to prove it&apos;s working.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-md ${
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } md:col-span-1`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-red">
                  {service.icon}
                </div>
                <h3 className="mb-3 font-heading text-xl text-dark">{service.title}</h3>
                <p className="mb-4 font-body text-base leading-relaxed text-body">{service.description}</p>
                <p className="font-body text-sm text-muted">
                  <span className="font-semibold">Includes:</span> {service.includes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: WE MEASURE WHAT MATTERS ===== */}
      <HeroDashboard />

      {/* ===== SECTION 5: WHY US ===== */}
      <section id="why-us" className="relative overflow-hidden bg-dark px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-[0.03]">
          <Image src="/wolfhead-white.png" alt="" width={600} height={600} />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="font-heading text-3xl text-white md:text-5xl">
              Why RevenueWolf instead of everyone else?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 font-heading text-white" style={{ fontSize: "1.5rem" }}>
                You work with a senior marketer, not a junior account manager.
              </h3>
              <p className="font-body leading-relaxed" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
                No admin layer between you and the people actually doing the work. You get 20+ years of marketing experience — someone who&apos;s been on your side of the table and knows where the money gets wasted.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 font-heading text-white" style={{ fontSize: "1.5rem" }}>
                AI isn&apos;t a buzzword here. It&apos;s how we deliver more for less.
              </h3>
              <p className="font-body leading-relaxed" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
                We use AI across content, research, automation, and reporting to move faster and deliver what used to take a full team at a fraction of the cost.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 font-heading text-white" style={{ fontSize: "1.5rem" }}>
                Already have an agency? Let&apos;s make sure you&apos;re getting what you&apos;re paying for.
              </h3>
              <p className="font-body leading-relaxed" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
                If you&apos;re spending money on marketing and can&apos;t tell what&apos;s working, something&apos;s wrong. We help you figure out where your budget&apos;s actually going — and how to keep more of it while getting more out of it.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 font-heading text-white" style={{ fontSize: "1.5rem" }}>
                Have a marketing team or a one-person superhero? We help support them every step of the way.
              </h3>
              <p className="font-body leading-relaxed" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>
                We&apos;re not here to replace anyone. We give your people strategy, better tools, and a system to work from — so they can stop guessing and start executing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: INTERACTIVE QUIZ ===== */}
      <section className="bg-warm-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              How much of your marketing budget is actually working?
            </h2>
            <p className="mt-4 font-body text-lg text-muted md:text-xl">
              Five questions. Thirty seconds. Find out where you might be leaving money on the table.
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* ===== SECTION 7: WHERE YOU FIT ===== */}
      <section id="where-you-fit" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              Wherever you are, we meet you there.
            </h2>
          </div>
          <Scenarios />
        </div>
      </section>

      {/* ===== SECTION 8: TESTIMONIALS ===== */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              Don&apos;t take our word for it.
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ===== SECTION 9: ABOUT ===== */}
      <section id="about" className="bg-warm-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-red">
            Meet the wolf behind the pack
          </p>
          <div className="grid items-start gap-12 md:grid-cols-[300px_1fr]">
            <div className="relative mx-auto w-64 md:mx-0 md:w-full">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200">
                <Image
                  src="/chris-cleland.png"
                  alt="Chris Cleland, founder of RevenueWolf"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 -bottom-3 rounded-xl bg-red px-4 py-2 font-body text-sm font-semibold text-white shadow-lg">
                Chris Cleland
              </div>
            </div>

            <div className="space-y-4 font-body text-lg leading-relaxed text-body">
              <p>
                Chris Cleland has spent 20+ years in marketing — on the agency side, the corporate side, and everywhere in between. He&apos;s built sales teams, managed pipelines, launched campaigns, and sat through enough bad agency meetings to know exactly what&apos;s broken about the traditional model.
              </p>
              <p>
                RevenueWolf exists because there&apos;s a better way. Smarter tools, leaner execution, and a focus on the only metric that matters — did it grow your business?
              </p>
              <p>
                Based in Birmingham, Alabama, working with companies across the country who are done overpaying for marketing that can&apos;t prove itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FIELD NOTES ===== */}
      <section id="field-notes" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              Field Notes
            </h2>
            <p className="mt-4 font-body text-lg text-muted md:text-xl">
              Ideas, insights, and honest takes on marketing, sales, and growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {fieldNotes.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/field-notes/${post.slug}`}
                className="group rounded-2xl border border-border bg-warm-bg p-8 transition-all hover:shadow-md"
              >
                <p className="mb-3 font-body text-sm font-medium text-muted">{post.date}</p>
                <h3 className="mb-3 font-heading text-xl text-dark transition-colors group-hover:text-red">
                  {post.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-body line-clamp-3">{post.excerpt}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/field-notes"
              className="font-body text-base font-semibold text-red transition-colors hover:text-red-dark"
            >
              View all Field Notes &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: CTA / CONTACT ===== */}
      <section id="contact" className="bg-warm-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              Ready to stop guessing?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted md:text-xl">
              Whether you&apos;re starting from scratch, fixing what&apos;s broken, or just need to know if your marketing is actually working — it starts with a conversation. No pitch. No pressure. Just straight talk about what&apos;s going on and what we can do about it.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Book a call */}
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10">
              <h3 className="mb-2 font-heading text-xl text-dark">Book a discovery call</h3>
              <p className="mb-6 font-body text-base text-body">
                Free 30-minute conversation. No pitch, just clarity.
              </p>
              <a
                href="https://calendly.com/chris-revenuewolf/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-red-dark hover:shadow-lg"
              >
                Schedule on Calendly
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10">
              <h3 className="mb-2 font-heading text-xl text-dark">Send us a message</h3>
              <p className="mb-6 font-body text-base text-body">
                Tell us a little about your situation and we&apos;ll be in touch.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10 bg-dark px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/wolfhead-white.png"
              alt=""
              width={28}
              height={28}
            />
            <Image
              src="/logo-white.png"
              alt="RevenueWolf"
              width={160}
              height={24}
              className="h-5 w-auto"
            />
            <span className="font-body text-sm text-gray-600">LLC</span>
          </div>

          <p className="font-body text-sm text-gray-600">Birmingham, Alabama</p>

          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-500 transition-colors hover:border-red hover:text-red"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:chris@revenuewolf.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-500 transition-colors hover:border-red hover:text-red"
              aria-label="Email"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
