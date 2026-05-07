# TODO - Performance + UX + Conversion + SEO

## Step 1 — Add global Reduce Motion / Disable 3D toggle (localStorage)
- [ ] Create `src/lib/useMotionSettings.ts` (reads/writes localStorage, defaults, exposes flags)
- [ ] Create UI component (e.g. `src/components/MotionControls.tsx`) with 2 toggles
- [ ] Embed controls into `Navbar` (top-right) with polished glass styling

## Step 2 — Accessibility cursor changes
- [ ] Remove global `cursor: none` and `a, button { cursor: none }` from `src/app/globals.css`
- [ ] Update `CustomCursor.tsx` to support opt-in enable + “Ferrari cursor” (icon style)
- [ ] Ensure cursor is only enabled when user opted-in and when Reduce Motion is OFF
- [ ] Update `Navbar` / settings to allow cursor enable (if separate toggle needed)

## Step 3 — Hero 3D performance upgrades
- [ ] In `src/components/Hero.tsx`: reduce particle count
- [ ] Cap DPR: `dpr={[1, 1.5]}`
- [ ] Pause 3D animation when tab hidden OR when user scrolls away
- [ ] If Disable 3D is ON: do not mount Canvas / show fallback

## Step 4 — Lead form + WhatsApp prefill
- [ ] Add `src/components/LeadForm.tsx` (Name, Phone, Problem Type)
- [ ] On submit: open WhatsApp prefilled using wa.me with `923231459121`
- [ ] Add section to `src/app/page.tsx` with `id="contact"`

## Step 5 — Instant Quote calculator
- [ ] Replace static demo value in `src/components/ValueReveal.tsx`
- [ ] Add interactive inputs + compute instant estimate
- [ ] Add loading skeleton for quote button
- [ ] CTA ties into lead form / WhatsApp prefill

## Step 6 — LivePrices credibility
- [ ] Add “Sample/Demo” label OR wire to backend (if backend not available, keep as sample but labeled)
- [ ] Add accurate “Last updated” timestamp
- [ ] Only run interval when LivePrices section is on screen

## Step 7 — GUI polish + micro-interactions
- [ ] Ensure consistent heading typography + spacing across sections
- [ ] Improve keyboard focus states globally or per component
- [ ] Make hover states consistent with glass-card style

## Step 8 — SEO + JSON-LD structured data
- [ ] Add JSON-LD in `src/app/layout.tsx`: LocalBusiness + Service + FAQPage
- [ ] Ensure FAQ items reflect actual content

## Step 9 — Fix CTA / href="#" placeholders
- [ ] Replace placeholder `href="#"` in Footer/quick links with real anchors

## Step 10 — Verify
- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Manual test: toggles, cursor, 3D pause, lead form, quote, LivePrices stop when out of view

