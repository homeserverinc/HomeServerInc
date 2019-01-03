/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 361);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeData; });
var __assign=function(){return(__assign=Object.assign||function(e){for(var a,s=1,t=arguments.length;s<t;s++)for(var r in a=arguments[s])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)};function mergeData(){for(var e,a,s={},t=arguments.length;t--;)for(var r=0,c=Object.keys(arguments[t]);r<c.length;r++)switch(e=c[r]){case"class":case"style":case"directives":Array.isArray(s[e])||(s[e]=[]),s[e]=s[e].concat(arguments[t][e]);break;case"staticClass":if(!arguments[t][e])break;void 0===s[e]&&(s[e]=""),s[e]&&(s[e]+=" "),s[e]+=arguments[t][e].trim();break;case"on":case"nativeOn":s[e]||(s[e]={});for(var n=0,o=Object.keys(arguments[t][e]||{});n<o.length;n++)a=o[n],s[e][a]?s[e][a]=[].concat(s[e][a],arguments[t][e][a]):s[e][a]=arguments[t][e][a];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":s[e]||(s[e]={}),s[e]=__assign({},arguments[t][e],s[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:s[e]||(s[e]=arguments[t][e])}return s}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = propsFactory;
/* unused harmony export props */
/* harmony export (immutable) */ __webpack_exports__["b"] = pickLinkProps;
/* unused harmony export omitLinkProps */
/* unused harmony export computed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_object__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_functional_data_merge__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





/**
 * The Link component is used in many other BV components.
 * As such, sharing its props makes supporting all its features easier.
 * However, some components need to modify the defaults for their own purpose.
 * Prefer sharing a fresh copy of the props to ensure mutations
 * do not affect other component references to the props.
 *
 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 * @return {{}}
 */
function propsFactory() {
  return {
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    active: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: 'active'
    },
    append: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String,
      default: 'active'
    },
    replace: {
      type: Boolean,
      default: false
    },
    routerTag: {
      type: String,
      default: 'a'
    },
    to: {
      type: [String, Object],
      default: null
    }
  };
}

var props = propsFactory();

function pickLinkProps(propsToPick) {
  var freshLinkProps = propsFactory();
  // Normalize everything to array.
  propsToPick = Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["b" /* concat */])(propsToPick);

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(freshLinkProps).reduce(function (memo, prop) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(propsToPick, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
}

function omitLinkProps(propsToOmit) {
  var freshLinkProps = propsFactory();
  // Normalize everything to array.
  propsToOmit = Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["b" /* concat */])(propsToOmit);

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(props).reduce(function (memo, prop) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(propsToOmit, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
}

var computed = {
  linkProps: function linkProps() {
    var linkProps = {};
    var propKeys = Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(props);

    for (var i = 0; i < propKeys.length; i++) {
      var prop = propKeys[i];
      // Computed Vue getters are bound to the instance.
      linkProps[prop] = this[prop];
    }

    return linkProps;
  }
};

function computeTag(props, parent) {
  return Boolean(parent.$router) && props.to && !props.disabled ? 'router-link' : 'a';
}

function computeHref(_ref, tag) {
  var disabled = _ref.disabled,
      href = _ref.href,
      to = _ref.to;

  // We've already checked the parent.$router in computeTag,
  // so router-link means live router.
  // When deferring to Vue Router's router-link,
  // don't use the href attr at all.
  // Must return undefined for router-link to populate href.
  if (tag === 'router-link') return void 0;
  // If href explicitly provided
  if (href) return href;
  // Reconstruct href when `to` used, but no router
  if (to) {
    // Fallback to `to` prop (if `to` is a string)
    if (typeof to === 'string') return to;
    // Fallback to `to.path` prop (if `to` is an object)
    if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && typeof to.path === 'string') return to.path;
  }
  // If nothing is provided use '#'
  return '#';
}

function computeRel(_ref2) {
  var target = _ref2.target,
      rel = _ref2.rel;

  if (target === '_blank' && rel === null) {
    return 'noopener';
  }
  return rel || null;
}

function clickHandlerFactory(_ref3) {
  var disabled = _ref3.disabled,
      tag = _ref3.tag,
      href = _ref3.href,
      suppliedHandler = _ref3.suppliedHandler,
      parent = _ref3.parent;

  var isRouterLink = tag === 'router-link';

  return function onClick(e) {
    if (disabled && e instanceof Event) {
      // Stop event from bubbling up.
      e.stopPropagation();
      // Kill the event loop attached to this specific EventTarget.
      e.stopImmediatePropagation();
    } else {
      parent.$root.$emit('clicked::link', e);

      if (isRouterLink && e.target.__vue__) {
        e.target.__vue__.$emit('click', e);
      }
      if (typeof suppliedHandler === 'function') {
        suppliedHandler.apply(undefined, arguments);
      }
    }

    if (!isRouterLink && href === '#' || disabled) {
      // Stop scroll-to-top behavior or navigation.
      e.preventDefault();
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: propsFactory(),
  render: function render(h, _ref4) {
    var props = _ref4.props,
        data = _ref4.data,
        parent = _ref4.parent,
        children = _ref4.children;

    var tag = computeTag(props, parent);
    var rel = computeRel(props);
    var href = computeHref(props, tag);
    var eventType = tag === 'router-link' ? 'nativeOn' : 'on';
    var suppliedHandler = (data[eventType] || {}).click;
    var handlers = { click: clickHandlerFactory({ tag: tag, href: href, disabled: props.disabled, suppliedHandler: suppliedHandler, parent: parent }) };

    var componentData = Object(__WEBPACK_IMPORTED_MODULE_2_vue_functional_data_merge__["a" /* mergeData */])(data, {
      class: [props.active ? props.exact ? props.exactActiveClass : props.activeClass : null, { disabled: props.disabled }],
      attrs: {
        rel: rel,
        href: href,
        target: props.target,
        tabindex: props.disabled ? '-1' : data.attrs ? data.attrs.tabindex : null,
        'aria-disabled': tag === 'a' && props.disabled ? 'true' : null
      },
      props: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* assign */])(props, { tag: props.routerTag })
    });

    // If href prop exists on router-link (even undefined or null) it fails working on SSR
    if (!componentData.attrs.href) {
      delete componentData.attrs.href;
    }

    // We want to overwrite any click handler since our callback
    // will invoke the supplied handler if !props.disabled
    componentData[eventType] = Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* assign */])(componentData[eventType] || {}, handlers);

    return h(tag, componentData, children);
  }
});

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Key Codes (events)
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  SPACE: 32,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35
});

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pluckProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(43);




/**
 * Given an array of properties or an object of property keys,
 * plucks all the values off the target object.
 * @param {{}|string[]} keysToPluck
 * @param {{}} objToPluck
 * @param {Function} transformFn
 * @return {{}}
 */
function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */];

  return (Object(__WEBPACK_IMPORTED_MODULE_1__array__["d" /* isArray */])(keysToPluck) ? keysToPluck.slice() : Object(__WEBPACK_IMPORTED_MODULE_0__object__["e" /* keys */])(keysToPluck)).reduce(function (memo, prop) {
    // eslint-disable-next-line no-sequences
    return memo[transformFn(prop)] = objToPluck[prop], memo;
  }, {});
}

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observeDOM;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(5);



/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [opts={childList: true, subtree: true}] observe options
 * @see http://stackoverflow.com/questions/3219758
 */
function observeDOM(el, callback, opts) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var eventListenerSupported = window.addEventListener;

  // Handle case where we might be passed a vue instance
  el = el ? el.$el || el : null;
  /* istanbul ignore next: dificult to test in JSDOM */
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["l" /* isElement */])(el)) {
    // We can't observe somthing that isn't an element
    return null;
  }

  var obs = null;

  /* istanbul ignore next: dificult to test in JSDOM */
  if (MutationObserver) {
    // Define a new observer
    obs = new MutationObserver(function (mutations) {
      var changed = false;
      // A Mutation can contain several change records, so we loop through them to see what has changed.
      // We break out of the loop early if any "significant" change has been detected
      for (var i = 0; i < mutations.length && !changed; i++) {
        // The muttion record
        var mutation = mutations[i];
        // Mutation Type
        var type = mutation.type;
        // DOM Node (could be any DOM Node type - HTMLElement, Text, comment, etc)
        var target = mutation.target;
        if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
          // We ignore nodes that are not TEXt (i.e. comments, etc) as they don't change layout
          changed = true;
        } else if (type === 'attributes') {
          changed = true;
        } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
          // This includes HTMLElement and Text Nodes being added/removed/re-arranged
          changed = true;
        }
      }
      if (changed) {
        // We only call the callback if a change that could affect layout/size truely happened.
        callback();
      }
    });

    // Have the observer observe foo for changes in children, etc
    obs.observe(el, Object(__WEBPACK_IMPORTED_MODULE_0__object__["a" /* assign */])({ childList: true, subtree: true }, opts));
  } else if (eventListenerSupported) {
    // Legacy interface. most likely not used in modern browsers
    el.addEventListener('DOMNodeInserted', callback, false);
    el.addEventListener('DOMNodeRemoved', callback, false);
  }

  // We return a reference to the observer so that obs.disconnect() can be called if necessary
  // To reduce overhead when the root element is hiiden
  return obs;
}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* unused harmony export getOwnPropertyNames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defineProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineProperty; });
/* unused harmony export freeze */
/* unused harmony export getOwnPropertyDescriptor */
/* unused harmony export getOwnPropertySymbols */
/* unused harmony export getPrototypeOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return create; });
/* unused harmony export isFrozen */
/* unused harmony export is */
/* harmony export (immutable) */ __webpack_exports__["f"] = readonlyDescriptor;
/**
 * Aliasing Object[method] allows the minifier to shorten methods to a single character variable,
 * as well as giving BV a chance to inject polyfills.
 * As long as we avoid
 * - import * as Object from "utils/object"
 * all unused exports should be removed by tree-shaking.
 */

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, varArgs) {
    // .length of function is 2

    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill
if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      // eslint-disable-next-line no-self-compare
      return x !== x && y !== y;
    }
  };
}

