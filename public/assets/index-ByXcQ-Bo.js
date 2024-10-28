function zf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Bf = { exports: {} },
  ol = {},
  jf = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ni = Symbol.for("react.element"),
  Em = Symbol.for("react.portal"),
  Sm = Symbol.for("react.fragment"),
  _m = Symbol.for("react.strict_mode"),
  xm = Symbol.for("react.profiler"),
  km = Symbol.for("react.provider"),
  Cm = Symbol.for("react.context"),
  Rm = Symbol.for("react.forward_ref"),
  Tm = Symbol.for("react.suspense"),
  Pm = Symbol.for("react.memo"),
  Nm = Symbol.for("react.lazy"),
  qu = Symbol.iterator;
function Am(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qu && e[qu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var If = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Uf = Object.assign,
  bf = {};
function Cr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bf),
    (this.updater = n || If);
}
Cr.prototype.isReactComponent = {};
Cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vf() {}
Vf.prototype = Cr.prototype;
function Ss(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bf),
    (this.updater = n || If);
}
var _s = (Ss.prototype = new Vf());
_s.constructor = Ss;
Uf(_s, Cr.prototype);
_s.isPureReactComponent = !0;
var Yu = Array.isArray,
  $f = Object.prototype.hasOwnProperty,
  xs = { current: null },
  Hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      $f.call(t, r) && !Hf.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ni,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: xs.current,
  };
}
function Lm(e, t) {
  return {
    $$typeof: Ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ks(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ni;
}
function Fm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Xu = /\/+/g;
function Dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fm("" + e.key)
    : t.toString(36);
}
function uo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ni:
          case Em:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Dl(l, 0) : r),
      Yu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Xu, "$&/") + "/"),
          uo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ks(i) &&
            (i = Lm(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Xu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Yu(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + Dl(o, a);
      l += uo(o, t, n, s, i);
    }
  else if (((s = Am(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Dl(o, a++)), (l += uo(o, t, n, s, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    uo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Om(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Qe = { current: null },
  co = { transition: null },
  Dm = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: co,
    ReactCurrentOwner: xs,
  };
function Qf() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Vi,
  forEach: function (e, t, n) {
    Vi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ks(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Cr;
q.Fragment = Sm;
q.Profiler = xm;
q.PureComponent = Ss;
q.StrictMode = _m;
q.Suspense = Tm;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dm;
q.act = Qf;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Uf({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = xs.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      $f.call(t, s) &&
        !Hf.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ni, type: e.type, key: i, ref: o, props: r, _owner: l };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Cm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: km, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Wf;
q.createFactory = function (e) {
  var t = Wf.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: Rm, render: e };
};
q.isValidElement = ks;
q.lazy = function (e) {
  return { $$typeof: Nm, _payload: { _status: -1, _result: e }, _init: Om };
};
q.memo = function (e, t) {
  return { $$typeof: Pm, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = co.transition;
  co.transition = {};
  try {
    e();
  } finally {
    co.transition = t;
  }
};
q.unstable_act = Qf;
q.useCallback = function (e, t) {
  return Qe.current.useCallback(e, t);
};
q.useContext = function (e) {
  return Qe.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return Qe.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return Qe.current.useEffect(e, t);
};
q.useId = function () {
  return Qe.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return Qe.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return Qe.current.useRef(e);
};
q.useState = function (e) {
  return Qe.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return Qe.current.useTransition();
};
q.version = "18.3.1";
jf.exports = q;
var R = jf.exports;
const Mm = Un(R),
  zm = zf({ __proto__: null, default: Mm }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm = R,
  jm = Symbol.for("react.element"),
  Im = Symbol.for("react.fragment"),
  Um = Object.prototype.hasOwnProperty,
  bm = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Um.call(t, r) && !Vm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: jm,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: bm.current,
  };
}
ol.Fragment = Im;
ol.jsx = Kf;
ol.jsxs = Kf;
Bf.exports = ol;
var Q = Bf.exports,
  qf = { exports: {} },
  ot = {},
  Yf = { exports: {} },
  Xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, V) {
    var $ = L.length;
    L.push(V);
    e: for (; 0 < $; ) {
      var te = ($ - 1) >>> 1,
        se = L[te];
      if (0 < i(se, V)) (L[te] = V), (L[$] = se), ($ = te);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var V = L[0],
      $ = L.pop();
    if ($ !== V) {
      L[0] = $;
      e: for (var te = 0, se = L.length, Ct = se >>> 1; te < Ct; ) {
        var Oe = 2 * (te + 1) - 1,
          pt = L[Oe],
          Ve = Oe + 1,
          Ot = L[Ve];
        if (0 > i(pt, $))
          Ve < se && 0 > i(Ot, pt)
            ? ((L[te] = Ot), (L[Ve] = $), (te = Ve))
            : ((L[te] = pt), (L[Oe] = $), (te = Oe));
        else if (Ve < se && 0 > i(Ot, $)) (L[te] = Ot), (L[Ve] = $), (te = Ve);
        else break e;
      }
    }
    return V;
  }
  function i(L, V) {
    var $ = L.sortIndex - V.sortIndex;
    return $ !== 0 ? $ : L.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    p = 3,
    v = !1,
    w = !1,
    S = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(L) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= L)
        r(u), (V.sortIndex = V.expirationTime), t(s, V);
      else break;
      V = n(u);
    }
  }
  function x(L) {
    if (((S = !1), y(L), !w))
      if (n(s) !== null) (w = !0), Kt(A);
      else {
        var V = n(u);
        V !== null && Se(x, V.startTime - L);
      }
  }
  function A(L, V) {
    (w = !1), S && ((S = !1), h(k), (k = -1)), (v = !0);
    var $ = p;
    try {
      for (
        y(V), f = n(s);
        f !== null && (!(f.expirationTime > V) || (L && !ie()));

      ) {
        var te = f.callback;
        if (typeof te == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var se = te(f.expirationTime <= V);
          (V = e.unstable_now()),
            typeof se == "function" ? (f.callback = se) : f === n(s) && r(s),
            y(V);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var Ct = !0;
      else {
        var Oe = n(u);
        Oe !== null && Se(x, Oe.startTime - V), (Ct = !1);
      }
      return Ct;
    } finally {
      (f = null), (p = $), (v = !1);
    }
  }
  var m = !1,
    N = null,
    k = -1,
    z = 5,
    j = -1;
  function ie() {
    return !(e.unstable_now() - j < z);
  }
  function he() {
    if (N !== null) {
      var L = e.unstable_now();
      j = L;
      var V = !0;
      try {
        V = N(!0, L);
      } finally {
        V ? xe() : ((m = !1), (N = null));
      }
    } else m = !1;
  }
  var xe;
  if (typeof d == "function")
    xe = function () {
      d(he);
    };
  else if (typeof MessageChannel < "u") {
    var ke = new MessageChannel(),
      Qt = ke.port2;
    (ke.port1.onmessage = he),
      (xe = function () {
        Qt.postMessage(null);
      });
  } else
    xe = function () {
      P(he, 0);
    };
  function Kt(L) {
    (N = L), m || ((m = !0), xe());
  }
  function Se(L, V) {
    k = P(function () {
      L(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Kt(A));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (L) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = p;
      }
      var $ = p;
      p = V;
      try {
        return L();
      } finally {
        p = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, V) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var $ = p;
      p = L;
      try {
        return V();
      } finally {
        p = $;
      }
    }),
    (e.unstable_scheduleCallback = function (L, V, $) {
      var te = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? te + $ : te))
          : ($ = te),
        L)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = $ + se),
        (L = {
          id: c++,
          callback: V,
          priorityLevel: L,
          startTime: $,
          expirationTime: se,
          sortIndex: -1,
        }),
        $ > te
          ? ((L.sortIndex = $),
            t(u, L),
            n(s) === null &&
              L === n(u) &&
              (S ? (h(k), (k = -1)) : (S = !0), Se(x, $ - te)))
          : ((L.sortIndex = se), t(s, L), w || v || ((w = !0), Kt(A))),
        L
      );
    }),
    (e.unstable_shouldYield = ie),
    (e.unstable_wrapCallback = function (L) {
      var V = p;
      return function () {
        var $ = p;
        p = V;
        try {
          return L.apply(this, arguments);
        } finally {
          p = $;
        }
      };
    });
})(Xf);
Yf.exports = Xf;
var $m = Yf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hm = R,
  it = $m;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gf = new Set(),
  ci = {};
function bn(e, t) {
  vr(e, t), vr(e + "Capture", t);
}
function vr(e, t) {
  for (ci[e] = t, e = 0; e < t.length; e++) Gf.add(t[e]);
}
var bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ma = Object.prototype.hasOwnProperty,
  Wm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gu = {},
  Ju = {};
function Qm(e) {
  return ma.call(Ju, e)
    ? !0
    : ma.call(Gu, e)
    ? !1
    : Wm.test(e)
    ? (Ju[e] = !0)
    : ((Gu[e] = !0), !1);
}
function Km(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qm(e, t, n, r) {
  if (t === null || typeof t > "u" || Km(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Be[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Be[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Be[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Be[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Be[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Be[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Be[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cs = /[\-:]([a-z])/g;
function Rs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, Rs);
    Be[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, Rs);
    Be[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cs, Rs);
  Be[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Be[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Be[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ts(e, t, n, r) {
  var i = Be.hasOwnProperty(t) ? Be[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qm(t, n, i, r) && (n = null),
    r || i === null
      ? Qm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wt = Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $i = Symbol.for("react.element"),
  Xn = Symbol.for("react.portal"),
  Gn = Symbol.for("react.fragment"),
  Ps = Symbol.for("react.strict_mode"),
  va = Symbol.for("react.profiler"),
  Jf = Symbol.for("react.provider"),
  Zf = Symbol.for("react.context"),
  Ns = Symbol.for("react.forward_ref"),
  ga = Symbol.for("react.suspense"),
  ya = Symbol.for("react.suspense_list"),
  As = Symbol.for("react.memo"),
  Jt = Symbol.for("react.lazy"),
  ed = Symbol.for("react.offscreen"),
  Zu = Symbol.iterator;
function Mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zu && e[Zu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  Ml;
function Yr(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || "";
    }
  return (
    `
` +
    Ml +
    e
  );
}
var zl = !1;
function Bl(e, t) {
  if (!e || zl) return "";
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Yr(e) : "";
}
function Ym(e) {
  switch (e.tag) {
    case 5:
      return Yr(e.type);
    case 16:
      return Yr("Lazy");
    case 13:
      return Yr("Suspense");
    case 19:
      return Yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bl(e.type, !1)), e;
    case 11:
      return (e = Bl(e.type.render, !1)), e;
    case 1:
      return (e = Bl(e.type, !0)), e;
    default:
      return "";
  }
}
function wa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gn:
      return "Fragment";
    case Xn:
      return "Portal";
    case va:
      return "Profiler";
    case Ps:
      return "StrictMode";
    case ga:
      return "Suspense";
    case ya:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zf:
        return (e.displayName || "Context") + ".Consumer";
      case Jf:
        return (e._context.displayName || "Context") + ".Provider";
      case Ns:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case As:
        return (
          (t = e.displayName || null), t !== null ? t : wa(e.type) || "Memo"
        );
      case Jt:
        (t = e._payload), (e = e._init);
        try {
          return wa(e(t));
        } catch {}
    }
  return null;
}
function Xm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wa(t);
    case 8:
      return t === Ps ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function td(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Gm(e) {
  var t = td(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hi(e) {
  e._valueTracker || (e._valueTracker = Gm(e));
}
function nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = td(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function No(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ea(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ec(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rd(e, t) {
  (t = t.checked), t != null && Ts(e, "checked", t, !1);
}
function Sa(e, t) {
  rd(e, t);
  var n = vn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _a(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _a(e, t.type, vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function tc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _a(e, t, n) {
  (t !== "number" || No(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xr = Array.isArray;
function sr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function xa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function nc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Xr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vn(n) };
}
function id(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function rc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function od(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ka(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? od(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Wi,
  ld = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Wi = Wi || document.createElement("div"),
          Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Wi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ti = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Jm = ["Webkit", "ms", "Moz", "O"];
Object.keys(ti).forEach(function (e) {
  Jm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ti[t] = ti[e]);
  });
});
function ad(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ti.hasOwnProperty(e) && ti[e])
    ? ("" + t).trim()
    : t + "px";
}
function sd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ad(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Zm = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ca(e, t) {
  if (t) {
    if (Zm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Ra(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ta = null;
function Ls(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pa = null,
  ur = null,
  cr = null;
function ic(e) {
  if ((e = Fi(e))) {
    if (typeof Pa != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = cl(t)), Pa(e.stateNode, e.type, t));
  }
}
function ud(e) {
  ur ? (cr ? cr.push(e) : (cr = [e])) : (ur = e);
}
function cd() {
  if (ur) {
    var e = ur,
      t = cr;
    if (((cr = ur = null), ic(e), t)) for (e = 0; e < t.length; e++) ic(t[e]);
  }
}
function fd(e, t) {
  return e(t);
}
function dd() {}
var jl = !1;
function hd(e, t, n) {
  if (jl) return e(t, n);
  jl = !0;
  try {
    return fd(e, t, n);
  } finally {
    (jl = !1), (ur !== null || cr !== null) && (dd(), cd());
  }
}
function di(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Na = !1;
if (bt)
  try {
    var zr = {};
    Object.defineProperty(zr, "passive", {
      get: function () {
        Na = !0;
      },
    }),
      window.addEventListener("test", zr, zr),
      window.removeEventListener("test", zr, zr);
  } catch {
    Na = !1;
  }
function e0(e, t, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ni = !1,
  Ao = null,
  Lo = !1,
  Aa = null,
  t0 = {
    onError: function (e) {
      (ni = !0), (Ao = e);
    },
  };
function n0(e, t, n, r, i, o, l, a, s) {
  (ni = !1), (Ao = null), e0.apply(t0, arguments);
}
function r0(e, t, n, r, i, o, l, a, s) {
  if ((n0.apply(this, arguments), ni)) {
    if (ni) {
      var u = Ao;
      (ni = !1), (Ao = null);
    } else throw Error(T(198));
    Lo || ((Lo = !0), (Aa = u));
  }
}
function Vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function oc(e) {
  if (Vn(e) !== e) throw Error(T(188));
}
function i0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return oc(i), e;
        if (o === r) return oc(i), t;
        o = o.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function md(e) {
  return (e = i0(e)), e !== null ? vd(e) : null;
}
function vd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gd = it.unstable_scheduleCallback,
  lc = it.unstable_cancelCallback,
  o0 = it.unstable_shouldYield,
  l0 = it.unstable_requestPaint,
  _e = it.unstable_now,
  a0 = it.unstable_getCurrentPriorityLevel,
  Fs = it.unstable_ImmediatePriority,
  yd = it.unstable_UserBlockingPriority,
  Fo = it.unstable_NormalPriority,
  s0 = it.unstable_LowPriority,
  wd = it.unstable_IdlePriority,
  ll = null,
  At = null;
function u0(e) {
  if (At && typeof At.onCommitFiberRoot == "function")
    try {
      At.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : d0,
  c0 = Math.log,
  f0 = Math.LN2;
function d0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((c0(e) / f0) | 0)) | 0;
}
var Qi = 64,
  Ki = 4194304;
function Gr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Gr(a)) : ((o &= l), o !== 0 && (r = Gr(o)));
  } else (l = n & ~i), l !== 0 ? (r = Gr(l)) : o !== 0 && (r = Gr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function h0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function p0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - St(o),
      a = 1 << l,
      s = i[l];
    s === -1
      ? (!(a & n) || a & r) && (i[l] = h0(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function La(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ed() {
  var e = Qi;
  return (Qi <<= 1), !(Qi & 4194240) && (Qi = 64), e;
}
function Il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ai(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function m0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - St(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Os(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var re = 0;
function Sd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _d,
  Ds,
  xd,
  kd,
  Cd,
  Fa = !1,
  qi = [],
  ln = null,
  an = null,
  sn = null,
  hi = new Map(),
  pi = new Map(),
  en = [],
  v0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ac(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      hi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pi.delete(t.pointerId);
  }
}
function Br(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Fi(t)), t !== null && Ds(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function g0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (ln = Br(ln, e, t, n, r, i)), !0;
    case "dragenter":
      return (an = Br(an, e, t, n, r, i)), !0;
    case "mouseover":
      return (sn = Br(sn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return hi.set(o, Br(hi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), pi.set(o, Br(pi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Rd(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = Vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pd(n)), t !== null)) {
          (e.blockedOn = t),
            Cd(e.priority, function () {
              xd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ta = r), n.target.dispatchEvent(r), (Ta = null);
    } else return (t = Fi(n)), t !== null && Ds(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function sc(e, t, n) {
  fo(e) && n.delete(t);
}
function y0() {
  (Fa = !1),
    ln !== null && fo(ln) && (ln = null),
    an !== null && fo(an) && (an = null),
    sn !== null && fo(sn) && (sn = null),
    hi.forEach(sc),
    pi.forEach(sc);
}
function jr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fa ||
      ((Fa = !0),
      it.unstable_scheduleCallback(it.unstable_NormalPriority, y0)));
}
function mi(e) {
  function t(i) {
    return jr(i, e);
  }
  if (0 < qi.length) {
    jr(qi[0], e);
    for (var n = 1; n < qi.length; n++) {
      var r = qi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && jr(ln, e),
      an !== null && jr(an, e),
      sn !== null && jr(sn, e),
      hi.forEach(t),
      pi.forEach(t),
      n = 0;
    n < en.length;
    n++
  )
    (r = en[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); )
    Rd(n), n.blockedOn === null && en.shift();
}
var fr = Wt.ReactCurrentBatchConfig,
  Do = !0;
function w0(e, t, n, r) {
  var i = re,
    o = fr.transition;
  fr.transition = null;
  try {
    (re = 1), Ms(e, t, n, r);
  } finally {
    (re = i), (fr.transition = o);
  }
}
function E0(e, t, n, r) {
  var i = re,
    o = fr.transition;
  fr.transition = null;
  try {
    (re = 4), Ms(e, t, n, r);
  } finally {
    (re = i), (fr.transition = o);
  }
}
function Ms(e, t, n, r) {
  if (Do) {
    var i = Oa(e, t, n, r);
    if (i === null) Yl(e, t, r, Mo, n), ac(e, r);
    else if (g0(i, e, t, n, r)) r.stopPropagation();
    else if ((ac(e, r), t & 4 && -1 < v0.indexOf(e))) {
      for (; i !== null; ) {
        var o = Fi(i);
        if (
          (o !== null && _d(o),
          (o = Oa(e, t, n, r)),
          o === null && Yl(e, t, r, Mo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Yl(e, t, r, null, n);
  }
}
var Mo = null;
function Oa(e, t, n, r) {
  if (((Mo = null), (e = Ls(r)), (e = Nn(e)), e !== null))
    if (((t = Vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Mo = e), null;
}
function Td(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (a0()) {
        case Fs:
          return 1;
        case yd:
          return 4;
        case Fo:
        case s0:
          return 16;
        case wd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  zs = null,
  ho = null;
function Pd() {
  if (ho) return ho;
  var e,
    t = zs,
    n = t.length,
    r,
    i = "value" in nn ? nn.value : nn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (ho = i.slice(e, 1 < r ? 1 - r : void 0));
}
function po(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yi() {
  return !0;
}
function uc() {
  return !1;
}
function lt(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Yi
        : uc),
      (this.isPropagationStopped = uc),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yi));
      },
      persist: function () {},
      isPersistent: Yi,
    }),
    t
  );
}
var Rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bs = lt(Rr),
  Li = ge({}, Rr, { view: 0, detail: 0 }),
  S0 = lt(Li),
  Ul,
  bl,
  Ir,
  al = ge({}, Li, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: js,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ir &&
            (Ir && e.type === "mousemove"
              ? ((Ul = e.screenX - Ir.screenX), (bl = e.screenY - Ir.screenY))
              : (bl = Ul = 0),
            (Ir = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bl;
    },
  }),
  cc = lt(al),
  _0 = ge({}, al, { dataTransfer: 0 }),
  x0 = lt(_0),
  k0 = ge({}, Li, { relatedTarget: 0 }),
  Vl = lt(k0),
  C0 = ge({}, Rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R0 = lt(C0),
  T0 = ge({}, Rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  P0 = lt(T0),
  N0 = ge({}, Rr, { data: 0 }),
  fc = lt(N0),
  A0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  L0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  F0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function O0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = F0[e]) ? !!t[e] : !1;
}
function js() {
  return O0;
}
var D0 = ge({}, Li, {
    key: function (e) {
      if (e.key) {
        var t = A0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = po(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? L0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: js,
    charCode: function (e) {
      return e.type === "keypress" ? po(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? po(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  M0 = lt(D0),
  z0 = ge({}, al, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  dc = lt(z0),
  B0 = ge({}, Li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: js,
  }),
  j0 = lt(B0),
  I0 = ge({}, Rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  U0 = lt(I0),
  b0 = ge({}, al, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  V0 = lt(b0),
  $0 = [9, 13, 27, 32],
  Is = bt && "CompositionEvent" in window,
  ri = null;
bt && "documentMode" in document && (ri = document.documentMode);
var H0 = bt && "TextEvent" in window && !ri,
  Nd = bt && (!Is || (ri && 8 < ri && 11 >= ri)),
  hc = " ",
  pc = !1;
function Ad(e, t) {
  switch (e) {
    case "keyup":
      return $0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ld(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Jn = !1;
function W0(e, t) {
  switch (e) {
    case "compositionend":
      return Ld(t);
    case "keypress":
      return t.which !== 32 ? null : ((pc = !0), hc);
    case "textInput":
      return (e = t.data), e === hc && pc ? null : e;
    default:
      return null;
  }
}
function Q0(e, t) {
  if (Jn)
    return e === "compositionend" || (!Is && Ad(e, t))
      ? ((e = Pd()), (ho = zs = nn = null), (Jn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Nd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var K0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function mc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!K0[e.type] : t === "textarea";
}
function Fd(e, t, n, r) {
  ud(r),
    (t = zo(t, "onChange")),
    0 < t.length &&
      ((n = new Bs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ii = null,
  vi = null;
function q0(e) {
  $d(e, 0);
}
function sl(e) {
  var t = tr(e);
  if (nd(t)) return e;
}
function Y0(e, t) {
  if (e === "change") return t;
}
var Od = !1;
if (bt) {
  var $l;
  if (bt) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var vc = document.createElement("div");
      vc.setAttribute("oninput", "return;"),
        (Hl = typeof vc.oninput == "function");
    }
    $l = Hl;
  } else $l = !1;
  Od = $l && (!document.documentMode || 9 < document.documentMode);
}
function gc() {
  ii && (ii.detachEvent("onpropertychange", Dd), (vi = ii = null));
}
function Dd(e) {
  if (e.propertyName === "value" && sl(vi)) {
    var t = [];
    Fd(t, vi, e, Ls(e)), hd(q0, t);
  }
}
function X0(e, t, n) {
  e === "focusin"
    ? (gc(), (ii = t), (vi = n), ii.attachEvent("onpropertychange", Dd))
    : e === "focusout" && gc();
}
function G0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return sl(vi);
}
function J0(e, t) {
  if (e === "click") return sl(t);
}
function Z0(e, t) {
  if (e === "input" || e === "change") return sl(t);
}
function ev(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : ev;
function gi(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ma.call(t, i) || !xt(e[i], t[i])) return !1;
  }
  return !0;
}
function yc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wc(e, t) {
  var n = yc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = yc(n);
  }
}
function Md(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Md(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function zd() {
  for (var e = window, t = No(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = No(e.document);
  }
  return t;
}
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function tv(e) {
  var t = zd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Md(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Us(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = wc(n, o));
        var l = wc(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var nv = bt && "documentMode" in document && 11 >= document.documentMode,
  Zn = null,
  Da = null,
  oi = null,
  Ma = !1;
function Ec(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ma ||
    Zn == null ||
    Zn !== No(r) ||
    ((r = Zn),
    "selectionStart" in r && Us(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (oi && gi(oi, r)) ||
      ((oi = r),
      (r = zo(Da, "onSelect")),
      0 < r.length &&
        ((t = new Bs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zn))));
}
function Xi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var er = {
    animationend: Xi("Animation", "AnimationEnd"),
    animationiteration: Xi("Animation", "AnimationIteration"),
    animationstart: Xi("Animation", "AnimationStart"),
    transitionend: Xi("Transition", "TransitionEnd"),
  },
  Wl = {},
  Bd = {};
bt &&
  ((Bd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete er.animationend.animation,
    delete er.animationiteration.animation,
    delete er.animationstart.animation),
  "TransitionEvent" in window || delete er.transitionend.transition);
function ul(e) {
  if (Wl[e]) return Wl[e];
  if (!er[e]) return e;
  var t = er[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bd) return (Wl[e] = t[n]);
  return e;
}
var jd = ul("animationend"),
  Id = ul("animationiteration"),
  Ud = ul("animationstart"),
  bd = ul("transitionend"),
  Vd = new Map(),
  Sc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yn(e, t) {
  Vd.set(e, t), bn(t, [e]);
}
for (var Ql = 0; Ql < Sc.length; Ql++) {
  var Kl = Sc[Ql],
    rv = Kl.toLowerCase(),
    iv = Kl[0].toUpperCase() + Kl.slice(1);
  yn(rv, "on" + iv);
}
yn(jd, "onAnimationEnd");
yn(Id, "onAnimationIteration");
yn(Ud, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(bd, "onTransitionEnd");
vr("onMouseEnter", ["mouseout", "mouseover"]);
vr("onMouseLeave", ["mouseout", "mouseover"]);
vr("onPointerEnter", ["pointerout", "pointerover"]);
vr("onPointerLeave", ["pointerout", "pointerover"]);
bn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
bn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
bn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
bn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ov = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));
function _c(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), r0(r, t, void 0, e), (e.currentTarget = null);
}
function $d(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
          _c(i, a, u), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          _c(i, a, u), (o = s);
        }
    }
  }
  if (Lo) throw ((e = Aa), (Lo = !1), (Aa = null), e);
}
function ue(e, t) {
  var n = t[Ua];
  n === void 0 && (n = t[Ua] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Hd(t, e, 2, !1), n.add(r));
}
function ql(e, t, n) {
  var r = 0;
  t && (r |= 4), Hd(n, e, r, t);
}
var Gi = "_reactListening" + Math.random().toString(36).slice(2);
function yi(e) {
  if (!e[Gi]) {
    (e[Gi] = !0),
      Gf.forEach(function (n) {
        n !== "selectionchange" && (ov.has(n) || ql(n, !1, e), ql(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gi] || ((t[Gi] = !0), ql("selectionchange", !1, t));
  }
}
function Hd(e, t, n, r) {
  switch (Td(t)) {
    case 1:
      var i = w0;
      break;
    case 4:
      i = E0;
      break;
    default:
      i = Ms;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Na ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Yl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Nn(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  hd(function () {
    var u = o,
      c = Ls(n),
      f = [];
    e: {
      var p = Vd.get(e);
      if (p !== void 0) {
        var v = Bs,
          w = e;
        switch (e) {
          case "keypress":
            if (po(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = M0;
            break;
          case "focusin":
            (w = "focus"), (v = Vl);
            break;
          case "focusout":
            (w = "blur"), (v = Vl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Vl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = cc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = x0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = j0;
            break;
          case jd:
          case Id:
          case Ud:
            v = R0;
            break;
          case bd:
            v = U0;
            break;
          case "scroll":
            v = S0;
            break;
          case "wheel":
            v = V0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = P0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = dc;
        }
        var S = (t & 4) !== 0,
          P = !S && e === "scroll",
          h = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var d = u, y; d !== null; ) {
          y = d;
          var x = y.stateNode;
          if (
            (y.tag === 5 &&
              x !== null &&
              ((y = x),
              h !== null && ((x = di(d, h)), x != null && S.push(wi(d, x, y)))),
            P)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((p = new v(p, w, null, n, c)), f.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Ta &&
            (w = n.relatedTarget || n.fromElement) &&
            (Nn(w) || w[Vt]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = u),
              (w = w ? Nn(w) : null),
              w !== null &&
                ((P = Vn(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = u)),
          v !== w)
        ) {
          if (
            ((S = cc),
            (x = "onMouseLeave"),
            (h = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = dc),
              (x = "onPointerLeave"),
              (h = "onPointerEnter"),
              (d = "pointer")),
            (P = v == null ? p : tr(v)),
            (y = w == null ? p : tr(w)),
            (p = new S(x, d + "leave", v, n, c)),
            (p.target = P),
            (p.relatedTarget = y),
            (x = null),
            Nn(c) === u &&
              ((S = new S(h, d + "enter", w, n, c)),
              (S.target = y),
              (S.relatedTarget = P),
              (x = S)),
            (P = x),
            v && w)
          )
            t: {
              for (S = v, h = w, d = 0, y = S; y; y = qn(y)) d++;
              for (y = 0, x = h; x; x = qn(x)) y++;
              for (; 0 < d - y; ) (S = qn(S)), d--;
              for (; 0 < y - d; ) (h = qn(h)), y--;
              for (; d--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                (S = qn(S)), (h = qn(h));
              }
              S = null;
            }
          else S = null;
          v !== null && xc(f, p, v, S, !1),
            w !== null && P !== null && xc(f, P, w, S, !0);
        }
      }
      e: {
        if (
          ((p = u ? tr(u) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var A = Y0;
        else if (mc(p))
          if (Od) A = Z0;
          else {
            A = G0;
            var m = X0;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (A = J0);
        if (A && (A = A(e, u))) {
          Fd(f, A, n, c);
          break e;
        }
        m && m(e, p, u),
          e === "focusout" &&
            (m = p._wrapperState) &&
            m.controlled &&
            p.type === "number" &&
            _a(p, "number", p.value);
      }
      switch (((m = u ? tr(u) : window), e)) {
        case "focusin":
          (mc(m) || m.contentEditable === "true") &&
            ((Zn = m), (Da = u), (oi = null));
          break;
        case "focusout":
          oi = Da = Zn = null;
          break;
        case "mousedown":
          Ma = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ma = !1), Ec(f, n, c);
          break;
        case "selectionchange":
          if (nv) break;
        case "keydown":
        case "keyup":
          Ec(f, n, c);
      }
      var N;
      if (Is)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Jn
          ? Ad(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Nd &&
          n.locale !== "ko" &&
          (Jn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Jn && (N = Pd())
            : ((nn = c),
              (zs = "value" in nn ? nn.value : nn.textContent),
              (Jn = !0))),
        (m = zo(u, k)),
        0 < m.length &&
          ((k = new fc(k, e, null, n, c)),
          f.push({ event: k, listeners: m }),
          N ? (k.data = N) : ((N = Ld(n)), N !== null && (k.data = N)))),
        (N = H0 ? W0(e, n) : Q0(e, n)) &&
          ((u = zo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new fc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    $d(f, t);
  });
}
function wi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = di(e, n)),
      o != null && r.unshift(wi(e, o, i)),
      (o = di(e, t)),
      o != null && r.push(wi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xc(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = di(n, o)), s != null && l.unshift(wi(n, s, a)))
        : i || ((s = di(n, o)), s != null && l.push(wi(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var lv = /\r\n?/g,
  av = /\u0000|\uFFFD/g;
function kc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lv,
      `
`
    )
    .replace(av, "");
}
function Ji(e, t, n) {
  if (((t = kc(t)), kc(e) !== t && n)) throw Error(T(425));
}
function Bo() {}
var za = null,
  Ba = null;
function ja(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ia = typeof setTimeout == "function" ? setTimeout : void 0,
  sv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cc = typeof Promise == "function" ? Promise : void 0,
  uv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cc < "u"
      ? function (e) {
          return Cc.resolve(null).then(e).catch(cv);
        }
      : Ia;
function cv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), mi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  mi(t);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Rc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tr = Math.random().toString(36).slice(2),
  Nt = "__reactFiber$" + Tr,
  Ei = "__reactProps$" + Tr,
  Vt = "__reactContainer$" + Tr,
  Ua = "__reactEvents$" + Tr,
  fv = "__reactListeners$" + Tr,
  dv = "__reactHandles$" + Tr;
function Nn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vt] || n[Nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Rc(e); e !== null; ) {
          if ((n = e[Nt])) return n;
          e = Rc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Fi(e) {
  return (
    (e = e[Nt] || e[Vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function tr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function cl(e) {
  return e[Ei] || null;
}
var ba = [],
  nr = -1;
function wn(e) {
  return { current: e };
}
function ce(e) {
  0 > nr || ((e.current = ba[nr]), (ba[nr] = null), nr--);
}
function ae(e, t) {
  nr++, (ba[nr] = e.current), (e.current = t);
}
var gn = {},
  be = wn(gn),
  Ge = wn(!1),
  Mn = gn;
function gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Je(e) {
  return (e = e.childContextTypes), e != null;
}
function jo() {
  ce(Ge), ce(be);
}
function Tc(e, t, n) {
  if (be.current !== gn) throw Error(T(168));
  ae(be, t), ae(Ge, n);
}
function Wd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(T(108, Xm(e) || "Unknown", i));
  return ge({}, n, r);
}
function Io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gn),
    (Mn = be.current),
    ae(be, e),
    ae(Ge, Ge.current),
    !0
  );
}
function Pc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Wd(e, t, Mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Ge),
      ce(be),
      ae(be, e))
    : ce(Ge),
    ae(Ge, n);
}
var Bt = null,
  fl = !1,
  Gl = !1;
function Qd(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function hv(e) {
  (fl = !0), Qd(e);
}
function En() {
  if (!Gl && Bt !== null) {
    Gl = !0;
    var e = 0,
      t = re;
    try {
      var n = Bt;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), (fl = !1);
    } catch (i) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), gd(Fs, En), i);
    } finally {
      (re = t), (Gl = !1);
    }
  }
  return null;
}
var rr = [],
  ir = 0,
  Uo = null,
  bo = 0,
  at = [],
  st = 0,
  zn = null,
  jt = 1,
  It = "";
function Cn(e, t) {
  (rr[ir++] = bo), (rr[ir++] = Uo), (Uo = e), (bo = t);
}
function Kd(e, t, n) {
  (at[st++] = jt), (at[st++] = It), (at[st++] = zn), (zn = e);
  var r = jt;
  e = It;
  var i = 32 - St(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - St(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (jt = (1 << (32 - St(t) + i)) | (n << i) | r),
      (It = o + e);
  } else (jt = (1 << o) | (n << i) | r), (It = e);
}
function bs(e) {
  e.return !== null && (Cn(e, 1), Kd(e, 1, 0));
}
function Vs(e) {
  for (; e === Uo; )
    (Uo = rr[--ir]), (rr[ir] = null), (bo = rr[--ir]), (rr[ir] = null);
  for (; e === zn; )
    (zn = at[--st]),
      (at[st] = null),
      (It = at[--st]),
      (at[st] = null),
      (jt = at[--st]),
      (at[st] = null);
}
var rt = null,
  nt = null,
  de = !1,
  Et = null;
function qd(e, t) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Nc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = un(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zn !== null ? { id: jt, overflow: It } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Va(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $a(e) {
  if (de) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Nc(e, t)) {
        if (Va(e)) throw Error(T(418));
        t = un(n.nextSibling);
        var r = rt;
        t && Nc(e, t)
          ? qd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (rt = e));
      }
    } else {
      if (Va(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), (rt = e);
    }
  }
}
function Ac(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function Zi(e) {
  if (e !== rt) return !1;
  if (!de) return Ac(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ja(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (Va(e)) throw (Yd(), Error(T(418)));
    for (; t; ) qd(e, t), (t = un(t.nextSibling));
  }
  if ((Ac(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function Yd() {
  for (var e = nt; e; ) e = un(e.nextSibling);
}
function yr() {
  (nt = rt = null), (de = !1);
}
function $s(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
var pv = Wt.ReactCurrentBatchConfig;
function Ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function eo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Lc(e) {
  var t = e._init;
  return t(e._payload);
}
function Xd(e) {
  function t(h, d) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [d]), (h.flags |= 16)) : y.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), (d = d.sibling);
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
    return h;
  }
  function i(h, d) {
    return (h = hn(h, d)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, d, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < d ? ((h.flags |= 2), d) : y)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, d, y, x) {
    return d === null || d.tag !== 6
      ? ((d = ia(y, h.mode, x)), (d.return = h), d)
      : ((d = i(d, y)), (d.return = h), d);
  }
  function s(h, d, y, x) {
    var A = y.type;
    return A === Gn
      ? c(h, d, y.props.children, x, y.key)
      : d !== null &&
        (d.elementType === A ||
          (typeof A == "object" &&
            A !== null &&
            A.$$typeof === Jt &&
            Lc(A) === d.type))
      ? ((x = i(d, y.props)), (x.ref = Ur(h, d, y)), (x.return = h), x)
      : ((x = So(y.type, y.key, y.props, null, h.mode, x)),
        (x.ref = Ur(h, d, y)),
        (x.return = h),
        x);
  }
  function u(h, d, y, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== y.containerInfo ||
      d.stateNode.implementation !== y.implementation
      ? ((d = oa(y, h.mode, x)), (d.return = h), d)
      : ((d = i(d, y.children || [])), (d.return = h), d);
  }
  function c(h, d, y, x, A) {
    return d === null || d.tag !== 7
      ? ((d = Dn(y, h.mode, x, A)), (d.return = h), d)
      : ((d = i(d, y)), (d.return = h), d);
  }
  function f(h, d, y) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = ia("" + d, h.mode, y)), (d.return = h), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case $i:
          return (
            (y = So(d.type, d.key, d.props, null, h.mode, y)),
            (y.ref = Ur(h, null, d)),
            (y.return = h),
            y
          );
        case Xn:
          return (d = oa(d, h.mode, y)), (d.return = h), d;
        case Jt:
          var x = d._init;
          return f(h, x(d._payload), y);
      }
      if (Xr(d) || Mr(d))
        return (d = Dn(d, h.mode, y, null)), (d.return = h), d;
      eo(h, d);
    }
    return null;
  }
  function p(h, d, y, x) {
    var A = d !== null ? d.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return A !== null ? null : a(h, d, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case $i:
          return y.key === A ? s(h, d, y, x) : null;
        case Xn:
          return y.key === A ? u(h, d, y, x) : null;
        case Jt:
          return (A = y._init), p(h, d, A(y._payload), x);
      }
      if (Xr(y) || Mr(y)) return A !== null ? null : c(h, d, y, x, null);
      eo(h, y);
    }
    return null;
  }
  function v(h, d, y, x, A) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (h = h.get(y) || null), a(d, h, "" + x, A);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case $i:
          return (h = h.get(x.key === null ? y : x.key) || null), s(d, h, x, A);
        case Xn:
          return (h = h.get(x.key === null ? y : x.key) || null), u(d, h, x, A);
        case Jt:
          var m = x._init;
          return v(h, d, y, m(x._payload), A);
      }
      if (Xr(x) || Mr(x)) return (h = h.get(y) || null), c(d, h, x, A, null);
      eo(d, x);
    }
    return null;
  }
  function w(h, d, y, x) {
    for (
      var A = null, m = null, N = d, k = (d = 0), z = null;
      N !== null && k < y.length;
      k++
    ) {
      N.index > k ? ((z = N), (N = null)) : (z = N.sibling);
      var j = p(h, N, y[k], x);
      if (j === null) {
        N === null && (N = z);
        break;
      }
      e && N && j.alternate === null && t(h, N),
        (d = o(j, d, k)),
        m === null ? (A = j) : (m.sibling = j),
        (m = j),
        (N = z);
    }
    if (k === y.length) return n(h, N), de && Cn(h, k), A;
    if (N === null) {
      for (; k < y.length; k++)
        (N = f(h, y[k], x)),
          N !== null &&
            ((d = o(N, d, k)), m === null ? (A = N) : (m.sibling = N), (m = N));
      return de && Cn(h, k), A;
    }
    for (N = r(h, N); k < y.length; k++)
      (z = v(N, h, k, y[k], x)),
        z !== null &&
          (e && z.alternate !== null && N.delete(z.key === null ? k : z.key),
          (d = o(z, d, k)),
          m === null ? (A = z) : (m.sibling = z),
          (m = z));
    return (
      e &&
        N.forEach(function (ie) {
          return t(h, ie);
        }),
      de && Cn(h, k),
      A
    );
  }
  function S(h, d, y, x) {
    var A = Mr(y);
    if (typeof A != "function") throw Error(T(150));
    if (((y = A.call(y)), y == null)) throw Error(T(151));
    for (
      var m = (A = null), N = d, k = (d = 0), z = null, j = y.next();
      N !== null && !j.done;
      k++, j = y.next()
    ) {
      N.index > k ? ((z = N), (N = null)) : (z = N.sibling);
      var ie = p(h, N, j.value, x);
      if (ie === null) {
        N === null && (N = z);
        break;
      }
      e && N && ie.alternate === null && t(h, N),
        (d = o(ie, d, k)),
        m === null ? (A = ie) : (m.sibling = ie),
        (m = ie),
        (N = z);
    }
    if (j.done) return n(h, N), de && Cn(h, k), A;
    if (N === null) {
      for (; !j.done; k++, j = y.next())
        (j = f(h, j.value, x)),
          j !== null &&
            ((d = o(j, d, k)), m === null ? (A = j) : (m.sibling = j), (m = j));
      return de && Cn(h, k), A;
    }
    for (N = r(h, N); !j.done; k++, j = y.next())
      (j = v(N, h, k, j.value, x)),
        j !== null &&
          (e && j.alternate !== null && N.delete(j.key === null ? k : j.key),
          (d = o(j, d, k)),
          m === null ? (A = j) : (m.sibling = j),
          (m = j));
    return (
      e &&
        N.forEach(function (he) {
          return t(h, he);
        }),
      de && Cn(h, k),
      A
    );
  }
  function P(h, d, y, x) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Gn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case $i:
          e: {
            for (var A = y.key, m = d; m !== null; ) {
              if (m.key === A) {
                if (((A = y.type), A === Gn)) {
                  if (m.tag === 7) {
                    n(h, m.sibling),
                      (d = i(m, y.props.children)),
                      (d.return = h),
                      (h = d);
                    break e;
                  }
                } else if (
                  m.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === Jt &&
                    Lc(A) === m.type)
                ) {
                  n(h, m.sibling),
                    (d = i(m, y.props)),
                    (d.ref = Ur(h, m, y)),
                    (d.return = h),
                    (h = d);
                  break e;
                }
                n(h, m);
                break;
              } else t(h, m);
              m = m.sibling;
            }
            y.type === Gn
              ? ((d = Dn(y.props.children, h.mode, x, y.key)),
                (d.return = h),
                (h = d))
              : ((x = So(y.type, y.key, y.props, null, h.mode, x)),
                (x.ref = Ur(h, d, y)),
                (x.return = h),
                (h = x));
          }
          return l(h);
        case Xn:
          e: {
            for (m = y.key; d !== null; ) {
              if (d.key === m)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === y.containerInfo &&
                  d.stateNode.implementation === y.implementation
                ) {
                  n(h, d.sibling),
                    (d = i(d, y.children || [])),
                    (d.return = h),
                    (h = d);
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            (d = oa(y, h.mode, x)), (d.return = h), (h = d);
          }
          return l(h);
        case Jt:
          return (m = y._init), P(h, d, m(y._payload), x);
      }
      if (Xr(y)) return w(h, d, y, x);
      if (Mr(y)) return S(h, d, y, x);
      eo(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = i(d, y)), (d.return = h), (h = d))
          : (n(h, d), (d = ia(y, h.mode, x)), (d.return = h), (h = d)),
        l(h))
      : n(h, d);
  }
  return P;
}
var wr = Xd(!0),
  Gd = Xd(!1),
  Vo = wn(null),
  $o = null,
  or = null,
  Hs = null;
function Ws() {
  Hs = or = $o = null;
}
function Qs(e) {
  var t = Vo.current;
  ce(Vo), (e._currentValue = t);
}
function Ha(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function dr(e, t) {
  ($o = e),
    (Hs = or = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (Hs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), or === null)) {
      if ($o === null) throw Error(T(308));
      (or = e), ($o.dependencies = { lanes: 0, firstContext: e });
    } else or = or.next = e;
  return t;
}
var An = null;
function Ks(e) {
  An === null ? (An = [e]) : An.push(e);
}
function Jd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ks(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function qs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ks(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function mo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Os(e, n);
  }
}
function Fc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ho(e, t, n, r) {
  var i = e.updateQueue;
  Zt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = i.baseState;
    (l = 0), (c = u = s = null), (a = o);
    do {
      var p = a.lane,
        v = a.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            S = a;
          switch (((p = t), (v = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                f = w.call(v, f, p);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(v, f, p) : w),
                p == null)
              )
                break e;
              f = ge({}, f, p);
              break e;
            case 2:
              Zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (v = {
          eventTime: v,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (s = f)) : (c = c.next = v),
          (l |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (jn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function Oc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var Oi = {},
  Lt = wn(Oi),
  Si = wn(Oi),
  _i = wn(Oi);
function Ln(e) {
  if (e === Oi) throw Error(T(174));
  return e;
}
function Ys(e, t) {
  switch ((ae(_i, t), ae(Si, e), ae(Lt, Oi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ka(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ka(t, e));
  }
  ce(Lt), ae(Lt, t);
}
function Er() {
  ce(Lt), ce(Si), ce(_i);
}
function eh(e) {
  Ln(_i.current);
  var t = Ln(Lt.current),
    n = ka(t, e.type);
  t !== n && (ae(Si, e), ae(Lt, n));
}
function Xs(e) {
  Si.current === e && (ce(Lt), ce(Si));
}
var me = wn(0);
function Wo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jl = [];
function Gs() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var vo = Wt.ReactCurrentDispatcher,
  Zl = Wt.ReactCurrentBatchConfig,
  Bn = 0,
  ve = null,
  Ne = null,
  Le = null,
  Qo = !1,
  li = !1,
  xi = 0,
  mv = 0;
function je() {
  throw Error(T(321));
}
function Js(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function Zs(e, t, n, r, i, o) {
  if (
    ((Bn = o),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vo.current = e === null || e.memoizedState === null ? wv : Ev),
    (e = n(r, i)),
    li)
  ) {
    o = 0;
    do {
      if (((li = !1), (xi = 0), 25 <= o)) throw Error(T(301));
      (o += 1),
        (Le = Ne = null),
        (t.updateQueue = null),
        (vo.current = Sv),
        (e = n(r, i));
    } while (li);
  }
  if (
    ((vo.current = Ko),
    (t = Ne !== null && Ne.next !== null),
    (Bn = 0),
    (Le = Ne = ve = null),
    (Qo = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function eu() {
  var e = xi !== 0;
  return (xi = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Le === null ? (ve.memoizedState = Le = e) : (Le = Le.next = e), Le;
}
function ht() {
  if (Ne === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Le === null ? ve.memoizedState : Le.next;
  if (t !== null) (Le = t), (Ne = e);
  else {
    if (e === null) throw Error(T(310));
    (Ne = e),
      (e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      Le === null ? (ve.memoizedState = Le = e) : (Le = Le.next = e);
  }
  return Le;
}
function ki(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ea(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = o;
    do {
      var c = u.lane;
      if ((Bn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = f), (l = r)) : (s = s.next = f),
          (ve.lanes |= c),
          (jn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (l = r) : (s.next = a),
      xt(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ve.lanes |= o), (jn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ta(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    xt(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function th() {}
function nh(e, t) {
  var n = ve,
    r = ht(),
    i = t(),
    o = !xt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Xe = !0)),
    (r = r.queue),
    tu(oh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ci(9, ih.bind(null, n, r, i, t), void 0, null),
      Fe === null)
    )
      throw Error(T(349));
    Bn & 30 || rh(n, t, i);
  }
  return i;
}
function rh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ih(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), lh(t) && ah(e);
}
function oh(e, t, n) {
  return n(function () {
    lh(t) && ah(e);
  });
}
function lh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function ah(e) {
  var t = $t(e, 1);
  t !== null && _t(t, e, 1, -1);
}
function Dc(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ki,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yv.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function Ci(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sh() {
  return ht().memoizedState;
}
function go(e, t, n, r) {
  var i = Pt();
  (ve.flags |= e),
    (i.memoizedState = Ci(1 | t, n, void 0, r === void 0 ? null : r));
}
function dl(e, t, n, r) {
  var i = ht();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ne !== null) {
    var l = Ne.memoizedState;
    if (((o = l.destroy), r !== null && Js(r, l.deps))) {
      i.memoizedState = Ci(t, n, o, r);
      return;
    }
  }
  (ve.flags |= e), (i.memoizedState = Ci(1 | t, n, o, r));
}
function Mc(e, t) {
  return go(8390656, 8, e, t);
}
function tu(e, t) {
  return dl(2048, 8, e, t);
}
function uh(e, t) {
  return dl(4, 2, e, t);
}
function ch(e, t) {
  return dl(4, 4, e, t);
}
function fh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function dh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), dl(4, 4, fh.bind(null, t, e), n)
  );
}
function nu() {}
function hh(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ph(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mh(e, t, n) {
  return Bn & 21
    ? (xt(n, t) || ((n = Ed()), (ve.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function vv(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zl.transition;
  Zl.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (Zl.transition = r);
  }
}
function vh() {
  return ht().memoizedState;
}
function gv(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gh(e))
  )
    yh(t, n);
  else if (((n = Jd(e, t, n, r)), n !== null)) {
    var i = We();
    _t(n, e, r, i), wh(n, t, r);
  }
}
function yv(e, t, n) {
  var r = dn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gh(e)) yh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), xt(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), Ks(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Jd(e, t, i, r)),
      n !== null && ((i = We()), _t(n, e, r, i), wh(n, t, r));
  }
}
function gh(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function yh(e, t) {
  li = Qo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Os(e, n);
  }
}
var Ko = {
    readContext: dt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  wv = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: Mc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        go(4194308, 4, fh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return go(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return go(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gv.bind(null, ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Dc,
    useDebugValue: nu,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Dc(!1),
        t = e[0];
      return (e = vv.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ve,
        i = Pt();
      if (de) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), Fe === null)) throw Error(T(349));
        Bn & 30 || rh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Mc(oh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ci(9, ih.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = Fe.identifierPrefix;
      if (de) {
        var n = It,
          r = jt;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ev = {
    readContext: dt,
    useCallback: hh,
    useContext: dt,
    useEffect: tu,
    useImperativeHandle: dh,
    useInsertionEffect: uh,
    useLayoutEffect: ch,
    useMemo: ph,
    useReducer: ea,
    useRef: sh,
    useState: function () {
      return ea(ki);
    },
    useDebugValue: nu,
    useDeferredValue: function (e) {
      var t = ht();
      return mh(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ea(ki)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: th,
    useSyncExternalStore: nh,
    useId: vh,
    unstable_isNewReconciler: !1,
  },
  Sv = {
    readContext: dt,
    useCallback: hh,
    useContext: dt,
    useEffect: tu,
    useImperativeHandle: dh,
    useInsertionEffect: uh,
    useLayoutEffect: ch,
    useMemo: ph,
    useReducer: ta,
    useRef: sh,
    useState: function () {
      return ta(ki);
    },
    useDebugValue: nu,
    useDeferredValue: function (e) {
      var t = ht();
      return Ne === null ? (t.memoizedState = e) : mh(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ta(ki)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: th,
    useSyncExternalStore: nh,
    useId: vh,
    unstable_isNewReconciler: !1,
  };
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = dn(e),
      o = Ut(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = cn(e, o, i)),
      t !== null && (_t(t, e, i, r), mo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = dn(e),
      o = Ut(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = cn(e, o, i)),
      t !== null && (_t(t, e, i, r), mo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = dn(e),
      i = Ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = cn(e, i, r)),
      t !== null && (_t(t, e, r, n), mo(t, e, r));
  },
};
function zc(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gi(n, r) || !gi(i, o)
      : !0
  );
}
function Eh(e, t, n) {
  var r = !1,
    i = gn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = dt(o))
      : ((i = Je(t) ? Mn : be.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? gr(e, i) : gn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Bc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Qa(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), qs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = dt(o))
    : ((o = Je(t) ? Mn : be.current), (i.context = gr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Wa(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && hl.enqueueReplaceState(i, i.state, null),
      Ho(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ym(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function na(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _v = typeof WeakMap == "function" ? WeakMap : Map;
function Sh(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Yo || ((Yo = !0), (rs = r)), Ka(e, t);
    }),
    n
  );
}
function _h(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ka(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ka(e, t),
          typeof r != "function" &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function jc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _v();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = zv.bind(null, e, t, n)), t.then(e, e));
}
function Ic(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Uc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ut(-1, 1)), (t.tag = 2), cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xv = Wt.ReactCurrentOwner,
  Xe = !1;
function He(e, t, n, r) {
  t.child = e === null ? Gd(t, null, n, r) : wr(t, e.child, n, r);
}
function bc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    dr(t, i),
    (r = Zs(e, t, n, r, o, i)),
    (n = eu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ht(e, t, i))
      : (de && n && bs(t), (t.flags |= 1), He(e, t, r, i), t.child)
  );
}
function Vc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !cu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), xh(e, t, o, r, i))
      : ((e = So(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gi), n(l, r) && e.ref === t.ref)
    )
      return Ht(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = hn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (gi(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), Ht(e, t, i);
  }
  return qa(e, t, n, r, i);
}
function kh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(ar, et),
        (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(ar, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ae(ar, et),
        (et |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ae(ar, et),
      (et |= r);
  return He(e, t, i, n), t.child;
}
function Ch(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qa(e, t, n, r, i) {
  var o = Je(n) ? Mn : be.current;
  return (
    (o = gr(t, o)),
    dr(t, i),
    (n = Zs(e, t, n, r, o, i)),
    (r = eu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ht(e, t, i))
      : (de && r && bs(t), (t.flags |= 1), He(e, t, n, i), t.child)
  );
}
function $c(e, t, n, r, i) {
  if (Je(n)) {
    var o = !0;
    Io(t);
  } else o = !1;
  if ((dr(t, i), t.stateNode === null))
    yo(e, t), Eh(t, n, r), Qa(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dt(u))
      : ((u = Je(n) ? Mn : be.current), (u = gr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Bc(t, l, r, u)),
      (Zt = !1);
    var p = t.memoizedState;
    (l.state = p),
      Ho(t, r, l, i),
      (s = t.memoizedState),
      a !== r || p !== s || Ge.current || Zt
        ? (typeof c == "function" && (Wa(t, n, c, r), (s = t.memoizedState)),
          (a = Zt || zc(t, n, a, r, p, s, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Zd(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : vt(t.type, a)),
      (l.props = u),
      (f = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = dt(s))
        : ((s = Je(n) ? Mn : be.current), (s = gr(t, s)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== f || p !== s) && Bc(t, l, r, s)),
      (Zt = !1),
      (p = t.memoizedState),
      (l.state = p),
      Ho(t, r, l, i);
    var w = t.memoizedState;
    a !== f || p !== w || Ge.current || Zt
      ? (typeof v == "function" && (Wa(t, n, v, r), (w = t.memoizedState)),
        (u = Zt || zc(t, n, u, r, p, w, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ya(e, t, n, r, o, i);
}
function Ya(e, t, n, r, i, o) {
  Ch(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Pc(t, n, !1), Ht(e, t, o);
  (r = t.stateNode), (xv.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = wr(t, e.child, null, o)), (t.child = wr(t, null, a, o)))
      : He(e, t, a, o),
    (t.memoizedState = r.state),
    i && Pc(t, n, !0),
    t.child
  );
}
function Rh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Tc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Tc(e, t.context, !1),
    Ys(e, t.containerInfo);
}
function Hc(e, t, n, r, i) {
  return yr(), $s(i), (t.flags |= 256), He(e, t, n, r), t.child;
}
var Xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ga(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Th(e, t, n) {
  var r = t.pendingProps,
    i = me.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ae(me, i & 1),
    e === null)
  )
    return (
      $a(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = vl(l, r, 0, null)),
              (e = Dn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ga(n)),
              (t.memoizedState = Xa),
              e)
            : ru(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return kv(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = hn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = hn(a, o)) : ((o = Dn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ga(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ru(e, t) {
  return (
    (t = vl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function to(e, t, n, r) {
  return (
    r !== null && $s(r),
    wr(t, e.child, null, n),
    (e = ru(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function kv(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = na(Error(T(422)))), to(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = vl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Dn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && wr(t, e.child, null, l),
        (t.child.memoizedState = Ga(l)),
        (t.memoizedState = Xa),
        o);
  if (!(t.mode & 1)) return to(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(T(419))), (r = na(o, r, void 0)), to(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Xe || a)) {
    if (((r = Fe), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), $t(e, i), _t(r, e, i, -1));
    }
    return uu(), (r = na(Error(T(421)))), to(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (nt = un(i.nextSibling)),
      (rt = t),
      (de = !0),
      (Et = null),
      e !== null &&
        ((at[st++] = jt),
        (at[st++] = It),
        (at[st++] = zn),
        (jt = e.id),
        (It = e.overflow),
        (zn = t)),
      (t = ru(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ha(e.return, t, n);
}
function ra(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ph(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((He(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
        else if (e.tag === 19) Wc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ae(me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Wo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ra(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Wo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ra(t, !0, n, null, o);
        break;
      case "together":
        ra(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function yo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Cv(e, t, n) {
  switch (t.tag) {
    case 3:
      Rh(t), yr();
      break;
    case 5:
      eh(t);
      break;
    case 1:
      Je(t.type) && Io(t);
      break;
    case 4:
      Ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ae(Vo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Th(e, t, n)
          : (ae(me, me.current & 1),
            (e = Ht(e, t, n)),
            e !== null ? e.sibling : null);
      ae(me, me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ph(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ae(me, me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kh(e, t, n);
  }
  return Ht(e, t, n);
}
var Nh, Ja, Ah, Lh;
Nh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ja = function () {};
Ah = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ln(Lt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ea(e, i)), (r = Ea(e, r)), (o = []);
        break;
      case "select":
        (i = ge({}, i, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = xa(e, i)), (r = xa(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bo);
    }
    Ca(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ci.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ci.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ue("scroll", e),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Lh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function br(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Rv(e, t, n) {
  var r = t.pendingProps;
  switch ((Vs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return Je(t.type) && jo(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Er(),
        ce(Ge),
        ce(be),
        Gs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Et !== null && (ls(Et), (Et = null)))),
        Ja(e, t),
        Ie(t),
        null
      );
    case 5:
      Xs(t);
      var i = Ln(_i.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ah(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Ie(t), null;
        }
        if (((e = Ln(Lt.current)), Zi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Nt] = t), (r[Ei] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Jr.length; i++) ue(Jr[i], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              ec(r, o), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              nc(r, o), ue("invalid", r);
          }
          Ca(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ji(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ji(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ci.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              Hi(r), tc(r, o, !0);
              break;
            case "textarea":
              Hi(r), rc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Bo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = od(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Nt] = t),
            (e[Ei] = r),
            Nh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ra(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Jr.length; i++) ue(Jr[i], e);
                i = r;
                break;
              case "source":
                ue("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (i = r);
                break;
              case "details":
                ue("toggle", e), (i = r);
                break;
              case "input":
                ec(e, r), (i = Ea(e, r)), ue("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ge({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                nc(e, r), (i = xa(e, r)), ue("invalid", e);
                break;
              default:
                i = r;
            }
            Ca(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? sd(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ld(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && fi(e, s)
                    : typeof s == "number" && fi(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ci.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && ue("scroll", e)
                      : s != null && Ts(e, o, s, l));
              }
            switch (n) {
              case "input":
                Hi(e), tc(e, r, !1);
                break;
              case "textarea":
                Hi(e), rc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? sr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      sr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Bo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) Lh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = Ln(_i.current)), Ln(Lt.current), Zi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Nt] = t),
            (o = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ji(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ji(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Nt] = t),
            (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (ce(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && nt !== null && t.mode & 1 && !(t.flags & 128))
          Yd(), yr(), (t.flags |= 98560), (o = !1);
        else if (((o = Zi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(T(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(T(317));
            o[Nt] = t;
          } else
            yr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (o = !1);
        } else Et !== null && (ls(Et), (Et = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? Ae === 0 && (Ae = 3) : uu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        Er(), Ja(e, t), e === null && yi(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return Qs(t.type._context), Ie(t), null;
    case 17:
      return Je(t.type) && jo(), Ie(t), null;
    case 19:
      if ((ce(me), (o = t.memoizedState), o === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) br(o, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Wo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    br(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ae(me, (me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            _e() > _r &&
            ((t.flags |= 128), (r = !0), br(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Wo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              br(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !de)
            )
              return Ie(t), null;
          } else
            2 * _e() - o.renderingStartTime > _r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), br(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = _e()),
          (t.sibling = null),
          (n = me.current),
          ae(me, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        su(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? et & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Tv(e, t) {
  switch ((Vs(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && jo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Er(),
        ce(Ge),
        ce(be),
        Gs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xs(t), null;
    case 13:
      if (
        (ce(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        yr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(me), null;
    case 4:
      return Er(), null;
    case 10:
      return Qs(t.type._context), null;
    case 22:
    case 23:
      return su(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var no = !1,
  Ue = !1,
  Pv = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function Za(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Qc = !1;
function Nv(e, t) {
  if (((za = Do), (e = zd()), Us(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = l + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (p = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === i && (a = l),
                p === o && ++c === r && (s = l),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ba = { focusedElem: e, selectionRange: n }, Do = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    P = w.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : vt(t.type, S),
                      P
                    );
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (x) {
          Ee(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (w = Qc), (Qc = !1), w;
}
function ai(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Za(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function es(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Fh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nt], delete t[Ei], delete t[Ua], delete t[fv], delete t[dv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Oh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Kc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Oh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ts(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), (e = e.sibling);
}
function ns(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), (e = e.sibling);
}
var Me = null,
  gt = !1;
function Xt(e, t, n) {
  for (n = n.child; n !== null; ) Dh(e, t, n), (n = n.sibling);
}
function Dh(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == "function")
    try {
      At.onCommitFiberUnmount(ll, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || lr(n, t);
    case 6:
      var r = Me,
        i = gt;
      (Me = null),
        Xt(e, t, n),
        (Me = r),
        (gt = i),
        Me !== null &&
          (gt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null &&
        (gt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, n)
              : e.nodeType === 1 && Xl(e, n),
            mi(e))
          : Xl(Me, n.stateNode));
      break;
    case 4:
      (r = Me),
        (i = gt),
        (Me = n.stateNode.containerInfo),
        (gt = !0),
        Xt(e, t, n),
        (Me = r),
        (gt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Za(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      Xt(e, t, n);
      break;
    case 1:
      if (
        !Ue &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ee(n, t, a);
        }
      Xt(e, t, n);
      break;
    case 21:
      Xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), Xt(e, t, n), (Ue = r))
        : Xt(e, t, n);
      break;
    default:
      Xt(e, t, n);
  }
}
function qc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Pv()),
      t.forEach(function (r) {
        var i = jv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Me = a.stateNode), (gt = !1);
              break e;
            case 3:
              (Me = a.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (Me = a.stateNode.containerInfo), (gt = !0);
              break e;
          }
          a = a.return;
        }
        if (Me === null) throw Error(T(160));
        Dh(o, l, i), (Me = null), (gt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        Ee(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mh(t, e), (t = t.sibling);
}
function Mh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mt(t, e), Tt(e), r & 4)) {
        try {
          ai(3, e, e.return), pl(3, e);
        } catch (S) {
          Ee(e, e.return, S);
        }
        try {
          ai(5, e, e.return);
        } catch (S) {
          Ee(e, e.return, S);
        }
      }
      break;
    case 1:
      mt(t, e), Tt(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (
        (mt(t, e),
        Tt(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          fi(i, "");
        } catch (S) {
          Ee(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && rd(i, o),
              Ra(a, l);
            var u = Ra(a, o);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                f = s[l + 1];
              c === "style"
                ? sd(i, f)
                : c === "dangerouslySetInnerHTML"
                ? ld(i, f)
                : c === "children"
                ? fi(i, f)
                : Ts(i, c, f, u);
            }
            switch (a) {
              case "input":
                Sa(i, o);
                break;
              case "textarea":
                id(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? sr(i, !!o.multiple, v, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? sr(i, !!o.multiple, o.defaultValue, !0)
                      : sr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ei] = o;
          } catch (S) {
            Ee(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((mt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (S) {
          Ee(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (mt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mi(t.containerInfo);
        } catch (S) {
          Ee(e, e.return, S);
        }
      break;
    case 4:
      mt(t, e), Tt(e);
      break;
    case 13:
      mt(t, e),
        Tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (lu = _e())),
        r & 4 && qc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (u = Ue) || c), mt(t, e), (Ue = u)) : mt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (f = F = c; F !== null; ) {
              switch (((p = F), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ai(4, p, p.return);
                  break;
                case 1:
                  lr(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      Ee(r, n, S);
                    }
                  }
                  break;
                case 5:
                  lr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Xc(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (F = v)) : Xc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (s = f.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = ad("display", l)));
              } catch (S) {
                Ee(e, e.return, S);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (S) {
                Ee(e, e.return, S);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      mt(t, e), Tt(e), r & 4 && qc(e);
      break;
    case 21:
      break;
    default:
      mt(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Oh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (fi(i, ""), (r.flags &= -33));
          var o = Kc(e);
          ns(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Kc(e);
          ts(e, a, l);
          break;
        default:
          throw Error(T(161));
      }
    } catch (s) {
      Ee(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Av(e, t, n) {
  (F = e), zh(e);
}
function zh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || no;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || Ue;
        a = no;
        var u = Ue;
        if (((no = l), (Ue = s) && !u))
          for (F = i; F !== null; )
            (l = F),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Gc(i)
                : s !== null
                ? ((s.return = l), (F = s))
                : Gc(i);
        for (; o !== null; ) (F = o), zh(o), (o = o.sibling);
        (F = i), (no = a), (Ue = u);
      }
      Yc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (F = o)) : Yc(e);
  }
}
function Yc(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Oc(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Oc(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && mi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Ue || (t.flags & 512 && es(t));
      } catch (p) {
        Ee(t, t.return, p);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Xc(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Gc(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (s) {
            Ee(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Ee(t, i, s);
            }
          }
          var o = t.return;
          try {
            es(t);
          } catch (s) {
            Ee(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            es(t);
          } catch (s) {
            Ee(t, l, s);
          }
      }
    } catch (s) {
      Ee(t, t.return, s);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var Lv = Math.ceil,
  qo = Wt.ReactCurrentDispatcher,
  iu = Wt.ReactCurrentOwner,
  ft = Wt.ReactCurrentBatchConfig,
  Z = 0,
  Fe = null,
  Te = null,
  ze = 0,
  et = 0,
  ar = wn(0),
  Ae = 0,
  Ri = null,
  jn = 0,
  ml = 0,
  ou = 0,
  si = null,
  Ye = null,
  lu = 0,
  _r = 1 / 0,
  zt = null,
  Yo = !1,
  rs = null,
  fn = null,
  ro = !1,
  rn = null,
  Xo = 0,
  ui = 0,
  is = null,
  wo = -1,
  Eo = 0;
function We() {
  return Z & 6 ? _e() : wo !== -1 ? wo : (wo = _e());
}
function dn(e) {
  return e.mode & 1
    ? Z & 2 && ze !== 0
      ? ze & -ze
      : pv.transition !== null
      ? (Eo === 0 && (Eo = Ed()), Eo)
      : ((e = re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Td(e.type))),
        e)
    : 1;
}
function _t(e, t, n, r) {
  if (50 < ui) throw ((ui = 0), (is = null), Error(T(185)));
  Ai(e, n, r),
    (!(Z & 2) || e !== Fe) &&
      (e === Fe && (!(Z & 2) && (ml |= n), Ae === 4 && tn(e, ze)),
      Ze(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((_r = _e() + 500), fl && En()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  p0(e, t);
  var r = Oo(e, e === Fe ? ze : 0);
  if (r === 0)
    n !== null && lc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && lc(n), t === 1))
      e.tag === 0 ? hv(Jc.bind(null, e)) : Qd(Jc.bind(null, e)),
        uv(function () {
          !(Z & 6) && En();
        }),
        (n = null);
    else {
      switch (Sd(r)) {
        case 1:
          n = Fs;
          break;
        case 4:
          n = yd;
          break;
        case 16:
          n = Fo;
          break;
        case 536870912:
          n = wd;
          break;
        default:
          n = Fo;
      }
      n = Hh(n, Bh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bh(e, t) {
  if (((wo = -1), (Eo = 0), Z & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (hr() && e.callbackNode !== n) return null;
  var r = Oo(e, e === Fe ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Go(e, r);
  else {
    t = r;
    var i = Z;
    Z |= 2;
    var o = Ih();
    (Fe !== e || ze !== t) && ((zt = null), (_r = _e() + 500), On(e, t));
    do
      try {
        Dv();
        break;
      } catch (a) {
        jh(e, a);
      }
    while (!0);
    Ws(),
      (qo.current = o),
      (Z = i),
      Te !== null ? (t = 0) : ((Fe = null), (ze = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = La(e)), i !== 0 && ((r = i), (t = os(e, i)))), t === 1)
    )
      throw ((n = Ri), On(e, 0), tn(e, r), Ze(e, _e()), n);
    if (t === 6) tn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Fv(i) &&
          ((t = Go(e, r)),
          t === 2 && ((o = La(e)), o !== 0 && ((r = o), (t = os(e, o)))),
          t === 1))
      )
        throw ((n = Ri), On(e, 0), tn(e, r), Ze(e, _e()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Rn(e, Ye, zt);
          break;
        case 3:
          if (
            (tn(e, r), (r & 130023424) === r && ((t = lu + 500 - _e()), 10 < t))
          ) {
            if (Oo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ia(Rn.bind(null, e, Ye, zt), t);
            break;
          }
          Rn(e, Ye, zt);
          break;
        case 4:
          if ((tn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - St(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = _e() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Lv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ia(Rn.bind(null, e, Ye, zt), r);
            break;
          }
          Rn(e, Ye, zt);
          break;
        case 5:
          Rn(e, Ye, zt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ze(e, _e()), e.callbackNode === n ? Bh.bind(null, e) : null;
}
function os(e, t) {
  var n = si;
  return (
    e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256),
    (e = Go(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && ls(t)),
    e
  );
}
function ls(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function Fv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!xt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tn(e, t) {
  for (
    t &= ~ou,
      t &= ~ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Jc(e) {
  if (Z & 6) throw Error(T(327));
  hr();
  var t = Oo(e, 0);
  if (!(t & 1)) return Ze(e, _e()), null;
  var n = Go(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = La(e);
    r !== 0 && ((t = r), (n = os(e, r)));
  }
  if (n === 1) throw ((n = Ri), On(e, 0), tn(e, t), Ze(e, _e()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, Ye, zt),
    Ze(e, _e()),
    null
  );
}
function au(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((_r = _e() + 500), fl && En());
  }
}
function In(e) {
  rn !== null && rn.tag === 0 && !(Z & 6) && hr();
  var t = Z;
  Z |= 1;
  var n = ft.transition,
    r = re;
  try {
    if (((ft.transition = null), (re = 1), e)) return e();
  } finally {
    (re = r), (ft.transition = n), (Z = t), !(Z & 6) && En();
  }
}
function su() {
  (et = ar.current), ce(ar);
}
function On(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sv(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((Vs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && jo();
          break;
        case 3:
          Er(), ce(Ge), ce(be), Gs();
          break;
        case 5:
          Xs(r);
          break;
        case 4:
          Er();
          break;
        case 13:
          ce(me);
          break;
        case 19:
          ce(me);
          break;
        case 10:
          Qs(r.type._context);
          break;
        case 22:
        case 23:
          su();
      }
      n = n.return;
    }
  if (
    ((Fe = e),
    (Te = e = hn(e.current, null)),
    (ze = et = t),
    (Ae = 0),
    (Ri = null),
    (ou = ml = jn = 0),
    (Ye = si = null),
    An !== null)
  ) {
    for (t = 0; t < An.length; t++)
      if (((n = An[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    An = null;
  }
  return e;
}
function jh(e, t) {
  do {
    var n = Te;
    try {
      if ((Ws(), (vo.current = Ko), Qo)) {
        for (var r = ve.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Qo = !1;
      }
      if (
        ((Bn = 0),
        (Le = Ne = ve = null),
        (li = !1),
        (xi = 0),
        (iu.current = null),
        n === null || n.return === null)
      ) {
        (Ae = 1), (Ri = t), (Te = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = ze),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Ic(l);
          if (v !== null) {
            (v.flags &= -257),
              Uc(v, l, a, o, t),
              v.mode & 1 && jc(o, u, t),
              (t = v),
              (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              jc(o, u, t), uu();
              break e;
            }
            s = Error(T(426));
          }
        } else if (de && a.mode & 1) {
          var P = Ic(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Uc(P, l, a, o, t),
              $s(Sr(s, a));
            break e;
          }
        }
        (o = s = Sr(s, a)),
          Ae !== 4 && (Ae = 2),
          si === null ? (si = [o]) : si.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Sh(o, s, t);
              Fc(o, h);
              break e;
            case 1:
              a = s;
              var d = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (fn === null || !fn.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = _h(o, a, t);
                Fc(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      bh(n);
    } catch (A) {
      (t = A), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ih() {
  var e = qo.current;
  return (qo.current = Ko), e === null ? Ko : e;
}
function uu() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Fe === null || (!(jn & 268435455) && !(ml & 268435455)) || tn(Fe, ze);
}
function Go(e, t) {
  var n = Z;
  Z |= 2;
  var r = Ih();
  (Fe !== e || ze !== t) && ((zt = null), On(e, t));
  do
    try {
      Ov();
      break;
    } catch (i) {
      jh(e, i);
    }
  while (!0);
  if ((Ws(), (Z = n), (qo.current = r), Te !== null)) throw Error(T(261));
  return (Fe = null), (ze = 0), Ae;
}
function Ov() {
  for (; Te !== null; ) Uh(Te);
}
function Dv() {
  for (; Te !== null && !o0(); ) Uh(Te);
}
function Uh(e) {
  var t = $h(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? bh(e) : (Te = t),
    (iu.current = null);
}
function bh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Tv(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (Te = null);
        return;
      }
    } else if (((n = Rv(n, t, et)), n !== null)) {
      Te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function Rn(e, t, n) {
  var r = re,
    i = ft.transition;
  try {
    (ft.transition = null), (re = 1), Mv(e, t, n, r);
  } finally {
    (ft.transition = i), (re = r);
  }
  return null;
}
function Mv(e, t, n, r) {
  do hr();
  while (rn !== null);
  if (Z & 6) throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (m0(e, o),
    e === Fe && ((Te = Fe = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ro ||
      ((ro = !0),
      Hh(Fo, function () {
        return hr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ft.transition), (ft.transition = null);
    var l = re;
    re = 1;
    var a = Z;
    (Z |= 4),
      (iu.current = null),
      Nv(e, n),
      Mh(n, e),
      tv(Ba),
      (Do = !!za),
      (Ba = za = null),
      (e.current = n),
      Av(n),
      l0(),
      (Z = a),
      (re = l),
      (ft.transition = o);
  } else e.current = n;
  if (
    (ro && ((ro = !1), (rn = e), (Xo = i)),
    (o = e.pendingLanes),
    o === 0 && (fn = null),
    u0(n.stateNode),
    Ze(e, _e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Yo) throw ((Yo = !1), (e = rs), (rs = null), e);
  return (
    Xo & 1 && e.tag !== 0 && hr(),
    (o = e.pendingLanes),
    o & 1 ? (e === is ? ui++ : ((ui = 0), (is = e))) : (ui = 0),
    En(),
    null
  );
}
function hr() {
  if (rn !== null) {
    var e = Sd(Xo),
      t = ft.transition,
      n = re;
    try {
      if (((ft.transition = null), (re = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (Xo = 0), Z & 6)) throw Error(T(331));
        var i = Z;
        for (Z |= 4, F = e.current; F !== null; ) {
          var o = F,
            l = o.child;
          if (F.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ai(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (F = f);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var p = c.sibling,
                        v = c.return;
                      if ((Fh(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (F = p);
                        break;
                      }
                      F = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var P = S.sibling;
                    (S.sibling = null), (S = P);
                  } while (S !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (F = l);
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ai(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (F = h);
                break e;
              }
              F = o.return;
            }
        }
        var d = e.current;
        for (F = d; F !== null; ) {
          l = F;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), (F = y);
          else
            e: for (l = d; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, a);
                  }
                } catch (A) {
                  Ee(a, a.return, A);
                }
              if (a === l) {
                F = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (F = x);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((Z = i), En(), At && typeof At.onPostCommitFiberRoot == "function")
        )
          try {
            At.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (re = n), (ft.transition = t);
    }
  }
  return !1;
}
function Zc(e, t, n) {
  (t = Sr(n, t)),
    (t = Sh(e, t, 1)),
    (e = cn(e, t, 1)),
    (t = We()),
    e !== null && (Ai(e, 1, t), Ze(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Zc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fn === null || !fn.has(r)))
        ) {
          (e = Sr(n, e)),
            (e = _h(t, e, 1)),
            (t = cn(t, e, 1)),
            (e = We()),
            t !== null && (Ai(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Fe === e &&
      (ze & n) === n &&
      (Ae === 4 || (Ae === 3 && (ze & 130023424) === ze && 500 > _e() - lu)
        ? On(e, 0)
        : (ou |= n)),
    Ze(e, t);
}
function Vh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ki), (Ki <<= 1), !(Ki & 130023424) && (Ki = 4194304))
      : (t = 1));
  var n = We();
  (e = $t(e, t)), e !== null && (Ai(e, t, n), Ze(e, n));
}
function Bv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vh(e, n);
}
function jv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Vh(e, n);
}
var $h;
$h = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Cv(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), de && t.flags & 1048576 && Kd(t, bo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      yo(e, t), (e = t.pendingProps);
      var i = gr(t, be.current);
      dr(t, n), (i = Zs(null, t, r, e, i, n));
      var o = eu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Je(r) ? ((o = !0), Io(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            qs(t),
            (i.updater = hl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Qa(t, r, e, n),
            (t = Ya(null, t, r, !0, o, n)))
          : ((t.tag = 0), de && o && bs(t), He(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (yo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Uv(r)),
          (e = vt(r, e)),
          i)
        ) {
          case 0:
            t = qa(null, t, r, e, n);
            break e;
          case 1:
            t = $c(null, t, r, e, n);
            break e;
          case 11:
            t = bc(null, t, r, e, n);
            break e;
          case 14:
            t = Vc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        qa(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        $c(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Rh(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Zd(e, t),
          Ho(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Sr(Error(T(423)), t)), (t = Hc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Sr(Error(T(424)), t)), (t = Hc(e, t, r, n, i));
            break e;
          } else
            for (
              nt = un(t.stateNode.containerInfo.firstChild),
                rt = t,
                de = !0,
                Et = null,
                n = Gd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yr(), r === i)) {
            t = Ht(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        eh(t),
        e === null && $a(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        ja(r, i) ? (l = null) : o !== null && ja(r, o) && (t.flags |= 32),
        Ch(e, t),
        He(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && $a(t), null;
    case 13:
      return Th(e, t, n);
    case 4:
      return (
        Ys(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = wr(t, null, r, n)) : He(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        bc(e, t, r, i, n)
      );
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          ae(Vo, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (xt(o.value, l)) {
            if (o.children === i.children && !Ge.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ut(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Ha(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(T(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Ha(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        He(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        dr(t, n),
        (i = dt(i)),
        (r = r(i)),
        (t.flags |= 1),
        He(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = vt(r, t.pendingProps)),
        (i = vt(r.type, i)),
        Vc(e, t, r, i, n)
      );
    case 15:
      return xh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        yo(e, t),
        (t.tag = 1),
        Je(r) ? ((e = !0), Io(t)) : (e = !1),
        dr(t, n),
        Eh(t, r, i),
        Qa(t, r, i, n),
        Ya(null, t, r, !0, e, n)
      );
    case 19:
      return Ph(e, t, n);
    case 22:
      return kh(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Hh(e, t) {
  return gd(e, t);
}
function Iv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ct(e, t, n, r) {
  return new Iv(e, t, n, r);
}
function cu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uv(e) {
  if (typeof e == "function") return cu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ns)) return 11;
    if (e === As) return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function So(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) cu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Gn:
        return Dn(n.children, i, o, t);
      case Ps:
        (l = 8), (i |= 8);
        break;
      case va:
        return (
          (e = ct(12, n, t, i | 2)), (e.elementType = va), (e.lanes = o), e
        );
      case ga:
        return (e = ct(13, n, t, i)), (e.elementType = ga), (e.lanes = o), e;
      case ya:
        return (e = ct(19, n, t, i)), (e.elementType = ya), (e.lanes = o), e;
      case ed:
        return vl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Jf:
              l = 10;
              break e;
            case Zf:
              l = 9;
              break e;
            case Ns:
              l = 11;
              break e;
            case As:
              l = 14;
              break e;
            case Jt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ct(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Dn(e, t, n, r) {
  return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function vl(e, t, n, r) {
  return (
    (e = ct(22, e, r, t)),
    (e.elementType = ed),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ia(e, t, n) {
  return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function oa(e, t, n) {
  return (
    (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Il(0)),
    (this.expirationTimes = Il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function fu(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new bv(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ct(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qs(o),
    e
  );
}
function Vv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wh(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
    if (Vn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return Wd(e, n, t);
  }
  return t;
}
function Qh(e, t, n, r, i, o, l, a, s) {
  return (
    (e = fu(n, r, !0, e, i, o, l, a, s)),
    (e.context = Wh(null)),
    (n = e.current),
    (r = We()),
    (i = dn(n)),
    (o = Ut(r, i)),
    (o.callback = t ?? null),
    cn(n, o, i),
    (e.current.lanes = i),
    Ai(e, i, r),
    Ze(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var i = t.current,
    o = We(),
    l = dn(i);
  return (
    (n = Wh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = cn(i, t, l)),
    e !== null && (_t(e, i, l, o), mo(e, i, l)),
    l
  );
}
function Jo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ef(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function du(e, t) {
  ef(e, t), (e = e.alternate) && ef(e, t);
}
function $v() {
  return null;
}
var Kh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function hu(e) {
  this._internalRoot = e;
}
yl.prototype.render = hu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  gl(e, t, null, null);
};
yl.prototype.unmount = hu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    In(function () {
      gl(null, e, null, null);
    }),
      (t[Vt] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
    en.splice(n, 0, e), n === 0 && Rd(e);
  }
};
function pu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function tf() {}
function Hv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Jo(l);
        o.call(u);
      };
    }
    var l = Qh(t, r, e, 0, null, !1, !1, "", tf);
    return (
      (e._reactRootContainer = l),
      (e[Vt] = l.current),
      yi(e.nodeType === 8 ? e.parentNode : e),
      In(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Jo(s);
      a.call(u);
    };
  }
  var s = fu(e, 0, !1, null, null, !1, !1, "", tf);
  return (
    (e._reactRootContainer = s),
    (e[Vt] = s.current),
    yi(e.nodeType === 8 ? e.parentNode : e),
    In(function () {
      gl(t, s, n, r);
    }),
    s
  );
}
function El(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = Jo(l);
        a.call(s);
      };
    }
    gl(t, l, e, i);
  } else l = Hv(n, t, e, i, r);
  return Jo(l);
}
_d = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gr(t.pendingLanes);
        n !== 0 &&
          (Os(t, n | 1), Ze(t, _e()), !(Z & 6) && ((_r = _e() + 500), En()));
      }
      break;
    case 13:
      In(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var i = We();
          _t(r, e, 1, i);
        }
      }),
        du(e, 1);
  }
};
Ds = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = We();
      _t(t, e, 134217728, n);
    }
    du(e, 134217728);
  }
};
xd = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = $t(e, t);
    if (n !== null) {
      var r = We();
      _t(n, e, t, r);
    }
    du(e, t);
  }
};
kd = function () {
  return re;
};
Cd = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
Pa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Sa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = cl(r);
            if (!i) throw Error(T(90));
            nd(r), Sa(r, i);
          }
        }
      }
      break;
    case "textarea":
      id(e, n);
      break;
    case "select":
      (t = n.value), t != null && sr(e, !!n.multiple, t, !1);
  }
};
fd = au;
dd = In;
var Wv = { usingClientEntryPoint: !1, Events: [Fi, tr, cl, ud, cd, au] },
  Vr = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qv = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = md(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || $v,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!io.isDisabled && io.supportsFiber)
    try {
      (ll = io.inject(Qv)), (At = io);
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wv;
ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pu(t)) throw Error(T(200));
  return Vv(e, t, null, n);
};
ot.createRoot = function (e, t) {
  if (!pu(e)) throw Error(T(299));
  var n = !1,
    r = "",
    i = Kh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = fu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Vt] = t.current),
    yi(e.nodeType === 8 ? e.parentNode : e),
    new hu(t)
  );
};
ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = md(t)), (e = e === null ? null : e.stateNode), e;
};
ot.flushSync = function (e) {
  return In(e);
};
ot.hydrate = function (e, t, n) {
  if (!wl(t)) throw Error(T(200));
  return El(null, e, t, !0, n);
};
ot.hydrateRoot = function (e, t, n) {
  if (!pu(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Kh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Qh(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Vt] = t.current),
    yi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new yl(t);
};
ot.render = function (e, t, n) {
  if (!wl(t)) throw Error(T(200));
  return El(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function (e) {
  if (!wl(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (In(function () {
        El(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vt] = null);
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = au;
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wl(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return El(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function qh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qh);
    } catch (e) {
      console.error(e);
    }
}
qh(), (qf.exports = ot);
var mu = qf.exports;
const Kv = Un(mu),
  qv = zf({ __proto__: null, default: Kv }, [mu]);
var Yh,
  nf = mu;
(Yh = nf.createRoot), nf.hydrateRoot;
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fe.apply(this, arguments)
  );
}
var Re;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Re || (Re = {}));
const rf = "popstate";
function Yv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: a } = r.location;
    return Ti(
      "",
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Di(i);
  }
  return Gv(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function xr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Xv() {
  return Math.random().toString(36).substr(2, 8);
}
function of(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ti(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Sn(t) : t,
      { state: n, key: (t && t.key) || r || Xv() }
    )
  );
}
function Di(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Sn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Gv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = Re.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), l.replaceState(fe({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    a = Re.Pop;
    let P = c(),
      h = P == null ? null : P - u;
    (u = P), s && s({ action: a, location: S.location, delta: h });
  }
  function p(P, h) {
    a = Re.Push;
    let d = Ti(S.location, P, h);
    u = c() + 1;
    let y = of(d, u),
      x = S.createHref(d);
    try {
      l.pushState(y, "", x);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError") throw A;
      i.location.assign(x);
    }
    o && s && s({ action: a, location: S.location, delta: 1 });
  }
  function v(P, h) {
    a = Re.Replace;
    let d = Ti(S.location, P, h);
    u = c();
    let y = of(d, u),
      x = S.createHref(d);
    l.replaceState(y, "", x),
      o && s && s({ action: a, location: S.location, delta: 0 });
  }
  function w(P) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof P == "string" ? P : Di(P);
    return (
      (d = d.replace(/ $/, "%20")),
      G(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, h)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(P) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(rf, f),
        (s = P),
        () => {
          i.removeEventListener(rf, f), (s = null);
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: w,
    encodeLocation(P) {
      let h = w(P);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: v,
    go(P) {
      return l.go(P);
    },
  };
  return S;
}
var oe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(oe || (oe = {}));
const Jv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Zv(e) {
  return e.index === !0;
}
function Zo(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let l = [...n, String(o)],
        a = typeof i.id == "string" ? i.id : l.join("-");
      if (
        (G(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        G(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Zv(i))
      ) {
        let s = fe({}, i, t(i), { id: a });
        return (r[a] = s), s;
      } else {
        let s = fe({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = s), i.children && (s.children = Zo(i.children, t, l, r)), s
        );
      }
    })
  );
}
function Tn(e, t, n) {
  return n === void 0 && (n = "/"), _o(e, t, n, !1);
}
function _o(e, t, n, r) {
  let i = typeof t == "string" ? Sn(t) : t,
    o = Mi(i.pathname || "/", n);
  if (o == null) return null;
  let l = Xh(e);
  tg(l);
  let a = null;
  for (let s = 0; a == null && s < l.length; ++s) {
    let u = dg(o);
    a = cg(l[s], u, r);
  }
  return a;
}
function eg(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Xh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (G(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = pn([r, s.relativePath]),
      c = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Xh(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: sg(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, l) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
      else for (let s of Gh(o.path)) i(o, l, s);
    }),
    t
  );
}
function Gh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Gh(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function tg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ug(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ng = /^:[\w-]+$/,
  rg = 3,
  ig = 2,
  og = 1,
  lg = 10,
  ag = -2,
  lf = (e) => e === "*";
function sg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(lf) && (r += ag),
    t && (r += ig),
    n
      .filter((i) => !lf(i))
      .reduce((i, o) => i + (ng.test(o) ? rg : o === "" ? og : lg), r)
  );
}
function ug(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function cg(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    l = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      f = af(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        c
      ),
      p = s.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = af(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      l.push({
        params: i,
        pathname: pn([o, f.pathname]),
        pathnameBase: mg(pn([o, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (o = pn([o, f.pathnameBase]));
  }
  return l;
}
function af(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fg(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: p, isOptional: v } = c;
      if (p === "*") {
        let S = a[f] || "";
        l = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[f];
      return (
        v && !w ? (u[p] = void 0) : (u[p] = (w || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function fg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    xr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function dg(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      xr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Mi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function hg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Sn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : pg(n, t)) : t,
    search: vg(r),
    hash: gg(i),
  };
}
function pg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function la(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Jh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Zh(e, t) {
  let n = Jh(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ep(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Sn(e))
    : ((i = fe({}, e)),
      G(
        !i.pathname || !i.pathname.includes("?"),
        la("?", "pathname", "search", i)
      ),
      G(
        !i.pathname || !i.pathname.includes("#"),
        la("#", "pathname", "hash", i)
      ),
      G(!i.search || !i.search.includes("#"), la("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    a;
  if (l == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let s = hg(i, a),
    u = l && l !== "/" && l.endsWith("/"),
    c = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const pn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  mg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  vg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  gg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class el {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Sl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const tp = ["post", "put", "patch", "delete"],
  yg = new Set(tp),
  wg = ["get", ...tp],
  Eg = new Set(wg),
  Sg = new Set([301, 302, 303, 307, 308]),
  _g = new Set([307, 308]),
  aa = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  xg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  $r = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  vu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  np = "remix-router-transitions";
function Cg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  G(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    i = (E) => ({ hasErrorBoundary: g(E) });
  } else i = kg;
  let o = {},
    l = Zo(e.routes, i, void 0, o),
    a,
    s = e.basename || "/",
    u = e.dataStrategy || Ng,
    c = e.patchRoutesOnNavigation,
    f = fe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    p = null,
    v = new Set(),
    w = null,
    S = null,
    P = null,
    h = e.hydrationData != null,
    d = Tn(l, e.history.location, s),
    y = null;
  if (d == null && !c) {
    let g = qe(404, { pathname: e.history.location.pathname }),
      { matches: E, route: _ } = yf(l);
    (d = E), (y = { [_.id]: g });
  }
  d &&
    !e.hydrationData &&
    ji(d, l, e.history.location.pathname).active &&
    (d = null);
  let x;
  if (d)
    if (d.some((g) => g.route.lazy)) x = !1;
    else if (!d.some((g) => g.route.loader)) x = !0;
    else if (f.v7_partialHydration) {
      let g = e.hydrationData ? e.hydrationData.loaderData : null,
        E = e.hydrationData ? e.hydrationData.errors : null;
      if (E) {
        let _ = d.findIndex((C) => E[C.route.id] !== void 0);
        x = d.slice(0, _ + 1).every((C) => !ss(C.route, g, E));
      } else x = d.every((_) => !ss(_.route, g, E));
    } else x = e.hydrationData != null;
  else if (((x = !1), (d = []), f.v7_partialHydration)) {
    let g = ji(null, l, e.history.location.pathname);
    g.active && g.matches && (d = g.matches);
  }
  let A,
    m = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: d,
      initialized: x,
      navigation: aa,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    N = Re.Pop,
    k = !1,
    z,
    j = !1,
    ie = new Map(),
    he = null,
    xe = !1,
    ke = !1,
    Qt = [],
    Kt = new Set(),
    Se = new Map(),
    L = 0,
    V = -1,
    $ = new Map(),
    te = new Set(),
    se = new Map(),
    Ct = new Map(),
    Oe = new Set(),
    pt = new Map(),
    Ve = new Map(),
    Ot;
  function rm() {
    if (
      ((p = e.history.listen((g) => {
        let { action: E, location: _, delta: C } = g;
        if (Ot) {
          Ot(), (Ot = void 0);
          return;
        }
        xr(
          Ve.size === 0 || C != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let O = Hu({
          currentLocation: m.location,
          nextLocation: _,
          historyAction: E,
        });
        if (O && C != null) {
          let I = new Promise((H) => {
            Ot = H;
          });
          e.history.go(C * -1),
            Bi(O, {
              state: "blocked",
              location: _,
              proceed() {
                Bi(O, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  I.then(() => e.history.go(C));
              },
              reset() {
                let H = new Map(m.blockers);
                H.set(O, $r), $e({ blockers: H });
              },
            });
          return;
        }
        return _n(E, _);
      })),
      n)
    ) {
      $g(t, ie);
      let g = () => Hg(t, ie);
      t.addEventListener("pagehide", g),
        (he = () => t.removeEventListener("pagehide", g));
    }
    return m.initialized || _n(Re.Pop, m.location, { initialHydration: !0 }), A;
  }
  function im() {
    p && p(),
      he && he(),
      v.clear(),
      z && z.abort(),
      m.fetchers.forEach((g, E) => zi(E)),
      m.blockers.forEach((g, E) => $u(E));
  }
  function om(g) {
    return v.add(g), () => v.delete(g);
  }
  function $e(g, E) {
    E === void 0 && (E = {}), (m = fe({}, m, g));
    let _ = [],
      C = [];
    f.v7_fetcherPersist &&
      m.fetchers.forEach((O, I) => {
        O.state === "idle" && (Oe.has(I) ? C.push(I) : _.push(I));
      }),
      [...v].forEach((O) =>
        O(m, {
          deletedFetchers: C,
          viewTransitionOpts: E.viewTransitionOpts,
          flushSync: E.flushSync === !0,
        })
      ),
      f.v7_fetcherPersist &&
        (_.forEach((O) => m.fetchers.delete(O)), C.forEach((O) => zi(O)));
  }
  function Hn(g, E, _) {
    var C, O;
    let { flushSync: I } = _ === void 0 ? {} : _,
      H =
        m.actionData != null &&
        m.navigation.formMethod != null &&
        yt(m.navigation.formMethod) &&
        m.navigation.state === "loading" &&
        ((C = g.state) == null ? void 0 : C._isRedirect) !== !0,
      M;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (M = E.actionData)
        : (M = null)
      : H
      ? (M = m.actionData)
      : (M = null);
    let B = E.loaderData
        ? vf(m.loaderData, E.loaderData, E.matches || [], E.errors)
        : m.loaderData,
      D = m.blockers;
    D.size > 0 && ((D = new Map(D)), D.forEach((J, De) => D.set(De, $r)));
    let U =
      k === !0 ||
      (m.navigation.formMethod != null &&
        yt(m.navigation.formMethod) &&
        ((O = g.state) == null ? void 0 : O._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      xe ||
        N === Re.Pop ||
        (N === Re.Push
          ? e.history.push(g, g.state)
          : N === Re.Replace && e.history.replace(g, g.state));
    let Y;
    if (N === Re.Pop) {
      let J = ie.get(m.location.pathname);
      J && J.has(g.pathname)
        ? (Y = { currentLocation: m.location, nextLocation: g })
        : ie.has(g.pathname) &&
          (Y = { currentLocation: g, nextLocation: m.location });
    } else if (j) {
      let J = ie.get(m.location.pathname);
      J
        ? J.add(g.pathname)
        : ((J = new Set([g.pathname])), ie.set(m.location.pathname, J)),
        (Y = { currentLocation: m.location, nextLocation: g });
    }
    $e(
      fe({}, E, {
        actionData: M,
        loaderData: B,
        historyAction: N,
        location: g,
        initialized: !0,
        navigation: aa,
        revalidation: "idle",
        restoreScrollPosition: Qu(g, E.matches || m.matches),
        preventScrollReset: U,
        blockers: D,
      }),
      { viewTransitionOpts: Y, flushSync: I === !0 }
    ),
      (N = Re.Pop),
      (k = !1),
      (j = !1),
      (xe = !1),
      (ke = !1),
      (Qt = []);
  }
  async function zu(g, E) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let _ = as(
        m.location,
        m.matches,
        s,
        f.v7_prependBasename,
        g,
        f.v7_relativeSplatPath,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      {
        path: C,
        submission: O,
        error: I,
      } = sf(f.v7_normalizeFormMethod, !1, _, E),
      H = m.location,
      M = Ti(m.location, C, E && E.state);
    M = fe({}, M, e.history.encodeLocation(M));
    let B = E && E.replace != null ? E.replace : void 0,
      D = Re.Push;
    B === !0
      ? (D = Re.Replace)
      : B === !1 ||
        (O != null &&
          yt(O.formMethod) &&
          O.formAction === m.location.pathname + m.location.search &&
          (D = Re.Replace));
    let U =
        E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
      Y = (E && E.flushSync) === !0,
      J = Hu({ currentLocation: H, nextLocation: M, historyAction: D });
    if (J) {
      Bi(J, {
        state: "blocked",
        location: M,
        proceed() {
          Bi(J, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: M,
          }),
            zu(g, E);
        },
        reset() {
          let De = new Map(m.blockers);
          De.set(J, $r), $e({ blockers: De });
        },
      });
      return;
    }
    return await _n(D, M, {
      submission: O,
      pendingError: I,
      preventScrollReset: U,
      replace: E && E.replace,
      enableViewTransition: E && E.viewTransition,
      flushSync: Y,
    });
  }
  function lm() {
    if (
      (Al(),
      $e({ revalidation: "loading" }),
      m.navigation.state !== "submitting")
    ) {
      if (m.navigation.state === "idle") {
        _n(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      _n(N || m.historyAction, m.navigation.location, {
        overrideNavigation: m.navigation,
        enableViewTransition: j === !0,
      });
    }
  }
  async function _n(g, E, _) {
    z && z.abort(),
      (z = null),
      (N = g),
      (xe = (_ && _.startUninterruptedRevalidation) === !0),
      vm(m.location, m.matches),
      (k = (_ && _.preventScrollReset) === !0),
      (j = (_ && _.enableViewTransition) === !0);
    let C = a || l,
      O = _ && _.overrideNavigation,
      I = Tn(C, E, s),
      H = (_ && _.flushSync) === !0,
      M = ji(I, C, E.pathname);
    if ((M.active && M.matches && (I = M.matches), !I)) {
      let { error: le, notFoundMatches: ne, route: ye } = Ll(E.pathname);
      Hn(
        E,
        { matches: ne, loaderData: {}, errors: { [ye.id]: le } },
        { flushSync: H }
      );
      return;
    }
    if (
      m.initialized &&
      !ke &&
      Mg(m.location, E) &&
      !(_ && _.submission && yt(_.submission.formMethod))
    ) {
      Hn(E, { matches: I }, { flushSync: H });
      return;
    }
    z = new AbortController();
    let B = Yn(e.history, E, z.signal, _ && _.submission),
      D;
    if (_ && _.pendingError)
      D = [Pn(I).route.id, { type: oe.error, error: _.pendingError }];
    else if (_ && _.submission && yt(_.submission.formMethod)) {
      let le = await am(B, E, _.submission, I, M.active, {
        replace: _.replace,
        flushSync: H,
      });
      if (le.shortCircuited) return;
      if (le.pendingActionResult) {
        let [ne, ye] = le.pendingActionResult;
        if (tt(ye) && Sl(ye.error) && ye.error.status === 404) {
          (z = null),
            Hn(E, {
              matches: le.matches,
              loaderData: {},
              errors: { [ne]: ye.error },
            });
          return;
        }
      }
      (I = le.matches || I),
        (D = le.pendingActionResult),
        (O = sa(E, _.submission)),
        (H = !1),
        (M.active = !1),
        (B = Yn(e.history, B.url, B.signal));
    }
    let {
      shortCircuited: U,
      matches: Y,
      loaderData: J,
      errors: De,
    } = await sm(
      B,
      E,
      I,
      M.active,
      O,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      H,
      D
    );
    U ||
      ((z = null),
      Hn(E, fe({ matches: Y || I }, gf(D), { loaderData: J, errors: De })));
  }
  async function am(g, E, _, C, O, I) {
    I === void 0 && (I = {}), Al();
    let H = bg(E, _);
    if (($e({ navigation: H }, { flushSync: I.flushSync === !0 }), O)) {
      let D = await Ii(C, E.pathname, g.signal);
      if (D.type === "aborted") return { shortCircuited: !0 };
      if (D.type === "error") {
        let U = Pn(D.partialMatches).route.id;
        return {
          matches: D.partialMatches,
          pendingActionResult: [U, { type: oe.error, error: D.error }],
        };
      } else if (D.matches) C = D.matches;
      else {
        let { notFoundMatches: U, error: Y, route: J } = Ll(E.pathname);
        return {
          matches: U,
          pendingActionResult: [J.id, { type: oe.error, error: Y }],
        };
      }
    }
    let M,
      B = Zr(C, E);
    if (!B.route.action && !B.route.lazy)
      M = {
        type: oe.error,
        error: qe(405, {
          method: g.method,
          pathname: E.pathname,
          routeId: B.route.id,
        }),
      };
    else if (
      ((M = (await Lr("action", m, g, [B], C, null))[B.route.id]),
      g.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Fn(M)) {
      let D;
      return (
        I && I.replace != null
          ? (D = I.replace)
          : (D =
              hf(M.response.headers.get("Location"), new URL(g.url), s) ===
              m.location.pathname + m.location.search),
        await xn(g, M, !0, { submission: _, replace: D }),
        { shortCircuited: !0 }
      );
    }
    if (on(M)) throw qe(400, { type: "defer-action" });
    if (tt(M)) {
      let D = Pn(C, B.route.id);
      return (
        (I && I.replace) !== !0 && (N = Re.Push),
        { matches: C, pendingActionResult: [D.route.id, M] }
      );
    }
    return { matches: C, pendingActionResult: [B.route.id, M] };
  }
  async function sm(g, E, _, C, O, I, H, M, B, D, U) {
    let Y = O || sa(E, I),
      J = I || H || Ef(Y),
      De = !xe && (!f.v7_partialHydration || !B);
    if (C) {
      if (De) {
        let we = Bu(U);
        $e(fe({ navigation: Y }, we !== void 0 ? { actionData: we } : {}), {
          flushSync: D,
        });
      }
      let ee = await Ii(_, E.pathname, g.signal);
      if (ee.type === "aborted") return { shortCircuited: !0 };
      if (ee.type === "error") {
        let we = Pn(ee.partialMatches).route.id;
        return {
          matches: ee.partialMatches,
          loaderData: {},
          errors: { [we]: ee.error },
        };
      } else if (ee.matches) _ = ee.matches;
      else {
        let { error: we, notFoundMatches: Qn, route: Dr } = Ll(E.pathname);
        return { matches: Qn, loaderData: {}, errors: { [Dr.id]: we } };
      }
    }
    let le = a || l,
      [ne, ye] = cf(
        e.history,
        m,
        _,
        J,
        E,
        f.v7_partialHydration && B === !0,
        f.v7_skipActionErrorRevalidation,
        ke,
        Qt,
        Kt,
        Oe,
        se,
        te,
        le,
        s,
        U
      );
    if (
      (Fl(
        (ee) =>
          !(_ && _.some((we) => we.route.id === ee)) ||
          (ne && ne.some((we) => we.route.id === ee))
      ),
      (V = ++L),
      ne.length === 0 && ye.length === 0)
    ) {
      let ee = bu();
      return (
        Hn(
          E,
          fe(
            {
              matches: _,
              loaderData: {},
              errors: U && tt(U[1]) ? { [U[0]]: U[1].error } : null,
            },
            gf(U),
            ee ? { fetchers: new Map(m.fetchers) } : {}
          ),
          { flushSync: D }
        ),
        { shortCircuited: !0 }
      );
    }
    if (De) {
      let ee = {};
      if (!C) {
        ee.navigation = Y;
        let we = Bu(U);
        we !== void 0 && (ee.actionData = we);
      }
      ye.length > 0 && (ee.fetchers = um(ye)), $e(ee, { flushSync: D });
    }
    ye.forEach((ee) => {
      Yt(ee.key), ee.controller && Se.set(ee.key, ee.controller);
    });
    let Wn = () => ye.forEach((ee) => Yt(ee.key));
    z && z.signal.addEventListener("abort", Wn);
    let { loaderResults: Fr, fetcherResults: Mt } = await ju(m, _, ne, ye, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    z && z.signal.removeEventListener("abort", Wn),
      ye.forEach((ee) => Se.delete(ee.key));
    let Rt = oo(Fr);
    if (Rt)
      return await xn(g, Rt.result, !0, { replace: M }), { shortCircuited: !0 };
    if (((Rt = oo(Mt)), Rt))
      return (
        te.add(Rt.key),
        await xn(g, Rt.result, !0, { replace: M }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ol, errors: Or } = mf(m, _, Fr, U, ye, Mt, pt);
    pt.forEach((ee, we) => {
      ee.subscribe((Qn) => {
        (Qn || ee.done) && pt.delete(we);
      });
    }),
      f.v7_partialHydration && B && m.errors && (Or = fe({}, m.errors, Or));
    let kn = bu(),
      Ui = Vu(V),
      bi = kn || Ui || ye.length > 0;
    return fe(
      { matches: _, loaderData: Ol, errors: Or },
      bi ? { fetchers: new Map(m.fetchers) } : {}
    );
  }
  function Bu(g) {
    if (g && !tt(g[1])) return { [g[0]]: g[1].data };
    if (m.actionData)
      return Object.keys(m.actionData).length === 0 ? null : m.actionData;
  }
  function um(g) {
    return (
      g.forEach((E) => {
        let _ = m.fetchers.get(E.key),
          C = Hr(void 0, _ ? _.data : void 0);
        m.fetchers.set(E.key, C);
      }),
      new Map(m.fetchers)
    );
  }
  function cm(g, E, _, C) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Yt(g);
    let O = (C && C.flushSync) === !0,
      I = a || l,
      H = as(
        m.location,
        m.matches,
        s,
        f.v7_prependBasename,
        _,
        f.v7_relativeSplatPath,
        E,
        C == null ? void 0 : C.relative
      ),
      M = Tn(I, H, s),
      B = ji(M, I, H);
    if ((B.active && B.matches && (M = B.matches), !M)) {
      Dt(g, E, qe(404, { pathname: H }), { flushSync: O });
      return;
    }
    let {
      path: D,
      submission: U,
      error: Y,
    } = sf(f.v7_normalizeFormMethod, !0, H, C);
    if (Y) {
      Dt(g, E, Y, { flushSync: O });
      return;
    }
    let J = Zr(M, D),
      De = (C && C.preventScrollReset) === !0;
    if (U && yt(U.formMethod)) {
      fm(g, E, D, J, M, B.active, O, De, U);
      return;
    }
    se.set(g, { routeId: E, path: D }), dm(g, E, D, J, M, B.active, O, De, U);
  }
  async function fm(g, E, _, C, O, I, H, M, B) {
    Al(), se.delete(g);
    function D(Ce) {
      if (!Ce.route.action && !Ce.route.lazy) {
        let Kn = qe(405, { method: B.formMethod, pathname: _, routeId: E });
        return Dt(g, E, Kn, { flushSync: H }), !0;
      }
      return !1;
    }
    if (!I && D(C)) return;
    let U = m.fetchers.get(g);
    qt(g, Vg(B, U), { flushSync: H });
    let Y = new AbortController(),
      J = Yn(e.history, _, Y.signal, B);
    if (I) {
      let Ce = await Ii(O, _, J.signal);
      if (Ce.type === "aborted") return;
      if (Ce.type === "error") {
        Dt(g, E, Ce.error, { flushSync: H });
        return;
      } else if (Ce.matches) {
        if (((O = Ce.matches), (C = Zr(O, _)), D(C))) return;
      } else {
        Dt(g, E, qe(404, { pathname: _ }), { flushSync: H });
        return;
      }
    }
    Se.set(g, Y);
    let De = L,
      ne = (await Lr("action", m, J, [C], O, g))[C.route.id];
    if (J.signal.aborted) {
      Se.get(g) === Y && Se.delete(g);
      return;
    }
    if (f.v7_fetcherPersist && Oe.has(g)) {
      if (Fn(ne) || tt(ne)) {
        qt(g, Gt(void 0));
        return;
      }
    } else {
      if (Fn(ne))
        if ((Se.delete(g), V > De)) {
          qt(g, Gt(void 0));
          return;
        } else
          return (
            te.add(g),
            qt(g, Hr(B)),
            xn(J, ne, !1, { fetcherSubmission: B, preventScrollReset: M })
          );
      if (tt(ne)) {
        Dt(g, E, ne.error);
        return;
      }
    }
    if (on(ne)) throw qe(400, { type: "defer-action" });
    let ye = m.navigation.location || m.location,
      Wn = Yn(e.history, ye, Y.signal),
      Fr = a || l,
      Mt =
        m.navigation.state !== "idle"
          ? Tn(Fr, m.navigation.location, s)
          : m.matches;
    G(Mt, "Didn't find any matches after fetcher action");
    let Rt = ++L;
    $.set(g, Rt);
    let Ol = Hr(B, ne.data);
    m.fetchers.set(g, Ol);
    let [Or, kn] = cf(
      e.history,
      m,
      Mt,
      B,
      ye,
      !1,
      f.v7_skipActionErrorRevalidation,
      ke,
      Qt,
      Kt,
      Oe,
      se,
      te,
      Fr,
      s,
      [C.route.id, ne]
    );
    kn
      .filter((Ce) => Ce.key !== g)
      .forEach((Ce) => {
        let Kn = Ce.key,
          Ku = m.fetchers.get(Kn),
          wm = Hr(void 0, Ku ? Ku.data : void 0);
        m.fetchers.set(Kn, wm),
          Yt(Kn),
          Ce.controller && Se.set(Kn, Ce.controller);
      }),
      $e({ fetchers: new Map(m.fetchers) });
    let Ui = () => kn.forEach((Ce) => Yt(Ce.key));
    Y.signal.addEventListener("abort", Ui);
    let { loaderResults: bi, fetcherResults: ee } = await ju(m, Mt, Or, kn, Wn);
    if (Y.signal.aborted) return;
    Y.signal.removeEventListener("abort", Ui),
      $.delete(g),
      Se.delete(g),
      kn.forEach((Ce) => Se.delete(Ce.key));
    let we = oo(bi);
    if (we) return xn(Wn, we.result, !1, { preventScrollReset: M });
    if (((we = oo(ee)), we))
      return te.add(we.key), xn(Wn, we.result, !1, { preventScrollReset: M });
    let { loaderData: Qn, errors: Dr } = mf(m, Mt, bi, void 0, kn, ee, pt);
    if (m.fetchers.has(g)) {
      let Ce = Gt(ne.data);
      m.fetchers.set(g, Ce);
    }
    Vu(Rt),
      m.navigation.state === "loading" && Rt > V
        ? (G(N, "Expected pending action"),
          z && z.abort(),
          Hn(m.navigation.location, {
            matches: Mt,
            loaderData: Qn,
            errors: Dr,
            fetchers: new Map(m.fetchers),
          }))
        : ($e({
            errors: Dr,
            loaderData: vf(m.loaderData, Qn, Mt, Dr),
            fetchers: new Map(m.fetchers),
          }),
          (ke = !1));
  }
  async function dm(g, E, _, C, O, I, H, M, B) {
    let D = m.fetchers.get(g);
    qt(g, Hr(B, D ? D.data : void 0), { flushSync: H });
    let U = new AbortController(),
      Y = Yn(e.history, _, U.signal);
    if (I) {
      let ne = await Ii(O, _, Y.signal);
      if (ne.type === "aborted") return;
      if (ne.type === "error") {
        Dt(g, E, ne.error, { flushSync: H });
        return;
      } else if (ne.matches) (O = ne.matches), (C = Zr(O, _));
      else {
        Dt(g, E, qe(404, { pathname: _ }), { flushSync: H });
        return;
      }
    }
    Se.set(g, U);
    let J = L,
      le = (await Lr("loader", m, Y, [C], O, g))[C.route.id];
    if (
      (on(le) && (le = (await gu(le, Y.signal, !0)) || le),
      Se.get(g) === U && Se.delete(g),
      !Y.signal.aborted)
    ) {
      if (Oe.has(g)) {
        qt(g, Gt(void 0));
        return;
      }
      if (Fn(le))
        if (V > J) {
          qt(g, Gt(void 0));
          return;
        } else {
          te.add(g), await xn(Y, le, !1, { preventScrollReset: M });
          return;
        }
      if (tt(le)) {
        Dt(g, E, le.error);
        return;
      }
      G(!on(le), "Unhandled fetcher deferred data"), qt(g, Gt(le.data));
    }
  }
  async function xn(g, E, _, C) {
    let {
      submission: O,
      fetcherSubmission: I,
      preventScrollReset: H,
      replace: M,
    } = C === void 0 ? {} : C;
    E.response.headers.has("X-Remix-Revalidate") && (ke = !0);
    let B = E.response.headers.get("Location");
    G(B, "Expected a Location header on the redirect Response"),
      (B = hf(B, new URL(g.url), s));
    let D = Ti(m.location, B, { _isRedirect: !0 });
    if (n) {
      let ne = !1;
      if (E.response.headers.has("X-Remix-Reload-Document")) ne = !0;
      else if (vu.test(B)) {
        const ye = e.history.createURL(B);
        ne = ye.origin !== t.location.origin || Mi(ye.pathname, s) == null;
      }
      if (ne) {
        M ? t.location.replace(B) : t.location.assign(B);
        return;
      }
    }
    z = null;
    let U =
        M === !0 || E.response.headers.has("X-Remix-Replace")
          ? Re.Replace
          : Re.Push,
      { formMethod: Y, formAction: J, formEncType: De } = m.navigation;
    !O && !I && Y && J && De && (O = Ef(m.navigation));
    let le = O || I;
    if (_g.has(E.response.status) && le && yt(le.formMethod))
      await _n(U, D, {
        submission: fe({}, le, { formAction: B }),
        preventScrollReset: H || k,
        enableViewTransition: _ ? j : void 0,
      });
    else {
      let ne = sa(D, O);
      await _n(U, D, {
        overrideNavigation: ne,
        fetcherSubmission: I,
        preventScrollReset: H || k,
        enableViewTransition: _ ? j : void 0,
      });
    }
  }
  async function Lr(g, E, _, C, O, I) {
    let H,
      M = {};
    try {
      H = await Ag(u, g, E, _, C, O, I, o, i);
    } catch (B) {
      return (
        C.forEach((D) => {
          M[D.route.id] = { type: oe.error, error: B };
        }),
        M
      );
    }
    for (let [B, D] of Object.entries(H))
      if (zg(D)) {
        let U = D.result;
        M[B] = {
          type: oe.redirect,
          response: Og(U, _, B, O, s, f.v7_relativeSplatPath),
        };
      } else M[B] = await Fg(D);
    return M;
  }
  async function ju(g, E, _, C, O) {
    let I = g.matches,
      H = Lr("loader", g, O, _, E, null),
      M = Promise.all(
        C.map(async (U) => {
          if (U.matches && U.match && U.controller) {
            let J = (
              await Lr(
                "loader",
                g,
                Yn(e.history, U.path, U.controller.signal),
                [U.match],
                U.matches,
                U.key
              )
            )[U.match.route.id];
            return { [U.key]: J };
          } else
            return Promise.resolve({
              [U.key]: { type: oe.error, error: qe(404, { pathname: U.path }) },
            });
        })
      ),
      B = await H,
      D = (await M).reduce((U, Y) => Object.assign(U, Y), {});
    return (
      await Promise.all([Ig(E, B, O.signal, I, g.loaderData), Ug(E, D, C)]),
      { loaderResults: B, fetcherResults: D }
    );
  }
  function Al() {
    (ke = !0),
      Qt.push(...Fl()),
      se.forEach((g, E) => {
        Se.has(E) && Kt.add(E), Yt(E);
      });
  }
  function qt(g, E, _) {
    _ === void 0 && (_ = {}),
      m.fetchers.set(g, E),
      $e(
        { fetchers: new Map(m.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function Dt(g, E, _, C) {
    C === void 0 && (C = {});
    let O = Pn(m.matches, E);
    zi(g),
      $e(
        { errors: { [O.route.id]: _ }, fetchers: new Map(m.fetchers) },
        { flushSync: (C && C.flushSync) === !0 }
      );
  }
  function Iu(g) {
    return (
      f.v7_fetcherPersist &&
        (Ct.set(g, (Ct.get(g) || 0) + 1), Oe.has(g) && Oe.delete(g)),
      m.fetchers.get(g) || xg
    );
  }
  function zi(g) {
    let E = m.fetchers.get(g);
    Se.has(g) && !(E && E.state === "loading" && $.has(g)) && Yt(g),
      se.delete(g),
      $.delete(g),
      te.delete(g),
      Oe.delete(g),
      Kt.delete(g),
      m.fetchers.delete(g);
  }
  function hm(g) {
    if (f.v7_fetcherPersist) {
      let E = (Ct.get(g) || 0) - 1;
      E <= 0 ? (Ct.delete(g), Oe.add(g)) : Ct.set(g, E);
    } else zi(g);
    $e({ fetchers: new Map(m.fetchers) });
  }
  function Yt(g) {
    let E = Se.get(g);
    E && (E.abort(), Se.delete(g));
  }
  function Uu(g) {
    for (let E of g) {
      let _ = Iu(E),
        C = Gt(_.data);
      m.fetchers.set(E, C);
    }
  }
  function bu() {
    let g = [],
      E = !1;
    for (let _ of te) {
      let C = m.fetchers.get(_);
      G(C, "Expected fetcher: " + _),
        C.state === "loading" && (te.delete(_), g.push(_), (E = !0));
    }
    return Uu(g), E;
  }
  function Vu(g) {
    let E = [];
    for (let [_, C] of $)
      if (C < g) {
        let O = m.fetchers.get(_);
        G(O, "Expected fetcher: " + _),
          O.state === "loading" && (Yt(_), $.delete(_), E.push(_));
      }
    return Uu(E), E.length > 0;
  }
  function pm(g, E) {
    let _ = m.blockers.get(g) || $r;
    return Ve.get(g) !== E && Ve.set(g, E), _;
  }
  function $u(g) {
    m.blockers.delete(g), Ve.delete(g);
  }
  function Bi(g, E) {
    let _ = m.blockers.get(g) || $r;
    G(
      (_.state === "unblocked" && E.state === "blocked") ||
        (_.state === "blocked" && E.state === "blocked") ||
        (_.state === "blocked" && E.state === "proceeding") ||
        (_.state === "blocked" && E.state === "unblocked") ||
        (_.state === "proceeding" && E.state === "unblocked"),
      "Invalid blocker state transition: " + _.state + " -> " + E.state
    );
    let C = new Map(m.blockers);
    C.set(g, E), $e({ blockers: C });
  }
  function Hu(g) {
    let { currentLocation: E, nextLocation: _, historyAction: C } = g;
    if (Ve.size === 0) return;
    Ve.size > 1 && xr(!1, "A router only supports one blocker at a time");
    let O = Array.from(Ve.entries()),
      [I, H] = O[O.length - 1],
      M = m.blockers.get(I);
    if (
      !(M && M.state === "proceeding") &&
      H({ currentLocation: E, nextLocation: _, historyAction: C })
    )
      return I;
  }
  function Ll(g) {
    let E = qe(404, { pathname: g }),
      _ = a || l,
      { matches: C, route: O } = yf(_);
    return Fl(), { notFoundMatches: C, route: O, error: E };
  }
  function Fl(g) {
    let E = [];
    return (
      pt.forEach((_, C) => {
        (!g || g(C)) && (_.cancel(), E.push(C), pt.delete(C));
      }),
      E
    );
  }
  function mm(g, E, _) {
    if (((w = g), (P = E), (S = _ || null), !h && m.navigation === aa)) {
      h = !0;
      let C = Qu(m.location, m.matches);
      C != null && $e({ restoreScrollPosition: C });
    }
    return () => {
      (w = null), (P = null), (S = null);
    };
  }
  function Wu(g, E) {
    return (
      (S &&
        S(
          g,
          E.map((C) => eg(C, m.loaderData))
        )) ||
      g.key
    );
  }
  function vm(g, E) {
    if (w && P) {
      let _ = Wu(g, E);
      w[_] = P();
    }
  }
  function Qu(g, E) {
    if (w) {
      let _ = Wu(g, E),
        C = w[_];
      if (typeof C == "number") return C;
    }
    return null;
  }
  function ji(g, E, _) {
    if (c)
      if (g) {
        if (Object.keys(g[0].params).length > 0)
          return { active: !0, matches: _o(E, _, s, !0) };
      } else return { active: !0, matches: _o(E, _, s, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ii(g, E, _) {
    if (!c) return { type: "success", matches: g };
    let C = g;
    for (;;) {
      let O = a == null,
        I = a || l,
        H = o;
      try {
        await c({
          path: E,
          matches: C,
          patch: (D, U) => {
            _.aborted || df(D, U, I, H, i);
          },
        });
      } catch (D) {
        return { type: "error", error: D, partialMatches: C };
      } finally {
        O && !_.aborted && (l = [...l]);
      }
      if (_.aborted) return { type: "aborted" };
      let M = Tn(I, E, s);
      if (M) return { type: "success", matches: M };
      let B = _o(I, E, s, !0);
      if (
        !B ||
        (C.length === B.length &&
          C.every((D, U) => D.route.id === B[U].route.id))
      )
        return { type: "success", matches: null };
      C = B;
    }
  }
  function gm(g) {
    (o = {}), (a = Zo(g, i, void 0, o));
  }
  function ym(g, E) {
    let _ = a == null;
    df(g, E, a || l, o, i), _ && ((l = [...l]), $e({}));
  }
  return (
    (A = {
      get basename() {
        return s;
      },
      get future() {
        return f;
      },
      get state() {
        return m;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: rm,
      subscribe: om,
      enableScrollRestoration: mm,
      navigate: zu,
      fetch: cm,
      revalidate: lm,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: Iu,
      deleteFetcher: hm,
      dispose: im,
      getBlocker: pm,
      deleteBlocker: $u,
      patchRoutes: ym,
      _internalFetchControllers: Se,
      _internalActiveDeferreds: pt,
      _internalSetRoutes: gm,
    }),
    A
  );
}
function Rg(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function as(e, t, n, r, i, o, l, a) {
  let s, u;
  if (l) {
    s = [];
    for (let f of t)
      if ((s.push(f), f.route.id === l)) {
        u = f;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = ep(i || ".", Zh(s, o), Mi(e.pathname, n) || e.pathname, a === "path");
  if (
    (i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") && u)
  ) {
    let f = yu(c.search);
    if (u.route.index && !f)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!u.route.index && f) {
      let p = new URLSearchParams(c.search),
        v = p.getAll("index");
      p.delete("index"),
        v.filter((S) => S).forEach((S) => p.append("index", S));
      let w = p.toString();
      c.search = w ? "?" + w : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : pn([n, c.pathname])),
    Di(c)
  );
}
function sf(e, t, n, r) {
  if (!r || !Rg(r)) return { path: n };
  if (r.formMethod && !jg(r.formMethod))
    return { path: n, error: qe(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: qe(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    l = e ? o.toUpperCase() : o.toLowerCase(),
    a = op(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!yt(l)) return i();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((v, w) => {
              let [S, P] = w;
              return (
                "" +
                v +
                S +
                "=" +
                P +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!yt(l)) return i();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  G(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = us(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = us(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = pf(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = pf(s));
    } catch {
      return i();
    }
  let c = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (yt(c.formMethod)) return { path: n, submission: c };
  let f = Sn(n);
  return (
    t && f.search && yu(f.search) && s.append("index", ""),
    (f.search = "?" + s),
    { path: Di(f), submission: c }
  );
}
function uf(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((i) => i.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function cf(e, t, n, r, i, o, l, a, s, u, c, f, p, v, w, S) {
  let P = S ? (tt(S[1]) ? S[1].error : S[1].data) : void 0,
    h = e.createURL(t.location),
    d = e.createURL(i),
    y = n;
  o && t.errors
    ? (y = uf(n, Object.keys(t.errors)[0], !0))
    : S && tt(S[1]) && (y = uf(n, S[0]));
  let x = S ? S[1].statusCode : void 0,
    A = l && x && x >= 400,
    m = y.filter((k, z) => {
      let { route: j } = k;
      if (j.lazy) return !0;
      if (j.loader == null) return !1;
      if (o) return ss(j, t.loaderData, t.errors);
      if (
        Tg(t.loaderData, t.matches[z], k) ||
        s.some((xe) => xe === k.route.id)
      )
        return !0;
      let ie = t.matches[z],
        he = k;
      return ff(
        k,
        fe(
          {
            currentUrl: h,
            currentParams: ie.params,
            nextUrl: d,
            nextParams: he.params,
          },
          r,
          {
            actionResult: P,
            actionStatus: x,
            defaultShouldRevalidate: A
              ? !1
              : a ||
                h.pathname + h.search === d.pathname + d.search ||
                h.search !== d.search ||
                rp(ie, he),
          }
        )
      );
    }),
    N = [];
  return (
    f.forEach((k, z) => {
      if (o || !n.some((ke) => ke.route.id === k.routeId) || c.has(z)) return;
      let j = Tn(v, k.path, w);
      if (!j) {
        N.push({
          key: z,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ie = t.fetchers.get(z),
        he = Zr(j, k.path),
        xe = !1;
      p.has(z)
        ? (xe = !1)
        : u.has(z)
        ? (u.delete(z), (xe = !0))
        : ie && ie.state !== "idle" && ie.data === void 0
        ? (xe = a)
        : (xe = ff(
            he,
            fe(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: d,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: P,
                actionStatus: x,
                defaultShouldRevalidate: A ? !1 : a,
              }
            )
          )),
        xe &&
          N.push({
            key: z,
            routeId: k.routeId,
            path: k.path,
            matches: j,
            match: he,
            controller: new AbortController(),
          });
    }),
    [m, N]
  );
}
function ss(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    i = n != null && n[e.id] !== void 0;
  return !r && i
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
    ? !0
    : !r && !i;
}
function Tg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function rp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function ff(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function df(e, t, n, r, i) {
  var o;
  let l;
  if (e) {
    let u = r[e];
    G(u, "No route found to patch children into: routeId = " + e),
      u.children || (u.children = []),
      (l = u.children);
  } else l = n;
  let a = t.filter((u) => !l.some((c) => ip(u, c))),
    s = Zo(
      a,
      i,
      [e || "_", "patch", String(((o = l) == null ? void 0 : o.length) || "0")],
      r
    );
  l.push(...s);
}
function ip(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? (!e.children || e.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : e.children.every((n, r) => {
          var i;
          return (i = t.children) == null ? void 0 : i.some((o) => ip(n, o));
        })
    : !1;
}
async function Pg(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  G(i, "No route found in manifest");
  let o = {};
  for (let l in r) {
    let s = i[l] !== void 0 && l !== "hasErrorBoundary";
    xr(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !Jv.has(l) && (o[l] = r[l]);
  }
  Object.assign(i, o), Object.assign(i, fe({}, t(i), { lazy: void 0 }));
}
async function Ng(e) {
  let { matches: t } = e,
    n = t.filter((i) => i.shouldLoad);
  return (await Promise.all(n.map((i) => i.resolve()))).reduce(
    (i, o, l) => Object.assign(i, { [n[l].route.id]: o }),
    {}
  );
}
async function Ag(e, t, n, r, i, o, l, a, s, u) {
  let c = o.map((v) => (v.route.lazy ? Pg(v.route, s, a) : void 0)),
    f = o.map((v, w) => {
      let S = c[w],
        P = i.some((d) => d.route.id === v.route.id);
      return fe({}, v, {
        shouldLoad: P,
        resolve: async (d) => (
          d &&
            r.method === "GET" &&
            (v.route.lazy || v.route.loader) &&
            (P = !0),
          P
            ? Lg(t, r, v, S, d, u)
            : Promise.resolve({ type: oe.data, result: void 0 })
        ),
      });
    }),
    p = await e({
      matches: f,
      request: r,
      params: o[0].params,
      fetcherKey: l,
      context: u,
    });
  try {
    await Promise.all(c);
  } catch {}
  return p;
}
async function Lg(e, t, n, r, i, o) {
  let l,
    a,
    s = (u) => {
      let c,
        f = new Promise((w, S) => (c = S));
      (a = () => c()), t.signal.addEventListener("abort", a);
      let p = (w) =>
          typeof u != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : u(
                { request: t, params: n.params, context: o },
                ...(w !== void 0 ? [w] : [])
              ),
        v = (async () => {
          try {
            return { type: "data", result: await (i ? i((S) => p(S)) : p()) };
          } catch (w) {
            return { type: "error", result: w };
          }
        })();
      return Promise.race([v, f]);
    };
  try {
    let u = n.route[e];
    if (r)
      if (u) {
        let c,
          [f] = await Promise.all([
            s(u).catch((p) => {
              c = p;
            }),
            r,
          ]);
        if (c !== void 0) throw c;
        l = f;
      } else if ((await r, (u = n.route[e]), u)) l = await s(u);
      else if (e === "action") {
        let c = new URL(t.url),
          f = c.pathname + c.search;
        throw qe(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: oe.data, result: void 0 };
    else if (u) l = await s(u);
    else {
      let c = new URL(t.url),
        f = c.pathname + c.search;
      throw qe(404, { pathname: f });
    }
    G(
      l.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (u) {
    return { type: oe.error, result: u };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return l;
}
async function Fg(e) {
  let { result: t, type: n } = e;
  if (lp(t)) {
    let u;
    try {
      let c = t.headers.get("Content-Type");
      c && /\bapplication\/json\b/.test(c)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (c) {
      return { type: oe.error, error: c };
    }
    return n === oe.error
      ? {
          type: oe.error,
          error: new el(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: oe.data, data: u, statusCode: t.status, headers: t.headers };
  }
  if (n === oe.error) {
    if (wf(t)) {
      var r;
      if (t.data instanceof Error) {
        var i;
        return {
          type: oe.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
        };
      }
      t = new el(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: oe.error, error: t, statusCode: Sl(t) ? t.status : void 0 };
  }
  if (Bg(t)) {
    var o, l;
    return {
      type: oe.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((l = t.init) == null ? void 0 : l.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (wf(t)) {
    var a, s;
    return {
      type: oe.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (s = t.init) != null && s.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: oe.data, data: t };
}
function Og(e, t, n, r, i, o) {
  let l = e.headers.get("Location");
  if (
    (G(
      l,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !vu.test(l))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (l = as(new URL(t.url), a, i, !0, l, o)), e.headers.set("Location", l);
  }
  return e;
}
function hf(e, t, n) {
  if (vu.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = Mi(i.pathname, n) != null;
    if (i.origin === t.origin && o) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Yn(e, t, n, r) {
  let i = e.createURL(op(t)).toString(),
    o = { signal: n };
  if (r && yt(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r;
    (o.method = l.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = us(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function us(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function pf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Dg(e, t, n, r, i) {
  let o = {},
    l = null,
    a,
    s = !1,
    u = {},
    c = n && tt(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((f) => {
      if (!(f.route.id in t)) return;
      let p = f.route.id,
        v = t[p];
      if (
        (G(!Fn(v), "Cannot handle redirect results in processLoaderData"),
        tt(v))
      ) {
        let w = v.error;
        c !== void 0 && ((w = c), (c = void 0)), (l = l || {});
        {
          let S = Pn(e, p);
          l[S.route.id] == null && (l[S.route.id] = w);
        }
        (o[p] = void 0),
          s || ((s = !0), (a = Sl(v.error) ? v.error.status : 500)),
          v.headers && (u[p] = v.headers);
      } else
        on(v)
          ? (r.set(p, v.deferredData),
            (o[p] = v.deferredData.data),
            v.statusCode != null &&
              v.statusCode !== 200 &&
              !s &&
              (a = v.statusCode),
            v.headers && (u[p] = v.headers))
          : ((o[p] = v.data),
            v.statusCode && v.statusCode !== 200 && !s && (a = v.statusCode),
            v.headers && (u[p] = v.headers));
    }),
    c !== void 0 && n && ((l = { [n[0]]: c }), (o[n[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: u }
  );
}
function mf(e, t, n, r, i, o, l) {
  let { loaderData: a, errors: s } = Dg(t, n, r, l);
  return (
    i.forEach((u) => {
      let { key: c, match: f, controller: p } = u,
        v = o[c];
      if (
        (G(v, "Did not find corresponding fetcher result"),
        !(p && p.signal.aborted))
      )
        if (tt(v)) {
          let w = Pn(e.matches, f == null ? void 0 : f.route.id);
          (s && s[w.route.id]) || (s = fe({}, s, { [w.route.id]: v.error })),
            e.fetchers.delete(c);
        } else if (Fn(v)) G(!1, "Unhandled fetcher revalidation redirect");
        else if (on(v)) G(!1, "Unhandled fetcher deferred data");
        else {
          let w = Gt(v.data);
          e.fetchers.set(c, w);
        }
    }),
    { loaderData: a, errors: s }
  );
}
function vf(e, t, n, r) {
  let i = fe({}, t);
  for (let o of n) {
    let l = o.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (i[l] = t[l])
        : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function gf(e) {
  return e
    ? tt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Pn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function yf(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function qe(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: o,
      message: l,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (s =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (s = "defer() is not supported in actions")
          : o === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (s =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (s = 'Invalid request method "' + i.toUpperCase() + '"')),
    new el(e || 500, a, new Error(s), !0)
  );
}
function oo(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (Fn(i)) return { key: r, result: i };
  }
}
function op(e) {
  let t = typeof e == "string" ? Sn(e) : e;
  return Di(fe({}, t, { hash: "" }));
}
function Mg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function zg(e) {
  return lp(e.result) && Sg.has(e.result.status);
}
function on(e) {
  return e.type === oe.deferred;
}
function tt(e) {
  return e.type === oe.error;
}
function Fn(e) {
  return (e && e.type) === oe.redirect;
}
function wf(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function Bg(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function lp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function jg(e) {
  return Eg.has(e.toLowerCase());
}
function yt(e) {
  return yg.has(e.toLowerCase());
}
async function Ig(e, t, n, r, i) {
  let o = Object.entries(t);
  for (let l = 0; l < o.length; l++) {
    let [a, s] = o[l],
      u = e.find((p) => (p == null ? void 0 : p.route.id) === a);
    if (!u) continue;
    let c = r.find((p) => p.route.id === u.route.id),
      f = c != null && !rp(c, u) && (i && i[u.route.id]) !== void 0;
    on(s) &&
      f &&
      (await gu(s, n, !1).then((p) => {
        p && (t[a] = p);
      }));
  }
}
async function Ug(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: i, routeId: o, controller: l } = n[r],
      a = t[i];
    e.find((u) => (u == null ? void 0 : u.route.id) === o) &&
      on(a) &&
      (G(
        l,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await gu(a, l.signal, !0).then((u) => {
        u && (t[i] = u);
      }));
  }
}
async function gu(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: oe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: oe.error, error: i };
      }
    return { type: oe.data, data: e.deferredData.data };
  }
}
function yu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Zr(e, t) {
  let n = typeof t == "string" ? Sn(t).search : t.search;
  if (e[e.length - 1].route.index && yu(n || "")) return e[e.length - 1];
  let r = Jh(e);
  return r[r.length - 1];
}
function Ef(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function sa(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function bg(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Hr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Vg(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Gt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function $g(e, t) {
  try {
    let n = e.sessionStorage.getItem(np);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function Hg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(np, JSON.stringify(n));
    } catch (r) {
      xr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tl.apply(this, arguments)
  );
}
const _l = R.createContext(null),
  ap = R.createContext(null),
  xl = R.createContext(null),
  wu = R.createContext(null),
  Pr = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  sp = R.createContext(null);
function kl() {
  return R.useContext(wu) != null;
}
function up() {
  return kl() || G(!1), R.useContext(wu).location;
}
function cp(e) {
  R.useContext(xl).static || R.useLayoutEffect(e);
}
function Eu() {
  let { isDataRoute: e } = R.useContext(Pr);
  return e ? ny() : Wg();
}
function Wg() {
  kl() || G(!1);
  let e = R.useContext(_l),
    { basename: t, future: n, navigator: r } = R.useContext(xl),
    { matches: i } = R.useContext(Pr),
    { pathname: o } = up(),
    l = JSON.stringify(Zh(i, n.v7_relativeSplatPath)),
    a = R.useRef(!1);
  return (
    cp(() => {
      a.current = !0;
    }),
    R.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = ep(u, JSON.parse(l), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : pn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, l, o, e]
    )
  );
}
function Qg(e, t, n, r) {
  kl() || G(!1);
  let { navigator: i } = R.useContext(xl),
    { matches: o } = R.useContext(Pr),
    l = o[o.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = up(),
    c;
  c = u;
  let f = c.pathname || "/",
    p = f;
  if (s !== "/") {
    let S = s.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let v = Tn(e, { pathname: p });
  return Gg(
    v &&
      v.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, a, S.params),
          pathname: pn([
            s,
            i.encodeLocation
              ? i.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === "/"
              ? s
              : pn([
                  s,
                  i.encodeLocation
                    ? i.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function Kg() {
  let e = ty(),
    t = Sl(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: i }, n) : null,
    null
  );
}
const qg = R.createElement(Kg, null);
class Yg extends R.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? R.createElement(
          Pr.Provider,
          { value: this.props.routeContext },
          R.createElement(sp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Xg(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = R.useContext(_l);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(Pr.Provider, { value: t }, r)
  );
}
function Gg(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let l = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = l.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    c >= 0 || G(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let f = l[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: p, errors: v } = n,
          w =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, f, p) => {
    let v,
      w = !1,
      S = null,
      P = null;
    n &&
      ((v = a && f.route.id ? a[f.route.id] : void 0),
      (S = f.route.errorElement || qg),
      s &&
        (u < 0 && p === 0
          ? (ry("route-fallback"), (w = !0), (P = null))
          : u === p &&
            ((w = !0), (P = f.route.hydrateFallbackElement || null))));
    let h = t.concat(l.slice(0, p + 1)),
      d = () => {
        let y;
        return (
          v
            ? (y = S)
            : w
            ? (y = P)
            : f.route.Component
            ? (y = R.createElement(f.route.Component, null))
            : f.route.element
            ? (y = f.route.element)
            : (y = c),
          R.createElement(Xg, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? R.createElement(Yg, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: v,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var fp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(fp || {}),
  nl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(nl || {});
function Jg(e) {
  let t = R.useContext(_l);
  return t || G(!1), t;
}
function Zg(e) {
  let t = R.useContext(ap);
  return t || G(!1), t;
}
function ey(e) {
  let t = R.useContext(Pr);
  return t || G(!1), t;
}
function dp(e) {
  let t = ey(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function ty() {
  var e;
  let t = R.useContext(sp),
    n = Zg(nl.UseRouteError),
    r = dp(nl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ny() {
  let { router: e } = Jg(fp.UseNavigateStable),
    t = dp(nl.UseNavigateStable),
    n = R.useRef(!1);
  return (
    cp(() => {
      n.current = !0;
    }),
    R.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, tl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Sf = {};
function ry(e, t, n) {
  Sf[e] || (Sf[e] = !0);
}
function iy(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Re.Pop,
    navigator: o,
    static: l = !1,
    future: a,
  } = e;
  kl() && G(!1);
  let s = t.replace(/^\/*/, "/"),
    u = R.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: l,
        future: tl({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, o, l]
    );
  typeof r == "string" && (r = Sn(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: p = "",
      state: v = null,
      key: w = "default",
    } = r,
    S = R.useMemo(() => {
      let P = Mi(c, s);
      return P == null
        ? null
        : {
            location: { pathname: P, search: f, hash: p, state: v, key: w },
            navigationType: i,
          };
    }, [s, c, f, p, v, w, i]);
  return S == null
    ? null
    : R.createElement(
        xl.Provider,
        { value: u },
        R.createElement(wu.Provider, { children: n, value: S })
      );
}
new Promise(() => {});
function oy(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: R.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: R.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: R.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rl() {
  return (
    (rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rl.apply(this, arguments)
  );
}
const ly = "6";
try {
  window.__reactRouterVersion = ly;
} catch {}
function ay(e, t) {
  return Cg({
    basename: void 0,
    future: rl({}, void 0, { v7_prependBasename: !0 }),
    history: Yv({ window: void 0 }),
    hydrationData: sy(),
    routes: e,
    mapRouteProperties: oy,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function sy() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = rl({}, t, { errors: uy(t.errors) })), t;
}
function uy(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new el(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let l = new o(i.message);
            (l.stack = ""), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const cy = R.createContext({ isTransitioning: !1 }),
  fy = R.createContext(new Map()),
  dy = "startTransition",
  _f = zm[dy],
  hy = "flushSync",
  xf = qv[hy];
function py(e) {
  _f ? _f(e) : e();
}
function Wr(e) {
  xf ? xf(e) : e();
}
class my {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function vy(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = R.useState(n.state),
    [l, a] = R.useState(),
    [s, u] = R.useState({ isTransitioning: !1 }),
    [c, f] = R.useState(),
    [p, v] = R.useState(),
    [w, S] = R.useState(),
    P = R.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    d = R.useCallback(
      (k) => {
        h ? py(k) : k();
      },
      [h]
    ),
    y = R.useCallback(
      (k, z) => {
        let { deletedFetchers: j, flushSync: ie, viewTransitionOpts: he } = z;
        j.forEach((ke) => P.current.delete(ke)),
          k.fetchers.forEach((ke, Qt) => {
            ke.data !== void 0 && P.current.set(Qt, ke.data);
          });
        let xe =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!he || xe) {
          ie ? Wr(() => o(k)) : d(() => o(k));
          return;
        }
        if (ie) {
          Wr(() => {
            p && (c && c.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: he.currentLocation,
                nextLocation: he.nextLocation,
              });
          });
          let ke = n.window.document.startViewTransition(() => {
            Wr(() => o(k));
          });
          ke.finished.finally(() => {
            Wr(() => {
              f(void 0), v(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Wr(() => v(ke));
          return;
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            S({
              state: k,
              currentLocation: he.currentLocation,
              nextLocation: he.nextLocation,
            }))
          : (a(k),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: he.currentLocation,
              nextLocation: he.nextLocation,
            }));
      },
      [n.window, p, c, P, d]
    );
  R.useLayoutEffect(() => n.subscribe(y), [n, y]),
    R.useEffect(() => {
      s.isTransitioning && !s.flushSync && f(new my());
    }, [s]),
    R.useEffect(() => {
      if (c && l && n.window) {
        let k = l,
          z = c.promise,
          j = n.window.document.startViewTransition(async () => {
            d(() => o(k)), await z;
          });
        j.finished.finally(() => {
          f(void 0), v(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          v(j);
      }
    }, [d, l, c, n.window]),
    R.useEffect(() => {
      c && l && i.location.key === l.location.key && c.resolve();
    }, [c, p, i.location, l]),
    R.useEffect(() => {
      !s.isTransitioning &&
        w &&
        (a(w.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        S(void 0));
    }, [s.isTransitioning, w]),
    R.useEffect(() => {}, []);
  let x = R.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (k) => n.navigate(k),
        push: (k, z, j) =>
          n.navigate(k, {
            state: z,
            preventScrollReset: j == null ? void 0 : j.preventScrollReset,
          }),
        replace: (k, z, j) =>
          n.navigate(k, {
            replace: !0,
            state: z,
            preventScrollReset: j == null ? void 0 : j.preventScrollReset,
          }),
      }),
      [n]
    ),
    A = n.basename || "/",
    m = R.useMemo(
      () => ({ router: n, navigator: x, static: !1, basename: A }),
      [n, x, A]
    ),
    N = R.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      _l.Provider,
      { value: m },
      R.createElement(
        ap.Provider,
        { value: i },
        R.createElement(
          fy.Provider,
          { value: P.current },
          R.createElement(
            cy.Provider,
            { value: s },
            R.createElement(
              iy,
              {
                basename: A,
                location: i.location,
                navigationType: i.historyAction,
                navigator: x,
                future: N,
              },
              i.initialized || n.future.v7_partialHydration
                ? R.createElement(gy, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const gy = R.memo(yy);
function yy(e) {
  let { routes: t, future: n, state: r } = e;
  return Qg(t, void 0, r, n);
}
var kf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(kf || (kf = {}));
var Cf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Cf || (Cf = {}));
const hp = R.createContext(null),
  wy = ({ children: e }) => {
    const [t, n] = R.useState(null),
      [r, i] = R.useState(null);
    return Q.jsx(hp.Provider, {
      value: {
        clientInfo: t,
        setClientInfo: n,
        selectedContact: r,
        setSelectedContact: i,
      },
      children: e,
    });
  },
  Nr = () => {
    const e = R.useContext(hp);
    if (!e)
      throw new Error("useClient must be used within a ClientContextProvider");
    return e;
  },
  Ey = () => {
    const [e, t] = R.useState(""),
      [n, r] = R.useState(null),
      i = Nr(),
      o = Eu(),
      l = (a) => {
        if ((a.preventDefault(), !e.trim())) {
          r("Username cannot be empty");
          return;
        }
        i.setClientInfo({ socketId: "", name: e, socket: null }),
          r(null),
          o("/chat");
      };
    return Q.jsx("div", {
      className:
        "w-screen h-screen flex items-center justify-center bg-zinc-700",
      children: Q.jsxs("form", {
        onSubmit: l,
        className:
          "flex flex-col items-center space-y-4 border-zinc-500 border-2 py-20 px-10 bg-stone-700",
        children: [
          Q.jsx("input", {
            type: "text",
            name: "name",
            placeholder: "Enter your username",
            value: e,
            onChange: (a) => t(a.target.value),
            className:
              "w-64 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-gray-600",
          }),
          n &&
            Q.jsx("span", { className: "text-red-500 text-sm", children: n }),
          Q.jsx("button", {
            type: "submit",
            className:
              "bg-gray-800 text-white px-6 py-2 rounded-xl hover:border-slate-500 hover:bg-gray-700",
            children: "Login",
          }),
        ],
      }),
    });
  },
  Sy = () => Q.jsx("div", {}),
  pp = () => {
    const { clientInfo: e } = Nr(),
      [t, n] = R.useState([]),
      [r, i] = R.useState(null),
      [o, l] = R.useState([]);
    return (
      R.useEffect(() => {
        const a = (e == null ? void 0 : e.socket) || null;
        if (a && e != null && e.socketId)
          return (
            (a != null && a.connected) || a == null || a.connect(),
            a == null ||
              a.on("current-users", (s) => {
                console.log(s), l(s);
              }),
            a == null ||
              a.on("user-joined", (s) => {
                l((u) => [...u, s]);
              }),
            a == null ||
              a.on("message-private", ({ message: s, sender: u }) => {
                n((c) =>
                  c
                    ? [...c, { sender: u, message: s }]
                    : [{ sender: u, message: s }]
                );
              }),
            a == null ||
              a.on("typing", (s) => {
                i(s), setTimeout(() => i(null), 2e3);
              }),
            a == null ||
              a.on("user-disconnected", (s) => {
                l((u) => u.filter((c) => c !== s));
              }),
            () => {
              a == null || a.off("current-users"),
                a == null || a.off("user-joined"),
                a == null || a.off("message-private"),
                a == null || a.off("typing"),
                a == null || a.off("user-disconnected");
            }
          );
      }, [e == null ? void 0 : e.socket, e == null ? void 0 : e.socketId]),
      { users: o, messages: t, typingUser: r }
    );
  };
function _y(e) {
  for (var t = "#", n = 1; n < e.length; n++) {
    var r = e.charAt(n);
    t += r + r;
  }
  return t;
}
function xy(e) {
  (e.length === 4 || e.length === 5) && (e = _y(e));
  var t = [
    parseInt(e.substring(1, 3), 16),
    parseInt(e.substring(3, 5), 16),
    parseInt(e.substring(5, 7), 16),
  ];
  if (e.length === 9) {
    var n = parseFloat((parseInt(e.substring(7, 9), 16) / 255).toFixed(2));
    t.push(n);
  }
  return t;
}
var ky = xy;
const Cy = Un(ky);
function Ry(e) {
  var t = e[0],
    n = e[1],
    r = e[2],
    i = Math.min(t, n, r),
    o = Math.max(t, n, r),
    l = o - i,
    a,
    s,
    u;
  return (
    o == 0 ? (s = 0) : (s = ((l / o) * 1e3) / 10),
    o == i
      ? (a = 0)
      : t == o
      ? (a = (n - r) / l)
      : n == o
      ? (a = 2 + (r - t) / l)
      : r == o && (a = 4 + (t - n) / l),
    (a = Math.min(a * 60, 360)),
    a < 0 && (a += 360),
    (u = ((o / 255) * 1e3) / 10),
    [a, s, u]
  );
}
var Ty = Ry;
const Py = Un(Ty);
function Ny(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Ay = Ny,
  Ly = Ay;
function lo(e) {
  var t = Math.round(Ly(e, 0, 255)),
    n = t.toString(16);
  return n.length == 1 ? "0" + n : n;
}
function Fy(e) {
  var t = e.length === 4 ? lo(e[3] * 255) : "";
  return "#" + lo(e[0]) + lo(e[1]) + lo(e[2]) + t;
}
var Oy = Fy;
const Dy = Un(Oy);
function My(e) {
  var t = e[0] / 60,
    n = e[1] / 100,
    s = e[2] / 100,
    r = Math.floor(t) % 6,
    i = t - Math.floor(t),
    o = 255 * s * (1 - n),
    l = 255 * s * (1 - n * i),
    a = 255 * s * (1 - n * (1 - i)),
    s = 255 * s;
  switch (r) {
    case 0:
      return [s, a, o];
    case 1:
      return [l, s, o];
    case 2:
      return [o, s, a];
    case 3:
      return [o, l, s];
    case 4:
      return [a, o, s];
    case 5:
      return [s, o, l];
  }
}
var zy = My;
const By = Un(zy);
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var jy = function (e) {
  return e != null && (mp(e) || Iy(e) || !!e._isBuffer);
};
function mp(e) {
  return (
    !!e.constructor &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
function Iy(e) {
  return (
    typeof e.readFloatLE == "function" &&
    typeof e.slice == "function" &&
    mp(e.slice(0, 0))
  );
}
var Uy = jy,
  by = Object.prototype.toString,
  Vy = function (t) {
    if (typeof t > "u") return "undefined";
    if (t === null) return "null";
    if (t === !0 || t === !1 || t instanceof Boolean) return "boolean";
    if (typeof t == "string" || t instanceof String) return "string";
    if (typeof t == "number" || t instanceof Number) return "number";
    if (typeof t == "function" || t instanceof Function) return "function";
    if (typeof Array.isArray < "u" && Array.isArray(t)) return "array";
    if (t instanceof RegExp) return "regexp";
    if (t instanceof Date) return "date";
    var n = by.call(t);
    return n === "[object RegExp]"
      ? "regexp"
      : n === "[object Date]"
      ? "date"
      : n === "[object Arguments]"
      ? "arguments"
      : n === "[object Error]"
      ? "error"
      : Uy(t)
      ? "buffer"
      : n === "[object Set]"
      ? "set"
      : n === "[object WeakSet]"
      ? "weakset"
      : n === "[object Map]"
      ? "map"
      : n === "[object WeakMap]"
      ? "weakmap"
      : n === "[object Symbol]"
      ? "symbol"
      : n === "[object Int8Array]"
      ? "int8array"
      : n === "[object Uint8Array]"
      ? "uint8array"
      : n === "[object Uint8ClampedArray]"
      ? "uint8clampedarray"
      : n === "[object Int16Array]"
      ? "int16array"
      : n === "[object Uint16Array]"
      ? "uint16array"
      : n === "[object Int32Array]"
      ? "int32array"
      : n === "[object Uint32Array]"
      ? "uint32array"
      : n === "[object Float32Array]"
      ? "float32array"
      : n === "[object Float64Array]"
      ? "float64array"
      : "object";
  },
  vp = { exports: {} };
(function (e) {
  (function () {
    function t(n, r) {
      if (typeof r != "function") return n;
      var i = {};
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) &&
          (i[r(o, n[o]) || o] = n[o]);
      return i;
    }
    e.exports ? (e.exports = t) : (window.rename = t);
  })();
})(vp);
var $y = vp.exports;
/*!
 * deep-rename-keys <https://github.com/jonschlinkert/deep-rename-keys>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */ var ua = Vy,
  Hy = $y,
  Wy = function e(t, n) {
    var r = ua(t);
    if (r !== "object" && r !== "array") throw new Error("expected an object");
    var i = [];
    r === "object" && ((t = Hy(t, n)), (i = {}));
    for (var o in t)
      if (t.hasOwnProperty(o)) {
        var l = t[o];
        ua(l) === "object" || ua(l) === "array" ? (i[o] = e(l, n)) : (i[o] = l);
      }
    return i;
  };
const Qy = Un(Wy);
var gp = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    n = "~";
  function r() {}
  Object.create &&
    ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1));
  function i(l, a, s) {
    (this.fn = l), (this.context = a), (this.once = s || !1);
  }
  function o() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  (o.prototype.eventNames = function () {
    var a = [],
      s,
      u;
    if (this._eventsCount === 0) return a;
    for (u in (s = this._events)) t.call(s, u) && a.push(n ? u.slice(1) : u);
    return Object.getOwnPropertySymbols
      ? a.concat(Object.getOwnPropertySymbols(s))
      : a;
  }),
    (o.prototype.listeners = function (a, s) {
      var u = n ? n + a : a,
        c = this._events[u];
      if (s) return !!c;
      if (!c) return [];
      if (c.fn) return [c.fn];
      for (var f = 0, p = c.length, v = new Array(p); f < p; f++)
        v[f] = c[f].fn;
      return v;
    }),
    (o.prototype.emit = function (a, s, u, c, f, p) {
      var v = n ? n + a : a;
      if (!this._events[v]) return !1;
      var w = this._events[v],
        S = arguments.length,
        P,
        h;
      if (w.fn) {
        switch ((w.once && this.removeListener(a, w.fn, void 0, !0), S)) {
          case 1:
            return w.fn.call(w.context), !0;
          case 2:
            return w.fn.call(w.context, s), !0;
          case 3:
            return w.fn.call(w.context, s, u), !0;
          case 4:
            return w.fn.call(w.context, s, u, c), !0;
          case 5:
            return w.fn.call(w.context, s, u, c, f), !0;
          case 6:
            return w.fn.call(w.context, s, u, c, f, p), !0;
        }
        for (h = 1, P = new Array(S - 1); h < S; h++) P[h - 1] = arguments[h];
        w.fn.apply(w.context, P);
      } else {
        var d = w.length,
          y;
        for (h = 0; h < d; h++)
          switch (
            (w[h].once && this.removeListener(a, w[h].fn, void 0, !0), S)
          ) {
            case 1:
              w[h].fn.call(w[h].context);
              break;
            case 2:
              w[h].fn.call(w[h].context, s);
              break;
            case 3:
              w[h].fn.call(w[h].context, s, u);
              break;
            case 4:
              w[h].fn.call(w[h].context, s, u, c);
              break;
            default:
              if (!P)
                for (y = 1, P = new Array(S - 1); y < S; y++)
                  P[y - 1] = arguments[y];
              w[h].fn.apply(w[h].context, P);
          }
      }
      return !0;
    }),
    (o.prototype.on = function (a, s, u) {
      var c = new i(s, u || this),
        f = n ? n + a : a;
      return (
        this._events[f]
          ? this._events[f].fn
            ? (this._events[f] = [this._events[f], c])
            : this._events[f].push(c)
          : ((this._events[f] = c), this._eventsCount++),
        this
      );
    }),
    (o.prototype.once = function (a, s, u) {
      var c = new i(s, u || this, !0),
        f = n ? n + a : a;
      return (
        this._events[f]
          ? this._events[f].fn
            ? (this._events[f] = [this._events[f], c])
            : this._events[f].push(c)
          : ((this._events[f] = c), this._eventsCount++),
        this
      );
    }),
    (o.prototype.removeListener = function (a, s, u, c) {
      var f = n ? n + a : a;
      if (!this._events[f]) return this;
      if (!s)
        return (
          --this._eventsCount === 0
            ? (this._events = new r())
            : delete this._events[f],
          this
        );
      var p = this._events[f];
      if (p.fn)
        p.fn === s &&
          (!c || p.once) &&
          (!u || p.context === u) &&
          (--this._eventsCount === 0
            ? (this._events = new r())
            : delete this._events[f]);
      else {
        for (var v = 0, w = [], S = p.length; v < S; v++)
          (p[v].fn !== s || (c && !p[v].once) || (u && p[v].context !== u)) &&
            w.push(p[v]);
        w.length
          ? (this._events[f] = w.length === 1 ? w[0] : w)
          : --this._eventsCount === 0
          ? (this._events = new r())
          : delete this._events[f];
      }
      return this;
    }),
    (o.prototype.removeAllListeners = function (a) {
      var s;
      return (
        a
          ? ((s = n ? n + a : a),
            this._events[s] &&
              (--this._eventsCount === 0
                ? (this._events = new r())
                : delete this._events[s]))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (o.prototype.off = o.prototype.removeListener),
    (o.prototype.addListener = o.prototype.on),
    (o.prototype.setMaxListeners = function () {
      return this;
    }),
    (o.prefixed = n),
    (o.EventEmitter = o),
    (e.exports = o);
})(gp);
var yp = gp.exports;
function W(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ky = yp,
  Qr = function () {},
  K = {
    data: "state-data",
    cdata: "state-cdata",
    tagBegin: "state-tag-begin",
    tagName: "state-tag-name",
    tagEnd: "state-tag-end",
    attributeNameStart: "state-attribute-name-start",
    attributeName: "state-attribute-name",
    attributeNameEnd: "state-attribute-name-end",
    attributeValueBegin: "state-attribute-value-begin",
    attributeValue: "state-attribute-value",
  },
  b = {
    lt: "action-lt",
    gt: "action-gt",
    space: "action-space",
    equal: "action-equal",
    quote: "action-quote",
    slash: "action-slash",
    char: "action-char",
    error: "action-error",
  },
  pe = {
    text: "text",
    openTag: "open-tag",
    closeTag: "close-tag",
    attributeName: "attribute-name",
    attributeValue: "attribute-value",
  },
  qy = {
    " ": b.space,
    "	": b.space,
    "\n": b.space,
    "\r": b.space,
    "<": b.lt,
    ">": b.gt,
    '"': b.quote,
    "'": b.quote,
    "=": b.equal,
    "/": b.slash,
  },
  Yy = function (t) {
    return qy[t] || b.char;
  },
  Xy = function (t) {
    var n, r, i, o, l, a, s, u, c, f;
    t = Object.assign({ debug: !1 }, t);
    var p = new Ky(),
      v = K.data,
      w = "",
      S = "",
      P = "",
      h = "",
      d = "",
      y = "",
      x = function (N, k) {
        if (!(S[0] === "?" || S[0] === "!")) {
          var z = { type: N, value: k };
          t.debug && console.log("emit:", z), p.emit("data", z);
        }
      };
    p.stateMachine =
      ((f = {}),
      W(
        f,
        K.data,
        ((n = {}),
        W(n, b.lt, function () {
          w.trim() && x(pe.text, w), (S = ""), (d = !1), (v = K.tagBegin);
        }),
        W(n, b.char, function (m) {
          w += m;
        }),
        n)
      ),
      W(
        f,
        K.cdata,
        W({}, b.char, function (m) {
          (w += m),
            w.substr(-3) === "]]>" &&
              (x(pe.text, w.slice(0, -3)), (w = ""), (v = K.data));
        })
      ),
      W(
        f,
        K.tagBegin,
        ((r = {}),
        W(r, b.space, Qr),
        W(r, b.char, function (m) {
          (S = m), (v = K.tagName);
        }),
        W(r, b.slash, function () {
          (S = ""), (d = !0);
        }),
        r)
      ),
      W(
        f,
        K.tagName,
        ((i = {}),
        W(i, b.space, function () {
          d ? (v = K.tagEnd) : ((v = K.attributeNameStart), x(pe.openTag, S));
        }),
        W(i, b.gt, function () {
          x(d ? pe.closeTag : pe.openTag, S), (w = ""), (v = K.data);
        }),
        W(i, b.slash, function () {
          (v = K.tagEnd), x(pe.openTag, S);
        }),
        W(i, b.char, function (m) {
          (S += m), S === "![CDATA[" && ((v = K.cdata), (w = ""), (S = ""));
        }),
        i)
      ),
      W(
        f,
        K.tagEnd,
        ((o = {}),
        W(o, b.gt, function () {
          x(pe.closeTag, S), (w = ""), (v = K.data);
        }),
        W(o, b.char, Qr),
        o)
      ),
      W(
        f,
        K.attributeNameStart,
        ((l = {}),
        W(l, b.char, function (m) {
          (P = m), (v = K.attributeName);
        }),
        W(l, b.gt, function () {
          (w = ""), (v = K.data);
        }),
        W(l, b.space, Qr),
        W(l, b.slash, function () {
          (d = !0), (v = K.tagEnd);
        }),
        l)
      ),
      W(
        f,
        K.attributeName,
        ((a = {}),
        W(a, b.space, function () {
          v = K.attributeNameEnd;
        }),
        W(a, b.equal, function () {
          x(pe.attributeName, P), (v = K.attributeValueBegin);
        }),
        W(a, b.gt, function () {
          (h = ""),
            x(pe.attributeName, P),
            x(pe.attributeValue, h),
            (w = ""),
            (v = K.data);
        }),
        W(a, b.slash, function () {
          (d = !0),
            (h = ""),
            x(pe.attributeName, P),
            x(pe.attributeValue, h),
            (v = K.tagEnd);
        }),
        W(a, b.char, function (m) {
          P += m;
        }),
        a)
      ),
      W(
        f,
        K.attributeNameEnd,
        ((s = {}),
        W(s, b.space, Qr),
        W(s, b.equal, function () {
          x(pe.attributeName, P), (v = K.attributeValueBegin);
        }),
        W(s, b.gt, function () {
          (h = ""),
            x(pe.attributeName, P),
            x(pe.attributeValue, h),
            (w = ""),
            (v = K.data);
        }),
        W(s, b.char, function (m) {
          (h = ""),
            x(pe.attributeName, P),
            x(pe.attributeValue, h),
            (P = m),
            (v = K.attributeName);
        }),
        s)
      ),
      W(
        f,
        K.attributeValueBegin,
        ((u = {}),
        W(u, b.space, Qr),
        W(u, b.quote, function (m) {
          (y = m), (h = ""), (v = K.attributeValue);
        }),
        W(u, b.gt, function () {
          (h = ""), x(pe.attributeValue, h), (w = ""), (v = K.data);
        }),
        W(u, b.char, function (m) {
          (y = ""), (h = m), (v = K.attributeValue);
        }),
        u)
      ),
      W(
        f,
        K.attributeValue,
        ((c = {}),
        W(c, b.space, function (m) {
          y ? (h += m) : (x(pe.attributeValue, h), (v = K.attributeNameStart));
        }),
        W(c, b.quote, function (m) {
          y === m
            ? (x(pe.attributeValue, h), (v = K.attributeNameStart))
            : (h += m);
        }),
        W(c, b.gt, function (m) {
          y ? (h += m) : (x(pe.attributeValue, h), (w = ""), (v = K.data));
        }),
        W(c, b.slash, function (m) {
          y ? (h += m) : (x(pe.attributeValue, h), (d = !0), (v = K.tagEnd));
        }),
        W(c, b.char, function (m) {
          h += m;
        }),
        c)
      ),
      f);
    var A = function (N) {
      t.debug && console.log(v, N);
      var k = p.stateMachine[v],
        z = k[Yy(N)] || k[b.error] || k[b.char];
      z(N);
    };
    return (
      (p.write = function (m) {
        for (var N = m.length, k = 0; k < N; k++) A(m[k]);
      }),
      p
    );
  },
  Gy = { State: K, Action: b, Type: pe, create: Xy },
  Jy = yp,
  wp = Gy,
  Kr = wp.Type,
  Su = { element: "element", text: "text" },
  ca = function (t) {
    return Object.assign(
      {
        name: "",
        type: Su.element,
        value: "",
        parent: null,
        attributes: {},
        children: [],
      },
      t
    );
  },
  Ep = function (t) {
    t = Object.assign(
      {
        stream: !1,
        parentNodes: !0,
        doneEvent: "done",
        tagPrefix: "tag:",
        emitTopLevelOnly: !1,
        debug: !1,
      },
      t
    );
    var n = void 0,
      r = void 0,
      i = void 0,
      o = void 0,
      l = new Jy(),
      a = function (u) {
        switch (u.type) {
          case Kr.openTag:
            if (i === null) (i = r), (i.name = u.value);
            else {
              var c = ca({ name: u.value, parent: i });
              i.children.push(c), (i = c);
            }
            break;
          case Kr.closeTag:
            var f = i.parent;
            if ((t.parentNodes || (i.parent = null), i.name !== u.value)) break;
            t.stream && f === r && ((r.children = []), (i.parent = null)),
              (!t.emitTopLevelOnly || f === r) &&
                (l.emit(t.tagPrefix + i.name, i), l.emit("tag", i.name, i)),
              i === r &&
                (n.removeAllListeners("data"),
                l.emit(t.doneEvent, i),
                (r = null)),
              (i = f);
            break;
          case Kr.text:
            i &&
              i.children.push(
                ca({
                  type: Su.text,
                  value: u.value,
                  parent: t.parentNodes ? i : null,
                })
              );
            break;
          case Kr.attributeName:
            (o = u.value), (i.attributes[o] = "");
            break;
          case Kr.attributeValue:
            i.attributes[o] = u.value;
            break;
        }
      };
    return (
      (l.reset = function () {
        (n = wp.create({ debug: t.debug })),
          n.on("data", a),
          (r = ca()),
          (i = null),
          (o = ""),
          (l.parse = n.write);
      }),
      l.reset(),
      l
    );
  },
  Zy = function (t, n) {
    n = Object.assign({}, n, { stream: !1, tagPrefix: ":" });
    var r = Ep(n),
      i = void 0;
    return (
      r.on("done", function (o) {
        i = o;
      }),
      r.parse(t),
      i
    );
  },
  e1 = { parseSync: Zy, create: Ep, NodeType: Su },
  t1 = function (t) {
    var n = e1.parseSync("<root>".concat(t, "</root>"), { parentNodes: !1 }),
      r =
        n.children &&
        n.children.length > 0 &&
        n.children.every(function (i) {
          return i.name === "svg";
        });
    if (r) return n.children.length === 1 ? n.children[0] : n.children;
    throw Error("nothing to parse");
  },
  n1 = function (t) {
    return Qy(t, function (n) {
      return i1(n) ? n : r1(n);
    });
  },
  r1 = function (t) {
    return t.replace(/[-|:]([a-z])/gi, function (n, r) {
      return r.toUpperCase();
    });
  },
  i1 = function (t) {
    return /^(data|aria)(-\w+)/.test(t);
  },
  o1 = function (t) {
    if (t) {
      var n = String(t);
      return /[&<>]/.test(n)
        ? "<![CDATA[".concat(n.replace(/]]>/, "]]]]><![CDATA[>"), "]]>")
        : n;
    }
    return "";
  },
  l1 = function (t) {
    return String(t)
      .replace(/&/g, "&amp;")
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  },
  a1 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transformNode,
      i =
        r === void 0
          ? function (s) {
              return s;
            }
          : r,
      o = n.camelcase,
      l = o === void 0 ? !1 : o,
      a = function (u) {
        var c;
        return (c = i(u)), l && (c = n1(c)), c;
      };
    return a(t1(t));
  },
  s1 = function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transformAttr,
      i =
        r === void 0
          ? function (v, w, S) {
              return "".concat(v, '="').concat(S(w), '"');
            }
          : r,
      o = n.transformNode,
      l =
        o === void 0
          ? function (v) {
              return v;
            }
          : o,
      a = n.selfClose,
      s = a === void 0 ? !0 : a;
    if (Array.isArray(t))
      return t
        .map(function (v) {
          return e(v, { transformAttr: i, selfClose: s, transformNode: l });
        })
        .join("");
    var u = l(t);
    if (u.type === "text") return o1(u.value);
    var c = "";
    for (var f in u.attributes) {
      var p = i(f, u.attributes[f], l1, u.name);
      c += p ? " ".concat(p) : "";
    }
    return (u.children && u.children.length > 0) || !s
      ? "<"
          .concat(u.name)
          .concat(c, ">")
          .concat(
            e(u.children, { transformAttr: i, transformNode: l, selfClose: s }),
            "</"
          )
          .concat(u.name, ">")
      : "<".concat(u.name).concat(c, "/>");
  };
function Rf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rf(Object(n), !0).forEach(function (r) {
          kt(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Rf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Pi(e) {
  "@babel/helpers - typeof";
  return (
    (Pi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pi(e)
  );
}
function Cl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Rl(e, t, n) {
  return (
    t && Tf(e.prototype, t),
    n && Tf(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function kt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function u1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function c1(e, t) {
  if (e == null) return {};
  var n = u1(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function f1(e) {
  return h1(e) || Sp(e) || _u(e) || m1();
}
function cs(e) {
  return d1(e) || Sp(e) || _u(e) || p1();
}
function d1(e) {
  if (Array.isArray(e)) return fs(e);
}
function h1(e) {
  if (Array.isArray(e)) return e;
}
function Sp(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function _u(e, t) {
  if (e) {
    if (typeof e == "string") return fs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fs(e, t);
  }
}
function fs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function p1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pf(e, t) {
  var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = _u(e)) || t) {
      n && (e = n);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (s) {
          throw s;
        },
        f: i,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    a;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var s = n.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (a = s);
    },
    f: function () {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (l) throw a;
      }
    },
  };
}
function v1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function g1(e) {
  var t = v1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var il = -2147483648,
  _p = 2147483647;
function xp(e) {
  return (e ^= e << 13), (e ^= e >> 17), (e ^= e << 5), e;
}
function y1(e) {
  for (var t = 0, n = 0; n < e.length; n++)
    (t = ((t << 5) - t + e.charCodeAt(n)) | 0), (t = xp(t));
  return t;
}
function w1() {
  return il + Math.floor((_p - il) * Math.random()).toString();
}
function Tl(e) {
  var t;
  e = (t = e) !== null && t !== void 0 ? t : w1();
  var n = y1(e) || 1,
    r = function () {
      return (n = xp(n));
    },
    i = function (l, a) {
      return Math.floor(((r() - il) / (_p - il)) * (a + 1 - l) + l);
    };
  return {
    seed: e,
    bool: function () {
      var l =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 50;
      return i(0, 100) < l;
    },
    integer: function (l, a) {
      return i(l, a);
    },
    pick: function (l) {
      return l[i(0, l.length - 1)];
    },
  };
}
var E1 = Object.freeze({ __proto__: null, create: Tl }),
  kp = (function () {
    function e(t) {
      Cl(this, e),
        kt(this, "prng", void 0),
        kt(this, "seed", void 0),
        (this.prng = Tl(t)),
        (this.seed = this.prng.seed);
    }
    return (
      Rl(e, [
        {
          key: "bool",
          value: function () {
            var n =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : 50;
            return this.prng.bool(n);
          },
        },
        {
          key: "integer",
          value: function (n, r) {
            return this.prng.integer(n, r);
          },
        },
        {
          key: "pickone",
          value: function (n) {
            return this.prng.pick(n);
          },
        },
      ]),
      e
    );
  })(),
  S1 = {
    50: "#FFF8E1",
    100: "#FFECB3",
    200: "#FFE082",
    300: "#FFB74D",
    400: "#FFCA28",
    500: "#FFC107",
    600: "#FFB300",
    700: "#FFA000",
    800: "#FF8F00",
    900: "#FF6F00",
  },
  _1 = {
    50: "#E3F2FD",
    100: "#BBDEFB",
    200: "#90CAF9",
    300: "#64B5F6",
    400: "#42A5F5",
    500: "#2196F3",
    600: "#1E88E5",
    700: "#1976D2",
    800: "#1565C0",
    900: "#0D47A1",
  },
  x1 = {
    50: "#ECEFF1",
    100: "#CFD8DC",
    200: "#B0BEC5",
    300: "#90A4AE",
    400: "#78909C",
    500: "#607D8B",
    600: "#546E7A",
    700: "#455A64",
    800: "#37474F",
    900: "#263238",
  },
  k1 = {
    50: "#EFEBE9",
    100: "#D7CCC8",
    200: "#BCAAA4",
    300: "#A1887F",
    400: "#8D6E63",
    500: "#795548",
    600: "#6D4C41",
    700: "#5D4037",
    800: "#4E342E",
    900: "#3E2723",
  },
  C1 = {
    50: "#E0F7FA",
    100: "#B2EBF2",
    200: "#80DEEA",
    300: "#4DD0E1",
    400: "#26C6DA",
    500: "#00BCD4",
    600: "#00ACC1",
    700: "#0097A7",
    800: "#00838F",
    900: "#006064",
  },
  R1 = {
    50: "#FBE9E7",
    100: "#FFCCBC",
    200: "#FFAB91",
    300: "#A1887F",
    400: "#FF7043",
    500: "#FF5722",
    600: "#F4511E",
    700: "#E64A19",
    800: "#D84315",
    900: "#BF360C",
  },
  T1 = {
    50: "#EDE7F6",
    100: "#D1C4E9",
    200: "#B39DDB",
    300: "#9575CD",
    400: "#7E57C2",
    500: "#673AB7",
    600: "#5E35B1",
    700: "#512DA8",
    800: "#4527A0",
    900: "#311B92",
  },
  P1 = {
    50: "#E8F5E9",
    100: "#C8E6C9",
    200: "#A5D6A7",
    300: "#81C784",
    400: "#66BB6A",
    500: "#4CAF50",
    600: "#43A047",
    700: "#388E3C",
    800: "#2E7D32",
    900: "#1B5E20",
  },
  N1 = {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  A1 = {
    50: "#E8EAF6",
    100: "#C5CAE9",
    200: "#9FA8DA",
    300: "#7986CB",
    400: "#5C6BC0",
    500: "#3F51B5",
    600: "#3949AB",
    700: "#303F9F",
    800: "#283593",
    900: "#1A237E",
  },
  L1 = {
    50: "#E1F5FE",
    100: "#B3E5FC",
    200: "#81D4FA",
    300: "#4FC3F7",
    400: "#29B6F6",
    500: "#03A9F4",
    600: "#039BE5",
    700: "#0288D1",
    800: "#0277BD",
    900: "#01579B",
  },
  F1 = {
    50: "#F1F8E9",
    100: "#DCEDC8",
    200: "#C5E1A5",
    300: "#AED581",
    400: "#9CCC65",
    500: "#8BC34A",
    600: "#7CB342",
    700: "#689F38",
    800: "#558B2F",
    900: "#33691E",
  },
  O1 = {
    50: "#F9FBE7",
    100: "#F0F4C3",
    200: "#E6EE9C",
    300: "#DCE775",
    400: "#D4E157",
    500: "#CDDC39",
    600: "#C0CA33",
    700: "#AFB42B",
    800: "#9E9D24",
    900: "#827717",
  },
  D1 = {
    50: "#FFF3E0",
    100: "#FFE0B2",
    200: "#FFCC80",
    300: "#FF8A65",
    400: "#FFA726",
    500: "#FF9800",
    600: "#FB8C00",
    700: "#F57C00",
    800: "#EF6C00",
    900: "#E65100",
  },
  M1 = {
    50: "#FCE4EC",
    100: "#F8BBD0",
    200: "#F48FB1",
    300: "#F06292",
    400: "#EC407A",
    500: "#E91E63",
    600: "#D81B60",
    700: "#C2185B",
    800: "#AD1457",
    900: "#880E4F",
  },
  z1 = {
    50: "#F3E5F5",
    100: "#E1BEE7",
    200: "#CE93D8",
    300: "#BA68C8",
    400: "#AB47BC",
    500: "#9C27B0",
    600: "#8E24AA",
    700: "#7B1FA2",
    800: "#6A1B9A",
    900: "#4A148C",
  },
  B1 = {
    50: "#FFEBEE",
    100: "#FFCDD2",
    200: "#EF9A9A",
    300: "#E57373",
    400: "#EF5350",
    500: "#F44336",
    600: "#E53935",
    700: "#D32F2F",
    800: "#C62828",
    900: "#B71C1C",
  },
  j1 = {
    50: "#E0F2F1",
    100: "#B2DFDB",
    200: "#80CBC4",
    300: "#4DB6AC",
    400: "#26A69A",
    500: "#009688",
    600: "#00897B",
    700: "#00796B",
    800: "#00695C",
    900: "#004D40",
  },
  I1 = {
    50: "#FFFDE7",
    100: "#FFF9C4",
    200: "#FFF59D",
    300: "#FFF176",
    400: "#FFEE58",
    500: "#FFEB3B",
    600: "#FDD835",
    700: "#FBC02D",
    800: "#F9A825",
    900: "#F57F17",
  },
  U1 = {
    amber: S1,
    blue: _1,
    blueGrey: x1,
    brown: k1,
    cyan: C1,
    deepOrange: R1,
    deepPurple: T1,
    green: P1,
    grey: N1,
    indigo: A1,
    lightBlue: L1,
    lightGreen: F1,
    lime: O1,
    orange: D1,
    pink: M1,
    purple: z1,
    red: B1,
    teal: j1,
    yellow: I1,
  },
  Cp = (function () {
    function e() {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#000";
      if (
        (Cl(this, e), kt(this, "alpha", 1), kt(this, "color", {}), t[0] == "#")
      )
        this.hex = t;
      else {
        var n = /^(rgb|rgba|hsv)\(([0-9\%\,\.\s]+)\)$/.exec(t.trim());
        if (n) {
          var r = n[2].split(",").map(function (i) {
            return parseInt(i.trim());
          });
          switch (n[1]) {
            case "rgb":
              this.rgb = r;
              break;
            case "rgba":
              this.rgba = r;
              break;
            case "hsv":
              this.hsv = r;
              break;
            default:
              throw new Error("Unsupported color format: " + t);
          }
        } else throw new Error("Unknown color format: " + t);
      }
    }
    return (
      Rl(e, [
        {
          key: "clone",
          value: function () {
            return new e("rgb(" + this.rgb.join(",") + ")");
          },
        },
        {
          key: "rgb",
          get: function () {
            return (this.color.rgb =
              this.color.rgb ||
              (this.color.hex
                ? this.hexToRgb(this.hex)
                : this.hsvToRgb(this.hsv)));
          },
          set: function (n) {
            if (n.length != 3)
              throw new Error("An array with a length of 3 is expected.");
            (this.alpha = 1), (this.color = { rgb: n });
          },
        },
        {
          key: "rgba",
          get: function () {
            return [this.rgb[0], this.rgb[1], this.rgb[2], this.alpha];
          },
          set: function (n) {
            if (n.length != 4)
              throw new Error("An array with a length of 3 is expected.");
            (this.rgb = [n[0], n[1], n[2]]), (this.alpha = n[3]);
          },
        },
        {
          key: "hsv",
          get: function () {
            return (this.color.hsv =
              this.color.hsv || this.rgbToHsv(this.rgb)).slice(0);
          },
          set: function (n) {
            if (n.length != 3)
              throw new Error("An array with a length of 3 is expected.");
            (this.alpha = 1), (this.color = { hsv: n });
          },
        },
        {
          key: "hex",
          get: function () {
            return (this.color.hex =
              this.color.hex || this.rgbToHex(this.rgb)).slice(0);
          },
          set: function (n) {
            (this.alpha = 1), (this.color = { hex: n });
          },
        },
        {
          key: "brighterThan",
          value: function (n, r) {
            var i = this.hsv,
              o = n.hsv;
            return i[2] >= o[2] + r
              ? this
              : ((i[2] = o[2] + r),
                i[2] > 360 && (i[2] = 360),
                (this.hsv = i),
                this);
          },
        },
        {
          key: "darkerThan",
          value: function (n, r) {
            var i = this.hsv,
              o = n.hsv;
            return i[2] <= o[2] - r
              ? this
              : ((i[2] = o[2] - r),
                i[2] < 0 && (i[2] = 0),
                (this.hsv = i),
                this);
          },
        },
        {
          key: "brighterOrDarkerThan",
          value: function (n, r) {
            var i = this.hsv,
              o = n.hsv;
            return i[2] <= o[2]
              ? this.darkerThan(n, r)
              : this.brighterThan(n, r);
          },
        },
        {
          key: "rgbToHex",
          value: function (n) {
            return Dy(n);
          },
        },
        {
          key: "hexToRgb",
          value: function (n) {
            return Cy(n).map(function (r) {
              return Math.round(r);
            });
          },
        },
        {
          key: "rgbToHsv",
          value: function (n) {
            return Py(n).map(function (r) {
              return Math.round(r);
            });
          },
        },
        {
          key: "hsvToRgb",
          value: function (n) {
            return By(n).map(function (r) {
              return Math.round(r);
            });
          },
        },
      ]),
      e
    );
  })();
kt(Cp, "collection", U1);
var xo = (function () {
  function e() {
    Cl(this, e);
  }
  return (
    Rl(e, null, [
      {
        key: "parse",
        value: function (n) {
          return typeof n == "string" ? a1(n) : n;
        },
      },
      {
        key: "stringify",
        value: function (n) {
          return typeof n == "string" ? n : s1(n);
        },
      },
    ]),
    e
  );
})();
function ds(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var b1 = Object.freeze({ __proto__: null, xml: ds }),
  Rp = {
    type: "object",
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Options",
    properties: {
      seed: { title: "Seed", type: "string" },
      s: { title: "Seed", type: "string" },
      base64: {
        title: "Base64",
        description: "@deprecated use dataUri instead",
        type: "boolean",
        default: !1,
      },
      dataUri: { title: "Data URI", type: "boolean", default: !1 },
      userAgent: {
        title: "User Agent",
        description: "@deprecated",
        type: "string",
      },
      flip: { title: "Flip", type: "boolean", default: !1 },
      rotate: {
        title: "Rotate",
        type: "integer",
        minimum: 0,
        maximum: 360,
        default: 0,
      },
      scale: {
        title: "Scale",
        type: "integer",
        minimum: 0,
        maximum: 200,
        default: 100,
      },
      radius: {
        title: "Radius",
        type: "integer",
        minimum: 0,
        maximum: 50,
        default: 0,
      },
      r: {
        title: "Radius",
        type: "integer",
        minimum: 0,
        maximum: 50,
        default: 0,
      },
      width: {
        title: "Width",
        description: "@deprecated use size instead",
        type: "integer",
        minimum: 1,
      },
      w: {
        title: "Width",
        description: "@deprecated use size instead",
        type: "integer",
        minimum: 1,
      },
      height: {
        title: "Height",
        description: "@deprecated use size instead",
        type: "integer",
        minimum: 1,
      },
      h: {
        title: "Height",
        description: "@deprecated use size instead",
        type: "integer",
        minimum: 1,
      },
      size: { title: "Size", type: "integer", minimum: 1 },
      margin: {
        title: "Margin",
        description: "@deprecated use scale instead",
        type: "integer",
        minimum: 0,
        maximum: 25,
        default: 0,
      },
      m: {
        title: "Margin",
        description: "@deprecated use scale instead",
        type: "integer",
        minimum: 0,
        maximum: 25,
        default: 0,
      },
      backgroundColor: {
        title: "Background Color",
        anyOf: [
          {
            type: "string",
            pattern:
              "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$",
          },
          { type: "string", pattern: "^[0-9a-zA-Z]+$" },
          {
            type: "array",
            items: {
              anyOf: [
                {
                  type: "string",
                  pattern:
                    "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$",
                },
                { type: "string", pattern: "^[0-9a-zA-Z]+$" },
              ],
            },
          },
        ],
      },
      background: {
        title: "Background Color",
        anyOf: [
          {
            type: "string",
            pattern:
              "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$",
          },
          { type: "string", pattern: "^[0-9a-zA-Z]+$" },
          {
            type: "array",
            items: {
              anyOf: [
                {
                  type: "string",
                  pattern:
                    "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$",
                },
                { type: "string", pattern: "^[0-9a-zA-Z]+$" },
              ],
            },
          },
        ],
        description: "@deprecated use backgroundColor instead",
      },
      b: {
        title: "Background Color",
        anyOf: [
          {
            type: "string",
            pattern:
              "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$",
          },
          { type: "string", pattern: "^[0-9a-zA-Z]+$" },
          {
            type: "array",
            items: {
              anyOf: [
                {
                  type: "string",
                  pattern:
                    "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$",
                },
                { type: "string", pattern: "^[0-9a-zA-Z]+$" },
              ],
            },
          },
        ],
      },
      translateX: {
        title: "Translate X%",
        type: "integer",
        minimum: -100,
        maximum: 100,
        default: 0,
      },
      translateY: {
        title: "Translate Y%",
        type: "integer",
        minimum: -100,
        maximum: 100,
        default: 0,
      },
    },
    additionalProperties: !1,
  };
function xu(e) {
  return e.properties || {};
}
function hs(e) {
  var t = {},
    n = xu(e);
  return (
    Object.keys(n).forEach(function (r) {
      var i = n[r];
      Pi(i) === "object" &&
        i.default !== void 0 &&
        (Array.isArray(i.default)
          ? (t[r] = cs(i.default))
          : Pi(i.default) === "object"
          ? (t[r] = pr({}, i.default))
          : (t[r] = i.default));
    }),
    t
  );
}
function Tp(e) {
  var t = {},
    n = xu(e);
  return (
    Object.keys(n).forEach(function (r) {
      var i = n[r];
      if (Pi(i) === "object") {
        var o = i.title;
        o && ((t[o] = t[o] || []), t[o].push(r));
      }
    }),
    Object.values(t)
      .filter(function (r) {
        return r.length > 1;
      })
      .map(function (r) {
        return r.sort().sort(function (i, o) {
          return i.length === o.length ? 0 : i.length > o.length ? 1 : -1;
        });
      })
  );
}
function ps(e) {
  var t = new Map(),
    n = Pf(Tp(e)),
    r;
  try {
    for (n.s(); !(r = n.n()).done; ) {
      var i = r.value,
        o = i.reverse(),
        l = f1(o),
        a = l[0],
        s = l.slice(1),
        u = Pf(s),
        c;
      try {
        for (u.s(); !(c = u.n()).done; ) {
          var f = c.value;
          t.set(f, a);
        }
      } catch (p) {
        u.e(p);
      } finally {
        u.f();
      }
    }
  } catch (p) {
    n.e(p);
  } finally {
    n.f();
  }
  return t;
}
var V1 = Object.freeze({
  __proto__: null,
  properties: xu,
  defaults: hs,
  aliases: Tp,
  aliasesMap: ps,
});
function Pp(e, t) {
  e[t];
  var n = c1(e, [t].map(g1));
  return n;
}
var $1 = Object.freeze({ __proto__: null, omit: Pp });
function ku(e, t) {
  var n = [
      {
        seed: Math.random().toString(),
        userAgent:
          typeof window < "u" && window.navigator && window.navigator.userAgent,
      },
      hs(Rp),
      hs(e.schema),
      t,
    ],
    r = Np(e);
  return (
    n.forEach(function (i) {
      r = Object.assign(r, Pp(i, "_aliases"));
    }),
    r
  );
}
function Np(e) {
  var t = new Map(
    [].concat(cs(Array.from(ps(Rp))), cs(Array.from(ps(e.schema))))
  );
  return new Proxy(
    { _aliases: t },
    {
      get: function (r, i) {
        var o,
          l = (o = r._aliases.get(i)) !== null && o !== void 0 ? o : i;
        return r[l];
      },
      set: function (r, i, o) {
        var l,
          a = (l = r._aliases.get(i)) !== null && l !== void 0 ? l : i;
        return (r[a] = o), !0;
      },
      deleteProperty: function (r, i) {
        var o,
          l = (o = r._aliases.get(i)) !== null && o !== void 0 ? o : i;
        return delete r[l], !0;
      },
    }
  );
}
var H1 = Object.freeze({ __proto__: null, merge: ku, createAliasProxy: Np }),
  W1 = {
    by: {
      permits: ["Reproduction", "Distribution", "DerivativeWorks"],
      requires: ["Notice", "Attribution"],
      prohibits: [],
    },
    "by-sa": {
      permits: ["Reproduction", "Distribution", "DerivativeWorks"],
      requires: ["Notice", "Attribution", "ShareAlike"],
      prohibits: [],
    },
    "by-nd": {
      permits: ["Reproduction", "Distribution"],
      requires: ["Notice", "Attribution"],
      prohibits: [],
    },
    "by-nc": {
      permits: ["Reproduction", "Distribution", "DerivativeWorks"],
      requires: ["Notice", "Attribution"],
      prohibits: ["CommercialUse"],
    },
    "by-nc-sa": {
      permits: ["Reproduction", "Distribution", "DerivativeWorks"],
      requires: ["Notice", "Attribution", "ShareAlike"],
      prohibits: ["CommercialUse"],
    },
    "by-nc-nd": {
      permits: ["Reproduction", "Distribution"],
      requires: ["Notice", "Attribution"],
      prohibits: ["CommercialUse"],
    },
    zero: {
      permits: ["Reproduction", "Distribution", "DerivativeWorks"],
      requires: [],
      prohibits: [],
    },
  };
function Q1(e) {
  var t = e.children,
    n = e.x,
    r = e.y;
  return '<g transform="translate('
    .concat(n, ", ")
    .concat(r, ')">')
    .concat(t, "</g>");
}
function Ap() {
  return {
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:cc": "http://creativecommons.org/ns#",
    "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "xmlns:svg": "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/svg",
  };
}
function Cu(e) {
  return `
<metadata>
<rdf:RDF>
<cc:Work>
<dc:format>image/svg+xml</dc:format>
<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
`
    .concat(
      Lp(e),
      `
`
    )
    .concat(
      Fp(e),
      `
`
    )
    .concat(
      Op(e),
      `
`
    )
    .concat(
      Dp(e),
      `
`
    )
    .concat(
      Mp(e),
      `
</cc:Work>
`
    )
    .concat(
      zp(e),
      `
</rdf:RDF>
</metadata>
`
    );
}
function Lp(e) {
  return e.meta.title ? "<dc:title>".concat(e.meta.title, "</dc:title>") : "";
}
function Fp(e) {
  if (e.meta.creator) {
    var t = Array.isArray(e.meta.creator) ? e.meta.creator : [e.meta.creator];
    return `
<dc:creator>
`.concat(
      Ru(t),
      `
</dc:creator>
`
    );
  }
  return "";
}
function Op(e) {
  return e.meta.source
    ? "<dc:source>".concat(e.meta.source, "</dc:source>")
    : "";
}
function Dp(e) {
  return e.meta.license
    ? '<cc:license rdf:resource="'.concat(e.meta.license.url, '" />')
    : "";
}
function Mp(e) {
  if (e.meta.contributor) {
    var t = Array.isArray(e.meta.contributor)
      ? e.meta.contributor
      : [e.meta.contributor];
    return `
<dc:contributor>
`.concat(
      Ru(t),
      `
</dc:contributor>
`
    );
  }
  return "";
}
function Ru(e) {
  return e.map(function (t) {
    return `
<cc:Agent>
<dc:title>`.concat(
      t,
      `</dc:title>
</cc:Agent>
`
    );
  });
}
function zp(e) {
  var t,
    n =
      (t = e.meta.license) === null || t === void 0
        ? void 0
        : t.url.match(
            /^https?:\/\/creativecommons.org\/(?:licenses|publicdomain)\/([a-z\-]+)\/\d.\d\//
          );
  if (n) {
    var r = W1[n[1]];
    if (r) {
      var i,
        o = "";
      return (
        r.permits.forEach(function (l) {
          o +=
            '<cc:permits rdf:resource="https://creativecommons.org/ns#'.concat(
              l,
              '" />'
            );
        }),
        r.requires.forEach(function (l) {
          o +=
            '<cc:requires rdf:resource="https://creativecommons.org/ns#'.concat(
              l,
              '" />'
            );
        }),
        r.prohibits.forEach(function (l) {
          o +=
            '<cc:prohibits rdf:resource="https://creativecommons.org/ns#'.concat(
              l,
              '" />'
            );
        }),
        `
<cc:License rdf:about="`
          .concat(
            (i = e.meta.license) === null || i === void 0 ? void 0 : i.url,
            `">
`
          )
          .concat(
            o,
            `
</cc:License>
`
          )
      );
    }
  }
  return "";
}
function $n(e) {
  var t = e.attributes.viewBox.split(" "),
    n = parseInt(t[0]),
    r = parseInt(t[1]),
    i = parseInt(t[2]),
    o = parseInt(t[3]);
  return { x: n, y: r, width: i, height: o };
}
function Bp(e, t) {
  var n,
    r =
      typeof t == "number"
        ? t
        : (n = t.margin) !== null && n !== void 0
        ? n
        : 0;
  return Tu(e, 100 - r * 2);
}
function K1(e, t) {
  return t.radius === void 0 ? e.body : Pu(e, t.radius);
}
function jp(e, t) {
  var n,
    r = $n(e),
    i = r.width,
    o = r.height,
    l = r.x,
    a = r.y,
    s =
      typeof t == "string"
        ? t
        : (n = t.backgroundColor) !== null && n !== void 0
        ? n
        : "transparent";
  return `
<rect fill="`
    .concat(s, '" width="')
    .concat(i, '" height="')
    .concat(o, '" x="')
    .concat(l, '" y="')
    .concat(
      a,
      `" />
`
    )
    .concat(
      e.body,
      `
`
    );
}
function Tu(e, t) {
  var n = $n(e),
    r = n.width,
    i = n.height,
    o = n.x,
    l = n.y,
    a = t ? (t - 100) / 100 : 0,
    s = (r / 2 + o) * a * -1,
    u = (i / 2 + l) * a * -1;
  return `
<g transform="translate(`
    .concat(s, " ")
    .concat(u, ") scale(")
    .concat(
      t / 100,
      `)">
`
    )
    .concat(
      e.body,
      `
</g>
`
    );
}
function Ip(e, t, n) {
  var r = $n(e),
    i = (r.width + r.x * 2) * ((t ?? 0) / 100),
    o = (r.height + r.y * 2) * ((n ?? 0) / 100);
  return `
<g transform="translate(`
    .concat(i, " ")
    .concat(
      o,
      `)">
`
    )
    .concat(
      e.body,
      `
</g>
`
    );
}
function Up(e, t) {
  var n = $n(e),
    r = n.width,
    i = n.height,
    o = n.x,
    l = n.y;
  return `
<g transform="rotate(`
    .concat(t, ", ")
    .concat(r / 2 + o, ", ")
    .concat(
      i / 2 + l,
      `)">
`
    )
    .concat(
      e.body,
      `
</g>
`
    );
}
function bp(e) {
  var t = $n(e),
    n = t.width,
    r = t.x;
  return `
<g transform="scale(-1 1) translate(`
    .concat(
      n * -1 - r * 2,
      ` 0)">
`
    )
    .concat(
      e.body,
      `
</g>
`
    );
}
function Pu(e, t) {
  var n = $n(e),
    r = n.width,
    i = n.height,
    o = n.x,
    l = n.y,
    a = t ? (r * t) / 100 : 0,
    s = t ? (i * t) / 100 : 0;
  return `
<mask id="avatarsRadiusMask">
<rect width="`
    .concat(r, '" height="')
    .concat(i, '" rx="')
    .concat(a, '" ry="')
    .concat(s, '" x="')
    .concat(o, '" y="')
    .concat(
      l,
      `" fill="#fff" />
</mask>
<g mask="url(#avatarsRadiusMask)">`
    )
    .concat(
      e.body,
      `</g>
`
    );
}
function Nu(e) {
  return (
    (e = pr(pr({}, Ap()), e)),
    Object.keys(e)
      .map(function (t) {
        return "".concat(ds(t), '="').concat(ds(e[t]), '"');
      })
      .join(" ")
  );
}
function Vp(e) {
  return e
    .trim()
    .replace(/\n/g, " ")
    .replace(/>\s+</g, "><")
    .replace(/\s{2,}/g, " ")
    .replace(/<([^\/>]+)><\/[^>]+>/gi, "<$1/>")
    .replace(/\s(\/?>)/g, "$1");
}
var q1 = Object.freeze({
  __proto__: null,
  createGroup: Q1,
  getXmlnsAttributes: Ap,
  getMetadata: Cu,
  getMetadataWorkTitle: Lp,
  getMetadataWorkCreator: Fp,
  getMetadataWorkSource: Op,
  getMetadataWorkLicense: Dp,
  getMetadataWorkContributor: Mp,
  getMetadataWorkAgents: Ru,
  getMetadataLicense: zp,
  getViewBox: $n,
  addMargin: Bp,
  addRadius: K1,
  addBackgroundColor: jp,
  addScale: Tu,
  addTranslate: Ip,
  addRotate: Up,
  addFlip: bp,
  addViewboxMask: Pu,
  createAttrString: Nu,
  removeWhitespace: Vp,
});
function Y1(e) {
  return function (t, n) {
    var r;
    n = Object.assign(n, ku(e, n));
    var i = e.create({ prng: Tl(t.seed), options: n });
    return `
<svg `
      .concat(
        Nu(i.attributes),
        `>
`
      )
      .concat(
        Cu(e),
        `
`
      )
      .concat(
        (r = i.head) !== null && r !== void 0 ? r : "",
        `
`
      )
      .concat(
        i.body,
        `
</svg>
`
      );
  };
}
var X1 = Object.freeze({ __proto__: null, createLegacyWrapper: Y1 }),
  $p = Object.freeze({
    __proto__: null,
    escape: b1,
    options: H1,
    prng: E1,
    svg: q1,
    style: X1,
    schema: V1,
    helper: $1,
  });
function G1(e) {
  var t,
    n,
    r,
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  i = ku(e, i);
  var o = Tl(i.seed),
    l = e.create({ prng: o, options: i });
  if (
    (i.size
      ? ((l.attributes.width = i.size.toString()),
        (l.attributes.height = i.size.toString()))
      : (i.width && (l.attributes.width = i.width.toString()),
        i.height && (l.attributes.height = i.height.toString())),
    i.scale !== void 0 && i.scale !== 100
      ? (l.body = Tu(l, i.scale))
      : i.margin && (l.body = Bp(l, i)),
    i.flip && (l.body = bp(l)),
    i.rotate && (l.body = Up(l, i.rotate)),
    (i.translateX || i.translateY) &&
      (l.body = Ip(l, i.translateX, i.translateY)),
    i.backgroundColor)
  ) {
    var a = Array.isArray(i.backgroundColor)
      ? o.pick(i.backgroundColor)
      : i.backgroundColor;
    l.body = jp(l, a);
  }
  l.body = Pu(l, (t = i.radius) !== null && t !== void 0 ? t : 0);
  var s = !!(
      !((n = l.head) === null || n === void 0) && n.match(/<metadata([^>]*)>/)
    ),
    u = Vp(
      `
<svg `
        .concat(
          Nu(l.attributes),
          `>
`
        )
        .concat(
          s ? "" : Cu(e),
          `
`
        )
        .concat(
          (r = l.head) !== null && r !== void 0 ? r : "",
          `
`
        )
        .concat(
          l.body,
          `
</svg>
`
        )
    );
  if (i.dataUri)
    return "data:image/svg+xml;utf8,".concat(encodeURIComponent(u));
  if (i.base64) {
    var c = encodeURIComponent(u).replace(/%([0-9A-F]{2})/g, function (f, p) {
      return String.fromCharCode(parseInt("0x".concat(p)));
    });
    return "data:image/svg+xml;base64,".concat(btoa(c));
  }
  return u;
}
var kr = (function () {
  function e(t, n) {
    Cl(this, e),
      kt(this, "spriteCollection", void 0),
      kt(this, "defaultOptions", void 0),
      (this.spriteCollection = t),
      (this.defaultOptions = n);
  }
  return (
    Rl(e, [
      {
        key: "create",
        value: function (n, r) {
          var i = this,
            o = {
              meta: {},
              schema: {},
              create: function (a) {
                var s = a.prng,
                  u = a.options,
                  c = xo.parse(i.spriteCollection(new kp(s.seed), u)),
                  f = [],
                  p = [];
                return (
                  c.children.forEach(function (v) {
                    i.isBody(v) ? p.push(v) : f.push(v);
                  }),
                  {
                    attributes: c.attributes,
                    head: f
                      .map(function (v) {
                        return xo.stringify(v);
                      })
                      .join(""),
                    body: p
                      .map(function (v) {
                        return xo.stringify(v);
                      })
                      .join(""),
                  }
                );
              },
            };
          return G1(o, pr(pr(pr({}, this.defaultOptions), r), {}, { seed: n }));
        },
      },
      {
        key: "isBody",
        value: function (n) {
          return (
            n.type === "element" &&
            ["title", "desc", "defs", "metadata"].indexOf(n.name) === -1
          );
        },
      },
    ]),
    e
  );
})();
kt(kr, "random", kp);
kt(kr, "color", Cp);
kt(kr, "parser", xo);
var Nf = {
    title: "Options",
    $schema: "http://json-schema.org/draft-07/schema#",
    properties: {
      colors: {
        title: "Colors",
        type: "array",
        items: {
          type: "string",
          enum: [
            "amber",
            "blue",
            "blueGrey",
            "brown",
            "cyan",
            "deepOrange",
            "deepPurple",
            "green",
            "grey",
            "indigo",
            "lightBlue",
            "lightGreen",
            "lime",
            "orange",
            "pink",
            "purple",
            "red",
            "teal",
            "yellow",
          ],
        },
      },
      colorLevel: {
        title: "Color Level",
        default: 600,
        type: "integer",
        enum: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    additionalProperties: !1,
  },
  Au = {
    meta: {
      title: "Identicon",
      creator: "Florian Körner",
      source: "https://github.com/dicebear/dicebear",
      license: {
        name: "CC0 1.0",
        url: "https://creativecommons.org/publicdomain/zero/1.0/",
      },
    },
    schema: Nf,
    create: function (t) {
      var n = t.prng,
        r = t.options,
        i = $p.schema.defaults(Nf),
        o = [];
      Object.keys(kr.color.collection).forEach(function (s) {
        if (
          r.colors === void 0 ||
          r.colors.length === 0 ||
          r.colors.indexOf(s) !== -1
        ) {
          var u = kr.color.collection[s];
          o.push(u[r.colorLevel || i.colorLevel]);
        }
      });
      var l = n.pick(o),
        a = [
          n.pick([
            '<path d="M0 4h1v1H0V4zm4 0h1v1H4V4z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 4h2v1H0V4zm3 0h2v1H3V4z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 4h5v1H0V4z" fill="'.concat(l, '"/>'),
            '<path d="M2 4h1v1H2V4z" fill="'.concat(l, '"/>'),
            '<path d="M1 4h3v1H1V4z" fill="'.concat(l, '"/>'),
            '<path d="M0 4h1v1H0V4zm2 0h1v1H2V4zm2 0h1v1H4V4z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
          ]),
          n.pick([
            '<path d="M0 3h1v1H0V3zm4 0h1v1H4V3z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 3h2v1H0V3zm3 0h2v1H3V3z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 3h5v1H0V3z" fill="'.concat(l, '"/>'),
            '<path d="M2 3h1v1H2V3z" fill="'.concat(l, '"/>'),
            '<path d="M1 3h3v1H1V3z" fill="'.concat(l, '"/>'),
            '<path d="M0 3h1v1H0V3zm2 0h1v1H2V3zm2 0h1v1H4V3z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
          ]),
          n.pick([
            '<path d="M0 2h1v1H0V2zm4 0h1v1H4V2z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 2h2v1H0V2zm3 0h2v1H3V2z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 2h5v1H0V2z" fill="'.concat(l, '"/>'),
            '<path d="M2 2h1v1H2V2z" fill="'.concat(l, '"/>'),
            '<path d="M1 2h3v1H1V2z" fill="'.concat(l, '"/>'),
            '<path d="M0 2h1v1H0V2zm2 0h1v1H2V2zm2 0h1v1H4V2z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
          ]),
          n.pick([
            '<path d="M0 1h1v1H0V1zm4 0h1v1H4V1z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 1h2v1H0V1zm3 0h2v1H3V1z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 1h5v1H0V1z" fill="'.concat(l, '"/>'),
            '<path d="M2 1h1v1H2V1z" fill="'.concat(l, '"/>'),
            '<path d="M1 1h3v1H1V1z" fill="'.concat(l, '"/>'),
            '<path d="M0 1h1v1H0V1zm2 0h1v1H2V1zm2 0h1v1H4V1z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
          ]),
          n.pick([
            '<path d="M0 0h1v1H0V0zm4 0h1v1H4V0z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 0h2v1H0V0zm3 0h2v1H3V0z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
            '<path d="M0 0h5v1H0V0z" fill="'.concat(l, '"/>'),
            '<path d="M2 0h1v1H2V0z" fill="'.concat(l, '"/>'),
            '<path d="M1 0h3v1H1V0z" fill="'.concat(l, '"/>'),
            '<path d="M0 0h1v1H0V0zm2 0h1v1H2V0zm2 0h1v1H4V0z" fill-rule="evenodd" fill="'.concat(
              l,
              '"/>'
            ),
          ]),
        ].join("");
      return {
        attributes: { viewBox: "0 0 5 5", "shape-rendering": "crispEdges" },
        body: a,
      };
    },
  };
/*!
 * DiceBear Identicon (@dicebear/avatars-identicon-sprites)
 *
 * Code licensed under MIT (https://github.com/dicebear/dicebear/blob/v4/packages/avatars-identicon-sprites/LICENSE)
 * Copyright (c) 2021 Florian Körner
 */ var J1 = Au.create,
  Z1 = Au.meta,
  ew = Au.schema,
  tw = $p.style.createLegacyWrapper({ create: J1, meta: Z1, schema: ew });
const nw = ({ id: e }) => {
    const { setSelectedContact: t } = Nr(),
      n = new kr(tw, { radius: 50 }).create(e);
    return Q.jsxs("div", {
      className:
        "rounded-md border-zinc-800 border-2 py-3 text-center flex items-center justify-evenly",
      onClick: () => {
        t(e);
      },
      children: [
        Q.jsx("img", {
          src: `data:image/svg+xml,${encodeURIComponent(n)}`,
          alt: "Avatar",
          className: "w-12 items-center border-zinc-900 rounded-e-3xl",
        }),
        Q.jsx("p", { className: "items-center font-bold", children: e }),
      ],
    });
  },
  rw = () => {
    const { users: e } = pp();
    return (
      console.log(e),
      Q.jsx("div", {
        className: "w-4/12 bg-yellow-500 h-lvh",
        children: (e || []).map((t) =>
          Q.jsx(nw, { id: t }, Math.random() * 100)
        ),
      })
    );
  },
  Ft = Object.create(null);
Ft.open = "0";
Ft.close = "1";
Ft.ping = "2";
Ft.pong = "3";
Ft.message = "4";
Ft.upgrade = "5";
Ft.noop = "6";
const ko = Object.create(null);
Object.keys(Ft).forEach((e) => {
  ko[Ft[e]] = e;
});
const ms = { type: "error", data: "parser error" },
  Hp =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Wp = typeof ArrayBuffer == "function",
  Qp = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Lu = ({ type: e, data: t }, n, r) =>
    Hp && t instanceof Blob
      ? n
        ? r(t)
        : Af(t, r)
      : Wp && (t instanceof ArrayBuffer || Qp(t))
      ? n
        ? r(t)
        : Af(new Blob([t]), r)
      : r(Ft[e] + (t || "")),
  Af = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function Lf(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let fa;
function iw(e, t) {
  if (Hp && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Lf).then(t);
  if (Wp && (e.data instanceof ArrayBuffer || Qp(e.data))) return t(Lf(e.data));
  Lu(e, !1, (n) => {
    fa || (fa = new TextEncoder()), t(fa.encode(n));
  });
}
const Ff = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  ei = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ff.length; e++) ei[Ff.charCodeAt(e)] = e;
const ow = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      l,
      a,
      s;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const u = new ArrayBuffer(t),
      c = new Uint8Array(u);
    for (r = 0; r < n; r += 4)
      (o = ei[e.charCodeAt(r)]),
        (l = ei[e.charCodeAt(r + 1)]),
        (a = ei[e.charCodeAt(r + 2)]),
        (s = ei[e.charCodeAt(r + 3)]),
        (c[i++] = (o << 2) | (l >> 4)),
        (c[i++] = ((l & 15) << 4) | (a >> 2)),
        (c[i++] = ((a & 3) << 6) | (s & 63));
    return u;
  },
  lw = typeof ArrayBuffer == "function",
  Fu = (e, t) => {
    if (typeof e != "string") return { type: "message", data: Kp(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: aw(e.substring(1), t) }
      : ko[n]
      ? e.length > 1
        ? { type: ko[n], data: e.substring(1) }
        : { type: ko[n] }
      : ms;
  },
  aw = (e, t) => {
    if (lw) {
      const n = ow(e);
      return Kp(n, t);
    } else return { base64: !0, data: e };
  },
  Kp = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  qp = "",
  sw = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let i = 0;
    e.forEach((o, l) => {
      Lu(o, !1, (a) => {
        (r[l] = a), ++i === n && t(r.join(qp));
      });
    });
  },
  uw = (e, t) => {
    const n = e.split(qp),
      r = [];
    for (let i = 0; i < n.length; i++) {
      const o = Fu(n[i], t);
      if ((r.push(o), o.type === "error")) break;
    }
    return r;
  };
function cw() {
  return new TransformStream({
    transform(e, t) {
      iw(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const o = new DataView(i.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const o = new DataView(i.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n);
      });
    },
  });
}
let da;
function ao(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function so(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++)
    (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function fw(e, t) {
  da || (da = new TextDecoder());
  const n = [];
  let r = 0,
    i = -1,
    o = !1;
  return new TransformStream({
    transform(l, a) {
      for (n.push(l); ; ) {
        if (r === 0) {
          if (ao(n) < 1) break;
          const s = so(n, 1);
          (o = (s[0] & 128) === 128),
            (i = s[0] & 127),
            i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (ao(n) < 2) break;
          const s = so(n, 2);
          (i = new DataView(s.buffer, s.byteOffset, s.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (ao(n) < 8) break;
          const s = so(n, 8),
            u = new DataView(s.buffer, s.byteOffset, s.length),
            c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(ms);
            break;
          }
          (i = c * Math.pow(2, 32) + u.getUint32(4)), (r = 3);
        } else {
          if (ao(n) < i) break;
          const s = so(n, i);
          a.enqueue(Fu(o ? s : da.decode(s), t)), (r = 0);
        }
        if (i === 0 || i > e) {
          a.enqueue(ms);
          break;
        }
      }
    },
  });
}
const Yp = 4;
function Pe(e) {
  if (e) return dw(e);
}
function dw(e) {
  for (var t in Pe.prototype) e[t] = Pe.prototype[t];
  return e;
}
Pe.prototype.on = Pe.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
Pe.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
Pe.prototype.off =
  Pe.prototype.removeListener =
  Pe.prototype.removeAllListeners =
  Pe.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
Pe.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
  }
  return this;
};
Pe.prototype.emitReserved = Pe.prototype.emit;
Pe.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
Pe.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Pl =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  ut =
    typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")(),
  hw = "arraybuffer";
function Xp(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const pw = ut.setTimeout,
  mw = ut.clearTimeout;
function Nl(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = pw.bind(ut)), (e.clearTimeoutFn = mw.bind(ut)))
    : ((e.setTimeoutFn = ut.setTimeout.bind(ut)),
      (e.clearTimeoutFn = ut.clearTimeout.bind(ut)));
}
const vw = 1.33;
function gw(e) {
  return typeof e == "string"
    ? yw(e)
    : Math.ceil((e.byteLength || e.size) * vw);
}
function yw(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
function Gp() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function ww(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function Ew(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class Sw extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class Ou extends Pe {
  constructor(t) {
    super(),
      (this.writable = !1),
      Nl(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket),
      (this.supportsBinary = !t.forceBase64);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new Sw(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = Fu(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = ww(t);
    return n.length ? "?" + n : "";
  }
}
class _w extends Ou {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    uw(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      sw(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = Gp()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
}
let Jp = !1;
try {
  Jp = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const xw = Jp;
function kw() {}
class Cw extends _w {
  constructor(t) {
    if ((super(t), typeof location < "u")) {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          r !== t.port);
    }
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (i, o) => {
        this.onError("xhr post error", i, o);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
let mr = class Co extends Pe {
  constructor(t, n, r) {
    super(),
      (this.createRequest = t),
      Nl(this, r),
      (this._opts = r),
      (this._method = r.method || "GET"),
      (this._uri = n),
      (this._data = r.data !== void 0 ? r.data : null),
      this._create();
  }
  _create() {
    var t;
    const n = Xp(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    n.xdomain = !!this._opts.xd;
    const r = (this._xhr = this.createRequest(n));
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(i) &&
              r.setRequestHeader(i, this._opts.extraHeaders[i]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
        (r.onreadystatechange = () => {
          var i;
          r.readyState === 3 &&
            ((i = this._opts.cookieJar) === null ||
              i === void 0 ||
              i.parseCookies(r.getResponseHeader("set-cookie"))),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this._data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this._onError(i);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = Co.requestsCount++), (Co.requests[this._index] = this));
  }
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = kw), t))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < "u" && delete Co.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
};
mr.requestsCount = 0;
mr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Of);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ut ? "pagehide" : "unload";
    addEventListener(e, Of, !1);
  }
}
function Of() {
  for (let e in mr.requests)
    mr.requests.hasOwnProperty(e) && mr.requests[e].abort();
}
const Rw = (function () {
  const e = Zp({ xdomain: !1 });
  return e && e.responseType !== null;
})();
class Tw extends Cw {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = Rw && !n;
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd }, this.opts), new mr(Zp, this.uri(), t)
    );
  }
}
function Zp(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || xw)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new ut[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const em =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class Pw extends Ou {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(),
      n = this.opts.protocols,
      r = em
        ? {}
        : Xp(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      Lu(r, this.supportsBinary, (o) => {
        try {
          this.doWrite(r, o);
        } catch {}
        i &&
          Pl(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = Gp()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
}
const ha = ut.WebSocket || ut.MozWebSocket;
class Nw extends Pw {
  createSocket(t, n, r) {
    return em ? new ha(t, n, r) : n ? new ha(t, n) : new ha(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class Aw extends Ou {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      );
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((t) => {
        this.onError("webtransport error", t);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((t) => {
          const n = fw(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            i = cw();
          i.readable.pipeTo(t.writable),
            (this._writer = i.writable.getWriter());
          const o = () => {
            r.read()
              .then(({ done: a, value: s }) => {
                a || (this.onPacket(s), o());
              })
              .catch((a) => {});
          };
          o();
          const l = { type: "open" };
          this.query.sid && (l.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(l).then(() => this.onOpen());
        });
      });
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      this._writer.write(r).then(() => {
        i &&
          Pl(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const Lw = { websocket: Nw, webtransport: Aw, polling: Tw },
  Fw =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Ow = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function vs(e) {
  if (e.length > 8e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let i = Fw.exec(e || ""),
    o = {},
    l = 14;
  for (; l--; ) o[Ow[l]] = i[l] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":")),
      (o.authority = o.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (o.ipv6uri = !0)),
    (o.pathNames = Dw(o, o.path)),
    (o.queryKey = Mw(o, o.query)),
    o
  );
}
function Dw(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function Mw(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o);
    }),
    n
  );
}
const gs =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  Ro = [];
gs &&
  addEventListener(
    "offline",
    () => {
      Ro.forEach((e) => e());
    },
    !1
  );
class mn extends Pe {
  constructor(t, n) {
    if (
      (super(),
      (this.binaryType = hw),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      t && typeof t == "object" && ((n = t), (t = null)),
      t)
    ) {
      const r = vs(t);
      (n.hostname = r.host),
        (n.secure = r.protocol === "https" || r.protocol === "wss"),
        (n.port = r.port),
        r.query && (n.query = r.query);
    } else n.host && (n.hostname = vs(n.host).host);
    Nl(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      n.transports.forEach((r) => {
        const i = r.prototype.name;
        this.transports.push(i), (this._transportsByName[i] = r);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = Ew(this.opts.query)),
      gs &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          Ro.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = Yp), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new this._transportsByName[t](r);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t =
      this.opts.rememberUpgrade &&
      mn.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(t);
    n.open(), this.setTransport(n);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (n) => this._onClose("transport close", n));
  }
  onOpen() {
    (this.readyState = "open"),
      (mn.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this._onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this._pingInterval = t.pingInterval),
      (this._pingTimeout = t.pingTimeout),
      (this._maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + t),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, t)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this._getWritablePackets();
      this.transport.send(t),
        (this._prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if ((i && (n += gw(i)), r > 0 && n > this._maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return (
      t &&
        ((this._pingTimeoutTime = 0),
        Pl(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      t
    );
  }
  write(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  _sendPacket(t, n, r, i) {
    if (
      (typeof n == "function" && ((i = n), (n = void 0)),
      typeof r == "function" && ((i = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const o = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", o),
      this.writeBuffer.push(o),
      i && this.once("flush", i),
      this.flush();
  }
  close() {
    const t = () => {
        this._onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  _onError(t) {
    if (
      ((mn.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  _onClose(t, n) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        gs &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            ),
          this._offlineEventListener))
      ) {
        const r = Ro.indexOf(this._offlineEventListener);
        r !== -1 && Ro.splice(r, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", t, n),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
mn.protocol = Yp;
class zw extends mn {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  _probe(t) {
    let n = this.createTransport(t),
      r = !1;
    mn.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (f) => {
          if (!r)
            if (f.type === "pong" && f.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (mn.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (c(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const p = new Error("probe error");
              (p.transport = n.name), this.emitReserved("upgradeError", p);
            }
        }));
    };
    function o() {
      r || ((r = !0), c(), n.close(), (n = null));
    }
    const l = (f) => {
      const p = new Error("probe error: " + f);
      (p.transport = n.name), o(), this.emitReserved("upgradeError", p);
    };
    function a() {
      l("transport closed");
    }
    function s() {
      l("socket closed");
    }
    function u(f) {
      n && f.name !== n.name && o();
    }
    const c = () => {
      n.removeListener("open", i),
        n.removeListener("error", l),
        n.removeListener("close", a),
        this.off("close", s),
        this.off("upgrading", u);
    };
    n.once("open", i),
      n.once("error", l),
      n.once("close", a),
      this.once("close", s),
      this.once("upgrading", u),
      this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onHandshake(t) {
    (this._upgrades = this._filterUpgrades(t.upgrades)), super.onHandshake(t);
  }
  _filterUpgrades(t) {
    const n = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
}
let Bw = class extends zw {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || (r.transports && typeof r.transports[0] == "string")) &&
      (r.transports = (r.transports || ["polling", "websocket", "webtransport"])
        .map((i) => Lw[i])
        .filter((i) => !!i)),
      super(t, r);
  }
};
function jw(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = vs(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + o + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const Iw = typeof ArrayBuffer == "function",
  Uw = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  tm = Object.prototype.toString,
  bw =
    typeof Blob == "function" ||
    (typeof Blob < "u" && tm.call(Blob) === "[object BlobConstructor]"),
  Vw =
    typeof File == "function" ||
    (typeof File < "u" && tm.call(File) === "[object FileConstructor]");
function Du(e) {
  return (
    (Iw && (e instanceof ArrayBuffer || Uw(e))) ||
    (bw && e instanceof Blob) ||
    (Vw && e instanceof File)
  );
}
function To(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (To(e[n])) return !0;
    return !1;
  }
  if (Du(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return To(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && To(e[n])) return !0;
  return !1;
}
function $w(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = ys(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function ys(e, t) {
  if (!e) return e;
  if (Du(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = ys(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = ys(e[r], t));
    return n;
  }
  return e;
}
function Hw(e, t) {
  return (e.data = ws(e.data, t)), delete e.attachments, e;
}
function ws(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = ws(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = ws(e[n], t));
  return e;
}
const Ww = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  Qw = 5;
var X;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(X || (X = {}));
class Kw {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === X.EVENT || t.type === X.ACK) && To(t)
      ? this.encodeAsBinary({
          type: t.type === X.EVENT ? X.BINARY_EVENT : X.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === X.BINARY_EVENT || t.type === X.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = $w(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers;
    return i.unshift(r), i;
  }
}
function Df(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Mu extends Pe {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === X.BINARY_EVENT;
      r || n.type === X.BINARY_ACK
        ? ((n.type = r ? X.EVENT : X.ACK),
          (this.reconstructor = new qw(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (Du(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (X[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === X.BINARY_EVENT || r.type === X.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const l = t.substring(o, n);
      if (l != Number(l) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(l);
    }
    if (t.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(o, n);
    } else r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const l = t.charAt(n);
        if (l == null || Number(l) != l) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if (Mu.isPayloadValid(r.type, o)) r.data = o;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case X.CONNECT:
        return Df(n);
      case X.DISCONNECT:
        return n === void 0;
      case X.CONNECT_ERROR:
        return typeof n == "string" || Df(n);
      case X.EVENT:
      case X.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && Ww.indexOf(n[0]) === -1))
        );
      case X.ACK:
      case X.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class qw {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = Hw(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const Yw = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Mu,
      Encoder: Kw,
      get PacketType() {
        return X;
      },
      protocol: Qw,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function wt(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const Xw = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class nm extends Pe {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      wt(t, "open", this.onopen.bind(this)),
      wt(t, "packet", this.onpacket.bind(this)),
      wt(t, "error", this.onerror.bind(this)),
      wt(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    var r, i, o;
    if (Xw.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const l = { type: X.EVENT, data: n };
    if (
      ((l.options = {}),
      (l.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const c = this.ids++,
        f = n.pop();
      this._registerAckCallback(c, f), (l.id = c);
    }
    const a =
        (i =
          (r = this.io.engine) === null || r === void 0
            ? void 0
            : r.transport) === null || i === void 0
          ? void 0
          : i.writable,
      s =
        this.connected &&
        !(
          !((o = this.io.engine) === null || o === void 0) &&
          o._hasPingExpired()
        );
    return (
      (this.flags.volatile && !a) ||
        (s
          ? (this.notifyOutgoingListeners(l), this.packet(l))
          : this.sendBuffer.push(l)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const i =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let a = 0; a < this.sendBuffer.length; a++)
          this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
        n.call(this, new Error("operation has timed out"));
      }, i),
      l = (...a) => {
        this.io.clearTimeoutFn(o), n.apply(this, a);
      };
    (l.withError = !0), (this.acks[t] = l);
  }
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const o = (l, a) => (l ? i(l) : r(a));
      (o.withError = !0), n.push(o), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((i, ...o) =>
      r !== this._queue[0]
        ? void 0
        : (i !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(i))
            : (this._queue.shift(), n && n(null, ...o)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: X.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t],
          r.withError &&
            r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case X.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case X.EVENT:
        case X.BINARY_EVENT:
          this.onevent(t);
          break;
        case X.ACK:
        case X.BINARY_ACK:
          this.onack(t);
          break;
        case X.DISCONNECT:
          this.ondisconnect();
          break;
        case X.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), n.packet({ type: X.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" &&
      (delete this.acks[t.id],
      n.withError && t.data.unshift(null),
      n.apply(this, t.data));
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: X.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function Ar(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Ar.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
Ar.prototype.reset = function () {
  this.attempts = 0;
};
Ar.prototype.setMin = function (e) {
  this.ms = e;
};
Ar.prototype.setMax = function (e) {
  this.max = e;
};
Ar.prototype.setJitter = function (e) {
  this.jitter = e;
};
class Es extends Pe {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      Nl(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new Ar({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const i = n.parser || Yw;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), t || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new Bw(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const i = wt(n, "open", function () {
        r.onopen(), t && t();
      }),
      o = (a) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", a),
          t ? t(a) : this.maybeReconnectOnOpen();
      },
      l = wt(n, "error", o);
    if (this._timeout !== !1) {
      const a = this._timeout,
        s = this.setTimeoutFn(() => {
          i(), o(new Error("timeout")), n.close();
        }, a);
      this.opts.autoUnref && s.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(s);
        });
    }
    return this.subs.push(i), this.subs.push(l), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      wt(t, "ping", this.onping.bind(this)),
      wt(t, "data", this.ondata.bind(this)),
      wt(t, "error", this.onerror.bind(this)),
      wt(t, "close", this.onclose.bind(this)),
      wt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    Pl(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new nm(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    var r;
    this.cleanup(),
      (r = this.engine) === null || r === void 0 || r.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const qr = {};
function Po(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = jw(e, t.path || "/socket.io"),
    r = n.source,
    i = n.id,
    o = n.path,
    l = qr[i] && o in qr[i].nsps,
    a = t.forceNew || t["force new connection"] || t.multiplex === !1 || l;
  let s;
  return (
    a ? (s = new Es(r, t)) : (qr[i] || (qr[i] = new Es(r, t)), (s = qr[i])),
    n.query && !t.query && (t.query = n.queryKey),
    s.socket(n.path, t)
  );
}
Object.assign(Po, { Manager: Es, Socket: nm, io: Po, connect: Po });
const Gw = () => {
    const [e, t] = R.useState(null);
    return (
      R.useEffect(() => {
        const n = Po("https://chat-gat.vercel.app/");
        return (
          t(n),
          () => {
            n.disconnect();
          }
        );
      }, []),
      e
    );
  },
  Jw = () => {
    const [e, t] = R.useState(""),
      { messages: n } = pp(),
      { clientInfo: r, selectedContact: i } = Nr();
    return i
      ? Q.jsxs("div", {
          children: [
            Q.jsxs("h2", {
              className: "font-bold text-rose-100 text-2xl text-center",
              children: [" ", i, " "],
            }),
            n.map((o) =>
              Q.jsxs(
                "div",
                {
                  className: ` m-2 p-3 ${
                    o.sender === (r == null ? void 0 : r.socketId)
                      ? "bg-white"
                      : "bg-green-300"
                  } `,
                  children: [
                    Q.jsxs("h4", {
                      className: "font-bold",
                      children: [" ", o.sender, " "],
                    }),
                    Q.jsx("p", { children: o.message }),
                  ],
                },
                o.message
              )
            ),
            Q.jsxs("form", {
              onSubmit: (o) => {
                var l;
                o.preventDefault(),
                  console.log("submitted", r == null ? void 0 : r.socket),
                  (l = r == null ? void 0 : r.socket) == null ||
                    l.emit("message-private", { message: e, userId: i }),
                  t("");
              },
              className: "sticky bottom-0",
              children: [
                " ",
                Q.jsx("input", {
                  type: "text",
                  placeholder: "Enter message here",
                  value: e,
                  className:
                    "w-64 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-gray-600",
                  onChange: (o) => t(o.target.value),
                }),
                Q.jsx("button", {
                  className:
                    "bg-gray-900 text-white px-6 py-2 rounded-xl hover:border-slate-800 hover:bg-gray-700",
                  type: "submit",
                  children: "send",
                }),
              ],
            }),
          ],
        })
      : Q.jsx(Q.Fragment, { children: " No User Selected " });
  },
  Mf = () => {
    const { setClientInfo: e } = Nr(),
      t = Gw(),
      n = Eu(),
      [r, i] = R.useState(!0);
    return (
      R.useEffect(() => {
        if (!t) {
          console.log("Socket not initialized.");
          return;
        }
        const o = () => {
            console.log("Socket connected with ID:", t.id),
              e((a) => ({ ...(a || { name: "" }), socketId: t.id, socket: t })),
              i(!1);
          },
          l = () => {
            console.log("Socket disconnected."), n("/login");
          };
        return (
          t.on("get-my-socket-id", o),
          t.on("disconnect", l),
          () => {
            t.off("connect", o), t.off("disconnect", l);
          }
        );
      }, [n, e, t]),
      r
        ? Q.jsx(Q.Fragment, { children: "Loading..." })
        : Q.jsxs("div", {
            className: "w-lvw h-lvh bg-gray-800",
            children: [
              Q.jsxs("p", {
                className: "absolute right-3 text-zinc-200",
                children: ["Socket ID: ", t == null ? void 0 : t.id],
              }),
              Q.jsxs("div", {
                className: "flex w-lvw",
                children: [Q.jsx(rw, {}), Q.jsx(Jw, {})],
              }),
            ],
          })
    );
  },
  Zw = () => Q.jsx("div", {}),
  pa = ({ children: e }) => {
    const t = Nr(),
      n = Eu();
    return (
      R.useEffect(() => {
        t.clientInfo || n("/login");
      }, [t.clientInfo, n]),
      Q.jsx(Q.Fragment, { children: e })
    );
  },
  eE = ay([
    { path: "/", element: Q.jsx(pa, { children: Q.jsx(Mf, {}) }) },
    { path: "/login", element: Q.jsx(Ey, {}) },
    { path: "/signup", element: Q.jsx(Sy, {}) },
    { path: "/chat", element: Q.jsx(pa, { children: Q.jsx(Mf, {}) }) },
    { path: "/settings", element: Q.jsx(pa, { children: Q.jsx(Zw, {}) }) },
  ]);
Yh(document.getElementById("root")).render(
  Q.jsx(R.StrictMode, {
    children: Q.jsx(wy, { children: Q.jsx(vy, { router: eE }) }),
  })
);
