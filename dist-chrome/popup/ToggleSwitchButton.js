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
  function node(value, root, parent, type, props, children, length2, siblings) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
  }
  function lift(root) {
    while (root.root)
      root = copy(root.root, { children: [root] });
    append(root, root.siblings);
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
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
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
              append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
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
              append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
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
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
      for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
        if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
          props[k2++] = z2;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
  }
  function comment(value, root, parent, siblings) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
  }
  function declaration(value, root, parent, length2, siblings) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
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
})();
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
