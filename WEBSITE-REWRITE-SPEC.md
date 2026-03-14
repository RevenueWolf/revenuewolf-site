# RevenueWolf Website Rewrite — Implementation Spec

> **Purpose:** This file is an implementation guide for rewriting the revenuewolf.com homepage. It is written for Claude Code (or any developer) to follow section by section.
>
> **How to use:** Work through each section in order. After completing each section, verify the changes in the browser before moving to the next. The page is a Next.js app.
>
> **Suggested prompt for Claude Code:** "Read WEBSITE-REWRITE-SPEC.md and implement the changes. Start with Section 1 and wait for me to confirm before moving to the next section."

---

## Page Flow (New Order)

The homepage should flow in this order, top to bottom:

1. Hero
2. The Problem
3. What We Do (Services)
4. We Measure What Matters (repurposed dashboard)
5. Why Us
6. Interactive Quiz
7. Where You Fit (Engagement Models)
8. Testimonials
9. About
10. CTA (Contact)

---

## Section 1: Hero

### What to change
- **Remove entirely:** The "Before RevenueWolf" animated section (the scrolling ticker with sticky notes, dead lead lists, broken integrations, etc.). Delete the component and all references.
- **Replace** the current hero headline and subhead.

### New hero copy

**Headline:**
```
Marketing has changed. Your agency should too.
```

**Subhead:**
```
RevenueWolf runs on AI, data, and 20+ years of knowing what actually drives revenue. No fluff. No vanity metrics. Just the marketing, automation, and strategy that gets you more customers.
```

**CTA button:** Keep "Start a conversation" linking to the contact section.

---

## Section 2: The Problem (NEW SECTION)

### What to do
- **Add a new section** immediately after the hero.
- This section replaces the "Before RevenueWolf" animated section as the pain-point messaging.

### Copy

**Section headline:**
```
Here's what's actually happening with your marketing right now.
```

**Bullet points (display as a styled list or cards):**
```
- You feel like you're paying too much — but you can't quite prove what's working and what's not.
- You know the tactics that once worked are losing steam.
- AI is changing the game, but you're not sure exactly how to use it for your business.
- You don't have extra help for your existing team, and you know you need a full-pack approach — but you don't have a full-pack budget.
```

**Closing line:**
```
Sounds familiar? That's exactly where RevenueWolf comes in.
```

### Design notes
- Keep styling consistent with the rest of the site (dark background sections, clean typography).
- These could be simple styled text, or light cards. Don't over-design — the copy does the work.

---

## Section 3: What We Do (Services)

### What to change
- **Replace** the current six service categories with five new outcome-based categories.
- **Replace** all copy within the services section.
- Keep the general card/grid layout if it works, but update the titles, descriptions, and included items.

### New section intro

**Headline:**
```
What we do
```

**Subhead:**
```
Everything your business needs to grow — connected, coherent, and built to prove it's working.
```

### Service 1: Get Found

**Description:**
```
Nobody can buy from you if they don't know you exist. We build your digital presence — website, SEO, content, social — so the right people find you before they find your competitors.
```

**Includes:** Website design & development, SEO, social media, content strategy, brand identity

---

### Service 2: Get Leads

**Description:**
```
Traffic is nice. Customers are better. We build the campaigns and targeting that put real prospects in front of you — not just clicks on a dashboard.
```

**Includes:** Lead generation, inbound & outbound campaigns, paid media, email marketing, audience targeting

---

### Service 3: Close More

**Description:**
```
Getting interest is one thing. Converting it is another. We give you the tools, content, and follow-up systems that turn "maybe" into "yes" — faster and more often.
```

**Includes:** Sales collateral, email sequences, follow-up automation, landing pages, conversion optimization

---

### Service 4: Keep & Grow

**Description:**
```
The first sale isn't the finish line. We help you keep customers longer, get them to come back, and turn them into your best source of new business.
```

**Includes:** Retention campaigns, onboarding support, review & referral programs, cross-sell and upsell strategies

---

### Service 5: Run Smarter

**Description:**
```
If your team is still doing things manually that a machine should handle, we need to talk. We set up the systems, automations, and reporting that keep everything running without burning people out.
```

