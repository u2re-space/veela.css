import { loadAsAdopted as s } from "/home/u2re-dev/U2RE.space/modules/shared/fest/dom/index.ts";
var t = "@layer animations;@function --wavy-step(--step <number>){--angle:calc((var(--step,0) * 2) * 57.2958deg * pi);--variant:calc(cos(var(--clip-freq,8) * var(--angle,0deg)) * .5 + .5);--adjust:calc(var(--variant,0) * var(--clip-amplitude,0));--x:calc(50% + (cos(var(--angle,0deg)) * (.5 - var(--adjust,0))) * var(--icon-size,100%));--y:calc(50% + (sin(var(--angle,0deg)) * (.5 - var(--adjust,0))) * var(--icon-size,100%));result:var(--x) var(--y)}@layer ux-shapes{.shaped{aspect-ratio:1;contain:strict;pointer-events:auto;transition-behavior:allow-discrete;user-select:none;z-index:1;border-radius:1.5rem;place-content:center;place-items:center;padding:1.25rem;transition:--background-tone-shift .2s ease-in-out,--icon-color .2s ease-in-out;display:flex;overflow:hidden}.shaped,.shaped :is(span,ui-icon){block-size:stretch;inline-size:stretch}[data-dragging]{z-index:calc(100 + var(--z-index,0))!important}:not(.shaped) .shaped[data-shape],:not(.shaped)>[data-shape],:not(:has(.shaped))[data-shape]{aspect-ratio:1;contain:strict;pointer-events:auto;touch-action:none;overflow:hidden}:not(.shaped) .shaped[data-shape=square],:not(.shaped)>[data-shape=square],:not(:has(.shaped))[data-shape=square]{--border-radius:var(--radius-md);--clip-path:none}:not(.shaped) .shaped[data-shape=squircle],:not(.shaped)>[data-shape=squircle],:not(:has(.shaped))[data-shape=squircle]{--border-radius:28%;--clip-path:none}:not(.shaped) .shaped[data-shape=circle],:not(.shaped)>[data-shape=circle],:not(:has(.shaped))[data-shape=circle]{--border-radius:50%;--clip-path:none}:not(.shaped) .shaped[data-shape=rounded],:not(.shaped)>[data-shape=rounded],:not(:has(.shaped))[data-shape=rounded]{--border-radius:var(--radius-xl);--clip-path:none}:not(.shaped) .shaped[data-shape=blob],:not(.shaped)>[data-shape=blob],:not(:has(.shaped))[data-shape=blob]{--border-radius:60% 40% 30% 70%/60% 30% 70% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=hexagon],:not(.shaped)>[data-shape=hexagon],:not(:has(.shaped))[data-shape=hexagon]{--border-radius:0;--clip-path:polygon(round .375rem,50% 0%,93.3% 25%,93.3% 75%,50% 100%,6.7% 75%,6.7% 25%)}:not(.shaped) .shaped[data-shape=diamond],:not(.shaped)>[data-shape=diamond],:not(:has(.shaped))[data-shape=diamond]{--border-radius:0;--clip-path:polygon(round .5rem,50% 0%,100% 50%,50% 100%,0% 50%)}:not(.shaped) .shaped[data-shape=star],:not(.shaped)>[data-shape=star],:not(:has(.shaped))[data-shape=star]{--border-radius:0;--clip-path:polygon(round .25rem,50% 0%,61% 35%,98% 38%,68% 59%,79% 95%,50% 75%,21% 95%,32% 59%,2% 38%,39% 35%)}:not(.shaped) .shaped[data-shape=badge],:not(.shaped)>[data-shape=badge],:not(:has(.shaped))[data-shape=badge]{--border-radius:0;--clip-path:polygon(round .375rem,0% 0%,100% 0%,100% 70%,50% 100%,0% 70%)}:not(.shaped) .shaped[data-shape=heart],:not(.shaped)>[data-shape=heart],:not(:has(.shaped))[data-shape=heart]{--border-radius:0;--clip-path:polygon(round .25rem,50% 100%,10% 65%,0% 45%,0% 30%,5% 15%,18% 3%,35% 0%,50% 12%,65% 0%,82% 3%,95% 15%,100% 30%,100% 45%,90% 65%)}:not(.shaped) .shaped[data-shape=clover],:not(.shaped)>[data-shape=clover],:not(:has(.shaped))[data-shape=clover]{--border-radius:0;--clip-path:polygon(round .375rem,50% 0%,60% 30%,70% 30%,100% 50%,70% 70%,60% 70%,50% 100%,40% 70%,30% 70%,0% 50%,30% 30%,40% 30%)}:not(.shaped) .shaped[data-shape=flower],:not(.shaped)>[data-shape=flower],:not(:has(.shaped))[data-shape=flower]{--border-radius:0;--clip-path:polygon(round .25rem,50% 0%,58% 25%,85% 15%,68% 40%,100% 50%,68% 60%,85% 85%,58% 75%,50% 100%,42% 75%,15% 85%,32% 60%,0% 50%,32% 40%,15% 15%,42% 25%)}:not(.shaped) .shaped[data-shape=triangle],:not(.shaped)>[data-shape=triangle],:not(:has(.shaped))[data-shape=triangle]{--border-radius:0;--clip-path:polygon(round .5rem,50% 0%,100% 87%,0% 87%)}:not(.shaped) .shaped[data-shape=pentagon],:not(.shaped)>[data-shape=pentagon],:not(:has(.shaped))[data-shape=pentagon]{--border-radius:0;--clip-path:polygon(round .375rem,50% 0%,97.5% 35%,79.5% 95%,20.5% 95%,2.5% 35%)}:not(.shaped) .shaped[data-shape=octagon],:not(.shaped)>[data-shape=octagon],:not(:has(.shaped))[data-shape=octagon]{--border-radius:0;--clip-path:polygon(round .25rem,30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)}:not(.shaped) .shaped[data-shape=cross],:not(.shaped)>[data-shape=cross],:not(:has(.shaped))[data-shape=cross]{--border-radius:0;--clip-path:polygon(round .375rem,35% 0%,65% 0%,65% 35%,100% 35%,100% 65%,65% 65%,65% 100%,35% 100%,35% 65%,0% 65%,0% 35%,35% 35%)}:not(.shaped) .shaped[data-shape=arrow],:not(.shaped)>[data-shape=arrow],:not(:has(.shaped))[data-shape=arrow]{--border-radius:0;--clip-path:polygon(round .375rem,0% 20%,60% 20%,60% 0%,100% 50%,60% 100%,60% 80%,0% 80%)}:not(.shaped) .shaped[data-shape=egg],:not(.shaped)>[data-shape=egg],:not(:has(.shaped))[data-shape=egg]{--border-radius:50% 50% 50% 50%/60% 60% 40% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=tear],:not(.shaped)>[data-shape=tear],:not(:has(.shaped))[data-shape=tear]{--border-radius:50cqmin 50cqmin 5rem 50cqmin;--clip-path:none;border-start-start-radius:50cqmin;border-start-end-radius:50cqmin;border-end-end-radius:5rem;border-end-start-radius:50cqmin}:not(.shaped) .shaped[data-shape=wavy],:not(.shaped)>[data-shape=wavy],:not(:has(.shaped))[data-shape=wavy]{--border-radius:calc(var(--icon-size,100%) * .5)}}";
async function d() {
  try {
    await s(t), console.log("[Veela/Core] Core styles loaded");
  } catch (a) {
    console.warn("[Veela/Core] Failed to load core styles:", a);
  }
}
var o = "@layer ux-animation;";
async function n() {
  try {
    await s(o), console.log("[Veela/Advanced] Advanced styles loaded");
  } catch (a) {
    console.warn("[Veela/Advanced] Failed to load advanced styles:", a);
  }
}
var e = null;
async function r(a) {
  if (e === a) {
    console.log(`[Veela] Variant '${a}' already loaded`);
    return;
  }
  switch (console.log(`[Veela] Loading variant: ${a}`), a) {
    case "basic":
      await d();
      break;
    case "advanced":
      await d(), await n();
      break;
    default:
      console.warn(`[Veela] Unknown variant: ${a}, using basic`), await d();
      break;
  }
  e = a;
}
function h() {
  return e;
}
function i(a) {
  return e === a;
}
export {
  r as default,
  h as getLoadedVariant,
  i as isVariantLoaded,
  r as loadVeelaVariant
};