var assign = Object.assign;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var keys = Object.keys;
var defineProperties = Object.defineProperties;
var defineProperty = Object.defineProperty;
var freeze = Object.freeze;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getPrototypeOf = Object.getPrototypeOf;
var create = Object.create;
var isFrozen = Object.isFrozen;
var is = Object.is;

function readonlyDescriptor() {
  return { enumerable: true, configurable: false, writable: false };
}

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_array__ = __webpack_require__(3);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


/**
 * Issue #569: collapse::toggle::state triggered too many times
 * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
 */

var BVRL = '__BV_root_listeners__';

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    /**
         * Safely register event listeners on the root Vue node.
         * While Vue automatically removes listeners for individual components,
         * when a component registers a listener on root and is destroyed,
         * this orphans a callback because the node is gone,
         * but the root does not clear the callback.
         *
         * This adds a non-reactive prop to a vm on the fly
         * in order to avoid object observation and its performance costs
         * to something that needs no reactivity.
         * It should be highly unlikely there are any naming collisions.
         * @param {string} event
         * @param {function} callback
         * @chainable
         */
    listenOnRoot: function listenOnRoot(event, callback) {
      if (!this[BVRL] || !Object(__WEBPACK_IMPORTED_MODULE_0__utils_array__["d" /* isArray */])(this[BVRL])) {
        this[BVRL] = [];
      }
      this[BVRL].push({ event: event, callback: callback });
      this.$root.$on(event, callback);
      return this;
    },


    /**
         * Convenience method for calling vm.$emit on vm.$root.
         * @param {string} event
         * @param {*} args
         * @chainable
         */
    emitOnRoot: function emitOnRoot(event) {
      var _$root;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_$root = this.$root).$emit.apply(_$root, [event].concat(_toConsumableArray(args)));
      return this;
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (this[BVRL] && Object(__WEBPACK_IMPORTED_MODULE_0__utils_array__["d" /* isArray */])(this[BVRL])) {
      while (this[BVRL].length > 0) {
        // shift to process in order
        var _BVRL$shift = this[BVRL].shift(),
            event = _BVRL$shift.event,
            callback = _BVRL$shift.callback;

        this.$root.$off(event, callback);
      }
    }
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Close'
  },
  textVariant: {
    type: String,
    default: null
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        slots = _ref.slots;

    var componentData = {
      staticClass: 'close',
      class: _defineProperty({}, 'text-' + props.textVariant, props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(e) {
          // Ensure click on button HTML content is also disabled
          if (props.disabled && e instanceof Event) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      }
      // Careful not to override the slot with innerHTML
    };if (!slots().default) {
      componentData.domProps = { innerHTML: '&times;' };
    }
    return h('button', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, componentData), slots().default);
  }
});

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayIncludes; });
/* unused harmony export arrayFind */
/* harmony export (immutable) */ __webpack_exports__["b"] = concat;
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// es6-ified by @alexsasharegan
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      return Math.min(Math.max(toInteger(value), 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T = void 0;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue = void 0;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
// Needed for IE support
if (!Array.prototype.find) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// Static
var from = Array.from;
var isArray = Array.isArray;

// Instance
var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var arrayFind = function arrayFind(array, fn, thisArg) {
  return array.find(fn, thisArg);
};
function concat() {
  return Array.prototype.concat.apply([], arguments);
}

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pluck_props__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__link_link__ = __webpack_require__(10);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  pressed: {
    // tri-state prop: true, false or null
    // => on, off, not a toggle
    type: Boolean,
    default: null
  }
};

var linkProps = Object(__WEBPACK_IMPORTED_MODULE_5__link_link__["c" /* propsFactory */])();
delete linkProps.href.default;
delete linkProps.to.default;
var linkPropKeys = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["e" /* keys */])(linkProps);

var props = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])(linkProps, btnProps);

function handleFocus(evt) {
  if (evt.type === 'focusin') {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom__["a" /* addClass */])(evt.target, 'focus');
  } else if (evt.type === 'focusout') {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom__["s" /* removeClass */])(evt.target, 'focus');
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        children = _ref.children;

    var isLink = Boolean(props.href || props.to);
    var isToggle = typeof props.pressed === 'boolean';
    var on = {
      click: function click(e) {
        if (props.disabled && e instanceof Event) {
          e.stopPropagation();
          e.preventDefault();
        } else if (isToggle) {
          // Concat will normalize the value to an array
          // without double wrapping an array value in an array.
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_array__["b" /* concat */])(listeners['update:pressed']).forEach(function (fn) {
            if (typeof fn === 'function') {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (isToggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: [props.variant ? 'btn-' + props.variant : 'btn-secondary', (_ref2 = {}, _defineProperty(_ref2, 'btn-' + props.size, Boolean(props.size)), _defineProperty(_ref2, 'btn-block', props.block), _defineProperty(_ref2, 'disabled', props.disabled), _defineProperty(_ref2, 'active', props.pressed), _ref2)],
      props: isLink ? Object(__WEBPACK_IMPORTED_MODULE_1__utils_pluck_props__["a" /* default */])(linkPropKeys, props) : null,
      attrs: {
        type: isLink ? null : props.type,
        disabled: isLink ? null : props.disabled,
        // Data attribute not used for js logic,
        // but only for BS4 style selectors.
        'data-toggle': isToggle ? 'button' : null,
        'aria-pressed': isToggle ? String(props.pressed) : null,
        // Tab index is used when the component becomes a link.
        // Links are tabable, but don't allow disabled,
        // so we mimic that functionality by disabling tabbing.
        tabindex: props.disabled && isLink ? '-1' : data.attrs ? data.attrs['tabindex'] : null
      },
      on: on
    };

    return h(isLink ? __WEBPACK_IMPORTED_MODULE_5__link_link__["a" /* default */] : 'button', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, componentData), children);
  }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_object__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BvEvent = function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor.
    if (!type) {
      throw new TypeError('Failed to construct \'' + this.constructor.name + '\'. 1 argument required, ' + arguments.length + ' given.');
    }
    // Assign defaults first, the eventInit,
    // and the type last so it can't be overwritten.
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* assign */])(this, BvEvent.defaults(), eventInit, { type: type });
    // Freeze some props as readonly, but leave them enumerable.
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["c" /* defineProperties */])(this, {
      type: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      cancelable: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      nativeEvent: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      target: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      relatedTarget: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      vueTarget: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])()
    });
    // Create a private variable using closure scoping.
    var defaultPrevented = false;
    // Recreate preventDefault method. One way setter.
    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    };
    // Create 'defaultPrevented' publicly accessible prop
    // that can only be altered by the preventDefault method.
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["d" /* defineProperty */])(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: 'defaults',
    value: function defaults() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null
      };
    }
  }]);

  return BvEvent;
}();

/* harmony default export */ __webpack_exports__["a"] = (BvEvent);

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(362);


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MultiQuestionsFormComponent_vue__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MultiQuestionsFormComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_MultiQuestionsFormComponent_vue__);


