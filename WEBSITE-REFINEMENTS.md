# RevenueWolf Website Refinements — Round 2

> **Purpose:** Eight targeted refinements to the updated homepage. Work through each one in order.
>
> **Suggested prompt for Claude Code:** "Read WEBSITE-REFINEMENTS.md and implement all eight refinements. Show me each change and wait for confirmation before moving to the next."

---

## Refinement 1: Hero Subhead Contrast

### Problem
The subhead text below "Marketing has changed. Your agency should too." is low contrast against the red background. It's readable but could be stronger.

### Fix
Increase the opacity or brightness of the subhead text. It should be white or near-white — not gray/translucent. The goal is for someone to be able to read it instantly without squinting.

Current: The subhead text appears to be a muted/transparent white (likely `rgba(255,255,255,0.6)` or similar).
Target: Bump to `rgba(255,255,255,0.85)` or higher, or use a clean white `#FFFFFF` with slightly lighter font weight if it feels too heavy.

---

## Refinement 2: Problem Section — Complete Redesign

### Problem
The section right below the hero ("Here's what's actually happening with your marketing right now") has a black background with heavy dark block cards. It's too heavy, creates a jarring transition from the red hero, and the broad card style doesn't fit the conversational tone.

### Fix — Background & Colors
- Change the section background from black/dark (`rgb(17, 17, 17)`) to a light warm gray: `#F5F5F2` (should match or closely match the services section background)
- Change ALL text in this section to dark: headline `#1a1a1a`, body text `#444444`

### Fix — Headline Change
Change the headline text from:
```
Here's what's actually happening with your marketing right now.
```
To:
```
Does any of this sound familiar?
```

### Fix — Pain Point Styling
Replace the heavy dark block cards with a simpler left-border accent style:
- Remove the card background color (make transparent)
- Remove card border-radius
- Add a left border: `3px solid #D50000` (RevenueWolf red)
- Padding: `12px 0 12px 24px`
- Margin bottom between items: `8px`
- Text should be clean paragraphs, dark color (`#444444`), approximately `1.1rem` font size

### Fix — "Sounds Familiar" Closing Line
The "Sounds familiar? That's exactly where RevenueWolf comes in." line at the bottom of this section needs to be MUCH bigger and bolder. Make it a prominent statement — similar in size/weight to a section headline. Think `2rem` or larger, bold, color `#1a1a1a`. It should feel like a confident closer, not small body text.

---

## Refinement 3: Services Row Asymmetry

### Problem
The "What We Do" services section has 5 cards in a grid. The first row has 3 cards (Get Found, Get Leads, Close More) and the second row has 2 cards (Keep & Grow, Run Smarter) with an empty space on the right. This looks unfinished.

### Fix — Option A (Preferred)
Make the bottom two cards wider so they span the full width of the row evenly. Each of the two bottom cards should be 50% width (minus gap), so the two cards together fill the same width as the three cards above.

### Fix — Option B (Alternative)
If Option A doesn't look right, switch to a 2-column layout for all 5 cards:
- Row 1: Get Found | Get Leads
- Row 2: Close More | Keep & Grow
- Row 3: Run Smarter (full width)

Use whichever approach looks cleaner. The goal is no awkward empty space.

---

## Refinement 4: Why Us — Bigger Headlines

### Problem
The headlines on the four "Why Us" cards ("You work with a senior marketer...", "AI isn't a buzzword here...", etc.) are too small relative to the card size. They don't command enough attention.

### Fix
Increase the font size of the card headlines/titles. They should be noticeably larger — think `1.4rem` to `1.6rem`, bold. The goal is that someone scrolling quickly can read just the headlines and get the message without reading the body text.

---

## Refinement 5: Why Us Card #4 — Add Body Text

### Problem
The fourth "Why Us" card ("Have a marketing team or a one-person superhero? We help support them every step of the way.") has no body text, while the other three cards do. This makes it look visually unbalanced.

### Fix
Add body text to card #4:

```
We're not here to replace anyone. We give your people strategy, better tools, and a system to work from — so they can stop guessing and start executing.
```

This keeps all four cards visually consistent with a title and supporting paragraph.

---

## Refinement 6: Why Us — Body Text Size

### Problem
The body text on the "Why Us" cards may be too small to read comfortably, especially on the dark background.

### Fix
Make sure the body text on all four "Why Us" cards is at least `1rem` (16px) and has good contrast against the dark card background. The text color should be a readable light gray, not too dim — something like `rgba(255,255,255,0.8)` or `#CCCCCC` at minimum.

---

## Refinement 7: Update Page Title and Meta Description

### Problem
The page title still reads "RevenueWolf | Full-Service B2B Marketing & Sales Support" which doesn't match the new positioning.

### Fix
Update the following:

**Page title (the `<title>` tag and any og:title):**
```
RevenueWolf | Modern Marketing Agency — Smarter, Faster, Proven
```

**Meta description:**
```
Marketing has changed. Your agency should too. RevenueWolf is a modern marketing agency powered by AI and 20+ years of experience. We help businesses grow — and prove it with real numbers.
```

**Also check and update if present:**
- `og:description` — use the same meta description
- Any other meta tags that reference "B2B Marketing & Sales Support" or "go-to-market engine" — update to match the new positioning

---

## Refinement 8: Field Notes Subhead

### Problem
The Field Notes section subhead still says "Ideas, insights, and honest takes on marketing, sales, and growth in B2B." — the "in B2B" doesn't match the new broader positioning.

### Fix
Change to:
```
Ideas, insights, and honest takes on marketing, sales, and growth.
```

---

## Verification

After all refinements:
1. Hero subhead is clearly readable on the red background
2. Problem section has light gray background, red left-border accents on pain points, new headline "Does any of this sound familiar?", and a big bold "Sounds familiar?" closer
3. Services grid has no awkward empty space on the bottom row
4. Why Us card headlines are larger and more prominent
5. All four Why Us cards have body text with readable size
6. Browser tab shows the new page title
7. Meta description is updated
8. Field Notes subhead no longer says "in B2B"
