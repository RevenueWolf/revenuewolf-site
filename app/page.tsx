import Image from "next/image";
import Header from "./components/Header";
import Scenarios from "./components/Scenarios";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import GTMFramework from "./components/GTMFramework";

const services = [
  {
    title: "Brand & Digital Presence",
    description:
      "Your identity, your story, and the digital front door that makes the first impression. Brand strategy, website design and development, and the visual identity that makes you look like the company you actually are.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Content & Social Media",
    description:
      "The content your sales team actually wants to share and your audience actually wants to read. Blog posts, case studies, social media, email campaigns — created with your voice, not ours.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Lead Generation & Prospecting",
    description:
      "Getting your name in front of the right people at the right time. Outbound prospecting, inbound campaigns, SEO, and the targeting that makes your pipeline predictable instead of accidental.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Sales Support & Enablement",
    description:
      "The collateral, tools, and processes that make your sales team faster and sharper. Proposals, decks, follow-up sequences, and the coaching that helps them use it all.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "CRM & Automation",
    description:
      "The systems that keep it all running without burning out your people. CRM setup and optimization, workflow automation, reporting, and the integrations that make your tools actually talk to each other.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    title: "Customer Growth & Retention",
    description:
      "The sale isn't the finish line. Onboarding support, review campaigns, referral programs, cross-sell and upsell strategies — everything that turns a customer into a long-term revenue stream.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const blogPosts = [
  {
    title: "Why Your Sales Team Hates Your Marketing (And How to Fix It)",
    date: "March 2026",
    excerpt:
      "The disconnect between sales and marketing isn't a people problem. It's a systems problem. Here's how to close the gap without adding headcount.",
    slug: "sales-marketing-alignment",
  },
  {
    title: "The AI-Powered Marketing Stack for B2B Companies Under 50 People",
    date: "February 2026",
    excerpt:
      "You don't need enterprise tools to run enterprise-grade marketing. Here's the lean stack we recommend for growing B2B companies.",
    slug: "ai-marketing-stack",
  },
  {
    title: "Stop Building Brand Awareness. Start Building Pipeline.",
    date: "January 2026",
    excerpt:
      "Brand awareness is a vanity metric if it doesn't connect to revenue. Here's how to build a marketing engine that actually fills your pipeline.",
    slug: "brand-awareness-vs-pipeline",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative overflow-hidden bg-warm-bg px-6 pt-32 pb-20 md:pt-44 md:pb-32">
        {/* Wolfhead background watermark */}
        <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.06]">
          <Image
            src="/wolfhead.png"
            alt=""
            width={700}
            height={700}
            className="invert"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl leading-tight tracking-tight text-dark md:text-6xl md:leading-[1.1]">
            Full-service marketing and sales support —{" "}
            <span className="text-red">without the full-service price tag.</span>
          </h1>

          <p className="mt-6 font-heading text-xl text-muted md:text-2xl">
            From first touch to lifetime value.
          </p>

          <div className="mt-8 max-w-2xl space-y-4 font-body text-lg leading-relaxed text-body md:text-xl md:leading-relaxed">
            <p>
              Brand. Digital presence. Lead generation. Sales execution. Customer expansion. And
              the automation that ties it all together.
            </p>
            <p>That means real work getting done:</p>
            <p className="font-medium text-dark">
              Websites built. Content written. Social media managed. Campaigns launched. Leads
              generated. Sales teams equipped. Automation implemented.
            </p>
            <p>Strategy with you. Execution beside you. Systems your team owns.</p>
            <p>We don&apos;t just design growth. We help you make it happen.</p>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-red px-8 py-4 font-body text-lg font-semibold text-white transition-all hover:bg-red-dark hover:shadow-lg"
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
      <section className="relative overflow-hidden bg-dark px-6 py-20 md:py-28">
        {/* Subtle wolfhead */}
        <div className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/4 opacity-[0.03]">
          <Image src="/wolfhead-white.png" alt="" width={500} height={500} />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-6 font-body text-sm font-semibold uppercase tracking-widest text-red">
            Sound familiar?
          </p>
          <div className="space-y-6 font-body text-lg leading-relaxed text-gray-400 md:text-xl md:leading-relaxed">
            <p>
              Your marketing says one thing. Your sales team says another. Your CRM is half-empty.
              Your agency sends reports nobody reads. Your website hasn&apos;t been updated in two
              years. And every new tool you buy just creates one more thing nobody uses.
            </p>
            <p>
              Meanwhile, your competitors are showing up in places you&apos;re not — and your best
              customers found you by accident.
            </p>
            <p className="font-heading text-xl text-white md:text-2xl">
              You don&apos;t need more tools. You don&apos;t need another agency that disappears
              after the kickoff call. You need a partner who sees the whole picture and actually
              does the work.
            </p>
          </div>
        </div>
      </section>

      <GTMFramework />

      {/* ===== SECTION 3: WHAT WE DO ===== */}
      <section id="what-we-do" className="bg-warm-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              What we do
            </h2>
            <p className="mt-4 font-body text-lg text-muted md:text-xl">
              Everything your marketing and sales operation needs — connected, coherent, and built
              to drive revenue.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-red">
                  {service.icon}
                </div>
                <h3 className="mb-3 font-heading text-xl text-dark">{service.title}</h3>
                <p className="font-body text-base leading-relaxed text-body">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: HOW WE WORK WITH YOU ===== */}
      <section id="how-we-work" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              How we work with you
            </h2>
            <p className="mt-4 font-body text-lg text-muted md:text-xl">
              Every company is different. Your growth plan should be too.
            </p>
          </div>
          <Scenarios />
        </div>
      </section>

      {/* ===== SECTION 5: WHY THIS WORKS ===== */}
      <section id="why-this-works" className="relative overflow-hidden bg-dark px-6 py-20 md:py-28">
        {/* Subtle wolfhead */}
        <div className="pointer-events-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-[0.03]">
          <Image src="/wolfhead-white.png" alt="" width={600} height={600} />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="font-heading text-3xl text-white md:text-5xl">
              Why this works
            </h2>
            <p className="mt-4 font-body text-lg text-gray-500 md:text-xl">
              You&apos;re wondering how one partner does all of this. Here&apos;s the honest
              answer.
            </p>
          </div>

          <div className="mb-12 max-w-3xl space-y-4 font-body text-lg leading-relaxed text-gray-400">
            <p>
              The traditional model is broken. You either hire a big agency that charges big fees,
              assigns you a junior account manager, and sends you dashboards you never read. Or you
              piece together freelancers who don&apos;t talk to each other. Or you hire in-house and
              hope one person can somehow do the work of five.
            </p>
            <p className="font-heading text-xl text-white md:text-2xl">We built RevenueWolf differently.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 font-heading text-lg text-white">
                Senior strategy, not junior handoffs.
              </h3>
              <p className="font-body text-base leading-relaxed text-gray-500">
                You work directly with a senior strategist who knows your business — not an account
                coordinator reading from a playbook.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 font-heading text-lg text-white">AI-powered execution.</h3>
              <p className="font-body text-base leading-relaxed text-gray-500">
                AI has fundamentally changed what a lean team can deliver. We use it across content,
                research, automation, and reporting — not to replace thinking, but to move faster
                and smarter than a team twice our size.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 font-heading text-lg text-white">
                A curated network of specialists.
              </h3>
              <p className="font-body text-base leading-relaxed text-gray-500">
                When your project needs a designer, a developer, or a copywriter, we bring in the
                right person from our network. You get the expertise without the overhead. We manage
                them. You never have to.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-3 font-heading text-lg text-white">
                Built to lift your team, not replace them.
              </h3>
              <p className="font-body text-base leading-relaxed text-gray-500">
                If you have people, we make them better. Better tools, better processes, better
                strategy to work from. We&apos;re not here to take anyone&apos;s job. We&apos;re
                here to make everyone&apos;s job easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: ABOUT ===== */}
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
                Birmingham, AL
              </div>
            </div>

            <div className="space-y-4 font-body text-lg leading-relaxed text-body">
              <p>
                Chris Cleland is the founder and strategic lead at RevenueWolf. With deep roots in
                B2B sales and marketing, he&apos;s spent his career at the intersection of
                marketing strategy, sales execution, and the technology that connects them.
              </p>
              <p>
                He&apos;s worked inside the companies he now serves — building sales teams, managing
                pipelines, implementing CRMs, and watching firsthand what happens when marketing and
                sales don&apos;t talk to each other. RevenueWolf was built to fix that.
              </p>
              <p>
                Based in Birmingham, Alabama, Chris works with B2B companies across the country who
                are ready to get serious about growth but aren&apos;t interested in bloated agencies
                or empty strategies. He believes the best marketing is the kind your sales team
                actually uses — and that the best systems are the ones your team actually owns.
              </p>
              <p>
                When he&apos;s not building revenue engines, he&apos;s a dad, a strategist at heart,
                and someone who genuinely believes AI is going to change the game for companies
                willing to move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: TESTIMONIALS ===== */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              What our clients say
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ===== SECTION 8: BLOG / FIELD NOTES ===== */}
      <section id="field-notes" className="bg-warm-bg px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              Field Notes
            </h2>
            <p className="mt-4 font-body text-lg text-muted md:text-xl">
              Ideas, insights, and honest takes on marketing, sales, and growth in B2B.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-md"
              >
                <p className="mb-3 font-body text-sm font-medium text-muted">{post.date}</p>
                <h3 className="mb-3 font-heading text-xl text-dark transition-colors group-hover:text-red">
                  {post.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-body">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FINAL CTA ===== */}
      <section id="contact" className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl text-dark md:text-5xl">
              Let&apos;s figure out what&apos;s possible.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted md:text-xl">
              Whether you&apos;re starting from scratch or ready to level up what you have, it
              starts with a conversation. No pitch. No pressure. Just clarity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Book a call */}
            <div className="rounded-2xl border border-border bg-warm-bg p-8 md:p-10">
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