var questionsForm = new Vue({
    el: '#questions-form',
    components: {
        'multi-questions-form': __WEBPACK_IMPORTED_MODULE_0__components_MultiQuestionsFormComponent_vue___default.a
    }
});

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(364)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(367)
/* template */
var __vue_template__ = __webpack_require__(381)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/MultiQuestionsFormComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0405b16c", Component.options)
  } else {
    hotAPI.reload("data-v-0405b16c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(365);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(95)("2ad6981d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0405b16c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MultiQuestionsFormComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0405b16c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MultiQuestionsFormComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\n.fill-questions {\n    min-height: 100vh;\n}\n.form-container {\n    position: fixed;\n    bottom: 0px;\n    width: 100%;\n}\n.outside-border {\n    border: 1px solid rgba(0, 0, 0, 0.125) !important;\n    border-radius: 0px;\n}\n.borderless {\n    border-bottom: 0 none !important;\n    border-right: 0 none !important;\n    border-radius: 0px;\n}\n.question {\n    padding: 0.45rem !important;\n}\n.question-body {\n    padding: 0 0 0 0.50rem !important;\n}\n.answer {\n    padding: 0.35rem !important;\n}\n.answer-body {\n    padding: 0 0 0 0.50rem !important;\n}\n.scrollable {\n    min-height: 100vh;\n    overflow-y: scroll;\n}\n.mb-15 {\n    margin-bottom: 15px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 366:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_Tree_vue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_Tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tree_Tree_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue_es_components_modal_modal__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue_es_directives_modal_modal__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var question = Object({
    'uuid': '',
    'text': '',
    'type': 'question',
    'questionType': 1,
    'children': []
});

var answer = Object({
    'uuid': '',
    'text': '',
    'type': 'answer',
    'controlType': '',
    'children': []
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            'tree': [{ "uuid": "", "text": "Is the area to be painted inside or outside?", "type": "question", "questionType": 1, "children": [{ "uuid": "a670e263-656e-4f3d-b26e-8fa878027742", "text": "Inside", "type": "answer", "controlType": 3, "children": [{ "uuid": "61bd3e09-67a6-4740-91b8-44e540330f37", "text": "What type of service do you need?", "type": "question", "questionType": 1, "children": [{ "uuid": "451a5e2c-1096-4558-b07f-7f8d2103eb46", "text": "Standard Painting", "type": "answer", "controlType": 3, "children": [{ "uuid": "327c4ffc-ede5-4be2-ba31-46b7a5779f93", "text": "How big is the painting job?", "type": "question", "questionType": 1, "children": [{ "uuid": "9093dd10-9eb4-480f-8313-7ce7a82b3495", "text": "Less than 1 room", "type": "answer", "controlType": 3, "children": [{ "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd", "text": "Which parts of the room do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde", "text": "Wall", "type": "answer", "controlType": 1, "children": [{ "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0", "text": "What is the approximate square footage of the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1", "text": "Less than 300 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e", "text": "300-500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6", "text": "501-1000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965", "text": "1001-1500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84", "text": "1501-2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137", "text": "More than 2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }] }] }, { "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab", "text": "Ceilings", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080", "text": "Molding and trim", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42", "text": "Window frames and sills", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313", "text": "Doors", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f", "text": "Closets", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9", "text": "Other", "type": "answer", "controlType": 2, "children": [] }] }] }, { "uuid": "de9c954c-9169-4b9f-9f48-c4a2904d4ae3", "text": "1-2 rooms", "type": "answer", "controlType": 3, "children": [{ "uuid": "ed471123-3617-461a-a047-b8ce61d8f4b4", "text": "Which rooms do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "6e083610-5cc4-4a90-ab80-ca32e46718c0", "text": "Kitchen", "type": "answer", "controlType": 1, "children": [{ "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd", "text": "Which parts of the room do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde", "text": "Wall", "type": "answer", "controlType": 1, "children": [{ "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0", "text": "What is the approximate square footage of the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1", "text": "Less than 300 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e", "text": "300-500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6", "text": "501-1000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965", "text": "1001-1500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84", "text": "1501-2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137", "text": "More than 2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }] }] }, { "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab", "text": "Ceilings", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080", "text": "Molding and trim", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42", "text": "Window frames and sills", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313", "text": "Doors", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f", "text": "Closets", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9", "text": "Other", "type": "answer", "controlType": 2, "children": [] }] }] }, { "uuid": "46c82d13-7de6-4211-b3e5-8472579fc307", "text": "Bathroom", "type": "answer", "controlType": 1, "children": [{ "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd", "text": "Which parts of the room do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde", "text": "Wall", "type": "answer", "controlType": 1, "children": [{ "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0", "text": "What is the approximate square footage of the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1", "text": "Less than 300 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e", "text": "300-500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6", "text": "501-1000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965", "text": "1001-1500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84", "text": "1501-2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137", "text": "More than 2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }] }] }, { "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab", "text": "Ceilings", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080", "text": "Molding and trim", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42", "text": "Window frames and sills", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313", "text": "Doors", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f", "text": "Closets", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9", "text": "Other", "type": "answer", "controlType": 2, "children": [] }] }] }, { "uuid": "90fadd65-bcf6-46aa-9436-a88cb876b334", "text": "Bedroom", "type": "answer", "controlType": 1, "children": [{ "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd", "text": "Which parts of the room do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde", "text": "Wall", "type": "answer", "controlType": 1, "children": [{ "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0", "text": "What is the approximate square footage of the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1", "text": "Less than 300 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e", "text": "300-500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6", "text": "501-1000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965", "text": "1001-1500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84", "text": "1501-2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137", "text": "More than 2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }] }] }, { "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab", "text": "Ceilings", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080", "text": "Molding and trim", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42", "text": "Window frames and sills", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313", "text": "Doors", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f", "text": "Closets", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9", "text": "Other", "type": "answer", "controlType": 2, "children": [] }] }] }, { "uuid": "2b59e4c1-540b-4e52-b05c-51293020e18a", "text": "Hallway", "type": "answer", "controlType": 1, "children": [{ "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd", "text": "Which parts of the room do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde", "text": "Wall", "type": "answer", "controlType": 1, "children": [{ "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0", "text": "What is the approximate square footage of the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1", "text": "Less than 300 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e", "text": "300-500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6", "text": "501-1000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965", "text": "1001-1500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84", "text": "1501-2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137", "text": "More than 2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }] }] }, { "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab", "text": "Ceilings", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080", "text": "Molding and trim", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42", "text": "Window frames and sills", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313", "text": "Doors", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f", "text": "Closets", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9", "text": "Other", "type": "answer", "controlType": 2, "children": [] }] }] }, { "uuid": "e64b2cc4-2280-465a-8e7b-5238d9af4165", "text": "Living areas", "type": "answer", "controlType": 1, "children": [{ "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd", "text": "Which parts of the room do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde", "text": "Wall", "type": "answer", "controlType": 1, "children": [{ "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0", "text": "What is the approximate square footage of the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1", "text": "Less than 300 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e", "text": "300-500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6", "text": "501-1000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965", "text": "1001-1500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84", "text": "1501-2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137", "text": "More than 2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }] }] }, { "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab", "text": "Ceilings", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080", "text": "Molding and trim", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42", "text": "Window frames and sills", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313", "text": "Doors", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f", "text": "Closets", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9", "text": "Other", "type": "answer", "controlType": 2, "children": [] }] }] }, { "uuid": "9203778f-0ea3-4964-a653-5daabcd51ee9", "text": "Stairs", "type": "answer", "controlType": 1, "children": [{ "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd", "text": "Which parts of the room do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde", "text": "Wall", "type": "answer", "controlType": 1, "children": [{ "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0", "text": "What is the approximate square footage of the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1", "text": "Less than 300 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e", "text": "300-500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6", "text": "501-1000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965", "text": "1001-1500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84", "text": "1501-2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137", "text": "More than 2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }] }] }, { "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab", "text": "Ceilings", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080", "text": "Molding and trim", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42", "text": "Window frames and sills", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313", "text": "Doors", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f", "text": "Closets", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9", "text": "Other", "type": "answer", "controlType": 2, "children": [] }] }] }, { "uuid": "e69c823b-4a30-49a8-a4f6-f58efe142628", "text": "Other", "type": "answer", "controlType": 2, "children": [{ "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd", "text": "Which parts of the room do you want to paint? Select all that apply.", "type": "question", "questionType": 2, "children": [{ "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde", "text": "Wall", "type": "answer", "controlType": 1, "children": [{ "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0", "text": "What is the approximate square footage of the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1", "text": "Less than 300 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e", "text": "300-500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6", "text": "501-1000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965", "text": "1001-1500 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84", "text": "1501-2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }, { "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137", "text": "More than 2000 sq. ft.", "type": "answer", "controlType": 3, "children": [{ "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8", "text": "Approximately how high are the ceilings in the area to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c", "text": "Under 10 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624", "text": "10-12 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74", "text": "12-14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014", "text": "Over 14 feet", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "75c953b5-2313-468c-be3b-9d495d343666", "text": "Im not sure", "type": "answer", "controlType": 3, "children": [{ "uuid": "494db527-20d0-4542-8168-58c08864c1e1", "text": "Who will move and cover furniture in the rooms to be painted?", "type": "question", "questionType": 1, "children": [{ "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1", "text": "The area is unfurnished", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297", "text": "Ill move and cover furniture", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338", "text": "I want the pro to move and cover furniture", "type": "answer", "controlType": 3, "children": [] }] }] }] }] }] }] }, { "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab", "text": "Ceilings", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080", "text": "Molding and trim", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42", "text": "Window frames and sills", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313", "text": "Doors", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f", "text": "Closets", "type": "answer", "controlType": 1, "children": [] }, { "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9", "text": "Other", "type": "answer", "controlType": 2, "children": [] }] }] }] }] }, { "uuid": "36dda4f3-e700-4414-bf5c-3ff12d1c9101", "text": "3-4 rooms", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "8b7745b2-b83d-448f-a644-eb8194636816", "text": "5 or more rooms", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "5223d81c-60a8-4178-9684-3abdd20c7346", "text": "Whole house", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "b115dfe1-091b-4097-8a86-0ec091eb4377", "text": "Trim, cabinets or other objects", "type": "answer", "controlType": 3, "children": [] }] }] }, { "uuid": "c5894889-03c3-4143-90e4-efdbc943f88c", "text": "Faux, texture and decorative painting", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "ed61380a-f905-499a-be36-f79bebe395bb", "text": "Wallpaper hanging", "type": "answer", "controlType": 3, "children": [] }, { "uuid": "87f7a339-4f42-4b08-b139-30ab8a064007", "text": "Other", "type": "answer", "controlType": 4, "children": [] }] }] }, { "uuid": "4777c899-a293-4313-911d-44c02d4299e6", "text": "Outside", "type": "answer", "controlType": 3, "children": [] }] }],
            'activeNode': null,
            'deleteNode': null,
            'copyNode': null,
            'isEditing': false,
            'newQuestion': question,
            'newAnswer': answer
        };
    },

    computed: {
        //
    },
    components: {
        'Tree': __WEBPACK_IMPORTED_MODULE_0__tree_Tree_vue___default.a,
        'b-modal': __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue_es_components_modal_modal__["a" /* default */]
    },
    directives: {
        'b-modal': __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue_es_directives_modal_modal__["a" /* default */]
    },
    mounted: function mounted() {
        //console.log(LOCAL_URLS.QUESTION.CREATE);
    },
    updated: function updated() {},

    methods: {
        doOnNodeClickAdd: function doOnNodeClickAdd(node) {
            this.activeNode = node;
            if (this.activeNode.type == 'question') {
                this.newAnswer.uuid = __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default()();
                console.log(this.activeNode.questionType);
                this.newAnswer.controlType = this.activeNode.questionType == 1 ? 3 : 1;
                this.$refs.AddAnswerModal.show();
            } else {
                this.newQuestion.uuid = __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default()();
                this.$refs.AddQuestionModal.show();
            }
        },
        resetObjs: function resetObjs() {
            this.newQuestion = {
                'uuid': '',
                'text': '',
                'type': 'question',
                'questionType': 1,
                'children': []
            };
            this.newAnswer = {
                'uuid': '',
                'text': '',
                'type': 'answer',
                'controlType': '',
                'children': []
            };
        },
        doOnNodeClickDel: function doOnNodeClickDel(node) {
            this.deleteNode = node;
            this.$refs.ConfirmDelNodeModal.show();
        },
        doOnNodeClickEdit: function doOnNodeClickEdit(node) {
            this.isEditing = true;
            this.activeNode = node;
            if (node.type == 'question') {
                this.copyObj(node, this.newQuestion);
                this.$refs.AddQuestionModal.show();
            } else {
                this.copyObj(node, this.newAnswer);
                this.$refs.AddAnswerModal.show();
            }
        },
        doOnDeleteNode: function doOnDeleteNode() {
            var _this = this;

            this.$refs.ConfirmDelNodeModal.hide();
            this.tree.forEach(function (q, i) {
                if (q.uuid === _this.deleteNode.uuid) {
                    _this.tree.splice(i, 1);
                } else {
                    _this.nodeDelete(q, _this.deleteNode);
                }
            });
            this.deleteNode = null;
        },
        addNewRootQuestion: function addNewRootQuestion() {
            this.resetObjs();
            this.$refs.AddQuestionModal.show();
        },
        doOnAddNewQuestion: function doOnAddNewQuestion() {
            if (this.isEditing) {
                console.log('isEditing');
                this.copyObj(this.newQuestion, this.activeNode);
                this.isEditing = false;
            } else {
                console.log('not isEditing');
                if (this.activeNode == null) {
                    this.tree.push(this.newQuestion);
                } else {
                    console.log(this.activeNode);
                    this.activeNode.children.push(this.newQuestion);
                }
            }
            this.activeNode = null;
            this.resetObjs();
        },
        doOnAddNewAnswer: function doOnAddNewAnswer() {
            if (this.isEditing) {
                console.log('isEditing');
                this.copyObj(this.newAnswer, this.activeNode);
                this.isEditing = false;
            } else {
                console.log('not isEditing');
                console.log(this.activeNode);
                this.activeNode.children.push(this.newAnswer);
            }
            this.activeNode = null;
            this.resetObjs();
        },
        nodeDelete: function nodeDelete(rootNode, node) {
            var _this2 = this;

            rootNode.children.forEach(function (e, i) {
                if (e.uuid === node.uuid) {
                    rootNode.children.splice(i, 1);
                    return;
                } else {
                    _this2.nodeDelete(e, node);
                }
            });
        },
        focusModalInput: function focusModalInput() {
            this.$refs.inputTextModal.focus();
        },
        doOnNodeClickCopy: function doOnNodeClickCopy(node) {
            this.copyNode = node;
        },
        doOnNodeClickPaste: function doOnNodeClickPaste(node) {
            node.children.push(this.copyNode);
            this.resetObjs();
        },
        copyObj: function copyObj(from, to) {
            for (var p in from) {
                to[p] = from[p];
            }
        }
    }
});

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(369)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(371)
/* template */
var __vue_template__ = __webpack_require__(377)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/tree/Tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cd47254", Component.options)
  } else {
    hotAPI.reload("data-v-2cd47254", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(95)("952c897a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2cd47254\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tree.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2cd47254\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tree.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\n.tree {\n    background-color: rgb(122, 165, 190);\n}\n.list-group {\n    border-bottom: 0 none !important;\n    border-right: 0 none !important;\n    border-radius: 0px !important;\n}\n.btn-outline-secondary {\n    border: none !important;\n    border-radius: 0 !important;\n}\n.list-group-item {\n    margin-bottom: 2px;\n    padding: 0 0 0 0.55rem !important;\n    border: 0 none !important;\n    border-radius: 0px !important;\n}\n.outside-border {\n    border-bottom: 0.55rem solid rgba(0, 0, 0, 0.125) !important;\n    border-radius: 0px;\n}\n.question-bottom-border {\n    border-bottom: 0.55rem solid #d6d8db !important;\n}\n.answer-bottom-border {\n    border-bottom: 0.55rem solid rgba(255, 255, 255, 0.125) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NodeTree__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NodeTree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__NodeTree__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        treeData: Object
    },
    components: {
        NodeTree: __WEBPACK_IMPORTED_MODULE_0__NodeTree___default.a
    },
    methods: {
        handleClickAdd: function handleClickAdd(node) {
            this.$emit('node-click-add', node);
        },
        handleClickEdit: function handleClickEdit(node) {
            this.$emit('node-click-edit', node);
        },
        handleClickDel: function handleClickDel(node) {
            this.$emit('node-click-del', node);
        },
        handleClickCopy: function handleClickCopy(node) {
            this.$emit('node-click-copy', node);
        },
        handleClickPaste: function handleClickPaste(node) {
            this.$emit('node-click-paste', node);
        }
    }
});

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(373)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(375)
/* template */
var __vue_template__ = __webpack_require__(376)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/tree/NodeTree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed32b914", Component.options)
  } else {
    hotAPI.reload("data-v-ed32b914", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(374);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(95)("551a7e04", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed32b914\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NodeTree.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed32b914\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NodeTree.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\n.node-padding {\n    padding: 0.35rem 1.25rem 0.65rem 0rem !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "node",
    props: {
        node: Object,
        handleClickAdd: Function,
        handleClickEdit: Function,
        handleClickDel: Function,
        handleClickCopy: Function,
        handleClickPaste: Function
    },
    methods: {
        nodeTypeText: function nodeTypeText() {
            if (this.node.type == 'answer') {
                switch (this.node.controlType) {
                    case 1:
                        return 'Checkbox';
                        break;
                    case 2:
                        return 'Checkbox/Text';
                        break;
                    case 3:
                        return 'Radio Buttom';
                        break;
                    default:
                        return 'Radio Buttom/Text';
                        break;
                }
            } else {
                switch (this.node.questionType) {
                    case 1:
                        return 'Single Choice';
                        break;

                    default:
                        return 'Multiple Choices';
                        break;
                }
            }
        }
    }
});

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "list-group-item list-group-item-action",
      class: {
        "list-group-item-secondary": _vm.node.type == "question",
        "list-group-item-light": _vm.node.type == "answer"
      }
    },
    [
      _c("div", [
        _c("div", { staticClass: "card-body text-left node-padding" }, [
          _vm._v(
            "\n              " + _vm._s(_vm.node.text) + "  \n              "
          ),
          _c(
            "span",
            {
              staticClass: "badge",
              class: {
                "badge-light": _vm.node.type == "question",
                "badge-secondary": _vm.node.type == "answer"
              }
            },
            [
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.nodeTypeText()) +
                  "\n              "
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "float-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-success",
                attrs: {
                  id: "btn-1",
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title:
                    _vm.node.type == "question"
                      ? "Add new Answer"
                      : "Add new Question",
                  disabled:
                    _vm.node.type == "answer" && _vm.node.children.length > 0
                },
                on: {
                  click: function($event) {
                    _vm.handleClickAdd(_vm.node)
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-plus" })]
            ),
            _vm._v(" "),
            _c("span", { staticStyle: { width: "3em" } }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-warning",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title:
                    _vm.node.type == "question"
                      ? "Edit this Question"
                      : "Edit this Answer",
                  id: "btn-2"
                },
                on: {
                  click: function($event) {
                    _vm.handleClickEdit(_vm.node)
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-edit" })]
            ),
            _vm._v(" "),
            _vm.node.type == "question"
              ? _c("span", { staticStyle: { width: "3em" } })
              : _vm._e(),
            _vm._v(" "),
            _vm.node.type == "question"
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: {
                      id: "btn-3",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: "Copy this Question"
                    },
                    on: {
                      click: function($event) {
                        _vm.handleClickCopy(_vm.node)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-copy" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.node.type == "answer"
              ? _c("span", { staticStyle: { width: "3em" } })
              : _vm._e(),
            _vm._v(" "),
            _vm.node.type == "answer"
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-secondary",
                    attrs: {
                      id: "btn-4",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: "Paste Question"
                    },
                    on: {
                      click: function($event) {
                        _vm.handleClickPaste(_vm.node)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-paste" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticStyle: { width: "3em" } }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-danger",
                attrs: {
                  id: "btn-5",
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title:
                    _vm.node.type == "question"
                      ? "Delete this Question"
                      : "Delete this Answer"
                },
                on: {
                  click: function($event) {
                    _vm.handleClickDel(_vm.node)
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-trash" })]
            )
          ])
        ]),
        _vm._v(" "),
        _vm.node.children && _vm.node.children.length
          ? _c(
              "ul",
              {
                staticClass: "list-group",
                class: {
                  "question-bottom-border": _vm.node.type == "question",
                  "answer-bottom-border": _vm.node.type == "answer"
                },
                staticStyle: { "margin-bottom": "0px !important" }
              },
              _vm._l(_vm.node.children, function(child, index) {
                return _c("node", {
                  key: index,
                  attrs: {
                    node: child,
                    "handle-click-add": _vm.handleClickAdd,
                    "handle-click-del": _vm.handleClickDel,
                    "handle-click-edit": _vm.handleClickEdit,
                    "handle-click-copy": _vm.handleClickCopy,
                    "handle-click-paste": _vm.handleClickPaste
                  }
                })
              })
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ed32b914", module.exports)
  }
}

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c(
        "ul",
        { staticClass: "list-group" },
        [
          _c("node-tree", {
            attrs: {
              node: _vm.treeData,
              "handle-click-add": this.handleClickAdd,
              "handle-click-edit": this.handleClickEdit,
              "handle-click-del": this.handleClickDel,
              "handle-click-copy": this.handleClickCopy,
              "handle-click-paste": this.handleClickPaste
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2cd47254", module.exports)
  }
}

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(379);
var bytesToUuid = __webpack_require__(380);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 379:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 380:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", [
        _vm.tree.length > 0
          ? _c("div", { staticClass: "card card-primary" }, [
              _c("div", { staticClass: "card-header" }, [_vm._v("Questions")]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "card-body",
                  staticStyle: { padding: "0 !important" }
                },
                _vm._l(_vm.tree, function(node, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      class: { "mb-15": index < _vm.tree.length - 1 }
                    },
                    [
                      _c("tree", {
                        attrs: { "tree-data": node },
                        on: {
                          "node-click-add": _vm.doOnNodeClickAdd,
                          "node-click-edit": _vm.doOnNodeClickEdit,
                          "node-click-del": _vm.doOnNodeClickDel,
                          "node-click-copy": _vm.doOnNodeClickCopy,
                          "node-click-paste": _vm.doOnNodeClickPaste
                        }
                      })
                    ],
                    1
                  )
                })
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "container-fluid",
            staticStyle: { "margin-top": "15px" }
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                on: { click: _vm.addNewRootQuestion }
              },
              [
                _c("i", { staticClass: "fas fa-plus" }),
                _vm._v("\n                Create a new Question\n            ")
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "AddQuestionModal",
          attrs: { id: "AddQuestionModal", title: "Add a new Question" },
          on: { shown: _vm.focusModalInput, ok: _vm.doOnAddNewQuestion }
        },
        [
          !_vm.isEditing
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "parent" } }, [_vm._v("Parent")]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "parent",
                    id: "parent",
                    disabled: ""
                  },
                  domProps: {
                    value: _vm.activeNode == null ? "" : _vm.activeNode.text
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newQuestion.uuid,
                      expression: "newQuestion.uuid"
                    }
                  ],
                  attrs: { type: "hidden", name: "uuid" },
                  domProps: { value: _vm.newQuestion.uuid },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.newQuestion, "uuid", $event.target.value)
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n                Question Type\n            ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col col-sm-6" }, [
                  _c("div", { staticClass: "custom-control custom-radio" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newQuestion.questionType,
                          expression: "newQuestion.questionType"
                        }
                      ],
                      staticClass: "custom-control-input",
                      attrs: {
                        type: "radio",
                        id: "singleChoiceQuestion",
                        name: "questionType",
                        disabled: _vm.isEditing
                      },
                      domProps: {
                        value: 1,
                        checked: _vm._q(_vm.newQuestion.questionType, 1)
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.newQuestion, "questionType", 1)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label",
                        attrs: { for: "singleChoiceQuestion" }
                      },
                      [_vm._v("Single choice")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col col-sm-6" }, [
                  _c("div", { staticClass: "custom-control custom-radio" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newQuestion.questionType,
                          expression: "newQuestion.questionType"
                        }
                      ],
                      staticClass: "custom-control-input",
                      attrs: {
                        type: "radio",
                        id: "multipleChoiseQuestion",
                        name: "questionType",
                        disabled: _vm.isEditing
                      },
                      domProps: {
                        value: 2,
                        checked: _vm._q(_vm.newQuestion.questionType, 2)
                      },
                      on: {
                        change: function($event) {
                          _vm.$set(_vm.newQuestion, "questionType", 2)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label",
                        attrs: { for: "multipleChoiseQuestion" }
                      },
                      [_vm._v("Multiple choices")]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "nodeText" } }, [_vm._v("Question")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newQuestion.text,
                  expression: "newQuestion.text"
                }
              ],
              ref: "inputTextModal",
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "inputQuestion",
                id: "inputQuestion"
              },
              domProps: { value: _vm.newQuestion.text },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newQuestion, "text", $event.target.value)
                }
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "AddAnswerModal",
          attrs: { id: "AddAnswerModal", title: "Add a new Answer" },
          on: { shown: _vm.focusModalInput, ok: _vm.doOnAddNewAnswer }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "parent" } }, [_vm._v("Parent")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "parent",
                id: "parent",
                disabled: ""
              },
              domProps: {
                value: _vm.activeNode == null ? "" : _vm.activeNode.text
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newAnswer.uuid,
                  expression: "newAnswer.uuid"
                }
              ],
              attrs: { type: "hidden", name: "uuid" },
              domProps: { value: _vm.newAnswer.uuid },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newAnswer, "uuid", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n                Control Type Type\n            ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _vm.activeNode && _vm.activeNode.questionType == 2
                  ? _c("div", { staticClass: "col col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-radio" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newAnswer.controlType,
                                expression: "newAnswer.controlType"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "checkBoxControl",
                              name: "checkBoxControl"
                            },
                            domProps: {
                              value: 1,
                              checked: _vm._q(_vm.newAnswer.controlType, 1)
                            },
                            on: {
                              change: function($event) {
                                _vm.$set(_vm.newAnswer, "controlType", 1)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "checkBoxControl" }
                            },
                            [_vm._v("Checkbox")]
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeNode && _vm.activeNode.questionType == 2
                  ? _c("div", { staticClass: "col col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-radio" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newAnswer.controlType,
                                expression: "newAnswer.controlType"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "checkBoxTextControl",
                              name: "checkBoxTextControl"
                            },
                            domProps: {
                              value: 2,
                              checked: _vm._q(_vm.newAnswer.controlType, 2)
                            },
                            on: {
                              change: function($event) {
                                _vm.$set(_vm.newAnswer, "controlType", 2)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "checkBoxTextControl" }
                            },
                            [_vm._v("Checkbox/Text")]
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeNode && _vm.activeNode.questionType == 1
                  ? _c("div", { staticClass: "col col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-radio" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newAnswer.controlType,
                                expression: "newAnswer.controlType"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "radioButtomControl",
                              name: "radioButtomControl"
                            },
                            domProps: {
                              value: 3,
                              checked: _vm._q(_vm.newAnswer.controlType, 3)
                            },
                            on: {
                              change: function($event) {
                                _vm.$set(_vm.newAnswer, "controlType", 3)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "radioButtomControl" }
                            },
                            [_vm._v("Radio Button")]
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeNode && _vm.activeNode.questionType == 1
                  ? _c("div", { staticClass: "col col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-radio" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newAnswer.controlType,
                                expression: "newAnswer.controlType"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "radioButtomTextControl",
                              name: "radioButtomTextControl"
                            },
                            domProps: {
                              value: 4,
                              checked: _vm._q(_vm.newAnswer.controlType, 4)
                            },
                            on: {
                              change: function($event) {
                                _vm.$set(_vm.newAnswer, "controlType", 4)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "radioButtomTextControl" }
                            },
                            [_vm._v("Radio Button/Text")]
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "inputAnswer" } }, [_vm._v("Answer")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newAnswer.text,
                  expression: "newAnswer.text"
                }
              ],
              ref: "inputTextModal",
              staticClass: "form-control",
              attrs: { type: "text", name: "inputAnswer", id: "inputAnswer" },
              domProps: { value: _vm.newAnswer.text },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newAnswer, "text", $event.target.value)
                }
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ConfirmDelNodeModal",
          attrs: { id: "ConfirmDelNodeModal", title: "Confirmation" }
        },
        [
          _vm._v(
            "\n        \n        Do you really want to remove the " +
              _vm._s(_vm.deleteNode ? _vm.deleteNode.type : "") +
              ': "' +
              _vm._s(_vm.deleteNode ? _vm.deleteNode.text : "") +
              '"?\n\n        '
          ),
          _c(
            "div",
            {
              staticClass: "w-100",
              attrs: { slot: "modal-footer" },
              slot: "modal-footer"
            },
            [
              _c("div", { staticClass: "float-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: { click: _vm.doOnDeleteNode }
                  },
                  [_c("i", { staticClass: "fas fa-thumbs-up" }), _vm._v(" Yes")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    on: {
                      click: function($event) {
                        _vm.$refs.ConfirmDelNodeModal.hide()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-thumbs-down" }),
                    _vm._v(" No")
                  ]
                )
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card div card-secondary" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Enquirity")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("label", { attrs: { for: "enquirity_name" } }, [
              _vm._v("Title")
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "enquirity_name",
                id: "enquirity_name"
              }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0405b16c", module.exports)
  }
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
function identity(x) {
  return x;
}

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unbindTargets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_object__ = __webpack_require__(2);


var allListenTypes = { hover: true, click: true, focus: true };

var BVBoundListeners = '__BV_boundEventListeners__';

var bindTargets = function bindTargets(vnode, binding, listenTypes, fn) {
  var targets = Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(binding.modifiers || {}).filter(function (t) {
    return !allListenTypes[t];
  });

  if (binding.value) {
    targets.push(binding.value);
  }

  var listener = function listener() {
    fn({ targets: targets, vnode: vnode });
  };

  Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      vnode.elm.addEventListener(type, listener);
      var boundListeners = vnode.elm[BVBoundListeners] || {};
      boundListeners[type] = boundListeners[type] || [];
      boundListeners[type].push(listener);
      vnode.elm[BVBoundListeners] = boundListeners;
    }
  });

  // Return the list of targets
  return targets;
};

var unbindTargets = function unbindTargets(vnode, binding, listenTypes) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      var boundListeners = vnode.elm[BVBoundListeners] && vnode.elm[BVBoundListeners][type];
      if (boundListeners) {
        boundListeners.forEach(function (listener) {
          return vnode.elm.removeEventListener(type, listener);
        });
        delete vnode.elm[BVBoundListeners][type];
      }
    }
  });
};



