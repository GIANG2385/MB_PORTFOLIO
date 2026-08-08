# Thank You Section — Design

## Context

The portfolio's last content section is Roadmap, which ends on an aspirational
career quote before dropping straight into the dark Footer. The site has no
moment that directly closes the loop with the reader — a short, warm note
thanking them for visiting. This section adds that closing beat.

## Purpose

A minimal "thank you for visiting" message to the reader — not a thank-you to
specific people, mentors, or organizations. Purely a closing note from the
site owner to whoever made it to the end of the page, paired with a way for
recruiters/HR to preview or download the owner's CV right there.

## Placement

Inserted between `<Roadmap />` and `<Footer />` in `src/App.tsx`, making it the
final content section before the footer/contact info.

## Component

New file: `src/components/ThankYou.tsx`

- Presentational only — no props, no local state, no interactivity.
- Matches the existing pattern of one component per page section (see
  `About.tsx`, `Roadmap.tsx`, etc.), composed together in `App.tsx`.

## Content

- No signature block, no icons or cards — just a heading, one short
  paragraph, and (see below) two CV action buttons. Footer already carries
  contact links, so this section stays a closing note plus a single
  practical action for recruiters.
- Draft copy (owner will refine wording after implementation):
  - Heading: "Thank You for Being Here"
  - Body: "Thank you for taking the time to explore my journey — from the
    classroom to the community, from research to real products. Every page
    here reflects a small part of who I'm becoming, and I hope it gave you a
    genuine sense of who I am and where I'm headed."

## CV Preview / Download

Added so HR/recruiters reading to the end of the page can immediately act.

- **File storage:** Copy `CV.pdf` into `public/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf`.
  Files in Vite's `public/` directory are served at a stable, unhashed URL —
  appropriate here since bundled/hashed asset URLs would be unsuitable for a
  link someone might bookmark or for a clean download filename.
- **Two buttons**, placed below the thank-you paragraph:
  - **"Preview CV"** — `<a href="/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf" target="_blank" rel="noreferrer">`,
    secondary/outline style (blue border, blue text).
  - **"Download CV"** — same href plus a `download` attribute, filled
    primary style (`bg-[#001bb7] text-white`), matching the filled-button
    convention used in `ContactModal.tsx`.
  - Both: `font-montserrat font-semibold text-sm`, `rounded-lg`,
    `px-6 py-2.5`.

## Layout & Styling

- Centered text block, generous vertical whitespace (`py-20 md:py-28`).
- Light background (`bg-[#f8f9fa]`), consistent with the other light sections
  (About, Projects) — a calm pause before the dark Footer.
- No cards or icons; the two CV buttons are the only interactive elements.
- Content capped at a readable width: `max-w-2xl mx-auto text-center`.
- Heading uses `font-montserrat` (matches other section headers site-wide).
- Body text uses `font-be-vietnam` (matches body copy site-wide).
- No new colors or fonts introduced — reuses the existing design tokens.

## Testing / Verification

- `npx vite build` to confirm the new component compiles cleanly.
- Manual visual check via `vite preview` or dev server to confirm placement
  and spacing between Roadmap and Footer look right in both desktop and
  mobile widths.
- Confirm the CV file is reachable at `/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf` in
  the built output, and that both Preview (new tab) and Download (saves
  file) buttons behave as expected.
