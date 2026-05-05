import { jsxs as o, jsx as a } from "react/jsx-runtime";
import m from "react";
function D(e) {
  var t, r, l = "";
  if (typeof e == "string" || typeof e == "number") l += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = D(e[t])) && (l && (l += " "), l += r);
  } else for (r in e) e[r] && (l && (l += " "), l += r);
  return l;
}
function z() {
  for (var e, t, r = 0, l = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = D(e)) && (l && (l += " "), l += t);
  return l;
}
var M = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, L = m.createContext && /* @__PURE__ */ m.createContext(M), q = ["attr", "size", "title"];
function F(e, t) {
  if (e == null) return {};
  var r, l, i = J(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (l = 0; l < s.length; l++) r = s[l], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
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
function h() {
  return h = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var l in r) ({}).hasOwnProperty.call(r, l) && (e[l] = r[l]);
    }
    return e;
  }, h.apply(null, arguments);
}
function _(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _(Object(r), !0).forEach(function(l) {
      Q(e, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function(l) {
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
function I(e) {
  return e && e.map((t, r) => /* @__PURE__ */ m.createElement(t.tag, y({
    key: r
  }, t.attr), I(t.child)));
}
function w(e) {
  return (t) => /* @__PURE__ */ m.createElement(X, h({
    attr: y({}, e.attr)
  }, t), I(e.child));
}
function X(e) {
  var t = (r) => {
    var {
      attr: l,
      size: i,
      title: s
    } = e, u = F(e, q), b = i || r.size || "1em", f;
    return r.className && (f = r.className), e.className && (f = (f ? f + " " : "") + e.className), /* @__PURE__ */ m.createElement("svg", h({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, l, u, {
      className: f,
      style: y(y({
        color: e.color || r.color
      }, r.style), e.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ m.createElement("title", null, s), e.children);
  };
  return L !== void 0 ? /* @__PURE__ */ m.createElement(L.Consumer, null, (r) => t(r)) : t(M);
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
  selectedRows: i = [],
  onSelectionChange: s,
  page: u = 1,
  limit: b = 10,
  total: f = t.length,
  onPageChange: p,
  enableSearch: A = !1,
  searchValue: B = "",
  onSearchChange: x,
  enableSorting: N = !1,
  sortBy: O,
  sortDirection: v,
  onSortChange: j,
  enableFiltering: T = !1,
  filters: W = {},
  onFilterChange: g
}) {
  const k = Math.max(1, Math.ceil(f / b)), K = u > 1, G = u < k, P = e.length + 1;
  function S(n) {
    return i.includes(n);
  }
  function H(n) {
    s && (S(n) ? s(i.filter((c) => c !== n)) : s([...i, n]));
  }
  function U() {
    s && (i.length === t.length ? s([]) : s(t));
  }
  function $(n) {
    if (!N || !j) return;
    let c = "asc";
    O === n && v === "asc" && (c = "desc"), j(n, c);
  }
  return /* @__PURE__ */ o("div", { className: "w-full overflow-hidden rounded-2xl border bg-white shadow-sm", children: [
    A && /* @__PURE__ */ a("div", { className: "border-b p-4", children: /* @__PURE__ */ a(
      "input",
      {
        value: B,
        onChange: (n) => x == null ? void 0 : x(n.target.value),
        placeholder: "Search...",
        className: "w-full rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
      }
    ) }),
    /* @__PURE__ */ a("div", { className: "overflow-x-auto", children: /* @__PURE__ */ o("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ o("thead", { className: "border-b", children: [
        /* @__PURE__ */ o("tr", { className: "bg-white", children: [
          /* @__PURE__ */ a("th", { className: "w-12 px-4 py-3.5 text-left", children: /* @__PURE__ */ a(
            "input",
            {
              type: "checkbox",
              checked: t.length > 0 && i.length === t.length,
              onChange: U
            }
          ) }),
          e.map((n) => {
            const c = O === n.key, d = N && n.sortable !== !1;
            return /* @__PURE__ */ a(
              "th",
              {
                onClick: () => d && $(n.key),
                className: z(
                  "px-4 py-3.5 text-left font-semibold text-slate-700",
                  d && "cursor-pointer select-none hover:bg-slate-100",
                  n.headerClassName
                ),
                children: /* @__PURE__ */ o("div", { className: "flex items-center gap-2 whitespace-nowrap", children: [
                  n.label,
                  d && (c && v === "asc" ? /* @__PURE__ */ a(Z, {}) : c && v === "desc" ? /* @__PURE__ */ a(C, {}) : /* @__PURE__ */ a(Y, {}))
                ] })
              },
              String(n.key)
            );
          })
        ] }),
        T && /* @__PURE__ */ o("tr", { className: "bg-slate-50", children: [
          /* @__PURE__ */ a("th", {}),
          e.map((n) => /* @__PURE__ */ a("th", { className: "px-4 py-2", children: n.filterable !== !1 ? /* @__PURE__ */ a(
            "input",
            {
              value: String(W[n.key] ?? ""),
              onChange: (c) => g == null ? void 0 : g(n.key, c.target.value),
              placeholder: `Filter ${n.label}`,
              className: "w-full rounded-lg border px-3 py-1.5 text-sm font-normal outline-none"
            }
          ) : null }, String(n.key)))
        ] })
      ] }),
      /* @__PURE__ */ a("tbody", { className: "divide-y", children: r ? /* @__PURE__ */ a("tr", { children: /* @__PURE__ */ a("td", { colSpan: P, className: "px-4 py-6 text-center text-slate-500", children: "Loading..." }) }) : t.length === 0 ? /* @__PURE__ */ a("tr", { children: /* @__PURE__ */ a("td", { colSpan: P, className: "px-4 py-6 text-center text-slate-500", children: l }) }) : t.map((n, c) => /* @__PURE__ */ o(
        "tr",
        {
          className: "transition-colors odd:bg-slate-50 even:bg-white hover:bg-slate-100",
          children: [
            /* @__PURE__ */ a("td", { className: "px-4 py-3", children: /* @__PURE__ */ a(
              "input",
              {
                type: "checkbox",
                checked: S(n),
                onChange: () => H(n)
              }
            ) }),
            e.map((d) => {
              const E = n[d.key];
              return /* @__PURE__ */ a(
                "td",
                {
                  className: z(
                    "px-4 py-3 text-left text-slate-600",
                    d.className
                  ),
                  children: d.render ? d.render(E, n) : String(E ?? "")
                },
                String(d.key)
              );
            })
          ]
        },
        c
      )) })
    ] }) }),
    /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ o("p", { className: "text-center text-sm text-slate-600 sm:text-left", children: [
        "Page ",
        u,
        " of ",
        k
      ] }),
      /* @__PURE__ */ o("div", { className: "flex w-full flex-col gap-2 sm:w-auto sm:flex-row", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            disabled: !K,
            onClick: () => p == null ? void 0 : p(u - 1),
            className: "w-full rounded-lg border px-3 py-2 text-sm hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            disabled: !G,
            onClick: () => p == null ? void 0 : p(u + 1),
            className: "w-full rounded-lg border px-3 py-2 text-sm hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
}
export {
  re as TableContainer
};