/* harmony default export */ __webpack_exports__["b"] = (bindTargets);

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return reflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return setAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hasAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getBCR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return eventOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventOff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(3);


// Determine if an element is an HTML Element
var isElement = function isElement(el) {
  return el && el.nodeType === Node.ELEMENT_NODE;
};

// Determine if an HTML element is visible - Faster than CSS check
var isVisible = function isVisible(el) {
  return isElement(el) && document.body.contains(el) && el.getBoundingClientRect().height > 0 && el.getBoundingClientRect().width > 0;
};

// Determine if an element is disabled
var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || el.classList.contains('disabled') || Boolean(el.getAttribute('disabled'));
};

// Cause/wait-for an element to reflow it's content (adjusting it's height/width)
var reflow = function reflow(el) {
  // requsting an elements offsetHight will trigger a reflow of the element content
  return isElement(el) && el.offsetHeight;
};

// Select all elements matching selector. Returns [] if none found
var selectAll = function selectAll(selector, root) {
  if (!isElement(root)) {
    root = document;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__array__["c" /* from */])(root.querySelectorAll(selector));
};

// Select a single element, returns null if not found
var select = function select(selector, root) {
  if (!isElement(root)) {
    root = document;
  }
  return root.querySelector(selector) || null;
};

// Determine if an element matches a selector
var matches = function matches(el, selector) {
  if (!isElement(el)) {
    return false;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  // Prefer native implementations over polyfill function
  var proto = Element.prototype;
  var Matches = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector ||
  /* istanbul ignore next */
  function (sel) {
    var element = this;
    var m = selectAll(sel, element.document || element.ownerDocument);
    var i = m.length;
    // eslint-disable-next-line no-empty
    while (--i >= 0 && m.item(i) !== element) {}
    return i > -1;
  };

  return Matches.call(el, selector);
};

// Finds closest element matching selector. Returns null if not found
var closest = function closest(selector, root) {
  if (!isElement(root)) {
    return null;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  // Since we dont support IE < 10, we can use the "Matches" version of the polyfill for speed
  // Prefer native implementation over polyfill function
  var Closest = Element.prototype.closest ||
  /* istanbul ignore next */
  function (sel) {
    var element = this;
    if (!document.documentElement.contains(element)) {
      return null;
    }
    do {
      // Use our "patched" matches function
      if (matches(element, sel)) {
        return element;
      }
      element = element.parentElement;
    } while (element !== null);
    return null;
  };

  var el = Closest.call(root, selector);
  // Emulate jQuery closest and return null if match is the passed in element (root)
  return el === root ? null : el;
};

// Get an element given an ID
var getById = function getById(id) {
  return document.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
};

// Add a class to an element
var addClass = function addClass(el, className) {
  if (className && isElement(el)) {
    el.classList.add(className);
  }
};

// Remove a class from an element
var removeClass = function removeClass(el, className) {
  if (className && isElement(el)) {
    el.classList.remove(className);
  }
};

// Test if an element has a class
var hasClass = function hasClass(el, className) {
  if (className && isElement(el)) {
    return el.classList.contains(className);
  }
  return false;
};

// Set an attribute on an element
var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
};

// Remove an attribute from an element
var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
};

