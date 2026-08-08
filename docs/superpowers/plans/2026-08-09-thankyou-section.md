# Thank You Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a closing "Thank You for Being Here" section between Roadmap and Footer, with a Preview CV / Download CV action pair for HR readers.

**Architecture:** One new presentational component (`ThankYou.tsx`), composed into `App.tsx` between `<Roadmap />` and `<Footer />`. The CV PDF is served as a static file from Vite's `public/` directory so it has a stable, unhashed URL usable for both `target="_blank"` preview and `download` attribute.

**Tech Stack:** React 18 + TypeScript, Tailwind CSS (utility classes only, no new tokens), Vite (static asset via `public/`).

## Global Constraints

- No new colors, fonts, or design tokens — reuse `font-montserrat` (headings), `font-be-vietnam` (body), `#001bb7` (primary blue), `bg-[#f8f9fa]` (light section background), exactly as used elsewhere in the codebase.
- `ThankYou.tsx` is presentational only — no props, no local state, no interactivity beyond the two anchor-tag buttons.
- No CTA beyond the two CV buttons — no signature block, no icons, no cards (per spec).
- CV file must be reachable at the exact path `/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf` in both dev and production builds.

---

### Task 1: Add the CV file as a static public asset

**Files:**
- Create: `public/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf` (copy of `CV.pdf` at repo root)

**Interfaces:**
- Consumes: nothing
- Produces: a static file reachable at URL path `/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf` in both `vite` dev server and `vite build` output (`dist/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf`). Task 2 links to this exact path.

- [ ] **Step 1: Create the `public/cv/` directory and copy the file**

```bash
mkdir -p public/cv
cp "CV.pdf" "public/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf"
```

- [ ] **Step 2: Verify the file is picked up by the dev server**

Run: `npm install && npx vite --port 5173 &` then `sleep 2 && curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5173/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf`
Expected: `200`

Then stop the dev server: `kill %1` (or `pkill -f "vite --port 5173"`)

- [ ] **Step 3: Verify the file is copied into a production build**

Run: `npx vite build && ls -la dist/cv/`
Expected: `Nguyen-Ngoc-Hoang-Giang-CV.pdf` listed with the same byte size as `CV.pdf` at repo root (`ls -la CV.pdf` for comparison).

Clean up the build output afterward: `rm -rf dist`

- [ ] **Step 4: Commit**

```bash
git add public/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf
git commit -m "$(cat <<'EOF'
Add CV PDF as a static public asset

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Create the ThankYou component

**Files:**
- Create: `src/components/ThankYou.tsx`

**Interfaces:**
- Consumes: static file at `/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf` (produced by Task 1)
- Produces: `export const ThankYou: React.FC` — a zero-prop component. Task 3 imports this exact named export from `./components/ThankYou`.

- [ ] **Step 1: Write the component**

```tsx
import React from 'react';

export const ThankYou: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-montserrat text-3xl md:text-4xl font-black text-[#0f172a] tracking-tight mb-4">
          Thank You for Being Here
        </h2>
        <p className="font-be-vietnam text-base md:text-lg text-[#454655] leading-relaxed mb-8">
          Thank you for taking the time to explore my journey — from the classroom to the community, from research to real products. Every page here reflects a small part of who I'm becoming, and I hope it gave you a genuine sense of who I am and where I'm headed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-lg font-montserrat font-semibold text-sm border-2 border-[#001bb7] text-[#001bb7] hover:bg-[#001bb7]/5 transition-all"
          >
            Preview CV
          </a>
          <a
            href="/cv/Nguyen-Ngoc-Hoang-Giang-CV.pdf"
            download
            className="px-6 py-2.5 rounded-lg font-montserrat font-semibold text-sm bg-[#001bb7] text-white hover:bg-[#001080] transition-all shadow-sm"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Verify the file compiles in isolation**

Run: `npx tsc --noEmit -p tsconfig.json 2>&1 | grep -i "ThankYou" || echo "no ThankYou errors"`
Expected: `no ThankYou errors`

(If `tsc` reports unrelated pre-existing errors in other files, that's fine — this check only confirms `ThankYou.tsx` itself introduces none.)

- [ ] **Step 3: Commit**

```bash
git add src/components/ThankYou.tsx
git commit -m "$(cat <<'EOF'
Add ThankYou closing section component

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Wire ThankYou into App.tsx between Roadmap and Footer

**Files:**
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `ThankYou` named export from `./components/ThankYou` (produced by Task 2)
- Produces: n/a (leaf integration task)

- [ ] **Step 1: Add the import**

In `src/App.tsx`, add this import alongside the other component imports (after the `Roadmap` import):

```tsx
import { ThankYou } from './components/ThankYou';
```

- [ ] **Step 2: Render it between `<Roadmap />` and the closing `</main>` tag**

Current relevant block in `src/App.tsx`:

```tsx
        <ActionPlan />
        <Roadmap />
      </main>
```

Change to:

```tsx
        <ActionPlan />
        <Roadmap />
        <ThankYou />
      </main>
```

- [ ] **Step 3: Build and verify no errors**

Run: `npm install && npx vite build 2>&1 | tail -20`
Expected: build completes with `✓ built in`, no TypeScript or bundling errors, and the output listing does NOT show any error referencing `ThankYou` or `App.tsx`.

Clean up: `rm -rf dist node_modules`

- [ ] **Step 4: Manual visual check**

Run: `npm install && npx vite --port 5173 &`
Then: `sleep 2 && curl -s http://localhost:5173/ | grep -o "Thank You for Being Here"`
Expected: `Thank You for Being Here` printed (confirms the section is in the rendered HTML/dev bundle reference — note: with client-side React this confirms the dev server is serving the app shell; use a browser or `vite preview` on a production build for full visual confirmation of layout/spacing between Roadmap and Footer).

Stop the server: `pkill -f "vite --port 5173"`

For a full visual check of spacing/placement in both desktop and mobile widths, run `npx vite build && npx vite preview --port 4173 &`, open `http://localhost:4173/#hero` in a browser, scroll to the bottom, confirm the ThankYou section appears between Roadmap (dark blue) and Footer (dark navy) with consistent padding, then stop the preview server (`pkill -f "vite preview"`) and clean up (`rm -rf dist node_modules`).

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx
git commit -m "$(cat <<'EOF'
Wire ThankYou section into the page between Roadmap and Footer

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Push to remote

**Files:** none (git operation only)

**Interfaces:**
- Consumes: commits from Tasks 1–3
- Produces: n/a

- [ ] **Step 1: Push**

```bash
git push origin main
```

- [ ] **Step 2: Verify**

Run: `git log origin/main --oneline -5`
Expected: the three commits from Tasks 1–3 appear at the top of `origin/main`'s history.
