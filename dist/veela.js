var pe = /* @__PURE__ */ Symbol.for("dom.ts@__registeredCssProperties"), K = globalThis[pe] ??= /* @__PURE__ */ new Set();
[
  {
    name: "--screen-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--screen-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--visual-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--visual-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--clip-ampl",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--clip-freq",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--avail-width",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--avail-height",
    syntax: "<length-percentage>",
    inherits: !0,
    initialValue: "0px"
  },
  {
    name: "--pixel-ratio",
    syntax: "<number>",
    inherits: !0,
    initialValue: "1"
  },
  {
    name: "--percent",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--percent-x",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--percent-y",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--scroll-left",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--scroll-top",
    syntax: "<number>",
    inherits: !0,
    initialValue: "0"
  },
  {
    name: "--drag-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--drag-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--resize-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--resize-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--shift-x",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--shift-y",
    syntax: "<length>",
    inherits: !1,
    initialValue: "0px"
  },
  {
    name: "--cs-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-p-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cs-p-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--os-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--os-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--rv-grid-r",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--rv-grid-c",
    syntax: "<number>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cell-x",
    syntax: "<integer>",
    inherits: !1,
    initialValue: "0"
  },
  {
    name: "--cell-y",
    syntax: "<integer>",
    inherits: !1,
    initialValue: "0"
  }
].forEach((e) => {
  if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
  const t = String(e?.name || "").trim();
  if (!(!t || K.has(t)))
    try {
      CSS.registerProperty(e);
    } catch (a) {
      String(a?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(a);
    } finally {
      K.add(t);
    }
});
function he() {
  const e = globalThis;
  if (typeof e.HTMLElement == "function") return;
  const t = class {
  }, a = (n) => {
    typeof e[n] != "function" && (e[n] = t);
  };
  a("EventTarget"), a("Node"), a("Element"), a("HTMLElement"), a("SVGElement"), a("Text"), a("Comment"), a("DocumentFragment"), a("ShadowRoot"), a("HTMLDocument"), a("Document"), a("HTMLBodyElement"), a("HTMLHeadElement"), a("HTMLCanvasElement"), a("HTMLInputElement"), a("HTMLLinkElement"), a("HTMLStyleElement"), a("HTMLPreElement"), a("HTMLDivElement"), a("CSSStyleRule"), a("CSSLayerBlockRule");
}
var fe = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), ae = (e) => fe(e, "value"), ne = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), re = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const a = parseFloat(t[0][0]);
  return !Number.isNaN(a) && Number.isFinite(a) ? a : null;
};
he();
var at = typeof document < "u" ? document?.documentElement : null, ye = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    ye.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var ge = {};
function v(e, t, a, n = ge) {
  e?.addEventListener?.(t, a, n);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, a, n);
}
var ve = /* @__PURE__ */ Symbol.for("dom.ts@zoomValues"), nt = globalThis[ve] ??= /* @__PURE__ */ new WeakMap(), me = () => {
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, a = t ? {
    "--vv-width": `${t.width}px`,
    "--vv-height": `${t.height}px`,
    "--vv-offset-left": `${t.offsetLeft}px`,
    "--vv-offset-top": `${t.offsetTop}px`,
    "--vv-scale": String(t.scale ?? 1)
  } : {
    "--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
    "--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
    "--vv-offset-left": "0px",
    "--vv-offset-top": "0px",
    "--vv-scale": "1"
  };
  if (typeof screen < "u") {
    const n = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : n,
      "--avail-height": e ? n : r,
      "--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...a
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": "0px",
    "--pixel-ratio": "1",
    ...a
  };
}, rt = me(), ot = new OffscreenCanvas(1, 1).getContext("2d"), be = /* @__PURE__ */ Symbol.for("dom.ts@onBorderObserve"), it = globalThis[be] ??= /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ Symbol.for("dom.ts@onContentObserve"), st = globalThis[Se] ??= /* @__PURE__ */ new WeakMap(), oe = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), we = (e, t, a, n) => {
  const r = new Set([...a.split(",") || [a]].map((o) => o.trim())), s = new MutationObserver((o, c) => {
    for (const i of o) if (i.type == "childList") {
      const p = Array.from(i.addedNodes) || [], g = Array.from(i.removedNodes) || [];
      p.push(...Array.from(i.addedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), g.push(...Array.from(i.removedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...new Set(p)].filter((h) => h?.matches?.(t))?.map?.((h) => {
        r.forEach((d) => {
          n({
            target: h,
            type: "attributes",
            attributeName: d,
            oldValue: h?.getAttribute?.(d)
          }, c);
        });
      });
    } else i.target?.matches?.(t) && i.attributeName && r.has(i.attributeName) && n(i, c);
  });
  return s.observe(e = oe(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((o) => r.forEach((c) => n({
    target: o,
    type: "attributes",
    attributeName: c,
    oldValue: o?.getAttribute?.(c)
  }, s))), s;
}, xe = (e, t = "*", a = (n, r) => {
}) => {
  const n = (d) => {
    const u = Array.from(d || []) || [];
    return u.push(...Array.from(d || []).flatMap((l) => Array.from(l?.querySelectorAll?.(t) || []))), [...Array.from(new Set(u).values())].filter((l) => l?.matches?.(t));
  }, r = (d) => {
    const u = g?.deref?.(), l = n(d.addedNodes), f = n(d.removedNodes);
    (l.length > 0 || f.length > 0) && a?.({
      type: d.type,
      target: d.target,
      attributeName: d.attributeName,
      attributeNamespace: d.attributeNamespace,
      nextSibling: d.nextSibling,
      oldValue: d.oldValue,
      previousSibling: d.previousSibling,
      addedNodes: l,
      removedNodes: f
    }, u);
  }, s = (d) => {
    r({
      addedNodes: [d?.target].filter((u) => !!u),
      removedNodes: [d?.relatedTarget].filter((u) => !!u),
      type: "childList",
      target: d?.currentTarget
    });
  }, o = (d) => {
    r({
      addedNodes: [d?.relatedTarget].filter((u) => !!u),
      removedNodes: [d?.target].filter((u) => !!u),
      type: "childList",
      target: d?.currentTarget
    });
  }, c = (d) => {
    r({
      addedNodes: [d?.target].filter((u) => !!u),
      removedNodes: [d?.relatedTarget || document?.activeElement].filter((u) => !!u),
      type: "childList",
      target: d?.currentTarget
    });
  }, i = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active"))
    return e.addEventListener("pointerover", s, i), e.addEventListener("pointerout", o, i), e.addEventListener("pointerdown", s, i), e.addEventListener("pointerup", o, i), e.addEventListener("pointercancel", o, i), { disconnect: () => {
      e.removeEventListener("pointerover", s, i), e.removeEventListener("pointerout", o, i), e.removeEventListener("pointerdown", s, i), e.removeEventListener("pointerup", o, i), e.removeEventListener("pointercancel", o, i);
    } };
  if (t?.includes?.(":hover"))
    return e.addEventListener("pointerover", s, i), e.addEventListener("pointerout", o, i), { disconnect: () => {
      e.removeEventListener("pointerover", s, i), e.removeEventListener("pointerout", o, i);
    } };
  if (t?.includes?.(":active"))
    return e.addEventListener("pointerdown", s, i), e.addEventListener("pointerup", o, i), e.addEventListener("pointercancel", o, i), { disconnect: () => {
      e.removeEventListener("pointerdown", s, i), e.removeEventListener("pointerup", o, i), e.removeEventListener("pointercancel", o, i);
    } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", s, i), e.addEventListener("focusout", o, i), e.addEventListener("click", c, i), { disconnect: () => {
      e.removeEventListener("focusin", s, i), e.removeEventListener("focusout", o, i), e.removeEventListener("click", c, i);
    } };
  const p = new MutationObserver((d, u) => {
    for (const l of d) l.type == "childList" && r(l);
  }), g = new WeakRef(p);
  (e?.element ?? e) instanceof Node && p.observe(e = oe(e), {
    childList: !0,
    subtree: !0
  });
  const h = Array.from(e.querySelectorAll(t));
  return h.length > 0 && a?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, Me = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", Q = (e) => typeof e == "string" && /@import\b/i.test(e), Y = "DOM", q = typeof document < "u" ? document.createElement("style") : null;
q && (typeof document < "u" && document.querySelector("head")?.appendChild?.(q), q.dataset.owner = Y);
var ee = (e, t, a = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${a && typeof a == "string" ? `layer(${a})` : ""};` : t;
}, H = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", M = (e) => H && e instanceof CSSStyleValue, x = (e) => H && e instanceof CSSUnitValue, b = (e, t, a, n = "") => {
  if (!(!e || !t)) {
    if (a == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== a && e.setProperty(t, a, n);
  }
}, Ee = (e, t, a, n = "") => {
  if (!e || !t) return e;
  const r = ne(t), s = e.style, o = e.attributeStyleMap ?? e.styleMap;
  if (!H || !o) return ie(e, t, a, n);
  let c = ae(a) && !(M(a) || x(a)) ? a?.value : a;
  if (c == null)
    return o.delete?.(r), s && b(s, r, null, n), e;
  if (M(c)) {
    const i = o.get(r);
    if (x(c) && x(i)) {
      if (i.value === c.value && i.unit === c.unit) return e;
    } else if (i === c) return e;
    return o.set(r, c), e;
  }
  if (typeof c == "number") if (CSS?.number && !r.startsWith("--")) {
    const i = CSS.number(c), p = o.get(r);
    return x(p) && p.value === i.value && p.unit === i.unit || o.set(r, i), e;
  } else
    return b(s, r, String(c), n), e;
  if (typeof c == "string" && !M(c)) {
    const i = re(c);
    if (typeof i == "number" && CSS?.number && !r.startsWith("--")) {
      const p = CSS.number(i), g = o.get(r);
      return x(g) && g.value === p.value && g.unit === p.unit || o.set(r, p), e;
    } else
      return b(s, r, c, n), e;
  }
  return b(s, r, String(c), n), e;
}, ie = (e, t, a, n = "") => {
  if (!e || !t) return e;
  const r = ne(t), s = e.style;
  if (!s) return e;
  let o = ae(a) && !(M(a) || x(a)) ? a?.value : a;
  return typeof o == "string" && !M(o) && (o = re(o) ?? o), o == null ? (b(s, r, null, n), e) : (M(o) || typeof o == "number", b(s, r, String(o), n), e);
}, se = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), Le = /* @__PURE__ */ Symbol.for("dom.ts@blobURLMap"), E = globalThis[Le] ??= /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ Symbol.for("dom.ts@cacheMap"), S = globalThis[Ce] ??= /* @__PURE__ */ new Map(), Ve = (e) => {
  if (!e) return null;
  if (S.has(e)) return S.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (E.has(e)) return E.get(e);
    const t = URL.createObjectURL(e);
    return E.set(e, t), S.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (a) => {
      const n = await a.blob(), r = URL.createObjectURL(n);
      return E.set(n, r), S.set(e, r), S.set(r, r), r;
    });
    return S.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), a = URL.createObjectURL(t);
    return E.set(t, a), S.set(a, a), a;
  }
  return e;
}, L = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new WeakMap(), Te = (e) => {
  if (!e) return "";
  if (L.has(e)) return L.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (A.has(e)) return A.get(e) ?? "";
    const t = e?.text?.()?.then?.((a) => (A.set(e, a), a));
    return A.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (a) => {
      const n = await a.text();
      return L.set(e, n), n;
    });
    return L.set(e, t), t;
  }
  return typeof e == "string" && L.set(e, e), e;
}, je = /* @__PURE__ */ Symbol.for("dom.ts@adoptedSelectorMap"), dt = globalThis[je] ??= /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowSelectorMap"), lt = globalThis[Ae] ??= /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ Symbol.for("dom.ts@adoptedLayerMap"), ct = globalThis[Ne] ??= /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ Symbol.for("dom.ts@adoptedShadowLayerMap"), ut = globalThis[Pe] ??= /* @__PURE__ */ new WeakMap(), N = (e, t, a, n = "") => H ? Ee(e, t, a, n) : ie(e, t, a, n), de = (e, t, a = "", n) => {
  const r = Ve(e), s = typeof e == "string" && URL.canParse(e) ? e : r;
  return t?.[0] && (t[0].fetchPriority = "high"), t && s && typeof s == "string" && ee(t, s, a), t?.[0] && (!URL.canParse(e) || n) && t?.[0] instanceof HTMLLinkElement, se(r, (o) => {
    t?.[0] && o && (ee(t, o, a), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((o) => {
    console.warn("Failed to load style sheet:", o);
  });
}, Re = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = Y, de(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, C = (e, t = typeof document < "u" ? document?.head : null, a = "") => {
  const n = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && n instanceof HTMLHeadElement) return Re(e);
  const r = typeof document < "u" ? document.createElement("style") : null;
  return r ? (r.dataset.owner = Y, de(e, [r, "innerHTML"], a), n?.prepend?.(r), r) : null;
}, ke = /* @__PURE__ */ Symbol.for("dom.ts@adoptedMap"), m = globalThis[ke] ??= /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ Symbol.for("dom.ts@adoptedBlobMap"), V = globalThis[ze] ??= /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ Symbol.for("dom.ts@layerCounter"), pt = globalThis[Oe] ??= 0, te = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (a) {
    const n = String(a?.message || "").toLowerCase();
    return n.includes("@import rules are not allowed") || n.includes("@import") && n.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", a), !1;
  }
}, le = (e, t = null) => {
  if (!Me())
    return typeof e == "string" && C(e, void 0, t || ""), null;
  if (typeof e == "string" && Q(e))
    return C(e, void 0, t || ""), null;
  if (typeof e == "string" && m?.has?.(e)) {
    const n = m.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), n;
  }
  if ((e instanceof Blob || e instanceof File) && V?.has?.(e)) {
    const n = V.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), n;
  }
  if (!e) return null;
  const a = typeof e == "string" ? m.getOrInsertComputed(e, (n) => new CSSStyleSheet()) : V.getOrInsertComputed(e, (n) => new CSSStyleSheet());
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(a) && document.adoptedStyleSheets.push(a), typeof e == "string" && !URL.canParse(e)) {
    const n = t ? `@layer ${t} { ${e} }` : e;
    return m.set(e, a), te(a, n) || ($(a), m.delete(e), C(e)), a;
  } else se(Te(e), (n) => {
    if (m.set(n, a), n) {
      if (Q(n))
        return $(a), m.delete(n), V.delete(e), C(n, void 0, t || ""), a;
      const r = t ? `@layer ${t} { ${n} }` : n;
      return te(a, r) || ($(a), m.delete(n), V.delete(e), C(n, void 0, t || "")), a;
    }
  });
  return a;
}, $ = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? m.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const a = document.adoptedStyleSheets, n = a.indexOf(t);
  return n !== -1 ? (a.splice(n, 1), !0) : !1;
}, We = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ Symbol.for("dom.ts@namedStoreMaps"), I = globalThis[He] ??= /* @__PURE__ */ new Map(), qe = (e, t) => {
  const a = [...e.entries() || []];
  return new Map(a?.map?.(([n, r]) => [n, r?.get?.(t)])?.filter?.(([n, r]) => !!r) || []);
}, R = (e) => ({
  storeSet: qe(I, e),
  mixinSet: k?.get?.(e),
  behaviorSet: We?.get?.(e)
}), $e = /* @__PURE__ */ Symbol.for("dom.ts@boundMixinSet"), k = globalThis[$e] ??= /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ Symbol.for("dom.ts@mixinElements"), T = globalThis[Fe] ??= /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ Symbol.for("dom.ts@mixinRegistry"), j = globalThis[Ue] ??= /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ Symbol.for("dom.ts@mixinNamespace"), z = globalThis[Be] ??= /* @__PURE__ */ new WeakMap(), ce = (e, t) => {
  typeof t == "string" && (t = j?.get?.(t));
  const a = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), n = new Set([...a].map((o) => j?.get?.(o)).filter((o) => !!o)), r = k?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  T?.has?.(t) || T?.set?.(t, /* @__PURE__ */ new WeakSet()), k?.has?.(e) || k?.set?.(e, r);
  const s = new WeakRef(e);
  r?.has?.(t) || (n.has(t) || t?.disconnect?.(s, t, R(e)), (n.has(t) || !T?.get?.(t)?.has?.(e)) && (t?.connect?.(s, t, R(e)), a.add(z?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...a].filter((o) => !!o).join(" "))), T?.get?.(t)?.add?.(e)), r?.has?.(t) && (n.has(t) || (r?.delete?.(t), t?.disconnect?.(s, t, R(e))));
}, _ = /* @__PURE__ */ new Set(), De = (e = typeof document < "u" ? document : null) => {
  if (e)
    return _?.has?.(e) || (_?.add?.(e), we(e, "*", "data-mixin", (t) => X(t.target)), xe(e, "[data-mixin]", (t) => {
      for (const a of t.addedNodes) a instanceof HTMLElement && X(a);
    })), e;
}, X = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((a) => j?.get?.(a)).filter((a) => !!a))].map?.((a) => ce(e, a));
}, Ie = (e, t) => {
  e.forEach((a) => t ? ce(a, t) : X(a));
}, _e = (e) => {
  for (const t of _) Ie(t?.querySelectorAll?.("[data-mixin]"), e);
}, Xe = new FinalizationRegistry((e) => {
  j?.delete?.(e);
}), Ye = (e, t) => {
  if (!z?.has?.(t)) {
    const a = e?.trim?.();
    a && (z?.set?.(t, a), j?.set?.(a, t), Xe?.register?.(t, a), _e(t));
  }
};
De(typeof document < "u" ? document : null);
var J = class {
  constructor(e = null) {
    e && Ye(e, this);
  }
  connect(e, t, a) {
    return this;
  }
  disconnect(e, t, a) {
    return this;
  }
  storeForElement(e) {
    return I.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return R(e);
  }
  get elements() {
    return T?.get?.(this);
  }
  get storage() {
    return I?.get?.(this.name || "");
  }
  get name() {
    return z?.get?.(this);
  }
};
function F(e, t) {
  const a = Math.min(e.x, t.x), n = Math.min(e.y, t.y), r = Math.max(e.x, t.x), s = Math.max(e.y, t.y);
  return {
    left: a,
    top: n,
    right: r,
    bottom: s,
    width: r - a,
    height: s - n
  };
}
var P = {
  start: "junction-select:start",
  move: "junction-select:move",
  end: "junction-select:end",
  cancel: "junction-select:cancel"
}, U = {
  start: "junction-drag:start",
  move: "junction-drag:move",
  end: "junction-drag:end"
}, B = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, Je = /* @__PURE__ */ Symbol.for("dom.ts@mixinDisposers"), O = globalThis[Je] ??= /* @__PURE__ */ new WeakMap(), y = (e, t, a) => {
  const n = O.get(e) ?? /* @__PURE__ */ new Map(), r = n.get(t) ?? [];
  r.push(a), n.set(t, r), O.set(e, n);
}, G = (e, t) => {
  const a = O.get(e), n = a?.get(t);
  if (n) {
    for (const r of n) try {
      r();
    } catch {
    }
    a.delete(t), a.size === 0 && O.delete(e);
  }
}, w = (e, t) => {
  const a = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", n = parseFloat(a);
  return Number.isFinite(n) ? n : 0;
}, ue = (e, t, a) => {
  const n = e.getAttribute(t)?.trim();
  if (!n) return a;
  const r = e.querySelector(n);
  return r instanceof HTMLElement ? r : a;
}, Ge = class extends J {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const a = document.createElement("div");
    a.className = "ui-junction-select-overlay", a.setAttribute("data-junction-overlay", ""), a.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(a);
    let r = !1, s = {
      x: 0,
      y: 0
    }, o = {
      x: 0,
      y: 0
    };
    const c = (l) => {
      const f = t.getBoundingClientRect();
      return {
        x: l.clientX - f.left,
        y: l.clientY - f.top
      };
    }, i = () => {
      const l = F(s, o);
      if (l.width < 1 && l.height < 1) {
        a.style.display = "none";
        return;
      }
      a.style.display = "block", a.style.left = `${l.left}px`, a.style.top = `${l.top}px`, a.style.width = `${l.width}px`, a.style.height = `${l.height}px`;
    }, p = (l) => {
      l.button === 0 && (l.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (l.target === t || t.contains(l.target)) && (r = !0, s = c(l), o = { ...s }, t.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(P.start, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...o },
          host: t
        }
      })), i()));
    }, g = (l) => {
      if (!r) return;
      o = c(l), i();
      const f = F(s, o);
      t.dispatchEvent(new CustomEvent(P.move, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...o },
          box: f,
          host: t
        }
      }));
    }, h = (l) => {
      if (!r) return;
      r = !1;
      try {
        t.releasePointerCapture(l.pointerId);
      } catch {
      }
      const f = F(s, o);
      t.dispatchEvent(new CustomEvent(P.end, {
        bubbles: !0,
        detail: {
          a: { ...s },
          b: { ...o },
          box: f,
          host: t
        }
      }));
    }, d = (l) => {
      r && h(l);
    }, u = (l) => {
      if (r) {
        r = !1, a.style.display = "none";
        try {
          t.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(P.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return y(t, "ui-junction-select", () => {
      a.remove();
    }), y(t, "ui-junction-select", v(t, "pointerdown", p)), y(t, "ui-junction-select", v(t, "pointermove", g)), y(t, "ui-junction-select", v(t, "pointerup", d)), y(t, "ui-junction-select", v(t, "pointercancel", u)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && G(t, "ui-junction-select"), this;
  }
}, Ze = class extends J {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    N(t, "--jx-drag-x", w(t, "--jx-drag-x")), N(t, "--jx-drag-y", w(t, "--jx-drag-y"));
    const a = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const n = ue(t, "data-junction-drag-handle", t);
    let r = !1, s = 0, o = 0, c = 0, i = 0;
    const p = (d) => {
      d.button === 0 && (d.target !== n && !n.contains(d.target) || (r = !0, s = d.clientX, o = d.clientY, c = w(t, "--jx-drag-x"), i = w(t, "--jx-drag-y"), n.setPointerCapture(d.pointerId), t.dispatchEvent(new CustomEvent(U.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: d.clientX,
          clientY: d.clientY,
          baseX: c,
          baseY: i
        }
      }))));
    }, g = (d) => {
      if (!r) return;
      const u = d.clientX - s, l = d.clientY - o, f = c + u, Z = i + l;
      N(t, "--jx-drag-x", f), N(t, "--jx-drag-y", Z), t.dispatchEvent(new CustomEvent(U.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: u,
          dy: l,
          x: f,
          y: Z
        }
      }));
    }, h = (d) => {
      if (r) {
        r = !1;
        try {
          n.releasePointerCapture(d.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(U.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: w(t, "--jx-drag-x"),
            y: w(t, "--jx-drag-y")
          }
        }));
      }
    };
    return y(t, "ui-junction-drag", () => {
      t.style.transform = a;
    }), y(t, "ui-junction-drag", v(n, "pointerdown", p)), y(t, "ui-junction-drag", v(n, "pointermove", g)), y(t, "ui-junction-drag", v(n, "pointerup", h)), y(t, "ui-junction-drag", v(n, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && G(t, "ui-junction-drag"), this;
  }
}, Ke = class extends J {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const a = ue(t, "data-junction-resize-handle", t);
    let n = !1, r = 0, s = 0, o = 0, c = 0;
    const i = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), p = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), g = (u) => {
      u.button === 0 && (u.target !== a && !a.contains(u.target) || (n = !0, r = u.clientX, s = u.clientY, o = t.offsetWidth, c = t.offsetHeight, a.setPointerCapture(u.pointerId), t.dispatchEvent(new CustomEvent(B.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: o,
          height: c
        }
      }))));
    }, h = (u) => {
      if (!n) return;
      const l = Math.max(i, o + (u.clientX - r)), f = Math.max(p, c + (u.clientY - s));
      t.style.width = `${l}px`, t.style.height = `${f}px`, t.dispatchEvent(new CustomEvent(B.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: l,
          height: f
        }
      }));
    }, d = (u) => {
      if (n) {
        n = !1;
        try {
          a.releasePointerCapture(u.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(B.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return y(t, "ui-junction-resize", v(a, "pointerdown", g)), y(t, "ui-junction-resize", v(a, "pointermove", h)), y(t, "ui-junction-resize", v(a, "pointerup", d)), y(t, "ui-junction-resize", v(a, "pointercancel", d)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && G(t, "ui-junction-resize"), this;
  }
};
new Ge();
new Ze();
new Ke();
var Qe = "@layer animations{}@function --wavy-step(--step <number>){--angle:calc((var(--step, 0) * 2) * 1rad * pi);--variant:calc(cos(var(--clip-freq, 8) * var(--angle, 0deg)) * 0.5 + 0.5);--adjust:calc(var(--variant, 0) * var(--clip-amplitude, 0));--x:calc(50% + (cos(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));--y:calc(50% + (sin(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));result:var(--x) var(--y)}@layer ux-shapes{.shaped{aspect-ratio:1/1;border-radius:1.5rem;contain:strict;display:flex;overflow:hidden;padding:1.25rem;place-content:center;place-items:center;pointer-events:auto;transition:--background-tone-shift .2s ease-in-out,--icon-color .2s ease-in-out;transition-behavior:allow-discrete;user-select:none;z-index:1}.shaped,.shaped :is(span,ui-icon){block-size:stretch;inline-size:stretch}[data-dragging]{z-index:calc(100 + var(--z-index, 0))!important}:not(.shaped) .shaped[data-shape],:not(.shaped)>[data-shape],:not(:has(.shaped))[data-shape]{aspect-ratio:1/1;contain:strict;overflow:hidden;pointer-events:auto;touch-action:none}:not(.shaped) .shaped[data-shape=square],:not(.shaped)>[data-shape=square],:not(:has(.shaped))[data-shape=square]{--border-radius:var(--radius-md);--clip-path:none}:not(.shaped) .shaped[data-shape=squircle],:not(.shaped)>[data-shape=squircle],:not(:has(.shaped))[data-shape=squircle]{--border-radius:28%;--clip-path:none}:not(.shaped) .shaped[data-shape=circle],:not(.shaped)>[data-shape=circle],:not(:has(.shaped))[data-shape=circle]{--border-radius:50%;--clip-path:none}:not(.shaped) .shaped[data-shape=rounded],:not(.shaped)>[data-shape=rounded],:not(:has(.shaped))[data-shape=rounded]{--border-radius:var(--radius-xl);--clip-path:none}:not(.shaped) .shaped[data-shape=blob],:not(.shaped)>[data-shape=blob],:not(:has(.shaped))[data-shape=blob]{--border-radius:60% 40% 30% 70%/60% 30% 70% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=hexagon],:not(.shaped)>[data-shape=hexagon],:not(:has(.shaped))[data-shape=hexagon]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,93.3% 25%,93.3% 75%,50% 100%,6.7% 75%,6.7% 25%)}:not(.shaped) .shaped[data-shape=diamond],:not(.shaped)>[data-shape=diamond],:not(:has(.shaped))[data-shape=diamond]{--border-radius:0;--clip-path:polygon(round 0.5rem,50% 0%,100% 50%,50% 100%,0% 50%)}:not(.shaped) .shaped[data-shape=star],:not(.shaped)>[data-shape=star],:not(:has(.shaped))[data-shape=star]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 0%,61% 35%,98% 38%,68% 59%,79% 95%,50% 75%,21% 95%,32% 59%,2% 38%,39% 35%)}:not(.shaped) .shaped[data-shape=badge],:not(.shaped)>[data-shape=badge],:not(:has(.shaped))[data-shape=badge]{--border-radius:0;--clip-path:polygon(round 0.375rem,0% 0%,100% 0%,100% 70%,50% 100%,0% 70%)}:not(.shaped) .shaped[data-shape=heart],:not(.shaped)>[data-shape=heart],:not(:has(.shaped))[data-shape=heart]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 100%,10% 65%,0% 45%,0% 30%,5% 15%,18% 3%,35% 0%,50% 12%,65% 0%,82% 3%,95% 15%,100% 30%,100% 45%,90% 65%)}:not(.shaped) .shaped[data-shape=clover],:not(.shaped)>[data-shape=clover],:not(:has(.shaped))[data-shape=clover]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,60% 30%,70% 30%,100% 50%,70% 70%,60% 70%,50% 100%,40% 70%,30% 70%,0% 50%,30% 30%,40% 30%)}:not(.shaped) .shaped[data-shape=flower],:not(.shaped)>[data-shape=flower],:not(:has(.shaped))[data-shape=flower]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 0%,58% 25%,85% 15%,68% 40%,100% 50%,68% 60%,85% 85%,58% 75%,50% 100%,42% 75%,15% 85%,32% 60%,0% 50%,32% 40%,15% 15%,42% 25%)}:not(.shaped) .shaped[data-shape=triangle],:not(.shaped)>[data-shape=triangle],:not(:has(.shaped))[data-shape=triangle]{--border-radius:0;--clip-path:polygon(round 0.5rem,50% 0%,100% 87%,0% 87%)}:not(.shaped) .shaped[data-shape=pentagon],:not(.shaped)>[data-shape=pentagon],:not(:has(.shaped))[data-shape=pentagon]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,97.5% 35%,79.5% 95%,20.5% 95%,2.5% 35%)}:not(.shaped) .shaped[data-shape=octagon],:not(.shaped)>[data-shape=octagon],:not(:has(.shaped))[data-shape=octagon]{--border-radius:0;--clip-path:polygon(round 0.25rem,30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)}:not(.shaped) .shaped[data-shape=cross],:not(.shaped)>[data-shape=cross],:not(:has(.shaped))[data-shape=cross]{--border-radius:0;--clip-path:polygon(round 0.375rem,35% 0%,65% 0%,65% 35%,100% 35%,100% 65%,65% 65%,65% 100%,35% 100%,35% 65%,0% 65%,0% 35%,35% 35%)}:not(.shaped) .shaped[data-shape=arrow],:not(.shaped)>[data-shape=arrow],:not(:has(.shaped))[data-shape=arrow]{--border-radius:0;--clip-path:polygon(round 0.375rem,0% 20%,60% 20%,60% 0%,100% 50%,60% 100%,60% 80%,0% 80%)}:not(.shaped) .shaped[data-shape=egg],:not(.shaped)>[data-shape=egg],:not(:has(.shaped))[data-shape=egg]{--border-radius:50% 50% 50% 50%/60% 60% 40% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=tear],:not(.shaped)>[data-shape=tear],:not(:has(.shaped))[data-shape=tear]{--border-radius:50cqmin 50cqmin 5rem 50cqmin;--clip-path:none;border-end-end-radius:5rem;border-end-start-radius:50cqmin;border-start-end-radius:50cqmin;border-start-start-radius:50cqmin}:not(.shaped) .shaped[data-shape=wavy],:not(.shaped)>[data-shape=wavy],:not(:has(.shaped))[data-shape=wavy]{--border-radius:calc(var(--icon-size, 100%) * 0.5)}}";
async function D() {
  try {
    await le(Qe), console.log("[Veela/Core] Core styles loaded");
  } catch (e) {
    console.warn("[Veela/Core] Failed to load core styles:", e);
  }
}
var et = "@layer ux-animation{}";
async function tt() {
  try {
    await le(et), console.log("[Veela/Advanced] Advanced styles loaded");
  } catch (e) {
    console.warn("[Veela/Advanced] Failed to load advanced styles:", e);
  }
}
var W = null;
async function ht(e) {
  if (W === e) {
    console.log(`[Veela] Variant '${e}' already loaded`);
    return;
  }
  switch (console.log(`[Veela] Loading variant: ${e}`), e) {
    case "basic":
      await D();
      break;
    case "advanced":
      await D(), await tt();
      break;
    default:
      console.warn(`[Veela] Unknown variant: ${e}, using basic`), await D();
      break;
  }
  W = e;
}
function ft() {
  return W;
}
function yt(e) {
  return W === e;
}
export {
  ht as default,
  ft as getLoadedVariant,
  yt as isVariantLoaded,
  ht as loadVeelaVariant
};