// Get an attribute value from an element (returns null if not found)
var getAttr = function getAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.getAttribute(attr);
  }
  return null;
};

// Determine if an attribute exists on an element (returns true or false, or null if element not found)
var hasAttr = function hasAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.hasAttribute(attr);
  }
  return null;
};

// Return the Bounding Client Rec of an element. Retruns null if not an element
var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
};

// Get computed style object for an element
var getCS = function getCS(el) {
  return isElement(el) ? window.getComputedStyle(el) : {};
};

// Return an element's offset wrt document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
var offset = function offset(el) {
  if (isElement(el)) {
    if (!el.getClientRects().length) {
      return { top: 0, left: 0 };
    }
    var bcr = getBCR(el);
    var win = el.ownerDocument.defaultView;
    return {
      top: bcr.top + win.pageYOffset,
      left: bcr.left + win.pageXOffset
    };
  }
};

// Return an element's offset wrt to it's offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position
var position = function position(el) {
  if (!isElement(el)) {
    return;
  }
  var parentOffset = { top: 0, left: 0 };
  var offsetSelf = void 0;
  var offsetParent = void 0;
  if (getCS(el).position === 'fixed') {
    offsetSelf = getBCR(el);
  } else {
    offsetSelf = offset(el);
    var doc = el.ownerDocument;
    offsetParent = el.offsetParent || doc.documentElement;
    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }
    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      parentOffset.top += parseFloat(getCS(offsetParent).borderTopWidth);
      parentOffset.left += parseFloat(getCS(offsetParent).borderLeftWidth);
    }
  }
  return {
    top: offsetSelf.top - parentOffset.top - parseFloat(getCS(el).marginTop),
    left: offsetSelf.left - parentOffset.left - parseFloat(getCS(el).marginLeft)
  };
};