**Includes:** CRM setup & optimization, workflow automation, reporting & dashboards, integrations

---

## Section 4: We Measure What Matters (Repurposed Dashboard)

### What to change
- **Keep** the existing dashboard visual component (the one showing Pipeline, New Leads, Meetings, Win Rate, pipeline stages, lead enrichment, email sequences, and MRR/ARR).
- **Replace** the headline and description text above the dashboard.
- **Remove** the "Before RevenueWolf" stats that currently sit near this area (tools connected 2 of 7, manual tasks 40+, lead response time 48 hrs, pipeline visibility low).

### New copy above the dashboard

**Headline:**
```
We measure what matters.
```

**Description:**
```
Vanity metrics are easy. Revenue is harder. We track pipeline, leads, conversion, and real dollars — and we make it visible to you in real time. No more guessing. No more waiting for a monthly report to find out what happened.
```

### Design notes
- The dashboard visual is now positioned as *evidence* of how RevenueWolf works, not decoration.
- It should feel like a live preview of what clients get access to.

---

## Section 5: Why Us

### What to change
- **Replace** the current "Why this works" section entirely — headline, intro text, and all four differentiators.
- **Remove** the introductory paragraph about the traditional model being broken (this is now covered in the Problem section).

### New copy

**Headline:**
```
Why RevenueWolf instead of everyone else?
```

**Differentiator 1:**
```
Title: You work with a senior marketer, not a junior account manager.

Body: No admin layer between you and the people actually doing the work. You get 20+ years of marketing experience — someone who's been on your side of the table and knows where the money gets wasted.
```

**Differentiator 2:**
```
Title: AI isn't a buzzword here. It's how we deliver more for less.

Body: We use AI across content, research, automation, and reporting to move faster and deliver what used to take a full team at a fraction of the cost.
```

**Differentiator 3:**
```
Title: Already have an agency? Let's make sure you're getting what you're paying for.

Body: If you're spending money on marketing and can't tell what's working, something's wrong. We help you figure out where your budget's actually going — and how to keep more of it while getting more out of it.
```

**Differentiator 4:**
```
Title: Have a marketing team or a one-person superhero? We help support them every step of the way.

Body: (No additional body copy needed — the title says it all.)
```

---

## Section 6: Interactive Quiz

### What to change
- **Replace** the current GTM Operating System diagnostic quiz with a new, simpler quiz.
- **Remove** the "GTM Operating System" six-layer framework section entirely (the hexagonal graphic, the layer descriptions, all of it). This content can be repurposed as a blog post later.
- The quiz should be a simple interactive element — five yes/no or scale questions.

### New quiz copy

**Headline:**
```
How much of your marketing budget is actually working?
```

**Subhead:**
```
Five questions. Thirty seconds. Find out where you might be leaving money on the table.
```

**Questions:**
```
Q1: Do you know exactly which marketing channels are bringing you customers?
Q2: Are you still doing things manually that should be automated?
Q3: Could you tell me right now what your cost to acquire a customer is?
Q4: Do you have a system for following up with leads, or does stuff just fall through the cracks?
Q5: Is anyone on your team using AI in your marketing right now?
```

**Result messaging (shown after completion):**
```
You're not broken — but you're probably leaving money on the table. Here's where we'd start.
```

**After results:** Prompt user with CTA to book a call or send a message.

### Design notes
- Keep the answer format simple: Yes / No / Not sure — or a similar quick-select format.
- Don't overthink the scoring. The point is engagement and self-identification, not a precise diagnostic.

---

## Section 7: Where You Fit (Engagement Models)

### What to change
- **Replace** the current four engagement model titles, descriptions, and framing.
- Keep the general structure (four options), but simplify the copy.
- **Remove** the detailed "What that looks like" bullet lists and the "We become" role labels.

### New section copy

**Headline:**
```
Wherever you are, we meet you there.
```

**Model 1:**
```
Title: No marketing help at all?

Body: You've been running on referrals, word of mouth, and hustle. That's gotten you this far — but you know it won't get you to the next level. We come in, build the foundation, and start getting you in front of the right people.
```

