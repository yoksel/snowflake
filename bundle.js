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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "HTML {\n  font-size: 16px;\n}\n\nBODY {\n  min-height: 100vh;\n  margin: 0;\n  background: linear-gradient(#253B59, turquoise);\n  font: 1rem/1.4 Trebuchet MS, Verdana, sans-serif;\n  text-align: center;\n  color: #FFF;\n}\n\nH1, H2, H3 {\n  margin-top: 0;\n}\n\n.page {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1260px;\n  margin: 2rem auto;\n  padding: 0 3rem;\n  box-sizing: border-box;\n}\n\n.page__header {\n  position: relative;\n}\n\n.theme-switcher {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.page__main {\n  display: flex;\n  justify-content: space-around;\n}\n\n.page__section {\n  display: flex;\n  flex-direction: column;\n}\n\n.page__section--editor {\n  flex-shrink: 0;\n  margin-right: 3rem;\n}\n\n.page__section--view {\n  flex-shrink: 0;\n  flex-grow: 1;\n}\n\n.page__section-content {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n\n.snowflake-editor,\n.snowflake-view {\n  width: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

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
  var css = remove ? '' : obj.css; // For old IE

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

  if (sourceMap && btoa) {
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

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_SnowFlakeEditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/SnowFlakeEditor.js */ "./src/lib/SnowFlakeEditor.js");
/* harmony import */ var _lib_SnowFlakeView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/SnowFlakeView.js */ "./src/lib/SnowFlakeView.js");
/* harmony import */ var _lib_ThemeSwitcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ThemeSwitcher.js */ "./src/lib/ThemeSwitcher.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
console.clear();






