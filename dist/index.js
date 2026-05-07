import { jsxs as d, jsx as i } from "react/jsx-runtime";
import m, { useState as Z } from "react";
function T(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = T(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function P() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = T(e)) && (n && (n += " "), n += t);
  return n;
}
var A = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, M = m.createContext && /* @__PURE__ */ m.createContext(A), C = ["attr", "size", "title"];
function ee(e, t) {
  if (e == null) return {};
  var r, n, s = te(e, t);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(e);
    for (n = 0; n < p.length; n++) r = p[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
  }
  return s;
}
function te(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function E() {
  return E = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, E.apply(null, arguments);
}
function D(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? D(Object(r), !0).forEach(function(n) {
      re(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function re(e, t, r) {
  return (t = ne(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ne(e) {
  var t = le(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function le(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function K(e) {
  return e && e.map((t, r) => /* @__PURE__ */ m.createElement(t.tag, v({
    key: r
  }, t.attr), K(t.child)));
}
function j(e) {
  return (t) => /* @__PURE__ */ m.createElement(ie, E({
    attr: v({}, e.attr)
  }, t), K(e.child));
}
function ie(e) {
  var t = (r) => {
    var {
      attr: n,
      size: s,
      title: p
    } = e, f = ee(e, C), x = s || r.size || "1em", u;
    return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ m.createElement("svg", E({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, f, {
      className: u,
      style: v(v({
        color: e.color || r.color
      }, r.style), e.style),
      height: x,
      width: x,
      xmlns: "http://www.w3.org/2000/svg"
    }), p && /* @__PURE__ */ m.createElement("title", null, p), e.children);
  };
  return M !== void 0 ? /* @__PURE__ */ m.createElement(M.Consumer, null, (r) => t(r)) : t(A);
}
function ce(e) {
  return j({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" }, child: [] }] })(e);
}
function se(e) {
  return j({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" }, child: [] }] })(e);
}
function oe(e) {
  return j({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" }, child: [] }] })(e);
}
function ue({
  columns: e,
  values: t,
  isLoading: r = !1,
  emptyMessage: n = "No data found",
  selectedRows: s = [],
  onSelectionChange: p,
  page: f = 1,
  limit: x = 10,
  total: u = t.length,
  onPageChange: o,
  enableSearch: W = !1,
  searchValue: F = "",
  onSearchChange: w,
  enableSorting: B = !1,
  sortBy: S,
  sortDirection: N,
  onSortChange: k,
  enableFiltering: G = !1,
  filters: H = {},
  onFilterChange: g
}) {
  const [U, $] = Z([]), b = p ? s : U, y = p || $, O = Math.max(1, Math.ceil(u / x)), L = f > 1, z = f < O, I = e.length + 1;
  function R(l) {
    const c = l.id;
    return c !== void 0 ? b.some(
      (a) => a.id === c
    ) : b.includes(l);
  }
  function q(l) {
    if (R(l)) {
      const c = l.id;
      y(
        c !== void 0 ? b.filter(
          (a) => a.id !== c
        ) : b.filter((a) => a !== l)
      );
    } else
      y([...b, l]);
  }
  function J() {
    b.length === t.length ? y([]) : y(t);
  }
  function Q(l) {
    if (!B || !k) return;
    let c;
    S !== l ? c = "asc" : N === "asc" ? c = "desc" : c = void 0, k(l, c);
  }
  const V = u === 0 ? 0 : (f - 1) * x + 1, X = Math.min(f * x, u);
  return /* @__PURE__ */ d("div", { className: "w-full overflow-hidden rounded-2xl  border border-[#E5E7EB] bg-white", children: [
    W && /* @__PURE__ */ i("div", { className: "border-b border-[#E5E7EB] p-4", children: /* @__PURE__ */ i(
      "input",
      {
        value: F,
        onChange: (l) => w == null ? void 0 : w(l.target.value),
        placeholder: "Search...",
        className: "w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "overflow-x-auto", children: /* @__PURE__ */ d("table", { className: "w-full border-collapse text-sm", children: [
      /* @__PURE__ */ d("thead", { children: [
        /* @__PURE__ */ d("tr", { className: "bg-white", children: [
          /* @__PURE__ */ i("th", { className: "w-12 border-t border-[#E5E7EB] px-[10px] py-[10px] text-center", children: /* @__PURE__ */ i(
            "input",
            {
              type: "checkbox",
              checked: t.length > 0 && b.length === t.length,
              onChange: J
            }
          ) }),
          e.map((l) => {
            const c = S === l.key, a = B && l.sortable !== !1;
            return /* @__PURE__ */ i(
              "th",
              {
                onClick: () => a && Q(l.key),
                className: P(
                  "border-t border-[#E5E7EB] px-[10px] py-[10px] align-middle text-center font-medium text-[12px] leading-[13.48px] tracking-[0.51px] uppercase text-[#6B7280]",
                  a && "cursor-pointer select-none hover:bg-slate-800",
                  l.headerClassName
                ),
                children: /* @__PURE__ */ d("div", { className: "flex items-center justify-center gap-2 whitespace-nowrap", children: [
                  l.label,
                  a && (c && N === "asc" ? /* @__PURE__ */ i(se, {}) : c && N === "desc" ? /* @__PURE__ */ i(oe, {}) : /* @__PURE__ */ i(ce, {}))
                ] })
              },
              String(l.key)
            );
          })
        ] }),
        G && /* @__PURE__ */ d("tr", { className: "bg-slate-50", children: [
          /* @__PURE__ */ i("th", { className: "border-[#E5E7EB]" }),
          e.map((l) => /* @__PURE__ */ i(
            "th",
            {
              className: "border-[#E5E7EB] px-[10px] py-[10px]",
              children: l.filterable !== !1 ? /* @__PURE__ */ i(
                "input",
                {
                  value: String(H[l.key] ?? ""),
                  onChange: (c) => g == null ? void 0 : g(l.key, c.target.value),
                  placeholder: `Filter ${l.label}`,
                  className: "w-full rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-sm font-normal outline-none"
                }
              ) : null
            },
            String(l.key)
          ))
        ] })
      ] }),
      /* @__PURE__ */ i("tbody", { children: r ? /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i(
        "td",
        {
          colSpan: I,
          className: "px-[10px] py-6 text-center text-slate-800",
          children: "Loading..."
        }
      ) }) : t.length === 0 ? /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i(
        "td",
        {
          colSpan: I,
          className: "px-[10px] py-6 text-center text-slate-800",
          children: n
        }
      ) }) : t.map((l, c) => {
        const a = l.id, Y = a !== void 0 ? String(a) : c;
        return /* @__PURE__ */ d(
          "tr",
          {
            className: "bg-white transition-colors hover:bg-slate-50",
            children: [
              /* @__PURE__ */ i("td", { className: "border-t border-[#E5E7EB] px-[10px] py-[8px] text-center", children: /* @__PURE__ */ i(
                "input",
                {
                  type: "checkbox",
                  checked: R(l),
                  onChange: () => q(l)
                }
              ) }),
              e.map((h) => {
                const _ = l[h.key];
                return /* @__PURE__ */ i(
                  "td",
                  {
                    className: P(
                      "border-t border-[#E5E7EB] px-[10px] py-[8px] text-center text-[12px] text-[#1E293B]",
                      h.className
                    ),
                    children: h.render ? h.render(_, l) : String(_ ?? "")
                  },
                  String(h.key)
                );
              })
            ]
          },
          Y
        );
      }) })
    ] }) }),
    u > 0 && /* @__PURE__ */ d("div", { className: "relative flex items-center justify-between border-t border-[#E5E7EB] px-4 py-3", children: [
      /* @__PURE__ */ d("p", { className: "text-sm ", children: [
        "Showing",
        " ",
        /* @__PURE__ */ d("span", { className: "font-bold text-[#111827]", children: [
          V,
          "–",
          X
        ] }),
        " ",
        "of",
        " ",
        /* @__PURE__ */ i("span", { className: "font-bold text-[#111827]", children: u.toLocaleString() }),
        " ",
        "documents"
      ] }),
      /* @__PURE__ */ d("div", { className: "absolute left-1/2 flex -translate-x-1/2 items-center gap-2", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: !L,
            onClick: () => o == null ? void 0 : o(1),
            className: "rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40",
            children: "<<"
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: !L,
            onClick: () => o == null ? void 0 : o(f - 1),
            className: "rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40",
            children: "<"
          }
        ),
        /* @__PURE__ */ d("p", { className: "text-sm text-[#6B7280]", children: [
          "Page",
          " ",
          /* @__PURE__ */ i("span", { className: "font-semibold text-[#111827]", children: f }),
          " ",
          "of ",
          O
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: !z,
            onClick: () => o == null ? void 0 : o(f + 1),
            className: "rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40",
            children: ">"
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: !z,
            onClick: () => o == null ? void 0 : o(O),
            className: "rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40",
            children: ">>"
          }
        )
      ] })
    ] })
  ] });
}
export {
  ue as TableContainer
};
