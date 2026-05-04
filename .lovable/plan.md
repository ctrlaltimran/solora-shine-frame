# ServicesSpatial polish pass

Iterating on the 3D spatial services component with the changes you greenlit.

## 1. Icons

In `src/components/ServicesSpatial.tsx`:
- Swap `RotateCcw` → `BellRing` for Patient Re-Activator (the loading-spinner read goes away).
- Keep `Magnet` (Patient Magnet) and `Sparkles` (Reputation Booster) — the trio reads as distinct now.

## 2. Desktop layout: 3 side-by-side, no scroll

Currently desktop is a horizontal scroll-snap track with 360px cards + prev/next arrows. The page container is `max-w-2xl` (672px), so 3 cards never fit and you have to scroll.

Changes:
- In `src/styles.css` `.solora-spatial__track` desktop rules: replace the scroll/snap setup with `display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));` and `gap: 0.875rem`.
- Drop `flex: 0 0 360px; max-width: 360px;` from `.solora-spatial__card` desktop — let it fill its grid cell.
- Reduce `.solora-spatial__inner` padding from `1.5rem` to `1.15rem` and stage height from `180px → 150px` so each ~210px-wide card breathes. Shrink halo `180→150`, ring1 `140→120`, ring2 `190→160`, icon circle `72→62px`, ghost number font `5.5rem → 4.25rem`.
- Tighten typography on desktop: card title to `text-xl` (still `md:text-2xl` if room), blurb stays `text-sm`. Keep the meta row.
- Remove the prev/next arrow buttons and the `solora-spatial__pad` spacer (no longer needed). Drop the `nudge()` function and `trackRef`.
- Mobile (sub-768px) layout is unchanged — stays a single-column stack.

## 3. Service-specific CTA copy

Add a `cta` field to each service in the `services` array and render it instead of the hardcoded "Explore service":
- Patient Magnet → `Boost my ranking`
- Reputation Booster → `Get me reviews`
- Patient Re-Activator → `Fill my calendar`

## 4. Hue-bleed accents

Already partially done (grid floor, halo). Tighten further in `src/styles.css`:
- `.solora-spatial__inner` border: bump hue mix from current `border 70%` to also include a `var(--hue) 25%` tint so the rim picks up color.
- `.solora-spatial__cta` arrow color: set `color: color-mix(in oklab, var(--foreground) 70%, var(--hue) 30%)` on the inline `ArrowUpRight`.
- Card title gets a subtle hue lift on hover via `.solora-spatial__card:hover .solora-spatial__title { color: color-mix(in oklab, var(--foreground) 80%, var(--hue) 20%); }` (add a `solora-spatial__title` class to the `<h3>`).

## 5. Parallax + slow ring rotation

- Parallax: in `SpatialCard`'s `onMove`, the icon already lifts on Z. Add a counter-translate to the icon stage so it shifts opposite to the tilt direction. In CSS, `.solora-spatial__icon` gets `transform: translate3d(calc((50% - var(--mx)) * 0.08), calc((50% - var(--my)) * 0.08), 60px)` (combined with the existing translateZ).
- Ring rotation: rings already spin (`soloraSpin` 18s / 28s reverse). Slow the primary ring to `26s` and secondary to `40s` for a calmer orbit, and keep them spinning regardless of hover.

## 6. Ease-out tilt reset + focus-visible

- `.solora-spatial__card` transition is already `400ms cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-ish). Leave as is — it's correct.
- Add `:focus-visible` styling: `.solora-spatial__card:focus-visible .solora-spatial__inner { outline: 2px solid color-mix(in oklab, var(--hue) 70%, white); outline-offset: 4px; }` and remove default outline on the `<Link>` itself.
- Per your call, drop the existing `@media (prefers-reduced-motion: reduce)` block for this component so the motion plays for everyone.

## Files touched

- `src/components/ServicesSpatial.tsx` — icon swap, CTA field + render, remove nav buttons + `nudge`/`trackRef`, add `solora-spatial__title` class.
- `src/styles.css` — desktop grid layout, sizing tweaks, hue-bleed, ring timing, focus-visible, remove reduced-motion block for spatial.

No other components or routes are affected.