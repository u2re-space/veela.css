<p align="center">
  <strong>@fest-lib/veela</strong><br>
  Design tokens, <code>--c2-*</code> color functions, Agate.UX. Values live in SCSS — this file is the map.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@fest-lib/veela"><img src="https://img.shields.io/npm/v/@fest-lib/veela?style=flat-square" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@fest-lib/veela?style=flat-square" alt="MIT"></a>
  <a href="https://github.com/fest-live/veela.css"><img src="https://img.shields.io/github/stars/fest-live/veela.css?style=flat-square" alt="stars"></a>
</p>

Do not emit a second `:root` palette in apps. Consume tokens and override context (`var(--token, fallback)`). Token SoT: `src/scss` (`core/misc/_tokens.scss`).

```text
core · dom · object · lure
 └── fest/veela       ← you are here
      └── fl-ui · shells · apps
```

## Install

```bash
npm install @fest-lib/core @fest-lib/dom @fest-lib/object @fest-lib/lure @fest-lib/veela
```

Peers: `core`, `dom`, `object`, `lure` (`>=0.1.0`). The published tarball includes `dist/` **and** `src/scss/`.

### Runtime (adopted / inline)

```ts
import initialize from "@fest-lib/veela";
initialize();                    // loads bundled SCSS via @fest-lib/dom
```

Variants (from `src/scss/index.ts`):

```ts
import { loadVeelaVariant } from "@fest-lib/veela/scss/index.ts";
// "core" | "basic" | "advanced" | "beercss"
await loadVeelaVariant("advanced");
```

In the workspace, FL.UI usually loads Veela for you (`configureFlUI({ styleVariant: "veela-advanced" })`).

### SCSS

```scss
@use "@fest-lib/veela/scss/core" as *;

.card {
    background: var(--c2-surface, var(--color-surface));
    padding: var(--space-md);
    border-radius: var(--radius-md);
}
```

Exports: `@fest-lib/veela/scss/*` → `src/scss/*`.

## Color functions

Native CSS custom functions (plus runtime fallbacks):

| Function | Role |
| --- | --- |
| `--c2-surface(tone, base-color, scheme-id)` | surface |
| `--c2-on-surface(...)` | ink on surface |
| `--c2-contrast(...)` | contrast fill |
| `--c2-on-contrast(...)` | ink on contrast |

- **scheme-id:** `0` light · `1` dark · `2` default (follow host).
- **tone:** `0` black/white end · `50%` chroma · `100%` opposite end.
- **base-color:** `var(--current)` (default), `--primary`, `--secondary`, `--accent`, `--success`, `--warning`, `--error`.

```css
.panel {
    background: var(--c2-surface);
    color: var(--c2-on-surface);
}
```

Alpha via relative color: `oklch(from var(--c2-surface) l c h / 0.5)`.

### `solid-colorize` mixin

```scss
@include solid-colorize("&", (
    "shade": 0,
    "tint": 0,
    "scheme-id": 2,
    "role": null,
    "scope": "component"   // or "selector"
));
```

`scope: "component"` paints descendants / form helpers; `"selector"` stays on the node.

## Tokens (excerpt)

Live numbers are in SCSS. Typical names:

| Kind | Examples |
| --- | --- |
| Space | `--space-xs` … `--space-2xl`, `--gap-*`, `--padding-*` |
| Radius | `--radius-xs` … `--radius-2xl`, `--radius-full` |
| Type | `--text-xs` … `--text-6xl`, `--leading-*`, `--font-weight-*` |
| Motion | `--transition-fast` / `normal` / `slow` |
| Shadow | `--shadow-sm` … `--shadow-2xl`, `--shadow-inset` |
| Chrome | `--icon-size-*`, `--avatar-size`, `--border-width-*` |

Atomic utility classes (`.p-md`, `.gap-md`, `.d-flex`, `.text-sm`, `.shadow-sm`, `.color-primary`, `.surface-subtle`) ship with the stylesheet. Prefer tokens on components over class soup.

## Agate.UX

Oriented-space vs client-space vs implementation-space:

| Oriented | Client | Impl |
| --- | --- | --- |
| `--os-inset-x/y` | `--cs-inset-x/y` | `--im-inset-x/y` |
| `--os-drag-x/y` | `--cs-drag-x/y` | `--im-drag-x/y` |
| `--os-size-x/y` | `--cs-size-x/y` | `--im-size-x/y` |

Use `inset` for semi-static layout, `translate` for drag / animation. Orientation: `calc(var(--orient, 0) * 90deg)`. Measure in `@fest-lib/dom` Agate helpers.

## Workspace

```bash
cd modules/projects/veela.css
npm run demo             # Vite
npm test                 # puppeteer
npm run build
npm run publish
```

Guide: `guide/`. License: [MIT](LICENSE).
