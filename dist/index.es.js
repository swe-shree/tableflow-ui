import Fe, { useState as ie, useMemo as dr } from "react";
var oe = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function vr() {
  if (ke)
    return L;
  ke = 1;
  var O = Fe, R = Symbol.for("react.element"), P = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, k = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(g, v, m) {
    var p, h = {}, _ = null, F = null;
    m !== void 0 && (_ = "" + m), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (F = v.ref);
    for (p in v)
      S.call(v, p) && !D.hasOwnProperty(p) && (h[p] = v[p]);
    if (g && g.defaultProps)
      for (p in v = g.defaultProps, v)
        h[p] === void 0 && (h[p] = v[p]);
    return { $$typeof: R, type: g, key: _, ref: F, props: h, _owner: k.current };
  }
  return L.Fragment = P, L.jsx = j, L.jsxs = j, L;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function pr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var O = Fe, R = Symbol.for("react.element"), P = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), $ = Symbol.iterator, A = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[A];
      return typeof r == "function" ? r : null;
    }
    var s = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        T("error", e, t);
      }
    }
    function T(e, r, t) {
      {
        var n = s.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var K = !1, B = !1, Ae = !1, Ie = !1, Ne = !1, se;
    se = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === S || e === D || Ne || e === k || e === m || e === p || Ie || e === F || K || B || Ae || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === h || e.$$typeof === j || e.$$typeof === g || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case S:
          return "Fragment";
        case P:
          return "Portal";
        case D:
          return "Profiler";
        case k:
          return "StrictMode";
        case m:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ue(r) + ".Consumer";
          case j:
            var t = e;
            return ue(t._context) + ".Provider";
          case v:
            return We(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case _: {
            var o = e, u = o._payload, i = o._init;
            try {
              return x(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, W = 0, le, ce, fe, de, ve, pe, he;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ye() {
      {
        if (W === 0) {
          le = console.log, ce = console.info, fe = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Me() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: le
            }),
            info: C({}, e, {
              value: ce
            }),
            warn: C({}, e, {
              value: fe
            }),
            error: C({}, e, {
              value: de
            }),
            group: C({}, e, {
              value: ve
            }),
            groupCollapsed: C({}, e, {
              value: pe
            }),
            groupEnd: C({}, e, {
              value: he
            })
          });
        }
        W < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = s.ReactCurrentDispatcher, H;
    function J(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, q;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Le();
    }
    function ge(e, r) {
      if (!e || Z)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = z.current, z.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (y) {
              n = y;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), b = n.stack.split(`
`), c = a.length - 1, f = b.length - 1; c >= 1 && f >= 0 && a[c] !== b[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== b[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== b[f]) {
                    var E = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, E), E;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Z = !1, z.current = u, Me(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", w = N ? J(N) : "";
      return typeof e == "function" && q.set(e, w), w;
    }
    function Ve(e, r, t) {
      return ge(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ue(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case m:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ve(e.render);
          case h:
            return G(e.type, r, t);
          case _: {
            var n = e, o = n._payload, u = n._init;
            try {
              return G(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ye = {}, me = s.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, o) {
      {
        var u = Function.call.bind(Y);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (X(o), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), X(null)), a instanceof Error && !(a.message in ye) && (ye[a.message] = !0, X(o), l("Failed %s type: %s", t, a.message), X(null));
          }
      }
    }
    var Be = Array.isArray;
    function Q(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function _e(e) {
      if (qe(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Ee(e);
    }
    var M = s.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, je, ee;
    ee = {};
    function Xe(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = x(M.current.type);
        ee[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(M.current.type), e.ref), ee[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Re || (Re = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          je || (je = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, b = null;
        t !== void 0 && (_e(t), a = "" + t), ze(r) && (_e(r.key), a = "" + r.key), Xe(r) && (b = r.ref, He(r, o));
        for (u in r)
          Y.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            i[u] === void 0 && (i[u] = c[u]);
        }
        if (a || b) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, f), b && Qe(i, f);
        }
        return er(e, a, b, o, n, M.current, i);
      }
    }
    var re = s.ReactCurrentOwner, Te = s.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function xe() {
      {
        if (re.current) {
          var e = x(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Se = {};
    function nr(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + x(e._owner.type) + "."), I(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Oe(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = U(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              ne(i.value) && Oe(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var o = x(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Ce = {};
    function we(e, r, t, n, o, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = tr(o);
          b ? a += b : a += xe();
          var c;
          e === null ? c = "null" : Q(e) ? c = "array" : e !== void 0 && e.$$typeof === R ? (c = "<" + (x(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = rr(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (Q(E)) {
                for (var N = 0; N < E.length; N++)
                  Pe(E[N], e);
                Object.freeze && Object.freeze(E);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(E, e);
        }
        if (Y.call(r, "key")) {
          var w = x(e), y = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), ae = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[w + ae]) {
            var cr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, w, cr, w), Ce[w + ae] = !0;
          }
        }
        return e === S ? ir(f) : ar(f), f;
      }
    }
    function or(e, r, t) {
      return we(e, r, t, !0);
    }
    function sr(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = sr, lr = or;
    V.Fragment = S, V.jsx = ur, V.jsxs = lr;
  }()), V;
}
process.env.NODE_ENV === "production" ? oe.exports = vr() : oe.exports = pr();
var d = oe.exports;
function br({
  data: O,
  columns: R,
  pageSize: P = 10,
  loading: S = !1,
  emptyMessage: k = "No data available",
  className: D = "",
  onRowClick: j
}) {
  const [g, v] = ie(null), [m, p] = ie(null), [h, _] = ie(1), F = (s) => {
    g === s ? (p((l) => l === "asc" ? "desc" : l === "desc" ? null : "asc"), m === "desc" && v(null)) : (v(s), p("asc")), _(1);
  }, $ = dr(() => !g || !m ? O : [...O].sort((s, l) => {
    const T = s[g], K = l[g];
    if (T === K)
      return 0;
    const B = T < K ? -1 : 1;
    return m === "asc" ? B : -B;
  }), [O, g, m]), A = Math.ceil($.length / P), U = $.slice((h - 1) * P, h * P);
  return /* @__PURE__ */ d.jsxs("div", { className: `tableflow-wrapper ${D}`, children: [
    /* @__PURE__ */ d.jsx("div", { className: "tableflow-scroll", children: /* @__PURE__ */ d.jsxs("table", { className: "tableflow-table", children: [
      /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsx("tr", { children: R.map((s) => /* @__PURE__ */ d.jsxs(
        "th",
        {
          style: { width: s.width },
          className: s.sortable ? "sortable" : "",
          onClick: () => s.sortable && F(s.key),
          children: [
            /* @__PURE__ */ d.jsx("span", { children: s.header }),
            s.sortable && /* @__PURE__ */ d.jsx("span", { className: "sort-icon", children: g === s.key ? m === "asc" ? " ↑" : " ↓" : " ↕" })
          ]
        },
        String(s.key)
      )) }) }),
      /* @__PURE__ */ d.jsx("tbody", { children: S ? /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: R.length, className: "center-cell", children: "Loading..." }) }) : U.length === 0 ? /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: R.length, className: "center-cell", children: k }) }) : U.map((s, l) => /* @__PURE__ */ d.jsx(
        "tr",
        {
          onClick: () => j == null ? void 0 : j(s),
          className: j ? "clickable" : "",
          children: R.map((T) => /* @__PURE__ */ d.jsx("td", { children: T.render ? T.render(s[T.key], s) : String(s[T.key] ?? "") }, String(T.key)))
        },
        l
      )) })
    ] }) }),
    A > 1 && /* @__PURE__ */ d.jsxs("div", { className: "tableflow-pagination", children: [
      /* @__PURE__ */ d.jsx("button", { onClick: () => _((s) => Math.max(1, s - 1)), disabled: h === 1, children: "Previous" }),
      /* @__PURE__ */ d.jsxs("span", { children: [
        "Page ",
        h,
        " of ",
        A
      ] }),
      /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => _((s) => Math.min(A, s + 1)),
          disabled: h === A,
          children: "Next"
        }
      )
    ] })
  ] });
}
export {
  br as DataTable
};
