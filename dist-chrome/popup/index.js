"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = Symbol.for("react.element");
      var n = Symbol.for("react.portal");
      var p2 = Symbol.for("react.fragment");
      var q2 = Symbol.for("react.strict_mode");
      var r2 = Symbol.for("react.profiler");
      var t = Symbol.for("react.provider");
      var u2 = Symbol.for("react.context");
      var v2 = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x2 = Symbol.for("react.memo");
      var y2 = Symbol.for("react.lazy");
      var z2 = Symbol.iterator;
      function A2(a2) {
        if (null === a2 || "object" !== typeof a2)
          return null;
        a2 = z2 && a2[z2] || a2["@@iterator"];
        return "function" === typeof a2 ? a2 : null;
      }
      var B2 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C2 = Object.assign;
      var D2 = {};
      function E2(a2, b, e) {
        this.props = a2;
        this.context = b;
        this.refs = D2;
        this.updater = e || B2;
      }
      E2.prototype.isReactComponent = {};
      E2.prototype.setState = function(a2, b) {
        if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a2, b, "setState");
      };
      E2.prototype.forceUpdate = function(a2) {
        this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E2.prototype;
      function G2(a2, b, e) {
        this.props = a2;
        this.context = b;
        this.refs = D2;
        this.updater = e || B2;
      }
      var H2 = G2.prototype = new F2();
      H2.constructor = G2;
      C2(H2, E2.prototype);
      H2.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M2(a2, b, e) {
        var d, c2 = {}, k2 = null, h = null;
        if (null != b)
          for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
            J2.call(b, d) && !L2.hasOwnProperty(d) && (c2[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g)
          c2.children = e;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++)
            f2[m] = arguments[m + 2];
          c2.children = f2;
        }
        if (a2 && a2.defaultProps)
          for (d in g = a2.defaultProps, g)
            void 0 === c2[d] && (c2[d] = g[d]);
        return { $$typeof: l2, type: a2, key: k2, ref: h, props: c2, _owner: K2.current };
      }
      function N2(a2, b) {
        return { $$typeof: l2, type: a2.type, key: b, ref: a2.ref, props: a2.props, _owner: a2._owner };
      }
      function O2(a2) {
        return "object" === typeof a2 && null !== a2 && a2.$$typeof === l2;
      }
      function escape(a2) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a2.replace(/[=:]/g, function(a3) {
          return b[a3];
        });
      }
      var P2 = /\/+/g;
      function Q2(a2, b) {
        return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b.toString(36);
      }
      function R2(a2, b, e, d, c2) {
        var k2 = typeof a2;
        if ("undefined" === k2 || "boolean" === k2)
          a2 = null;
        var h = false;
        if (null === a2)
          h = true;
        else
          switch (k2) {
            case "string":
            case "number":
              h = true;
              break;
            case "object":
              switch (a2.$$typeof) {
                case l2:
                case n:
                  h = true;
              }
          }
        if (h)
          return h = a2, c2 = c2(h), a2 = "" === d ? "." + Q2(h, 0) : d, I2(c2) ? (e = "", null != a2 && (e = a2.replace(P2, "$&/") + "/"), R2(c2, b, e, "", function(a3) {
            return a3;
          })) : null != c2 && (O2(c2) && (c2 = N2(c2, e + (!c2.key || h && h.key === c2.key ? "" : ("" + c2.key).replace(P2, "$&/") + "/") + a2)), b.push(c2)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a2))
          for (var g = 0; g < a2.length; g++) {
            k2 = a2[g];
            var f2 = d + Q2(k2, g);
            h += R2(k2, b, e, f2, c2);
          }
        else if (f2 = A2(a2), "function" === typeof f2)
          for (a2 = f2.call(a2), g = 0; !(k2 = a2.next()).done; )
            k2 = k2.value, f2 = d + Q2(k2, g++), h += R2(k2, b, e, f2, c2);
        else if ("object" === k2)
          throw b = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a2, b, e) {
        if (null == a2)
          return a2;
        var d = [], c2 = 0;
        R2(a2, d, "", "", function(a3) {
          return b.call(e, a3, c2++);
        });
        return d;
      }
      function T2(a2) {
        if (-1 === a2._status) {
          var b = a2._result;
          b = b();
          b.then(function(b2) {
            if (0 === a2._status || -1 === a2._status)
              a2._status = 1, a2._result = b2;
          }, function(b2) {
            if (0 === a2._status || -1 === a2._status)
              a2._status = 2, a2._result = b2;
          });
          -1 === a2._status && (a2._status = 0, a2._result = b);
        }
        if (1 === a2._status)
          return a2._result.default;
        throw a2._result;
      }
      var U2 = { current: null };
      var V2 = { transition: null };
      var W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
      exports.Children = { map: S, forEach: function(a2, b, e) {
        S(a2, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a2) {
        var b = 0;
        S(a2, function() {
          b++;
        });
        return b;
      }, toArray: function(a2) {
        return S(a2, function(a3) {
          return a3;
        }) || [];
      }, only: function(a2) {
        if (!O2(a2))
          throw Error("React.Children.only expected to receive a single React element child.");
        return a2;
      } };
      exports.Component = E2;
      exports.Fragment = p2;
      exports.Profiler = r2;
      exports.PureComponent = G2;
      exports.StrictMode = q2;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.cloneElement = function(a2, b, e) {
        if (null === a2 || void 0 === a2)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
        var d = C2({}, a2.props), c2 = a2.key, k2 = a2.ref, h = a2._owner;
        if (null != b) {
          void 0 !== b.ref && (k2 = b.ref, h = K2.current);
          void 0 !== b.key && (c2 = "" + b.key);
          if (a2.type && a2.type.defaultProps)
            var g = a2.type.defaultProps;
          for (f2 in b)
            J2.call(b, f2) && !L2.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2)
          d.children = e;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++)
            g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a2.type, key: c2, ref: k2, props: d, _owner: h };
      };
      exports.createContext = function(a2) {
        a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a2.Provider = { $$typeof: t, _context: a2 };
        return a2.Consumer = a2;
      };
      exports.createElement = M2;
      exports.createFactory = function(a2) {
        var b = M2.bind(null, a2);
        b.type = a2;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a2) {
        return { $$typeof: v2, render: a2 };
      };
      exports.isValidElement = O2;
      exports.lazy = function(a2) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T2 };
      };
      exports.memo = function(a2, b) {
        return { $$typeof: x2, type: a2, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a2) {
        var b = V2.transition;
        V2.transition = {};
        try {
          a2();
        } finally {
          V2.transition = b;
        }
      };
      exports.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
      };
      exports.useCallback = function(a2, b) {
        return U2.current.useCallback(a2, b);
      };
      exports.useContext = function(a2) {
        return U2.current.useContext(a2);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a2) {
        return U2.current.useDeferredValue(a2);
      };
      exports.useEffect = function(a2, b) {
        return U2.current.useEffect(a2, b);
      };
      exports.useId = function() {
        return U2.current.useId();
      };
      exports.useImperativeHandle = function(a2, b, e) {
        return U2.current.useImperativeHandle(a2, b, e);
      };
      exports.useInsertionEffect = function(a2, b) {
        return U2.current.useInsertionEffect(a2, b);
      };
      exports.useLayoutEffect = function(a2, b) {
        return U2.current.useLayoutEffect(a2, b);
      };
      exports.useMemo = function(a2, b) {
        return U2.current.useMemo(a2, b);
      };
      exports.useReducer = function(a2, b, e) {
        return U2.current.useReducer(a2, b, e);
      };
      exports.useRef = function(a2) {
        return U2.current.useRef(a2);
      };
      exports.useState = function(a2) {
        return U2.current.useState(a2);
      };
      exports.useSyncExternalStore = function(a2, b, e) {
        return U2.current.useSyncExternalStore(a2, b, e);
      };
      exports.useTransition = function() {
        return U2.current.useTransition();
      };
      exports.version = "18.2.0";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a2, b) {
        var c2 = a2.length;
        a2.push(b);
        a:
          for (; 0 < c2; ) {
            var d = c2 - 1 >>> 1, e = a2[d];
            if (0 < g(e, b))
              a2[d] = b, a2[c2] = e, c2 = d;
            else
              break a;
          }
      }
      function h(a2) {
        return 0 === a2.length ? null : a2[0];
      }
      function k2(a2) {
        if (0 === a2.length)
          return null;
        var b = a2[0], c2 = a2.pop();
        if (c2 !== b) {
          a2[0] = c2;
          a:
            for (var d = 0, e = a2.length, w = e >>> 1; d < w; ) {
              var m = 2 * (d + 1) - 1, C2 = a2[m], n = m + 1, x2 = a2[n];
              if (0 > g(C2, c2))
                n < e && 0 > g(x2, C2) ? (a2[d] = x2, a2[n] = c2, d = n) : (a2[d] = C2, a2[m] = c2, d = m);
              else if (n < e && 0 > g(x2, c2))
                a2[d] = x2, a2[n] = c2, d = n;
              else
                break a;
            }
        }
        return b;
      }
      function g(a2, b) {
        var c2 = a2.sortIndex - b.sortIndex;
        return 0 !== c2 ? c2 : a2.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p2 = Date, q2 = p2.now();
        exports.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var l2;
      var p2;
      var q2;
      var r2 = [];
      var t = [];
      var u2 = 1;
      var v2 = null;
      var y2 = 3;
      var z2 = false;
      var A2 = false;
      var B2 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E2 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a2) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback)
            k2(t);
          else if (b.startTime <= a2)
            k2(t), b.sortIndex = b.expirationTime, f2(r2, b);
          else
            break;
          b = h(t);
        }
      }
      function H2(a2) {
        B2 = false;
        G2(a2);
        if (!A2)
          if (null !== h(r2))
            A2 = true, I2(J2);
          else {
            var b = h(t);
            null !== b && K2(H2, b.startTime - a2);
          }
      }
      function J2(a2, b) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c2 = y2;
        try {
          G2(b);
          for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a2 && !M2()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e = d(v2.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
              G2(b);
            } else
              k2(r2);
            v2 = h(r2);
          }
          if (null !== v2)
            var w = true;
          else {
            var m = h(t);
            null !== m && K2(H2, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v2 = null, y2 = c2, z2 = false;
        }
      }
      var N2 = false;
      var O2 = null;
      var L2 = -1;
      var P2 = 5;
      var Q2 = -1;
      function M2() {
        return exports.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a2 = exports.unstable_now();
          Q2 = a2;
          var b = true;
          try {
            b = O2(true, a2);
          } finally {
            b ? S() : (N2 = false, O2 = null);
          }
        } else
          N2 = false;
      }
      var S;
      if ("function" === typeof F2)
        S = function() {
          F2(R2);
        };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S = function() {
          U2.postMessage(null);
        };
      } else
        S = function() {
          D2(R2, 0);
        };
      var T2;
      var U2;
      function I2(a2) {
        O2 = a2;
        N2 || (N2 = true, S());
      }
      function K2(a2, b) {
        L2 = D2(function() {
          a2(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a2) {
        a2.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports.unstable_forceFrameRate = function(a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r2);
      };
      exports.unstable_next = function(a2) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y2;
        }
        var c2 = y2;
        y2 = b;
        try {
          return a2();
        } finally {
          y2 = c2;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a2, b) {
        switch (a2) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a2 = 3;
        }
        var c2 = y2;
        y2 = a2;
        try {
          return b();
        } finally {
          y2 = c2;
        }
      };
      exports.unstable_scheduleCallback = function(a2, b, c2) {
        var d = exports.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d + c2 : d) : c2 = d;
        switch (a2) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c2 + e;
        a2 = { id: u2++, callback: b, priorityLevel: a2, startTime: c2, expirationTime: e, sortIndex: -1 };
        c2 > d ? (a2.sortIndex = c2, f2(t, a2), null === h(r2) && a2 === h(t) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d))) : (a2.sortIndex = e, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
        return a2;
      };
      exports.unstable_shouldYield = M2;
      exports.unstable_wrapCallback = function(a2) {
        var b = y2;
        return function() {
          var c2 = y2;
          y2 = b;
          try {
            return a2.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p2(a2) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
          b += "&args[]=" + encodeURIComponent(arguments[c2]);
        return "Minified React error #" + a2 + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a2, b) {
        ha(a2, b);
        ha(a2 + "Capture", b);
      }
      function ha(a2, b) {
        ea[a2] = b;
        for (a2 = 0; a2 < b.length; a2++)
          da.add(b[a2]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a2) {
        if (ja.call(ma, a2))
          return true;
        if (ja.call(la, a2))
          return false;
        if (ka.test(a2))
          return ma[a2] = true;
        la[a2] = true;
        return false;
      }
      function pa(a2, b, c2, d) {
        if (null !== c2 && 0 === c2.type)
          return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d)
              return false;
            if (null !== c2)
              return !c2.acceptsBooleans;
            a2 = a2.toLowerCase().slice(0, 5);
            return "data-" !== a2 && "aria-" !== a2;
          default:
            return false;
        }
      }
      function qa(a2, b, c2, d) {
        if (null === b || "undefined" === typeof b || pa(a2, b, c2, d))
          return true;
        if (d)
          return false;
        if (null !== c2)
          switch (c2.type) {
            case 3:
              return !b;
            case 4:
              return false === b;
            case 5:
              return isNaN(b);
            case 6:
              return isNaN(b) || 1 > b;
          }
        return false;
      }
      function v2(a2, b, c2, d, e, f2, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c2;
        this.propertyName = a2;
        this.type = b;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z2 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
        z2[a2] = new v2(a2, 0, false, a2, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
        var b = a2[0];
        z2[b] = new v2(b, 1, false, a2[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
        z2[a2] = new v2(a2, 2, false, a2.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
        z2[a2] = new v2(a2, 2, false, a2, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
        z2[a2] = new v2(a2, 3, false, a2.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
        z2[a2] = new v2(a2, 3, true, a2, null, false, false);
      });
      ["capture", "download"].forEach(function(a2) {
        z2[a2] = new v2(a2, 4, false, a2, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a2) {
        z2[a2] = new v2(a2, 6, false, a2, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a2) {
        z2[a2] = new v2(a2, 5, false, a2.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a2) {
        return a2[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
        var b = a2.replace(
          ra,
          sa
        );
        z2[b] = new v2(b, 1, false, a2, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
        var b = a2.replace(ra, sa);
        z2[b] = new v2(b, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
        var b = a2.replace(ra, sa);
        z2[b] = new v2(b, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a2) {
        z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, false, false);
      });
      z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a2) {
        z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, true, true);
      });
      function ta(a2, b, c2, d) {
        var e = z2.hasOwnProperty(b) ? z2[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
          qa(b, c2, e, d) && (c2 = null), d || null === e ? oa(b) && (null === c2 ? a2.removeAttribute(b) : a2.setAttribute(b, "" + c2)) : e.mustUseProperty ? a2[e.propertyName] = null === c2 ? 3 === e.type ? false : "" : c2 : (b = e.attributeName, d = e.attributeNamespace, null === c2 ? a2.removeAttribute(b) : (e = e.type, c2 = 3 === e || 4 === e && true === c2 ? "" : "" + c2, d ? a2.setAttributeNS(d, b, c2) : a2.setAttribute(b, c2)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a2) {
        if (null === a2 || "object" !== typeof a2)
          return null;
        a2 = Ja && a2[Ja] || a2["@@iterator"];
        return "function" === typeof a2 ? a2 : null;
      }
      var A2 = Object.assign;
      var La;
      function Ma(a2) {
        if (void 0 === La)
          try {
            throw Error();
          } catch (c2) {
            var b = c2.stack.trim().match(/\n( *(at )?)/);
            La = b && b[1] || "";
          }
        return "\n" + La + a2;
      }
      var Na = false;
      function Oa(a2, b) {
        if (!a2 || Na)
          return "";
        Na = true;
        var c2 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b)
            if (b = function() {
              throw Error();
            }, Object.defineProperty(b.prototype, "props", { set: function() {
              throw Error();
            } }), "object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (l2) {
                var d = l2;
              }
              Reflect.construct(a2, [], b);
            } else {
              try {
                b.call();
              } catch (l2) {
                d = l2;
              }
              a2.call(b.prototype);
            }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a2();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
              h--;
            for (; 1 <= g && 0 <= h; g--, h--)
              if (e[g] !== f2[h]) {
                if (1 !== g || 1 !== h) {
                  do
                    if (g--, h--, 0 > h || e[g] !== f2[h]) {
                      var k2 = "\n" + e[g].replace(" at new ", " at ");
                      a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                      return k2;
                    }
                  while (1 <= g && 0 <= h);
                }
                break;
              }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c2;
        }
        return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
      }
      function Pa(a2) {
        switch (a2.tag) {
          case 5:
            return Ma(a2.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a2 = Oa(a2.type, false), a2;
          case 11:
            return a2 = Oa(a2.type.render, false), a2;
          case 1:
            return a2 = Oa(a2.type, true), a2;
          default:
            return "";
        }
      }
      function Qa(a2) {
        if (null == a2)
          return null;
        if ("function" === typeof a2)
          return a2.displayName || a2.name || null;
        if ("string" === typeof a2)
          return a2;
        switch (a2) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a2)
          switch (a2.$$typeof) {
            case Ca:
              return (a2.displayName || "Context") + ".Consumer";
            case Ba:
              return (a2._context.displayName || "Context") + ".Provider";
            case Da:
              var b = a2.render;
              a2 = a2.displayName;
              a2 || (a2 = b.displayName || b.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
              return a2;
            case Ga:
              return b = a2.displayName || null, null !== b ? b : Qa(a2.type) || "Memo";
            case Ha:
              b = a2._payload;
              a2 = a2._init;
              try {
                return Qa(a2(b));
              } catch (c2) {
              }
          }
        return null;
      }
      function Ra(a2) {
        var b = a2.type;
        switch (a2.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a2 = b.render, a2 = a2.displayName || a2.name || "", b.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
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
            if ("function" === typeof b)
              return b.displayName || b.name || null;
            if ("string" === typeof b)
              return b;
        }
        return null;
      }
      function Sa(a2) {
        switch (typeof a2) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a2;
          case "object":
            return a2;
          default:
            return "";
        }
      }
      function Ta(a2) {
        var b = a2.type;
        return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a2) {
        var b = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b), d = "" + a2[b];
        if (!a2.hasOwnProperty(b) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
          var e = c2.get, f2 = c2.set;
          Object.defineProperty(a2, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a3) {
            d = "" + a3;
            f2.call(this, a3);
          } });
          Object.defineProperty(a2, b, { enumerable: c2.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a3) {
            d = "" + a3;
          }, stopTracking: function() {
            a2._valueTracker = null;
            delete a2[b];
          } };
        }
      }
      function Va(a2) {
        a2._valueTracker || (a2._valueTracker = Ua(a2));
      }
      function Wa(a2) {
        if (!a2)
          return false;
        var b = a2._valueTracker;
        if (!b)
          return true;
        var c2 = b.getValue();
        var d = "";
        a2 && (d = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
        a2 = d;
        return a2 !== c2 ? (b.setValue(a2), true) : false;
      }
      function Xa(a2) {
        a2 = a2 || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a2)
          return null;
        try {
          return a2.activeElement || a2.body;
        } catch (b) {
          return a2.body;
        }
      }
      function Ya(a2, b) {
        var c2 = b.checked;
        return A2({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
      }
      function Za(a2, b) {
        var c2 = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c2 = Sa(null != b.value ? b.value : c2);
        a2._wrapperState = { initialChecked: d, initialValue: c2, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a2, b) {
        b = b.checked;
        null != b && ta(a2, "checked", b, false);
      }
      function bb(a2, b) {
        ab(a2, b);
        var c2 = Sa(b.value), d = b.type;
        if (null != c2)
          if ("number" === d) {
            if (0 === c2 && "" === a2.value || a2.value != c2)
              a2.value = "" + c2;
          } else
            a2.value !== "" + c2 && (a2.value = "" + c2);
        else if ("submit" === d || "reset" === d) {
          a2.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a2, b.type, c2) : b.hasOwnProperty("defaultValue") && cb(a2, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a2.defaultChecked = !!b.defaultChecked);
      }
      function db(a2, b, c2) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
            return;
          b = "" + a2._wrapperState.initialValue;
          c2 || b === a2.value || (a2.value = b);
          a2.defaultValue = b;
        }
        c2 = a2.name;
        "" !== c2 && (a2.name = "");
        a2.defaultChecked = !!a2._wrapperState.initialChecked;
        "" !== c2 && (a2.name = c2);
      }
      function cb(a2, b, c2) {
        if ("number" !== b || Xa(a2.ownerDocument) !== a2)
          null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
      }
      var eb = Array.isArray;
      function fb(a2, b, c2, d) {
        a2 = a2.options;
        if (b) {
          b = {};
          for (var e = 0; e < c2.length; e++)
            b["$" + c2[e]] = true;
          for (c2 = 0; c2 < a2.length; c2++)
            e = b.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e && (a2[c2].selected = e), e && d && (a2[c2].defaultSelected = true);
        } else {
          c2 = "" + Sa(c2);
          b = null;
          for (e = 0; e < a2.length; e++) {
            if (a2[e].value === c2) {
              a2[e].selected = true;
              d && (a2[e].defaultSelected = true);
              return;
            }
            null !== b || a2[e].disabled || (b = a2[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a2, b) {
        if (null != b.dangerouslySetInnerHTML)
          throw Error(p2(91));
        return A2({}, b, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
      }
      function hb(a2, b) {
        var c2 = b.value;
        if (null == c2) {
          c2 = b.children;
          b = b.defaultValue;
          if (null != c2) {
            if (null != b)
              throw Error(p2(92));
            if (eb(c2)) {
              if (1 < c2.length)
                throw Error(p2(93));
              c2 = c2[0];
            }
            b = c2;
          }
          null == b && (b = "");
          c2 = b;
        }
        a2._wrapperState = { initialValue: Sa(c2) };
      }
      function ib(a2, b) {
        var c2 = Sa(b.value), d = Sa(b.defaultValue);
        null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
        null != d && (a2.defaultValue = "" + d);
      }
      function jb(a2) {
        var b = a2.textContent;
        b === a2._wrapperState.initialValue && "" !== b && null !== b && (a2.value = b);
      }
      function kb(a2) {
        switch (a2) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a2, b) {
        return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a2;
      }
      var mb;
      var nb = function(a2) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c2, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a2(b, c2, d, e);
          });
        } : a2;
      }(function(a2, b) {
        if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
          a2.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a2.firstChild; )
            a2.removeChild(a2.firstChild);
          for (; b.firstChild; )
            a2.appendChild(b.firstChild);
        }
      });
      function ob(a2, b) {
        if (b) {
          var c2 = a2.firstChild;
          if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
            c2.nodeValue = b;
            return;
          }
        }
        a2.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a2) {
        qb.forEach(function(b) {
          b = b + a2.charAt(0).toUpperCase() + a2.substring(1);
          pb[b] = pb[a2];
        });
      });
      function rb(a2, b, c2) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c2 || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b).trim() : b + "px";
      }
      function sb(a2, b) {
        a2 = a2.style;
        for (var c2 in b)
          if (b.hasOwnProperty(c2)) {
            var d = 0 === c2.indexOf("--"), e = rb(c2, b[c2], d);
            "float" === c2 && (c2 = "cssFloat");
            d ? a2.setProperty(c2, e) : a2[c2] = e;
          }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a2, b) {
        if (b) {
          if (tb[a2] && (null != b.children || null != b.dangerouslySetInnerHTML))
            throw Error(p2(137, a2));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children)
              throw Error(p2(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
              throw Error(p2(61));
          }
          if (null != b.style && "object" !== typeof b.style)
            throw Error(p2(62));
        }
      }
      function vb(a2, b) {
        if (-1 === a2.indexOf("-"))
          return "string" === typeof b.is;
        switch (a2) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a2) {
        a2 = a2.target || a2.srcElement || window;
        a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
        return 3 === a2.nodeType ? a2.parentNode : a2;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a2) {
        if (a2 = Cb(a2)) {
          if ("function" !== typeof yb)
            throw Error(p2(280));
          var b = a2.stateNode;
          b && (b = Db(b), yb(a2.stateNode, a2.type, b));
        }
      }
      function Eb(a2) {
        zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
      }
      function Fb() {
        if (zb) {
          var a2 = zb, b = Ab;
          Ab = zb = null;
          Bb(a2);
          if (b)
            for (a2 = 0; a2 < b.length; a2++)
              Bb(b[a2]);
        }
      }
      function Gb(a2, b) {
        return a2(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a2, b, c2) {
        if (Ib)
          return a2(b, c2);
        Ib = true;
        try {
          return Gb(a2, b, c2);
        } finally {
          if (Ib = false, null !== zb || null !== Ab)
            Hb(), Fb();
        }
      }
      function Kb(a2, b) {
        var c2 = a2.stateNode;
        if (null === c2)
          return null;
        var d = Db(c2);
        if (null === d)
          return null;
        c2 = d[b];
        a:
          switch (b) {
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
              (d = !d.disabled) || (a2 = a2.type, d = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
              a2 = !d;
              break a;
            default:
              a2 = false;
          }
        if (a2)
          return null;
        if (c2 && "function" !== typeof c2)
          throw Error(p2(231, b, typeof c2));
        return c2;
      }
      var Lb = false;
      if (ia)
        try {
          Mb = {};
          Object.defineProperty(Mb, "passive", { get: function() {
            Lb = true;
          } });
          window.addEventListener("test", Mb, Mb);
          window.removeEventListener("test", Mb, Mb);
        } catch (a2) {
          Lb = false;
        }
      var Mb;
      function Nb(a2, b, c2, d, e, f2, g, h, k2) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c2, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a2) {
        Ob = true;
        Pb = a2;
      } };
      function Tb(a2, b, c2, d, e, f2, g, h, k2) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a2, b, c2, d, e, f2, g, h, k2) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else
            throw Error(p2(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a2) {
        var b = a2, c2 = a2;
        if (a2.alternate)
          for (; b.return; )
            b = b.return;
        else {
          a2 = b;
          do
            b = a2, 0 !== (b.flags & 4098) && (c2 = b.return), a2 = b.return;
          while (a2);
        }
        return 3 === b.tag ? c2 : null;
      }
      function Wb(a2) {
        if (13 === a2.tag) {
          var b = a2.memoizedState;
          null === b && (a2 = a2.alternate, null !== a2 && (b = a2.memoizedState));
          if (null !== b)
            return b.dehydrated;
        }
        return null;
      }
      function Xb(a2) {
        if (Vb(a2) !== a2)
          throw Error(p2(188));
      }
      function Yb(a2) {
        var b = a2.alternate;
        if (!b) {
          b = Vb(a2);
          if (null === b)
            throw Error(p2(188));
          return b !== a2 ? null : a2;
        }
        for (var c2 = a2, d = b; ; ) {
          var e = c2.return;
          if (null === e)
            break;
          var f2 = e.alternate;
          if (null === f2) {
            d = e.return;
            if (null !== d) {
              c2 = d;
              continue;
            }
            break;
          }
          if (e.child === f2.child) {
            for (f2 = e.child; f2; ) {
              if (f2 === c2)
                return Xb(e), a2;
              if (f2 === d)
                return Xb(e), b;
              f2 = f2.sibling;
            }
            throw Error(p2(188));
          }
          if (c2.return !== d.return)
            c2 = e, d = f2;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c2) {
                g = true;
                c2 = e;
                d = f2;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c2 = f2;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f2.child; h; ) {
                if (h === c2) {
                  g = true;
                  c2 = f2;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f2;
                  c2 = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g)
                throw Error(p2(189));
            }
          }
          if (c2.alternate !== d)
            throw Error(p2(190));
        }
        if (3 !== c2.tag)
          throw Error(p2(188));
        return c2.stateNode.current === c2 ? a2 : b;
      }
      function Zb(a2) {
        a2 = Yb(a2);
        return null !== a2 ? $b(a2) : null;
      }
      function $b(a2) {
        if (5 === a2.tag || 6 === a2.tag)
          return a2;
        for (a2 = a2.child; null !== a2; ) {
          var b = $b(a2);
          if (null !== b)
            return b;
          a2 = a2.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B2 = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a2) {
        if (lc && "function" === typeof lc.onCommitFiberRoot)
          try {
            lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
          } catch (b) {
          }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a2) {
        a2 >>>= 0;
        return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a2) {
        switch (a2 & -a2) {
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
            return a2 & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a2 & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a2;
        }
      }
      function uc(a2, b) {
        var c2 = a2.pendingLanes;
        if (0 === c2)
          return 0;
        var d = 0, e = a2.suspendedLanes, f2 = a2.pingedLanes, g = c2 & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
        } else
          g = c2 & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
        if (0 === d)
          return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
          return b;
        0 !== (d & 4) && (d |= c2 & 16);
        b = a2.entangledLanes;
        if (0 !== b)
          for (a2 = a2.entanglements, b &= d; 0 < b; )
            c2 = 31 - oc(b), e = 1 << c2, d |= a2[c2], b &= ~e;
        return d;
      }
      function vc(a2, b) {
        switch (a2) {
          case 1:
          case 2:
          case 4:
            return b + 250;
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
            return b + 5e3;
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
      function wc(a2, b) {
        for (var c2 = a2.suspendedLanes, d = a2.pingedLanes, e = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
          var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
          if (-1 === k2) {
            if (0 === (h & c2) || 0 !== (h & d))
              e[g] = vc(h, b);
          } else
            k2 <= b && (a2.expiredLanes |= h);
          f2 &= ~h;
        }
      }
      function xc(a2) {
        a2 = a2.pendingLanes & -1073741825;
        return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a2 = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a2;
      }
      function zc(a2) {
        for (var b = [], c2 = 0; 31 > c2; c2++)
          b.push(a2);
        return b;
      }
      function Ac(a2, b, c2) {
        a2.pendingLanes |= b;
        536870912 !== b && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
        a2 = a2.eventTimes;
        b = 31 - oc(b);
        a2[b] = c2;
      }
      function Bc(a2, b) {
        var c2 = a2.pendingLanes & ~b;
        a2.pendingLanes = b;
        a2.suspendedLanes = 0;
        a2.pingedLanes = 0;
        a2.expiredLanes &= b;
        a2.mutableReadLanes &= b;
        a2.entangledLanes &= b;
        b = a2.entanglements;
        var d = a2.eventTimes;
        for (a2 = a2.expirationTimes; 0 < c2; ) {
          var e = 31 - oc(c2), f2 = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a2[e] = -1;
          c2 &= ~f2;
        }
      }
      function Cc(a2, b) {
        var c2 = a2.entangledLanes |= b;
        for (a2 = a2.entanglements; c2; ) {
          var d = 31 - oc(c2), e = 1 << d;
          e & b | a2[d] & b && (a2[d] |= b);
          c2 &= ~e;
        }
      }
      var C2 = 0;
      function Dc(a2) {
        a2 &= -a2;
        return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a2, b) {
        switch (a2) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a2, b, c2, d, e, f2) {
        if (null === a2 || a2.nativeEvent !== f2)
          return a2 = { blockedOn: b, domEventName: c2, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a2;
        a2.eventSystemFlags |= d;
        b = a2.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a2;
      }
      function Uc(a2, b, c2, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a2, b, c2, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a2, b, c2, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a2, b, c2, d, e), true;
          case "pointerover":
            var f2 = e.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a2, b, c2, d, e));
            return true;
          case "gotpointercapture":
            return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b, c2, d, e)), true;
        }
        return false;
      }
      function Vc(a2) {
        var b = Wc(a2.target);
        if (null !== b) {
          var c2 = Vb(b);
          if (null !== c2) {
            if (b = c2.tag, 13 === b) {
              if (b = Wb(c2), null !== b) {
                a2.blockedOn = b;
                Ic(a2.priority, function() {
                  Gc(c2);
                });
                return;
              }
            } else if (3 === b && c2.stateNode.current.memoizedState.isDehydrated) {
              a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a2.blockedOn = null;
      }
      function Xc(a2) {
        if (null !== a2.blockedOn)
          return false;
        for (var b = a2.targetContainers; 0 < b.length; ) {
          var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b[0], a2.nativeEvent);
          if (null === c2) {
            c2 = a2.nativeEvent;
            var d = new c2.constructor(c2.type, c2);
            wb = d;
            c2.target.dispatchEvent(d);
            wb = null;
          } else
            return b = Cb(c2), null !== b && Fc(b), a2.blockedOn = c2, false;
          b.shift();
        }
        return true;
      }
      function Zc(a2, b, c2) {
        Xc(a2) && c2.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a2, b) {
        a2.blockedOn === b && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a2) {
        function b(b2) {
          return ad(b2, a2);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a2);
          for (var c2 = 1; c2 < Kc.length; c2++) {
            var d = Kc[c2];
            d.blockedOn === a2 && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a2);
        null !== Mc && ad(Mc, a2);
        null !== Nc && ad(Nc, a2);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c2 = 0; c2 < Qc.length; c2++)
          d = Qc[c2], d.blockedOn === a2 && (d.blockedOn = null);
        for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
          Vc(c2), null === c2.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a2, b, c2, d) {
        var e = C2, f2 = cd.transition;
        cd.transition = null;
        try {
          C2 = 1, fd(a2, b, c2, d);
        } finally {
          C2 = e, cd.transition = f2;
        }
      }
      function gd(a2, b, c2, d) {
        var e = C2, f2 = cd.transition;
        cd.transition = null;
        try {
          C2 = 4, fd(a2, b, c2, d);
        } finally {
          C2 = e, cd.transition = f2;
        }
      }
      function fd(a2, b, c2, d) {
        if (dd) {
          var e = Yc(a2, b, c2, d);
          if (null === e)
            hd(a2, b, d, id, c2), Sc(a2, d);
          else if (Uc(e, a2, b, c2, d))
            d.stopPropagation();
          else if (Sc(a2, d), b & 4 && -1 < Rc.indexOf(a2)) {
            for (; null !== e; ) {
              var f2 = Cb(e);
              null !== f2 && Ec(f2);
              f2 = Yc(a2, b, c2, d);
              null === f2 && hd(a2, b, d, id, c2);
              if (f2 === e)
                break;
              e = f2;
            }
            null !== e && d.stopPropagation();
          } else
            hd(a2, b, d, null, c2);
        }
      }
      var id = null;
      function Yc(a2, b, c2, d) {
        id = null;
        a2 = xb(d);
        a2 = Wc(a2);
        if (null !== a2)
          if (b = Vb(a2), null === b)
            a2 = null;
          else if (c2 = b.tag, 13 === c2) {
            a2 = Wb(b);
            if (null !== a2)
              return a2;
            a2 = null;
          } else if (3 === c2) {
            if (b.stateNode.current.memoizedState.isDehydrated)
              return 3 === b.tag ? b.stateNode.containerInfo : null;
            a2 = null;
          } else
            b !== a2 && (a2 = null);
        id = a2;
        return null;
      }
      function jd(a2) {
        switch (a2) {
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
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md)
          return md;
        var a2, b = ld, c2 = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
        for (a2 = 0; a2 < c2 && b[a2] === e[a2]; a2++)
          ;
        var g = c2 - a2;
        for (d = 1; d <= g && b[c2 - d] === e[f2 - d]; d++)
          ;
        return md = e.slice(a2, 1 < d ? 1 - d : void 0);
      }
      function od(a2) {
        var b = a2.keyCode;
        "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b && (a2 = 13)) : a2 = b;
        10 === a2 && (a2 = 13);
        return 32 <= a2 || 13 === a2 ? a2 : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a2) {
        function b(b2, d, e, f2, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c2 in a2)
            a2.hasOwnProperty(c2) && (b2 = a2[c2], this[c2] = b2 ? b2(f2) : f2[c2]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a3 = this.nativeEvent;
          a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a3 = this.nativeEvent;
          a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
        return a2.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A2({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
        return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
      }, movementX: function(a2) {
        if ("movementX" in a2)
          return a2.movementX;
        a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
        return wd;
      }, movementY: function(a2) {
        return "movementY" in a2 ? a2.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A2({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A2({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A2({}, sd, { clipboardData: function(a2) {
        return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A2({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
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
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
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
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a2) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a2) : (a2 = Od[a2]) ? !!b[a2] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A2({}, ud, { key: function(a2) {
        if (a2.key) {
          var b = Md[a2.key] || a2.key;
          if ("Unidentified" !== b)
            return b;
        }
        return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
        return "keypress" === a2.type ? od(a2) : 0;
      }, keyCode: function(a2) {
        return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
      }, which: function(a2) {
        return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A2({}, Ad, {
        deltaX: function(a2) {
          return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
        },
        deltaY: function(a2) {
          return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be2 = null;
      ia && "documentMode" in document && (be2 = document.documentMode);
      var ce2 = ia && "TextEvent" in window && !be2;
      var de2 = ia && (!ae || be2 && 8 < be2 && 11 >= be2);
      var ee2 = String.fromCharCode(32);
      var fe2 = false;
      function ge2(a2, b) {
        switch (a2) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he2(a2) {
        a2 = a2.detail;
        return "object" === typeof a2 && "data" in a2 ? a2.data : null;
      }
      var ie = false;
      function je2(a2, b) {
        switch (a2) {
          case "compositionend":
            return he2(b);
          case "keypress":
            if (32 !== b.which)
              return null;
            fe2 = true;
            return ee2;
          case "textInput":
            return a2 = b.data, a2 === ee2 && fe2 ? null : a2;
          default:
            return null;
        }
      }
      function ke2(a2, b) {
        if (ie)
          return "compositionend" === a2 || !ae && ge2(a2, b) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
        switch (a2) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length)
                return b.char;
              if (b.which)
                return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de2 && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me2(a2) {
        var b = a2 && a2.nodeName && a2.nodeName.toLowerCase();
        return "input" === b ? !!le2[a2.type] : "textarea" === b ? true : false;
      }
      function ne2(a2, b, c2, d) {
        Eb(d);
        b = oe2(b, "onChange");
        0 < b.length && (c2 = new td("onChange", "change", null, c2, d), a2.push({ event: c2, listeners: b }));
      }
      var pe2 = null;
      var qe2 = null;
      function re2(a2) {
        se2(a2, 0);
      }
      function te2(a2) {
        var b = ue2(a2);
        if (Wa(b))
          return a2;
      }
      function ve2(a2, b) {
        if ("change" === a2)
          return b;
      }
      var we2 = false;
      if (ia) {
        if (ia) {
          ye2 = "oninput" in document;
          if (!ye2) {
            ze2 = document.createElement("div");
            ze2.setAttribute("oninput", "return;");
            ye2 = "function" === typeof ze2.oninput;
          }
          xe2 = ye2;
        } else
          xe2 = false;
        we2 = xe2 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe2;
      var ye2;
      var ze2;
      function Ae2() {
        pe2 && (pe2.detachEvent("onpropertychange", Be2), qe2 = pe2 = null);
      }
      function Be2(a2) {
        if ("value" === a2.propertyName && te2(qe2)) {
          var b = [];
          ne2(b, qe2, a2, xb(a2));
          Jb(re2, b);
        }
      }
      function Ce2(a2, b, c2) {
        "focusin" === a2 ? (Ae2(), pe2 = b, qe2 = c2, pe2.attachEvent("onpropertychange", Be2)) : "focusout" === a2 && Ae2();
      }
      function De2(a2) {
        if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
          return te2(qe2);
      }
      function Ee2(a2, b) {
        if ("click" === a2)
          return te2(b);
      }
      function Fe2(a2, b) {
        if ("input" === a2 || "change" === a2)
          return te2(b);
      }
      function Ge2(a2, b) {
        return a2 === b && (0 !== a2 || 1 / a2 === 1 / b) || a2 !== a2 && b !== b;
      }
      var He2 = "function" === typeof Object.is ? Object.is : Ge2;
      function Ie2(a2, b) {
        if (He2(a2, b))
          return true;
        if ("object" !== typeof a2 || null === a2 || "object" !== typeof b || null === b)
          return false;
        var c2 = Object.keys(a2), d = Object.keys(b);
        if (c2.length !== d.length)
          return false;
        for (d = 0; d < c2.length; d++) {
          var e = c2[d];
          if (!ja.call(b, e) || !He2(a2[e], b[e]))
            return false;
        }
        return true;
      }
      function Je(a2) {
        for (; a2 && a2.firstChild; )
          a2 = a2.firstChild;
        return a2;
      }
      function Ke(a2, b) {
        var c2 = Je(a2);
        a2 = 0;
        for (var d; c2; ) {
          if (3 === c2.nodeType) {
            d = a2 + c2.textContent.length;
            if (a2 <= b && d >= b)
              return { node: c2, offset: b - a2 };
            a2 = d;
          }
          a: {
            for (; c2; ) {
              if (c2.nextSibling) {
                c2 = c2.nextSibling;
                break a;
              }
              c2 = c2.parentNode;
            }
            c2 = void 0;
          }
          c2 = Je(c2);
        }
      }
      function Le2(a2, b) {
        return a2 && b ? a2 === b ? true : a2 && 3 === a2.nodeType ? false : b && 3 === b.nodeType ? Le2(a2, b.parentNode) : "contains" in a2 ? a2.contains(b) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me2() {
        for (var a2 = window, b = Xa(); b instanceof a2.HTMLIFrameElement; ) {
          try {
            var c2 = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c2 = false;
          }
          if (c2)
            a2 = b.contentWindow;
          else
            break;
          b = Xa(a2.document);
        }
        return b;
      }
      function Ne2(a2) {
        var b = a2 && a2.nodeName && a2.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b || "true" === a2.contentEditable);
      }
      function Oe2(a2) {
        var b = Me2(), c2 = a2.focusedElem, d = a2.selectionRange;
        if (b !== c2 && c2 && c2.ownerDocument && Le2(c2.ownerDocument.documentElement, c2)) {
          if (null !== d && Ne2(c2)) {
            if (b = d.start, a2 = d.end, void 0 === a2 && (a2 = b), "selectionStart" in c2)
              c2.selectionStart = b, c2.selectionEnd = Math.min(a2, c2.value.length);
            else if (a2 = (b = c2.ownerDocument || document) && b.defaultView || window, a2.getSelection) {
              a2 = a2.getSelection();
              var e = c2.textContent.length, f2 = Math.min(d.start, e);
              d = void 0 === d.end ? f2 : Math.min(d.end, e);
              !a2.extend && f2 > d && (e = d, d = f2, f2 = e);
              e = Ke(c2, f2);
              var g = Ke(
                c2,
                d
              );
              e && g && (1 !== a2.rangeCount || a2.anchorNode !== e.node || a2.anchorOffset !== e.offset || a2.focusNode !== g.node || a2.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a2.removeAllRanges(), f2 > d ? (a2.addRange(b), a2.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a2.addRange(b)));
            }
          }
          b = [];
          for (a2 = c2; a2 = a2.parentNode; )
            1 === a2.nodeType && b.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
          "function" === typeof c2.focus && c2.focus();
          for (c2 = 0; c2 < b.length; c2++)
            a2 = b[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
        }
      }
      var Pe2 = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe2 = null;
      var Re2 = null;
      var Se2 = null;
      var Te2 = false;
      function Ue2(a2, b, c2) {
        var d = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
        Te2 || null == Qe2 || Qe2 !== Xa(d) || (d = Qe2, "selectionStart" in d && Ne2(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se2 && Ie2(Se2, d) || (Se2 = d, d = oe2(Re2, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c2), a2.push({ event: b, listeners: d }), b.target = Qe2)));
      }
      function Ve2(a2, b) {
        var c2 = {};
        c2[a2.toLowerCase()] = b.toLowerCase();
        c2["Webkit" + a2] = "webkit" + b;
        c2["Moz" + a2] = "moz" + b;
        return c2;
      }
      var We2 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye2 = {};
      ia && (Ye2 = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
      function Ze2(a2) {
        if (Xe[a2])
          return Xe[a2];
        if (!We2[a2])
          return a2;
        var b = We2[a2], c2;
        for (c2 in b)
          if (b.hasOwnProperty(c2) && c2 in Ye2)
            return Xe[a2] = b[c2];
        return a2;
      }
      var $e2 = Ze2("animationend");
      var af = Ze2("animationiteration");
      var bf = Ze2("animationstart");
      var cf = Ze2("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a2, b) {
        df.set(a2, b);
        fa(b, [a2]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e2, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a2, b, c2) {
        var d = a2.type || "unknown-event";
        a2.currentTarget = c2;
        Ub(d, b, void 0, a2);
        a2.currentTarget = null;
      }
      function se2(a2, b) {
        b = 0 !== (b & 4);
        for (var c2 = 0; c2 < a2.length; c2++) {
          var d = a2[c2], e = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b)
              for (var g = d.length - 1; 0 <= g; g--) {
                var h = d[g], k2 = h.instance, l2 = h.currentTarget;
                h = h.listener;
                if (k2 !== f2 && e.isPropagationStopped())
                  break a;
                nf(e, h, l2);
                f2 = k2;
              }
            else
              for (g = 0; g < d.length; g++) {
                h = d[g];
                k2 = h.instance;
                l2 = h.currentTarget;
                h = h.listener;
                if (k2 !== f2 && e.isPropagationStopped())
                  break a;
                nf(e, h, l2);
                f2 = k2;
              }
          }
        }
        if (Qb)
          throw a2 = Rb, Qb = false, Rb = null, a2;
      }
      function D2(a2, b) {
        var c2 = b[of];
        void 0 === c2 && (c2 = b[of] = /* @__PURE__ */ new Set());
        var d = a2 + "__bubble";
        c2.has(d) || (pf(b, a2, 2, false), c2.add(d));
      }
      function qf(a2, b, c2) {
        var d = 0;
        b && (d |= 4);
        pf(c2, a2, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a2) {
        if (!a2[rf]) {
          a2[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a2), qf(b2, true, a2));
          });
          var b = 9 === a2.nodeType ? a2 : a2.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a2, b, c2, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c2 = e.bind(null, b, c2, a2);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a2.addEventListener(b, c2, { capture: true, passive: e }) : a2.addEventListener(b, c2, true) : void 0 !== e ? a2.addEventListener(b, c2, { passive: e }) : a2.addEventListener(b, c2, false);
      }
      function hd(a2, b, c2, d, e) {
        var f2 = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d)
          a:
            for (; ; ) {
              if (null === d)
                return;
              var g = d.tag;
              if (3 === g || 4 === g) {
                var h = d.stateNode.containerInfo;
                if (h === e || 8 === h.nodeType && h.parentNode === e)
                  break;
                if (4 === g)
                  for (g = d.return; null !== g; ) {
                    var k2 = g.tag;
                    if (3 === k2 || 4 === k2) {
                      if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                        return;
                    }
                    g = g.return;
                  }
                for (; null !== h; ) {
                  g = Wc(h);
                  if (null === g)
                    return;
                  k2 = g.tag;
                  if (5 === k2 || 6 === k2) {
                    d = f2 = g;
                    continue a;
                  }
                  h = h.parentNode;
                }
              }
              d = d.return;
            }
        Jb(function() {
          var d2 = f2, e2 = xb(c2), g2 = [];
          a: {
            var h2 = df.get(a2);
            if (void 0 !== h2) {
              var k3 = td, n = a2;
              switch (a2) {
                case "keypress":
                  if (0 === od(c2))
                    break a;
                case "keydown":
                case "keyup":
                  k3 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k3 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k3 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k3 = Fd;
                  break;
                case "click":
                  if (2 === c2.button)
                    break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k3 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k3 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k3 = Vd;
                  break;
                case $e2:
                case af:
                case bf:
                  k3 = Hd;
                  break;
                case cf:
                  k3 = Xd;
                  break;
                case "scroll":
                  k3 = vd;
                  break;
                case "wheel":
                  k3 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k3 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k3 = Td;
              }
              var t = 0 !== (b & 4), J2 = !t && "scroll" === a2, x2 = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u2; null !== w; ) {
                u2 = w;
                var F2 = u2.stateNode;
                5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w, x2), null != F2 && t.push(tf(w, F2, u2))));
                if (J2)
                  break;
                w = w.return;
              }
              0 < t.length && (h2 = new k3(h2, n, null, c2, e2), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a2 || "pointerover" === a2;
              k3 = "mouseout" === a2 || "pointerout" === a2;
              if (h2 && c2 !== wb && (n = c2.relatedTarget || c2.fromElement) && (Wc(n) || n[uf]))
                break a;
              if (k3 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k3) {
                  if (n = c2.relatedTarget || c2.toElement, k3 = d2, n = n ? Wc(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag))
                    n = null;
                } else
                  k3 = null, n = d2;
                if (k3 !== n) {
                  t = Bd;
                  F2 = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a2 || "pointerover" === a2)
                    t = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w = "pointer";
                  J2 = null == k3 ? h2 : ue2(k3);
                  u2 = null == n ? h2 : ue2(n);
                  h2 = new t(F2, w + "leave", k3, c2, e2);
                  h2.target = J2;
                  h2.relatedTarget = u2;
                  F2 = null;
                  Wc(e2) === d2 && (t = new t(x2, w + "enter", n, c2, e2), t.target = u2, t.relatedTarget = J2, F2 = t);
                  J2 = F2;
                  if (k3 && n)
                    b: {
                      t = k3;
                      x2 = n;
                      w = 0;
                      for (u2 = t; u2; u2 = vf(u2))
                        w++;
                      u2 = 0;
                      for (F2 = x2; F2; F2 = vf(F2))
                        u2++;
                      for (; 0 < w - u2; )
                        t = vf(t), w--;
                      for (; 0 < u2 - w; )
                        x2 = vf(x2), u2--;
                      for (; w--; ) {
                        if (t === x2 || null !== x2 && t === x2.alternate)
                          break b;
                        t = vf(t);
                        x2 = vf(x2);
                      }
                      t = null;
                    }
                  else
                    t = null;
                  null !== k3 && wf(g2, h2, k3, t, false);
                  null !== n && null !== J2 && wf(g2, J2, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue2(d2) : window;
              k3 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k3 || "input" === k3 && "file" === h2.type)
                var na = ve2;
              else if (me2(h2))
                if (we2)
                  na = Fe2;
                else {
                  na = De2;
                  var xa = Ce2;
                }
              else
                (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee2);
              if (na && (na = na(a2, d2))) {
                ne2(g2, na, c2, e2);
                break a;
              }
              xa && xa(a2, h2, d2);
              "focusout" === a2 && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue2(d2) : window;
            switch (a2) {
              case "focusin":
                if (me2(xa) || "true" === xa.contentEditable)
                  Qe2 = xa, Re2 = d2, Se2 = null;
                break;
              case "focusout":
                Se2 = Re2 = Qe2 = null;
                break;
              case "mousedown":
                Te2 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te2 = false;
                Ue2(g2, c2, e2);
                break;
              case "selectionchange":
                if (Pe2)
                  break;
              case "keydown":
              case "keyup":
                Ue2(g2, c2, e2);
            }
            var $a;
            if (ae)
              b: {
                switch (a2) {
                  case "compositionstart":
                    var ba = "onCompositionStart";
                    break b;
                  case "compositionend":
                    ba = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    ba = "onCompositionUpdate";
                    break b;
                }
                ba = void 0;
              }
            else
              ie ? ge2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
            ba && (de2 && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe2(d2, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he2(c2), null !== $a && (ba.data = $a))));
            if ($a = ce2 ? je2(a2, c2) : ke2(a2, c2))
              d2 = oe2(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se2(g2, b);
        });
      }
      function tf(a2, b, c2) {
        return { instance: a2, listener: b, currentTarget: c2 };
      }
      function oe2(a2, b) {
        for (var c2 = b + "Capture", d = []; null !== a2; ) {
          var e = a2, f2 = e.stateNode;
          5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a2, c2), null != f2 && d.unshift(tf(a2, f2, e)), f2 = Kb(a2, b), null != f2 && d.push(tf(a2, f2, e)));
          a2 = a2.return;
        }
        return d;
      }
      function vf(a2) {
        if (null === a2)
          return null;
        do
          a2 = a2.return;
        while (a2 && 5 !== a2.tag);
        return a2 ? a2 : null;
      }
      function wf(a2, b, c2, d, e) {
        for (var f2 = b._reactName, g = []; null !== c2 && c2 !== d; ) {
          var h = c2, k2 = h.alternate, l2 = h.stateNode;
          if (null !== k2 && k2 === d)
            break;
          5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c2, f2), null != k2 && g.unshift(tf(c2, k2, h))) : e || (k2 = Kb(c2, f2), null != k2 && g.push(tf(c2, k2, h))));
          c2 = c2.return;
        }
        0 !== g.length && a2.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a2) {
        return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
      }
      function Af(a2, b, c2) {
        b = zf(b);
        if (zf(a2) !== b && c2)
          throw Error(p2(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a2, b) {
        return "textarea" === a2 || "noscript" === a2 || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
        return Hf.resolve(null).then(a2).catch(If);
      } : Ff;
      function If(a2) {
        setTimeout(function() {
          throw a2;
        });
      }
      function Kf(a2, b) {
        var c2 = b, d = 0;
        do {
          var e = c2.nextSibling;
          a2.removeChild(c2);
          if (e && 8 === e.nodeType)
            if (c2 = e.data, "/$" === c2) {
              if (0 === d) {
                a2.removeChild(e);
                bd(b);
                return;
              }
              d--;
            } else
              "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d++;
          c2 = e;
        } while (c2);
        bd(b);
      }
      function Lf(a2) {
        for (; null != a2; a2 = a2.nextSibling) {
          var b = a2.nodeType;
          if (1 === b || 3 === b)
            break;
          if (8 === b) {
            b = a2.data;
            if ("$" === b || "$!" === b || "$?" === b)
              break;
            if ("/$" === b)
              return null;
          }
        }
        return a2;
      }
      function Mf(a2) {
        a2 = a2.previousSibling;
        for (var b = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("$" === c2 || "$!" === c2 || "$?" === c2) {
              if (0 === b)
                return a2;
              b--;
            } else
              "/$" === c2 && b++;
          }
          a2 = a2.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a2) {
        var b = a2[Of];
        if (b)
          return b;
        for (var c2 = a2.parentNode; c2; ) {
          if (b = c2[uf] || c2[Of]) {
            c2 = b.alternate;
            if (null !== b.child || null !== c2 && null !== c2.child)
              for (a2 = Mf(a2); null !== a2; ) {
                if (c2 = a2[Of])
                  return c2;
                a2 = Mf(a2);
              }
            return b;
          }
          a2 = c2;
          c2 = a2.parentNode;
        }
        return null;
      }
      function Cb(a2) {
        a2 = a2[Of] || a2[uf];
        return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
      }
      function ue2(a2) {
        if (5 === a2.tag || 6 === a2.tag)
          return a2.stateNode;
        throw Error(p2(33));
      }
      function Db(a2) {
        return a2[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a2) {
        return { current: a2 };
      }
      function E2(a2) {
        0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G2(a2, b) {
        Tf++;
        Sf[Tf] = a2.current;
        a2.current = b;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a2, b) {
        var c2 = a2.type.contextTypes;
        if (!c2)
          return Vf;
        var d = a2.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
          return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f2;
        for (f2 in c2)
          e[f2] = b[f2];
        d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b, a2.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a2) {
        a2 = a2.childContextTypes;
        return null !== a2 && void 0 !== a2;
      }
      function $f() {
        E2(Wf);
        E2(H2);
      }
      function ag(a2, b, c2) {
        if (H2.current !== Vf)
          throw Error(p2(168));
        G2(H2, b);
        G2(Wf, c2);
      }
      function bg(a2, b, c2) {
        var d = a2.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext)
          return c2;
        d = d.getChildContext();
        for (var e in d)
          if (!(e in b))
            throw Error(p2(108, Ra(a2) || "Unknown", e));
        return A2({}, c2, d);
      }
      function cg(a2) {
        a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G2(H2, a2);
        G2(Wf, Wf.current);
        return true;
      }
      function dg(a2, b, c2) {
        var d = a2.stateNode;
        if (!d)
          throw Error(p2(169));
        c2 ? (a2 = bg(a2, b, Xf), d.__reactInternalMemoizedMergedChildContext = a2, E2(Wf), E2(H2), G2(H2, a2)) : E2(Wf);
        G2(Wf, c2);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a2) {
        null === eg ? eg = [a2] : eg.push(a2);
      }
      function ig(a2) {
        fg = true;
        hg(a2);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a2 = 0, b = C2;
          try {
            var c2 = eg;
            for (C2 = 1; a2 < c2.length; a2++) {
              var d = c2[a2];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e;
          } finally {
            C2 = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a2, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a2;
        ng = b;
      }
      function ug(a2, b, c2) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a2;
        var d = rg;
        a2 = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c2 += 1;
        var f2 = 32 - oc(b) + e;
        if (30 < f2) {
          var g = e - e % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b) + e | c2 << e | d;
          sg = f2 + a2;
        } else
          rg = 1 << f2 | c2 << e | d, sg = a2;
      }
      function vg(a2) {
        null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
      }
      function wg(a2) {
        for (; a2 === mg; )
          mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a2 === qg; )
          qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a2, b) {
        var c2 = Bg(5, null, null, 0);
        c2.elementType = "DELETED";
        c2.stateNode = b;
        c2.return = a2;
        b = a2.deletions;
        null === b ? (a2.deletions = [c2], a2.flags |= 16) : b.push(c2);
      }
      function Cg(a2, b) {
        switch (a2.tag) {
          case 5:
            var c2 = a2.type;
            b = 1 !== b.nodeType || c2.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a2.stateNode = b, xg = a2, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a2.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a2.stateNode = b, xg = a2, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a2) {
        return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
      }
      function Eg(a2) {
        if (I2) {
          var b = yg;
          if (b) {
            var c2 = b;
            if (!Cg(a2, b)) {
              if (Dg(a2))
                throw Error(p2(418));
              b = Lf(c2.nextSibling);
              var d = xg;
              b && Cg(a2, b) ? Ag(d, c2) : (a2.flags = a2.flags & -4097 | 2, I2 = false, xg = a2);
            }
          } else {
            if (Dg(a2))
              throw Error(p2(418));
            a2.flags = a2.flags & -4097 | 2;
            I2 = false;
            xg = a2;
          }
        }
      }
      function Fg(a2) {
        for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
          a2 = a2.return;
        xg = a2;
      }
      function Gg(a2) {
        if (a2 !== xg)
          return false;
        if (!I2)
          return Fg(a2), I2 = true, false;
        var b;
        (b = 3 !== a2.tag) && !(b = 5 !== a2.tag) && (b = a2.type, b = "head" !== b && "body" !== b && !Ef(a2.type, a2.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a2))
            throw Hg(), Error(p2(418));
          for (; b; )
            Ag(a2, b), b = Lf(b.nextSibling);
        }
        Fg(a2);
        if (13 === a2.tag) {
          a2 = a2.memoizedState;
          a2 = null !== a2 ? a2.dehydrated : null;
          if (!a2)
            throw Error(p2(317));
          a: {
            a2 = a2.nextSibling;
            for (b = 0; a2; ) {
              if (8 === a2.nodeType) {
                var c2 = a2.data;
                if ("/$" === c2) {
                  if (0 === b) {
                    yg = Lf(a2.nextSibling);
                    break a;
                  }
                  b--;
                } else
                  "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b++;
              }
              a2 = a2.nextSibling;
            }
            yg = null;
          }
        } else
          yg = xg ? Lf(a2.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a2 = yg; a2; )
          a2 = Lf(a2.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a2) {
        null === zg ? zg = [a2] : zg.push(a2);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a2, b) {
        if (a2 && a2.defaultProps) {
          b = A2({}, b);
          a2 = a2.defaultProps;
          for (var c2 in a2)
            void 0 === b[c2] && (b[c2] = a2[c2]);
          return b;
        }
        return b;
      }
      var Mg = Uf(null);
      var Ng = null;
      var Og = null;
      var Pg = null;
      function Qg() {
        Pg = Og = Ng = null;
      }
      function Rg(a2) {
        var b = Mg.current;
        E2(Mg);
        a2._currentValue = b;
      }
      function Sg(a2, b, c2) {
        for (; null !== a2; ) {
          var d = a2.alternate;
          (a2.childLanes & b) !== b ? (a2.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a2 === c2)
            break;
          a2 = a2.return;
        }
      }
      function Tg(a2, b) {
        Ng = a2;
        Pg = Og = null;
        a2 = a2.dependencies;
        null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b) && (Ug = true), a2.firstContext = null);
      }
      function Vg(a2) {
        var b = a2._currentValue;
        if (Pg !== a2)
          if (a2 = { context: a2, memoizedValue: b, next: null }, null === Og) {
            if (null === Ng)
              throw Error(p2(308));
            Og = a2;
            Ng.dependencies = { lanes: 0, firstContext: a2 };
          } else
            Og = Og.next = a2;
        return b;
      }
      var Wg = null;
      function Xg(a2) {
        null === Wg ? Wg = [a2] : Wg.push(a2);
      }
      function Yg(a2, b, c2, d) {
        var e = b.interleaved;
        null === e ? (c2.next = c2, Xg(b)) : (c2.next = e.next, e.next = c2);
        b.interleaved = c2;
        return Zg(a2, d);
      }
      function Zg(a2, b) {
        a2.lanes |= b;
        var c2 = a2.alternate;
        null !== c2 && (c2.lanes |= b);
        c2 = a2;
        for (a2 = a2.return; null !== a2; )
          a2.childLanes |= b, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b), c2 = a2, a2 = a2.return;
        return 3 === c2.tag ? c2.stateNode : null;
      }
      var $g = false;
      function ah(a2) {
        a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function bh(a2, b) {
        a2 = a2.updateQueue;
        b.updateQueue === a2 && (b.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
      }
      function ch(a2, b) {
        return { eventTime: a2, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function dh(a2, b, c2) {
        var d = a2.updateQueue;
        if (null === d)
          return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return Zg(a2, c2);
        }
        e = d.interleaved;
        null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return Zg(a2, c2);
      }
      function eh(a2, b, c2) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c2 & 4194240))) {
          var d = b.lanes;
          d &= a2.pendingLanes;
          c2 |= d;
          b.lanes = c2;
          Cc(a2, c2);
        }
      }
      function fh(a2, b) {
        var c2 = a2.updateQueue, d = a2.alternate;
        if (null !== d && (d = d.updateQueue, c2 === d)) {
          var e = null, f2 = null;
          c2 = c2.firstBaseUpdate;
          if (null !== c2) {
            do {
              var g = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
              null === f2 ? e = f2 = g : f2 = f2.next = g;
              c2 = c2.next;
            } while (null !== c2);
            null === f2 ? e = f2 = b : f2 = f2.next = b;
          } else
            e = f2 = b;
          c2 = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a2.updateQueue = c2;
          return;
        }
        a2 = c2.lastBaseUpdate;
        null === a2 ? c2.firstBaseUpdate = b : a2.next = b;
        c2.lastBaseUpdate = b;
      }
      function gh(a2, b, c2, d) {
        var e = a2.updateQueue;
        $g = false;
        var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k2 = h, l2 = k2.next;
          k2.next = null;
          null === g ? f2 = l2 : g.next = l2;
          g = k2;
          var m = a2.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l2 : h.next = l2, m.lastBaseUpdate = k2));
        }
        if (null !== f2) {
          var q2 = e.baseState;
          g = 0;
          m = l2 = k2 = null;
          h = f2;
          do {
            var r2 = h.lane, y2 = h.eventTime;
            if ((d & r2) === r2) {
              null !== m && (m = m.next = {
                eventTime: y2,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a2, t = h;
                r2 = b;
                y2 = c2;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q2 = n.call(y2, q2, r2);
                      break a;
                    }
                    q2 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r2 = "function" === typeof n ? n.call(y2, q2, r2) : n;
                    if (null === r2 || void 0 === r2)
                      break a;
                    q2 = A2({}, q2, r2);
                    break a;
                  case 2:
                    $g = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a2.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
            } else
              y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l2 = m = y2, k2 = q2) : m = m.next = y2, g |= r2;
            h = h.next;
            if (null === h)
              if (h = e.shared.pending, null === h)
                break;
              else
                r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
          } while (1);
          null === m && (k2 = q2);
          e.baseState = k2;
          e.firstBaseUpdate = l2;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else
            null === f2 && (e.shared.lanes = 0);
          hh |= g;
          a2.lanes = g;
          a2.memoizedState = q2;
        }
      }
      function ih(a2, b, c2) {
        a2 = b.effects;
        b.effects = null;
        if (null !== a2)
          for (b = 0; b < a2.length; b++) {
            var d = a2[b], e = d.callback;
            if (null !== e) {
              d.callback = null;
              d = c2;
              if ("function" !== typeof e)
                throw Error(p2(191, e));
              e.call(d);
            }
          }
      }
      var jh = new aa.Component().refs;
      function kh(a2, b, c2, d) {
        b = a2.memoizedState;
        c2 = c2(d, b);
        c2 = null === c2 || void 0 === c2 ? b : A2({}, b, c2);
        a2.memoizedState = c2;
        0 === a2.lanes && (a2.updateQueue.baseState = c2);
      }
      var nh = { isMounted: function(a2) {
        return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
      }, enqueueSetState: function(a2, b, c2) {
        a2 = a2._reactInternals;
        var d = L2(), e = lh(a2), f2 = ch(d, e);
        f2.payload = b;
        void 0 !== c2 && null !== c2 && (f2.callback = c2);
        b = dh(a2, f2, e);
        null !== b && (mh(b, a2, e, d), eh(b, a2, e));
      }, enqueueReplaceState: function(a2, b, c2) {
        a2 = a2._reactInternals;
        var d = L2(), e = lh(a2), f2 = ch(d, e);
        f2.tag = 1;
        f2.payload = b;
        void 0 !== c2 && null !== c2 && (f2.callback = c2);
        b = dh(a2, f2, e);
        null !== b && (mh(b, a2, e, d), eh(b, a2, e));
      }, enqueueForceUpdate: function(a2, b) {
        a2 = a2._reactInternals;
        var c2 = L2(), d = lh(a2), e = ch(c2, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = dh(a2, e, d);
        null !== b && (mh(b, a2, d, c2), eh(b, a2, d));
      } };
      function oh(a2, b, c2, d, e, f2, g) {
        a2 = a2.stateNode;
        return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie2(c2, d) || !Ie2(e, f2) : true;
      }
      function ph(a2, b, c2) {
        var d = false, e = Vf;
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H2.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a2, e) : Vf);
        b = new b(c2, f2);
        a2.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = nh;
        a2.stateNode = b;
        b._reactInternals = a2;
        d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e, a2.__reactInternalMemoizedMaskedChildContext = f2);
        return b;
      }
      function qh(a2, b, c2, d) {
        a2 = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c2, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c2, d);
        b.state !== a2 && nh.enqueueReplaceState(b, b.state, null);
      }
      function rh(a2, b, c2, d) {
        var e = a2.stateNode;
        e.props = c2;
        e.state = a2.memoizedState;
        e.refs = jh;
        ah(a2);
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H2.current, e.context = Yf(a2, f2));
        e.state = a2.memoizedState;
        f2 = b.getDerivedStateFromProps;
        "function" === typeof f2 && (kh(a2, b, f2, c2), e.state = a2.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a2, c2, e, d), e.state = a2.memoizedState);
        "function" === typeof e.componentDidMount && (a2.flags |= 4194308);
      }
      function sh(a2, b, c2) {
        a2 = c2.ref;
        if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
          if (c2._owner) {
            c2 = c2._owner;
            if (c2) {
              if (1 !== c2.tag)
                throw Error(p2(309));
              var d = c2.stateNode;
            }
            if (!d)
              throw Error(p2(147, a2));
            var e = d, f2 = "" + a2;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
              return b.ref;
            b = function(a3) {
              var b2 = e.refs;
              b2 === jh && (b2 = e.refs = {});
              null === a3 ? delete b2[f2] : b2[f2] = a3;
            };
            b._stringRef = f2;
            return b;
          }
          if ("string" !== typeof a2)
            throw Error(p2(284));
          if (!c2._owner)
            throw Error(p2(290, a2));
        }
        return a2;
      }
      function th(a2, b) {
        a2 = Object.prototype.toString.call(b);
        throw Error(p2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b).join(", ") + "}" : a2));
      }
      function uh(a2) {
        var b = a2._init;
        return b(a2._payload);
      }
      function vh(a2) {
        function b(b2, c3) {
          if (a2) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c3], b2.flags |= 16) : d2.push(c3);
          }
        }
        function c2(c3, d2) {
          if (!a2)
            return null;
          for (; null !== d2; )
            b(c3, d2), d2 = d2.sibling;
          return null;
        }
        function d(a3, b2) {
          for (a3 = /* @__PURE__ */ new Map(); null !== b2; )
            null !== b2.key ? a3.set(b2.key, b2) : a3.set(b2.index, b2), b2 = b2.sibling;
          return a3;
        }
        function e(a3, b2) {
          a3 = wh(a3, b2);
          a3.index = 0;
          a3.sibling = null;
          return a3;
        }
        function f2(b2, c3, d2) {
          b2.index = d2;
          if (!a2)
            return b2.flags |= 1048576, c3;
          d2 = b2.alternate;
          if (null !== d2)
            return d2 = d2.index, d2 < c3 ? (b2.flags |= 2, c3) : d2;
          b2.flags |= 2;
          return c3;
        }
        function g(b2) {
          a2 && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a3, b2, c3, d2) {
          if (null === b2 || 6 !== b2.tag)
            return b2 = xh(c3, a3.mode, d2), b2.return = a3, b2;
          b2 = e(b2, c3);
          b2.return = a3;
          return b2;
        }
        function k2(a3, b2, c3, d2) {
          var f3 = c3.type;
          if (f3 === ya)
            return m(a3, b2, c3.props.children, d2, c3.key);
          if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
            return d2 = e(b2, c3.props), d2.ref = sh(a3, b2, c3), d2.return = a3, d2;
          d2 = yh(c3.type, c3.key, c3.props, null, a3.mode, d2);
          d2.ref = sh(a3, b2, c3);
          d2.return = a3;
          return d2;
        }
        function l2(a3, b2, c3, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c3.containerInfo || b2.stateNode.implementation !== c3.implementation)
            return b2 = zh(c3, a3.mode, d2), b2.return = a3, b2;
          b2 = e(b2, c3.children || []);
          b2.return = a3;
          return b2;
        }
        function m(a3, b2, c3, d2, f3) {
          if (null === b2 || 7 !== b2.tag)
            return b2 = Ah(c3, a3.mode, d2, f3), b2.return = a3, b2;
          b2 = e(b2, c3);
          b2.return = a3;
          return b2;
        }
        function q2(a3, b2, c3) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
            return b2 = xh("" + b2, a3.mode, c3), b2.return = a3, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c3 = yh(b2.type, b2.key, b2.props, null, a3.mode, c3), c3.ref = sh(a3, null, b2), c3.return = a3, c3;
              case wa:
                return b2 = zh(b2, a3.mode, c3), b2.return = a3, b2;
              case Ha:
                var d2 = b2._init;
                return q2(a3, d2(b2._payload), c3);
            }
            if (eb(b2) || Ka(b2))
              return b2 = Ah(b2, a3.mode, c3, null), b2.return = a3, b2;
            th(a3, b2);
          }
          return null;
        }
        function r2(a3, b2, c3, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
            return null !== e2 ? null : h(a3, b2, "" + c3, d2);
          if ("object" === typeof c3 && null !== c3) {
            switch (c3.$$typeof) {
              case va:
                return c3.key === e2 ? k2(a3, b2, c3, d2) : null;
              case wa:
                return c3.key === e2 ? l2(a3, b2, c3, d2) : null;
              case Ha:
                return e2 = c3._init, r2(
                  a3,
                  b2,
                  e2(c3._payload),
                  d2
                );
            }
            if (eb(c3) || Ka(c3))
              return null !== e2 ? null : m(a3, b2, c3, d2, null);
            th(a3, c3);
          }
          return null;
        }
        function y2(a3, b2, c3, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
            return a3 = a3.get(c3) || null, h(b2, a3, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a3 = a3.get(null === d2.key ? c3 : d2.key) || null, k2(b2, a3, d2, e2);
              case wa:
                return a3 = a3.get(null === d2.key ? c3 : d2.key) || null, l2(b2, a3, d2, e2);
              case Ha:
                var f3 = d2._init;
                return y2(a3, b2, c3, f3(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2))
              return a3 = a3.get(c3) || null, m(b2, a3, d2, e2, null);
            th(b2, d2);
          }
          return null;
        }
        function n(e2, g2, h2, k3) {
          for (var l3 = null, m2 = null, u2 = g2, w = g2 = 0, x2 = null; null !== u2 && w < h2.length; w++) {
            u2.index > w ? (x2 = u2, u2 = null) : x2 = u2.sibling;
            var n2 = r2(e2, u2, h2[w], k3);
            if (null === n2) {
              null === u2 && (u2 = x2);
              break;
            }
            a2 && u2 && null === n2.alternate && b(e2, u2);
            g2 = f2(n2, g2, w);
            null === m2 ? l3 = n2 : m2.sibling = n2;
            m2 = n2;
            u2 = x2;
          }
          if (w === h2.length)
            return c2(e2, u2), I2 && tg(e2, w), l3;
          if (null === u2) {
            for (; w < h2.length; w++)
              u2 = q2(e2, h2[w], k3), null !== u2 && (g2 = f2(u2, g2, w), null === m2 ? l3 = u2 : m2.sibling = u2, m2 = u2);
            I2 && tg(e2, w);
            return l3;
          }
          for (u2 = d(e2, u2); w < h2.length; w++)
            x2 = y2(u2, e2, w, h2[w], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w : x2.key), g2 = f2(x2, g2, w), null === m2 ? l3 = x2 : m2.sibling = x2, m2 = x2);
          a2 && u2.forEach(function(a3) {
            return b(e2, a3);
          });
          I2 && tg(e2, w);
          return l3;
        }
        function t(e2, g2, h2, k3) {
          var l3 = Ka(h2);
          if ("function" !== typeof l3)
            throw Error(p2(150));
          h2 = l3.call(h2);
          if (null == h2)
            throw Error(p2(151));
          for (var u2 = l3 = null, m2 = g2, w = g2 = 0, x2 = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x2 = m2, m2 = null) : x2 = m2.sibling;
            var t2 = r2(e2, m2, n2.value, k3);
            if (null === t2) {
              null === m2 && (m2 = x2);
              break;
            }
            a2 && m2 && null === t2.alternate && b(e2, m2);
            g2 = f2(t2, g2, w);
            null === u2 ? l3 = t2 : u2.sibling = t2;
            u2 = t2;
            m2 = x2;
          }
          if (n2.done)
            return c2(
              e2,
              m2
            ), I2 && tg(e2, w), l3;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next())
              n2 = q2(e2, n2.value, k3), null !== n2 && (g2 = f2(n2, g2, w), null === u2 ? l3 = n2 : u2.sibling = n2, u2 = n2);
            I2 && tg(e2, w);
            return l3;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next())
            n2 = y2(m2, e2, w, n2.value, k3), null !== n2 && (a2 && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f2(n2, g2, w), null === u2 ? l3 = n2 : u2.sibling = n2, u2 = n2);
          a2 && m2.forEach(function(a3) {
            return b(e2, a3);
          });
          I2 && tg(e2, w);
          return l3;
        }
        function J2(a3, d2, f3, h2) {
          "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va:
                a: {
                  for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k3) {
                      k3 = f3.type;
                      if (k3 === ya) {
                        if (7 === l3.tag) {
                          c2(a3, l3.sibling);
                          d2 = e(l3, f3.props.children);
                          d2.return = a3;
                          a3 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                        c2(a3, l3.sibling);
                        d2 = e(l3, f3.props);
                        d2.ref = sh(a3, l3, f3);
                        d2.return = a3;
                        a3 = d2;
                        break a;
                      }
                      c2(a3, l3);
                      break;
                    } else
                      b(a3, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya ? (d2 = Ah(f3.props.children, a3.mode, h2, f3.key), d2.return = a3, a3 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a3.mode, h2), h2.ref = sh(a3, d2, f3), h2.return = a3, a3 = h2);
                }
                return g(a3);
              case wa:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3)
                      if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                        c2(a3, d2.sibling);
                        d2 = e(d2, f3.children || []);
                        d2.return = a3;
                        a3 = d2;
                        break a;
                      } else {
                        c2(a3, d2);
                        break;
                      }
                    else
                      b(a3, d2);
                    d2 = d2.sibling;
                  }
                  d2 = zh(f3, a3.mode, h2);
                  d2.return = a3;
                  a3 = d2;
                }
                return g(a3);
              case Ha:
                return l3 = f3._init, J2(a3, d2, l3(f3._payload), h2);
            }
            if (eb(f3))
              return n(a3, d2, f3, h2);
            if (Ka(f3))
              return t(a3, d2, f3, h2);
            th(a3, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c2(a3, d2.sibling), d2 = e(d2, f3), d2.return = a3, a3 = d2) : (c2(a3, d2), d2 = xh(f3, a3.mode, h2), d2.return = a3, a3 = d2), g(a3)) : c2(a3, d2);
        }
        return J2;
      }
      var Bh = vh(true);
      var Ch = vh(false);
      var Dh = {};
      var Eh = Uf(Dh);
      var Fh = Uf(Dh);
      var Gh = Uf(Dh);
      function Hh(a2) {
        if (a2 === Dh)
          throw Error(p2(174));
        return a2;
      }
      function Ih(a2, b) {
        G2(Gh, b);
        G2(Fh, a2);
        G2(Eh, Dh);
        a2 = b.nodeType;
        switch (a2) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a2 = 8 === a2 ? b.parentNode : b, b = a2.namespaceURI || null, a2 = a2.tagName, b = lb(b, a2);
        }
        E2(Eh);
        G2(Eh, b);
      }
      function Jh() {
        E2(Eh);
        E2(Fh);
        E2(Gh);
      }
      function Kh(a2) {
        Hh(Gh.current);
        var b = Hh(Eh.current);
        var c2 = lb(b, a2.type);
        b !== c2 && (G2(Fh, a2), G2(Eh, c2));
      }
      function Lh(a2) {
        Fh.current === a2 && (E2(Eh), E2(Fh));
      }
      var M2 = Uf(0);
      function Mh(a2) {
        for (var b = a2; null !== b; ) {
          if (13 === b.tag) {
            var c2 = b.memoizedState;
            if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
              return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128))
              return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a2)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a2)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Nh = [];
      function Oh() {
        for (var a2 = 0; a2 < Nh.length; a2++)
          Nh[a2]._workInProgressVersionPrimary = null;
        Nh.length = 0;
      }
      var Ph = ua.ReactCurrentDispatcher;
      var Qh = ua.ReactCurrentBatchConfig;
      var Rh = 0;
      var N2 = null;
      var O2 = null;
      var P2 = null;
      var Sh = false;
      var Th = false;
      var Uh = 0;
      var Vh = 0;
      function Q2() {
        throw Error(p2(321));
      }
      function Wh(a2, b) {
        if (null === b)
          return false;
        for (var c2 = 0; c2 < b.length && c2 < a2.length; c2++)
          if (!He2(a2[c2], b[c2]))
            return false;
        return true;
      }
      function Xh(a2, b, c2, d, e, f2) {
        Rh = f2;
        N2 = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
        a2 = c2(d, e);
        if (Th) {
          f2 = 0;
          do {
            Th = false;
            Uh = 0;
            if (25 <= f2)
              throw Error(p2(301));
            f2 += 1;
            P2 = O2 = null;
            b.updateQueue = null;
            Ph.current = $h;
            a2 = c2(d, e);
          } while (Th);
        }
        Ph.current = ai;
        b = null !== O2 && null !== O2.next;
        Rh = 0;
        P2 = O2 = N2 = null;
        Sh = false;
        if (b)
          throw Error(p2(300));
        return a2;
      }
      function bi() {
        var a2 = 0 !== Uh;
        Uh = 0;
        return a2;
      }
      function ci() {
        var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === P2 ? N2.memoizedState = P2 = a2 : P2 = P2.next = a2;
        return P2;
      }
      function di() {
        if (null === O2) {
          var a2 = N2.alternate;
          a2 = null !== a2 ? a2.memoizedState : null;
        } else
          a2 = O2.next;
        var b = null === P2 ? N2.memoizedState : P2.next;
        if (null !== b)
          P2 = b, O2 = a2;
        else {
          if (null === a2)
            throw Error(p2(310));
          O2 = a2;
          a2 = { memoizedState: O2.memoizedState, baseState: O2.baseState, baseQueue: O2.baseQueue, queue: O2.queue, next: null };
          null === P2 ? N2.memoizedState = P2 = a2 : P2 = P2.next = a2;
        }
        return P2;
      }
      function ei(a2, b) {
        return "function" === typeof b ? b(a2) : b;
      }
      function fi(a2) {
        var b = di(), c2 = b.queue;
        if (null === c2)
          throw Error(p2(311));
        c2.lastRenderedReducer = a2;
        var d = O2, e = d.baseQueue, f2 = c2.pending;
        if (null !== f2) {
          if (null !== e) {
            var g = e.next;
            e.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e = f2;
          c2.pending = null;
        }
        if (null !== e) {
          f2 = e.next;
          d = d.baseState;
          var h = g = null, k2 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Rh & m) === m)
              null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a2(d, l2.action);
            else {
              var q2 = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
              N2.lanes |= m;
              hh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k2 ? g = d : k2.next = h;
          He2(d, b.memoizedState) || (Ug = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k2;
          c2.lastRenderedState = d;
        }
        a2 = c2.interleaved;
        if (null !== a2) {
          e = a2;
          do
            f2 = e.lane, N2.lanes |= f2, hh |= f2, e = e.next;
          while (e !== a2);
        } else
          null === e && (c2.lanes = 0);
        return [b.memoizedState, c2.dispatch];
      }
      function gi(a2) {
        var b = di(), c2 = b.queue;
        if (null === c2)
          throw Error(p2(311));
        c2.lastRenderedReducer = a2;
        var d = c2.dispatch, e = c2.pending, f2 = b.memoizedState;
        if (null !== e) {
          c2.pending = null;
          var g = e = e.next;
          do
            f2 = a2(f2, g.action), g = g.next;
          while (g !== e);
          He2(f2, b.memoizedState) || (Ug = true);
          b.memoizedState = f2;
          null === b.baseQueue && (b.baseState = f2);
          c2.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function hi() {
      }
      function ii(a2, b) {
        var c2 = N2, d = di(), e = b(), f2 = !He2(d.memoizedState, e);
        f2 && (d.memoizedState = e, Ug = true);
        d = d.queue;
        ji(ki.bind(null, c2, d, a2), [a2]);
        if (d.getSnapshot !== b || f2 || null !== P2 && P2.memoizedState.tag & 1) {
          c2.flags |= 2048;
          li(9, mi.bind(null, c2, d, e, b), void 0, null);
          if (null === R2)
            throw Error(p2(349));
          0 !== (Rh & 30) || ni(c2, b, e);
        }
        return e;
      }
      function ni(a2, b, c2) {
        a2.flags |= 16384;
        a2 = { getSnapshot: b, value: c2 };
        b = N2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, N2.updateQueue = b, b.stores = [a2]) : (c2 = b.stores, null === c2 ? b.stores = [a2] : c2.push(a2));
      }
      function mi(a2, b, c2, d) {
        b.value = c2;
        b.getSnapshot = d;
        oi(b) && pi(a2);
      }
      function ki(a2, b, c2) {
        return c2(function() {
          oi(b) && pi(a2);
        });
      }
      function oi(a2) {
        var b = a2.getSnapshot;
        a2 = a2.value;
        try {
          var c2 = b();
          return !He2(a2, c2);
        } catch (d) {
          return true;
        }
      }
      function pi(a2) {
        var b = Zg(a2, 1);
        null !== b && mh(b, a2, 1, -1);
      }
      function qi(a2) {
        var b = ci();
        "function" === typeof a2 && (a2 = a2());
        b.memoizedState = b.baseState = a2;
        a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
        b.queue = a2;
        a2 = a2.dispatch = ri.bind(null, N2, a2);
        return [b.memoizedState, a2];
      }
      function li(a2, b, c2, d) {
        a2 = { tag: a2, create: b, destroy: c2, deps: d, next: null };
        b = N2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, N2.updateQueue = b, b.lastEffect = a2.next = a2) : (c2 = b.lastEffect, null === c2 ? b.lastEffect = a2.next = a2 : (d = c2.next, c2.next = a2, a2.next = d, b.lastEffect = a2));
        return a2;
      }
      function si() {
        return di().memoizedState;
      }
      function ti(a2, b, c2, d) {
        var e = ci();
        N2.flags |= a2;
        e.memoizedState = li(1 | b, c2, void 0, void 0 === d ? null : d);
      }
      function ui(a2, b, c2, d) {
        var e = di();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== O2) {
          var g = O2.memoizedState;
          f2 = g.destroy;
          if (null !== d && Wh(d, g.deps)) {
            e.memoizedState = li(b, c2, f2, d);
            return;
          }
        }
        N2.flags |= a2;
        e.memoizedState = li(1 | b, c2, f2, d);
      }
      function vi(a2, b) {
        return ti(8390656, 8, a2, b);
      }
      function ji(a2, b) {
        return ui(2048, 8, a2, b);
      }
      function wi(a2, b) {
        return ui(4, 2, a2, b);
      }
      function xi(a2, b) {
        return ui(4, 4, a2, b);
      }
      function yi(a2, b) {
        if ("function" === typeof b)
          return a2 = a2(), b(a2), function() {
            b(null);
          };
        if (null !== b && void 0 !== b)
          return a2 = a2(), b.current = a2, function() {
            b.current = null;
          };
      }
      function zi(a2, b, c2) {
        c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
        return ui(4, 4, yi.bind(null, b, a2), c2);
      }
      function Ai() {
      }
      function Bi(a2, b) {
        var c2 = di();
        b = void 0 === b ? null : b;
        var d = c2.memoizedState;
        if (null !== d && null !== b && Wh(b, d[1]))
          return d[0];
        c2.memoizedState = [a2, b];
        return a2;
      }
      function Ci(a2, b) {
        var c2 = di();
        b = void 0 === b ? null : b;
        var d = c2.memoizedState;
        if (null !== d && null !== b && Wh(b, d[1]))
          return d[0];
        a2 = a2();
        c2.memoizedState = [a2, b];
        return a2;
      }
      function Di(a2, b, c2) {
        if (0 === (Rh & 21))
          return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
        He2(c2, b) || (c2 = yc(), N2.lanes |= c2, hh |= c2, a2.baseState = true);
        return b;
      }
      function Ei(a2, b) {
        var c2 = C2;
        C2 = 0 !== c2 && 4 > c2 ? c2 : 4;
        a2(true);
        var d = Qh.transition;
        Qh.transition = {};
        try {
          a2(false), b();
        } finally {
          C2 = c2, Qh.transition = d;
        }
      }
      function Fi() {
        return di().memoizedState;
      }
      function Gi(a2, b, c2) {
        var d = lh(a2);
        c2 = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a2))
          Ii(b, c2);
        else if (c2 = Yg(a2, b, c2, d), null !== c2) {
          var e = L2();
          mh(c2, a2, d, e);
          Ji(c2, b, d);
        }
      }
      function ri(a2, b, c2) {
        var d = lh(a2), e = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a2))
          Ii(b, e);
        else {
          var f2 = a2.alternate;
          if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
            try {
              var g = b.lastRenderedState, h = f2(g, c2);
              e.hasEagerState = true;
              e.eagerState = h;
              if (He2(h, g)) {
                var k2 = b.interleaved;
                null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
                b.interleaved = e;
                return;
              }
            } catch (l2) {
            } finally {
            }
          c2 = Yg(a2, b, e, d);
          null !== c2 && (e = L2(), mh(c2, a2, d, e), Ji(c2, b, d));
        }
      }
      function Hi(a2) {
        var b = a2.alternate;
        return a2 === N2 || null !== b && b === N2;
      }
      function Ii(a2, b) {
        Th = Sh = true;
        var c2 = a2.pending;
        null === c2 ? b.next = b : (b.next = c2.next, c2.next = b);
        a2.pending = b;
      }
      function Ji(a2, b, c2) {
        if (0 !== (c2 & 4194240)) {
          var d = b.lanes;
          d &= a2.pendingLanes;
          c2 |= d;
          b.lanes = c2;
          Cc(a2, c2);
        }
      }
      var ai = { readContext: Vg, useCallback: Q2, useContext: Q2, useEffect: Q2, useImperativeHandle: Q2, useInsertionEffect: Q2, useLayoutEffect: Q2, useMemo: Q2, useReducer: Q2, useRef: Q2, useState: Q2, useDebugValue: Q2, useDeferredValue: Q2, useTransition: Q2, useMutableSource: Q2, useSyncExternalStore: Q2, useId: Q2, unstable_isNewReconciler: false };
      var Yh = { readContext: Vg, useCallback: function(a2, b) {
        ci().memoizedState = [a2, void 0 === b ? null : b];
        return a2;
      }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b, c2) {
        c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
        return ti(
          4194308,
          4,
          yi.bind(null, b, a2),
          c2
        );
      }, useLayoutEffect: function(a2, b) {
        return ti(4194308, 4, a2, b);
      }, useInsertionEffect: function(a2, b) {
        return ti(4, 2, a2, b);
      }, useMemo: function(a2, b) {
        var c2 = ci();
        b = void 0 === b ? null : b;
        a2 = a2();
        c2.memoizedState = [a2, b];
        return a2;
      }, useReducer: function(a2, b, c2) {
        var d = ci();
        b = void 0 !== c2 ? c2(b) : b;
        d.memoizedState = d.baseState = b;
        a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b };
        d.queue = a2;
        a2 = a2.dispatch = Gi.bind(null, N2, a2);
        return [d.memoizedState, a2];
      }, useRef: function(a2) {
        var b = ci();
        a2 = { current: a2 };
        return b.memoizedState = a2;
      }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
        return ci().memoizedState = a2;
      }, useTransition: function() {
        var a2 = qi(false), b = a2[0];
        a2 = Ei.bind(null, a2[1]);
        ci().memoizedState = a2;
        return [b, a2];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a2, b, c2) {
        var d = N2, e = ci();
        if (I2) {
          if (void 0 === c2)
            throw Error(p2(407));
          c2 = c2();
        } else {
          c2 = b();
          if (null === R2)
            throw Error(p2(349));
          0 !== (Rh & 30) || ni(d, b, c2);
        }
        e.memoizedState = c2;
        var f2 = { value: c2, getSnapshot: b };
        e.queue = f2;
        vi(ki.bind(
          null,
          d,
          f2,
          a2
        ), [a2]);
        d.flags |= 2048;
        li(9, mi.bind(null, d, f2, c2, b), void 0, null);
        return c2;
      }, useId: function() {
        var a2 = ci(), b = R2.identifierPrefix;
        if (I2) {
          var c2 = sg;
          var d = rg;
          c2 = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c2;
          b = ":" + b + "R" + c2;
          c2 = Uh++;
          0 < c2 && (b += "H" + c2.toString(32));
          b += ":";
        } else
          c2 = Vh++, b = ":" + b + "r" + c2.toString(32) + ":";
        return a2.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Zh = {
        readContext: Vg,
        useCallback: Bi,
        useContext: Vg,
        useEffect: ji,
        useImperativeHandle: zi,
        useInsertionEffect: wi,
        useLayoutEffect: xi,
        useMemo: Ci,
        useReducer: fi,
        useRef: si,
        useState: function() {
          return fi(ei);
        },
        useDebugValue: Ai,
        useDeferredValue: function(a2) {
          var b = di();
          return Di(b, O2.memoizedState, a2);
        },
        useTransition: function() {
          var a2 = fi(ei)[0], b = di().memoizedState;
          return [a2, b];
        },
        useMutableSource: hi,
        useSyncExternalStore: ii,
        useId: Fi,
        unstable_isNewReconciler: false
      };
      var $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
        return gi(ei);
      }, useDebugValue: Ai, useDeferredValue: function(a2) {
        var b = di();
        return null === O2 ? b.memoizedState = a2 : Di(b, O2.memoizedState, a2);
      }, useTransition: function() {
        var a2 = gi(ei)[0], b = di().memoizedState;
        return [a2, b];
      }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
      function Ki(a2, b) {
        try {
          var c2 = "", d = b;
          do
            c2 += Pa(d), d = d.return;
          while (d);
          var e = c2;
        } catch (f2) {
          e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a2, source: b, stack: e, digest: null };
      }
      function Li(a2, b, c2) {
        return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b ? b : null };
      }
      function Mi(a2, b) {
        try {
          console.error(b.value);
        } catch (c2) {
          setTimeout(function() {
            throw c2;
          });
        }
      }
      var Ni = "function" === typeof WeakMap ? WeakMap : Map;
      function Oi(a2, b, c2) {
        c2 = ch(-1, c2);
        c2.tag = 3;
        c2.payload = { element: null };
        var d = b.value;
        c2.callback = function() {
          Pi || (Pi = true, Qi = d);
          Mi(a2, b);
        };
        return c2;
      }
      function Ri(a2, b, c2) {
        c2 = ch(-1, c2);
        c2.tag = 3;
        var d = a2.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c2.payload = function() {
            return d(e);
          };
          c2.callback = function() {
            Mi(a2, b);
          };
        }
        var f2 = a2.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
          Mi(a2, b);
          "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
          var c3 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c3 ? c3 : "" });
        });
        return c2;
      }
      function Ti(a2, b, c2) {
        var d = a2.pingCache;
        if (null === d) {
          d = a2.pingCache = new Ni();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else
          e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c2) || (e.add(c2), a2 = Ui.bind(null, a2, b, c2), b.then(a2, a2));
      }
      function Vi(a2) {
        do {
          var b;
          if (b = 13 === a2.tag)
            b = a2.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b)
            return a2;
          a2 = a2.return;
        } while (null !== a2);
        return null;
      }
      function Wi(a2, b, c2, d, e) {
        if (0 === (a2.mode & 1))
          return a2 === b ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c2, b, 1))), c2.lanes |= 1), a2;
        a2.flags |= 65536;
        a2.lanes = e;
        return a2;
      }
      var Xi = ua.ReactCurrentOwner;
      var Ug = false;
      function Yi(a2, b, c2, d) {
        b.child = null === a2 ? Ch(b, null, c2, d) : Bh(b, a2.child, c2, d);
      }
      function Zi(a2, b, c2, d, e) {
        c2 = c2.render;
        var f2 = b.ref;
        Tg(b, e);
        d = Xh(a2, b, c2, d, f2, e);
        c2 = bi();
        if (null !== a2 && !Ug)
          return b.updateQueue = a2.updateQueue, b.flags &= -2053, a2.lanes &= ~e, $i(a2, b, e);
        I2 && c2 && vg(b);
        b.flags |= 1;
        Yi(a2, b, d, e);
        return b.child;
      }
      function aj(a2, b, c2, d, e) {
        if (null === a2) {
          var f2 = c2.type;
          if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
            return b.tag = 15, b.type = f2, cj(a2, b, f2, d, e);
          a2 = yh(c2.type, null, d, b, b.mode, e);
          a2.ref = b.ref;
          a2.return = b;
          return b.child = a2;
        }
        f2 = a2.child;
        if (0 === (a2.lanes & e)) {
          var g = f2.memoizedProps;
          c2 = c2.compare;
          c2 = null !== c2 ? c2 : Ie2;
          if (c2(g, d) && a2.ref === b.ref)
            return $i(a2, b, e);
        }
        b.flags |= 1;
        a2 = wh(f2, d);
        a2.ref = b.ref;
        a2.return = b;
        return b.child = a2;
      }
      function cj(a2, b, c2, d, e) {
        if (null !== a2) {
          var f2 = a2.memoizedProps;
          if (Ie2(f2, d) && a2.ref === b.ref)
            if (Ug = false, b.pendingProps = d = f2, 0 !== (a2.lanes & e))
              0 !== (a2.flags & 131072) && (Ug = true);
            else
              return b.lanes = a2.lanes, $i(a2, b, e);
        }
        return dj(a2, b, c2, d, e);
      }
      function ej(a2, b, c2) {
        var d = b.pendingProps, e = d.children, f2 = null !== a2 ? a2.memoizedState : null;
        if ("hidden" === d.mode)
          if (0 === (b.mode & 1))
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(fj, gj), gj |= c2;
          else {
            if (0 === (c2 & 1073741824))
              return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b.updateQueue = null, G2(fj, gj), gj |= a2, null;
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
            d = null !== f2 ? f2.baseLanes : c2;
            G2(fj, gj);
            gj |= d;
          }
        else
          null !== f2 ? (d = f2.baseLanes | c2, b.memoizedState = null) : d = c2, G2(fj, gj), gj |= d;
        Yi(a2, b, e, c2);
        return b.child;
      }
      function hj(a2, b) {
        var c2 = b.ref;
        if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
          b.flags |= 512, b.flags |= 2097152;
      }
      function dj(a2, b, c2, d, e) {
        var f2 = Zf(c2) ? Xf : H2.current;
        f2 = Yf(b, f2);
        Tg(b, e);
        c2 = Xh(a2, b, c2, d, f2, e);
        d = bi();
        if (null !== a2 && !Ug)
          return b.updateQueue = a2.updateQueue, b.flags &= -2053, a2.lanes &= ~e, $i(a2, b, e);
        I2 && d && vg(b);
        b.flags |= 1;
        Yi(a2, b, c2, e);
        return b.child;
      }
      function ij(a2, b, c2, d, e) {
        if (Zf(c2)) {
          var f2 = true;
          cg(b);
        } else
          f2 = false;
        Tg(b, e);
        if (null === b.stateNode)
          jj(a2, b), ph(b, c2, d), rh(b, c2, d, e), d = true;
        else if (null === a2) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k2 = g.context, l2 = c2.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H2.current, l2 = Yf(b, l2));
          var m = c2.getDerivedStateFromProps, q2 = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g, d, l2);
          $g = false;
          var r2 = b.memoizedState;
          g.state = r2;
          gh(b, d, g, e);
          k2 = b.memoizedState;
          h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m && (kh(b, c2, m, d), k2 = b.memoizedState), (h = $g || oh(b, c2, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          bh(a2, b);
          h = b.memoizedProps;
          l2 = b.type === b.elementType ? h : Lg(b.type, h);
          g.props = l2;
          q2 = b.pendingProps;
          r2 = g.context;
          k2 = c2.contextType;
          "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H2.current, k2 = Yf(b, k2));
          var y2 = c2.getDerivedStateFromProps;
          (m = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g, d, k2);
          $g = false;
          r2 = b.memoizedState;
          g.state = r2;
          gh(b, d, g, e);
          var n = b.memoizedState;
          h !== q2 || r2 !== n || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c2, y2, d), n = b.memoizedState), (l2 = $g || oh(b, c2, l2, d, r2, n, k2) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 1024), d = false);
        }
        return kj(a2, b, c2, d, f2, e);
      }
      function kj(a2, b, c2, d, e, f2) {
        hj(a2, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g)
          return e && dg(b, c2, false), $i(a2, b, f2);
        d = b.stateNode;
        Xi.current = b;
        var h = g && "function" !== typeof c2.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a2 && g ? (b.child = Bh(b, a2.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a2, b, h, f2);
        b.memoizedState = d.state;
        e && dg(b, c2, true);
        return b.child;
      }
      function lj(a2) {
        var b = a2.stateNode;
        b.pendingContext ? ag(a2, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a2, b.context, false);
        Ih(a2, b.containerInfo);
      }
      function mj(a2, b, c2, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Yi(a2, b, c2, d);
        return b.child;
      }
      var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function oj(a2) {
        return { baseLanes: a2, cachePool: null, transitions: null };
      }
      function pj(a2, b, c2) {
        var d = b.pendingProps, e = M2.current, f2 = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a2 && null === a2.memoizedState ? false : 0 !== (e & 2));
        if (h)
          f2 = true, b.flags &= -129;
        else if (null === a2 || null !== a2.memoizedState)
          e |= 1;
        G2(M2, e & 1);
        if (null === a2) {
          Eg(b);
          a2 = b.memoizedState;
          if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
            return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a2.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a2 = d.fallback;
          return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a2 = Ah(a2, d, c2, null), f2.return = b, a2.return = b, f2.sibling = a2, b.child = f2, b.child.memoizedState = oj(c2), b.memoizedState = nj, a2) : rj(b, g);
        }
        e = a2.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h))
          return sj(a2, b, g, d, h, e, c2);
        if (f2) {
          f2 = d.fallback;
          g = b.mode;
          e = a2.child;
          h = e.sibling;
          var k2 = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g, c2, null), f2.flags |= 2);
          f2.return = b;
          d.return = b;
          d.sibling = f2;
          b.child = d;
          d = f2;
          f2 = b.child;
          g = a2.child.memoizedState;
          g = null === g ? oj(c2) : { baseLanes: g.baseLanes | c2, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a2.childLanes & ~c2;
          b.memoizedState = nj;
          return d;
        }
        f2 = a2.child;
        a2 = f2.sibling;
        d = wh(f2, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c2);
        d.return = b;
        d.sibling = null;
        null !== a2 && (c2 = b.deletions, null === c2 ? (b.deletions = [a2], b.flags |= 16) : c2.push(a2));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function rj(a2, b) {
        b = qj({ mode: "visible", children: b }, a2.mode, 0, null);
        b.return = a2;
        return a2.child = b;
      }
      function tj(a2, b, c2, d) {
        null !== d && Jg(d);
        Bh(b, a2.child, null, c2);
        a2 = rj(b, b.pendingProps.children);
        a2.flags |= 2;
        b.memoizedState = null;
        return a2;
      }
      function sj(a2, b, c2, d, e, f2, g) {
        if (c2) {
          if (b.flags & 256)
            return b.flags &= -257, d = Li(Error(p2(422))), tj(a2, b, g, d);
          if (null !== b.memoizedState)
            return b.child = a2.child, b.flags |= 128, null;
          f2 = d.fallback;
          e = b.mode;
          d = qj({ mode: "visible", children: d.children }, e, 0, null);
          f2 = Ah(f2, e, g, null);
          f2.flags |= 2;
          d.return = b;
          f2.return = b;
          d.sibling = f2;
          b.child = d;
          0 !== (b.mode & 1) && Bh(b, a2.child, null, g);
          b.child.memoizedState = oj(g);
          b.memoizedState = nj;
          return f2;
        }
        if (0 === (b.mode & 1))
          return tj(a2, b, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d)
            var h = d.dgst;
          d = h;
          f2 = Error(p2(419));
          d = Li(f2, d, void 0);
          return tj(a2, b, g, d);
        }
        h = 0 !== (g & a2.childLanes);
        if (Ug || h) {
          d = R2;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
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
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a2, e), mh(d, a2, e, -1));
          }
          uj();
          d = Li(Error(p2(421)));
          return tj(a2, b, g, d);
        }
        if ("$?" === e.data)
          return b.flags |= 128, b.child = a2.child, b = vj.bind(null, a2), e._reactRetry = b, null;
        a2 = f2.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I2 = true;
        zg = null;
        null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b);
        b = rj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function wj(a2, b, c2) {
        a2.lanes |= b;
        var d = a2.alternate;
        null !== d && (d.lanes |= b);
        Sg(a2.return, b, c2);
      }
      function xj(a2, b, c2, d, e) {
        var f2 = a2.memoizedState;
        null === f2 ? a2.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c2, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c2, f2.tailMode = e);
      }
      function yj(a2, b, c2) {
        var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
        Yi(a2, b, d.children, c2);
        d = M2.current;
        if (0 !== (d & 2))
          d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a2 && 0 !== (a2.flags & 128))
            a:
              for (a2 = b.child; null !== a2; ) {
                if (13 === a2.tag)
                  null !== a2.memoizedState && wj(a2, c2, b);
                else if (19 === a2.tag)
                  wj(a2, c2, b);
                else if (null !== a2.child) {
                  a2.child.return = a2;
                  a2 = a2.child;
                  continue;
                }
                if (a2 === b)
                  break a;
                for (; null === a2.sibling; ) {
                  if (null === a2.return || a2.return === b)
                    break a;
                  a2 = a2.return;
                }
                a2.sibling.return = a2.return;
                a2 = a2.sibling;
              }
          d &= 1;
        }
        G2(M2, d);
        if (0 === (b.mode & 1))
          b.memoizedState = null;
        else
          switch (e) {
            case "forwards":
              c2 = b.child;
              for (e = null; null !== c2; )
                a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e = c2), c2 = c2.sibling;
              c2 = e;
              null === c2 ? (e = b.child, b.child = null) : (e = c2.sibling, c2.sibling = null);
              xj(b, false, e, c2, f2);
              break;
            case "backwards":
              c2 = null;
              e = b.child;
              for (b.child = null; null !== e; ) {
                a2 = e.alternate;
                if (null !== a2 && null === Mh(a2)) {
                  b.child = e;
                  break;
                }
                a2 = e.sibling;
                e.sibling = c2;
                c2 = e;
                e = a2;
              }
              xj(b, true, c2, null, f2);
              break;
            case "together":
              xj(b, false, null, null, void 0);
              break;
            default:
              b.memoizedState = null;
          }
        return b.child;
      }
      function jj(a2, b) {
        0 === (b.mode & 1) && null !== a2 && (a2.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function $i(a2, b, c2) {
        null !== a2 && (b.dependencies = a2.dependencies);
        hh |= b.lanes;
        if (0 === (c2 & b.childLanes))
          return null;
        if (null !== a2 && b.child !== a2.child)
          throw Error(p2(153));
        if (null !== b.child) {
          a2 = b.child;
          c2 = wh(a2, a2.pendingProps);
          b.child = c2;
          for (c2.return = b; null !== a2.sibling; )
            a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b;
          c2.sibling = null;
        }
        return b.child;
      }
      function zj(a2, b, c2) {
        switch (b.tag) {
          case 3:
            lj(b);
            Ig();
            break;
          case 5:
            Kh(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            Ih(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G2(Mg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated)
                return G2(M2, M2.current & 1), b.flags |= 128, null;
              if (0 !== (c2 & b.child.childLanes))
                return pj(a2, b, c2);
              G2(M2, M2.current & 1);
              a2 = $i(a2, b, c2);
              return null !== a2 ? a2.sibling : null;
            }
            G2(M2, M2.current & 1);
            break;
          case 19:
            d = 0 !== (c2 & b.childLanes);
            if (0 !== (a2.flags & 128)) {
              if (d)
                return yj(a2, b, c2);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G2(M2, M2.current);
            if (d)
              break;
            else
              return null;
          case 22:
          case 23:
            return b.lanes = 0, ej(a2, b, c2);
        }
        return $i(a2, b, c2);
      }
      var Aj;
      var Bj;
      var Cj;
      var Dj;
      Aj = function(a2, b) {
        for (var c2 = b.child; null !== c2; ) {
          if (5 === c2.tag || 6 === c2.tag)
            a2.appendChild(c2.stateNode);
          else if (4 !== c2.tag && null !== c2.child) {
            c2.child.return = c2;
            c2 = c2.child;
            continue;
          }
          if (c2 === b)
            break;
          for (; null === c2.sibling; ) {
            if (null === c2.return || c2.return === b)
              return;
            c2 = c2.return;
          }
          c2.sibling.return = c2.return;
          c2 = c2.sibling;
        }
      };
      Bj = function() {
      };
      Cj = function(a2, b, c2, d) {
        var e = a2.memoizedProps;
        if (e !== d) {
          a2 = b.stateNode;
          Hh(Eh.current);
          var f2 = null;
          switch (c2) {
            case "input":
              e = Ya(a2, e);
              d = Ya(a2, d);
              f2 = [];
              break;
            case "select":
              e = A2({}, e, { value: void 0 });
              d = A2({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e = gb(a2, e);
              d = gb(a2, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a2.onclick = Bf);
          }
          ub(c2, d);
          var g;
          c2 = null;
          for (l2 in e)
            if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
              if ("style" === l2) {
                var h = e[l2];
                for (g in h)
                  h.hasOwnProperty(g) && (c2 || (c2 = {}), c2[g] = "");
              } else
                "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k2 = d[l2];
            h = null != e ? e[l2] : void 0;
            if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
              if ("style" === l2)
                if (h) {
                  for (g in h)
                    !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c2 || (c2 = {}), c2[g] = "");
                  for (g in k2)
                    k2.hasOwnProperty(g) && h[g] !== k2[g] && (c2 || (c2 = {}), c2[g] = k2[g]);
                } else
                  c2 || (f2 || (f2 = []), f2.push(
                    l2,
                    c2
                  )), c2 = k2;
              else
                "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D2("scroll", a2), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
          }
          c2 && (f2 = f2 || []).push("style", c2);
          var l2 = f2;
          if (b.updateQueue = l2)
            b.flags |= 4;
        }
      };
      Dj = function(a2, b, c2, d) {
        c2 !== d && (b.flags |= 4);
      };
      function Ej(a2, b) {
        if (!I2)
          switch (a2.tailMode) {
            case "hidden":
              b = a2.tail;
              for (var c2 = null; null !== b; )
                null !== b.alternate && (c2 = b), b = b.sibling;
              null === c2 ? a2.tail = null : c2.sibling = null;
              break;
            case "collapsed":
              c2 = a2.tail;
              for (var d = null; null !== c2; )
                null !== c2.alternate && (d = c2), c2 = c2.sibling;
              null === d ? b || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d.sibling = null;
          }
      }
      function S(a2) {
        var b = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d = 0;
        if (b)
          for (var e = a2.child; null !== e; )
            c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a2, e = e.sibling;
        else
          for (e = a2.child; null !== e; )
            c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a2, e = e.sibling;
        a2.subtreeFlags |= d;
        a2.childLanes = c2;
        return b;
      }
      function Fj(a2, b, c2) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
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
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            Jh();
            E2(Wf);
            E2(H2);
            Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a2 || null === a2.child)
              Gg(b) ? b.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
            Bj(a2, b);
            S(b);
            return null;
          case 5:
            Lh(b);
            var e = Hh(Gh.current);
            c2 = b.type;
            if (null !== a2 && null != b.stateNode)
              Cj(a2, b, c2, d, e), a2.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode)
                  throw Error(p2(166));
                S(b);
                return null;
              }
              a2 = Hh(Eh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c2 = b.type;
                var f2 = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f2;
                a2 = 0 !== (b.mode & 1);
                switch (c2) {
                  case "dialog":
                    D2("cancel", d);
                    D2("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++)
                      D2(lf[e], d);
                    break;
                  case "source":
                    D2("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d
                    );
                    D2("load", d);
                    break;
                  case "details":
                    D2("toggle", d);
                    break;
                  case "input":
                    Za(d, f2);
                    D2("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D2("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D2("invalid", d);
                }
                ub(c2, f2);
                e = null;
                for (var g in f2)
                  if (f2.hasOwnProperty(g)) {
                    var h = f2[g];
                    "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a2), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                      d.textContent,
                      h,
                      a2
                    ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D2("scroll", d);
                  }
                switch (c2) {
                  case "input":
                    Va(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
                "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d.is ? a2 = g.createElement(c2, { is: d.is }) : (a2 = g.createElement(c2), "select" === c2 && (g = a2, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a2 = g.createElementNS(a2, c2);
                a2[Of] = b;
                a2[Pf] = d;
                Aj(a2, b, false, false);
                b.stateNode = a2;
                a: {
                  g = vb(c2, d);
                  switch (c2) {
                    case "dialog":
                      D2("cancel", a2);
                      D2("close", a2);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a2);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++)
                        D2(lf[e], a2);
                      e = d;
                      break;
                    case "source":
                      D2("error", a2);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a2
                      );
                      D2("load", a2);
                      e = d;
                      break;
                    case "details":
                      D2("toggle", a2);
                      e = d;
                      break;
                    case "input":
                      Za(a2, d);
                      e = Ya(a2, d);
                      D2("invalid", a2);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a2._wrapperState = { wasMultiple: !!d.multiple };
                      e = A2({}, d, { value: void 0 });
                      D2("invalid", a2);
                      break;
                    case "textarea":
                      hb(a2, d);
                      e = gb(a2, d);
                      D2("invalid", a2);
                      break;
                    default:
                      e = d;
                  }
                  ub(c2, e);
                  h = e;
                  for (f2 in h)
                    if (h.hasOwnProperty(f2)) {
                      var k2 = h[f2];
                      "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D2("scroll", a2) : null != k2 && ta(a2, f2, k2, g));
                    }
                  switch (c2) {
                    case "input":
                      Va(a2);
                      db(a2, d, false);
                      break;
                    case "textarea":
                      Va(a2);
                      jb(a2);
                      break;
                    case "option":
                      null != d.value && a2.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a2.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a2, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a2,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a2.onclick = Bf);
                  }
                  switch (c2) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a2 && null != b.stateNode)
              Dj(a2, b, a2.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode)
                throw Error(p2(166));
              c2 = Hh(Gh.current);
              Hh(Eh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c2 = b.memoizedProps;
                d[Of] = b;
                if (f2 = d.nodeValue !== c2) {
                  if (a2 = xg, null !== a2)
                    switch (a2.tag) {
                      case 3:
                        Af(d.nodeValue, c2, 0 !== (a2.mode & 1));
                        break;
                      case 5:
                        true !== a2.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c2, 0 !== (a2.mode & 1));
                    }
                }
                f2 && (b.flags |= 4);
              } else
                d = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E2(M2);
            d = b.memoizedState;
            if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
                Hg(), Ig(), b.flags |= 98560, f2 = false;
              else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a2) {
                  if (!f2)
                    throw Error(p2(318));
                  f2 = b.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2)
                    throw Error(p2(317));
                  f2[Of] = b;
                } else
                  Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f2 = false;
              } else
                null !== zg && (Gj(zg), zg = null), f2 = true;
              if (!f2)
                return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128))
              return b.lanes = c2, b;
            d = null !== d;
            d !== (null !== a2 && null !== a2.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a2 || 0 !== (M2.current & 1) ? 0 === T2 && (T2 = 3) : uj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return Jh(), Bj(a2, b), null === a2 && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return Rg(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E2(M2);
            f2 = b.memoizedState;
            if (null === f2)
              return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f2.rendering;
            if (null === g)
              if (d)
                Ej(f2, false);
              else {
                if (0 !== T2 || null !== a2 && 0 !== (a2.flags & 128))
                  for (a2 = b.child; null !== a2; ) {
                    g = Mh(a2);
                    if (null !== g) {
                      b.flags |= 128;
                      Ej(f2, false);
                      d = g.updateQueue;
                      null !== d && (b.updateQueue = d, b.flags |= 4);
                      b.subtreeFlags = 0;
                      d = c2;
                      for (c2 = b.child; null !== c2; )
                        f2 = c2, a2 = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a2 = g.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                      G2(M2, M2.current & 1 | 2);
                      return b.child;
                    }
                    a2 = a2.sibling;
                  }
                null !== f2.tail && B2() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
              }
            else {
              if (!d)
                if (a2 = Mh(g), null !== a2) {
                  if (b.flags |= 128, d = true, c2 = a2.updateQueue, null !== c2 && (b.updateQueue = c2, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I2)
                    return S(b), null;
                } else
                  2 * B2() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c2 = f2.last, null !== c2 ? c2.sibling = g : b.child = g, f2.last = g);
            }
            if (null !== f2.tail)
              return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B2(), b.sibling = null, c2 = M2.current, G2(M2, d ? c2 & 1 | 2 : c2 & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Ij(), d = null !== b.memoizedState, null !== a2 && null !== a2.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p2(156, b.tag));
      }
      function Jj(a2, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a2 = b.flags, a2 & 65536 ? (b.flags = a2 & -65537 | 128, b) : null;
          case 3:
            return Jh(), E2(Wf), E2(H2), Oh(), a2 = b.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b.flags = a2 & -65537 | 128, b) : null;
          case 5:
            return Lh(b), null;
          case 13:
            E2(M2);
            a2 = b.memoizedState;
            if (null !== a2 && null !== a2.dehydrated) {
              if (null === b.alternate)
                throw Error(p2(340));
              Ig();
            }
            a2 = b.flags;
            return a2 & 65536 ? (b.flags = a2 & -65537 | 128, b) : null;
          case 19:
            return E2(M2), null;
          case 4:
            return Jh(), null;
          case 10:
            return Rg(b.type._context), null;
          case 22:
          case 23:
            return Ij(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Kj = false;
      var U2 = false;
      var Lj = "function" === typeof WeakSet ? WeakSet : Set;
      var V2 = null;
      function Mj(a2, b) {
        var c2 = a2.ref;
        if (null !== c2)
          if ("function" === typeof c2)
            try {
              c2(null);
            } catch (d) {
              W2(a2, b, d);
            }
          else
            c2.current = null;
      }
      function Nj(a2, b, c2) {
        try {
          c2();
        } catch (d) {
          W2(a2, b, d);
        }
      }
      var Oj = false;
      function Pj(a2, b) {
        Cf = dd;
        a2 = Me2();
        if (Ne2(a2)) {
          if ("selectionStart" in a2)
            var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
          else
            a: {
              c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
              var d = c2.getSelection && c2.getSelection();
              if (d && 0 !== d.rangeCount) {
                c2 = d.anchorNode;
                var e = d.anchorOffset, f2 = d.focusNode;
                d = d.focusOffset;
                try {
                  c2.nodeType, f2.nodeType;
                } catch (F2) {
                  c2 = null;
                  break a;
                }
                var g = 0, h = -1, k2 = -1, l2 = 0, m = 0, q2 = a2, r2 = null;
                b:
                  for (; ; ) {
                    for (var y2; ; ) {
                      q2 !== c2 || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                      q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                      3 === q2.nodeType && (g += q2.nodeValue.length);
                      if (null === (y2 = q2.firstChild))
                        break;
                      r2 = q2;
                      q2 = y2;
                    }
                    for (; ; ) {
                      if (q2 === a2)
                        break b;
                      r2 === c2 && ++l2 === e && (h = g);
                      r2 === f2 && ++m === d && (k2 = g);
                      if (null !== (y2 = q2.nextSibling))
                        break;
                      q2 = r2;
                      r2 = q2.parentNode;
                    }
                    q2 = y2;
                  }
                c2 = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
              } else
                c2 = null;
            }
          c2 = c2 || { start: 0, end: 0 };
        } else
          c2 = null;
        Df = { focusedElem: a2, selectionRange: c2 };
        dd = false;
        for (V2 = b; null !== V2; )
          if (b = V2, a2 = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a2)
            a2.return = b, V2 = a2;
          else
            for (; null !== V2; ) {
              b = V2;
              try {
                var n = b.alternate;
                if (0 !== (b.flags & 1024))
                  switch (b.tag) {
                    case 0:
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if (null !== n) {
                        var t = n.memoizedProps, J2 = n.memoizedState, x2 = b.stateNode, w = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J2);
                        x2.__reactInternalSnapshotBeforeUpdate = w;
                      }
                      break;
                    case 3:
                      var u2 = b.stateNode.containerInfo;
                      1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                      break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      throw Error(p2(163));
                  }
              } catch (F2) {
                W2(b, b.return, F2);
              }
              a2 = b.sibling;
              if (null !== a2) {
                a2.return = b.return;
                V2 = a2;
                break;
              }
              V2 = b.return;
            }
        n = Oj;
        Oj = false;
        return n;
      }
      function Qj(a2, b, c2) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a2) === a2) {
              var f2 = e.destroy;
              e.destroy = void 0;
              void 0 !== f2 && Nj(b, c2, f2);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Rj(a2, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c2 = b = b.next;
          do {
            if ((c2.tag & a2) === a2) {
              var d = c2.create;
              c2.destroy = d();
            }
            c2 = c2.next;
          } while (c2 !== b);
        }
      }
      function Sj(a2) {
        var b = a2.ref;
        if (null !== b) {
          var c2 = a2.stateNode;
          switch (a2.tag) {
            case 5:
              a2 = c2;
              break;
            default:
              a2 = c2;
          }
          "function" === typeof b ? b(a2) : b.current = a2;
        }
      }
      function Tj(a2) {
        var b = a2.alternate;
        null !== b && (a2.alternate = null, Tj(b));
        a2.child = null;
        a2.deletions = null;
        a2.sibling = null;
        5 === a2.tag && (b = a2.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a2.stateNode = null;
        a2.return = null;
        a2.dependencies = null;
        a2.memoizedProps = null;
        a2.memoizedState = null;
        a2.pendingProps = null;
        a2.stateNode = null;
        a2.updateQueue = null;
      }
      function Uj(a2) {
        return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
      }
      function Vj(a2) {
        a:
          for (; ; ) {
            for (; null === a2.sibling; ) {
              if (null === a2.return || Uj(a2.return))
                return null;
              a2 = a2.return;
            }
            a2.sibling.return = a2.return;
            for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
              if (a2.flags & 2)
                continue a;
              if (null === a2.child || 4 === a2.tag)
                continue a;
              else
                a2.child.return = a2, a2 = a2.child;
            }
            if (!(a2.flags & 2))
              return a2.stateNode;
          }
      }
      function Wj(a2, b, c2) {
        var d = a2.tag;
        if (5 === d || 6 === d)
          a2 = a2.stateNode, b ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b) : c2.insertBefore(a2, b) : (8 === c2.nodeType ? (b = c2.parentNode, b.insertBefore(a2, c2)) : (b = c2, b.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a2 = a2.child, null !== a2))
          for (Wj(a2, b, c2), a2 = a2.sibling; null !== a2; )
            Wj(a2, b, c2), a2 = a2.sibling;
      }
      function Xj(a2, b, c2) {
        var d = a2.tag;
        if (5 === d || 6 === d)
          a2 = a2.stateNode, b ? c2.insertBefore(a2, b) : c2.appendChild(a2);
        else if (4 !== d && (a2 = a2.child, null !== a2))
          for (Xj(a2, b, c2), a2 = a2.sibling; null !== a2; )
            Xj(a2, b, c2), a2 = a2.sibling;
      }
      var X2 = null;
      var Yj = false;
      function Zj(a2, b, c2) {
        for (c2 = c2.child; null !== c2; )
          ak(a2, b, c2), c2 = c2.sibling;
      }
      function ak(a2, b, c2) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount)
          try {
            lc.onCommitFiberUnmount(kc, c2);
          } catch (h) {
          }
        switch (c2.tag) {
          case 5:
            U2 || Mj(c2, b);
          case 6:
            var d = X2, e = Yj;
            X2 = null;
            Zj(a2, b, c2);
            X2 = d;
            Yj = e;
            null !== X2 && (Yj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X2.removeChild(c2.stateNode));
            break;
          case 18:
            null !== X2 && (Yj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X2, c2.stateNode));
            break;
          case 4:
            d = X2;
            e = Yj;
            X2 = c2.stateNode.containerInfo;
            Yj = true;
            Zj(a2, b, c2);
            X2 = d;
            Yj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U2 && (d = c2.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f2 = e, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Nj(c2, b, g) : 0 !== (f2 & 4) && Nj(c2, b, g));
                e = e.next;
              } while (e !== d);
            }
            Zj(a2, b, c2);
            break;
          case 1:
            if (!U2 && (Mj(c2, b), d = c2.stateNode, "function" === typeof d.componentWillUnmount))
              try {
                d.props = c2.memoizedProps, d.state = c2.memoizedState, d.componentWillUnmount();
              } catch (h) {
                W2(c2, b, h);
              }
            Zj(a2, b, c2);
            break;
          case 21:
            Zj(a2, b, c2);
            break;
          case 22:
            c2.mode & 1 ? (U2 = (d = U2) || null !== c2.memoizedState, Zj(a2, b, c2), U2 = d) : Zj(a2, b, c2);
            break;
          default:
            Zj(a2, b, c2);
        }
      }
      function bk(a2) {
        var b = a2.updateQueue;
        if (null !== b) {
          a2.updateQueue = null;
          var c2 = a2.stateNode;
          null === c2 && (c2 = a2.stateNode = new Lj());
          b.forEach(function(b2) {
            var d = ck.bind(null, a2, b2);
            c2.has(b2) || (c2.add(b2), b2.then(d, d));
          });
        }
      }
      function dk(a2, b) {
        var c2 = b.deletions;
        if (null !== c2)
          for (var d = 0; d < c2.length; d++) {
            var e = c2[d];
            try {
              var f2 = a2, g = b, h = g;
              a:
                for (; null !== h; ) {
                  switch (h.tag) {
                    case 5:
                      X2 = h.stateNode;
                      Yj = false;
                      break a;
                    case 3:
                      X2 = h.stateNode.containerInfo;
                      Yj = true;
                      break a;
                    case 4:
                      X2 = h.stateNode.containerInfo;
                      Yj = true;
                      break a;
                  }
                  h = h.return;
                }
              if (null === X2)
                throw Error(p2(160));
              ak(f2, g, e);
              X2 = null;
              Yj = false;
              var k2 = e.alternate;
              null !== k2 && (k2.return = null);
              e.return = null;
            } catch (l2) {
              W2(e, b, l2);
            }
          }
        if (b.subtreeFlags & 12854)
          for (b = b.child; null !== b; )
            ek(b, a2), b = b.sibling;
      }
      function ek(a2, b) {
        var c2 = a2.alternate, d = a2.flags;
        switch (a2.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            dk(b, a2);
            fk(a2);
            if (d & 4) {
              try {
                Qj(3, a2, a2.return), Rj(3, a2);
              } catch (t) {
                W2(a2, a2.return, t);
              }
              try {
                Qj(5, a2, a2.return);
              } catch (t) {
                W2(a2, a2.return, t);
              }
            }
            break;
          case 1:
            dk(b, a2);
            fk(a2);
            d & 512 && null !== c2 && Mj(c2, c2.return);
            break;
          case 5:
            dk(b, a2);
            fk(a2);
            d & 512 && null !== c2 && Mj(c2, c2.return);
            if (a2.flags & 32) {
              var e = a2.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W2(a2, a2.return, t);
              }
            }
            if (d & 4 && (e = a2.stateNode, null != e)) {
              var f2 = a2.memoizedProps, g = null !== c2 ? c2.memoizedProps : f2, h = a2.type, k2 = a2.updateQueue;
              a2.updateQueue = null;
              if (null !== k2)
                try {
                  "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
                  vb(h, g);
                  var l2 = vb(h, f2);
                  for (g = 0; g < k2.length; g += 2) {
                    var m = k2[g], q2 = k2[g + 1];
                    "style" === m ? sb(e, q2) : "dangerouslySetInnerHTML" === m ? nb(e, q2) : "children" === m ? ob(e, q2) : ta(e, m, q2, l2);
                  }
                  switch (h) {
                    case "input":
                      bb(e, f2);
                      break;
                    case "textarea":
                      ib(e, f2);
                      break;
                    case "select":
                      var r2 = e._wrapperState.wasMultiple;
                      e._wrapperState.wasMultiple = !!f2.multiple;
                      var y2 = f2.value;
                      null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                        e,
                        !!f2.multiple,
                        f2.defaultValue,
                        true
                      ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
                  }
                  e[Pf] = f2;
                } catch (t) {
                  W2(a2, a2.return, t);
                }
            }
            break;
          case 6:
            dk(b, a2);
            fk(a2);
            if (d & 4) {
              if (null === a2.stateNode)
                throw Error(p2(162));
              e = a2.stateNode;
              f2 = a2.memoizedProps;
              try {
                e.nodeValue = f2;
              } catch (t) {
                W2(a2, a2.return, t);
              }
            }
            break;
          case 3:
            dk(b, a2);
            fk(a2);
            if (d & 4 && null !== c2 && c2.memoizedState.isDehydrated)
              try {
                bd(b.containerInfo);
              } catch (t) {
                W2(a2, a2.return, t);
              }
            break;
          case 4:
            dk(b, a2);
            fk(a2);
            break;
          case 13:
            dk(b, a2);
            fk(a2);
            e = a2.child;
            e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B2()));
            d & 4 && bk(a2);
            break;
          case 22:
            m = null !== c2 && null !== c2.memoizedState;
            a2.mode & 1 ? (U2 = (l2 = U2) || m, dk(b, a2), U2 = l2) : dk(b, a2);
            fk(a2);
            if (d & 8192) {
              l2 = null !== a2.memoizedState;
              if ((a2.stateNode.isHidden = l2) && !m && 0 !== (a2.mode & 1))
                for (V2 = a2, m = a2.child; null !== m; ) {
                  for (q2 = V2 = m; null !== V2; ) {
                    r2 = V2;
                    y2 = r2.child;
                    switch (r2.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Qj(4, r2, r2.return);
                        break;
                      case 1:
                        Mj(r2, r2.return);
                        var n = r2.stateNode;
                        if ("function" === typeof n.componentWillUnmount) {
                          d = r2;
                          c2 = r2.return;
                          try {
                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                          } catch (t) {
                            W2(d, c2, t);
                          }
                        }
                        break;
                      case 5:
                        Mj(r2, r2.return);
                        break;
                      case 22:
                        if (null !== r2.memoizedState) {
                          hk(q2);
                          continue;
                        }
                    }
                    null !== y2 ? (y2.return = r2, V2 = y2) : hk(q2);
                  }
                  m = m.sibling;
                }
              a:
                for (m = null, q2 = a2; ; ) {
                  if (5 === q2.tag) {
                    if (null === m) {
                      m = q2;
                      try {
                        e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                      } catch (t) {
                        W2(a2, a2.return, t);
                      }
                    }
                  } else if (6 === q2.tag) {
                    if (null === m)
                      try {
                        q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                      } catch (t) {
                        W2(a2, a2.return, t);
                      }
                  } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
                    q2.child.return = q2;
                    q2 = q2.child;
                    continue;
                  }
                  if (q2 === a2)
                    break a;
                  for (; null === q2.sibling; ) {
                    if (null === q2.return || q2.return === a2)
                      break a;
                    m === q2 && (m = null);
                    q2 = q2.return;
                  }
                  m === q2 && (m = null);
                  q2.sibling.return = q2.return;
                  q2 = q2.sibling;
                }
            }
            break;
          case 19:
            dk(b, a2);
            fk(a2);
            d & 4 && bk(a2);
            break;
          case 21:
            break;
          default:
            dk(
              b,
              a2
            ), fk(a2);
        }
      }
      function fk(a2) {
        var b = a2.flags;
        if (b & 2) {
          try {
            a: {
              for (var c2 = a2.return; null !== c2; ) {
                if (Uj(c2)) {
                  var d = c2;
                  break a;
                }
                c2 = c2.return;
              }
              throw Error(p2(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f2 = Vj(a2);
                Xj(a2, f2, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Vj(a2);
                Wj(a2, h, g);
                break;
              default:
                throw Error(p2(161));
            }
          } catch (k2) {
            W2(a2, a2.return, k2);
          }
          a2.flags &= -3;
        }
        b & 4096 && (a2.flags &= -4097);
      }
      function ik(a2, b, c2) {
        V2 = a2;
        jk(a2, b, c2);
      }
      function jk(a2, b, c2) {
        for (var d = 0 !== (a2.mode & 1); null !== V2; ) {
          var e = V2, f2 = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Kj;
            if (!g) {
              var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U2;
              h = Kj;
              var l2 = U2;
              Kj = g;
              if ((U2 = k2) && !l2)
                for (V2 = e; null !== V2; )
                  g = V2, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V2 = k2) : kk(e);
              for (; null !== f2; )
                V2 = f2, jk(f2, b, c2), f2 = f2.sibling;
              V2 = e;
              Kj = h;
              U2 = l2;
            }
            lk(a2, b, c2);
          } else
            0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V2 = f2) : lk(a2, b, c2);
        }
      }
      function lk(a2) {
        for (; null !== V2; ) {
          var b = V2;
          if (0 !== (b.flags & 8772)) {
            var c2 = b.alternate;
            try {
              if (0 !== (b.flags & 8772))
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    U2 || Rj(5, b);
                    break;
                  case 1:
                    var d = b.stateNode;
                    if (b.flags & 4 && !U2)
                      if (null === c2)
                        d.componentDidMount();
                      else {
                        var e = b.elementType === b.type ? c2.memoizedProps : Lg(b.type, c2.memoizedProps);
                        d.componentDidUpdate(e, c2.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                      }
                    var f2 = b.updateQueue;
                    null !== f2 && ih(b, f2, d);
                    break;
                  case 3:
                    var g = b.updateQueue;
                    if (null !== g) {
                      c2 = null;
                      if (null !== b.child)
                        switch (b.child.tag) {
                          case 5:
                            c2 = b.child.stateNode;
                            break;
                          case 1:
                            c2 = b.child.stateNode;
                        }
                      ih(b, g, c2);
                    }
                    break;
                  case 5:
                    var h = b.stateNode;
                    if (null === c2 && b.flags & 4) {
                      c2 = h;
                      var k2 = b.memoizedProps;
                      switch (b.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          k2.autoFocus && c2.focus();
                          break;
                        case "img":
                          k2.src && (c2.src = k2.src);
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
                    if (null === b.memoizedState) {
                      var l2 = b.alternate;
                      if (null !== l2) {
                        var m = l2.memoizedState;
                        if (null !== m) {
                          var q2 = m.dehydrated;
                          null !== q2 && bd(q2);
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
                    throw Error(p2(163));
                }
              U2 || b.flags & 512 && Sj(b);
            } catch (r2) {
              W2(b, b.return, r2);
            }
          }
          if (b === a2) {
            V2 = null;
            break;
          }
          c2 = b.sibling;
          if (null !== c2) {
            c2.return = b.return;
            V2 = c2;
            break;
          }
          V2 = b.return;
        }
      }
      function hk(a2) {
        for (; null !== V2; ) {
          var b = V2;
          if (b === a2) {
            V2 = null;
            break;
          }
          var c2 = b.sibling;
          if (null !== c2) {
            c2.return = b.return;
            V2 = c2;
            break;
          }
          V2 = b.return;
        }
      }
      function kk(a2) {
        for (; null !== V2; ) {
          var b = V2;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c2 = b.return;
                try {
                  Rj(4, b);
                } catch (k2) {
                  W2(b, c2, k2);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k2) {
                    W2(b, e, k2);
                  }
                }
                var f2 = b.return;
                try {
                  Sj(b);
                } catch (k2) {
                  W2(b, f2, k2);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Sj(b);
                } catch (k2) {
                  W2(b, g, k2);
                }
            }
          } catch (k2) {
            W2(b, b.return, k2);
          }
          if (b === a2) {
            V2 = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V2 = h;
            break;
          }
          V2 = b.return;
        }
      }
      var mk = Math.ceil;
      var nk = ua.ReactCurrentDispatcher;
      var ok = ua.ReactCurrentOwner;
      var pk = ua.ReactCurrentBatchConfig;
      var K2 = 0;
      var R2 = null;
      var Y2 = null;
      var Z2 = 0;
      var gj = 0;
      var fj = Uf(0);
      var T2 = 0;
      var qk = null;
      var hh = 0;
      var rk = 0;
      var sk = 0;
      var tk = null;
      var uk = null;
      var gk = 0;
      var Hj = Infinity;
      var vk = null;
      var Pi = false;
      var Qi = null;
      var Si = null;
      var wk = false;
      var xk = null;
      var yk = 0;
      var zk = 0;
      var Ak = null;
      var Bk = -1;
      var Ck = 0;
      function L2() {
        return 0 !== (K2 & 6) ? B2() : -1 !== Bk ? Bk : Bk = B2();
      }
      function lh(a2) {
        if (0 === (a2.mode & 1))
          return 1;
        if (0 !== (K2 & 2) && 0 !== Z2)
          return Z2 & -Z2;
        if (null !== Kg.transition)
          return 0 === Ck && (Ck = yc()), Ck;
        a2 = C2;
        if (0 !== a2)
          return a2;
        a2 = window.event;
        a2 = void 0 === a2 ? 16 : jd(a2.type);
        return a2;
      }
      function mh(a2, b, c2, d) {
        if (50 < zk)
          throw zk = 0, Ak = null, Error(p2(185));
        Ac(a2, c2, d);
        if (0 === (K2 & 2) || a2 !== R2)
          a2 === R2 && (0 === (K2 & 2) && (rk |= c2), 4 === T2 && Dk(a2, Z2)), Ek(a2, d), 1 === c2 && 0 === K2 && 0 === (b.mode & 1) && (Hj = B2() + 500, fg && jg());
      }
      function Ek(a2, b) {
        var c2 = a2.callbackNode;
        wc(a2, b);
        var d = uc(a2, a2 === R2 ? Z2 : 0);
        if (0 === d)
          null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
        else if (b = d & -d, a2.callbackPriority !== b) {
          null != c2 && bc(c2);
          if (1 === b)
            0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
              0 === (K2 & 6) && jg();
            }), c2 = null;
          else {
            switch (Dc(d)) {
              case 1:
                c2 = fc;
                break;
              case 4:
                c2 = gc;
                break;
              case 16:
                c2 = hc;
                break;
              case 536870912:
                c2 = jc;
                break;
              default:
                c2 = hc;
            }
            c2 = Gk(c2, Hk.bind(null, a2));
          }
          a2.callbackPriority = b;
          a2.callbackNode = c2;
        }
      }
      function Hk(a2, b) {
        Bk = -1;
        Ck = 0;
        if (0 !== (K2 & 6))
          throw Error(p2(327));
        var c2 = a2.callbackNode;
        if (Ik() && a2.callbackNode !== c2)
          return null;
        var d = uc(a2, a2 === R2 ? Z2 : 0);
        if (0 === d)
          return null;
        if (0 !== (d & 30) || 0 !== (d & a2.expiredLanes) || b)
          b = Jk(a2, d);
        else {
          b = d;
          var e = K2;
          K2 |= 2;
          var f2 = Kk();
          if (R2 !== a2 || Z2 !== b)
            vk = null, Hj = B2() + 500, Lk(a2, b);
          do
            try {
              Mk();
              break;
            } catch (h) {
              Nk(a2, h);
            }
          while (1);
          Qg();
          nk.current = f2;
          K2 = e;
          null !== Y2 ? b = 0 : (R2 = null, Z2 = 0, b = T2);
        }
        if (0 !== b) {
          2 === b && (e = xc(a2), 0 !== e && (d = e, b = Ok(a2, e)));
          if (1 === b)
            throw c2 = qk, Lk(a2, 0), Dk(a2, d), Ek(a2, B2()), c2;
          if (6 === b)
            Dk(a2, d);
          else {
            e = a2.current.alternate;
            if (0 === (d & 30) && !Pk(e) && (b = Jk(a2, d), 2 === b && (f2 = xc(a2), 0 !== f2 && (d = f2, b = Ok(a2, f2))), 1 === b))
              throw c2 = qk, Lk(a2, 0), Dk(a2, d), Ek(a2, B2()), c2;
            a2.finishedWork = e;
            a2.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p2(345));
              case 2:
                Qk(a2, uk, vk);
                break;
              case 3:
                Dk(a2, d);
                if ((d & 130023424) === d && (b = gk + 500 - B2(), 10 < b)) {
                  if (0 !== uc(a2, 0))
                    break;
                  e = a2.suspendedLanes;
                  if ((e & d) !== d) {
                    L2();
                    a2.pingedLanes |= a2.suspendedLanes & e;
                    break;
                  }
                  a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b);
                  break;
                }
                Qk(a2, uk, vk);
                break;
              case 4:
                Dk(a2, d);
                if ((d & 4194240) === d)
                  break;
                b = a2.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f2 = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f2;
                }
                d = e;
                d = B2() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
                if (10 < d) {
                  a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d);
                  break;
                }
                Qk(a2, uk, vk);
                break;
              case 5:
                Qk(a2, uk, vk);
                break;
              default:
                throw Error(p2(329));
            }
          }
        }
        Ek(a2, B2());
        return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
      }
      function Ok(a2, b) {
        var c2 = tk;
        a2.current.memoizedState.isDehydrated && (Lk(a2, b).flags |= 256);
        a2 = Jk(a2, b);
        2 !== a2 && (b = uk, uk = c2, null !== b && Gj(b));
        return a2;
      }
      function Gj(a2) {
        null === uk ? uk = a2 : uk.push.apply(uk, a2);
      }
      function Pk(a2) {
        for (var b = a2; ; ) {
          if (b.flags & 16384) {
            var c2 = b.updateQueue;
            if (null !== c2 && (c2 = c2.stores, null !== c2))
              for (var d = 0; d < c2.length; d++) {
                var e = c2[d], f2 = e.getSnapshot;
                e = e.value;
                try {
                  if (!He2(f2(), e))
                    return false;
                } catch (g) {
                  return false;
                }
              }
          }
          c2 = b.child;
          if (b.subtreeFlags & 16384 && null !== c2)
            c2.return = b, b = c2;
          else {
            if (b === a2)
              break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a2)
                return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Dk(a2, b) {
        b &= ~sk;
        b &= ~rk;
        a2.suspendedLanes |= b;
        a2.pingedLanes &= ~b;
        for (a2 = a2.expirationTimes; 0 < b; ) {
          var c2 = 31 - oc(b), d = 1 << c2;
          a2[c2] = -1;
          b &= ~d;
        }
      }
      function Fk(a2) {
        if (0 !== (K2 & 6))
          throw Error(p2(327));
        Ik();
        var b = uc(a2, 0);
        if (0 === (b & 1))
          return Ek(a2, B2()), null;
        var c2 = Jk(a2, b);
        if (0 !== a2.tag && 2 === c2) {
          var d = xc(a2);
          0 !== d && (b = d, c2 = Ok(a2, d));
        }
        if (1 === c2)
          throw c2 = qk, Lk(a2, 0), Dk(a2, b), Ek(a2, B2()), c2;
        if (6 === c2)
          throw Error(p2(345));
        a2.finishedWork = a2.current.alternate;
        a2.finishedLanes = b;
        Qk(a2, uk, vk);
        Ek(a2, B2());
        return null;
      }
      function Rk(a2, b) {
        var c2 = K2;
        K2 |= 1;
        try {
          return a2(b);
        } finally {
          K2 = c2, 0 === K2 && (Hj = B2() + 500, fg && jg());
        }
      }
      function Sk(a2) {
        null !== xk && 0 === xk.tag && 0 === (K2 & 6) && Ik();
        var b = K2;
        K2 |= 1;
        var c2 = pk.transition, d = C2;
        try {
          if (pk.transition = null, C2 = 1, a2)
            return a2();
        } finally {
          C2 = d, pk.transition = c2, K2 = b, 0 === (K2 & 6) && jg();
        }
      }
      function Ij() {
        gj = fj.current;
        E2(fj);
      }
      function Lk(a2, b) {
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        var c2 = a2.timeoutHandle;
        -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
        if (null !== Y2)
          for (c2 = Y2.return; null !== c2; ) {
            var d = c2;
            wg(d);
            switch (d.tag) {
              case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $f();
                break;
              case 3:
                Jh();
                E2(Wf);
                E2(H2);
                Oh();
                break;
              case 5:
                Lh(d);
                break;
              case 4:
                Jh();
                break;
              case 13:
                E2(M2);
                break;
              case 19:
                E2(M2);
                break;
              case 10:
                Rg(d.type._context);
                break;
              case 22:
              case 23:
                Ij();
            }
            c2 = c2.return;
          }
        R2 = a2;
        Y2 = a2 = wh(a2.current, null);
        Z2 = gj = b;
        T2 = 0;
        qk = null;
        sk = rk = hh = 0;
        uk = tk = null;
        if (null !== Wg) {
          for (b = 0; b < Wg.length; b++)
            if (c2 = Wg[b], d = c2.interleaved, null !== d) {
              c2.interleaved = null;
              var e = d.next, f2 = c2.pending;
              if (null !== f2) {
                var g = f2.next;
                f2.next = e;
                d.next = g;
              }
              c2.pending = d;
            }
          Wg = null;
        }
        return a2;
      }
      function Nk(a2, b) {
        do {
          var c2 = Y2;
          try {
            Qg();
            Ph.current = ai;
            if (Sh) {
              for (var d = N2.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Sh = false;
            }
            Rh = 0;
            P2 = O2 = N2 = null;
            Th = false;
            Uh = 0;
            ok.current = null;
            if (null === c2 || null === c2.return) {
              T2 = 1;
              qk = b;
              Y2 = null;
              break;
            }
            a: {
              var f2 = a2, g = c2.return, h = c2, k2 = b;
              b = Z2;
              h.flags |= 32768;
              if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
                var l2 = k2, m = h, q2 = m.tag;
                if (0 === (m.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                  var r2 = m.alternate;
                  r2 ? (m.updateQueue = r2.updateQueue, m.memoizedState = r2.memoizedState, m.lanes = r2.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y2 = Vi(g);
                if (null !== y2) {
                  y2.flags &= -257;
                  Wi(y2, g, h, f2, b);
                  y2.mode & 1 && Ti(f2, l2, b);
                  b = y2;
                  k2 = l2;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k2);
                    b.updateQueue = t;
                  } else
                    n.add(k2);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Ti(f2, l2, b);
                    uj();
                    break a;
                  }
                  k2 = Error(p2(426));
                }
              } else if (I2 && h.mode & 1) {
                var J2 = Vi(g);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Wi(J2, g, h, f2, b);
                  Jg(Ki(k2, h));
                  break a;
                }
              }
              f2 = k2 = Ki(k2, h);
              4 !== T2 && (T2 = 2);
              null === tk ? tk = [f2] : tk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var x2 = Oi(f2, k2, b);
                    fh(f2, x2);
                    break a;
                  case 1:
                    h = k2;
                    var w = f2.type, u2 = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                      f2.flags |= 65536;
                      b &= -b;
                      f2.lanes |= b;
                      var F2 = Ri(f2, h, b);
                      fh(f2, F2);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Tk(c2);
          } catch (na) {
            b = na;
            Y2 === c2 && null !== c2 && (Y2 = c2 = c2.return);
            continue;
          }
          break;
        } while (1);
      }
      function Kk() {
        var a2 = nk.current;
        nk.current = ai;
        return null === a2 ? ai : a2;
      }
      function uj() {
        if (0 === T2 || 3 === T2 || 2 === T2)
          T2 = 4;
        null === R2 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R2, Z2);
      }
      function Jk(a2, b) {
        var c2 = K2;
        K2 |= 2;
        var d = Kk();
        if (R2 !== a2 || Z2 !== b)
          vk = null, Lk(a2, b);
        do
          try {
            Uk();
            break;
          } catch (e) {
            Nk(a2, e);
          }
        while (1);
        Qg();
        K2 = c2;
        nk.current = d;
        if (null !== Y2)
          throw Error(p2(261));
        R2 = null;
        Z2 = 0;
        return T2;
      }
      function Uk() {
        for (; null !== Y2; )
          Vk(Y2);
      }
      function Mk() {
        for (; null !== Y2 && !cc(); )
          Vk(Y2);
      }
      function Vk(a2) {
        var b = Wk(a2.alternate, a2, gj);
        a2.memoizedProps = a2.pendingProps;
        null === b ? Tk(a2) : Y2 = b;
        ok.current = null;
      }
      function Tk(a2) {
        var b = a2;
        do {
          var c2 = b.alternate;
          a2 = b.return;
          if (0 === (b.flags & 32768)) {
            if (c2 = Fj(c2, b, gj), null !== c2) {
              Y2 = c2;
              return;
            }
          } else {
            c2 = Jj(c2, b);
            if (null !== c2) {
              c2.flags &= 32767;
              Y2 = c2;
              return;
            }
            if (null !== a2)
              a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
            else {
              T2 = 6;
              Y2 = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y2 = b;
            return;
          }
          Y2 = b = a2;
        } while (null !== b);
        0 === T2 && (T2 = 5);
      }
      function Qk(a2, b, c2) {
        var d = C2, e = pk.transition;
        try {
          pk.transition = null, C2 = 1, Xk(a2, b, c2, d);
        } finally {
          pk.transition = e, C2 = d;
        }
        return null;
      }
      function Xk(a2, b, c2, d) {
        do
          Ik();
        while (null !== xk);
        if (0 !== (K2 & 6))
          throw Error(p2(327));
        c2 = a2.finishedWork;
        var e = a2.finishedLanes;
        if (null === c2)
          return null;
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        if (c2 === a2.current)
          throw Error(p2(177));
        a2.callbackNode = null;
        a2.callbackPriority = 0;
        var f2 = c2.lanes | c2.childLanes;
        Bc(a2, f2);
        a2 === R2 && (Y2 = R2 = null, Z2 = 0);
        0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
          Ik();
          return null;
        }));
        f2 = 0 !== (c2.flags & 15990);
        if (0 !== (c2.subtreeFlags & 15990) || f2) {
          f2 = pk.transition;
          pk.transition = null;
          var g = C2;
          C2 = 1;
          var h = K2;
          K2 |= 4;
          ok.current = null;
          Pj(a2, c2);
          ek(c2, a2);
          Oe2(Df);
          dd = !!Cf;
          Df = Cf = null;
          a2.current = c2;
          ik(c2, a2, e);
          dc();
          K2 = h;
          C2 = g;
          pk.transition = f2;
        } else
          a2.current = c2;
        wk && (wk = false, xk = a2, yk = e);
        f2 = a2.pendingLanes;
        0 === f2 && (Si = null);
        mc(c2.stateNode, d);
        Ek(a2, B2());
        if (null !== b)
          for (d = a2.onRecoverableError, c2 = 0; c2 < b.length; c2++)
            e = b[c2], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Pi)
          throw Pi = false, a2 = Qi, Qi = null, a2;
        0 !== (yk & 1) && 0 !== a2.tag && Ik();
        f2 = a2.pendingLanes;
        0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
        jg();
        return null;
      }
      function Ik() {
        if (null !== xk) {
          var a2 = Dc(yk), b = pk.transition, c2 = C2;
          try {
            pk.transition = null;
            C2 = 16 > a2 ? 16 : a2;
            if (null === xk)
              var d = false;
            else {
              a2 = xk;
              xk = null;
              yk = 0;
              if (0 !== (K2 & 6))
                throw Error(p2(331));
              var e = K2;
              K2 |= 4;
              for (V2 = a2.current; null !== V2; ) {
                var f2 = V2, g = f2.child;
                if (0 !== (V2.flags & 16)) {
                  var h = f2.deletions;
                  if (null !== h) {
                    for (var k2 = 0; k2 < h.length; k2++) {
                      var l2 = h[k2];
                      for (V2 = l2; null !== V2; ) {
                        var m = V2;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(8, m, f2);
                        }
                        var q2 = m.child;
                        if (null !== q2)
                          q2.return = m, V2 = q2;
                        else
                          for (; null !== V2; ) {
                            m = V2;
                            var r2 = m.sibling, y2 = m.return;
                            Tj(m);
                            if (m === l2) {
                              V2 = null;
                              break;
                            }
                            if (null !== r2) {
                              r2.return = y2;
                              V2 = r2;
                              break;
                            }
                            V2 = y2;
                          }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V2 = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g)
                  g.return = f2, V2 = g;
                else
                  b:
                    for (; null !== V2; ) {
                      f2 = V2;
                      if (0 !== (f2.flags & 2048))
                        switch (f2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(9, f2, f2.return);
                        }
                      var x2 = f2.sibling;
                      if (null !== x2) {
                        x2.return = f2.return;
                        V2 = x2;
                        break b;
                      }
                      V2 = f2.return;
                    }
              }
              var w = a2.current;
              for (V2 = w; null !== V2; ) {
                g = V2;
                var u2 = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u2)
                  u2.return = g, V2 = u2;
                else
                  b:
                    for (g = w; null !== V2; ) {
                      h = V2;
                      if (0 !== (h.flags & 2048))
                        try {
                          switch (h.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Rj(9, h);
                          }
                        } catch (na) {
                          W2(h, h.return, na);
                        }
                      if (h === g) {
                        V2 = null;
                        break b;
                      }
                      var F2 = h.sibling;
                      if (null !== F2) {
                        F2.return = h.return;
                        V2 = F2;
                        break b;
                      }
                      V2 = h.return;
                    }
              }
              K2 = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot)
                try {
                  lc.onPostCommitFiberRoot(kc, a2);
                } catch (na) {
                }
              d = true;
            }
            return d;
          } finally {
            C2 = c2, pk.transition = b;
          }
        }
        return false;
      }
      function Yk(a2, b, c2) {
        b = Ki(c2, b);
        b = Oi(a2, b, 1);
        a2 = dh(a2, b, 1);
        b = L2();
        null !== a2 && (Ac(a2, 1, b), Ek(a2, b));
      }
      function W2(a2, b, c2) {
        if (3 === a2.tag)
          Yk(a2, a2, c2);
        else
          for (; null !== b; ) {
            if (3 === b.tag) {
              Yk(b, a2, c2);
              break;
            } else if (1 === b.tag) {
              var d = b.stateNode;
              if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
                a2 = Ki(c2, a2);
                a2 = Ri(b, a2, 1);
                b = dh(b, a2, 1);
                a2 = L2();
                null !== b && (Ac(b, 1, a2), Ek(b, a2));
                break;
              }
            }
            b = b.return;
          }
      }
      function Ui(a2, b, c2) {
        var d = a2.pingCache;
        null !== d && d.delete(b);
        b = L2();
        a2.pingedLanes |= a2.suspendedLanes & c2;
        R2 === a2 && (Z2 & c2) === c2 && (4 === T2 || 3 === T2 && (Z2 & 130023424) === Z2 && 500 > B2() - gk ? Lk(a2, 0) : sk |= c2);
        Ek(a2, b);
      }
      function Zk(a2, b) {
        0 === b && (0 === (a2.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c2 = L2();
        a2 = Zg(a2, b);
        null !== a2 && (Ac(a2, b, c2), Ek(a2, c2));
      }
      function vj(a2) {
        var b = a2.memoizedState, c2 = 0;
        null !== b && (c2 = b.retryLane);
        Zk(a2, c2);
      }
      function ck(a2, b) {
        var c2 = 0;
        switch (a2.tag) {
          case 13:
            var d = a2.stateNode;
            var e = a2.memoizedState;
            null !== e && (c2 = e.retryLane);
            break;
          case 19:
            d = a2.stateNode;
            break;
          default:
            throw Error(p2(314));
        }
        null !== d && d.delete(b);
        Zk(a2, c2);
      }
      var Wk;
      Wk = function(a2, b, c2) {
        if (null !== a2)
          if (a2.memoizedProps !== b.pendingProps || Wf.current)
            Ug = true;
          else {
            if (0 === (a2.lanes & c2) && 0 === (b.flags & 128))
              return Ug = false, zj(a2, b, c2);
            Ug = 0 !== (a2.flags & 131072) ? true : false;
          }
        else
          Ug = false, I2 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            jj(a2, b);
            a2 = b.pendingProps;
            var e = Yf(b, H2.current);
            Tg(b, c2);
            e = Xh(null, b, d, a2, e, c2);
            var f2 = bi();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a2, c2), b = kj(null, b, d, true, f2, c2)) : (b.tag = 0, I2 && f2 && vg(b), Yi(null, b, e, c2), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              jj(a2, b);
              a2 = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = $k(d);
              a2 = Lg(d, a2);
              switch (e) {
                case 0:
                  b = dj(null, b, d, a2, c2);
                  break a;
                case 1:
                  b = ij(null, b, d, a2, c2);
                  break a;
                case 11:
                  b = Zi(null, b, d, a2, c2);
                  break a;
                case 14:
                  b = aj(null, b, d, Lg(d.type, a2), c2);
                  break a;
              }
              throw Error(p2(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a2, b, d, e, c2);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a2, b, d, e, c2);
          case 3:
            a: {
              lj(b);
              if (null === a2)
                throw Error(p2(387));
              d = b.pendingProps;
              f2 = b.memoizedState;
              e = f2.element;
              bh(a2, b);
              gh(b, d, null, c2);
              var g = b.memoizedState;
              d = g.element;
              if (f2.isDehydrated)
                if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                  e = Ki(Error(p2(423)), b);
                  b = mj(a2, b, d, c2, e);
                  break a;
                } else if (d !== e) {
                  e = Ki(Error(p2(424)), b);
                  b = mj(a2, b, d, c2, e);
                  break a;
                } else
                  for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I2 = true, zg = null, c2 = Ch(b, null, d, c2), b.child = c2; c2; )
                    c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
              else {
                Ig();
                if (d === e) {
                  b = $i(a2, b, c2);
                  break a;
                }
                Yi(a2, b, d, c2);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Kh(b), null === a2 && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a2, b), Yi(a2, b, g, c2), b.child;
          case 6:
            return null === a2 && Eg(b), null;
          case 13:
            return pj(a2, b, c2);
          case 4:
            return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a2 ? b.child = Bh(b, null, d, c2) : Yi(a2, b, d, c2), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a2, b, d, e, c2);
          case 7:
            return Yi(a2, b, b.pendingProps, c2), b.child;
          case 8:
            return Yi(a2, b, b.pendingProps.children, c2), b.child;
          case 12:
            return Yi(a2, b, b.pendingProps.children, c2), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f2 = b.memoizedProps;
              g = e.value;
              G2(Mg, d._currentValue);
              d._currentValue = g;
              if (null !== f2)
                if (He2(f2.value, g)) {
                  if (f2.children === e.children && !Wf.current) {
                    b = $i(a2, b, c2);
                    break a;
                  }
                } else
                  for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                    var h = f2.dependencies;
                    if (null !== h) {
                      g = f2.child;
                      for (var k2 = h.firstContext; null !== k2; ) {
                        if (k2.context === d) {
                          if (1 === f2.tag) {
                            k2 = ch(-1, c2 & -c2);
                            k2.tag = 2;
                            var l2 = f2.updateQueue;
                            if (null !== l2) {
                              l2 = l2.shared;
                              var m = l2.pending;
                              null === m ? k2.next = k2 : (k2.next = m.next, m.next = k2);
                              l2.pending = k2;
                            }
                          }
                          f2.lanes |= c2;
                          k2 = f2.alternate;
                          null !== k2 && (k2.lanes |= c2);
                          Sg(
                            f2.return,
                            c2,
                            b
                          );
                          h.lanes |= c2;
                          break;
                        }
                        k2 = k2.next;
                      }
                    } else if (10 === f2.tag)
                      g = f2.type === b.type ? null : f2.child;
                    else if (18 === f2.tag) {
                      g = f2.return;
                      if (null === g)
                        throw Error(p2(341));
                      g.lanes |= c2;
                      h = g.alternate;
                      null !== h && (h.lanes |= c2);
                      Sg(g, c2, b);
                      g = f2.sibling;
                    } else
                      g = f2.child;
                    if (null !== g)
                      g.return = f2;
                    else
                      for (g = f2; null !== g; ) {
                        if (g === b) {
                          g = null;
                          break;
                        }
                        f2 = g.sibling;
                        if (null !== f2) {
                          f2.return = g.return;
                          g = f2;
                          break;
                        }
                        g = g.return;
                      }
                    f2 = g;
                  }
              Yi(a2, b, e.children, c2);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, Tg(b, c2), e = Vg(e), d = d(e), b.flags |= 1, Yi(a2, b, d, c2), b.child;
          case 14:
            return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a2, b, d, e, c2);
          case 15:
            return cj(a2, b, b.type, b.pendingProps, c2);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a2, b), b.tag = 1, Zf(d) ? (a2 = true, cg(b)) : a2 = false, Tg(b, c2), ph(b, d, e), rh(b, d, e, c2), kj(null, b, d, true, a2, c2);
          case 19:
            return yj(a2, b, c2);
          case 22:
            return ej(a2, b, c2);
        }
        throw Error(p2(156, b.tag));
      };
      function Gk(a2, b) {
        return ac(a2, b);
      }
      function al(a2, b, c2, d) {
        this.tag = a2;
        this.key = c2;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a2, b, c2, d) {
        return new al(a2, b, c2, d);
      }
      function bj(a2) {
        a2 = a2.prototype;
        return !(!a2 || !a2.isReactComponent);
      }
      function $k(a2) {
        if ("function" === typeof a2)
          return bj(a2) ? 1 : 0;
        if (void 0 !== a2 && null !== a2) {
          a2 = a2.$$typeof;
          if (a2 === Da)
            return 11;
          if (a2 === Ga)
            return 14;
        }
        return 2;
      }
      function wh(a2, b) {
        var c2 = a2.alternate;
        null === c2 ? (c2 = Bg(a2.tag, b, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
        c2.flags = a2.flags & 14680064;
        c2.childLanes = a2.childLanes;
        c2.lanes = a2.lanes;
        c2.child = a2.child;
        c2.memoizedProps = a2.memoizedProps;
        c2.memoizedState = a2.memoizedState;
        c2.updateQueue = a2.updateQueue;
        b = a2.dependencies;
        c2.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c2.sibling = a2.sibling;
        c2.index = a2.index;
        c2.ref = a2.ref;
        return c2;
      }
      function yh(a2, b, c2, d, e, f2) {
        var g = 2;
        d = a2;
        if ("function" === typeof a2)
          bj(a2) && (g = 1);
        else if ("string" === typeof a2)
          g = 5;
        else
          a:
            switch (a2) {
              case ya:
                return Ah(c2.children, e, f2, b);
              case za:
                g = 8;
                e |= 8;
                break;
              case Aa:
                return a2 = Bg(12, c2, b, e | 2), a2.elementType = Aa, a2.lanes = f2, a2;
              case Ea:
                return a2 = Bg(13, c2, b, e), a2.elementType = Ea, a2.lanes = f2, a2;
              case Fa:
                return a2 = Bg(19, c2, b, e), a2.elementType = Fa, a2.lanes = f2, a2;
              case Ia:
                return qj(c2, e, f2, b);
              default:
                if ("object" === typeof a2 && null !== a2)
                  switch (a2.$$typeof) {
                    case Ba:
                      g = 10;
                      break a;
                    case Ca:
                      g = 9;
                      break a;
                    case Da:
                      g = 11;
                      break a;
                    case Ga:
                      g = 14;
                      break a;
                    case Ha:
                      g = 16;
                      d = null;
                      break a;
                  }
                throw Error(p2(130, null == a2 ? a2 : typeof a2, ""));
            }
        b = Bg(g, c2, b, e);
        b.elementType = a2;
        b.type = d;
        b.lanes = f2;
        return b;
      }
      function Ah(a2, b, c2, d) {
        a2 = Bg(7, a2, d, b);
        a2.lanes = c2;
        return a2;
      }
      function qj(a2, b, c2, d) {
        a2 = Bg(22, a2, d, b);
        a2.elementType = Ia;
        a2.lanes = c2;
        a2.stateNode = { isHidden: false };
        return a2;
      }
      function xh(a2, b, c2) {
        a2 = Bg(6, a2, null, b);
        a2.lanes = c2;
        return a2;
      }
      function zh(a2, b, c2) {
        b = Bg(4, null !== a2.children ? a2.children : [], a2.key, b);
        b.lanes = c2;
        b.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
        return b;
      }
      function bl(a2, b, c2, d, e) {
        this.tag = b;
        this.containerInfo = a2;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function cl(a2, b, c2, d, e, f2, g, h, k2) {
        a2 = new bl(a2, b, c2, h, k2);
        1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
        f2 = Bg(3, null, null, b);
        a2.current = f2;
        f2.stateNode = a2;
        f2.memoizedState = { element: d, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        ah(f2);
        return a2;
      }
      function dl(a2, b, c2) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a2, containerInfo: b, implementation: c2 };
      }
      function el(a2) {
        if (!a2)
          return Vf;
        a2 = a2._reactInternals;
        a: {
          if (Vb(a2) !== a2 || 1 !== a2.tag)
            throw Error(p2(170));
          var b = a2;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p2(171));
        }
        if (1 === a2.tag) {
          var c2 = a2.type;
          if (Zf(c2))
            return bg(a2, c2, b);
        }
        return b;
      }
      function fl(a2, b, c2, d, e, f2, g, h, k2) {
        a2 = cl(c2, d, true, a2, e, f2, g, h, k2);
        a2.context = el(null);
        c2 = a2.current;
        d = L2();
        e = lh(c2);
        f2 = ch(d, e);
        f2.callback = void 0 !== b && null !== b ? b : null;
        dh(c2, f2, e);
        a2.current.lanes = e;
        Ac(a2, e, d);
        Ek(a2, d);
        return a2;
      }
      function gl(a2, b, c2, d) {
        var e = b.current, f2 = L2(), g = lh(e);
        c2 = el(c2);
        null === b.context ? b.context = c2 : b.pendingContext = c2;
        b = ch(f2, g);
        b.payload = { element: a2 };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a2 = dh(e, b, g);
        null !== a2 && (mh(a2, e, g, f2), eh(a2, e, g));
        return g;
      }
      function hl(a2) {
        a2 = a2.current;
        if (!a2.child)
          return null;
        switch (a2.child.tag) {
          case 5:
            return a2.child.stateNode;
          default:
            return a2.child.stateNode;
        }
      }
      function il(a2, b) {
        a2 = a2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          var c2 = a2.retryLane;
          a2.retryLane = 0 !== c2 && c2 < b ? c2 : b;
        }
      }
      function jl(a2, b) {
        il(a2, b);
        (a2 = a2.alternate) && il(a2, b);
      }
      function kl() {
        return null;
      }
      var ll = "function" === typeof reportError ? reportError : function(a2) {
        console.error(a2);
      };
      function ml(a2) {
        this._internalRoot = a2;
      }
      nl.prototype.render = ml.prototype.render = function(a2) {
        var b = this._internalRoot;
        if (null === b)
          throw Error(p2(409));
        gl(a2, b, null, null);
      };
      nl.prototype.unmount = ml.prototype.unmount = function() {
        var a2 = this._internalRoot;
        if (null !== a2) {
          this._internalRoot = null;
          var b = a2.containerInfo;
          Sk(function() {
            gl(null, a2, null, null);
          });
          b[uf] = null;
        }
      };
      function nl(a2) {
        this._internalRoot = a2;
      }
      nl.prototype.unstable_scheduleHydration = function(a2) {
        if (a2) {
          var b = Hc();
          a2 = { blockedOn: null, target: a2, priority: b };
          for (var c2 = 0; c2 < Qc.length && 0 !== b && b < Qc[c2].priority; c2++)
            ;
          Qc.splice(c2, 0, a2);
          0 === c2 && Vc(a2);
        }
      };
      function ol(a2) {
        return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
      }
      function pl(a2) {
        return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
      }
      function ql() {
      }
      function rl(a2, b, c2, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a3 = hl(g);
              f2.call(a3);
            };
          }
          var g = fl(b, d, a2, 0, null, false, false, "", ql);
          a2._reactRootContainer = g;
          a2[uf] = g.current;
          sf(8 === a2.nodeType ? a2.parentNode : a2);
          Sk();
          return g;
        }
        for (; e = a2.lastChild; )
          a2.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a3 = hl(k2);
            h.call(a3);
          };
        }
        var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
        a2._reactRootContainer = k2;
        a2[uf] = k2.current;
        sf(8 === a2.nodeType ? a2.parentNode : a2);
        Sk(function() {
          gl(b, k2, c2, d);
        });
        return k2;
      }
      function sl(a2, b, c2, d, e) {
        var f2 = c2._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a3 = hl(g);
              h.call(a3);
            };
          }
          gl(b, g, a2, e);
        } else
          g = rl(c2, b, a2, e, d);
        return hl(g);
      }
      Ec = function(a2) {
        switch (a2.tag) {
          case 3:
            var b = a2.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c2 = tc(b.pendingLanes);
              0 !== c2 && (Cc(b, c2 | 1), Ek(b, B2()), 0 === (K2 & 6) && (Hj = B2() + 500, jg()));
            }
            break;
          case 13:
            Sk(function() {
              var b2 = Zg(a2, 1);
              if (null !== b2) {
                var c3 = L2();
                mh(b2, a2, 1, c3);
              }
            }), jl(a2, 1);
        }
      };
      Fc = function(a2) {
        if (13 === a2.tag) {
          var b = Zg(a2, 134217728);
          if (null !== b) {
            var c2 = L2();
            mh(b, a2, 134217728, c2);
          }
          jl(a2, 134217728);
        }
      };
      Gc = function(a2) {
        if (13 === a2.tag) {
          var b = lh(a2), c2 = Zg(a2, b);
          if (null !== c2) {
            var d = L2();
            mh(c2, a2, b, d);
          }
          jl(a2, b);
        }
      };
      Hc = function() {
        return C2;
      };
      Ic = function(a2, b) {
        var c2 = C2;
        try {
          return C2 = a2, b();
        } finally {
          C2 = c2;
        }
      };
      yb = function(a2, b, c2) {
        switch (b) {
          case "input":
            bb(a2, c2);
            b = c2.name;
            if ("radio" === c2.type && null != b) {
              for (c2 = a2; c2.parentNode; )
                c2 = c2.parentNode;
              c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c2.length; b++) {
                var d = c2[b];
                if (d !== a2 && d.form === a2.form) {
                  var e = Db(d);
                  if (!e)
                    throw Error(p2(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a2, c2);
            break;
          case "select":
            b = c2.value, null != b && fb(a2, !!c2.multiple, b, false);
        }
      };
      Gb = Rk;
      Hb = Sk;
      var tl = { usingClientEntryPoint: false, Events: [Cb, ue2, Db, Eb, Fb, Rk] };
      var ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
      var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
        a2 = Zb(a2);
        return null === a2 ? null : a2.stateNode;
      }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!wl.isDisabled && wl.supportsFiber)
          try {
            kc = wl.inject(vl), lc = wl;
          } catch (a2) {
          }
      }
      var wl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
      exports.createPortal = function(a2, b) {
        var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ol(b))
          throw Error(p2(200));
        return dl(a2, b, null, c2);
      };
      exports.createRoot = function(a2, b) {
        if (!ol(a2))
          throw Error(p2(299));
        var c2 = false, d = "", e = ll;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c2 = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = cl(a2, 1, false, null, null, c2, false, d, e);
        a2[uf] = b.current;
        sf(8 === a2.nodeType ? a2.parentNode : a2);
        return new ml(b);
      };
      exports.findDOMNode = function(a2) {
        if (null == a2)
          return null;
        if (1 === a2.nodeType)
          return a2;
        var b = a2._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a2.render)
            throw Error(p2(188));
          a2 = Object.keys(a2).join(",");
          throw Error(p2(268, a2));
        }
        a2 = Zb(b);
        a2 = null === a2 ? null : a2.stateNode;
        return a2;
      };
      exports.flushSync = function(a2) {
        return Sk(a2);
      };
      exports.hydrate = function(a2, b, c2) {
        if (!pl(b))
          throw Error(p2(200));
        return sl(null, a2, b, true, c2);
      };
      exports.hydrateRoot = function(a2, b, c2) {
        if (!ol(a2))
          throw Error(p2(405));
        var d = null != c2 && c2.hydratedSources || null, e = false, f2 = "", g = ll;
        null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g = c2.onRecoverableError));
        b = fl(b, null, a2, 1, null != c2 ? c2 : null, e, false, f2, g);
        a2[uf] = b.current;
        sf(a2);
        if (d)
          for (a2 = 0; a2 < d.length; a2++)
            c2 = d[a2], e = c2._getVersion, e = e(c2._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c2, e] : b.mutableSourceEagerHydrationData.push(
              c2,
              e
            );
        return new nl(b);
      };
      exports.render = function(a2, b, c2) {
        if (!pl(b))
          throw Error(p2(200));
        return sl(null, a2, b, false, c2);
      };
      exports.unmountComponentAtNode = function(a2) {
        if (!pl(a2))
          throw Error(p2(40));
        return a2._reactRootContainer ? (Sk(function() {
          sl(null, null, a2, false, function() {
            a2._reactRootContainer = null;
            a2[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Rk;
      exports.unstable_renderSubtreeIntoContainer = function(a2, b, c2, d) {
        if (!pl(c2))
          throw Error(p2(200));
        if (null == a2 || void 0 === a2._reactInternals)
          throw Error(p2(38));
        return sl(a2, b, c2, false, d);
      };
      exports.version = "18.2.0-next-9e3b772b8-20220608";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i2 = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c2, o2) {
          i2.usingClientEntryPoint = true;
          try {
            return m.createRoot(c2, o2);
          } finally {
            i2.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c2, h, o2) {
          i2.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c2, h, o2);
          } finally {
            i2.usingClientEntryPoint = false;
          }
        };
      }
      var i2;
    }
  });

  // node_modules/@emotion/memoize/dist/emotion-memoize.cjs.prod.js
  var require_emotion_memoize_cjs_prod = __commonJS({
    "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function memoize(fn) {
        var cache = /* @__PURE__ */ Object.create(null);
        return function(arg) {
          if (cache[arg] === void 0)
            cache[arg] = fn(arg);
          return cache[arg];
        };
      }
      exports["default"] = memoize;
    }
  });

  // node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
  var require_emotion_memoize_cjs = __commonJS({
    "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_emotion_memoize_cjs_prod();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.prod.js
  var require_emotion_is_prop_valid_cjs_prod = __commonJS({
    "node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var memoize = require_emotion_memoize_cjs();
      function _interopDefault(e) {
        return e && e.__esModule ? e : { "default": e };
      }
      var memoize__default = /* @__PURE__ */ _interopDefault(memoize);
      var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      var isPropValid = /* @__PURE__ */ memoize__default["default"](
        function(prop) {
          return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
        }
      );
      exports["default"] = isPropValid;
    }
  });

  // node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js
  var require_emotion_is_prop_valid_cjs = __commonJS({
    "node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_emotion_is_prop_valid_cjs_prod();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.default.js
  var require_emotion_is_prop_valid_cjs_default = __commonJS({
    "node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.default.js"(exports) {
      exports._default = require_emotion_is_prop_valid_cjs().default;
    }
  });

  // node_modules/shallowequal/index.js
  var require_shallowequal = __commonJS({
    "node_modules/shallowequal/index.js"(exports, module) {
      module.exports = function shallowEqual(objA, objB, compare, compareContext) {
        var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
        if (ret !== void 0) {
          return !!ret;
        }
        if (objA === objB) {
          return true;
        }
        if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
          return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
        for (var idx = 0; idx < keysA.length; idx++) {
          var key = keysA[idx];
          if (!bHasOwnProperty(key)) {
            return false;
          }
          var valueA = objA[key];
          var valueB = objB[key];
          ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
          if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/@emotion/unitless/dist/emotion-unitless.cjs.prod.js
  var require_emotion_unitless_cjs_prod = __commonJS({
    "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.prod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var unitlessKeys = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      exports["default"] = unitlessKeys;
    }
  });

  // node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js
  var require_emotion_unitless_cjs = __commonJS({
    "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_emotion_unitless_cjs_prod();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/@emotion/unitless/dist/emotion-unitless.cjs.default.js
  var require_emotion_unitless_cjs_default = __commonJS({
    "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.default.js"(exports) {
      exports._default = require_emotion_unitless_cjs().default;
    }
  });

  // popup/index.tsx
  var import_react4 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // popup/Popup.tsx
  var import_react3 = __toESM(require_react());

  // popup/ToggleSwitchButton.tsx
  var import_react2 = __toESM(require_react());

  // node_modules/tslib/tslib.es6.mjs
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t[p2] = s2[p2];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __spreadArray(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i2);
          ar[i2] = from2[i2];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  }

  // node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.mjs
  var import_emotion_is_prop_valid_cjs = __toESM(require_emotion_is_prop_valid_cjs(), 1);
  var import_emotion_is_prop_valid_cjs_default = __toESM(require_emotion_is_prop_valid_cjs_default(), 1);

  // node_modules/styled-components/dist/styled-components.browser.esm.js
  var import_react = __toESM(require_react());
  var import_shallowequal = __toESM(require_shallowequal());

  // node_modules/styled-components/node_modules/stylis/src/Enum.js
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";

  // node_modules/styled-components/node_modules/stylis/src/Utility.js
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  function filter(array, pattern) {
    return array.filter(function(value) {
      return !match(value, pattern);
    });
  }

  // node_modules/styled-components/node_modules/stylis/src/Tokenizer.js
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root2, parent, type, props, children, length2, siblings) {
    return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "", siblings };
  }
  function copy(root2, props) {
    return assign(node("", null, null, "", null, null, 0, root2.siblings), root2, { length: -root2.length }, props);
  }
  function lift(root2) {
    while (root2.root)
      root2 = copy(root2.root, { children: [root2] });
    append(root2, root2.siblings);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        case type:
          return position;
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }

  // node_modules/styled-components/node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root2, parent, declarations), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (ampersand == -1)
                characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root2, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root2, parent, index, offset, rules, points, type, props, children, length2, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
      for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
        if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
          props[k2++] = z2;
    return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
  }
  function comment(value, root2, parent, siblings) {
    return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
  }
  function declaration(value, root2, parent, length2, siblings) {
    return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
  }

  // node_modules/styled-components/node_modules/stylis/src/Prefixer.js
  function prefix(value, length2, children) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 4789:
        return MOZ + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
      case 6828:
      case 4268:
      case 2903:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4200:
        if (!match(value, /flex-|baseline/))
          return MS + "grid-column-align" + substr(value, length2) + value;
        break;
      case 2592:
      case 3360:
        return MS + replace(value, "template-", "") + value;
      case 4384:
      case 3616:
        if (children && children.some(function(element, index) {
          return length2 = index, match(element.props, /grid-\w+-end/);
        })) {
          return ~indexof(value + (children = children[length2].value), "span") ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span") ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
        }
        return MS + replace(value, "-start", "") + value;
      case 4896:
      case 4128:
        return children && children.some(function(element) {
          return match(element.props, /grid-\w+-start/);
        }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6)
          switch (charat(value, length2 + 1)) {
            case 109:
              if (charat(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
          }
        break;
      case 5152:
      case 5920:
        return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b, c2, d, e, f2) {
          return MS + a2 + ":" + b + f2 + (c2 ? MS + a2 + "-span:" + (d ? e : +e - +b) + f2 : "") + value;
        });
      case 4949:
        if (charat(value, length2 + 6) === 121)
          return replace(value, ":", ":" + WEBKIT) + value;
        break;
      case 6444:
        switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
          case 120:
            return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
          case 100:
            return replace(value, ":", ":" + MS) + value;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return replace(value, "scroll-", "scroll-snap-") + value;
    }
    return value;
  }

  // node_modules/styled-components/node_modules/stylis/src/Serializer.js
  function serialize(children, callback) {
    var output = "";
    for (var i2 = 0; i2 < children.length; i2++)
      output += callback(children[i2], i2, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length)
          break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        if (!strlen(element.value = element.props.join(",")))
          return "";
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }

  // node_modules/styled-components/node_modules/stylis/src/Middleware.js
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i2 = 0; i2 < length2; i2++)
        output += collection[i2](element, index, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }
  function prefixer(element, index, children, callback) {
    if (element.length > -1) {
      if (!element.return)
        switch (element.type) {
          case DECLARATION:
            element.return = prefix(element.value, element.length, children);
            return;
          case KEYFRAMES:
            return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
          case RULESET:
            if (element.length)
              return combine(children = element.props, function(value) {
                switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                    lift(copy(element, { props: [value] }));
                    assign(element, { props: filter(children, callback) });
                    break;
                  case "::placeholder":
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                    lift(copy(element, { props: [value] }));
                    assign(element, { props: filter(children, callback) });
                    break;
                }
                return "";
              });
        }
    }
  }

  // node_modules/@emotion/unitless/dist/emotion-unitless.cjs.mjs
  var import_emotion_unitless_cjs = __toESM(require_emotion_unitless_cjs(), 1);
  var import_emotion_unitless_cjs_default = __toESM(require_emotion_unitless_cjs_default(), 1);

  // node_modules/styled-components/dist/styled-components.browser.esm.js
  var f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
  var y = "undefined" != typeof window && "HTMLElement" in window;
  var v = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : false);
  var E = Object.freeze([]);
  var N = Object.freeze({});
  function P(e, t, n) {
    return void 0 === n && (n = N), e.theme !== n.theme && e.theme || t || n.theme;
  }
  var _ = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]);
  var C = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
  var I = /(^-|-$)/g;
  function A(e) {
    return e.replace(C, "-").replace(I, "");
  }
  var O = /(a)(d)/gi;
  var D = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
  function R(e) {
    var t, n = "";
    for (t = Math.abs(e); t > 52; t = t / 52 | 0)
      n = D(t % 52) + n;
    return (D(t % 52) + n).replace(O, "$1-$2");
  }
  var T;
  var k = function(e, t) {
    for (var n = t.length; n; )
      e = 33 * e ^ t.charCodeAt(--n);
    return e;
  };
  var j = function(e) {
    return k(5381, e);
  };
  function x(e) {
    return R(j(e) >>> 0);
  }
  function V(e) {
    return e.displayName || e.name || "Component";
  }
  function M(e) {
    return "string" == typeof e && true;
  }
  var F = "function" == typeof Symbol && Symbol.for;
  var $ = F ? Symbol.for("react.memo") : 60115;
  var z = F ? Symbol.for("react.forward_ref") : 60112;
  var B = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
  var L = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
  var G = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
  var Y = ((T = {})[z] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, T[$] = G, T);
  function W(e) {
    return ("type" in (t = e) && t.type.$$typeof) === $ ? G : "$$typeof" in e ? Y[e.$$typeof] : B;
    var t;
  }
  var q = Object.defineProperty;
  var H = Object.getOwnPropertyNames;
  var U = Object.getOwnPropertySymbols;
  var J = Object.getOwnPropertyDescriptor;
  var X = Object.getPrototypeOf;
  var Z = Object.prototype;
  function K(e, t, n) {
    if ("string" != typeof t) {
      if (Z) {
        var o2 = X(t);
        o2 && o2 !== Z && K(e, o2, n);
      }
      var r2 = H(t);
      U && (r2 = r2.concat(U(t)));
      for (var s2 = W(e), i2 = W(t), a2 = 0; a2 < r2.length; ++a2) {
        var c2 = r2[a2];
        if (!(c2 in L || n && n[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
          var l2 = J(t, c2);
          try {
            q(e, c2, l2);
          } catch (e2) {
          }
        }
      }
    }
    return e;
  }
  function Q(e) {
    return "function" == typeof e;
  }
  function ee(e) {
    return "object" == typeof e && "styledComponentId" in e;
  }
  function te(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
  }
  function ne(e, t) {
    if (0 === e.length)
      return "";
    for (var n = e[0], o2 = 1; o2 < e.length; o2++)
      n += t ? t + e[o2] : e[o2];
    return n;
  }
  function oe(e) {
    return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
  }
  function re(e, t, n) {
    if (void 0 === n && (n = false), !n && !oe(e) && !Array.isArray(e))
      return t;
    if (Array.isArray(t))
      for (var o2 = 0; o2 < t.length; o2++)
        e[o2] = re(e[o2], t[o2]);
    else if (oe(t))
      for (var o2 in t)
        e[o2] = re(e[o2], t[o2]);
    return e;
  }
  function se(e, t) {
    Object.defineProperty(e, "toString", { value: t });
  }
  function ce(t) {
    for (var n = [], o2 = 1; o2 < arguments.length; o2++)
      n[o2 - 1] = arguments[o2];
    return true ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(ae.apply(void 0, __spreadArray([ie[t]], n, false)).trim());
  }
  var le = function() {
    function e(e2) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
    }
    return e.prototype.indexOfGroup = function(e2) {
      for (var t = 0, n = 0; n < e2; n++)
        t += this.groupSizes[n];
      return t;
    }, e.prototype.insertRules = function(e2, t) {
      if (e2 >= this.groupSizes.length) {
        for (var n = this.groupSizes, o2 = n.length, r2 = o2; e2 >= r2; )
          if ((r2 <<= 1) < 0)
            throw ce(16, "".concat(e2));
        this.groupSizes = new Uint32Array(r2), this.groupSizes.set(n), this.length = r2;
        for (var s2 = o2; s2 < r2; s2++)
          this.groupSizes[s2] = 0;
      }
      for (var i2 = this.indexOfGroup(e2 + 1), a2 = (s2 = 0, t.length); s2 < a2; s2++)
        this.tag.insertRule(i2, t[s2]) && (this.groupSizes[e2]++, i2++);
    }, e.prototype.clearGroup = function(e2) {
      if (e2 < this.length) {
        var t = this.groupSizes[e2], n = this.indexOfGroup(e2), o2 = n + t;
        this.groupSizes[e2] = 0;
        for (var r2 = n; r2 < o2; r2++)
          this.tag.deleteRule(n);
      }
    }, e.prototype.getGroup = function(e2) {
      var t = "";
      if (e2 >= this.length || 0 === this.groupSizes[e2])
        return t;
      for (var n = this.groupSizes[e2], o2 = this.indexOfGroup(e2), r2 = o2 + n, s2 = o2; s2 < r2; s2++)
        t += "".concat(this.tag.getRule(s2)).concat("/*!sc*/\n");
      return t;
    }, e;
  }();
  var ue = /* @__PURE__ */ new Map();
  var pe = /* @__PURE__ */ new Map();
  var de = 1;
  var he = function(e) {
    if (ue.has(e))
      return ue.get(e);
    for (; pe.has(de); )
      de++;
    var t = de++;
    if (false)
      throw ce(16, "".concat(t));
    return ue.set(e, t), pe.set(t, e), t;
  };
  var fe = function(e, t) {
    ue.set(e, t), pe.set(t, e);
  };
  var me = "style[".concat(f, "][").concat("data-styled-version", '="').concat("6.0.5", '"]');
  var ye = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
  var ve = function(e, t, n) {
    for (var o2, r2 = n.split(","), s2 = 0, i2 = r2.length; s2 < i2; s2++)
      (o2 = r2[s2]) && e.registerName(t, o2);
  };
  var ge = function(e, t) {
    for (var n, o2 = (null !== (n = t.textContent) && void 0 !== n ? n : "").split("/*!sc*/\n"), r2 = [], s2 = 0, i2 = o2.length; s2 < i2; s2++) {
      var a2 = o2[s2].trim();
      if (a2) {
        var c2 = a2.match(ye);
        if (c2) {
          var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
          0 !== l2 && (fe(u2, l2), ve(e, u2, c2[3]), e.getTag().insertRules(l2, r2)), r2.length = 0;
        } else
          r2.push(a2);
      }
    }
  };
  function Se() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  }
  var we = function(e) {
    var t = document.head, n = e || t, o2 = document.createElement("style"), r2 = function(e2) {
      var t2 = Array.from(e2.querySelectorAll("style[".concat(f, "]")));
      return t2[t2.length - 1];
    }(n), s2 = void 0 !== r2 ? r2.nextSibling : null;
    o2.setAttribute(f, "active"), o2.setAttribute("data-styled-version", "6.0.5");
    var i2 = Se();
    return i2 && o2.setAttribute("nonce", i2), n.insertBefore(o2, s2), o2;
  };
  var be = function() {
    function e(e2) {
      this.element = we(e2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e3) {
        if (e3.sheet)
          return e3.sheet;
        for (var t = document.styleSheets, n = 0, o2 = t.length; n < o2; n++) {
          var r2 = t[n];
          if (r2.ownerNode === e3)
            return r2;
        }
        throw ce(17);
      }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      try {
        return this.sheet.insertRule(t, e2), this.length++, true;
      } catch (e3) {
        return false;
      }
    }, e.prototype.deleteRule = function(e2) {
      this.sheet.deleteRule(e2), this.length--;
    }, e.prototype.getRule = function(e2) {
      var t = this.sheet.cssRules[e2];
      return t && t.cssText ? t.cssText : "";
    }, e;
  }();
  var Ee = function() {
    function e(e2) {
      this.element = we(e2), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      if (e2 <= this.length && e2 >= 0) {
        var n = document.createTextNode(t);
        return this.element.insertBefore(n, this.nodes[e2] || null), this.length++, true;
      }
      return false;
    }, e.prototype.deleteRule = function(e2) {
      this.element.removeChild(this.nodes[e2]), this.length--;
    }, e.prototype.getRule = function(e2) {
      return e2 < this.length ? this.nodes[e2].textContent : "";
    }, e;
  }();
  var Ne = function() {
    function e(e2) {
      this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      return e2 <= this.length && (this.rules.splice(e2, 0, t), this.length++, true);
    }, e.prototype.deleteRule = function(e2) {
      this.rules.splice(e2, 1), this.length--;
    }, e.prototype.getRule = function(e2) {
      return e2 < this.length ? this.rules[e2] : "";
    }, e;
  }();
  var Pe = y;
  var _e = { isServer: !y, useCSSOMInjection: !v };
  var Ce = function() {
    function e(e2, n, o2) {
      void 0 === e2 && (e2 = N), void 0 === n && (n = {});
      var r2 = this;
      this.options = __assign(__assign({}, _e), e2), this.gs = n, this.names = new Map(o2), this.server = !!e2.isServer, !this.server && y && Pe && (Pe = false, function(e3) {
        for (var t = document.querySelectorAll(me), n2 = 0, o3 = t.length; n2 < o3; n2++) {
          var r3 = t[n2];
          r3 && "active" !== r3.getAttribute(f) && (ge(e3, r3), r3.parentNode && r3.parentNode.removeChild(r3));
        }
      }(this)), se(this, function() {
        return function(e3) {
          for (var t = e3.getTag(), n2 = t.length, o3 = "", r3 = function(n3) {
            var r4 = function(e4) {
              return pe.get(e4);
            }(n3);
            if (void 0 === r4)
              return "continue";
            var s3 = e3.names.get(r4), i2 = t.getGroup(n3);
            if (void 0 === s3 || 0 === i2.length)
              return "continue";
            var a2 = "".concat(f, ".g").concat(n3, '[id="').concat(r4, '"]'), c2 = "";
            void 0 !== s3 && s3.forEach(function(e4) {
              e4.length > 0 && (c2 += "".concat(e4, ","));
            }), o3 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat("/*!sc*/\n");
          }, s2 = 0; s2 < n2; s2++)
            r3(s2);
          return o3;
        }(r2);
      });
    }
    return e.registerId = function(e2) {
      return he(e2);
    }, e.prototype.reconstructWithOptions = function(n, o2) {
      return void 0 === o2 && (o2 = true), new e(__assign(__assign({}, this.options), n), this.gs, o2 && this.names || void 0);
    }, e.prototype.allocateGSInstance = function(e2) {
      return this.gs[e2] = (this.gs[e2] || 0) + 1;
    }, e.prototype.getTag = function() {
      return this.tag || (this.tag = (e2 = function(e3) {
        var t = e3.useCSSOMInjection, n = e3.target;
        return e3.isServer ? new Ne(n) : t ? new be(n) : new Ee(n);
      }(this.options), new le(e2)));
      var e2;
    }, e.prototype.hasNameForId = function(e2, t) {
      return this.names.has(e2) && this.names.get(e2).has(t);
    }, e.prototype.registerName = function(e2, t) {
      if (he(e2), this.names.has(e2))
        this.names.get(e2).add(t);
      else {
        var n = /* @__PURE__ */ new Set();
        n.add(t), this.names.set(e2, n);
      }
    }, e.prototype.insertRules = function(e2, t, n) {
      this.registerName(e2, t), this.getTag().insertRules(he(e2), n);
    }, e.prototype.clearNames = function(e2) {
      this.names.has(e2) && this.names.get(e2).clear();
    }, e.prototype.clearRules = function(e2) {
      this.getTag().clearGroup(he(e2)), this.clearNames(e2);
    }, e.prototype.clearTag = function() {
      this.tag = void 0;
    }, e;
  }();
  var Ie = /&/g;
  var Ae = /^\s*\/\/.*$/gm;
  function Oe(e, t) {
    return e.map(function(e2) {
      return "rule" === e2.type && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
        return "".concat(t, " ").concat(e3);
      })), Array.isArray(e2.children) && "@keyframes" !== e2.type && (e2.children = Oe(e2.children, t)), e2;
    });
  }
  function De(e) {
    var t, n, o2, r2 = void 0 === e ? N : e, s2 = r2.options, i2 = void 0 === s2 ? N : s2, a2 = r2.plugins, c2 = void 0 === a2 ? E : a2, l2 = function(e2, o3, r3) {
      return r3 === n || r3.startsWith(n) && r3.endsWith(n) && r3.replaceAll(n, "").length > 0 ? ".".concat(t) : e2;
    }, u2 = c2.slice();
    u2.push(function(e2) {
      e2.type === RULESET && e2.value.includes("&") && (e2.props[0] = e2.props[0].replace(Ie, n).replace(o2, l2));
    }), i2.prefix && u2.push(prefixer), u2.push(stringify);
    var p2 = function(e2, r3, s3, a3) {
      void 0 === r3 && (r3 = ""), void 0 === s3 && (s3 = ""), void 0 === a3 && (a3 = "&"), t = a3, n = r3, o2 = new RegExp("\\".concat(n, "\\b"), "g");
      var c3 = e2.replace(Ae, ""), l3 = compile(s3 || r3 ? "".concat(s3, " ").concat(r3, " { ").concat(c3, " }") : c3);
      i2.namespace && (l3 = Oe(l3, i2.namespace));
      var p3 = [];
      return serialize(l3, middleware(u2.concat(rulesheet(function(e3) {
        return p3.push(e3);
      })))), p3;
    };
    return p2.hash = c2.length ? c2.reduce(function(e2, t2) {
      return t2.name || ce(15), k(e2, t2.name);
    }, 5381).toString() : "", p2;
  }
  var Re = new Ce();
  var Te = De();
  var ke = import_react.default.createContext({ shouldForwardProp: void 0, styleSheet: Re, stylis: Te });
  var je = ke.Consumer;
  var xe = import_react.default.createContext(void 0);
  function Ve() {
    return (0, import_react.useContext)(ke);
  }
  function Me(e) {
    var t = (0, import_react.useState)(e.stylisPlugins), n = t[0], r2 = t[1], c2 = Ve().styleSheet, l2 = (0, import_react.useMemo)(function() {
      var t2 = c2;
      return e.sheet ? t2 = e.sheet : e.target && (t2 = t2.reconstructWithOptions({ target: e.target }, false)), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
    }, [e.disableCSSOMInjection, e.sheet, e.target, c2]), u2 = (0, import_react.useMemo)(function() {
      return De({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
    }, [e.enableVendorPrefixes, e.namespace, n]);
    return (0, import_react.useEffect)(function() {
      (0, import_shallowequal.default)(n, e.stylisPlugins) || r2(e.stylisPlugins);
    }, [e.stylisPlugins]), import_react.default.createElement(ke.Provider, { value: { shouldForwardProp: e.shouldForwardProp, styleSheet: l2, stylis: u2 } }, import_react.default.createElement(xe.Provider, { value: u2 }, e.children));
  }
  var Fe = function() {
    function e(e2, t) {
      var n = this;
      this.inject = function(e3, t2) {
        void 0 === t2 && (t2 = Te);
        var o2 = n.name + t2.hash;
        e3.hasNameForId(n.id, o2) || e3.insertRules(n.id, o2, t2(n.rules, o2, "@keyframes"));
      }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t, se(this, function() {
        throw ce(12, String(n.name));
      });
    }
    return e.prototype.getName = function(e2) {
      return void 0 === e2 && (e2 = Te), this.name + e2.hash;
    }, e;
  }();
  var $e = function(e) {
    return e >= "A" && e <= "Z";
  };
  function ze(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      var o2 = e[n];
      if (1 === n && "-" === o2 && "-" === e[0])
        return e;
      $e(o2) ? t += "-" + o2.toLowerCase() : t += o2;
    }
    return t.startsWith("ms-") ? "-" + t : t;
  }
  var Be = function(e) {
    return null == e || false === e || "" === e;
  };
  var Le = function(t) {
    var n, o2, r2 = [];
    for (var s2 in t) {
      var i2 = t[s2];
      t.hasOwnProperty(s2) && !Be(i2) && (Array.isArray(i2) && i2.isCss || Q(i2) ? r2.push("".concat(ze(s2), ":"), i2, ";") : oe(i2) ? r2.push.apply(r2, __spreadArray(__spreadArray(["".concat(s2, " {")], Le(i2), false), ["}"], false)) : r2.push("".concat(ze(s2), ": ").concat((n = s2, null == (o2 = i2) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || n in import_emotion_unitless_cjs_default._default || n.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
    }
    return r2;
  };
  function Ge(e, t, n, o2) {
    if (Be(e))
      return [];
    if (ee(e))
      return [".".concat(e.styledComponentId)];
    if (Q(e)) {
      if (!Q(s2 = e) || s2.prototype && s2.prototype.isReactComponent || !t)
        return [e];
      var r2 = e(t);
      return true, Ge(r2, t, n, o2);
    }
    var s2;
    return e instanceof Fe ? n ? (e.inject(n, o2), [e.getName(o2)]) : [e] : oe(e) ? Le(e) : Array.isArray(e) ? Array.prototype.concat.apply(E, e.map(function(e2) {
      return Ge(e2, t, n, o2);
    })) : [e.toString()];
  }
  function Ye(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t];
      if (Q(n) && !ee(n))
        return false;
    }
    return true;
  }
  var We = j("6.0.5");
  var qe = function() {
    function e(e2, t, n) {
      this.rules = e2, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && Ye(e2), this.componentId = t, this.baseHash = k(We, t), this.baseStyle = n, Ce.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(e2, t, n) {
      var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n) : "";
      if (this.isStatic && !n.hash)
        if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
          o2 = te(o2, this.staticRulesId);
        else {
          var r2 = ne(Ge(this.rules, e2, t, n)), s2 = R(k(this.baseHash, r2) >>> 0);
          if (!t.hasNameForId(this.componentId, s2)) {
            var i2 = n(r2, ".".concat(s2), void 0, this.componentId);
            t.insertRules(this.componentId, s2, i2);
          }
          o2 = te(o2, s2), this.staticRulesId = s2;
        }
      else {
        for (var a2 = k(this.baseHash, n.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++) {
          var u2 = this.rules[l2];
          if ("string" == typeof u2)
            c2 += u2, false;
          else if (u2) {
            var p2 = ne(Ge(u2, e2, t, n));
            a2 = k(a2, p2), c2 += p2;
          }
        }
        if (c2) {
          var d = R(a2 >>> 0);
          t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c2, ".".concat(d), void 0, this.componentId)), o2 = te(o2, d);
        }
      }
      return o2;
    }, e;
  }();
  var He = import_react.default.createContext(void 0);
  var Ue = He.Consumer;
  var Ze = {};
  function Qe(e, r2, s2) {
    var i2 = ee(e), a2 = e, c2 = !M(e), p2 = r2.attrs, d = void 0 === p2 ? E : p2, h = r2.componentId, f2 = void 0 === h ? function(e2, t) {
      var n = "string" != typeof e2 ? "sc" : A(e2);
      Ze[n] = (Ze[n] || 0) + 1;
      var o2 = "".concat(n, "-").concat(x("6.0.5" + n + Ze[n]));
      return t ? "".concat(t, "-").concat(o2) : o2;
    }(r2.displayName, r2.parentComponentId) : h, m = r2.displayName, y2 = void 0 === m ? function(e2) {
      return M(e2) ? "styled.".concat(e2) : "Styled(".concat(V(e2), ")");
    }(e) : m, v2 = r2.displayName && r2.componentId ? "".concat(A(r2.displayName), "-").concat(r2.componentId) : r2.componentId || f2, g = i2 && a2.attrs ? a2.attrs.concat(d).filter(Boolean) : d, S = r2.shouldForwardProp;
    if (i2 && a2.shouldForwardProp) {
      var w = a2.shouldForwardProp;
      if (r2.shouldForwardProp) {
        var C2 = r2.shouldForwardProp;
        S = function(e2, t) {
          return w(e2, t) && C2(e2, t);
        };
      } else
        S = w;
    }
    var I2 = new qe(s2, v2, i2 ? a2.componentStyle : void 0);
    function O2(e2, r3) {
      return function(e3, r4, s3) {
        var i3 = e3.attrs, a3 = e3.componentStyle, c3 = e3.defaultProps, p3 = e3.foldedComponentIds, d2 = e3.styledComponentId, h2 = e3.target, f3 = import_react.default.useContext(He), m2 = Ve(), y3 = e3.shouldForwardProp || m2.shouldForwardProp;
        var v3 = function(e4, n, o2) {
          for (var r5, s4 = __assign(__assign({}, n), { className: void 0, theme: o2 }), i4 = 0; i4 < e4.length; i4 += 1) {
            var a4 = Q(r5 = e4[i4]) ? r5(s4) : r5;
            for (var c4 in a4)
              s4[c4] = "className" === c4 ? te(s4[c4], a4[c4]) : "style" === c4 ? __assign(__assign({}, s4[c4]), a4[c4]) : a4[c4];
          }
          return n.className && (s4.className = te(s4.className, n.className)), s4;
        }(i3, r4, P(r4, f3, c3) || N), g2 = v3.as || h2, S2 = {};
        for (var w2 in v3)
          void 0 === v3[w2] || "$" === w2[0] || "as" === w2 || "theme" === w2 || ("forwardedAs" === w2 ? S2.as = v3.forwardedAs : y3 && !y3(w2, g2) || (S2[w2] = v3[w2], y3 || true));
        var b = function(e4, t) {
          var n = Ve(), o2 = e4.generateAndInjectStyles(t, n.styleSheet, n.stylis);
          return false, o2;
        }(a3, v3);
        var E2 = te(p3, d2);
        return b && (E2 += " " + b), v3.className && (E2 += " " + v3.className), S2[M(g2) && !_.has(g2) ? "class" : "className"] = E2, S2.ref = s3, (0, import_react.createElement)(g2, S2);
      }(D2, e2, r3);
    }
    var D2 = import_react.default.forwardRef(O2);
    return D2.attrs = g, D2.componentStyle = I2, D2.shouldForwardProp = S, false, D2.foldedComponentIds = i2 ? te(a2.foldedComponentIds, a2.styledComponentId) : "", D2.styledComponentId = v2, D2.target = i2 ? a2.target : e, Object.defineProperty(D2, "defaultProps", { get: function() {
      return this._foldedDefaultProps;
    }, set: function(e2) {
      this._foldedDefaultProps = i2 ? function(e3) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        for (var o2 = 0, r3 = t; o2 < r3.length; o2++)
          re(e3, r3[o2], true);
        return e3;
      }({}, a2.defaultProps, e2) : e2;
    } }), false, se(D2, function() {
      return ".".concat(D2.styledComponentId);
    }), c2 && K(D2, e, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), D2;
  }
  function et(e, t) {
    for (var n = [e[0]], o2 = 0, r2 = t.length; o2 < r2; o2 += 1)
      n.push(t[o2], e[o2 + 1]);
    return n;
  }
  var tt = function(e) {
    return Object.assign(e, { isCss: true });
  };
  function nt(t) {
    for (var n = [], o2 = 1; o2 < arguments.length; o2++)
      n[o2 - 1] = arguments[o2];
    if (Q(t) || oe(t)) {
      var r2 = t;
      return tt(Ge(et(E, __spreadArray([r2], n, true))));
    }
    var s2 = t;
    return 0 === n.length && 1 === s2.length && "string" == typeof s2[0] ? Ge(s2) : tt(Ge(et(s2, n)));
  }
  function ot(n, o2, r2) {
    if (void 0 === r2 && (r2 = N), !o2)
      throw ce(1, o2);
    var s2 = function(t) {
      for (var s3 = [], i2 = 1; i2 < arguments.length; i2++)
        s3[i2 - 1] = arguments[i2];
      return n(o2, r2, nt.apply(void 0, __spreadArray([t], s3, false)));
    };
    return s2.attrs = function(e) {
      return ot(n, o2, __assign(__assign({}, r2), { attrs: Array.prototype.concat(r2.attrs, e).filter(Boolean) }));
    }, s2.withConfig = function(e) {
      return ot(n, o2, __assign(__assign({}, r2), e));
    }, s2;
  }
  var rt = function(e) {
    return ot(Qe, e);
  };
  var st = rt;
  _.forEach(function(e) {
    st[e] = rt(e);
  });
  var it = function() {
    function e(e2, t) {
      this.rules = e2, this.componentId = t, this.isStatic = Ye(e2), Ce.registerId(this.componentId + 1);
    }
    return e.prototype.createStyles = function(e2, t, n, o2) {
      var r2 = o2(ne(Ge(this.rules, t, n, o2)), ""), s2 = this.componentId + e2;
      n.insertRules(s2, s2, r2);
    }, e.prototype.removeStyles = function(e2, t) {
      t.clearRules(this.componentId + e2);
    }, e.prototype.renderStyles = function(e2, t, n, o2) {
      e2 > 2 && Ce.registerId(this.componentId + e2), this.removeStyles(e2, n), this.createStyles(e2, t, n, o2);
    }, e;
  }();
  var ut = function() {
    function e() {
      var e2 = this;
      this._emitSheetCSS = function() {
        var t = e2.instance.toString(), n = Se(), o2 = ne([n && 'nonce="'.concat(n, '"'), "".concat(f, '="true"'), "".concat("data-styled-version", '="').concat("6.0.5", '"')].filter(Boolean), " ");
        return "<style ".concat(o2, ">").concat(t, "</style>");
      }, this.getStyleTags = function() {
        if (e2.sealed)
          throw ce(2);
        return e2._emitSheetCSS();
      }, this.getStyleElement = function() {
        var n;
        if (e2.sealed)
          throw ce(2);
        var r2 = ((n = {})[f] = "", n["data-styled-version"] = "6.0.5", n.dangerouslySetInnerHTML = { __html: e2.instance.toString() }, n), s2 = Se();
        return s2 && (r2.nonce = s2), [import_react.default.createElement("style", __assign({}, r2, { key: "sc-0-0" }))];
      }, this.seal = function() {
        e2.sealed = true;
      }, this.instance = new Ce({ isServer: true }), this.sealed = false;
    }
    return e.prototype.collectStyles = function(e2) {
      if (this.sealed)
        throw ce(2);
      return import_react.default.createElement(Me, { sheet: this.instance }, e2);
    }, e.prototype.interleaveWithNodeStream = function(e2) {
      throw ce(3);
    }, e;
  }();
  var dt = "__sc-".concat(f, "__");

  // popup/ToggleSwitchButton.tsx
  var StyledToggleSwitchButton = st.div`
	& input {
		display: none;
		&:checked + label {
			background-color: #003366;
			&::before {
				left: 2em;
			}
		}
	}

	& label {
		background-color: #ff9933;
		border-radius: 2em;
		border: 2px solid var(--text-color);
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 2em;
		position: relative;
		transition: .5s;
		width: 3.75em;

		&::before {
			background: #fff;
			border-radius: 100%;
			content: '';
			display: inline-block;
			height: 1.5em;
			position: absolute;
			left: 0.25em;
			transition: .5s ease-out;
			width: 1.5em;
			z-index: 2;
		}
	}
`;
  var ToggleSwitchButton = ({ className, handleChange }) => /* @__PURE__ */ import_react2.default.createElement(StyledToggleSwitchButton, { className }, /* @__PURE__ */ import_react2.default.createElement("input", { id: "btn-mode", type: "checkbox", onChange: handleChange, ref }), /* @__PURE__ */ import_react2.default.createElement("label", { htmlFor: "btn-mode" }));
  var ToggleSwitchButton_default = ToggleSwitchButton;

  // popup/Popup.tsx
  var Popup = () => {
    const [isToggle, setIsToggle] = useState(false);
    const handleChange = useCallback(() => {
      if (isToggle) {
        setIsToggle(false);
      } else {
        setIsToggle(true);
      }
    }, [isToggle]);
    useEffect(() => {
      if (isToggle) {
        alert("switch on!");
      } else {
        alert("switch off!");
      }
    }, [isToggle]);
    return /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement(ToggleSwitchButton_default, { className: "toggle-switch-button", handleChange }));
  };

  // popup/index.tsx
  var container = document.getElementById("popup");
  var root = (0, import_client.createRoot)(container);
  root.render(/* @__PURE__ */ import_react4.default.createElement(Popup, null));
})();
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
