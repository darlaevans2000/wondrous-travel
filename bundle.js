/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),
/* 2 */
/***/ (function(module) {

!function(e,i){ true?module.exports=i():0}(this,(function(){"use strict";return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return(r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))}}}));

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/wondrous-travel/logo.png");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/wondrous-travel/background.png");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 7 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_background_png__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n.login-page {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Kanit\", sans-serif;\n}\n@media screen and (max-width: 800px) {\n  .login-page {\n    margin-top: 18vw;\n  }\n}\n@media screen and (max-width: 500px) {\n  .login-page {\n    margin-top: 23vw;\n  }\n}\n\n.login-container {\n  padding-top: 5%;\n  display: grid;\n  grid-template-rows: 45% 45%;\n  height: 40%;\n  width: 35%;\n  color: black;\n  background-color: rgba(255, 255, 255, 0.5);\n  font-size: 20px;\n  border-radius: 5px;\n}\n@media screen and (max-width: 400px) {\n  .login-container {\n    width: 80%;\n  }\n}\n\n.logo-login {\n  align-self: center;\n  justify-self: center;\n  height: 200%;\n}\n@media screen and (max-width: 1050px) {\n  .logo-login {\n    height: 100%;\n  }\n}\n@media screen and (max-width: 800px) {\n  .logo-login {\n    height: 80%;\n  }\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  justify-content: space-around;\n  align-items: center;\n  width: 60%;\n  padding: 1vw;\n  color: black;\n}\n@media screen and (max-width: 1050px) {\n  .login-form {\n    width: 80%;\n  }\n}\n@media screen and (max-width: 800px) {\n  .login-form {\n    width: 100%;\n  }\n}\n\n.login-input {\n  width: 50%;\n  padding: 0.25vw;\n  border: 1px solid black;\n  font-size: 15px;\n  margin: 1%;\n  border-radius: 5px;\n}\n@media screen and (max-width: 1050px) {\n  .login-input {\n    width: 50%;\n  }\n}\n\n.login-btn {\n  width: 5em;\n  align-self: center;\n  cursor: pointer;\n  margin-top: 2%;\n  border: 1px solid black;\n  font-size: 15px;\n  padding: 1%;\n  border-radius: 5px;\n}\n.login-btn:hover {\n  background-color: #5E6572;\n}\n\n.login-error {\n  color: red;\n  font-size: 2vh;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 94%;\n  height: 100%;\n}\n\n.grid-title {\n  display: flex;\n  align-items: center;\n  height: 3vw;\n  margin: 4% 0 4% 1.5%;\n  font-size: 3vw;\n  color: black;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-row-gap: 1.5%;\n  justify-content: space-evenly;\n  align-content: flex-start;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 5%;\n}\n\n.card {\n  display: grid;\n  grid-template-rows: 40% 60%;\n  width: auto;\n  height: 80vh;\n  border-radius: 3px;\n}\n\n.card-top {\n  border-radius: 3px 3px 0 0;\n  background-size: cover;\n}\n\n.card-bottom {\n  display: grid;\n  grid-template-rows: 20% 23% 23% 23%;\n  align-items: flex-end;\n  padding: 1.6vw;\n  border-radius: 0 0 3px 3px;\n  background: rgba(255, 255, 255, 0.829);\n}\n\n.trip-info {\n  display: grid;\n  grid-template-columns: 60% 40%;\n  width: 100%;\n  margin: 5% 1% 3%;\n}\n.trip-info h3 {\n  font-size: 1.25vw;\n  margin: 0;\n}\n.trip-info h2 {\n  font-family: \"Kanit\", sans-serif;\n  font-size: 1.2vw;\n  margin: 0;\n  color: #416788;\n}\n\n@media screen and (min-width: 826px) and (max-width: 1200px) {\n  .grid-title {\n    font-size: 3vw;\n    margin: 5% 0 5% 1.5%;\n    font-family: \"Kanit\", sans-serif;\n  }\n\n  .card {\n    height: 44vw;\n  }\n\n  .trip-info h3 {\n    font-size: 2vw;\n    margin: 0;\n  }\n  .trip-info h2 {\n    font-family: \"Kanit\", sans-serif;\n    font-size: 1.7vw;\n    margin: 0;\n    color: #416788;\n  }\n\n  .card-grid {\n    grid-template-columns: 31% 31% 31%;\n    grid-row-gap: 1.75%;\n  }\n}\n@media screen and (min-width: 575px) and (max-width: 825px) {\n  .grid-title {\n    margin: 5% 0 5% 2.7%;\n    font-size: 2vw;\n  }\n\n  .card-grid {\n    grid-template-columns: 45% 45%;\n    grid-column-gap: 1.5%;\n    grid-row-gap: 1.75%;\n  }\n\n  .card {\n    height: 60vw;\n  }\n\n  .trip-info h3 {\n    font-size: 2.8vw;\n    margin: 0;\n  }\n  .trip-info h2 {\n    font-family: \"Kanit\", sans-serif;\n    font-size: 2.5vw;\n    margin: 0;\n    color: #416788;\n  }\n}\n@media screen and (max-width: 575px) {\n  .grid-title {\n    margin: 8% 0 7% 10%;\n    font-size: 2.5vh;\n  }\n\n  .card-grid {\n    grid-template-columns: 80%;\n    grid-row-gap: 1%;\n  }\n\n  .card {\n    height: 110vw;\n  }\n\n  .card-bottom {\n    justify-content: center;\n    align-items: center;\n    padding: 3.5vw 6vw 0 0;\n  }\n\n  .trip-info h3 {\n    font-size: 4vw;\n    margin: 0;\n  }\n  .trip-info h2 {\n    font-family: \"Kanit\", sans-serif;\n    font-size: 3.5vw;\n    margin: 0;\n    color: #416788;\n  }\n}\n.no-results {\n  font-size: 2vw;\n}\n\n.booking-section {\n  display: grid;\n  grid-template-rows: 30% 70%;\n  margin: 3% 7% 1%;\n  max-height: 20vh;\n  background-image: linear-gradient(#0B3954, #4d7ea8, #7d98a1);\n  color: black;\n  border: 2px solid #808080;\n  border-radius: 20px;\n}\n\n.book-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2%;\n  font-size: 2.5vw;\n  font-weight: bold;\n  color: #ffffff;\n}\n@media screen and (max-width: 1200px) {\n  .book-top {\n    font-size: 30px;\n  }\n}\n@media screen and (max-width: 700px) {\n  .book-top {\n    font-size: 20px;\n  }\n}\n\n.book-bottom {\n  display: grid;\n  grid-template-columns: 18% 18% 18% 18% 18%;\n  justify-content: space-around;\n  margin: 1% 1% 1% 2%;\n}\n.book-bottom input,\n.book-bottom select {\n  max-width: 15vw;\n  margin-top: 5%;\n  font-size: 1vw;\n}\n@media screen and (max-width: 1200px) {\n  .book-bottom input,\n.book-bottom select {\n    height: 2.5vh;\n    font-size: 1.2vw;\n  }\n}\n@media screen and (max-width: 900px) {\n  .book-bottom input,\n.book-bottom select {\n    height: 2.5vh;\n    font-size: 1.5vw;\n  }\n}\n@media screen and (max-width: 700px) {\n  .book-bottom input,\n.book-bottom select {\n    height: 3vh;\n    font-size: 2vw;\n  }\n}\n.book-bottom label {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-bottom: 8%;\n  font-size: 1.25vw;\n  color: black;\n}\n@media screen and (max-width: 1200px) {\n  .book-bottom label {\n    font-size: 2vw;\n  }\n}\n@media screen and (max-width: 650px) {\n  .book-bottom label {\n    font-size: 3.5vw;\n  }\n}\n\n.selection {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: center;\n  height: 100%;\n}\n\n.booking-btns {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-left: 3%;\n}\n.booking-btns button {\n  margin: 2%;\n  padding: 2% 3%;\n  font-size: 1vw;\n  cursor: pointer;\n  border-radius: 15px;\n}\n.booking-btns button:hover {\n  background-color: #5E6572;\n}\n@media screen and (max-width: 900px) {\n  .booking-btns button {\n    font-size: 1.5vw;\n  }\n}\n@media screen and (max-width: 400px) {\n  .booking-btns button {\n    width: 13vw;\n    height: 5vh;\n    font-size: 2vw;\n  }\n}\n\n.booking-message {\n  color: #9E2400;\n  font-family: \"Kanit\", sans-serif;\n  font-size: 2.5vh;\n}\n\nheader {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  background-size: cover;\n  border-bottom: 0.6em solid black;\n  height: 38vh;\n}\n@media screen and (max-width: 1150px) {\n  header {\n    height: 30vh;\n  }\n}\n@media screen and (max-width: 750px) {\n  header {\n    height: 25vh;\n  }\n}\n\n.nav-left {\n  display: grid;\n  grid-template-rows: 40% 25%;\n  align-items: space-between;\n  height: 10vh;\n}\n.nav-left .title {\n  padding-top: 10%;\n  justify-self: center;\n  align-self: center;\n  font-size: 4vw;\n  padding-bottom: 0;\n  color: black;\n  font-family: \"Pacifico\", cursive;\n}\n@media screen and (max-width: 750px) {\n  .nav-left .title {\n    font-size: 4.5vw;\n  }\n}\n@media screen and (max-width: 500px) {\n  .nav-left .title {\n    font-size: 8vw;\n  }\n}\n.nav-left .current-date {\n  padding-top: 25%;\n  justify-self: center;\n  align-self: center;\n  font-size: 2.5vw;\n}\n@media screen and (max-width: 750px) {\n  .nav-left .current-date {\n    font-size: 3.5vw;\n  }\n}\n@media screen and (max-width: 500px) {\n  .nav-left .current-date {\n    font-size: 5vw;\n  }\n}\n\n.nav-btns {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: flex-end;\n  margin-top: 20%;\n}\n.nav-btns button {\n  justify-self: center;\n  align-self: center;\n  width: 10vw;\n  height: 6vh;\n  color: #ffffff;\n  background-color: #466b77;\n  border: 3px solid black;\n  font-size: 1.2vw;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.nav-btns button:hover {\n  background-color: #5E6572;\n}\n@media screen and (max-width: 1150px) {\n  .nav-btns button {\n    width: 12vw;\n    font-size: 1.5vw;\n  }\n}\n@media screen and (max-width: 850px) {\n  .nav-btns button {\n    width: 13vw;\n    font-size: 1.8vw;\n  }\n}\n@media screen and (max-width: 400px) {\n  .nav-btns button {\n    height: 5vh;\n    width: 15vw;\n    font-size: 2.5vw;\n  }\n}\n\n.nav-right {\n  display: grid;\n  grid-template-rows: 60% 40%;\n}\n.nav-right .welcome {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  justify-self: center;\n  align-self: center;\n  align-items: center;\n  width: 10vw;\n  max-height: 4vw;\n  font-size: 2.3vw;\n  font-weight: bold;\n  color: black;\n}\n@media screen and (max-width: 750px) {\n  .nav-right .welcome {\n    font-size: 3vw;\n  }\n}\n@media screen and (max-width: 500px) {\n  .nav-right .welcome {\n    font-size: 3.5vw;\n  }\n}\n.nav-right .total-spent {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  justify-self: center;\n  align-self: center;\n  align-items: center;\n  width: 14vw;\n  height: 6vh;\n  background-color: #416788;\n  color: black;\n}\n@media screen and (max-width: 1150px) {\n  .nav-right .total-spent {\n    height: 6vh;\n    width: 18vw;\n  }\n}\n@media screen and (max-width: 750px) {\n  .nav-right .total-spent {\n    height: 6vh;\n    width: 16vw;\n  }\n}\n.nav-right .total-title {\n  font-size: 1.4vw;\n  font-weight: bold;\n  color: #ffffff;\n}\n@media screen and (max-width: 1150px) {\n  .nav-right .total-title {\n    font-size: 1.8vw;\n  }\n}\n@media screen and (max-width: 500px) {\n  .nav-right .total-title {\n    font-size: 2.8vw;\n  }\n}\n.nav-right .total-amount {\n  font-size: 1.2vw;\n  color: #ffffff;\n}\n@media screen and (max-width: 1150px) {\n  .nav-right .total-amount {\n    font-size: 1.4vw;\n  }\n}\n@media screen and (max-width: 750px) {\n  .nav-right .total-amount {\n    font-size: 1.8vw;\n  }\n}\n@media screen and (max-width: 500px) {\n  .nav-right .total-amount {\n    font-size: 2.6vw;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Kanit\", sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: auto;\n  height: 100%;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\nh1 {\n  font-family: \"Pacifico\", cursive;\n  color: black;\n}\n\nh2 {\n  font-family: \"Pacifico\", cursive;\n  color: black;\n}\n\n.user-page {\n  background-color: rgba(255, 255, 255, 0.61);\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/_normalize.scss","webpack://./src/css/base.scss","webpack://./src/css/_login.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_cards.scss","webpack://./src/css/_book.scss","webpack://./src/css/_nav.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import '_normalize';\n@import '_variables';\n@import '_login';\n@import '_cards';\n@import '_book';\n@import '_nav';\n\n// main stylings\n* {\n  margin: 0;\n  padding: 0;\n  font-family: $primary-font;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-image: url(\"../images/background.png\");\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: auto;\n  height: 100%;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\nh1 {\n  font-family: $header-font;\n  color: $black;\n}\n\nh2 {\n  font-family: $header-font;\n  color: $black;\n}\n\n.user-page {\n  background-color: rgba(255, 255, 255, 0.61);\n}\n\n.hidden {\n  display: none;\n}\n","// LOGIN PAGE\n.login-page {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  font-family: $primary-font;\n\n  @media screen and (max-width: 800px) {\n    margin-top: 18vw;\n  }\n\n  @media screen and (max-width: 500px) {\n    margin-top: 23vw;\n  }\n}\n\n.login-container {\n  padding-top: 5%;\n  display: grid;\n  grid-template-rows: 45% 45%;\n  height: 40%;\n  width: 35%;\n  color: $black;\n  background-color: $login-container-color;\n  font-size: 20px;\n  border-radius: 5px;\n\n  @media screen and (max-width: 400px) {\n    width: 80%;\n  }\n}\n\n.logo-login {\n  align-self: center;\n  justify-self: center;\n  height: 200%;\n\n  @media screen and (max-width: 1050px) {\n    height: 100%;\n  }\n\n  @media screen and (max-width: 800px) {\n    height: 80%;\n  }\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  justify-content: space-around;\n  align-items: center;\n  width: 60%;\n  padding: 1vw;\n  color: $black;\n\n  @media screen and (max-width: 1050px) {\n    width: 80%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 100%;\n  }\n}\n\n.login-input {\n  width: 50%;\n  padding: 0.25vw;\n  border: 1px solid $black;\n  font-size: 15px;\n  margin: 1%;\n  border-radius: 5px;\n\n  @media screen and (max-width: 1050px) {\n    width: 50%;\n  }\n}\n\n.login-btn {\n  width: 5em;\n  align-self: center;\n  cursor: pointer;\n  margin-top: 2%;\n  border: 1px solid $black;\n  font-size: 15px;\n  padding: 1%;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: $button-hover-color;\n  }\n}\n\n.login-error {\n  color: red;\n  font-size: 2vh;\n}","// COLORS\n$accent-color: #416788;\n$black: black;\n$grey: #808080;\n$white: #ffffff;\n$button-color: #466b77;\n$button-hover-color: #5E6572;\n$login-container-color: rgba(255,255,255,0.5);\n$user-pg-color: rgba(255, 255, 255, 0.61);\n\n// FONTS\n$primary-font: 'Kanit', sans-serif;\n$header-font: 'Pacifico', cursive;\n","// TRIP CARDS\n.main-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 94%;\n  height: 100%;\n}\n\n// four card grid width - lg screens\n.grid-title {\n  display: flex;\n  align-items: center;\n  height: 3vw;\n  margin: 4% 0 4% 1.5%;\n  font-size: 3vw;\n  color: $black;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-row-gap: 1.5%;\n  justify-content: space-evenly;\n  align-content: flex-start;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 5%;\n}\n\n.card {\n  display: grid;\n  grid-template-rows: 40% 60%;\n  width: auto;\n  height: 80vh;\n  border-radius: 3px;\n}\n\n.card-top {\n  border-radius: 3px 3px 0 0;\n  background-size: cover;\n}\n\n.card-bottom {\n  display: grid;\n  grid-template-rows: 20% 23% 23% 23%;\n  align-items: flex-end;\n  padding: 1.6vw;\n  border-radius: 0 0 3px 3px;\n  background: rgba(255, 255, 255, 0.829);\n}\n\n.trip-info {\n  display: grid;\n  grid-template-columns: 60% 40%;\n  width: 100%;\n  margin: 5% 1% 3%;\n\n  h3 {\n    font-size: 1.25vw;\n    margin: 0;\n  }\n\n  h2 {\n    font-family: $primary-font;\n    font-size: 1.2vw;\n    margin: 0;\n    color: $accent-color;\n  }\n}\n\n// three card width - med screens\n@media screen and (min-width: 826px) and (max-width: 1200px) {\n  .grid-title {\n    font-size: 3vw;\n    margin: 5% 0 5% 1.5%;\n    font-family: $primary-font;\n  }\n\n  .card {\n    height: 44vw;\n  }\n\n  .trip-info {\n    h3 {\n      font-size: 2vw;\n      margin: 0;\n    }\n\n    h2 {\n      font-family: $primary-font;\n      font-size: 1.7vw;\n      margin: 0;\n      color: $accent-color;\n    }\n  }\n\n  .card-grid {\n    grid-template-columns: 31% 31% 31%;\n    grid-row-gap: 1.75%;\n  }\n}\n\n// two card width - smaller screens\n@media screen and (min-width: 575px) and (max-width: 825px) {\n  .grid-title {\n    margin: 5% 0 5% 2.7%;\n    font-size: 2vw;\n  }\n\n  .card-grid {\n    grid-template-columns: 45% 45%;\n    grid-column-gap: 1.5%;\n    grid-row-gap: 1.75%;\n  }\n\n  .card {\n    height: 60vw;\n  }\n\n  .trip-info {\n    h3 {\n      font-size: 2.8vw;\n      margin: 0;\n    }\n\n    h2 {\n      font-family: $primary-font;\n      font-size: 2.5vw;\n      margin: 0;\n      color: $accent-color;\n    }\n  }\n}\n\n// one card width - smallest screens - phones\n@media screen and (max-width: 575px) {\n  .grid-title {\n    margin: 8% 0 7% 10%;\n    font-size: 2.5vh;\n  }\n\n  .card-grid {\n    grid-template-columns: 80%;\n    grid-row-gap: 1%;\n  }\n\n  .card {\n    height: 110vw;\n  }\n\n  .card-bottom {\n    justify-content: center;\n    align-items: center;\n    padding: 3.5vw 6vw 0 0;\n  }\n\n  .trip-info {\n    h3 {\n      font-size: 4.0vw;\n      margin: 0;\n    }\n\n    h2 {\n      font-family: $primary-font;\n      font-size: 3.5vw;\n      margin: 0;\n      color: $accent-color;\n    }\n  }\n}\n\n.no-results {\n  font-size: 2vw;\n}\n","// BOOKING SECTION\n.booking-section {\n  display: grid;\n  grid-template-rows: 30% 70%;\n  margin: 3% 7% 1%;\n  max-height: 20vh;\n  background-image: linear-gradient(#0B3954, #4d7ea8, #7d98a1);\n  color: $black;\n  border: 2px solid $grey;\n  border-radius: 20px;\n}\n\n.book-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2%;\n  font-size: 2.5vw;\n  font-weight: bold;\n  color: $white;\n\n  @media screen and (max-width: 1200px) {\n    font-size: 30px;\n  }\n\n  @media screen and (max-width: 700px) {\n    font-size: 20px;\n  }\n}\n\n.book-bottom {\n  display: grid;\n  grid-template-columns: 18% 18% 18% 18% 18%;\n  justify-content: space-around;\n  margin: 1% 1% 1% 2%;\n\n  input,\n  select {\n    max-width: 15vw;\n    margin-top: 5%;\n    font-size: 1vw;\n\n    @media screen and (max-width: 1200px) {\n      height: 2.5vh;\n      font-size: 1.2vw;\n    }\n\n    @media screen and (max-width: 900px) {\n      height: 2.5vh;\n      font-size: 1.5vw;\n    }\n\n    @media screen and (max-width: 700px) {\n      height: 3vh;\n      font-size: 2vw;\n    }\n  }\n\n  label {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 8%;\n    font-size: 1.25vw;\n    color: $black;\n\n    @media screen and (max-width: 1200px) {\n      font-size: 2vw;\n    }\n\n    @media screen and (max-width: 650px) {\n      font-size: 3.5vw;\n    }\n  }\n}\n\n.selection {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: center;\n  height: 100%;\n}\n\n.booking-btns {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-left: 3%;\n\n  button {\n    margin: 2%;\n    padding: 2% 3%;\n    font-size: 1vw;\n    cursor: pointer;\n    border-radius: 15px;\n\n    &:hover {\n      background-color: $button-hover-color;\n    }\n\n    @media screen and (max-width: 900px) {\n      font-size: 1.5vw;\n    }\n    \n    @media screen and (max-width: 400px) {\n      width: 13vw;\n      height: 5vh;\n      font-size: 2vw;\n    }\n  }\n}\n\n.booking-message {\n  color: #9E2400;\n  font-family: $primary-font;\n  font-size: 2.5vh;\n}\n","// NAV BAR\nheader {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  background-size: cover;\n  border-bottom: 0.6em solid $black;\n  height: 38vh;\n  \n  @media screen and (max-width: 1150px) {\n    height: 30vh;\n  }\n\n  @media screen and (max-width: 750px) {\n    height: 25vh;\n  }\n}\n\n// LEFT\n.nav-left {\n  display: grid;\n  grid-template-rows: 40% 25%;\n  align-items: space-between;\n  height: 10vh;\n\n  .title {\n    padding-top: 10%;\n    justify-self: center;\n    align-self: center;\n    font-size: 4.0vw;\n    padding-bottom: 0;\n    color: $black;\n    font-family: $header-font;\n    @media screen and (max-width: 750px) {\n      font-size: 4.5vw;\n    }\n\n    @media screen and (max-width: 500px) {\n      font-size: 8vw;\n    }\n  }\n\n  .current-date {\n    padding-top: 25%;\n    justify-self: center;\n    align-self: center;\n    font-size: 2.5vw;\n    @media screen and (max-width: 750px) {\n      font-size: 3.5vw;\n    }\n\n    @media screen and (max-width: 500px) {\n      font-size: 5vw;\n    }\n  }\n}\n\n.nav-btns {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: flex-end;\n  margin-top: 20%;\n\n  button {\n    justify-self: center;\n    align-self: center;\n    width: 10vw;\n    height: 6vh;\n    color: $white;\n    background-color: $button-color;\n    border: 3px solid $black;\n    font-size: 1.2vw;\n    border-radius: 20px;\n    cursor: pointer;\n\n    &:hover {\n      background-color: $button-hover-color;\n    }\n\n    @media screen and (max-width: 1150px) {\n      width: 12vw;\n      font-size: 1.5vw;\n    }\n\n    @media screen and (max-width: 850px) {\n      width: 13vw;\n      font-size: 1.8vw;\n    }\n\n    @media screen and (max-width: 400px) {\n      height: 5vh;\n      width: 15vw;\n      font-size: 2.5vw;\n    }\n  }\n}\n\n// RIGHT\n.nav-right {\n  display: grid;\n  grid-template-rows: 60% 40%;\n\n  .welcome {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    justify-self: center;\n    align-self: center;\n    align-items: center;\n    width: 10vw;\n    max-height: 4vw;\n    font-size: 2.3vw;\n    font-weight: bold;\n    color: $black;\n\n    @media screen and (max-width: 750px) {\n      font-size: 3vw;\n    }\n\n    @media screen and (max-width: 500px) {\n      font-size: 3.5vw;\n    }\n  }\n\n  .total-spent {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    justify-self: center;\n    align-self: center;\n    align-items: center;\n    width: 14vw;\n    height: 6vh;\n    background-color: $accent-color;\n    color: $black;\n    \n    @media screen and (max-width: 1150px) {\n      height: 6vh;\n      width: 18vw;\n    }\n\n    @media screen and (max-width: 750px) {\n      height: 6vh;\n      width: 16vw;\n    }\n  }\n\n  .total-title {\n    font-size: 1.4vw;\n    font-weight: bold;\n    color: $white;\n\n    @media screen and (max-width: 1150px) {\n      font-size: 1.8vw;\n    }\n\n    @media screen and (max-width: 500px) {\n      font-size: 2.8vw;\n    }\n  }\n\n  .total-amount {\n    font-size: 1.2vw;\n    color: $white;\n\n    @media screen and (max-width: 1150px) {\n      font-size: 1.4vw;\n    }\n\n    @media screen and (max-width: 750px) {\n      font-size: 1.8vw;\n    }\n\n    @media screen and (max-width: 500px) {\n      font-size: 2.6vw;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 8 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

var isBetween = __webpack_require__(2)
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(isBetween)


let domUpdates = {
  changePageView(date) {
    const loginPage = document.getElementById('loginPage');
    const userPage = document.getElementById('userPage');
    const currentDate = document.getElementById('currentDate');
    loginPage.classList.add('hidden');
    userPage.classList.remove('hidden');
    currentDate.innerHTML += `${date}`;
  },

  welcomeUserName(user) {
    const welcomeName = document.getElementById('currUserName');
    const firstName = user.returnFirstName();
    welcomeName.innerText = `${firstName}!`;
  },

  makeDestinationSelections(allDestinations) {
    let destinationInput = document.getElementById("destinationMenu");

    allDestinations.sort((a, b) => a.destination.localeCompare(b.destination))

    allDestinations.forEach(destination => {
      destinationInput.innerHTML += `<option value="${destination.id}">${destination.destination}</option>`;
    })
  },

  displayAnnualCosts(totalCost) {
    const totalDisplay = document.getElementById('totalAmount');
    totalDisplay.innerText = `$${totalCost.toFixed(2)}`;
  },

  displayTrips(trips, tripCardsSection, bannerMessage, allDestinations) {
    this.displayTripCardsBanner(trips, tripCardsSection, bannerMessage, allDestinations)
  },

  displayTripCardsBanner(trips, tripCardsSection, bannerMessage, allDestinations) {
    let banner = document.getElementById('gridTitle');
    if (trips.length === 0) {
      tripCardsSection.innerHTML = ``
      banner.innerHTML =
        `<h2>No Trips to See Here! Book a Trip above to start planning your next adventure.</h2>`
    } else {
      banner.innerHTML =
        `<h2>${bannerMessage}</h2>`
      this.displayTripCards(trips, tripCardsSection, allDestinations)
    }
  },

  displayTripCards(trips, tripCardsSection, allDestinations) {
    tripCardsSection.innerHTML = ``
    let sortedTrips = trips.sort((a, b) => (dayjs__WEBPACK_IMPORTED_MODULE_0__(b.date).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_0__(a.date)) ? 1 : -1))

    sortedTrips.forEach(trip => {
      trip.getPrettyFormatDates();
      trip.getDestinationInfo(allDestinations);
      tripCardsSection.innerHTML +=
        `<article class="card">
            <section class="card-top" aria-label="[photograph of ${trip.destination.destination}]" style="background-image: url(${trip.destination.image})">
            </section>
            <section class="card-bottom">
            <h2 id="destination">${trip.destination.destination}</h2>
              <div class="trip-info">
                <h3>Start Date:</h3>
                <h2 id="startDate">${trip.startDate}</h2>
              </div>
              <div class="trip-info">
                <h3>Duration:</h3>
                <h2 id="duration">${trip.duration} days</h2>
              </div>
              <div class="trip-info">
                <h3>Travelers:</h3>
                <h2 id="travelers">${trip.travelers}</h2>
              </div>
              <div class="trip-info">
                <h3>Trip Status:</h3>
                <h2 id="tripStatus">${trip.status}</h2>
              </div>
            </section>
          </article>`;
    })
  },

  buildBookingMessage(newTrip) {
    const bookingMessage = document.getElementById('bookingMessage');
    let place = newTrip.destination;
    let costString = newTrip.cost.toFixed(2).toString();

    bookingMessage.innerHTML = `Congratulations, you've booked a trip to ${place.destination} for $${costString}!`;
  },

  buildCostMessage(cost) {
    const bookingMessage = document.getElementById('bookingMessage');

    bookingMessage.innerHTML = `The total cost of this trip would be $${cost}`;
  },

  buildErrorMessage() {
    const bookingMessage = document.getElementById('bookingMessage');

    bookingMessage.innerHTML = `Please provide all required booking information and a date after current date.`;
  },

  buildLoginErrorMessage(type) {
    const loginError = document.getElementById('loginError');
    loginError.classList.remove('hidden');
    if (type === 'password') {
      loginError.innerText = `Password is incorrect.`
    } else if (type === 'username') {
      loginError.innerText = `Username is incorrect.`
    }  else if (type === 'both') {
      loginError.innerText = `Username or password is incorrect.`
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domUpdates);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiCalls = {

  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response =>
        response.json()
      )
      .then(allTravelers => {
        return allTravelers.travelers
      })
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response =>
        response.json()
      )
      .then(allTrips => {
        return allTrips.trips
      })
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response =>
        response.json()
      )
      .then(allDestinations => {
        return allDestinations.destinations
      })
  },

  getSingleTraveler(userID) {
    return fetch(`http://localhost:3001/api/v1/travelers/${userID}`)
      .then(response =>
        response.json()
      )
      .then(currentTraveler => {
        return currentTraveler
      })
  },

  getAllData() {
    return Promise.all([this.getAllTravelers(), this.getAllTrips(), this.getAllDestinations()])
      .then(data => data)
      .catch(err => console.log(err))
  },

  getSingleTravelerData(userID) {
    return Promise.all([this.getSingleTraveler(userID)])
      .then(data => data)
      .catch(err => console.log(err))
  },


  postNewTrip(tripData) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(tripData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Sorry, we could not process your booking request.`);
        }
        return response.json()
      })
      .then(this.getAllData())
      .catch(err => console.log(err))
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiCalls);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


var isBetween = __webpack_require__(2)
dayjs__WEBPACK_IMPORTED_MODULE_1__.extend(isBetween)

class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType;
    this.allTrips = [];
    this.annualCost = 0;
    this.past = [];
    this.present = [];
    this.upcoming = [];
    this.pending = [];
  }

  returnFirstName() {
    return this.name.split(' ')[0]
  }

  getAllTrips(allTrips) {
    allTrips.forEach(trip => {
      if (trip.userID === this.id) {
        this.allTrips.push(new _src_Trip__WEBPACK_IMPORTED_MODULE_0__.default(trip));
      }
    });
    this.allTrips.forEach(trip => trip.getDates());
  }

  getCurrentTrips(currentDate) {
    return this.allTrips.filter(trip => {
      if (dayjs__WEBPACK_IMPORTED_MODULE_1__(currentDate).isBetween(trip.startDate, trip.endDate) || currentDate === trip.startDate) {
        return this.present.push(trip);
      }
    });
  }

  getUpcomingTrips(currentDate) {
    return this.allTrips.filter(trip => {
      if (dayjs__WEBPACK_IMPORTED_MODULE_1__(currentDate).isBefore(trip.startDate) === true) {
        return this.upcoming.push(trip)
      }
    })
  }

  getPastTrips(currentDate) {
    return this.allTrips.filter(trip => {
      if (dayjs__WEBPACK_IMPORTED_MODULE_1__(trip.startDate).isBefore(currentDate) === true && dayjs__WEBPACK_IMPORTED_MODULE_1__(trip.endDate).isBefore(currentDate)) {
        return this.past.push(trip)
      }
    })
  }

  getPendingTrips() {
    return this.allTrips.filter(trip => {
      if (trip.status === 'pending') {
        return this.pending.push(trip)
      }
    })
  }

  calcAnnualSpending(currentDate, data) {
    let currentYear = dayjs__WEBPACK_IMPORTED_MODULE_1__(currentDate).year();
    let tripArr = this.allTrips.filter(trip => {
      trip.getDestinationInfo(data);
      let tripYear = dayjs__WEBPACK_IMPORTED_MODULE_1__(trip.startDate).year();
      if (tripYear === currentYear && trip.status === 'approved') {
        return trip
      }
    })

    return tripArr.reduce((total, trip) => {
      trip.estimateTotalTripCost();
      total += trip.cost;
      return this.annualCost = total;
    }, 0);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Traveler);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


class Trip {
  constructor(tripsData) {
    this.id = tripsData.id;
    this.userID = tripsData.userID;
    this.destinationID = tripsData.destinationID;
    this.travelers = tripsData.travelers;
    this.date = tripsData.date;
    this.duration = tripsData.duration;
    this.status = tripsData.status;
    this.suggestedActivities = tripsData.suggestedActivities;
    this.destination;
    this.cost = 0;
    this.startDate;
    this.endDate;
  }

  getDates() {
    let start = new Date(this.date);
    let end = new Date(this.date).setDate(new Date(this.date).getDate() + this.duration);
    this.startDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(start).format('YYYY-MM-DD');
    this.endDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(end).format('YYYY-MM-DD');
  }

  getPrettyFormatDates() {
    let start = new Date(this.date);
    let end = new Date(this.date).setDate(new Date(this.date).getDate() + this.duration);

    this.startDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(start).format('MMMM D, YYYY');
    this.endDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(end).format('MMMM D, YYYY');
  }

  getDestinationInfo(destinationData) {
    return destinationData.find(destination => {
      if (this.destinationID === destination.id) {
        return this.destination = destination;
      }
    })
  }

  estimateTotalTripCost() {
    let total = 0;
    total += this.destination.estimatedLodgingCostPerDay * this.duration
    total += this.destination.estimatedFlightCostPerPerson * this.travelers
    total += total * .10
    return this.cost += parseFloat(total.toFixed(2));
  }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trip);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _Traveler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
//~~~ Imports ~~~//

var isBetween = __webpack_require__(2)
dayjs__WEBPACK_IMPORTED_MODULE_0__.extend(isBetween)

;









//~~~ Global Variables ~~~//
let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('dddd, MMM D, YYYY');
let currentTraveler;
let allDestinations, allTrips;

//~~~ Query Selectors ~~~//
//Login Page 
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginBtn');
//Nav Bar
const allTripsBtn = document.getElementById('allTripsBtn');
const currentTripsBtn = document.getElementById('currentTripsBtn');
const upcomingTripsBtn = document.getElementById('upcomingTripsBtn');
const previousTripsBtn = document.getElementById('previousTripsBtn');
const pendingTripsBtn = document.getElementById('pendingTripsBtn');
//Booking Section
const destinationInput = document.getElementById('destinationMenu');
const startDateInput = document.getElementById('startDateMenu');
const durationInput = document.getElementById('durationInput');
const travelersInput = document.getElementById('travelersInput');
const costButton = document.getElementById('costBtn');
const bookButton = document.getElementById('bookBtn');
const cardGrid = document.getElementById('cardGrid');
const bookingForm = document.getElementById('bookingForm');

//~~~ Event Listeners ~~~//
window.addEventListener('load', retrieveAllData);
loginButton.addEventListener('click', checkLogin);
loginButton.addEventListener('click', checkLogin);
currentTripsBtn.addEventListener('click', showCurrentTripsPage)
upcomingTripsBtn.addEventListener('click', showUpcomingTripsPage)
previousTripsBtn.addEventListener('click', showPastTripsPage)
pendingTripsBtn.addEventListener('click', showPendingTripsPage)
allTripsBtn.addEventListener('click', showAllTrips)
costButton.addEventListener('click', estimateTripCost);
bookButton.addEventListener('click', bookNewTrip);

//~~~ Functions ~~~//
function retrieveAllData() {
  _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__.default.getAllData()
    .then(data => {
      allTrips = data[1];
      allDestinations = data[2];

    })
}

function retrieveSingleTraveler(userID) {
  _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__.default.getSingleTravelerData(userID)
    .then(data => {
      currentTraveler = new _Traveler_js__WEBPACK_IMPORTED_MODULE_6__.default(data[0])
      createTraveler(currentTraveler);
      displayUserInfo(currentTraveler);
    })
}

function checkUsernameInput(numbers) {
  if ((numbers === undefined) ||
    (numbers === '0') ||
    (numbers === '00') ||
    (parseInt(numbers) > 50)) {
    return false
  } else {
    return true
  }
}

function checkPasswordInput(passwordValue) {
  if (passwordValue !== 'travel2020') {
    return false
  } else {
    return true
  }
}

function checkLogin(event) {
  const usernameValue = usernameInput.value.trim()
  const passwordValue = passwordInput.value.trim()
  const splitName = usernameValue.split('')
  const numbers = splitName.slice(8, 10).join('')
  const userIDInput = parseInt(numbers)

  let usernameResult = checkUsernameInput(numbers);
  let passwordResult = checkPasswordInput(passwordValue);

  event.preventDefault();
  if (usernameResult === false && passwordResult === false) {
    _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.buildLoginErrorMessage('both')
  } else if (usernameResult === false && passwordResult === true) {
    _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.buildLoginErrorMessage('username')
  } else if (usernameResult === true && passwordResult === false) {
    _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.buildLoginErrorMessage('password')
  } else if (usernameResult === true && passwordResult === true) {
    retrieveSingleTraveler(userIDInput)
  }
}

function createTraveler() {
  currentTraveler.getAllTrips(allTrips);
  currentTraveler.getCurrentTrips(currentDate)
  currentTraveler.getUpcomingTrips(currentDate)
  currentTraveler.getPastTrips(currentDate)
  currentTraveler.getPendingTrips()
}

function displayUserInfo(traveler) {
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.changePageView(currentDate);
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.welcomeUserName(traveler);
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.makeDestinationSelections(allDestinations);
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.displayAnnualCosts(traveler.calcAnnualSpending(currentDate, allDestinations));
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.displayTrips(currentTraveler.allTrips, cardGrid, "My Trips", allDestinations)
}

function showCurrentTripsPage() {
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.displayTrips(currentTraveler.present, cardGrid, "My Current Trips", allDestinations)
}

function showUpcomingTripsPage() {
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.displayTrips(currentTraveler.upcoming, cardGrid, "My Upcoming Trips", allDestinations)
}

function showPastTripsPage() {
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.displayTrips(currentTraveler.past, cardGrid, "My Past Trips", allDestinations)
}

function showPendingTripsPage() {
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.displayTrips(currentTraveler.pending, cardGrid, "My Pending Trips", allDestinations)
}

function showAllTrips() {
  _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.displayTrips(currentTraveler.allTrips, cardGrid, "My Trips", allDestinations)
}

//~~~ POST NEW TRIP ~~~//
function testTripInputs(newTripData) {
  if (newTripData.date === '' || !newTripData.duration || !newTripData.travelers || newTripData.destinationID <= 0 || dayjs__WEBPACK_IMPORTED_MODULE_0__(newTripData.date).isBefore(currentDate)) {
    return false;
  }
  return true
}

function makePostTripObject() {
  let startDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(startDateInput.value).format('YYYY/MM/DD');
  let numDays = parseInt(durationInput.value);
  let numTravelers = parseInt(travelersInput.value);
  let destID = parseInt(destinationInput.value);

  let newTripObject = {
    "id": allTrips.length + 1,
    "userID": currentTraveler.id,
    "destinationID": destID,
    "travelers": numTravelers,
    "date": startDate,
    "duration": numDays,
    "status": "pending",
    "suggestedActivities": []
  };
  return newTripObject;
}

function estimateTripCost() {
  let newTripData = makePostTripObject();
  let newTripInstance = new _Trip_js__WEBPACK_IMPORTED_MODULE_7__.default(newTripData);
  let inputTest = testTripInputs(newTripData);
  if (!inputTest) {
    _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.buildErrorMessage();
  } else {
    newTripInstance.getDestinationInfo(allDestinations)
    newTripInstance.estimateTotalTripCost();
    let costString = newTripInstance.cost.toFixed(2).toString();
    _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.buildCostMessage(costString)
  }
}

function bookNewTrip() {
  let newTripData = makePostTripObject();
  let newTripInstance = new _Trip_js__WEBPACK_IMPORTED_MODULE_7__.default(newTripData);
  let inputTest = testTripInputs(newTripData);

  if (!inputTest) {
    _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.buildErrorMessage();
  } else {
    _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__.default.postNewTrip(newTripData)
    currentTraveler.allTrips.push(newTripInstance)
    currentTraveler.pending.push(newTripInstance)
    currentTraveler.upcoming.push(newTripInstance)
    newTripInstance.getDestinationInfo(allDestinations)
    newTripInstance.estimateTotalTripCost();
    _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.buildBookingMessage(newTripInstance)
    _dom_updates_js__WEBPACK_IMPORTED_MODULE_4__.default.displayTrips(currentTraveler.allTrips, cardGrid, "My Trips", allDestinations)
    bookingForm.reset();
    retrieveAllData()
  }
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map