**Model 2:**
```
Title: Have a team but no strategy?

Body: Your person or your team is working hard — posting, emailing, updating the site. But there's no plan driving it. We become the strategic layer that connects what they're doing to what's actually growing the business.
```

**Model 3:**
```
Title: Have an agency but not sure it's working?

Body: You're writing checks but you can't point to what they're getting you. We help you figure out what's worth keeping, what's not, and where your money should actually be going.
```

**Model 4:**
```
Title: Have the strategy but need hands?

Body: You know what needs to get done — you just don't have the bandwidth to do it. We plug in fast, execute, and get things off your backlog without a six-month onboarding.
```

**Closing line:**
```
Not sure which fits? That's fine — just reach out and we'll figure it out together.
```

Each model should have a "Start a conversation" CTA linking to the contact section.

---

## Section 8: Testimonials

### What to change
- **Remove** the testimonial slider/carousel.
- **Replace** with 3–4 testimonials displayed as stacked cards, all visible on scroll (no sliding, no hiding).
- Each card should include: headshot image, quote (2–3 sentences max — trim longer quotes), name, and title.

### New section copy

**Headline:**
```
Don't take our word for it.
```

### Design notes
- Pull the strongest 3–4 testimonials from the existing slider.
- Trim any quote longer than 3 sentences to its sharpest part.
- Headshot images: Request photos from each person or get permission to use LinkedIn photos.
- No client logos for now.
- Layout: Cards stacked vertically, or a clean grid (2 across on desktop, stacked on mobile).

---

## Section 9: About

### What to change
- **Keep** the existing photo of Chris and the "Birmingham, AL" location tag.
- **Keep** the section title "Meet the wolf behind the pack."
- **Replace** the bio copy.

### New bio copy

```
Chris Cleland has spent 20+ years in marketing — on the agency side, the corporate side, and everywhere in between. He's built sales teams, managed pipelines, launched campaigns, and sat through enough bad agency meetings to know exactly what's broken about the traditional model.

RevenueWolf exists because there's a better way. Smarter tools, leaner execution, and a focus on the only metric that matters — did it grow your business?

Based in Birmingham, Alabama, working with companies across the country who are done overpaying for marketing that can't prove itself.
```

---

## Section 10: CTA (Contact)

### What to change
- **Replace** the headline and description.
- **Keep** the Calendly link and the contact form (Name, Email, Company, Message).

### New copy

**Headline:**
```
Ready to stop guessing?
```

**Description:**
```
Whether you're starting from scratch, fixing what's broken, or just need to know if your marketing is actually working — it starts with a conversation. No pitch. No pressure. Just straight talk about what's going on and what we can do about it.
```

**Discovery call label:**
```
Book a discovery call
Free 30-minute conversation. No pitch, just clarity.
```

**Contact form label:**
```
Send us a message
Tell us a little about your situation and we'll be in touch.
```

---

## Navigation Update

Update the top navigation links to match the new section structure:

```
What We Do → scrolls to Section 3
Why Us → scrolls to Section 5
Where You Fit → scrolls to Section 7
About → scrolls to Section 9
Field Notes → links to /field-notes (no change)
Start a conversation → scrolls to Section 10
```

Remove any nav links that reference the GTM Operating System or removed sections.

---

## Summary of Removed Elements

- [ ] "Before RevenueWolf" animated ticker section
- [ ] "Before RevenueWolf" stats bar (tools connected, manual tasks, lead response time, pipeline visibility)
- [ ] GTM Operating System six-layer framework (hexagonal graphic and layer descriptions)
- [ ] Current six-category service descriptions (replaced with five new ones)
- [ ] Testimonial slider/carousel (replaced with stacked cards)
- [ ] "We become your..." role labels in engagement models
- [ ] "What that looks like" bullet lists in engagement models

---

## Tips for Implementation

1. **Work section by section.** Don't try to do everything at once. Complete one section, verify in the browser, then move to the next.
2. **Keep existing styling patterns.** The site's current design language (dark sections, clean type, card layouts) should carry through. We're changing messaging, not redesigning.
3. **Don't delete components until you've confirmed the replacement works.** Comment out old code first, add the new section, verify, then clean up.
4. **The Field Notes section stays as-is.** No changes needed to the blog post previews or the link to /field-notes.
