import { jsxs as o, jsx as i } from "react/jsx-runtime";
import b from "react";
function D(e) {
  var t, r, l = "";
  if (typeof e == "string" || typeof e == "number") l += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var c = e.length;
    for (t = 0; t < c; t++) e[t] && (r = D(e[t])) && (l && (l += " "), l += r);
  } else for (r in e) e[r] && (l && (l += " "), l += r);
  return l;
}
function _() {
  for (var e, t, r = 0, l = "", c = arguments.length; r < c; r++) (e = arguments[r]) && (t = D(e)) && (l && (l += " "), l += t);
  return l;
}
var I = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, P = b.createContext && /* @__PURE__ */ b.createContext(I), q = ["attr", "size", "title"];
function F(e, t) {
  if (e == null) return {};
  var r, l, c = J(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (l = 0; l < a.length; l++) r = a[l], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
  }
  return c;
}
function J(e, t) {
  if (e == null) return {};
  var r = {};
  for (var l in e) if ({}.hasOwnProperty.call(e, l)) {
    if (t.indexOf(l) !== -1) continue;
    r[l] = e[l];
  }
  return r;
}
function m() {
  return m = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var l in r) ({}).hasOwnProperty.call(r, l) && (e[l] = r[l]);
    }
    return e;
  }, m.apply(null, arguments);
}
function M(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? M(Object(r), !0).forEach(function(l) {
      Q(e, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return e;
}
function Q(e, t, r) {
  return (t = R(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R(e) {
  var t = V(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function V(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(e, t);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function A(e) {
  return e && e.map((t, r) => /* @__PURE__ */ b.createElement(t.tag, y({
    key: r
  }, t.attr), A(t.child)));
}
function w(e) {
  return (t) => /* @__PURE__ */ b.createElement(X, m({
    attr: y({}, e.attr)
  }, t), A(e.child));
}
function X(e) {
  var t = (r) => {
    var {
      attr: l,
      size: c,
      title: a
    } = e, p = F(e, q), x = c || r.size || "1em", u;
    return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ b.createElement("svg", m({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, l, p, {
      className: u,
      style: y(y({
        color: e.color || r.color
      }, r.style), e.style),
      height: x,
      width: x,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ b.createElement("title", null, a), e.children);
  };
  return P !== void 0 ? /* @__PURE__ */ b.createElement(P.Consumer, null, (r) => t(r)) : t(I);
}
function Y(e) {
  return w({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" }, child: [] }] })(e);
}
function Z(e) {
  return w({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z" }, child: [] }] })(e);
}
function C(e) {
  return w({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" }, child: [] }] })(e);
}
function re({
  columns: e,
  values: t,
  isLoading: r = !1,
  emptyMessage: l = "No data found",
  selectedRows: c = [],
  onSelectionChange: a,
  page: p = 1,
  limit: x = 10,
  total: u = t.length,
  onPageChange: s,
  enableSearch: T = !1,
  searchValue: W = "",
  onSearchChange: h,
  enableSorting: O = !1,
  sortBy: B,
  sortDirection: E,
  onSortChange: j,
  enableFiltering: K = !1,
  filters: G = {},
  onFilterChange: v
}) {
  const N = Math.max(1, Math.ceil(u / x)), g = p > 1, k = p < N, S = e.length + 1;
  function L(n) {
    return c.includes(n);
  }
  function H(n) {
    a && (L(n) ? a(c.filter((d) => d !== n)) : a([...c, n]));
  }
  function U() {
    a && (c.length === t.length ? a([]) : a(t));
  }
  function $(n) {
    if (!O || !j) return;
    let d = "asc";
    B === n && E === "asc" && (d = "desc"), j(n, d);
  }
  return /* @__PURE__ */ o("div", { className: "w-full overflow-hidden  border border-[#E5E7EB] bg-white", children: [
    T && /* @__PURE__ */ i("div", { className: "border-b border-[#E5E7EB] p-4", children: /* @__PURE__ */ i(
      "input",
      {
        value: W,
        onChange: (n) => h == null ? void 0 : h(n.target.value),
        placeholder: "Search...",
        className: "w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "overflow-x-auto", children: /* @__PURE__ */ o("table", { className: "w-full border-collapse text-sm", children: [
      /* @__PURE__ */ o("thead", { children: [
        /* @__PURE__ */ o("tr", { className: "bg-white", children: [
          /* @__PURE__ */ i("th", { className: "w-12 border-t border-[#E5E7EB] px-[10px] py-[10px] text-center", children: /* @__PURE__ */ i(
            "input",
            {
              type: "checkbox",
              checked: t.length > 0 && c.length === t.length,
              onChange: U
            }
          ) }),
          e.map((n) => {
            const d = B === n.key, f = O && n.sortable !== !1;
            return /* @__PURE__ */ i(
              "th",
              {
                onClick: () => f && $(n.key),
                className: _(
                  "border-t border-[#E5E7EB] px-[10px] py-[10px] align-middle text-center font-medium text-[12px] leading-[13.48px] tracking-[0.51px] uppercase text-[#6B7280]",
                  f && "cursor-pointer select-none hover:bg-slate-50",
                  n.headerClassName
                ),
                children: /* @__PURE__ */ o("div", { className: "flex items-center justify-center gap-2 whitespace-nowrap", children: [
                  n.label,
                  f && (d && E === "asc" ? /* @__PURE__ */ i(Z, {}) : d && E === "desc" ? /* @__PURE__ */ i(C, {}) : /* @__PURE__ */ i(Y, {}))
                ] })
              },
              String(n.key)
            );
          })
        ] }),
        K && /* @__PURE__ */ o("tr", { className: "bg-slate-50", children: [
          /* @__PURE__ */ i("th", { className: "border-[#E5E7EB]" }),
          e.map((n) => /* @__PURE__ */ i(
            "th",
            {
              className: "border-[#E5E7EB] px-[10px] py-[10px]",
              children: n.filterable !== !1 ? /* @__PURE__ */ i(
                "input",
                {
                  value: String(G[n.key] ?? ""),
                  onChange: (d) => v == null ? void 0 : v(
                    n.key,
                    d.target.value
                  ),
                  placeholder: `Filter ${n.label}`,
                  className: "w-full rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-sm font-normal outline-none"
                }
              ) : null
            },
            String(n.key)
          ))
        ] })
      ] }),
      /* @__PURE__ */ i("tbody", { children: r ? /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i(
        "td",
        {
          colSpan: S,
          className: "px-[10px] py-6 text-center text-slate-800",
          children: "Loading..."
        }
      ) }) : t.length === 0 ? /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i(
        "td",
        {
          colSpan: S,
          className: "px-[10px] py-6 text-center text-slate-800",
          children: l
        }
      ) }) : t.map((n, d) => /* @__PURE__ */ o(
        "tr",
        {
          className: "bg-white transition-colors hover:bg-slate-50",
          children: [
            /* @__PURE__ */ i("td", { className: "border-t border-[#E5E7EB] px-[10px] py-[8px] text-center", children: /* @__PURE__ */ i(
              "input",
              {
                type: "checkbox",
                checked: L(n),
                onChange: () => H(n)
              }
            ) }),
            e.map((f) => {
              const z = n[f.key];
              return /* @__PURE__ */ i(
                "td",
                {
                  className: _(
                    "border-t border-[#E5E7EB] px-[10px] py-[8px] text-center text-[12px] text-[#1E293B]",
                    f.className
                  ),
                  children: f.render ? f.render(z, n) : String(z ?? "")
                },
                String(f.key)
              );
            })
          ]
        },
        d
      )) })
    ] }) }),
    u > 0 && /* @__PURE__ */ o("div", { className: "relative flex items-center border-t border-[#E5E7EB] px-4 py-3", children: [
      /* @__PURE__ */ o("p", { className: "text-sm text-[#6B7280]", children: [
        "Showing",
        " ",
        /* @__PURE__ */ o("span", { className: "font-bold text-[#111827]", children: [
          (p - 1) * x + 1,
          "–",
          Math.min(p * x, u)
        ] }),
        " ",
        "of",
        " ",
        /* @__PURE__ */ i("span", { className: "font-bold text-[#111827]", children: u.toLocaleString() }),
        " ",
        "documents"
      ] }),
      /* @__PURE__ */ o("div", { className: "absolute left-1/2 flex -translate-x-1/2 items-center gap-2", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: !g,
            onClick: () => s == null ? void 0 : s(1),
            className: "rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40",
            children: "<<"
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: !g,
            onClick: () => s == null ? void 0 : s(p - 1),
            className: "rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40",
            children: "<"
          }
        ),
        /* @__PURE__ */ o("p", { className: "text-sm text-[#6B7280]", children: [
          "Page",
          " ",
          /* @__PURE__ */ i("span", { className: "font-bold text-[#111827]", children: p }),
          " ",
          "of",
          " ",
          /* @__PURE__ */ i("span", { className: "font-bold text-[#111827]", children: N })
        ] }),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: !k,
            onClick: () => s == null ? void 0 : s(p + 1),
            className: "rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40",
            children: ">"
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: !k,
            onClick: () => s == null ? void 0 : s(N),
            className: "rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40",
            children: ">>"
          }
        )
      ] })
    ] })
  ] });
}
export {
  re as TableContainer
};
