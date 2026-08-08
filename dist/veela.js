var K = /* @__PURE__ */ new Set();
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
    } catch (n) {
      String(n?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(n);
    } finally {
      K.add(t);
    }
});
function pe() {
  const e = globalThis;
  if (typeof e.HTMLElement == "function") return;
  const t = class {
  }, n = (a) => {
    typeof e[a] != "function" && (e[a] = t);
  };
  n("EventTarget"), n("Node"), n("Element"), n("HTMLElement"), n("SVGElement"), n("Text"), n("Comment"), n("DocumentFragment"), n("ShadowRoot"), n("HTMLDocument"), n("Document"), n("HTMLBodyElement"), n("HTMLHeadElement"), n("HTMLCanvasElement"), n("HTMLInputElement"), n("HTMLLinkElement"), n("HTMLStyleElement"), n("HTMLPreElement"), n("HTMLDivElement"), n("CSSStyleRule"), n("CSSLayerBlockRule");
}
var he = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), ne = (e) => he(e, "value"), ae = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), re = (e) => {
  if (typeof e != "string") return null;
  const t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
  if (t?.length != 1) return null;
  const n = parseFloat(t[0][0]);
  return !Number.isNaN(n) && Number.isFinite(n) ? n : null;
};
pe();
var qe = typeof document < "u" ? document?.documentElement : null, fe = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
  for (; ; )
    fe.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var ge = {};
