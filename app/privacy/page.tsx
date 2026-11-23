import Header from "../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RevenueWolf",
  description:
    "What RevenueWolf collects through revenuewolf.com, how we use it, and the choices you have.",
};

const EFFECTIVE_DATE = "November 23, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 font-heading text-2xl text-dark md:text-3xl">{title}</h2>
      <div className="space-y-4 font-body text-base leading-relaxed text-body md:text-lg">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-warm-bg px-6 pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl uppercase text-dark md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 font-body text-lg text-muted">Effective {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* Policy */}
      <section className="bg-white px-6 pb-20 pt-4 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <p className="mt-8 font-body text-base leading-relaxed text-body md:text-lg">
            RevenueWolf LLC (&ldquo;RevenueWolf,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) runs
            revenuewolf.com. This policy explains what information we collect through the site,
            how we use it, and the choices you have. We keep it short because we don&apos;t
            collect much.
          </p>

          <Section title="What we collect">
            <p>
              <strong>Information you give us.</strong> When you use our contact form, we collect
              your name, email address, company name, and whatever you write in your message.
              When you book a call through Calendly, Calendly collects your name, email address,
              and any answers you give on the booking form. When you email us, we receive your
              email address and whatever you send.
            </p>
            <p>
              <strong>Site analytics.</strong> We use Cloudflare Web Analytics to count visits
              and see which pages are viewed. It does not use cookies, does not build a profile
              of you, and does not track you across other websites.
            </p>
            <p>
              We do not use advertising pixels, retargeting tags, or tracking cookies on this
              site.
            </p>
          </Section>

          <Section title="How we use it">
            <p>
              We use the information you send us to reply to you, schedule and hold
              conversations you request, and provide services if you become a client. We use
              the anonymous analytics to understand how the site is working.
            </p>
            <p>
              <strong>
                We do not sell your personal information, and we do not share it for
                advertising.
              </strong>
            </p>
          </Section>

          <Section title="Who helps us handle it">
            <p>
              A few service providers process information on our behalf, only so we can run
              the site and respond to you:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Formspree</strong> delivers contact-form submissions to us.
              </li>
              <li>
                <strong>Calendly</strong> handles call scheduling.
              </li>
              <li>
                <strong>Cloudflare</strong> hosts the site and provides analytics and security.
              </li>
              <li>Our business email provider stores our correspondence.</li>
            </ul>
            <p>
              Each of these providers has its own privacy policy. We may also disclose
              information if the law requires it.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep inquiry and correspondence information for as long as needed to respond
              to you and run our business, and then delete it. If you become a client, our
              client agreement covers how we handle your information.
            </p>
          </Section>

          <Section title="How we protect it">
            <p>
              We use reasonable administrative, technical, and physical safeguards to protect
              the information you share with us. No method of transmission or storage is
              perfectly secure, but we take care with what you share.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              You can ask us to tell you what personal information we have about you, correct
              it, or delete it. Email{" "}
              <a
                href="mailto:chris@revenuewolf.com"
                className="font-semibold text-red hover:underline"
              >
                chris@revenuewolf.com
              </a>{" "}
              and we&apos;ll respond within a reasonable time. You don&apos;t have to give us
              any information to browse the site.
            </p>
          </Section>

          <Section title="Children">
            <p>
              This site is meant for businesses and is not directed to children under 13. We do
              not knowingly collect information from them.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              If we change this policy, we&apos;ll update the effective date at the top of this
              page.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              RevenueWolf LLC
              <br />
              410 Hambaugh Avenue, Birmingham, Alabama 35209
              <br />
              <a
                href="mailto:chris@revenuewolf.com"
                className="font-semibold text-red hover:underline"
              >
                chris@revenuewolf.com
              </a>
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
