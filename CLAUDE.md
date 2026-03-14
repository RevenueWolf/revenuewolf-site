# RevenueWolf — Project Instructions for Claude Code

> This file is read by Claude Code at the start of every session. Keep it updated.

---

## Project Overview

RevenueWolf (revenuewolf.com) is the website and brand for a modern marketing agency run by Chris Cleland, based in Birmingham, Alabama. The site is the primary sales tool — it needs to convert visitors into discovery calls.

## Stack

- **Framework:** Next.js (React)
- **Hosting:** Vercel (assumed — confirm if different)
- **Styling:** Tailwind CSS / custom CSS
- **Language:** TypeScript/JavaScript
- **Dev server:** `npm run dev` → localhost:3000

## Deploy

- Push to main branch triggers deploy (confirm workflow)
- Always test locally before pushing
- Check the live site after deploy to confirm changes rendered

## Brand Voice & Positioning

**Who we are:** A modern marketing agency that uses AI and automation to deliver better results for less money. Not a consultancy. Not a fractional hire. An agency.

**Tone:** Casual, direct, confident. Think GaryVee dialed back one notch — honest and straightforward but not abrasive. A smart friend who runs an agency telling you the truth about your marketing over a beer.

**Key messaging pillars:**
1. Marketing has changed. Most businesses know it but don't know what to do about it.
2. You're probably overpaying for marketing and can't prove what's working.
3. AI isn't a buzzword — it's how we deliver more for less.
4. 20+ years of experience on both the agency and corporate side.
5. We meet you where you are — no team, small team, bad agency, need hands — we've got you.

**Words we use:** modern, smarter, faster, prove it, real numbers, full-pack
**Words we avoid:** synergy, leverage, optimize (overused), fractional, GTM Operating System (old positioning), B2B-only language

**Audience:** NOT exclusively B2B. We serve any business that needs smarter marketing — services companies, local businesses, e-commerce, B2B. The copy should never feel like it only speaks to one type.

## Site Structure (Current as of March 2026)

The homepage flows in this order:
1. **Hero** — "Marketing has changed. Your agency should too."
2. **Problem** — "Does any of this sound familiar?" (light gray bg, red left-border accents)
3. **Services (What We Do)** — 5 outcome-based cards: Get Found, Get Leads, Close More, Keep & Grow, Run Smarter
4. **We Measure What Matters** — Dashboard visual with KPI metrics
5. **Why Us** — 4 differentiator cards (dark bg)
6. **Quiz** — "How much of your marketing budget is actually working?" (5 questions)
7. **Where You Fit** — 4 engagement model cards
8. **Testimonials** — "Don't take our word for it." (4 stacked cards, no slider)
9. **About** — "Meet the wolf behind the pack." (Chris bio + photo)
10. **Field Notes** — Blog post previews
11. **CTA** — "Ready to stop guessing?" (Calendly + contact form)

## Code Conventions

- Work section by section when making changes. Don't try to change everything at once.
- Comment out old code before replacing — verify the new version works, then clean up.
- Keep existing design language (dark sections, clean type, card layouts) unless specifically asked to change it.
- When updating copy, preserve component structure — change the text, not the architecture.
- Mobile responsiveness matters — always check changes at mobile widths.

## Key Files

- Main page component: (find and document the path here, e.g., `app/page.tsx` or `src/pages/index.tsx`)
- Global styles: (document path)
- Components directory: (document path)

## Spec Files

These files in the project root contain detailed instructions for changes:
- `WEBSITE-REWRITE-SPEC.md` — The original full messaging rewrite (completed)
- `WEBSITE-REFINEMENTS.md` — Round 2 refinements (completed)

Keep these for reference but don't re-implement them — they've been done.

---

## To-Do List

### High Priority
- [ ] Bump hero subhead contrast (text is still slightly muted on red background)
- [ ] Mobile responsiveness audit — full scroll-through at 375px and 768px widths
- [ ] Confirm Field Notes subhead no longer says "in B2B"
- [ ] Test quiz flow end-to-end — make sure results display properly and CTA works

### Medium Priority
- [ ] Get headshots for testimonial cards (reach out to Daniel Walters, John Ferguson, Gordon Cortez, Scott McDuffie)
- [ ] Review and potentially tighten testimonial quotes to 2-3 sentences each
- [ ] Consider adding a subtle CTA or transition between the quiz results and the "Where You Fit" section
- [ ] SEO audit — confirm meta tags, OG tags, structured data all reflect the new positioning
- [ ] Check that all "Start a conversation" links scroll to the contact section properly

### Low Priority / Future
- [ ] Write new blog posts aligned to the new positioning (not just B2B)
- [ ] Add case studies or results metrics when available
- [ ] Client logo bar under testimonials (when direct RW clients are established)
- [ ] Explore adding a pricing or "how it works" section
- [ ] Set up the conversation search Memory Vault (see claudebox-setup-guide)
- [ ] Consider dedicated server setup (Mac Mini) for persistent Claude Code sessions

### Completed
- [x] Hero headline rewrite ("Marketing has changed. Your agency should too.")
- [x] Problem section — new copy, light gray bg, red left-border accents
- [x] Services rewrite — 5 outcome-based categories replacing 6 old ones
- [x] "We Measure What Matters" section with dashboard repositioned as evidence
- [x] Why Us section — 4 differentiators with new copy
- [x] Quiz rewrite — 5 new questions, reframed from GTM diagnostic
- [x] Engagement models rewrite — 4 simpler cards
- [x] Testimonials — moved from slider to stacked cards
- [x] About bio rewrite
- [x] CTA rewrite ("Ready to stop guessing?")
- [x] Removed: Before RevenueWolf animated section
- [x] Removed: GTM Operating System framework
- [x] Page title and meta description updated
- [x] Services grid asymmetry fixed (bottom 2 cards now 50% width)
- [x] Why Us card #4 — body text added
- [x] Why Us headlines — made larger
- [x] Problem section headline changed to "Does any of this sound familiar?"
- [x] Problem section closing line made bigger and bolder
- [x] Nav updated to match new sections

---

## Notes

- Chris is new to coding and uses Claude Code for all development work. Be explicit with instructions and explain what you're doing.
- When making changes, always show the diff and wait for confirmation before moving to the next change.
- The site was originally positioned as a B2B fractional GTM operator. It has been repositioned as a modern marketing agency. Don't revert to old positioning language.
- Chris's buddy Chris Gray runs a dedicated Claude Code server setup — see `claudebox-setup-guide-for-cleland.md` for future reference on persistent memory and conversation search.