(function() {
  const editor = document.querySelector('.snowflake-editor');
  const view = document.querySelector('.snowflake-view');
  const themeSwitcher = document.querySelector('.theme-switcher');

  editor.addEventListener('change', () => {
    view.dispatchEvent(new CustomEvent('change-view', {
      detail: event.detail,
      bubbles: true,
    }));
  });

  themeSwitcher.addEventListener('change-theme', () => {
    document.body.style.background = getBackgroundStr(event.detail.theme)

    view.dispatchEvent(new CustomEvent('change-theme', {
      detail: event.detail,
      bubbles: true,
    }));
  });

  document.body.addEventListener('keyup', () => {
    if(event.keyCode === 8 || event.keyCode === 46) {

      editor.dispatchEvent(new CustomEvent('remove-path', {
        bubbles: true,
      }));
    }
  })

  function getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  window.customElements.define('snowflake-editor', _lib_SnowFlakeEditor_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  window.customElements.define('snowflake-view', _lib_SnowFlakeView_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  window.customElements.define('theme-switcher', _lib_ThemeSwitcher_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();


/***/ }),

/***/ "./src/lib/SnowFlakeEditor.js":
/*!************************************!*\
  !*** ./src/lib/SnowFlakeEditor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnowFlakeEditor; });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      width: 520px;

      --transition: .25s;
    }

    :host:focus {
      outline: none;
    }

    :host svg {
      width: 520px;
      height: 600px;
    }

    :host path {
      transition: stroke var(--transition);
    }

    :host .hovered {
      stroke: aqua;
      cursor: pointer;
    }

    :host .highlight {
      stroke: orangered;
      cursor: pointer;
    }

    .controls {
      margin-top: 2rem;
    }
    .control {
      padding: .25rem 1rem;
      background: #FFF;
      border: 0;
      border-radius: .25rem;
      font: inherit;
      cursor: pointer;
      transition: all var(--transition);
      box-shadow: 0 0 0 2px transparent inset;
      color: #333;
    }
    .control:hover {
      background: none;
      box-shadow: 0 0 0 2px #FFF inset;
      color: #FFF;
    }
  </style>

  <div class="content">
    <svg
      viewBox="0 0 260 300"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="shape" d="M130.1,300.5, 130.1,0, 0,75z"></path>

        <clipPath id="slice-clip-path">
          <use xlink:href="#shape"/>
        </clipPath>

        <symbol id="slice-123">
          <use xlink:href="#shape"
            stroke="currentColor"
            stroke-dasharray="5 2.5"
            stroke-width=".5"
            stroke-opacity=".5"
            fill="none"/>
          <g clip-path="url(#slice-clip-path)">
            <rect fill="none" x="0" y="0" width="100%" height="100%"></rect>
            <g id="target-group-123" stroke="currentColor" stroke-linecap="round" stroke-width="5"></g>
          </g>
        </symbol>
      </defs>

      <rect id="measure-rect" fill="transparent" x="0" y="0" width="100" height="100"></rect>

      <g id="slice">
        <use xlink:href="#shape"
          stroke="currentColor"
          stroke-dasharray="5 2.5"
          stroke-width=".5"
          stroke-opacity=".5"
          fill="none"/>
        <g clip-path="url(#slice-clip-path)" fill="none">
          <rect x="0" y="0" width="100%" height="100%"></rect>
          <g id="target-group" stroke="currentColor" stroke-linecap="round" stroke-width="5">
          </g>
        </g>
      </g>

      <use
        xlink:href="#slice"
        transform="translate(260,0) scale(-1,1)"
        style="opacity:.25"
        />
    </svg>
  </div>

  <div class="controls">
    <button type="button" class="control control--clear">Clear</button>
  </div>
`;

class SnowFlakeEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(template.content.cloneNode(true));
    this.targetGroup = this.elem.querySelector('#target-group');
    this.controlClear = this.elem.querySelector('.control--clear');
    this.scale = this.getScale();
    this.clickedPath = null;
    this.pathsCounter = 0;
    this.selected = {};

    this.targetGroupMouseDown = this.targetGroupMouseDown.bind(this);
    this.mouseOverPath = this.mouseOverPath.bind(this);
    this.mouseOutPath = this.mouseOutPath.bind(this);
    this.clear = this.clear.bind(this);
    this.unselect = this.unselect.bind(this);
  }

  connectedCallback() {
    this.addEventListener('mousedown', this.mouseDown);
    this.addEventListener('mouseup', this.mouseUp);
    // Catch events from parent document
    this.addEventListener('remove-path', this.removePaths);
    // Catch events for path inside paths group
    this.targetGroup.addEventListener('mousedown', this.targetGroupMouseDown);

    this.controlClear.addEventListener('click', this.clear);
  }

  disconnectedCallback() {
    // add later
    // this.removeEventListener('mousedown', this.mouseDown);
    // this.removeEventListener('mouseup', this.mouseUp);
  }

  mouseDown(event) {
    // Start draw line, create path
    this.path = {
      elem: document.createElementNS('http://www.w3.org/2000/svg', 'path'),
      start: {
        x: this.scaleCoord(event.offsetX),
        y: this.scaleCoord(event.offsetY)
      }
    };

    this.targetGroup.append(this.path.elem);

    this.addEventListener('mousemove', this.mouseMove);
  }

  mouseMove(event) {
    // Move path end to pointer coordinates
    this.path.elem.setAttribute(
      'd',
      `M${this.path.start.x},${this.path.start.y} ${this.scaleCoord(event.offsetX)},${this.scaleCoord(event.offsetY)}`);

    this.clickedPath = null;
  }

  mouseUp(event) {
    // Catch click to highlight path
    if(this.clickedPath) {
      this.mouseClickPath();

      // Remove latest path
      this.path.elem.remove();
      this.removeEventListener('mousemove', this.mouseMove);
      return;
    }

    this.unselect();

    // Or fix new path
    this.path.elem.id = `path-${this.pathsCounter}`;
    this.pathsCounter++;

    this.path.elem.setAttribute(
      'd',
      `M${this.path.start.x},${this.path.start.y} ${this.scaleCoord(event.offsetX)},${this.scaleCoord(event.offsetY)}`);

    this.removeEventListener('mousemove', this.mouseMove);
    this.dispatchChange();

    // Add events to new path
    this.path.elem.addEventListener('mouseover', this.mouseOverPath);
    this.path.elem.addEventListener('mouseout', this.mouseOutPath);
  }

  mouseOverPath(event) {
    event.target.classList.add('hovered');
  }

  mouseOutPath(event) {
    event.target.classList.remove('hovered');
  }

  mouseClickPath() {
    const pathId = this.clickedPath.id;
      this.clickedPath.classList.toggle('highlight');

      if(this.clickedPath.classList.contains('highlight')) {
        this.selected[pathId] = this.clickedPath;
      }
      else {
        delete this.selected[pathId];
    }

    this.clickedPath = null;
  }

  dispatchChange() {
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        groupContent: this.getSinglePathStr()
      },
      bubbles: true,
    }));
  }

  getSinglePathStr() {
    this.targetGroup.children.map = [].map;
    let singlePathCoords = '';

    for(let item of this.targetGroup.children) {
      singlePathCoords += ` ${item.getAttribute('d')}`;
    }

    return `<path d="${singlePathCoords}"/>`;
  }

  targetGroupMouseDown(event) {
    this.clickedPath = event.target;
  }

  unselect() {
    if(Object.values(this.selected).length > 0) {
      for(let key in this.selected) {
        this.selected[key].classList.remove('highlight');
        delete this.selected[key];
      }
    }
  }

  removePaths() {
    if(Object.values(this.selected).length > 0) {
      for(let key in this.selected) {
        console.log(key)
        this.selected[key].remove();
        delete this.selected[key];
      }

      this.dispatchChange();
    }
  }

  clear() {
    this.targetGroup.innerHTML = '';
    this.selected = {};
    this.dispatchChange();
  }

  // Return scale value if svg was resized
  getScale() {
    const measurePath = this.elem.getElementById('measure-rect');
    const width = measurePath.getAttribute('width');
    const rect = measurePath.getBoundingClientRect();

    return width / rect.width;
  }

  scaleCoord(coord) {
    return coord * this.scale;
  }
}


/***/ }),

/***/ "./src/lib/SnowFlakeView.js":
/*!**********************************!*\
  !*** ./src/lib/SnowFlakeView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnowFlakeView; });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;

      --transition: .25s;
    }

    .content {
      position: relative;
      min-width: 300px;
      min-height: 300px;
    }

    :host svg {
      width: 100%;
      height: 100%;
    }

    :host .contour {
      left: 0;
      top: 0;
      position: absolute;
      stroke-opacity: .5;
      transition: stroke-opacity var(--transition);
    }
    :host .contour--hidden {
      stroke-opacity: 0;
    }

    .controls {
      margin-top: 2rem;
    }
    .control {
      padding: .25rem 1rem;
      background: #FFF;
      border: 0;
      border-radius: .25rem;
      box-shadow: 0 0 0 2px transparent inset;
      color: #333;
      font: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: all var(--transition);
    }

    .control:hover {
      background: transparent;
      box-shadow:  0 0 0 2px #FFF inset;
      color: #FFF;
    }

    .controls__downloads {
      display: none;
      justify-content: center;
    }

    .controls[data-state="loading"] .control--get,
    .controls[data-state="ready"] .control--get {
      display: none;
    }
    .controls[data-state="loading"] .controls__downloads,
    .controls[data-state="ready"] .controls__downloads {
      display: flex;
    }

    .control + .control {
      margin-left: 1rem;
    }

    .controls__downloads .control {
      opacity: .2;
      pointer-events: none;
    }
    .controls[data-state="ready"] .control {
      opacity: 1;
      pointer-events: auto;
    }
  </style>

  <div class="content">
    <svg class="contour" viewBox="0 0 600 600" hidden>
      <circle r="300" cx="300" cy="300"
        stroke="currentColor"
        stroke-dasharray="10 5"
        stroke-width="1"
        fill="none"/>
    </svg>

    <svg class="snowflake"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="shape" d="M130.1,300.5, 130.1,0, 0,75z"></path>
      </defs>

      <clipPath id="slice-clip-path">
        <use xlink:href="#shape"/>
      </clipPath>

      <symbol id="slice">
        <g clip-path="url(#slice-clip-path)">
          <g id="target-group" stroke="currentColor" stroke-linecap="round" stroke-width="5"></g>
        </g>
      </symbol>

      <symbol id="pair-slices">
        <g transform="translate(170)">
          <use xlink:href="#slice"/>
          <use xlink:href="#slice" transform="translate(260,0) scale(-1,1)"/>
        </g>
      </symbol>

      <g>
        <use xlink:href="#pair-slices"
             transform="rotate(30, 300, 300)"/>
        <use xlink:href="#pair-slices"
             transform="rotate(90, 300, 300)"/>
        <use xlink:href="#pair-slices"
             transform="rotate(150, 300, 300)"/>
        <use xlink:href="#pair-slices"
             transform="rotate(210, 300, 300)"/>
        <use xlink:href="#pair-slices"
             transform="rotate(270, 300, 300)"/>
        <use xlink:href="#pair-slices"
             transform="rotate(330, 300, 300)"/>
      </g>
    </svg>
  </div>

  <div class="controls">
    <button
      type="button"
      class="control control--get">Get snowflake</button>

    <div class="controls__downloads">
       <a
        class="control control--download-svg">Download SVG</a>
      <a
        class="control control--download-png">Download PNG</a>
    </div>
  </div>
`;

class SnowFlakeView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(template.content.cloneNode(true));
    this.targetGroup = this.elem.querySelector('#target-group');

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.snowflake = this.elem.querySelector('.snowflake');
    this.controls = this.elem.querySelector('.controls');
    this.controlGet = this.elem.querySelector('.control--get');
    this.links ={
      png: this.elem.querySelector('.control--download-png'),
      svg: this.elem.querySelector('.control--download-svg')
    };
    this.theme = ['#253B59', 'turquoise'];

    this.outputStyle = this.getStyleStr();
    this.changeTheme = this.changeTheme.bind(this);
  }

  connectedCallback() {
    this.addEventListener('change-view', this.changeView);
    this.addEventListener('change-theme', this.changeTheme);

    this.controlGet.addEventListener('click', (event) => {
      this.controls.dataset.state = 'loading';
      this.downloadImg();
    })
  }

  changeView() {
    this.controls.dataset.state = '';
    this.targetGroup.innerHTML = event.detail.groupContent;
  }

  changeTheme() {
    if(event.detail && event.detail.theme) {
      this.controls.dataset.state = '';
      this.theme = event.detail.theme;
      this.outputStyle = this.getStyleStr();
    }
  }

  getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  getStyleStr() {
    return `background: ${this.getBackgroundStr(this.theme)}; color: white`;
  }

  disconnectedCallback() {
    this.removeEventListener('change-view', this._onKeyUp);
  }

  downloadImg() {
    this.finalSVG = this.snowflake.cloneNode(true);
    this.finalSVG.style = this.outputStyle;

    this.preparePng();
    this.prepareSvg();
  }

  preparePng() {
    const image = {
      width: 800,
      height: 800
    };

    const xml = new XMLSerializer().serializeToString(this.finalSVG);
    const svg64 = btoa(xml);
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;

    const imgObj = new Image();
    imgObj.src = image64;
    imgObj.width = image.width;
    imgObj.height = image.height;

    imgObj.addEventListener('load', () => {
      this.canvas.width = image.width;
      this.canvas.height = image.height;
      this.ctx.drawImage(imgObj, 0, 0, this.canvas.width, this.canvas.height);

      this.canvas.toBlob((blob) => {
        let URLObj = window.URL || window.webkitURL;
        this.links.png.href = URLObj.createObjectURL(blob, image.type, 1);
        this.links.png.download = `snowflake.png`;

        this.controls.dataset.state = 'ready';
      });
    }, false);
  }

  prepareSvg() {
    const image = {
      ext: 'png',
      width: 500,
      height: 500,
      name: 'snowflake'
    };

    const blob = new Blob([this.finalSVG.outerHTML], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(blob);
    this.links.svg.href = url;
    this.links.svg.download = `snowflake.svg`;

    this.controls.dataset.state = 'ready';
  }
}


/***/ }),

