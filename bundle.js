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
        transform="scale(-1,1)"
        style="transform-origin: 130px 0; opacity:.25"
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
          <use xlink:href="#slice" transform="scale(-1,1)" style="transform-origin: 130px 0"/>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9Tbm93Rmxha2VFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9Tbm93Rmxha2VWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7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OztBQUVBLHVCQUF1QixpQkFBaUI7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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SztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlRQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixRQUFTOztBQUUxQjs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkhUTUwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5CT0RZIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMyNTNCNTksIHR1cnF1b2lzZSk7XFxuICBmb250OiAxcmVtLzEuNCBUcmVidWNoZXQgTVMsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0ZGRjtcXG59XFxuXFxuSDEsIEgyLCBIMyB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ucGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjYwcHg7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDAgM3JlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wYWdlX19oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGhlbWUtc3dpdGNoZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5wYWdlX19tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnBhZ2VfX3NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wYWdlX19zZWN0aW9uLS1lZGl0b3Ige1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcblxcbi5wYWdlX19zZWN0aW9uLS12aWV3IHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucGFnZV9fc2VjdGlvbi1jb250ZW50IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc25vd2ZsYWtlLWVkaXRvcixcXG4uc25vd2ZsYWtlLXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW2ldKTtcblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogbGlzdFtpXVsxXSxcbiAgICAgIG1lZGlhOiBsaXN0W2ldWzJdLFxuICAgICAgc291cmNlTWFwOiBsaXN0W2ldWzNdXG4gICAgfTtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXShwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLnB1c2goYWRkU3R5bGUocGFydCwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIG1vZHVsZUlkID0gb3B0aW9ucy5iYXNlID8gbW9kdWxlSWQgKyBvcHRpb25zLmJhc2UgOiBtb2R1bGVJZDtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG5cbiAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgfVxuXG4gIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgICB9XG5cbiAgICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaiA9IG5ld0xpc3QubGVuZ3RoOyBqIDwgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aDsgaisrKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1bal0oKTtcbiAgICB9XG5cbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID0gbmV3TGlzdC5sZW5ndGg7XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG59OyIsImNvbnNvbGUuY2xlYXIoKTtcbmltcG9ydCBTbm93Rmxha2VFZGl0b3IgZnJvbSAnLi9saWIvU25vd0ZsYWtlRWRpdG9yLmpzJztcbmltcG9ydCBTbm93Rmxha2VWaWV3IGZyb20gJy4vbGliL1Nub3dGbGFrZVZpZXcuanMnO1xuaW1wb3J0IFRoZW1lU3dpdGNoZXIgZnJvbSAnLi9saWIvVGhlbWVTd2l0Y2hlci5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UtZWRpdG9yJyk7XG4gIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd2ZsYWtlLXZpZXcnKTtcbiAgY29uc3QgdGhlbWVTd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1zd2l0Y2hlcicpO1xuXG4gIGVkaXRvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgdmlldy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlLXZpZXcnLCB7XG4gICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9KTtcblxuICB0aGVtZVN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBnZXRCYWNrZ3JvdW5kU3RyKGV2ZW50LmRldGFpbC50aGVtZSlcblxuICAgIHZpZXcuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZS10aGVtZScsIHtcbiAgICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0Nikge1xuXG4gICAgICBlZGl0b3IuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JlbW92ZS1wYXRoJywge1xuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Nub3dmbGFrZS1lZGl0b3InLCBTbm93Rmxha2VFZGl0b3IpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbm93Zmxha2UtdmlldycsIFNub3dGbGFrZVZpZXcpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0aGVtZS1zd2l0Y2hlcicsIFRoZW1lU3dpdGNoZXIpO1xufSkoKTtcbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDUyMHB4O1xuXG4gICAgICAtLXRyYW5zaXRpb246IC4yNXM7XG4gICAgfVxuXG4gICAgOmhvc3Q6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICA6aG9zdCBzdmcge1xuICAgICAgd2lkdGg6IDUyMHB4O1xuICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICB9XG5cbiAgICA6aG9zdCBwYXRoIHtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZSB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICA6aG9zdCAuaG92ZXJlZCB7XG4gICAgICBzdHJva2U6IGFxdWE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgOmhvc3QgLmhpZ2hsaWdodCB7XG4gICAgICBzdHJva2U6IG9yYW5nZXJlZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLmNvbnRyb2wge1xuICAgICAgcGFkZGluZzogLjI1cmVtIDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cbiAgICAuY29udHJvbDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNGRkYgaW5zZXQ7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2MCAzMDBcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8cGF0aCBpZD1cInNoYXBlXCIgZD1cIk0xMzAuMSwzMDAuNSwgMTMwLjEsMCwgMCw3NXpcIj48L3BhdGg+XG5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwic2xpY2UtY2xpcC1wYXRoXCI+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NoYXBlXCIvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJzbGljZS0xMjNcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2hhcGVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk9XCI1IDIuNVwiXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIuNVwiXG4gICAgICAgICAgICBzdHJva2Utb3BhY2l0eT1cIi41XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCIvPlxuICAgICAgICAgIDxnIGNsaXAtcGF0aD1cInVybCgjc2xpY2UtY2xpcC1wYXRoKVwiPlxuICAgICAgICAgICAgPHJlY3QgZmlsbD1cIm5vbmVcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPjwvcmVjdD5cbiAgICAgICAgICAgIDxnIGlkPVwidGFyZ2V0LWdyb3VwLTEyM1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI1XCI+PC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zeW1ib2w+XG4gICAgICA8L2RlZnM+XG5cbiAgICAgIDxyZWN0IGlkPVwibWVhc3VyZS1yZWN0XCIgZmlsbD1cInRyYW5zcGFyZW50XCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+PC9yZWN0PlxuXG4gICAgICA8ZyBpZD1cInNsaWNlXCI+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNzaGFwZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiNSAyLjVcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIi41XCJcbiAgICAgICAgICBzdHJva2Utb3BhY2l0eT1cIi41XCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNzbGljZS1jbGlwLXBhdGgpXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPjwvcmVjdD5cbiAgICAgICAgICA8ZyBpZD1cInRhcmdldC1ncm91cFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI1XCI+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG5cbiAgICAgIDx1c2VcbiAgICAgICAgeGxpbms6aHJlZj1cIiNzbGljZVwiXG4gICAgICAgIHRyYW5zZm9ybT1cInNjYWxlKC0xLDEpXCJcbiAgICAgICAgc3R5bGU9XCJ0cmFuc2Zvcm0tb3JpZ2luOiAxMzBweCAwOyBvcGFjaXR5Oi4yNVwiXG4gICAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1jbGVhclwiPkNsZWFyPC9idXR0b24+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0ZsYWtlRWRpdG9yIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJyN0YXJnZXQtZ3JvdXAnKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhciA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tY2xlYXInKTtcbiAgICB0aGlzLnNjYWxlID0gdGhpcy5nZXRTY2FsZSgpO1xuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICAgIHRoaXMucGF0aHNDb3VudGVyID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG5cbiAgICB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duID0gdGhpcy50YXJnZXRHcm91cE1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VPdmVyUGF0aCA9IHRoaXMubW91c2VPdmVyUGF0aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VPdXRQYXRoID0gdGhpcy5tb3VzZU91dFBhdGguYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsZWFyID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudW5zZWxlY3QgPSB0aGlzLnVuc2VsZWN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICAgIC8vIENhdGNoIGV2ZW50cyBmcm9tIHBhcmVudCBkb2N1bWVudFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZlLXBhdGgnLCB0aGlzLnJlbW92ZVBhdGhzKTtcbiAgICAvLyBDYXRjaCBldmVudHMgZm9yIHBhdGggaW5zaWRlIHBhdGhzIGdyb3VwXG4gICAgdGhpcy50YXJnZXRHcm91cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duKTtcblxuICAgIHRoaXMuY29udHJvbENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhcik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBhZGQgbGF0ZXJcbiAgICAvLyB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICAvLyB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICB9XG5cbiAgbW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gU3RhcnQgZHJhdyBsaW5lLCBjcmVhdGUgcGF0aFxuICAgIHRoaXMucGF0aCA9IHtcbiAgICAgIGVsZW06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpLFxuICAgICAgc3RhcnQ6IHtcbiAgICAgICAgeDogdGhpcy5zY2FsZUNvb3JkKGV2ZW50Lm9mZnNldFgpLFxuICAgICAgICB5OiB0aGlzLnNjYWxlQ29vcmQoZXZlbnQub2Zmc2V0WSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy50YXJnZXRHcm91cC5hcHBlbmQodGhpcy5wYXRoLmVsZW0pO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gIH1cblxuICBtb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAvLyBNb3ZlIHBhdGggZW5kIHRvIHBvaW50ZXIgY29vcmRpbmF0ZXNcbiAgICB0aGlzLnBhdGguZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICBgTSR7dGhpcy5wYXRoLnN0YXJ0Lnh9LCR7dGhpcy5wYXRoLnN0YXJ0Lnl9ICR7dGhpcy5zY2FsZUNvb3JkKGV2ZW50Lm9mZnNldFgpfSwke3RoaXMuc2NhbGVDb29yZChldmVudC5vZmZzZXRZKX1gKTtcblxuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcChldmVudCkge1xuICAgIC8vIENhdGNoIGNsaWNrIHRvIGhpZ2hsaWdodCBwYXRoXG4gICAgaWYodGhpcy5jbGlja2VkUGF0aCkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrUGF0aCgpO1xuXG4gICAgICAvLyBSZW1vdmUgbGF0ZXN0IHBhdGhcbiAgICAgIHRoaXMucGF0aC5lbGVtLnJlbW92ZSgpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51bnNlbGVjdCgpO1xuXG4gICAgLy8gT3IgZml4IG5ldyBwYXRoXG4gICAgdGhpcy5wYXRoLmVsZW0uaWQgPSBgcGF0aC0ke3RoaXMucGF0aHNDb3VudGVyfWA7XG4gICAgdGhpcy5wYXRoc0NvdW50ZXIrKztcblxuICAgIHRoaXMucGF0aC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHt0aGlzLnBhdGguc3RhcnQueH0sJHt0aGlzLnBhdGguc3RhcnQueX0gJHt0aGlzLnNjYWxlQ29vcmQoZXZlbnQub2Zmc2V0WCl9LCR7dGhpcy5zY2FsZUNvb3JkKGV2ZW50Lm9mZnNldFkpfWApO1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuXG4gICAgLy8gQWRkIGV2ZW50cyB0byBuZXcgcGF0aFxuICAgIHRoaXMucGF0aC5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMubW91c2VPdmVyUGF0aCk7XG4gICAgdGhpcy5wYXRoLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLm1vdXNlT3V0UGF0aCk7XG4gIH1cblxuICBtb3VzZU92ZXJQYXRoKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgfVxuXG4gIG1vdXNlT3V0UGF0aChldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gIH1cblxuICBtb3VzZUNsaWNrUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoSWQgPSB0aGlzLmNsaWNrZWRQYXRoLmlkO1xuICAgICAgdGhpcy5jbGlja2VkUGF0aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWdobGlnaHQnKTtcblxuICAgICAgaWYodGhpcy5jbGlja2VkUGF0aC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRbcGF0aElkXSA9IHRoaXMuY2xpY2tlZFBhdGg7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRbcGF0aElkXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBncm91cENvbnRlbnQ6IHRoaXMuZ2V0U2luZ2xlUGF0aFN0cigpXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBnZXRTaW5nbGVQYXRoU3RyKCkge1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuY2hpbGRyZW4ubWFwID0gW10ubWFwO1xuICAgIGxldCBzaW5nbGVQYXRoQ29vcmRzID0gJyc7XG5cbiAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy50YXJnZXRHcm91cC5jaGlsZHJlbikge1xuICAgICAgc2luZ2xlUGF0aENvb3JkcyArPSBgICR7aXRlbS5nZXRBdHRyaWJ1dGUoJ2QnKX1gO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7c2luZ2xlUGF0aENvb3Jkc31cIi8+YDtcbiAgfVxuXG4gIHRhcmdldEdyb3VwTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIHVuc2VsZWN0KCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW2tleV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUGF0aHMoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleSlcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICB9XG5cbiAgLy8gUmV0dXJuIHNjYWxlIHZhbHVlIGlmIHN2ZyB3YXMgcmVzaXplZFxuICBnZXRTY2FsZSgpIHtcbiAgICBjb25zdCBtZWFzdXJlUGF0aCA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnbWVhc3VyZS1yZWN0Jyk7XG4gICAgY29uc3Qgd2lkdGggPSBtZWFzdXJlUGF0aC5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgY29uc3QgcmVjdCA9IG1lYXN1cmVQYXRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgcmV0dXJuIHdpZHRoIC8gcmVjdC53aWR0aDtcbiAgfVxuXG4gIHNjYWxlQ29vcmQoY29vcmQpIHtcbiAgICByZXR1cm4gY29vcmQgKiB0aGlzLnNjYWxlO1xuICB9XG59XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgLS10cmFuc2l0aW9uOiAuMjVzO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICB9XG5cbiAgICA6aG9zdCBzdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgOmhvc3QgLmNvbnRvdXIge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHN0cm9rZS1vcGFjaXR5OiAuNTtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1vcGFjaXR5IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cbiAgICA6aG9zdCAuY29udG91ci0taGlkZGVuIHtcbiAgICAgIHN0cm9rZS1vcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgICAuY29udHJvbCB7XG4gICAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdHJhbnNwYXJlbnQgaW5zZXQ7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4ICNGRkYgaW5zZXQ7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG5cbiAgICAuY29udHJvbHNfX2Rvd25sb2FkcyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJsb2FkaW5nXCJdIC5jb250cm9sLS1nZXQsXG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbC0tZ2V0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwibG9hZGluZ1wiXSAuY29udHJvbHNfX2Rvd25sb2FkcyxcbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sc19fZG93bmxvYWRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wgKyAuY29udHJvbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG5cbiAgICAuY29udHJvbHNfX2Rvd25sb2FkcyAuY29udHJvbCB7XG4gICAgICBvcGFjaXR5OiAuMjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICA8c3ZnIGNsYXNzPVwiY29udG91clwiIHZpZXdCb3g9XCIwIDAgNjAwIDYwMFwiIGhpZGRlbj5cbiAgICAgIDxjaXJjbGUgcj1cIjMwMFwiIGN4PVwiMzAwXCIgY3k9XCIzMDBcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMTAgNVwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjFcIlxuICAgICAgICBmaWxsPVwibm9uZVwiLz5cbiAgICA8L3N2Zz5cblxuICAgIDxzdmcgY2xhc3M9XCJzbm93Zmxha2VcIlxuICAgICAgdmlld0JveD1cIjAgMCA2MDAgNjAwXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHBhdGggaWQ9XCJzaGFwZVwiIGQ9XCJNMTMwLjEsMzAwLjUsIDEzMC4xLDAsIDAsNzV6XCI+PC9wYXRoPlxuICAgICAgPC9kZWZzPlxuXG4gICAgICA8Y2xpcFBhdGggaWQ9XCJzbGljZS1jbGlwLXBhdGhcIj5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NoYXBlXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cblxuICAgICAgPHN5bWJvbCBpZD1cInNsaWNlXCI+XG4gICAgICAgIDxnIGNsaXAtcGF0aD1cInVybCgjc2xpY2UtY2xpcC1wYXRoKVwiPlxuICAgICAgICAgIDxnIGlkPVwidGFyZ2V0LWdyb3VwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjVcIj48L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ltYm9sPlxuXG4gICAgICA8c3ltYm9sIGlkPVwicGFpci1zbGljZXNcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE3MClcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2VcIi8+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlXCIgdHJhbnNmb3JtPVwic2NhbGUoLTEsMSlcIiBzdHlsZT1cInRyYW5zZm9ybS1vcmlnaW46IDEzMHB4IDBcIi8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ltYm9sPlxuXG4gICAgICA8Zz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoOTAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDIxMCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwLCAzMDAsIDMwMClcIi8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWdldFwiPkdldCBzbm93Zmxha2U8L2J1dHRvbj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fZG93bmxvYWRzXCI+XG4gICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWRvd25sb2FkLXN2Z1wiPkRvd25sb2FkIFNWRzwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1kb3dubG9hZC1wbmdcIj5Eb3dubG9hZCBQTkc8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0ZsYWtlVmlldyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy50YXJnZXRHcm91cCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0LWdyb3VwJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHRoaXMuc25vd2ZsYWtlID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UnKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgIHRoaXMuY29udHJvbEdldCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZ2V0Jyk7XG4gICAgdGhpcy5saW5rcyA9e1xuICAgICAgcG5nOiB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWRvd25sb2FkLXBuZycpLFxuICAgICAgc3ZnOiB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWRvd25sb2FkLXN2ZycpXG4gICAgfTtcbiAgICB0aGlzLnRoZW1lID0gWycjMjUzQjU5JywgJ3R1cnF1b2lzZSddO1xuXG4gICAgdGhpcy5vdXRwdXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGVTdHIoKTtcbiAgICB0aGlzLmNoYW5nZVRoZW1lID0gdGhpcy5jaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdmlldycsIHRoaXMuY2hhbmdlVmlldyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCB0aGlzLmNoYW5nZVRoZW1lKTtcblxuICAgIHRoaXMuY29udHJvbEdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJ2xvYWRpbmcnO1xuICAgICAgdGhpcy5kb3dubG9hZEltZygpO1xuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VWaWV3KCkge1xuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MID0gZXZlbnQuZGV0YWlsLmdyb3VwQ29udGVudDtcbiAgfVxuXG4gIGNoYW5nZVRoZW1lKCkge1xuICAgIGlmKGV2ZW50LmRldGFpbCAmJiBldmVudC5kZXRhaWwudGhlbWUpIHtcbiAgICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgICAgdGhpcy50aGVtZSA9IGV2ZW50LmRldGFpbC50aGVtZTtcbiAgICAgIHRoaXMub3V0cHV0U3R5bGUgPSB0aGlzLmdldFN0eWxlU3RyKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICBnZXRTdHlsZVN0cigpIHtcbiAgICByZXR1cm4gYGJhY2tncm91bmQ6ICR7dGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoaXMudGhlbWUpfTsgY29sb3I6IHdoaXRlYDtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlLXZpZXcnLCB0aGlzLl9vbktleVVwKTtcbiAgfVxuXG4gIGRvd25sb2FkSW1nKCkge1xuICAgIHRoaXMuZmluYWxTVkcgPSB0aGlzLnNub3dmbGFrZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGhpcy5maW5hbFNWRy5zdHlsZSA9IHRoaXMub3V0cHV0U3R5bGU7XG5cbiAgICB0aGlzLnByZXBhcmVQbmcoKTtcbiAgICB0aGlzLnByZXBhcmVTdmcoKTtcbiAgfVxuXG4gIHByZXBhcmVQbmcoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiA4MDBcbiAgICB9O1xuXG4gICAgY29uc3QgeG1sID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyh0aGlzLmZpbmFsU1ZHKTtcbiAgICBjb25zdCBzdmc2NCA9IGJ0b2EoeG1sKTtcbiAgICBjb25zdCBiNjRTdGFydCA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCc7XG4gICAgY29uc3QgaW1hZ2U2NCA9IGI2NFN0YXJ0ICsgc3ZnNjQ7XG5cbiAgICBjb25zdCBpbWdPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdPYmouc3JjID0gaW1hZ2U2NDtcbiAgICBpbWdPYmoud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICBpbWdPYmouaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuXG4gICAgaW1nT2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZ09iaiwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIHRoaXMuY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICBsZXQgVVJMT2JqID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICB0aGlzLmxpbmtzLnBuZy5ocmVmID0gVVJMT2JqLmNyZWF0ZU9iamVjdFVSTChibG9iLCBpbWFnZS50eXBlLCAxKTtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuZG93bmxvYWQgPSBgc25vd2ZsYWtlLnBuZ2A7XG5cbiAgICAgICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIHByZXBhcmVTdmcoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB7XG4gICAgICBleHQ6ICdwbmcnLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgbmFtZTogJ3Nub3dmbGFrZSdcbiAgICB9O1xuXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt0aGlzLmZpbmFsU1ZHLm91dGVySFRNTF0sIHt0eXBlOiAnaW1hZ2Uvc3ZnK3htbCd9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIHRoaXMubGlua3Muc3ZnLmhyZWYgPSB1cmw7XG4gICAgdGhpcy5saW5rcy5zdmcuZG93bmxvYWQgPSBgc25vd2ZsYWtlLnN2Z2A7XG5cbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuICB9XG59XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICB9XG5cbiAgICAudmlzdWFsbHloaWRkZW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW46IC0xcHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNGRkYgaW5zZXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjVzO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgbWFyZ2luO1xuICAgIH1cblxuICAgIC5jb250cm9sOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjRkZGIGluc2V0LFxuICAgICAgICAwIDAgMCA0cHggcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzLS1jb2xsYXBzZWQgLmNvbnRyb2wge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtM3JlbTtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLS4yNXJlbTtcbiAgICAgIHJpZ2h0OiAtLjI1cmVtO1xuICAgICAgYm90dG9tOiAtLjI1cmVtO1xuICAgICAgbGVmdDogLS4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRkZGO1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA0cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OmZvY3VzOjphZnRlciB7XG4gICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjRkZGIGluc2V0O1xuICAgIH1cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZDpob3ZlciAuY29udHJvbC0tY3VycmVudDo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG4gICAgfVxuXG5cblxuICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgICAgIH1cbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzIGNvbnRyb2xzLS1jb2xsYXBzZWRcIj48L2Rpdj5cbmA7XG5cbmNvbnN0IHRoZW1lcyA9IFtcbiAge1xuICAgIG5hbWU6ICdTZWEnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwMjJFNDAnLFxuICAgICAgICAndGVhbCcsXG4gICAgICAgICd0dXJxdW9pc2UnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ05vcnRoIFNreScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzI1M0I1OScsXG4gICAgICAgICcjOTZEOUM2JyxcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEZWVwIE5pZ2h0JyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMDExNTI2JyxcbiAgICAgICAgJyMwMjJFNDAnLFxuICAgICAgICAnIzA3NEE1OScsXG4gICAgICAgICcjMjY2NTczJyxcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEZWVwIFNwYWNlJyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMDcxMjE4JyxcbiAgICAgICAgJyMxRTUyNzcnXG4gICAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU3RlZWxibHVlJyxcbiAgICBjb2xvcnM6IFsnc3RlZWxibHVlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZWFsJyxcbiAgICBjb2xvcnM6IFsndGVhbCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGFya3NsYXRlYmx1ZScsXG4gICAgY29sb3JzOiBbJ2RhcmtzbGF0ZWJsdWUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ09yYW5nZXJlZCcsXG4gICAgY29sb3JzOiBbJ29yYW5nZXJlZCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5kaWFucmVkJyxcbiAgICBjb2xvcnM6IFsnaW5kaWFucmVkJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGaXJlYnJpY2snLFxuICAgIGNvbG9yczogWydmaXJlYnJpY2snXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B1cnBsZScsXG4gICAgY29sb3JzOiBbJ3B1cnBsZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR3JheScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzMzMydcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCbGFjaycsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzAwMCdcbiAgICAgIF1cbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lU3dpdGNoZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJyk7XG4gICAgdGhpcy5jdXJyZW50VGhlbWVOdW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGVtZXMubGVuZ3RoKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBudWxsO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBjb2xsYXBzZWQ6ICdjb250cm9scy0tY29sbGFwc2VkJyxcbiAgICAgIGN1cnJlbnQ6ICdjb250cm9sLS1jdXJyZW50J1xuICAgIH1cblxuICAgIC8vIFNldCBjdXJyZW50IHRoZW1lIHRvIHBhZ2VcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcbiAgICB0aGlzLmFkZENvbnRyb2xzKCk7XG5cbiAgICB0aGlzLm9uQ29udHJvbENsaWNrID0gdGhpcy5vbkNvbnRyb2xDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoKSB7XG4gICAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGJnU3RyID0gdGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoZW1lLmNvbG9ycyk7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gJ2NvbnRyb2wnO1xuXG4gICAgICBpZihpbmRleCA9PT0gdGhpcy5jdXJyZW50VGhlbWVOdW0pIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgY29udHJvbC0tY3VycmVudCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRyb2xTdHIgPSBgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTmFtZX1cIlxuICAgICAgICB0aXRsZT1cIiR7dGhlbWUubmFtZX1cIlxuICAgICAgICBkYXRhLWluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQ6ICR7YmdTdHJ9XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPiR7dGhlbWUubmFtZX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPmA7XG5cbiAgICAgIHRoaXMuY29udHJvbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBjb250cm9sU3RyKTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNscy5jdXJyZW50fWApO1xuICAgIH0pXG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29udHJvbENsaWNrKTtcbiAgfVxuXG4gIG9uQ29udHJvbENsaWNrKGV2ZW50KSB7XG4gICAgaWYodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmNvbGxhcHNlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZVRoZW1lKCk7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmN1cnJlbnQpO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBldmVudC50YXJnZXQ7XG4gICAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZVRoZW1lKCkge1xuICAgIGNvbnN0IGNvbG9ycyA9IHRoZW1lc1t0aGlzLmN1cnJlbnRUaGVtZU51bV0uY29sb3JzO1xuICAgIHRoaXMuY29udHJvbHMuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yc1swXTtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZS10aGVtZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB0aGVtZTogY29sb3JzXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZVxuICAgIH0pKTtcbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=