// Attach an event listener to an element
var eventOn = function eventOn(el, evtName, handler) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler);
  }
};

// Remove an event listener from an element
var eventOff = function eventOff(el, evtName, handler) {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler);
  }
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_close__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_id__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_listen_on_root__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_observe_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warn__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_key_codes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bv_event_class__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_dom__ = __webpack_require__(5);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












// Selectors for padding/margin adjustments
var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'

  // ObserveDom config
};var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['style', 'class']
};

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_id__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_listen_on_root__["a" /* default */]],
  components: { bBtn: __WEBPACK_IMPORTED_MODULE_0__button_button__["a" /* default */], bBtnClose: __WEBPACK_IMPORTED_MODULE_1__button_button_close__["a" /* default */] },
  render: function render(h) {
    var _this = this;

    var $slots = this.$slots;
    // Modal Header
    var header = h(false);
    if (!this.hideHeader) {
      var modalHeader = $slots['modal-header'];
      if (!modalHeader) {
        var closeButton = h(false);
        if (!this.hideHeaderClose) {
          closeButton = h('b-btn-close', {
            props: {
              disabled: this.is_transitioning,
              ariaLabel: this.headerCloseLabel,
              textVariant: this.headerTextVariant
            },
            on: {
              click: function click(evt) {
                _this.hide('header-close');
              }
            }
          }, [$slots['modal-header-close']]);
        }
        modalHeader = [h(this.titleTag, { class: ['modal-title'] }, [$slots['modal-title'] || this.title]), closeButton];
      }
      header = h('header', {
        ref: 'header',
        class: this.headerClasses,
        attrs: { id: this.safeId('__BV_modal_header_') }
      }, [modalHeader]);
    }
    // Modal Body
    var body = h('div', {
      ref: 'body',
      class: this.bodyClasses,
      attrs: { id: this.safeId('__BV_modal_body_') }
    }, [$slots.default]);
    // Modal Footer
    var footer = h(false);
    if (!this.hideFooter) {
      var modalFooter = $slots['modal-footer'];
      if (!modalFooter) {
        var cancelButton = h(false);
        if (!this.okOnly) {
          cancelButton = h('b-btn', {
            props: {
              variant: this.cancelVariant,
              size: this.buttonSize,
              disabled: this.cancelDisabled || this.busy || this.is_transitioning
            },
            on: {
              click: function click(evt) {
                _this.hide('cancel');
              }
            }
          }, [$slots['modal-cancel'] || this.cancelTitle]);
        }
        var okButton = h('b-btn', {
          props: {
            variant: this.okVariant,
            size: this.buttonSize,
            disabled: this.okDisabled || this.busy || this.is_transitioning
          },
          on: {
            click: function click(evt) {
              _this.hide('ok');
            }
          }
        }, [$slots['modal-ok'] || this.okTitle]);
        modalFooter = [cancelButton, okButton];
      }
      footer = h('footer', {
        ref: 'footer',
        class: this.footerClasses,
        attrs: { id: this.safeId('__BV_modal_footer_') }
      }, [modalFooter]);
    }
    // Assemble Modal Content
    var modalContent = h('div', {
      ref: 'content',
      class: ['modal-content'],
      attrs: {
        tabindex: '-1',
        role: 'document',
        'aria-labelledby': this.hideHeader ? null : this.safeId('__BV_modal_header_'),
        'aria-describedby': this.safeId('__BV_modal_body_')
      },
      on: {
        focusout: this.onFocusout,
        click: function click(evt) {
          evt.stopPropagation();
          // https://github.com/bootstrap-vue/bootstrap-vue/issues/1528
          _this.$root.$emit('bv::dropdown::shown');
        }
      }
    }, [header, body, footer]);
    // Modal Dialog wrapper
    var modalDialog = h('div', { class: this.dialogClasses }, [modalContent]);
    // Modal
    var modal = h('div', {
      ref: 'modal',
      class: this.modalClasses,
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.is_visible,
        expression: 'is_visible'
      }],
      attrs: {
        id: this.safeId(),
        role: 'dialog',
        'aria-hidden': this.is_visible ? null : 'true'
      },
      on: {
        click: this.onClickOut,
        keydown: this.onEsc
      }
    }, [modalDialog]);
    // Wrap modal in transition
    modal = h('transition', {
      props: {
        enterClass: '',
        enterToClass: '',
        enterActiveClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      },
      on: {
        'before-enter': this.onBeforeEnter,
        enter: this.onEnter,
        'after-enter': this.onAfterEnter,
        'before-leave': this.onBeforeLeave,
        leave: this.onLeave,
        'after-leave': this.onAfterLeave
      }
    }, [modal]);
    // Modal Backdrop
    var backdrop = h(false);
    if (!this.hideBackdrop && (this.is_visible || this.is_transitioning)) {
      backdrop = h('div', {
        class: this.backdropClasses,
        attrs: { id: this.safeId('__BV_modal_backdrop_') }
      });
    }
    // Assemble modal and backdrop
    var outer = h(false);
    if (!this.is_hidden) {
      outer = h('div', { attrs: { id: this.safeId('__BV_modal_outer_') } }, [modal, backdrop]);
    }
    // Wrap in DIV to maintain thi.$el reference for hide/show method aceess
    return h('div', {}, [outer]);
  },
  data: function data() {
    return {
      is_hidden: this.lazy || false,
      is_visible: false,
      is_transitioning: false,
      is_show: false,
      is_block: false,
      scrollbarWidth: 0,
      isBodyOverflowing: false,
      return_focus: this.returnFocus || null
    };
  },

  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleTag: {
      type: String,
      default: 'h5'
    },
    size: {
      type: String,
      default: 'md'
    },
    centered: {
      type: Boolean,
      default: false
    },
    buttonSize: {
      type: String,
      default: ''
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noCloseOnBackdrop: {
      type: Boolean,
      default: false
    },
    noCloseOnEsc: {
      type: Boolean,
      default: false
    },
    noEnforceFocus: {
      type: Boolean,
      default: false
    },
    headerBgVariant: {
      type: String,
      default: null
    },
    headerBorderVariant: {
      type: String,
      default: null
    },
    headerTextVariant: {
      type: String,
      default: null
    },
    headerClass: {
      type: [String, Array],
      default: null
    },
    bodyBgVariant: {
      type: String,
      default: null
    },
    bodyTextVariant: {
      type: String,
      default: null
    },
    modalClass: {
      type: [String, Array],
      default: null
    },
    bodyClass: {
      type: [String, Array],
      default: null
    },
    footerBgVariant: {
      type: String,
      default: null
    },
    footerBorderVariant: {
      type: String,
      default: null
    },
    footerTextVariant: {
      type: String,
      default: null
    },
    footerClass: {
      type: [String, Array],
      default: null
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    hideHeaderClose: {
      type: Boolean,
      default: false
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    },
    okOnly: {
      type: Boolean,
      default: false
    },
    okDisabled: {
      type: Boolean,
      default: false
    },
    cancelDisabled: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    returnFocus: {
      default: null
    },
    headerCloseLabel: {
      type: String,
      default: 'Close'
    },
    cancelTitle: {
      type: String,
      default: 'Cancel'
    },
    okTitle: {
      type: String,
      default: 'OK'
    },
    cancelVariant: {
      type: String,
      default: 'secondary'
    },
    okVariant: {
      type: String,
      default: 'primary'
    },
    lazy: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalClasses: function modalClasses() {
      return ['modal', {
        fade: !this.noFade,
        show: this.is_show,
        'd-block': this.is_block
      }, this.modalClass];
    },
    dialogClasses: function dialogClasses() {
      var _ref;

      return ['modal-dialog', (_ref = {}, _defineProperty(_ref, 'modal-' + this.size, Boolean(this.size)), _defineProperty(_ref, 'modal-dialog-centered', this.centered), _ref)];
    },
    backdropClasses: function backdropClasses() {
      return ['modal-backdrop', {
        fade: !this.noFade,
        show: this.is_show || this.noFade
      }];
    },
    headerClasses: function headerClasses() {
      var _ref2;

      return ['modal-header', (_ref2 = {}, _defineProperty(_ref2, 'bg-' + this.headerBgVariant, Boolean(this.headerBgVariant)), _defineProperty(_ref2, 'text-' + this.headerTextVariant, Boolean(this.headerTextVariant)), _defineProperty(_ref2, 'border-' + this.headerBorderVariant, Boolean(this.headerBorderVariant)), _ref2), this.headerClass];
    },
    bodyClasses: function bodyClasses() {
      var _ref3;

      return ['modal-body', (_ref3 = {}, _defineProperty(_ref3, 'bg-' + this.bodyBgVariant, Boolean(this.bodyBgVariant)), _defineProperty(_ref3, 'text-' + this.bodyTextVariant, Boolean(this.bodyTextVariant)), _ref3), this.bodyClass];
    },
    footerClasses: function footerClasses() {
      var _ref4;

      return ['modal-footer', (_ref4 = {}, _defineProperty(_ref4, 'bg-' + this.footerBgVariant, Boolean(this.footerBgVariant)), _defineProperty(_ref4, 'text-' + this.footerTextVariant, Boolean(this.footerTextVariant)), _defineProperty(_ref4, 'border-' + this.footerBorderVariant, Boolean(this.footerBorderVariant)), _ref4), this.footerClass];
    }
  },
  watch: {
    visible: function visible(newVal, oldVal) {
      if (newVal === oldVal) {
        return;
      }
      this[newVal ? 'show' : 'hide']();
    }
  },
  methods: {
    // Public Methods
    show: function show() {
      if (this.is_visible) {
        return;
      }
      var showEvt = new __WEBPACK_IMPORTED_MODULE_7__utils_bv_event_class__["a" /* default */]('show', {
        cancelable: true,
        vueTarget: this,
        target: this.$refs.modal,
        relatedTarget: null
      });
      this.emitEvent(showEvt);
      if (showEvt.defaultPrevented || this.is_visible) {
        // Don't show if canceled
        return;
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["j" /* hasClass */])(document.body, 'modal-open')) {
        // If another modal is already open, wait for it to close
        this.$root.$once('bv::modal::hidden', this.doShow);
      } else {
        // Show the modal
        this.doShow();
      }
    },
    hide: function hide(trigger) {
      if (!this.is_visible) {
        return;
      }
      var hideEvt = new __WEBPACK_IMPORTED_MODULE_7__utils_bv_event_class__["a" /* default */]('hide', {
        cancelable: true,
        vueTarget: this,
        target: this.$refs.modal,
        // this could be the trigger element/component reference
        relatedTarget: null,
        isOK: trigger || null,
        trigger: trigger || null,
        cancel: function cancel() {
          // Backwards compatibility
          Object(__WEBPACK_IMPORTED_MODULE_5__utils_warn__["a" /* default */])('b-modal: evt.cancel() is deprecated. Please use evt.preventDefault().');
          this.preventDefault();
        }
      });
      if (trigger === 'ok') {
        this.$emit('ok', hideEvt);
      } else if (trigger === 'cancel') {
        this.$emit('cancel', hideEvt);
      }
      this.emitEvent(hideEvt);
      // Hide if not canceled
      if (hideEvt.defaultPrevented || !this.is_visible) {
        return;
      }
      // stop observing for content changes
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
      }
      this.is_visible = false;
      this.$emit('change', false);
    },

    // Private method to finish showing modal
    doShow: function doShow() {
      var _this2 = this;

      // Plce modal in DOM if lazy
      this.is_hidden = false;
      this.$nextTick(function () {
        // We do this in nextTick to ensure the modal is in DOM first before we show it
        _this2.is_visible = true;
        _this2.$emit('change', true);
        // Observe changes in modal content and adjust if necessary
        _this2._observer = Object(__WEBPACK_IMPORTED_MODULE_4__utils_observe_dom__["a" /* default */])(_this2.$refs.content, _this2.adjustDialog.bind(_this2), OBSERVER_CONFIG);
      });
    },

    // Transition Handlers
    onBeforeEnter: function onBeforeEnter() {
      this.is_transitioning = true;
      this.checkScrollbar();
      this.setScrollbar();
      this.adjustDialog();
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["a" /* addClass */])(document.body, 'modal-open');
      this.setResizeEvent(true);
    },
    onEnter: function onEnter() {
      this.is_block = true;
      this.$refs.modal.scrollTop = 0;
    },
    onAfterEnter: function onAfterEnter() {
      var _this3 = this;

      this.is_show = true;
      this.is_transitioning = false;
      this.$nextTick(function () {
        _this3.focusFirst();
        var shownEvt = new __WEBPACK_IMPORTED_MODULE_7__utils_bv_event_class__["a" /* default */]('shown', {
          cancelable: false,
          vueTarget: _this3,
          target: _this3.$refs.modal,
          relatedTarget: null
        });
        _this3.emitEvent(shownEvt);
      });
    },
    onBeforeLeave: function onBeforeLeave() {
      this.is_transitioning = true;
      this.setResizeEvent(false);
    },
    onLeave: function onLeave() {
      // Remove the 'show' class
      this.is_show = false;
    },
    onAfterLeave: function onAfterLeave() {
      var _this4 = this;

      this.is_block = false;
      this.resetAdjustments();
      this.resetScrollbar();
      this.is_transitioning = false;
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["s" /* removeClass */])(document.body, 'modal-open');
      this.$nextTick(function () {
        _this4.is_hidden = _this4.lazy || false;
        _this4.returnFocusTo();
        var hiddenEvt = new __WEBPACK_IMPORTED_MODULE_7__utils_bv_event_class__["a" /* default */]('hidden', {
          cancelable: false,
          vueTarget: _this4,
          target: _this4.lazy ? null : _this4.$refs.modal,
          relatedTarget: null
        });
        _this4.emitEvent(hiddenEvt);
      });
    },

    // Event emitter
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$emit(type, bvEvt);
      this.$root.$emit('bv::modal::' + type, bvEvt);
    },

    // UI Event Handlers
    onClickOut: function onClickOut(evt) {
      // If backdrop clicked, hide modal
      if (this.is_visible && !this.noCloseOnBackdrop) {
        this.hide('backdrop');
      }
    },
    onEsc: function onEsc(evt) {
      // If ESC pressed, hide modal
      if (evt.keyCode === __WEBPACK_IMPORTED_MODULE_6__utils_key_codes__["a" /* default */].ESC && this.is_visible && !this.noCloseOnEsc) {
        this.hide('esc');
      }
    },
    onFocusout: function onFocusout(evt) {
      // If focus leaves modal, bring it back
      // 'focusout' Event Listener bound on content
      var content = this.$refs.content;
      if (!this.noEnforceFocus && this.is_visible && content && !content.contains(evt.relatedTarget)) {
        content.focus();
      }
    },

    // Resize Listener
    setResizeEvent: function setResizeEvent(on) {
      var _this5 = this;

      ;['resize', 'orientationchange'].forEach(function (evtName) {
        if (on) {
          Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["d" /* eventOn */])(window, evtName, _this5.adjustDialog);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["c" /* eventOff */])(window, evtName, _this5.adjustDialog);
        }
      });
    },

    // Root Listener handlers
    showHandler: function showHandler(id, triggerEl) {
      if (id === this.id) {
        this.return_focus = triggerEl || null;
        this.show();
      }
    },
    hideHandler: function hideHandler(id) {
      if (id === this.id) {
        this.hide();
      }
    },
    modalListener: function modalListener(bvEvt) {
      // If another modal opens, close this one
      if (bvEvt.vueTarget !== this) {
        this.hide();
      }
    },

    // Focus control handlers
    focusFirst: function focusFirst() {
      // Don't try and focus if we are SSR
      if (typeof document === 'undefined') {
        return;
      }
      var content = this.$refs.content;
      var modal = this.$refs.modal;
      var activeElement = document.activeElement;
      if (activeElement && content && content.contains(activeElement)) {
        // If activeElement is child of content, no need to change focus
      } else if (content) {
        if (modal) {
          modal.scrollTop = 0;
        }
        // Focus the modal content wrapper
        content.focus();
      }
    },
    returnFocusTo: function returnFocusTo() {
      // Prefer returnFocus prop over event specified return_focus value
      var el = this.returnFocus || this.return_focus || null;
      if (typeof el === 'string') {
        // CSS Selector
        el = Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["t" /* select */])(el);
      }
      if (el) {
        el = el.$el || el;
        if (Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["m" /* isVisible */])(el)) {
          el.focus();
        }
      }
    },

    // Utility methods
    getScrollbarWidth: function getScrollbarWidth() {
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'modal-scrollbar-measure';
      document.body.appendChild(scrollDiv);
      this.scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    },
    adjustDialog: function adjustDialog() {
      if (!this.is_visible) {
        return;
      }
      var modal = this.$refs.modal;
      var isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;
      if (!this.isBodyOverflowing && isModalOverflowing) {
        modal.style.paddingLeft = this.scrollbarWidth + 'px';
      }
      if (this.isBodyOverflowing && !isModalOverflowing) {
        modal.style.paddingRight = this.scrollbarWidth + 'px';
      }
    },
    resetAdjustments: function resetAdjustments() {
      var modal = this.$refs.modal;
      if (modal) {
        modal.style.paddingLeft = '';
        modal.style.paddingRight = '';
      }
    },
    checkScrollbar: function checkScrollbar() {
      var rect = Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["f" /* getBCR */])(document.body);
      this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
    },
    setScrollbar: function setScrollbar() {
      if (this.isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var computedStyle = window.getComputedStyle;
        var body = document.body;
        var scrollbarWidth = this.scrollbarWidth;
        // Adjust fixed content padding
        Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["u" /* selectAll */])(Selector.FIXED_CONTENT).forEach(function (el) {
          var actualPadding = el.style.paddingRight;
          var calculatedPadding = computedStyle(el).paddingRight || 0;
          Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["v" /* setAttr */])(el, 'data-padding-right', actualPadding);
          el.style.paddingRight = parseFloat(calculatedPadding) + scrollbarWidth + 'px';
        });
        // Adjust sticky content margin
        Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["u" /* selectAll */])(Selector.STICKY_CONTENT).forEach(function (el) {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = computedStyle(el).marginRight || 0;
          Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["v" /* setAttr */])(el, 'data-margin-right', actualMargin);
          el.style.marginRight = parseFloat(calculatedMargin) - scrollbarWidth + 'px';
        });
        // Adjust navbar-toggler margin
        Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["u" /* selectAll */])(Selector.NAVBAR_TOGGLER).forEach(function (el) {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = computedStyle(el).marginRight || 0;
          Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["v" /* setAttr */])(el, 'data-margin-right', actualMargin);
          el.style.marginRight = parseFloat(calculatedMargin) + scrollbarWidth + 'px';
        });
        // Adjust body padding
        var actualPadding = body.style.paddingRight;
        var calculatedPadding = computedStyle(body).paddingRight;
        Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["v" /* setAttr */])(body, 'data-padding-right', actualPadding);
        body.style.paddingRight = parseFloat(calculatedPadding) + scrollbarWidth + 'px';
      }
    },
    resetScrollbar: function resetScrollbar() {
      // Restore fixed content padding
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["u" /* selectAll */])(Selector.FIXED_CONTENT).forEach(function (el) {
        if (Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["i" /* hasAttr */])(el, 'data-padding-right')) {
          el.style.paddingRight = Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["e" /* getAttr */])(el, 'data-padding-right') || '';
          Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["r" /* removeAttr */])(el, 'data-padding-right');
        }
      });
      // Restore sticky content and navbar-toggler margin
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["u" /* selectAll */])(Selector.STICKY_CONTENT + ', ' + Selector.NAVBAR_TOGGLER).forEach(function (el) {
        if (Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["i" /* hasAttr */])(el, 'data-margin-right')) {
          el.style.marginRight = Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["e" /* getAttr */])(el, 'data-margin-right') || '';
          Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["r" /* removeAttr */])(el, 'data-margin-right');
        }
      });
      // Restore body padding
      var body = document.body;
      if (Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["i" /* hasAttr */])(body, 'data-padding-right')) {
        body.style.paddingRight = Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["e" /* getAttr */])(body, 'data-padding-right') || '';
        Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["r" /* removeAttr */])(body, 'data-padding-right');
      }
    }
  },
  created: function created() {
    // create non-reactive property
    this._observer = null;
  },
  mounted: function mounted() {
    // Measure scrollbar
    this.getScrollbarWidth();
    // Listen for events from others to either open or close ourselves
    this.listenOnRoot('bv::show::modal', this.showHandler);
    this.listenOnRoot('bv::hide::modal', this.hideHandler);
    // Listen for bv:modal::show events, and close ourselves if the opening modal not us
    this.listenOnRoot('bv::modal::show', this.modalListener);
    // Initially show modal?
    if (this.visible === true) {
      this.show();
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Ensure everything is back to normal
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
    this.setResizeEvent(false);
    // Re-adjust body/navbar/fixed padding/margins (if needed)
    Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["s" /* removeClass */])(document.body, 'modal-open');
    this.resetAdjustments();
    this.resetScrollbar();
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_target__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(5);



var listenTypes = { click: true };

/* harmony default export */ __webpack_exports__["a"] = ({
  // eslint-disable-next-line no-shadow-restricted-names
  bind: function bind(el, binding, vnode) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_target__["a" /* bindTargets */])(vnode, binding, listenTypes, function (_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;

      targets.forEach(function (target) {
        vnode.context.$root.$emit('bv::show::modal', target, vnode.elm);
      });
    });
    if (el.tagName !== 'BUTTON') {
      // If element is not a button, we add `role="button"` for accessibility
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["v" /* setAttr */])(el, 'role', 'button');
    }
  },
  unbind: function unbind(el, binding, vnode) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_target__["c" /* unbindTargets */])(vnode, binding, listenTypes);
    if (el.tagName !== 'BUTTON') {
      // If element is not a button, we add `role="button"` for accessibility
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["r" /* removeAttr */])(el, 'role', 'button');
    }
  }
});

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * SSR Safe Client Side ID attribute generation
 *
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    id: {
      type: String,
      default: null
    }
  },
  methods: {
    safeId: function safeId() {
      var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var id = this.id || this.localId_ || null;
      if (!id) {
        return null;
      }
      suffix = String(suffix).replace(/\s+/g, '_');
      return suffix ? id + '_' + suffix : id;
    }
  },
  computed: {
    localId_: function localId_() {
      if (!this.$isServer && !this.id && typeof this._uid !== 'undefined') {
        return '__BVID__' + this._uid;
      }
    }
  }
});

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Log a warning message to the console with bootstrap-vue formatting sugar.
 * @param {string} message
 */
/* istanbul ignore next */
function warn(message) {
  console.warn("[Bootstrap-Vue warn]: " + message);
}

/* harmony default export */ __webpack_exports__["a"] = (warn);

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(366)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_URLS", function() { return LOCAL_URLS; });
var LOCAL_URLS = Object.freeze({
    QUESTION: Object.freeze({
        CREATE: '/admin/question',
        RETRIEVE: '/admin/question/{uuid}',
        UPDATE: '/admin/question',
        DELETE: '/admin/question'
    }),
    ANSWER: Object.freeze({
        CREATE: '/admin/answer',
        RETRIEVE: '/admin/answer/{uuid}',
        UPDATE: '/admin/answer',
        DELETE: '/admin/answer'
    })
});

/***/ })

/******/ });