/***/ "./src/lib/ThemeSwitcher.js":
/*!**********************************!*\
  !*** ./src/lib/ThemeSwitcher.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeSwitcher; });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      min-width: 3rem;
      height: 3rem;
    }

    .visuallyhidden {
      position: absolute;

      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      clip: rect(0 0 0 0);
      overflow: hidden;
    }

    .controls {
      display: flex;
      padding: .5rem;
      background: rgba(255,255,255,.5);
      border-radius: 4rem;
    }

    .control {
      position: relative;
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      margin-right: .5rem;
      border-radius: 50%;
      border: none;
      box-shadow: 0 0 0 4px #FFF inset;
      cursor: pointer;
      transition: margin .5s;
      transition-property: box-shadow, margin;
    }

    .control:last-child {
      margin-right: 0 !important;
    }

    .control:focus {
      outline: none;
      box-shadow: 0 0 0 4px #FFF inset,
        0 0 0 4px rgba(255,255,255,.5);
    }

    .controls--collapsed .control {
      margin-right: -3rem;
    }

    .control--current {
      z-index: 2;
    }

    .control--current::after {
      content: '';
      position: absolute;
      top: -.25rem;
      right: -.25rem;
      bottom: -.25rem;
      left: -.25rem;
      border-radius: 50%;
      border: 1px dashed #FFF;
      animation: rotation 4s linear infinite;
      animation-play-state: paused;
    }

    .control--current:focus::after {
      content: none;
    }

    .controls--collapsed:hover .control--current {
      box-shadow: 0 0 0 2px #FFF inset;
    }
    .controls--collapsed:hover .control--current::after {
      animation-play-state: running;
    }



    @keyframes rotation {
      from {
        transform: rotate(0deg)
      }
      to {
        transform: rotate(360deg)
      }
    }
  </style>

  <div class="controls controls--collapsed"></div>
`;

const themes = [
  {
    name: 'Sea',
    colors:
      [
        '#022E40',
        'teal',
        'turquoise',
      ]
  },
  {
    name: 'North Sky',
    colors:
      [
        '#253B59',
        '#96D9C6',
      ]
  },
  {
    name: 'Deep Night',
    colors:
      [
        '#011526',
        '#022E40',
        '#074A59',
        '#266573',
      ]
  },
  {
    name: 'Deep Space',
    colors:
      [
        '#071218',
        '#1E5277'
      ]
  },
  {
    name: 'Steelblue',
    colors: ['steelblue']
  },
  {
    name: 'Teal',
    colors: ['teal']
  },
  {
    name: 'Darkslateblue',
    colors: ['darkslateblue']
  },
  {
    name: 'Orangered',
    colors: ['orangered']
  },
  {
    name: 'Indianred',
    colors: ['indianred']
  },
  {
    name: 'Firebrick',
    colors: ['firebrick']
  },
  {
    name: 'Purple',
    colors: ['purple']
  },
  {
    name: 'Gray',
    colors:
      [
        '#333'
      ]
  },
  {
    name: 'Black',
    colors:
      [
        '#000'
      ]
  },
];

class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(template.content.cloneNode(true));
    this.controls = this.elem.querySelector('.controls');
    this.currentThemeNum = Math.round(Math.random() * themes.length);
    this.currentThemeElem = null;
    this.isCollapsed = true;

    this.cls = {
      collapsed: 'controls--collapsed',
      current: 'control--current'
    }

    // Set current theme to page
    this.dispatchChangeTheme();
    this.addControls();

    this.onControlClick = this.onControlClick.bind(this);
  }

  addControls() {
    themes.forEach((theme, index) => {
      let bgStr = this.getBackgroundStr(theme.colors);
      let className = 'control';

      if(index === this.currentThemeNum) {
        className += ' control--current';
      }

      const controlStr = `<button
        type="button"
        class="${className}"
        title="${theme.name}"
        data-index="${index}"
        style="background: ${bgStr}">
          <span class="visuallyhidden">${theme.name}</span>
        </button>`;

      this.controls.insertAdjacentHTML('beforeEnd', controlStr);
      this.currentThemeElem = this.elem.querySelector(`.${this.cls.current}`);
    })
  }

  getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  connectedCallback() {
    this.controls.addEventListener('click', this.onControlClick);
  }

  onControlClick(event) {
    if(this.isCollapsed) {
      this.isCollapsed = false;
      this.controls.classList.remove(this.cls.collapsed);
      return;
    }
    if(event.target.dataset.index) {
      this.currentThemeNum = event.target.dataset.index;
      this.dispatchChangeTheme();
      this.isCollapsed = true;
      this.currentThemeElem.classList.remove(this.cls.current);
      event.target.classList.add(this.cls.current);
      this.currentThemeElem = event.target;
      this.controls.classList.add(this.cls.collapsed);
    }
  }

  dispatchChangeTheme() {
    const colors = themes[this.currentThemeNum].colors;
    this.controls.style.background = colors[0];

    this.dispatchEvent(new CustomEvent('change-theme', {
      detail: {
        theme: colors
      },
      bubbles: true
    }));
  }
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9Tbm93Rmxha2VFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9Tbm93Rmxha2VWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7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QkFBdUIsaUJBQWlCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Qsc0JBQXNCO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0IsaUJBQWlCLFdBQVc7QUFDNUIsc0JBQXNCLE1BQU07QUFDNUIsNkJBQTZCLE1BQU07QUFDbkMseUNBQXlDLFdBQVc7QUFDcEQ7O0FBRUE7QUFDQSwwREFBMEQsaUJBQWlCO0FBQzNFLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7QUM5UUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUzs7QUFFMUI7Ozs7QUFJQSwwQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJIVE1MIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuQk9EWSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMjUzQjU5LCB0dXJxdW9pc2UpO1xcbiAgZm9udDogMXJlbS8xLjQgVHJlYnVjaGV0IE1TLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNGRkY7XFxufVxcblxcbkgxLCBIMiwgSDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTI2MHB4O1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBwYWRkaW5nOiAwIDNyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucGFnZV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRoZW1lLXN3aXRjaGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucGFnZV9fbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wYWdlX19zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGFnZV9fc2VjdGlvbi0tZWRpdG9yIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ucGFnZV9fc2VjdGlvbi0tdmlldyB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnBhZ2VfX3NlY3Rpb24tY29udGVudCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNub3dmbGFrZS1lZGl0b3IsXFxuLnNub3dmbGFrZS12aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tpXSk7XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGxpc3RbaV1bMV0sXG4gICAgICBtZWRpYTogbGlzdFtpXVsyXSxcbiAgICAgIHNvdXJjZU1hcDogbGlzdFtpXVszXVxuICAgIH07XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0ocGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5wdXNoKGFkZFN0eWxlKHBhcnQsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBtb2R1bGVJZCA9IG9wdGlvbnMuYmFzZSA/IG1vZHVsZUlkICsgb3B0aW9ucy5iYXNlIDogbW9kdWxlSWQ7XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuXG4gIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdID0gW107XG4gIH1cblxuICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdID0gW107XG4gICAgfVxuXG4gICAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIGogPSBuZXdMaXN0Lmxlbmd0aDsgaiA8IHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGg7IGorKykge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2pdKCk7XG4gICAgfVxuXG4gICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9IG5ld0xpc3QubGVuZ3RoO1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVttb2R1bGVJZF07XG4gICAgfVxuICB9O1xufTsiLCJjb25zb2xlLmNsZWFyKCk7XG5pbXBvcnQgU25vd0ZsYWtlRWRpdG9yIGZyb20gJy4vbGliL1Nub3dGbGFrZUVkaXRvci5qcyc7XG5pbXBvcnQgU25vd0ZsYWtlVmlldyBmcm9tICcuL2xpYi9Tbm93Rmxha2VWaWV3LmpzJztcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vbGliL1RoZW1lU3dpdGNoZXIuanMnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBlZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd2ZsYWtlLWVkaXRvcicpO1xuICBjb25zdCB2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dmbGFrZS12aWV3Jyk7XG4gIGNvbnN0IHRoZW1lU3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtc3dpdGNoZXInKTtcblxuICBlZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHZpZXcuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZS12aWV3Jywge1xuICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgdGhlbWVTd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0QmFja2dyb3VuZFN0cihldmVudC5kZXRhaWwudGhlbWUpXG5cbiAgICB2aWV3LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UtdGhlbWUnLCB7XG4gICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9KTtcblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDggfHwgZXZlbnQua2V5Q29kZSA9PT0gNDYpIHtcblxuICAgICAgZWRpdG9yLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZW1vdmUtcGF0aCcsIHtcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbm93Zmxha2UtZWRpdG9yJywgU25vd0ZsYWtlRWRpdG9yKTtcbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc25vd2ZsYWtlLXZpZXcnLCBTbm93Rmxha2VWaWV3KTtcbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndGhlbWUtc3dpdGNoZXInLCBUaGVtZVN3aXRjaGVyKTtcbn0pKCk7XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA1MjBweDtcblxuICAgICAgLS10cmFuc2l0aW9uOiAuMjVzO1xuICAgIH1cblxuICAgIDpob3N0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgOmhvc3Qgc3ZnIHtcbiAgICAgIHdpZHRoOiA1MjBweDtcbiAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgfVxuXG4gICAgOmhvc3QgcGF0aCB7XG4gICAgICB0cmFuc2l0aW9uOiBzdHJva2UgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgOmhvc3QgLmhvdmVyZWQge1xuICAgICAgc3Ryb2tlOiBhcXVhO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIDpob3N0IC5oaWdobGlnaHQge1xuICAgICAgc3Ryb2tlOiBvcmFuZ2VyZWQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgIC5jb250cm9sIHtcbiAgICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdHJhbnNwYXJlbnQgaW5zZXQ7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG4gICAgLmNvbnRyb2w6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjRkZGIGluc2V0O1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyNjAgMzAwXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHBhdGggaWQ9XCJzaGFwZVwiIGQ9XCJNMTMwLjEsMzAwLjUsIDEzMC4xLDAsIDAsNzV6XCI+PC9wYXRoPlxuXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cInNsaWNlLWNsaXAtcGF0aFwiPlxuICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNzaGFwZVwiLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cblxuICAgICAgICA8c3ltYm9sIGlkPVwic2xpY2UtMTIzXCI+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NoYXBlXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiNSAyLjVcIlxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiLjVcIlxuICAgICAgICAgICAgc3Ryb2tlLW9wYWNpdHk9XCIuNVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgICA8ZyBjbGlwLXBhdGg9XCJ1cmwoI3NsaWNlLWNsaXAtcGF0aClcIj5cbiAgICAgICAgICAgIDxyZWN0IGZpbGw9XCJub25lXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj48L3JlY3Q+XG4gICAgICAgICAgICA8ZyBpZD1cInRhcmdldC1ncm91cC0xMjNcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiNVwiPjwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ltYm9sPlxuICAgICAgPC9kZWZzPlxuXG4gICAgICA8cmVjdCBpZD1cIm1lYXN1cmUtcmVjdFwiIGZpbGw9XCJ0cmFuc3BhcmVudFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPjwvcmVjdD5cblxuICAgICAgPGcgaWQ9XCJzbGljZVwiPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2hhcGVcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheT1cIjUgMi41XCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIuNVwiXG4gICAgICAgICAgc3Ryb2tlLW9wYWNpdHk9XCIuNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDxnIGNsaXAtcGF0aD1cInVybCgjc2xpY2UtY2xpcC1wYXRoKVwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj48L3JlY3Q+XG4gICAgICAgICAgPGcgaWQ9XCJ0YXJnZXQtZ3JvdXBcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiNVwiPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuXG4gICAgICA8dXNlXG4gICAgICAgIHhsaW5rOmhyZWY9XCIjc2xpY2VcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYwLDApIHNjYWxlKC0xLDEpXCJcbiAgICAgICAgc3R5bGU9XCJvcGFjaXR5Oi4yNVwiXG4gICAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1jbGVhclwiPkNsZWFyPC9idXR0b24+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0ZsYWtlRWRpdG9yIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJyN0YXJnZXQtZ3JvdXAnKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhciA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tY2xlYXInKTtcbiAgICB0aGlzLnNjYWxlID0gdGhpcy5nZXRTY2FsZSgpO1xuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICAgIHRoaXMucGF0aHNDb3VudGVyID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG5cbiAgICB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duID0gdGhpcy50YXJnZXRHcm91cE1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VPdmVyUGF0aCA9IHRoaXMubW91c2VPdmVyUGF0aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VPdXRQYXRoID0gdGhpcy5tb3VzZU91dFBhdGguYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsZWFyID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudW5zZWxlY3QgPSB0aGlzLnVuc2VsZWN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICAgIC8vIENhdGNoIGV2ZW50cyBmcm9tIHBhcmVudCBkb2N1bWVudFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZlLXBhdGgnLCB0aGlzLnJlbW92ZVBhdGhzKTtcbiAgICAvLyBDYXRjaCBldmVudHMgZm9yIHBhdGggaW5zaWRlIHBhdGhzIGdyb3VwXG4gICAgdGhpcy50YXJnZXRHcm91cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duKTtcblxuICAgIHRoaXMuY29udHJvbENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhcik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBhZGQgbGF0ZXJcbiAgICAvLyB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICAvLyB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICB9XG5cbiAgbW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gU3RhcnQgZHJhdyBsaW5lLCBjcmVhdGUgcGF0aFxuICAgIHRoaXMucGF0aCA9IHtcbiAgICAgIGVsZW06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpLFxuICAgICAgc3RhcnQ6IHtcbiAgICAgICAgeDogdGhpcy5zY2FsZUNvb3JkKGV2ZW50Lm9mZnNldFgpLFxuICAgICAgICB5OiB0aGlzLnNjYWxlQ29vcmQoZXZlbnQub2Zmc2V0WSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy50YXJnZXRHcm91cC5hcHBlbmQodGhpcy5wYXRoLmVsZW0pO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gIH1cblxuICBtb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAvLyBNb3ZlIHBhdGggZW5kIHRvIHBvaW50ZXIgY29vcmRpbmF0ZXNcbiAgICB0aGlzLnBhdGguZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICBgTSR7dGhpcy5wYXRoLnN0YXJ0Lnh9LCR7dGhpcy5wYXRoLnN0YXJ0Lnl9ICR7dGhpcy5zY2FsZUNvb3JkKGV2ZW50Lm9mZnNldFgpfSwke3RoaXMuc2NhbGVDb29yZChldmVudC5vZmZzZXRZKX1gKTtcblxuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcChldmVudCkge1xuICAgIC8vIENhdGNoIGNsaWNrIHRvIGhpZ2hsaWdodCBwYXRoXG4gICAgaWYodGhpcy5jbGlja2VkUGF0aCkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrUGF0aCgpO1xuXG4gICAgICAvLyBSZW1vdmUgbGF0ZXN0IHBhdGhcbiAgICAgIHRoaXMucGF0aC5lbGVtLnJlbW92ZSgpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51bnNlbGVjdCgpO1xuXG4gICAgLy8gT3IgZml4IG5ldyBwYXRoXG4gICAgdGhpcy5wYXRoLmVsZW0uaWQgPSBgcGF0aC0ke3RoaXMucGF0aHNDb3VudGVyfWA7XG4gICAgdGhpcy5wYXRoc0NvdW50ZXIrKztcblxuICAgIHRoaXMucGF0aC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHt0aGlzLnBhdGguc3RhcnQueH0sJHt0aGlzLnBhdGguc3RhcnQueX0gJHt0aGlzLnNjYWxlQ29vcmQoZXZlbnQub2Zmc2V0WCl9LCR7dGhpcy5zY2FsZUNvb3JkKGV2ZW50Lm9mZnNldFkpfWApO1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuXG4gICAgLy8gQWRkIGV2ZW50cyB0byBuZXcgcGF0aFxuICAgIHRoaXMucGF0aC5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMubW91c2VPdmVyUGF0aCk7XG4gICAgdGhpcy5wYXRoLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLm1vdXNlT3V0UGF0aCk7XG4gIH1cblxuICBtb3VzZU92ZXJQYXRoKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgfVxuXG4gIG1vdXNlT3V0UGF0aChldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gIH1cblxuICBtb3VzZUNsaWNrUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoSWQgPSB0aGlzLmNsaWNrZWRQYXRoLmlkO1xuICAgICAgdGhpcy5jbGlja2VkUGF0aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWdobGlnaHQnKTtcblxuICAgICAgaWYodGhpcy5jbGlja2VkUGF0aC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRbcGF0aElkXSA9IHRoaXMuY2xpY2tlZFBhdGg7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRbcGF0aElkXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBncm91cENvbnRlbnQ6IHRoaXMuZ2V0U2luZ2xlUGF0aFN0cigpXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBnZXRTaW5nbGVQYXRoU3RyKCkge1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuY2hpbGRyZW4ubWFwID0gW10ubWFwO1xuICAgIGxldCBzaW5nbGVQYXRoQ29vcmRzID0gJyc7XG5cbiAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy50YXJnZXRHcm91cC5jaGlsZHJlbikge1xuICAgICAgc2luZ2xlUGF0aENvb3JkcyArPSBgICR7aXRlbS5nZXRBdHRyaWJ1dGUoJ2QnKX1gO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7c2luZ2xlUGF0aENvb3Jkc31cIi8+YDtcbiAgfVxuXG4gIHRhcmdldEdyb3VwTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIHVuc2VsZWN0KCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW2tleV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUGF0aHMoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleSlcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICB9XG5cbiAgLy8gUmV0dXJuIHNjYWxlIHZhbHVlIGlmIHN2ZyB3YXMgcmVzaXplZFxuICBnZXRTY2FsZSgpIHtcbiAgICBjb25zdCBtZWFzdXJlUGF0aCA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnbWVhc3VyZS1yZWN0Jyk7XG4gICAgY29uc3Qgd2lkdGggPSBtZWFzdXJlUGF0aC5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgY29uc3QgcmVjdCA9IG1lYXN1cmVQYXRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgcmV0dXJuIHdpZHRoIC8gcmVjdC53aWR0aDtcbiAgfVxuXG4gIHNjYWxlQ29vcmQoY29vcmQpIHtcbiAgICByZXR1cm4gY29vcmQgKiB0aGlzLnNjYWxlO1xuICB9XG59XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgLS10cmFuc2l0aW9uOiAuMjVzO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICB9XG5cbiAgICA6aG9zdCBzdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgOmhvc3QgLmNvbnRvdXIge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHN0cm9rZS1vcGFjaXR5OiAuNTtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1vcGFjaXR5IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cbiAgICA6aG9zdCAuY29udG91ci0taGlkZGVuIHtcbiAgICAgIHN0cm9rZS1vcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgICAuY29udHJvbCB7XG4gICAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdHJhbnNwYXJlbnQgaW5zZXQ7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4ICNGRkYgaW5zZXQ7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG5cbiAgICAuY29udHJvbHNfX2Rvd25sb2FkcyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJsb2FkaW5nXCJdIC5jb250cm9sLS1nZXQsXG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbC0tZ2V0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwibG9hZGluZ1wiXSAuY29udHJvbHNfX2Rvd25sb2FkcyxcbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sc19fZG93bmxvYWRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wgKyAuY29udHJvbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG5cbiAgICAuY29udHJvbHNfX2Rvd25sb2FkcyAuY29udHJvbCB7XG4gICAgICBvcGFjaXR5OiAuMjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICA8c3ZnIGNsYXNzPVwiY29udG91clwiIHZpZXdCb3g9XCIwIDAgNjAwIDYwMFwiIGhpZGRlbj5cbiAgICAgIDxjaXJjbGUgcj1cIjMwMFwiIGN4PVwiMzAwXCIgY3k9XCIzMDBcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMTAgNVwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjFcIlxuICAgICAgICBmaWxsPVwibm9uZVwiLz5cbiAgICA8L3N2Zz5cblxuICAgIDxzdmcgY2xhc3M9XCJzbm93Zmxha2VcIlxuICAgICAgdmlld0JveD1cIjAgMCA2MDAgNjAwXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHBhdGggaWQ9XCJzaGFwZVwiIGQ9XCJNMTMwLjEsMzAwLjUsIDEzMC4xLDAsIDAsNzV6XCI+PC9wYXRoPlxuICAgICAgPC9kZWZzPlxuXG4gICAgICA8Y2xpcFBhdGggaWQ9XCJzbGljZS1jbGlwLXBhdGhcIj5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NoYXBlXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cblxuICAgICAgPHN5bWJvbCBpZD1cInNsaWNlXCI+XG4gICAgICAgIDxnIGNsaXAtcGF0aD1cInVybCgjc2xpY2UtY2xpcC1wYXRoKVwiPlxuICAgICAgICAgIDxnIGlkPVwidGFyZ2V0LWdyb3VwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjVcIj48L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ltYm9sPlxuXG4gICAgICA8c3ltYm9sIGlkPVwicGFpci1zbGljZXNcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE3MClcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2VcIi8+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI2MCwwKSBzY2FsZSgtMSwxKVwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zeW1ib2w+XG5cbiAgICAgIDxnPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgzMCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgxNTAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMjEwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDI3MCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgzMzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tZ2V0XCI+R2V0IHNub3dmbGFrZTwvYnV0dG9uPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzX19kb3dubG9hZHNcIj5cbiAgICAgICA8YVxuICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tZG93bmxvYWQtc3ZnXCI+RG93bmxvYWQgU1ZHPC9hPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWRvd25sb2FkLXBuZ1wiPkRvd25sb2FkIFBORzwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbm93Rmxha2VWaWV3IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJyN0YXJnZXQtZ3JvdXAnKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5zbm93Zmxha2UgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLnNub3dmbGFrZScpO1xuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJyk7XG4gICAgdGhpcy5jb250cm9sR2V0ID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1nZXQnKTtcbiAgICB0aGlzLmxpbmtzID17XG4gICAgICBwbmc6IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZG93bmxvYWQtcG5nJyksXG4gICAgICBzdmc6IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZG93bmxvYWQtc3ZnJylcbiAgICB9O1xuICAgIHRoaXMudGhlbWUgPSBbJyMyNTNCNTknLCAndHVycXVvaXNlJ107XG5cbiAgICB0aGlzLm91dHB1dFN0eWxlID0gdGhpcy5nZXRTdHlsZVN0cigpO1xuICAgIHRoaXMuY2hhbmdlVGhlbWUgPSB0aGlzLmNoYW5nZVRoZW1lLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS12aWV3JywgdGhpcy5jaGFuZ2VWaWV3KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsIHRoaXMuY2hhbmdlVGhlbWUpO1xuXG4gICAgdGhpcy5jb250cm9sR2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnbG9hZGluZyc7XG4gICAgICB0aGlzLmRvd25sb2FkSW1nKCk7XG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVZpZXcoKSB7XG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUwgPSBldmVudC5kZXRhaWwuZ3JvdXBDb250ZW50O1xuICB9XG5cbiAgY2hhbmdlVGhlbWUoKSB7XG4gICAgaWYoZXZlbnQuZGV0YWlsICYmIGV2ZW50LmRldGFpbC50aGVtZSkge1xuICAgICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgICB0aGlzLnRoZW1lID0gZXZlbnQuZGV0YWlsLnRoZW1lO1xuICAgICAgdGhpcy5vdXRwdXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGVTdHIoKTtcbiAgICB9XG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGdldFN0eWxlU3RyKCkge1xuICAgIHJldHVybiBgYmFja2dyb3VuZDogJHt0aGlzLmdldEJhY2tncm91bmRTdHIodGhpcy50aGVtZSl9OyBjb2xvcjogd2hpdGVgO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UtdmlldycsIHRoaXMuX29uS2V5VXApO1xuICB9XG5cbiAgZG93bmxvYWRJbWcoKSB7XG4gICAgdGhpcy5maW5hbFNWRyA9IHRoaXMuc25vd2ZsYWtlLmNsb25lTm9kZSh0cnVlKTtcbiAgICB0aGlzLmZpbmFsU1ZHLnN0eWxlID0gdGhpcy5vdXRwdXRTdHlsZTtcblxuICAgIHRoaXMucHJlcGFyZVBuZygpO1xuICAgIHRoaXMucHJlcGFyZVN2ZygpO1xuICB9XG5cbiAgcHJlcGFyZVBuZygpIHtcbiAgICBjb25zdCBpbWFnZSA9IHtcbiAgICAgIHdpZHRoOiA4MDAsXG4gICAgICBoZWlnaHQ6IDgwMFxuICAgIH07XG5cbiAgICBjb25zdCB4bWwgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMuZmluYWxTVkcpO1xuICAgIGNvbnN0IHN2ZzY0ID0gYnRvYSh4bWwpO1xuICAgIGNvbnN0IGI2NFN0YXJ0ID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJztcbiAgICBjb25zdCBpbWFnZTY0ID0gYjY0U3RhcnQgKyBzdmc2NDtcblxuICAgIGNvbnN0IGltZ09iaiA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ09iai5zcmMgPSBpbWFnZTY0O1xuICAgIGltZ09iai53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgIGltZ09iai5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG5cbiAgICBpbWdPYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nT2JqLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgdGhpcy5jYW52YXMudG9CbG9iKChibG9iKSA9PiB7XG4gICAgICAgIGxldCBVUkxPYmogPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgICAgIHRoaXMubGlua3MucG5nLmhyZWYgPSBVUkxPYmouY3JlYXRlT2JqZWN0VVJMKGJsb2IsIGltYWdlLnR5cGUsIDEpO1xuICAgICAgICB0aGlzLmxpbmtzLnBuZy5kb3dubG9hZCA9IGBzbm93Zmxha2UucG5nYDtcblxuICAgICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgcHJlcGFyZVN2ZygpIHtcbiAgICBjb25zdCBpbWFnZSA9IHtcbiAgICAgIGV4dDogJ3BuZycsXG4gICAgICB3aWR0aDogNTAwLFxuICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICBuYW1lOiAnc25vd2ZsYWtlJ1xuICAgIH07XG5cbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3RoaXMuZmluYWxTVkcub3V0ZXJIVE1MXSwge3R5cGU6ICdpbWFnZS9zdmcreG1sJ30pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgdGhpcy5saW5rcy5zdmcuaHJlZiA9IHVybDtcbiAgICB0aGlzLmxpbmtzLnN2Zy5kb3dubG9hZCA9IGBzbm93Zmxha2Uuc3ZnYDtcblxuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdyZWFkeSc7XG4gIH1cbn1cbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgIH1cblxuICAgIC52aXN1YWxseWhpZGRlbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggI0ZGRiBpbnNldDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IG1hcmdpbiAuNXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBtYXJnaW47XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29udHJvbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNGRkYgaW5zZXQsXG4gICAgICAgIDAgMCAwIDRweCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZCAuY29udHJvbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtLjI1cmVtO1xuICAgICAgcmlnaHQ6IC0uMjVyZW07XG4gICAgICBib3R0b206IC0uMjVyZW07XG4gICAgICBsZWZ0OiAtLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNGRkY7XG4gICAgICBhbmltYXRpb246IHJvdGF0aW9uIDRzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtLWN1cnJlbnQ6Zm9jdXM6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzLS1jb2xsYXBzZWQ6aG92ZXIgLmNvbnRyb2wtLWN1cnJlbnQge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNGRkYgaW5zZXQ7XG4gICAgfVxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgICB9XG5cblxuXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZylcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxuICAgICAgfVxuICAgIH1cbiAgPC9zdHlsZT5cblxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHMgY29udHJvbHMtLWNvbGxhcHNlZFwiPjwvZGl2PlxuYDtcblxuY29uc3QgdGhlbWVzID0gW1xuICB7XG4gICAgbmFtZTogJ1NlYScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzAyMkU0MCcsXG4gICAgICAgICd0ZWFsJyxcbiAgICAgICAgJ3R1cnF1b2lzZScsXG4gICAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTm9ydGggU2t5JyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMjUzQjU5JyxcbiAgICAgICAgJyM5NkQ5QzYnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RlZXAgTmlnaHQnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwMTE1MjYnLFxuICAgICAgICAnIzAyMkU0MCcsXG4gICAgICAgICcjMDc0QTU5JyxcbiAgICAgICAgJyMyNjY1NzMnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RlZXAgU3BhY2UnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwNzEyMTgnLFxuICAgICAgICAnIzFFNTI3NydcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdGVlbGJsdWUnLFxuICAgIGNvbG9yczogWydzdGVlbGJsdWUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1RlYWwnLFxuICAgIGNvbG9yczogWyd0ZWFsJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEYXJrc2xhdGVibHVlJyxcbiAgICBjb2xvcnM6IFsnZGFya3NsYXRlYmx1ZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT3JhbmdlcmVkJyxcbiAgICBjb2xvcnM6IFsnb3JhbmdlcmVkJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbmRpYW5yZWQnLFxuICAgIGNvbG9yczogWydpbmRpYW5yZWQnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0ZpcmVicmljaycsXG4gICAgY29sb3JzOiBbJ2ZpcmVicmljayddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUHVycGxlJyxcbiAgICBjb2xvcnM6IFsncHVycGxlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHcmF5JyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMzMzJ1xuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0JsYWNrJyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMDAwJ1xuICAgICAgXVxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTd2l0Y2hlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoZW1lcy5sZW5ndGgpO1xuICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IG51bGw7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGNvbGxhcHNlZDogJ2NvbnRyb2xzLS1jb2xsYXBzZWQnLFxuICAgICAgY3VycmVudDogJ2NvbnRyb2wtLWN1cnJlbnQnXG4gICAgfVxuXG4gICAgLy8gU2V0IGN1cnJlbnQgdGhlbWUgdG8gcGFnZVxuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2VUaGVtZSgpO1xuICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcblxuICAgIHRoaXMub25Db250cm9sQ2xpY2sgPSB0aGlzLm9uQ29udHJvbENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGRDb250cm9scygpIHtcbiAgICB0aGVtZXMuZm9yRWFjaCgodGhlbWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgYmdTdHIgPSB0aGlzLmdldEJhY2tncm91bmRTdHIodGhlbWUuY29sb3JzKTtcbiAgICAgIGxldCBjbGFzc05hbWUgPSAnY29udHJvbCc7XG5cbiAgICAgIGlmKGluZGV4ID09PSB0aGlzLmN1cnJlbnRUaGVtZU51bSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyBjb250cm9sLS1jdXJyZW50JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udHJvbFN0ciA9IGA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiXG4gICAgICAgIHRpdGxlPVwiJHt0aGVtZS5uYW1lfVwiXG4gICAgICAgIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZDogJHtiZ1N0cn1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5aGlkZGVuXCI+JHt0aGVtZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+YDtcblxuICAgICAgdGhpcy5jb250cm9scy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIGNvbnRyb2xTdHIpO1xuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xzLmN1cnJlbnR9YCk7XG4gICAgfSlcbiAgfVxuXG4gIGdldEJhY2tncm91bmRTdHIoY29sb3JzTGlzdCkge1xuICAgIGxldCBiZ1N0ciA9ICcnO1xuXG4gICAgaWYoY29sb3JzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJnU3RyID0gY29sb3JzTGlzdFswXVxuICAgICAgcmV0dXJuIGJnU3RyO1xuICAgIH1cblxuICAgIGJnU3RyID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3JzTGlzdC5qb2luKCcsJyl9KWA7XG4gICAgcmV0dXJuIGJnU3RyO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db250cm9sQ2xpY2spO1xuICB9XG5cbiAgb25Db250cm9sQ2xpY2soZXZlbnQpIHtcbiAgICBpZih0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lTnVtID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCh0aGlzLmNscy5jdXJyZW50KTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMuY29udHJvbHMuY2xhc3NMaXN0LmFkZCh0aGlzLmNscy5jb2xsYXBzZWQpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlVGhlbWUoKSB7XG4gICAgY29uc3QgY29sb3JzID0gdGhlbWVzW3RoaXMuY3VycmVudFRoZW1lTnVtXS5jb2xvcnM7XG4gICAgdGhpcy5jb250cm9scy5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JzWzBdO1xuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlLXRoZW1lJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHRoZW1lOiBjb2xvcnNcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlXG4gICAgfSkpO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==