function v(e, t, n, a = ge) {
  e?.addEventListener?.(t, n, a);
  const r = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
  return () => r?.deref?.()?.removeEventListener?.(t, n, a);
}
var ye = () => {
  const e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = t ? {
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
    const a = screen?.availWidth + "px", r = screen?.availHeight + "px";
    return {
      "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
      "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
      "--avail-width": e ? r : a,
      "--avail-height": e ? a : r,
      "--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
      "--pixel-ratio": String(devicePixelRatio || 1),
      ...n
    };
  }
  return {
    "--screen-width": "0px",
    "--screen-height": "0px",
    "--avail-width": "0px",
    "--avail-height": "0px",
    "--view-height": "0px",
    "--pixel-ratio": "1",
    ...n
  };
}, Oe = ye(), We = new OffscreenCanvas(1, 1).getContext("2d"), ie = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), ve = (e, t, n, a) => {
  const r = new Set([...n.split(",") || [n]].map((i) => i.trim())), o = new MutationObserver((i, u) => {
    for (const s of i) if (s.type == "childList") {
      const p = Array.from(s.addedNodes) || [], y = Array.from(s.removedNodes) || [];
      p.push(...Array.from(s.addedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), y.push(...Array.from(s.removedNodes || []).flatMap((h) => Array.from(h?.querySelectorAll?.(t) || []))), [...new Set(p)].filter((h) => h?.matches?.(t))?.map?.((h) => {
        r.forEach((d) => {
          a({
            target: h,
            type: "attributes",
            attributeName: d,
            oldValue: h?.getAttribute?.(d)
          }, u);
        });
      });
    } else s.target?.matches?.(t) && s.attributeName && r.has(s.attributeName) && a(s, u);
  });
  return o.observe(e = ie(e), {
    attributeOldValue: !0,
    attributes: !0,
    attributeFilter: [...r],
    childList: !0,
    subtree: !0,
    characterData: !0
  }), [...e.querySelectorAll(t)].map((i) => r.forEach((u) => a({
    target: i,
    type: "attributes",
    attributeName: u,
    oldValue: i?.getAttribute?.(u)
  }, o))), o;
}, me = (e, t = "*", n = (a, r) => {
}) => {
  const a = (d) => {
    const l = Array.from(d || []) || [];
    return l.push(...Array.from(d || []).flatMap((c) => Array.from(c?.querySelectorAll?.(t) || []))), [...Array.from(new Set(l).values())].filter((c) => c?.matches?.(t));
  }, r = (d) => {
    const l = y?.deref?.(), c = a(d.addedNodes), f = a(d.removedNodes);
    (c.length > 0 || f.length > 0) && n?.({
      type: d.type,
      target: d.target,
      attributeName: d.attributeName,
      attributeNamespace: d.attributeNamespace,
      nextSibling: d.nextSibling,
      oldValue: d.oldValue,
      previousSibling: d.previousSibling,
      addedNodes: c,
      removedNodes: f
    }, l);
  }, o = (d) => {
    r({
      addedNodes: [d?.target].filter((l) => !!l),
      removedNodes: [d?.relatedTarget].filter((l) => !!l),
      type: "childList",
      target: d?.currentTarget
    });
  }, i = (d) => {
    r({
      addedNodes: [d?.relatedTarget].filter((l) => !!l),
      removedNodes: [d?.target].filter((l) => !!l),
      type: "childList",
      target: d?.currentTarget
    });
  }, u = (d) => {
    r({
      addedNodes: [d?.target].filter((l) => !!l),
      removedNodes: [d?.relatedTarget || document?.activeElement].filter((l) => !!l),
      type: "childList",
      target: d?.currentTarget
    });
  }, s = {
    passive: !0,
    capture: !1
  };
  if (t?.includes?.(":hover") && t?.includes?.(":active"))
    return e.addEventListener("pointerover", o, s), e.addEventListener("pointerout", i, s), e.addEventListener("pointerdown", o, s), e.addEventListener("pointerup", i, s), e.addEventListener("pointercancel", i, s), { disconnect: () => {
      e.removeEventListener("pointerover", o, s), e.removeEventListener("pointerout", i, s), e.removeEventListener("pointerdown", o, s), e.removeEventListener("pointerup", i, s), e.removeEventListener("pointercancel", i, s);
    } };
  if (t?.includes?.(":hover"))
    return e.addEventListener("pointerover", o, s), e.addEventListener("pointerout", i, s), { disconnect: () => {
      e.removeEventListener("pointerover", o, s), e.removeEventListener("pointerout", i, s);
    } };
  if (t?.includes?.(":active"))
    return e.addEventListener("pointerdown", o, s), e.addEventListener("pointerup", i, s), e.addEventListener("pointercancel", i, s), { disconnect: () => {
      e.removeEventListener("pointerdown", o, s), e.removeEventListener("pointerup", i, s), e.removeEventListener("pointercancel", i, s);
    } };
  if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible"))
    return e.addEventListener("focusin", o, s), e.addEventListener("focusout", i, s), e.addEventListener("click", u, s), { disconnect: () => {
      e.removeEventListener("focusin", o, s), e.removeEventListener("focusout", i, s), e.removeEventListener("click", u, s);
    } };
  const p = new MutationObserver((d, l) => {
    for (const c of d) c.type == "childList" && r(c);
  }), y = new WeakRef(p);
  (e?.element ?? e) instanceof Node && p.observe(e = ie(e), {
    childList: !0,
    subtree: !0
  });
  const h = Array.from(e.querySelectorAll(t));
  return h.length > 0 && n?.({
    addedNodes: h,
    removedNodes: []
  }, p), p;
}, be = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", Q = (e) => typeof e == "string" && /@import\b/i.test(e), Y = "DOM", W = typeof document < "u" ? document.createElement("style") : null;
W && (typeof document < "u" && document.querySelector("head")?.appendChild?.(W), W.dataset.owner = Y);
var ee = (e, t, n = "") => {
  e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, O = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", E = (e) => O && e instanceof CSSStyleValue, S = (e) => O && e instanceof CSSUnitValue, b = (e, t, n, a = "") => {
  if (!(!e || !t)) {
    if (n == null) {
      e.getPropertyValue(t) !== "" && e.removeProperty(t);
      return;
    }
    e.getPropertyValue(t) !== n && e.setProperty(t, n, a);
  }
}, we = (e, t, n, a = "") => {
  if (!e || !t) return e;
  const r = ae(t), o = e.style, i = e.attributeStyleMap ?? e.styleMap;
  if (!O || !i) return se(e, t, n, a);
  let u = ne(n) && !(E(n) || S(n)) ? n?.value : n;
  if (u == null)
    return i.delete?.(r), o && b(o, r, null, a), e;
  if (E(u)) {
    const s = i.get(r);
    if (S(u) && S(s)) {
      if (s.value === u.value && s.unit === u.unit) return e;
    } else if (s === u) return e;
    return i.set(r, u), e;
  }
  if (typeof u == "number") if (CSS?.number && !r.startsWith("--")) {
    const s = CSS.number(u), p = i.get(r);
    return S(p) && p.value === s.value && p.unit === s.unit || i.set(r, s), e;
  } else
    return b(o, r, String(u), a), e;
  if (typeof u == "string" && !E(u)) {
    const s = re(u);
    if (typeof s == "number" && CSS?.number && !r.startsWith("--")) {
      const p = CSS.number(s), y = i.get(r);
      return S(y) && y.value === p.value && y.unit === p.unit || i.set(r, p), e;
    } else
      return b(o, r, u, a), e;
  }
  return b(o, r, String(u), a), e;
}, se = (e, t, n, a = "") => {
  if (!e || !t) return e;
  const r = ae(t), o = e.style;
  if (!o) return e;
  let i = ne(n) && !(E(n) || S(n)) ? n?.value : n;
  return typeof i == "string" && !E(i) && (i = re(i) ?? i), i == null ? (b(o, r, null, a), e) : (E(i) || typeof i == "number", b(o, r, String(i), a), e);
}, oe = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), M = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new Map(), xe = (e) => {
  if (!e) return null;
  if (w.has(e)) return w.get(e);
  if (e instanceof Blob || e instanceof File) {
    if (M.has(e)) return M.get(e);
    const t = URL.createObjectURL(e);
    return M.set(e, t), w.set(t, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const a = await n.blob(), r = URL.createObjectURL(a);
      return M.set(a, r), w.set(e, r), w.set(r, r), r;
    });
    return w.set(e, t), t;
  }
  if (typeof e == "string") {
    const t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
    return M.set(t, n), w.set(n, n), n;
  }
  return e;
}, L = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new WeakMap(), Se = (e) => {
  if (!e) return "";
  if (L.has(e)) return L.get(e) ?? "";
  if (e instanceof Blob || e instanceof File) {
    if (T.has(e)) return T.get(e) ?? "";
    const t = e?.text?.()?.then?.((n) => (T.set(e, n), n));
    return T.set(e, t), t;
  }
  if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
    const t = fetch(e?.replace?.("?url", "?raw"), {
      cache: "force-cache",
      mode: "same-origin",
      priority: "high"
    })?.then?.(async (n) => {
      const a = await n.text();
      return L.set(e, a), a;
    });
    return L.set(e, t), t;
  }
  return typeof e == "string" && L.set(e, e), e;
}, N = (e, t, n, a = "") => O ? we(e, t, n, a) : se(e, t, n, a), de = (e, t, n = "", a) => {
  const r = xe(e), o = typeof e == "string" && URL.canParse(e) ? e : r;
  return t?.[0] && (t[0].fetchPriority = "high"), t && o && typeof o == "string" && ee(t, o, n), t?.[0] && (!URL.canParse(e) || a) && t?.[0] instanceof HTMLLinkElement, oe(r, (i) => {
    t?.[0] && i && (ee(t, i, n), t?.[0].setAttribute("loaded", ""));
  })?.catch?.((i) => {
    console.warn("Failed to load style sheet:", i);
  });
}, Ee = (e) => {
  const t = typeof document < "u" ? document.createElement("link") : null;
  return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
    rel: "stylesheet",
    type: "text/css",
    crossOrigin: "same-origin"
  }), t.dataset.owner = Y, de(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, V = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
  const a = t?.querySelector?.("head") ?? t;
  if (typeof HTMLHeadElement < "u" && a instanceof HTMLHeadElement) return Ee(e);
  const r = typeof document < "u" ? document.createElement("style") : null;
  return r ? (r.dataset.owner = Y, de(e, [r, "innerHTML"], n), a?.prepend?.(r), r) : null;
}, m = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new WeakMap(), te = (e, t) => {
  if (!e || !t) return !1;
  try {
    return e.replaceSync(t), !0;
  } catch (n) {
    const a = String(n?.message || "").toLowerCase();
    return a.includes("@import rules are not allowed") || a.includes("@import") && a.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", n), !1;
  }
}, ce = (e, t = null) => {
  if (!be())
    return typeof e == "string" && V(e, void 0, t || ""), null;
  if (typeof e == "string" && Q(e))
    return V(e, void 0, t || ""), null;
  if (typeof e == "string" && m?.has?.(e)) {
    const a = m.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(a) && document.adoptedStyleSheets.push(a), a;
  }
  if ((e instanceof Blob || e instanceof File) && C?.has?.(e)) {
    const a = C.get(e);
    return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(a) && document.adoptedStyleSheets.push(a), a;
  }
  if (!e) return null;
  const n = typeof e == "string" ? m.getOrInsertComputed(e, (a) => new CSSStyleSheet()) : C.getOrInsertComputed(e, (a) => new CSSStyleSheet());
  if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
    const a = t ? `@layer ${t} { ${e} }` : e;
    return m.set(e, n), te(n, a) || ($(n), m.delete(e), V(e)), n;
  } else oe(Se(e), (a) => {
    if (m.set(a, n), a) {
      if (Q(a))
        return $(n), m.delete(a), C.delete(e), V(a, void 0, t || ""), n;
      const r = t ? `@layer ${t} { ${a} }` : a;
      return te(n, r) || ($(n), m.delete(a), C.delete(e), V(a, void 0, t || "")), n;
    }
  });
  return n;
}, $ = (e) => {
  if (!e) return !1;
  const t = typeof e == "string" ? m.get(e) : e;
  if (!t || typeof document > "u") return !1;
  const n = document.adoptedStyleSheets, a = n.indexOf(t);
  return a !== -1 ? (n.splice(a, 1), !0) : !1;
}, Me = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new Map(), Le = (e, t) => {
  const n = [...e.entries() || []];
  return new Map(n?.map?.(([a, r]) => [a, r?.get?.(t)])?.filter?.(([a, r]) => !!r) || []);
}, R = (e) => ({
  storeSet: Le(B, e),
  mixinSet: z?.get?.(e),
  behaviorSet: Me?.get?.(e)
}), z = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new WeakMap(), ue = (e, t) => {
  typeof t == "string" && (t = A?.get?.(t));
  const n = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), a = new Set([...n].map((i) => A?.get?.(i)).filter((i) => !!i)), r = z?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
  j?.has?.(t) || j?.set?.(t, /* @__PURE__ */ new WeakSet()), z?.has?.(e) || z?.set?.(e, r);
  const o = new WeakRef(e);
  r?.has?.(t) || (a.has(t) || t?.disconnect?.(o, t, R(e)), (a.has(t) || !j?.get?.(t)?.has?.(e)) && (t?.connect?.(o, t, R(e)), n.add(k?.get?.(t)), r?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((i) => !!i).join(" "))), j?.get?.(t)?.add?.(e)), r?.has?.(t) && (a.has(t) || (r?.delete?.(t), t?.disconnect?.(o, t, R(e))));
}, _ = /* @__PURE__ */ new Set(), Ve = (e = typeof document < "u" ? document : null) => {
  if (e)
    return _?.has?.(e) || (_?.add?.(e), ve(e, "*", "data-mixin", (t) => X(t.target)), me(e, "[data-mixin]", (t) => {
      for (const n of t.addedNodes) n instanceof HTMLElement && X(n);
    })), e;
}, X = (e) => {
  const t = /* @__PURE__ */ new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
  [...new Set([...t].map((n) => A?.get?.(n)).filter((n) => !!n))].map?.((n) => ue(e, n));
}, Ce = (e, t) => {
  e.forEach((n) => t ? ue(n, t) : X(n));
}, je = (e) => {
  for (const t of _) Ce(t?.querySelectorAll?.("[data-mixin]"), e);
}, Ae = new FinalizationRegistry((e) => {
  A?.delete?.(e);
}), Te = (e, t) => {
  if (!k?.has?.(t)) {
    const n = e?.trim?.();
    n && (k?.set?.(t, n), A?.set?.(n, t), Ae?.register?.(t, n), je(t));
  }
};
Ve(typeof document < "u" ? document : null);
var J = class {
  constructor(e = null) {
    e && Te(e, this);
  }
  connect(e, t, n) {
    return this;
  }
  disconnect(e, t, n) {
    return this;
  }
  storeForElement(e) {
    return B.get(this.name || "")?.get?.(e);
  }
  relatedForElement(e) {
    return R(e);
  }
  get elements() {
    return j?.get?.(this);
  }
  get storage() {
    return B?.get?.(this.name || "");
  }
  get name() {
    return k?.get?.(this);
  }
};
function F(e, t) {
  const n = Math.min(e.x, t.x), a = Math.min(e.y, t.y), r = Math.max(e.x, t.x), o = Math.max(e.y, t.y);
  return {
    left: n,
    top: a,
    right: r,
    bottom: o,
    width: r - n,
    height: o - a
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
}, I = {
  start: "junction-resize:start",
  move: "junction-resize:move",
  end: "junction-resize:end"
}, H = /* @__PURE__ */ new WeakMap(), g = (e, t, n) => {
  const a = H.get(e) ?? /* @__PURE__ */ new Map(), r = a.get(t) ?? [];
  r.push(n), a.set(t, r), H.set(e, a);
}, G = (e, t) => {
  const n = H.get(e), a = n?.get(t);
  if (a) {
    for (const r of a) try {
      r();
    } catch {
    }
    n.delete(t), n.size === 0 && H.delete(e);
  }
}, x = (e, t) => {
  const n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", a = parseFloat(n);
  return Number.isFinite(a) ? a : 0;
}, le = (e, t, n) => {
  const a = e.getAttribute(t)?.trim();
  if (!a) return n;
  const r = e.querySelector(a);
  return r instanceof HTMLElement ? r : n;
}, Ne = class extends J {
  constructor() {
    super("ui-junction-select");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = document.createElement("div");
    n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
    let r = !1, o = {
      x: 0,
      y: 0
    }, i = {
      x: 0,
      y: 0
    };
    const u = (c) => {
      const f = t.getBoundingClientRect();
      return {
        x: c.clientX - f.left,
        y: c.clientY - f.top
      };
    }, s = () => {
      const c = F(o, i);
      if (c.width < 1 && c.height < 1) {
        n.style.display = "none";
        return;
      }
      n.style.display = "block", n.style.left = `${c.left}px`, n.style.top = `${c.top}px`, n.style.width = `${c.width}px`, n.style.height = `${c.height}px`;
    }, p = (c) => {
      c.button === 0 && (c.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (c.target === t || t.contains(c.target)) && (r = !0, o = u(c), i = { ...o }, t.setPointerCapture(c.pointerId), t.dispatchEvent(new CustomEvent(P.start, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...i },
          host: t
        }
      })), s()));
    }, y = (c) => {
      if (!r) return;
      i = u(c), s();
      const f = F(o, i);
      t.dispatchEvent(new CustomEvent(P.move, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...i },
          box: f,
          host: t
        }
      }));
    }, h = (c) => {
      if (!r) return;
      r = !1;
      try {
        t.releasePointerCapture(c.pointerId);
      } catch {
      }
      const f = F(o, i);
      t.dispatchEvent(new CustomEvent(P.end, {
        bubbles: !0,
        detail: {
          a: { ...o },
          b: { ...i },
          box: f,
          host: t
        }
      }));
    }, d = (c) => {
      r && h(c);
    }, l = (c) => {
      if (r) {
        r = !1, n.style.display = "none";
        try {
          t.releasePointerCapture(c.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(P.cancel, {
          bubbles: !0,
          detail: { host: t }
        }));
      }
    };
    return g(t, "ui-junction-select", () => {
      n.remove();
    }), g(t, "ui-junction-select", v(t, "pointerdown", p)), g(t, "ui-junction-select", v(t, "pointermove", y)), g(t, "ui-junction-select", v(t, "pointerup", d)), g(t, "ui-junction-select", v(t, "pointercancel", l)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && G(t, "ui-junction-select"), this;
  }
}, Pe = class extends J {
  constructor() {
    super("ui-junction-drag");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    N(t, "--jx-drag-x", x(t, "--jx-drag-x")), N(t, "--jx-drag-y", x(t, "--jx-drag-y"));
    const n = t.style.transform;
    (!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
    const a = le(t, "data-junction-drag-handle", t);
    let r = !1, o = 0, i = 0, u = 0, s = 0;
    const p = (d) => {
      d.button === 0 && (d.target !== a && !a.contains(d.target) || (r = !0, o = d.clientX, i = d.clientY, u = x(t, "--jx-drag-x"), s = x(t, "--jx-drag-y"), a.setPointerCapture(d.pointerId), t.dispatchEvent(new CustomEvent(U.start, {
        bubbles: !0,
        detail: {
          host: t,
          clientX: d.clientX,
          clientY: d.clientY,
          baseX: u,
          baseY: s
        }
      }))));
    }, y = (d) => {
      if (!r) return;
      const l = d.clientX - o, c = d.clientY - i, f = u + l, Z = s + c;
      N(t, "--jx-drag-x", f), N(t, "--jx-drag-y", Z), t.dispatchEvent(new CustomEvent(U.move, {
        bubbles: !0,
        detail: {
          host: t,
          dx: l,
          dy: c,
          x: f,
          y: Z
        }
      }));
    }, h = (d) => {
      if (r) {
        r = !1;
        try {
          a.releasePointerCapture(d.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(U.end, {
          bubbles: !0,
          detail: {
            host: t,
            x: x(t, "--jx-drag-x"),
            y: x(t, "--jx-drag-y")
          }
        }));
      }
    };
    return g(t, "ui-junction-drag", () => {
      t.style.transform = n;
    }), g(t, "ui-junction-drag", v(a, "pointerdown", p)), g(t, "ui-junction-drag", v(a, "pointermove", y)), g(t, "ui-junction-drag", v(a, "pointerup", h)), g(t, "ui-junction-drag", v(a, "pointercancel", h)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && G(t, "ui-junction-drag"), this;
  }
}, Re = class extends J {
  constructor() {
    super("ui-junction-resize");
  }
  connect(e) {
    const t = e?.deref?.();
    if (!t) return this;
    const n = le(t, "data-junction-resize-handle", t);
    let a = !1, r = 0, o = 0, i = 0, u = 0;
    const s = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), p = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), y = (l) => {
      l.button === 0 && (l.target !== n && !n.contains(l.target) || (a = !0, r = l.clientX, o = l.clientY, i = t.offsetWidth, u = t.offsetHeight, n.setPointerCapture(l.pointerId), t.dispatchEvent(new CustomEvent(I.start, {
        bubbles: !0,
        detail: {
          host: t,
          width: i,
          height: u
        }
      }))));
    }, h = (l) => {
      if (!a) return;
      const c = Math.max(s, i + (l.clientX - r)), f = Math.max(p, u + (l.clientY - o));
      t.style.width = `${c}px`, t.style.height = `${f}px`, t.dispatchEvent(new CustomEvent(I.move, {
        bubbles: !0,
        detail: {
          host: t,
          width: c,
          height: f
        }
      }));
    }, d = (l) => {
      if (a) {
        a = !1;
        try {
          n.releasePointerCapture(l.pointerId);
        } catch {
        }
        t.dispatchEvent(new CustomEvent(I.end, {
          bubbles: !0,
          detail: {
            host: t,
            width: t.offsetWidth,
            height: t.offsetHeight
          }
        }));
      }
    };
    return g(t, "ui-junction-resize", v(n, "pointerdown", y)), g(t, "ui-junction-resize", v(n, "pointermove", h)), g(t, "ui-junction-resize", v(n, "pointerup", d)), g(t, "ui-junction-resize", v(n, "pointercancel", d)), this;
  }
  disconnect(e) {
    const t = e?.deref?.();
    return t && G(t, "ui-junction-resize"), this;
  }
};
new Ne();
new Pe();
new Re();
var ze = "@layer animations{}@function --wavy-step(--step <number>){--angle:calc((var(--step, 0) * 2) * 1rad * pi);--variant:calc(cos(var(--clip-freq, 8) * var(--angle, 0deg)) * 0.5 + 0.5);--adjust:calc(var(--variant, 0) * var(--clip-amplitude, 0));--x:calc(50% + (cos(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));--y:calc(50% + (sin(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));result:var(--x) var(--y)}@layer ux-shapes{.shaped{aspect-ratio:1/1;border-radius:1.5rem;contain:strict;display:flex;overflow:hidden;padding:1.25rem;place-content:center;place-items:center;pointer-events:auto;transition:--background-tone-shift .2s ease-in-out,--icon-color .2s ease-in-out;transition-behavior:allow-discrete;user-select:none;z-index:1}.shaped,.shaped :is(span,ui-icon){block-size:stretch;inline-size:stretch}[data-dragging]{z-index:calc(100 + var(--z-index, 0))!important}:not(.shaped) .shaped[data-shape],:not(.shaped)>[data-shape],:not(:has(.shaped))[data-shape]{aspect-ratio:1/1;contain:strict;overflow:hidden;pointer-events:auto;touch-action:none}:not(.shaped) .shaped[data-shape=square],:not(.shaped)>[data-shape=square],:not(:has(.shaped))[data-shape=square]{--border-radius:var(--radius-md);--clip-path:none}:not(.shaped) .shaped[data-shape=squircle],:not(.shaped)>[data-shape=squircle],:not(:has(.shaped))[data-shape=squircle]{--border-radius:28%;--clip-path:none}:not(.shaped) .shaped[data-shape=circle],:not(.shaped)>[data-shape=circle],:not(:has(.shaped))[data-shape=circle]{--border-radius:50%;--clip-path:none}:not(.shaped) .shaped[data-shape=rounded],:not(.shaped)>[data-shape=rounded],:not(:has(.shaped))[data-shape=rounded]{--border-radius:var(--radius-xl);--clip-path:none}:not(.shaped) .shaped[data-shape=blob],:not(.shaped)>[data-shape=blob],:not(:has(.shaped))[data-shape=blob]{--border-radius:60% 40% 30% 70%/60% 30% 70% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=hexagon],:not(.shaped)>[data-shape=hexagon],:not(:has(.shaped))[data-shape=hexagon]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,93.3% 25%,93.3% 75%,50% 100%,6.7% 75%,6.7% 25%)}:not(.shaped) .shaped[data-shape=diamond],:not(.shaped)>[data-shape=diamond],:not(:has(.shaped))[data-shape=diamond]{--border-radius:0;--clip-path:polygon(round 0.5rem,50% 0%,100% 50%,50% 100%,0% 50%)}:not(.shaped) .shaped[data-shape=star],:not(.shaped)>[data-shape=star],:not(:has(.shaped))[data-shape=star]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 0%,61% 35%,98% 38%,68% 59%,79% 95%,50% 75%,21% 95%,32% 59%,2% 38%,39% 35%)}:not(.shaped) .shaped[data-shape=badge],:not(.shaped)>[data-shape=badge],:not(:has(.shaped))[data-shape=badge]{--border-radius:0;--clip-path:polygon(round 0.375rem,0% 0%,100% 0%,100% 70%,50% 100%,0% 70%)}:not(.shaped) .shaped[data-shape=heart],:not(.shaped)>[data-shape=heart],:not(:has(.shaped))[data-shape=heart]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 100%,10% 65%,0% 45%,0% 30%,5% 15%,18% 3%,35% 0%,50% 12%,65% 0%,82% 3%,95% 15%,100% 30%,100% 45%,90% 65%)}:not(.shaped) .shaped[data-shape=clover],:not(.shaped)>[data-shape=clover],:not(:has(.shaped))[data-shape=clover]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,60% 30%,70% 30%,100% 50%,70% 70%,60% 70%,50% 100%,40% 70%,30% 70%,0% 50%,30% 30%,40% 30%)}:not(.shaped) .shaped[data-shape=flower],:not(.shaped)>[data-shape=flower],:not(:has(.shaped))[data-shape=flower]{--border-radius:0;--clip-path:polygon(round 0.25rem,50% 0%,58% 25%,85% 15%,68% 40%,100% 50%,68% 60%,85% 85%,58% 75%,50% 100%,42% 75%,15% 85%,32% 60%,0% 50%,32% 40%,15% 15%,42% 25%)}:not(.shaped) .shaped[data-shape=triangle],:not(.shaped)>[data-shape=triangle],:not(:has(.shaped))[data-shape=triangle]{--border-radius:0;--clip-path:polygon(round 0.5rem,50% 0%,100% 87%,0% 87%)}:not(.shaped) .shaped[data-shape=pentagon],:not(.shaped)>[data-shape=pentagon],:not(:has(.shaped))[data-shape=pentagon]{--border-radius:0;--clip-path:polygon(round 0.375rem,50% 0%,97.5% 35%,79.5% 95%,20.5% 95%,2.5% 35%)}:not(.shaped) .shaped[data-shape=octagon],:not(.shaped)>[data-shape=octagon],:not(:has(.shaped))[data-shape=octagon]{--border-radius:0;--clip-path:polygon(round 0.25rem,30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)}:not(.shaped) .shaped[data-shape=cross],:not(.shaped)>[data-shape=cross],:not(:has(.shaped))[data-shape=cross]{--border-radius:0;--clip-path:polygon(round 0.375rem,35% 0%,65% 0%,65% 35%,100% 35%,100% 65%,65% 65%,65% 100%,35% 100%,35% 65%,0% 65%,0% 35%,35% 35%)}:not(.shaped) .shaped[data-shape=arrow],:not(.shaped)>[data-shape=arrow],:not(:has(.shaped))[data-shape=arrow]{--border-radius:0;--clip-path:polygon(round 0.375rem,0% 20%,60% 20%,60% 0%,100% 50%,60% 100%,60% 80%,0% 80%)}:not(.shaped) .shaped[data-shape=egg],:not(.shaped)>[data-shape=egg],:not(:has(.shaped))[data-shape=egg]{--border-radius:50% 50% 50% 50%/60% 60% 40% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=tear],:not(.shaped)>[data-shape=tear],:not(:has(.shaped))[data-shape=tear]{--border-radius:50cqmin 50cqmin 5rem 50cqmin;--clip-path:none;border-end-end-radius:5rem;border-end-start-radius:50cqmin;border-start-end-radius:50cqmin;border-start-start-radius:50cqmin}:not(.shaped) .shaped[data-shape=wavy],:not(.shaped)>[data-shape=wavy],:not(:has(.shaped))[data-shape=wavy]{--border-radius:calc(var(--icon-size, 100%) * 0.5)}}";
async function D() {
  try {
    await ce(ze), console.log("[Veela/Core] Core styles loaded");
  } catch (e) {
    console.warn("[Veela/Core] Failed to load core styles:", e);
  }
}
var ke = "@layer ux-animation{}";
async function He() {
  try {
    await ce(ke), console.log("[Veela/Advanced] Advanced styles loaded");
  } catch (e) {
    console.warn("[Veela/Advanced] Failed to load advanced styles:", e);
  }
}
var q = null;
async function $e(e) {
  if (q === e) {
    console.log(`[Veela] Variant '${e}' already loaded`);
    return;
  }
  switch (console.log(`[Veela] Loading variant: ${e}`), e) {
    case "basic":
      await D();
      break;
    case "advanced":
      await D(), await He();
      break;
    default:
      console.warn(`[Veela] Unknown variant: ${e}, using basic`), await D();
      break;
  }
  q = e;
}
function Fe() {
  return q;
}
function Ue(e) {
  return q === e;
}
export {
  $e as default,
  Fe as getLoadedVariant,
  Ue as isVariantLoaded,
  $e as loadVeelaVariant
};
