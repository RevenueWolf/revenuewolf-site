import React from "react";

export interface FieldNote {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: React.ReactNode;
}

export const fieldNotes: FieldNote[] = [
  {
    slug: "your-company-is-about-to-become-an-ai-shop",
    title: "Your Company Is About to Become an AI Shop. The Question Is Which One.",
    date: "March 2026",
    excerpt:
      "Twenty years ago, companies became \u201CMicrosoft shops\u201D or \u201CGoogle shops.\u201D The same thing is happening right now with AI \u2014 except the stakes are significantly higher.",
    body: (
      <>
        <p>
          Twenty years ago, companies became &ldquo;Microsoft shops&rdquo; or &ldquo;Google
          shops.&rdquo; It wasn&apos;t a dramatic decision. Someone picked Outlook over Gmail, the
          rest of the stack followed, and before long your entire workflow was shaped by that choice.
        </p>
        <p>
          The same thing is happening right now with AI — except the stakes are significantly higher.
        </p>

        <h2>This isn&apos;t about where your files live</h2>
        <p>
          The old platform wars were about storage, UI, and which calendar app your team complained
          about less. The AI platform decision is fundamentally different. It shapes how your team
          thinks, builds, and solves problems.
        </p>
        <p>
          A company that goes deep on Claude — using Claude Code for development, Cowork for
          operations, MCP integrations connecting to their CRM and internal tools — builds
          differently than a team running on OpenAI&apos;s Codex and GPT agent framework. Different
          prompting patterns. Different automation architectures. Different mental models for
          what&apos;s even possible.
        </p>
        <p>
          It&apos;s closer to choosing a programming language than choosing an office suite. It
          doesn&apos;t just change your toolbar. It changes your brain.
        </p>

        <h2>The landscape is forming fast</h2>
        <p>Here&apos;s how the lanes are shaping up:</p>
        <p>
          <strong>Claude-primary shops</strong> are emerging in B2B services, consulting, and
          operationally complex businesses where reasoning depth and structured output matter. These
          teams tend to be building agents that handle quoting, proposal generation, research, and
          multi-step workflows.
        </p>
        <p>
          <strong>OpenAI-primary shops</strong> are anchoring around Microsoft&apos;s ecosystem. If
          you&apos;re already deep in Office 365, Teams, and Dynamics, the OpenAI integration path
          is the most natural. Their consumer brand recognition also gives them a foothold with less
          technical teams.
        </p>
        <p>
          <strong>Google-primary shops</strong> are companies already living in Workspace. Gemini is
          being woven into Docs, Sheets, and Gmail in ways that make it the path of least resistance
          for those teams.
        </p>
        <p>
          <strong>Microsoft Copilot shops</strong> are the enterprise default — companies that want
          AI layered on top of the stack they already own, managed by the IT team they already have.
        </p>
        <p>
          And then there are the companies trying to use all of them at once. Most of those are
          spending more time managing tool sprawl than getting actual leverage.
        </p>

        <h2>Small and mid-size companies will pick a lane</h2>
        <p>
          Enterprise can afford to run multi-model strategies. They&apos;ve got the budgets and the
          internal teams to manage the complexity.
        </p>
        <p>
          A $15M industrial distributor? A 30-person professional services firm? They&apos;re going
          to pick one. And whoever helps them pick the right one — and then builds deeply on it —
          creates an incredibly sticky relationship. You&apos;re not configuring software at that
          point. You&apos;re architecting how that company operates.
        </p>

        <h2>The new role: AI Systems Architect</h2>
        <p>This is the part most people haven&apos;t caught up to yet.</p>
        <p>
          Every company that picks an AI platform is going to need someone who understands the full
          vertical: the AI platform&apos;s capabilities and limits, the existing tech stack it plugs
          into (HubSpot, Salesforce, ERP, whatever they&apos;re running), the automation layer (n8n,
          Make, Clay), and how to design workflows that make all of it compound over time.
        </p>
        <p>
          For a small manufacturer running HubSpot, the question isn&apos;t just &ldquo;which
          CRM&rdquo; anymore. It&apos;s &ldquo;which AI platform orchestrates our quoting, follow-up
          sequences, and re-engagement agents — and how does it connect to everything we already
          have?&rdquo;
        </p>
        <p>
          That&apos;s not a question your CRM admin can answer. It&apos;s not a question most
          agencies are equipped to answer either.
        </p>

        <h2>The companies that win will be opinionated about their stack</h2>
        <p>
          The temptation is to hedge — use a little of everything, commit to nothing. But the
          companies that get the most leverage from AI will be the ones that go deep on a primary
          platform and build workflows that compound on each other over time.
        </p>
        <p>
          That doesn&apos;t mean ignoring everything else. The pragmatic move is a primary platform
          with tactical use of others where it makes sense. But the core has to be intentional,
          well-architected, and understood deeply by someone on your team — or someone advising your
          team.
        </p>
        <p>
          At RevenueWolf, this is where our work is headed. We&apos;re already building AI-powered
          revenue systems for B2B companies — connecting CRM, automation, content, and pipeline into
          a single operating system. The AI platform layer is the natural next step, and we&apos;re
          going deep so our clients don&apos;t have to figure it out alone.
        </p>
        <p>
          The companies that thrive in this next era won&apos;t just be <em>using</em> AI tools.
          They&apos;ll have an opinionated, well-architected AI stack that gets smarter the longer
          they run it.
        </p>
        <p>
          The only question is whether you&apos;re designing that stack intentionally — or letting
          it happen to you.
        </p>
      </>
    ),
  },
  {
    slug: "ai-sdr-spam-cannon",
    title: "The AI SDR Is a Spam Cannon (Unless You Do This First)",
    date: "March 2026",
    excerpt:
      "Everyone's selling the dream right now: plug in an AI SDR, point it at a list, and watch the meetings roll in. Here's what's actually happening.",
    body: (
      <>
        <p>
          Everyone&apos;s selling the dream right now: plug in an AI SDR, point it at a list, and
          watch the meetings roll in.
        </p>
        <p>Here&apos;s what&apos;s actually happening.</p>
        <p>
          Companies are buying tools like 11x, Artisan, AiSDR, and Reply.io — spending anywhere from
          $500 a month to $60,000 a year — firing them up on day one, and watching their domain
          reputation crater within a week. One bad campaign to an unverified list can tank your
          deliverability for <em>months</em>. Gmail and Yahoo aren&apos;t playing around anymore. Hit
          a 3% bounce rate or a 0.3% spam complaint rate and you&apos;re not landing in junk —
          you&apos;re getting blocked entirely.
        </p>
        <p>And the AI doesn&apos;t care. It&apos;ll keep sending.</p>

        <h2>The real problem isn&apos;t the tool — it&apos;s what you&apos;re feeding it</h2>
        <p>
          AI amplifies whatever system you already have. If your targeting is sharp, your data is
          clean, and your messaging connects to a real problem the buyer recognizes, AI gives you
          serious leverage. One company deployed AI outbound tools and booked 2.3x more meetings at a
          quarter of the cost.
        </p>
        <p>
          Another company with a nearly identical profile used the same category of tools. Their
          meeting volume dropped 68% and deal quality collapsed. The difference? The first company
          had a validated outbound motion. The second was guessing.
        </p>
        <p>That&apos;s the whole game right there.</p>

        <h2>What &ldquo;set it and forget it&rdquo; actually looks like</h2>
        <p>Here&apos;s the pattern we see over and over:</p>
        <p>
          <strong>Week 1:</strong> Buy the tool, upload a purchased list, write some
          &ldquo;personalized&rdquo; templates that reference the prospect&apos;s LinkedIn headline,
          hit send on 5,000 emails.
        </p>
        <p>
          <strong>Week 2:</strong> Open rates are low. Reply rates are worse. A handful of angry
          &ldquo;remove me&rdquo; responses. But the dashboard looks busy, so it <em>feels</em>{" "}
          productive.
        </p>
        <p>
          <strong>Week 3:</strong> Gmail starts routing your emails to spam — not just the cold
          outreach, but your regular business emails too. Your sales team notices prospects
          aren&apos;t getting proposals. Your existing customers aren&apos;t seeing invoices.
        </p>
        <p>
          <strong>Week 4:</strong> You&apos;re on a blacklist. Now you&apos;re spending time and
          money trying to repair something that didn&apos;t need to break.
        </p>
        <p>We&apos;ve seen this movie play out at companies of every size.</p>

        <h2>What to do instead</h2>
        <p>Before you let any AI touch your outbound, answer three questions:</p>
        <p>
          <strong>
            Do you know exactly who you&apos;re trying to reach — and why right now?
          </strong>{" "}
          Not &ldquo;companies in manufacturing with 50-200 employees.&rdquo; That&apos;s a filter,
          not a reason. Why would this person care about hearing from you <em>this week</em>? If you
          can&apos;t answer that, AI will just help you bother more people faster.
        </p>
        <p>
          <strong>Is your data actually clean?</strong> Not &ldquo;we bought it from a reputable
          vendor&rdquo; clean. Verified-within-the-last-30-days clean. Bounce rates under 2%. Every
          email confirmed. Job titles checked against real humans at real companies. The average B2B
          contact database decays faster than most teams can update it.
        </p>
        <p>
          <strong>Has your messaging worked with humans first?</strong> If your best salesperson
          can&apos;t get replies with this message, AI won&apos;t fix it. AI scales what works. It
          does not invent what works.
        </p>
        <p>
          Get those three things right, and AI outbound becomes genuinely powerful. Skip them, and
          you&apos;re just buying a very expensive way to damage your brand.
        </p>

        <h2>The bottom line</h2>
        <p>
          The AI SDR market has a trust problem, and most platforms earned it. Buyers are drowning in
          AI-generated outreach that references their podcast appearance or their latest LinkedIn post
          without connecting any of it to an actual business problem. That&apos;s not personalization
          — that&apos;s surveillance dressed up as relevance.
        </p>
        <p>
          The companies getting real results with AI outbound are the ones that did the hard work
          first: sharp targeting, validated messaging, clean data, and a real reason to reach out.
          Then they let AI handle the volume and the follow-up cadence while humans handle the
          relationships.
        </p>
        <p>
          AI doesn&apos;t fix outbound. It reveals whether your outbound was ever any good to begin
          with.
        </p>
      </>
    ),
  },
  {
    slug: "website-not-just-for-humans",
    title: "Your Website Isn\u2019t Just for Humans Anymore",
    date: "March 2026",
    excerpt:
      "When a potential buyer asks ChatGPT or Perplexity who\u2019s a good B2B marketing partner, your site either shows up in that answer or it doesn\u2019t. And whether it does has almost nothing to do with your Google ranking.",
    body: (
      <>
        <p>
          Here&apos;s something that should change how you think about your website today: when a
          potential buyer asks ChatGPT, Perplexity, or Google&apos;s AI &ldquo;who&apos;s a good B2B
          marketing partner for a mid-market industrial company,&rdquo; your site either shows up in
          that answer or it doesn&apos;t.
        </p>
        <p>And whether it does has almost nothing to do with your Google ranking.</p>
        <p>
          Welcome to the era of Generative Engine Optimization — GEO for short — and most B2B
          companies haven&apos;t even heard of it yet, let alone started doing anything about it.
        </p>

        <h2>What&apos;s actually happening</h2>
        <p>
          AI search tools don&apos;t work like Google. Google crawls your site, indexes your pages,
          and ranks them based on keywords, backlinks, and authority signals. When someone searches,
          Google gives them a list of links.
        </p>
        <p>
          AI tools do something fundamentally different. They pull information from across the web,
          synthesize it, and give the user a direct answer. No list of links. No &ldquo;page
          one.&rdquo; Just a recommendation — and either you&apos;re in it or you&apos;re invisible.
        </p>
        <p>
          ChatGPT now reaches over 800 million weekly users. Google&apos;s AI Overviews appear in at
          least a quarter of all searches and growing fast. One in four B2B buyers already uses
          generative AI more than traditional search when researching suppliers.
        </p>
        <p>This isn&apos;t coming. It&apos;s here.</p>

        <h2>Why your current website might be invisible to AI</h2>
        <p>
          Most B2B websites were built to do one thing: look good to a human visitor and hopefully
          rank on Google. The content is written for SEO — keyword-stuffed, structured around what
          Google&apos;s algorithm wanted in 2020, buried behind navigation that requires three clicks
          to find anything useful.
        </p>
        <p>AI doesn&apos;t care about any of that.</p>
        <p>
          AI systems want content that is clear, structured, and authoritative. They want specific
          answers to specific questions. They want to understand what you do, who you do it for, and
          why someone should trust you — and they want to extract that information in seconds.
        </p>
        <p>
          If your website buries your capabilities behind vague headlines like &ldquo;Innovative
          Solutions for Modern Businesses,&rdquo; AI will skip right over you and cite your
          competitor who clearly explains what they actually do.
        </p>

        <h2>What AI looks for that most B2B sites don&apos;t have</h2>
        <p>
          <strong>Direct, structured answers.</strong> When someone asks an AI tool &ldquo;what
          should I look for in a B2B marketing agency,&rdquo; the AI is scanning for content that
          directly answers that question in a clear, organized way. Not a sales pitch. Not a
          capabilities deck hidden in a PDF. A straightforward answer.
        </p>
        <p>
          <strong>Topic authority, not just keyword presence.</strong> AI systems don&apos;t just
          look for the word &ldquo;marketing&rdquo; on your page. They evaluate whether your content
          demonstrates genuine depth on the topic. One comprehensive, opinionated article about how
          B2B companies should approach sales enablement is worth more than twenty thin blog posts
          targeting different keyword variations.
        </p>
        <p>
          <strong>Brand mentions beyond your own site.</strong> AI tools pull from everywhere —
          industry publications, directories, review sites, social media, podcasts, forums. If your
          brand only exists on your own website, AI has one data point. If you&apos;re mentioned
          across multiple credible sources, AI sees consensus and surfaces you more often.
        </p>
        <p>
          <strong>Freshness.</strong> AI systems lean toward current information. A website that was
          last updated in 2023 is less likely to be cited than one with content published this month.
          This is where most B2B companies fall hardest — the website gets built once and then sits
          untouched for a year.
        </p>

        <h2>What you can do about it right now</h2>
        <p>
          You don&apos;t need to rebuild your website. But you do need to start treating it like a
          living resource, not a digital brochure.
        </p>
        <p>
          <strong>Answer the questions your buyers are actually asking.</strong> Not with gated
          whitepapers — with public, clearly written content on your site. &ldquo;How much does B2B
          marketing support cost?&rdquo; &ldquo;What&apos;s the difference between a marketing
          agency and a fractional CMO?&rdquo; &ldquo;How do I know if my CRM is set up
          correctly?&rdquo; Those are the questions buyers are typing into AI. Be the source that
          answers them.
        </p>
        <p>
          <strong>Structure your content for extraction.</strong> Use clear headings. Lead with the
          answer, then explain it. Make it easy for both humans and AI to find the point in the first
          two sentences.
        </p>
        <p>
          <strong>Get mentioned somewhere other than your own site.</strong> LinkedIn posts, podcast
          appearances, guest articles, industry directories, partnerships — all of these create
          signals that AI uses to validate your authority.
        </p>
        <p>
          <strong>Publish consistently.</strong> It doesn&apos;t have to be a 3,000-word thought
          piece every week. Short, opinionated, timely content — like what you&apos;re reading right
          now — keeps your site fresh and gives AI new material to work with.
        </p>

        <h2>This isn&apos;t optional anymore</h2>
        <p>
          SEO isn&apos;t going away, but it&apos;s no longer the whole picture. AI-driven discovery
          is growing fast, and the brands that invest in being visible to these systems now will have
          a compounding advantage over those that wait.
        </p>
        <p>
          The companies that show up in AI-generated answers today are the ones shaping how buyers
          understand their market tomorrow. Everyone else is hoping to be found through a shrinking
          number of clicks.
        </p>
        <p>
          Your website needs to work for humans and machines. Right now, for most B2B companies,
          it&apos;s barely doing one.
        </p>
      </>
    ),
  },
  {
    slug: "tech-stack-lying-to-you",
    title: "Your Tech Stack Is Lying to You",
    date: "March 2026",
    excerpt:
      "You\u2019re paying for a CRM, an email platform, maybe a data enrichment tool and three other things your team never canceled. And you\u2019re probably still not sure where your last five deals actually came from.",
    body: (
      <>
        <p>
          You&apos;re paying for a CRM. You&apos;re paying for an email platform. You might be
          paying for a data enrichment tool, a social scheduling tool, a landing page builder, a
          chatbot, and three other things your team signed up for during free trials and never
          canceled.
        </p>
        <p>
          And you&apos;re probably still not sure where your last five deals actually came from.
        </p>
        <p>
          This is the quiet crisis in B2B right now. Companies have more tools than ever and less
          clarity than ever. The stack is growing but the insight isn&apos;t keeping up.
        </p>

        <h2>The tool isn&apos;t the problem — the wiring is</h2>
        <p>
          Here&apos;s what we see when we look under the hood at most B2B companies:
        </p>
        <p>
          Marketing is running campaigns in one system. Sales is tracking deals in another. Customer
          success is using a spreadsheet. Nobody&apos;s data agrees with anyone else&apos;s. The
          &ldquo;source&rdquo; field in the CRM says &ldquo;web&rdquo; for 60% of leads because
          nobody configured it properly when the form was built two years ago.
        </p>
        <p>
          So when leadership asks &ldquo;what&apos;s working?&rdquo; the honest answer is: we
          don&apos;t actually know.
        </p>
        <p>
          That&apos;s not a people problem. It&apos;s an architecture problem. And throwing another
          tool at it only makes it worse.
        </p>

        <h2>What &ldquo;connected&rdquo; actually looks like</h2>
        <p>
          In a well-architected system, every touch a prospect has with your company — every ad
          click, website visit, email open, form fill, sales call, proposal sent, deal closed — lives
          in one connected timeline. Not because you bought one magical platform. Because someone
          took the time to wire the pieces together intentionally.
        </p>
        <p>
          When a lead comes in, you can see: where they first heard about you, what content they
          engaged with, how long they took to convert, which salesperson closed them, and what they
          bought. When a deal stalls, you can see exactly where it&apos;s stuck and why.
        </p>
        <p>
          That&apos;s not a fantasy. It&apos;s what a properly configured CRM with the right
          integrations actually does. The technology has been able to do this for years. Most
          companies just never set it up.
        </p>

        <h2>The three questions that expose a broken stack</h2>
        <p>
          <strong>
            Can you tell me, right now, which marketing channel generated the most revenue (not leads
            — revenue) in the last 90 days?
          </strong>{" "}
          If the answer requires someone to pull data from three different dashboards and spend an
          afternoon in a spreadsheet, your stack isn&apos;t working.
        </p>
        <p>
          <strong>
            When a salesperson gets a lead, do they know what that person has already seen, read, and
            clicked — or are they starting the conversation from zero?
          </strong>{" "}
          Most sales teams are still cold-calling warm leads because the marketing data never made it
          to the CRM.
        </p>
        <p>
          <strong>
            If you turned off one of your tools tomorrow, would you notice?
          </strong>{" "}
          If you&apos;re paying for a tool that nobody on the team actually uses or that duplicates
          what another tool already does, that&apos;s not a stack — that&apos;s a storage closet.
        </p>

        <h2>The real cost of a disconnected stack</h2>
        <p>
          It&apos;s not just the subscription fees — though those add up fast. The real cost is
          invisible:
        </p>
        <p>
          Leads that fall through the cracks because nobody owns the handoff between marketing and
          sales. Follow-ups that don&apos;t happen because the automation was never built. Deals that
          stall because the salesperson didn&apos;t know the prospect had already been talking to
          customer success about an issue. Reporting that nobody trusts, so decisions get made on gut
          feel instead of data.
        </p>
        <p>
          Every one of those costs you revenue. You just can&apos;t see it on a dashboard — which is
          exactly the problem.
        </p>

        <h2>What to do about it</h2>
        <p>
          You don&apos;t need to rip everything out and start over. But you do need to stop thinking
          about tools and start thinking about systems.
        </p>
        <p>
          <strong>Audit what you actually use.</strong> Log into every marketing and sales tool your
          company pays for. Check who logged in last and when. You&apos;ll almost certainly find
          tools nobody&apos;s touched in months and tools doing the same job as something else.
        </p>
        <p>
          <strong>Pick your source of truth.</strong> One system has to be the hub — usually the CRM.
          Everything else feeds into it. If data doesn&apos;t end up in the CRM, it doesn&apos;t
          exist. Make that the rule and enforce it.
        </p>
        <p>
          <strong>Map the handoffs.</strong> What happens when a lead fills out a form? Who gets
          notified? How fast? What information do they see? What happens when a deal closes — does
          customer success get the context automatically, or does someone have to remember to forward
          an email? Every gap in that chain is a place where revenue leaks out.
        </p>
        <p>
          <strong>Automate the boring stuff.</strong> Lead routing, follow-up reminders, deal stage
          updates, activity logging — these are the things that should never require a human to
          remember. When your team spends less time on data entry and admin, they spend more time in
          front of customers. That&apos;s the whole point.
        </p>

        <h2>Stop buying tools and start building systems</h2>
        <p>
          The best tech stack for your company isn&apos;t the one with the most features or the most
          recognizable logos. It&apos;s the one where every piece talks to every other piece, where
          data flows cleanly from first touch to closed deal, and where your team trusts the numbers
          enough to make decisions from them.
        </p>
        <p>
          If that sounds like a big project, it can be. But it doesn&apos;t have to happen all at
          once. Start with the biggest gap — usually it&apos;s the handoff between marketing and
          sales — and build from there.
        </p>
        <p>The tools aren&apos;t the hard part. The thinking is.</p>
      </>
    ),
  },
];

export function getFieldNoteBySlug(slug: string): FieldNote | undefined {
  return fieldNotes.find((note) => note.slug === slug);
}
