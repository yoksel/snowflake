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

    path {
      transition: stroke var(--transition);
    }

    path:hover {
      stroke: aqua;
      cursor: pointer;
    }

    .slice-tip {
      font-size: 9px;
      opacity: .5;
      user-select: none;
    }

    .highlight {
      stroke: orangered;
    }
    .highlight:hover {
      stroke: crimson;
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
    .control:not(:disabled):hover {
      background: transparent;
      box-shadow:  0 0 0 2px #FFF inset;
      color: #FFF;
    }
    .control:disabled {
      cursor: not-allowed;
      opacity: .5;
      color: #777;
    }
  </style>

  <div class="content">
    <svg class="snowflake"
      viewBox="0 0 260 300"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="slice-shape" d="M130.1,300.5, 130.1,0, 0,75z"></path>

        <clipPath id="slice-clip-path">
          <use xlink:href="#slice-shape"/>
        </clipPath>
      </defs>

      <!-- Shape for measuring SVG scaling -->
      <rect id="measure-rect"
        fill="transparent"
        x="0" y="0"
        width="100" height="100"></rect>

      <text class="slice-tip"
          stroke="none"
          fill="currentColor"
          text-anchor="middle"
          y="62" x="30"
          transform="rotate(-30)">Paint here</text>

      <g id="slice" fill="none" stroke="currentColor">
        <!-- Contour -->
        <use xlink:href="#slice-shape"
          stroke-dasharray="5 2.5"
          stroke-width=".5"
          stroke-opacity=".5"/>
        <!-- Clipped slice content -->
        <g clip-path="url(#slice-clip-path)"
          id="target-group"
          stroke-linecap="round"
          stroke-width="5">
        </g>
      </g>

      <!-- Mirrored slice to show symmetry -->
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
    this.snowflake = this.elem.querySelector('.snowflake');
    this.targetGroup = this.elem.querySelector('#target-group');
    this.controlClear = this.elem.querySelector('.control--clear');
    this.controlClear.disabled = true;
    this.scale = this.getScale();
    this.clickedPath = null;
    this.pathsCounter = 0;
    this.selected = {};

    this.targetGroupMouseDown = this.targetGroupMouseDown.bind(this);
    this.clear = this.clear.bind(this);
    this.unselect = this.unselect.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  connectedCallback() {
    this.snowflake.addEventListener('mousedown', this.mouseDown);
    this.snowflake.addEventListener('mouseup', this.mouseUp);
    // Catch events from parent document
    this.addEventListener('remove-path', this.removePaths);
    // Catch events for path inside paths group
    this.targetGroup.addEventListener('mousedown', this.targetGroupMouseDown);

    this.controlClear.addEventListener('click', this.clear);
  }

  disconnectedCallback() {
    this.snowflake.removeEventListener('mousedown', this.mouseDown);
    this.snowflake.removeEventListener('mouseup', this.mouseUp);
    this.removeEventListener('remove-path', this.removePaths);
    this.targetGroup.removeEventListener('mousedown', this.targetGroupMouseDown);
    this.controlClear.removeEventListener('click', this.clear);
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

    this.snowflake.addEventListener('mousemove', this.mouseMove);
  }

  mouseMove(event) {
    // Move path end to pointer coordinates
    this.path.elem.setAttribute(
      'd',
      `M${this.path.start.x},${this.path.start.y} ${this.scaleCoord(event.offsetX)},${this.scaleCoord(event.offsetY)}`);

    this.clickedPath = null;
  }

  mouseUp(event) {
    // Prevent fire event on parent
    // after handling path by child
    if(!this.path) {
      return;
    }

    // Catch click to highlight path
    if(this.clickedPath) {
      this.mouseClickPath();

      // Remove latest path
      this.path.elem.remove();
      this.snowflake.removeEventListener('mousemove', this.mouseMove);
      return;
    }

    this.unselect();

    // Or fix new path
    this.path.elem.id = `path-${this.pathsCounter}`;
    this.pathsCounter++;

    const coords = {
      x: event.offsetX,
      y: event.offsetY
    }

    this.path.elem.setAttribute(
      'd',
      `M${this.path.start.x},${this.path.start.y} ${this.scaleCoord(coords.x)},${this.scaleCoord(coords.y)}`);

    this.snowflake.removeEventListener('mousemove', this.mouseMove);
    this.path = null;
    this.dispatchChange();
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
    const pathStr = this.getSinglePathStr();
    this.controlClear.disabled = !pathStr;

    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        groupContent: pathStr
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

    if(!singlePathCoords) {
      return '';
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
    .control:not(:disabled):hover {
      background: transparent;
      box-shadow:  0 0 0 2px #FFF inset;
      color: #FFF;
    }
    .control:disabled {
      cursor: not-allowed;
      opacity: .5;
      color: #777;
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
        <path id="slice-shape" d="M130.1,300.5, 130.1,0, 0,75z"></path>

        <clipPath id="slice-clip-path">
          <use xlink:href="#slice-shape"/>
        </clipPath>

        <symbol id="slice">
          <!-- Clipped slice content -->
          <g clip-path="url(#slice-clip-path)"
            id="target-group"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="5">
          </g>
        </symbol>

        <symbol id="pair-slices">
          <g transform="translate(170)">
            <use xlink:href="#slice"/>
            <!-- Mirrored slice to show symmetry -->
            <use xlink:href="#slice" transform="translate(260,0) scale(-1,1)"/>
          </g>
        </symbol>
      </defs>

      <!-- Visible snowflake -->
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
    this.controlGet.disabled = true;
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

  changeView(event) {
    this.controls.dataset.state = '';
    this.targetGroup.innerHTML = event.detail.groupContent;
    this.controlGet.disabled = !this.targetGroup.innerHTML;
  }

  changeTheme(event) {
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
      position: relative
      min-width: 3rem;
      height: 4rem;
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3VEO0FBQ0o7QUFDQTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRUEsbURBQW1ELCtEQUFlO0FBQ2xFLGlEQUFpRCw2REFBYTtBQUM5RCxpREFBaUQsNkRBQWE7QUFDOUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xERDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0JBQWtCLEdBQUcsa0JBQWtCLEdBQUcsK0JBQStCLEdBQUcsK0JBQStCOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsa0JBQWtCLEdBQUcsa0JBQWtCLEdBQUcsMEJBQTBCLEdBQUcsMEJBQTBCOztBQUUzRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsaUJBQWlCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwVEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCxzQkFBc0I7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCLGlCQUFpQixXQUFXO0FBQzVCLHNCQUFzQixNQUFNO0FBQzVCLDZCQUE2QixNQUFNO0FBQ25DLHlDQUF5QyxXQUFXO0FBQ3BEOztBQUVBO0FBQ0EsMERBQTBELGlCQUFpQjtBQUMzRSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnNvbGUuY2xlYXIoKTtcbmltcG9ydCBTbm93Rmxha2VFZGl0b3IgZnJvbSAnLi9saWIvU25vd0ZsYWtlRWRpdG9yLmpzJztcbmltcG9ydCBTbm93Rmxha2VWaWV3IGZyb20gJy4vbGliL1Nub3dGbGFrZVZpZXcuanMnO1xuaW1wb3J0IFRoZW1lU3dpdGNoZXIgZnJvbSAnLi9saWIvVGhlbWVTd2l0Y2hlci5qcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgY29uc3QgZWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dmbGFrZS1lZGl0b3InKTtcbiAgY29uc3QgdmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UtdmlldycpO1xuICBjb25zdCB0aGVtZVN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLXN3aXRjaGVyJyk7XG5cbiAgZWRpdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICB2aWV3LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UtdmlldycsIHtcbiAgICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH0pO1xuXG4gIHRoZW1lU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhY2tncm91bmRTdHIoZXZlbnQuZGV0YWlsLnRoZW1lKVxuXG4gICAgdmlldy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlLXRoZW1lJywge1xuICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBpZihldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSB7XG5cbiAgICAgIGVkaXRvci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVtb3ZlLXBhdGgnLCB7XG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICB9KSk7XG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldEJhY2tncm91bmRTdHIoY29sb3JzTGlzdCkge1xuICAgIGxldCBiZ1N0ciA9ICcnO1xuXG4gICAgaWYoY29sb3JzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJnU3RyID0gY29sb3JzTGlzdFswXVxuICAgICAgcmV0dXJuIGJnU3RyO1xuICAgIH1cblxuICAgIGJnU3RyID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3JzTGlzdC5qb2luKCcsJyl9KWA7XG4gICAgcmV0dXJuIGJnU3RyO1xuICB9XG5cbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc25vd2ZsYWtlLWVkaXRvcicsIFNub3dGbGFrZUVkaXRvcik7XG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Nub3dmbGFrZS12aWV3JywgU25vd0ZsYWtlVmlldyk7XG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RoZW1lLXN3aXRjaGVyJywgVGhlbWVTd2l0Y2hlcik7XG59KSgpO1xuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogNTIwcHg7XG5cbiAgICAgIC0tdHJhbnNpdGlvbjogLjI1cztcbiAgICB9XG5cbiAgICA6aG9zdDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIDpob3N0IHN2ZyB7XG4gICAgICB3aWR0aDogNTIwcHg7XG4gICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIH1cblxuICAgIHBhdGgge1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlIHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIHBhdGg6aG92ZXIge1xuICAgICAgc3Ryb2tlOiBhcXVhO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5zbGljZS10aXAge1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgIC5oaWdobGlnaHQge1xuICAgICAgc3Ryb2tlOiBvcmFuZ2VyZWQ7XG4gICAgfVxuICAgIC5oaWdobGlnaHQ6aG92ZXIge1xuICAgICAgc3Ryb2tlOiBjcmltc29uO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgICAuY29udHJvbCB7XG4gICAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgICBmb250OiBpbmhlcml0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHRyYW5zcGFyZW50IGluc2V0O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICAgIC5jb250cm9sOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogIDAgMCAwIDJweCAjRkZGIGluc2V0O1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIC5jb250cm9sOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGNvbG9yOiAjNzc3O1xuICAgIH1cbiAgPC9zdHlsZT5cblxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgIDxzdmcgY2xhc3M9XCJzbm93Zmxha2VcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNjAgMzAwXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHBhdGggaWQ9XCJzbGljZS1zaGFwZVwiIGQ9XCJNMTMwLjEsMzAwLjUsIDEzMC4xLDAsIDAsNzV6XCI+PC9wYXRoPlxuXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cInNsaWNlLWNsaXAtcGF0aFwiPlxuICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNzbGljZS1zaGFwZVwiLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cblxuICAgICAgPCEtLSBTaGFwZSBmb3IgbWVhc3VyaW5nIFNWRyBzY2FsaW5nIC0tPlxuICAgICAgPHJlY3QgaWQ9XCJtZWFzdXJlLXJlY3RcIlxuICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICB4PVwiMFwiIHk9XCIwXCJcbiAgICAgICAgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj48L3JlY3Q+XG5cbiAgICAgIDx0ZXh0IGNsYXNzPVwic2xpY2UtdGlwXCJcbiAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgeT1cIjYyXCIgeD1cIjMwXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoLTMwKVwiPlBhaW50IGhlcmU8L3RleHQ+XG5cbiAgICAgIDxnIGlkPVwic2xpY2VcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICA8IS0tIENvbnRvdXIgLS0+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNzbGljZS1zaGFwZVwiXG4gICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheT1cIjUgMi41XCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIuNVwiXG4gICAgICAgICAgc3Ryb2tlLW9wYWNpdHk9XCIuNVwiLz5cbiAgICAgICAgPCEtLSBDbGlwcGVkIHNsaWNlIGNvbnRlbnQgLS0+XG4gICAgICAgIDxnIGNsaXAtcGF0aD1cInVybCgjc2xpY2UtY2xpcC1wYXRoKVwiXG4gICAgICAgICAgaWQ9XCJ0YXJnZXQtZ3JvdXBcIlxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjVcIj5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuXG4gICAgICA8IS0tIE1pcnJvcmVkIHNsaWNlIHRvIHNob3cgc3ltbWV0cnkgLS0+XG4gICAgICA8dXNlXG4gICAgICAgIHhsaW5rOmhyZWY9XCIjc2xpY2VcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYwLDApIHNjYWxlKC0xLDEpXCJcbiAgICAgICAgc3R5bGU9XCJvcGFjaXR5Oi4yNVwiXG4gICAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1jbGVhclwiPkNsZWFyPC9idXR0b24+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0ZsYWtlRWRpdG9yIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLnNub3dmbGFrZSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuc25vd2ZsYWtlJyk7XG4gICAgdGhpcy50YXJnZXRHcm91cCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0LWdyb3VwJyk7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWNsZWFyJyk7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gICAgdGhpcy5wYXRoc0NvdW50ZXIgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fTtcblxuICAgIHRoaXMudGFyZ2V0R3JvdXBNb3VzZURvd24gPSB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGVhciA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVuc2VsZWN0ID0gdGhpcy51bnNlbGVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VEb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlVXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlTW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNub3dmbGFrZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bik7XG4gICAgdGhpcy5zbm93Zmxha2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcCk7XG4gICAgLy8gQ2F0Y2ggZXZlbnRzIGZyb20gcGFyZW50IGRvY3VtZW50XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdyZW1vdmUtcGF0aCcsIHRoaXMucmVtb3ZlUGF0aHMpO1xuICAgIC8vIENhdGNoIGV2ZW50cyBmb3IgcGF0aCBpbnNpZGUgcGF0aHMgZ3JvdXBcbiAgICB0aGlzLnRhcmdldEdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMudGFyZ2V0R3JvdXBNb3VzZURvd24pO1xuXG4gICAgdGhpcy5jb250cm9sQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuc25vd2ZsYWtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICB0aGlzLnNub3dmbGFrZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlbW92ZS1wYXRoJywgdGhpcy5yZW1vdmVQYXRocyk7XG4gICAgdGhpcy50YXJnZXRHcm91cC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXIpO1xuICB9XG5cbiAgbW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gU3RhcnQgZHJhdyBsaW5lLCBjcmVhdGUgcGF0aFxuICAgIHRoaXMucGF0aCA9IHtcbiAgICAgIGVsZW06IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpLFxuICAgICAgc3RhcnQ6IHtcbiAgICAgICAgeDogdGhpcy5zY2FsZUNvb3JkKGV2ZW50Lm9mZnNldFgpLFxuICAgICAgICB5OiB0aGlzLnNjYWxlQ29vcmQoZXZlbnQub2Zmc2V0WSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy50YXJnZXRHcm91cC5hcHBlbmQodGhpcy5wYXRoLmVsZW0pO1xuXG4gICAgdGhpcy5zbm93Zmxha2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICB9XG5cbiAgbW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgLy8gTW92ZSBwYXRoIGVuZCB0byBwb2ludGVyIGNvb3JkaW5hdGVzXG4gICAgdGhpcy5wYXRoLmVsZW0uc2V0QXR0cmlidXRlKFxuICAgICAgJ2QnLFxuICAgICAgYE0ke3RoaXMucGF0aC5zdGFydC54fSwke3RoaXMucGF0aC5zdGFydC55fSAke3RoaXMuc2NhbGVDb29yZChldmVudC5vZmZzZXRYKX0sJHt0aGlzLnNjYWxlQ29vcmQoZXZlbnQub2Zmc2V0WSl9YCk7XG5cbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgfVxuXG4gIG1vdXNlVXAoZXZlbnQpIHtcbiAgICAvLyBQcmV2ZW50IGZpcmUgZXZlbnQgb24gcGFyZW50XG4gICAgLy8gYWZ0ZXIgaGFuZGxpbmcgcGF0aCBieSBjaGlsZFxuICAgIGlmKCF0aGlzLnBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYXRjaCBjbGljayB0byBoaWdobGlnaHQgcGF0aFxuICAgIGlmKHRoaXMuY2xpY2tlZFBhdGgpIHtcbiAgICAgIHRoaXMubW91c2VDbGlja1BhdGgoKTtcblxuICAgICAgLy8gUmVtb3ZlIGxhdGVzdCBwYXRoXG4gICAgICB0aGlzLnBhdGguZWxlbS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuc25vd2ZsYWtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVuc2VsZWN0KCk7XG5cbiAgICAvLyBPciBmaXggbmV3IHBhdGhcbiAgICB0aGlzLnBhdGguZWxlbS5pZCA9IGBwYXRoLSR7dGhpcy5wYXRoc0NvdW50ZXJ9YDtcbiAgICB0aGlzLnBhdGhzQ291bnRlcisrO1xuXG4gICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgeDogZXZlbnQub2Zmc2V0WCxcbiAgICAgIHk6IGV2ZW50Lm9mZnNldFlcbiAgICB9XG5cbiAgICB0aGlzLnBhdGguZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICBgTSR7dGhpcy5wYXRoLnN0YXJ0Lnh9LCR7dGhpcy5wYXRoLnN0YXJ0Lnl9ICR7dGhpcy5zY2FsZUNvb3JkKGNvb3Jkcy54KX0sJHt0aGlzLnNjYWxlQ29vcmQoY29vcmRzLnkpfWApO1xuXG4gICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICB9XG5cbiAgbW91c2VDbGlja1BhdGgoKSB7XG4gICAgY29uc3QgcGF0aElkID0gdGhpcy5jbGlja2VkUGF0aC5pZDtcbiAgICAgIHRoaXMuY2xpY2tlZFBhdGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlnaGxpZ2h0Jyk7XG5cbiAgICAgIGlmKHRoaXMuY2xpY2tlZFBhdGguY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHQnKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW3BhdGhJZF0gPSB0aGlzLmNsaWNrZWRQYXRoO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW3BhdGhJZF07XG4gICAgfVxuXG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZSgpIHtcbiAgICBjb25zdCBwYXRoU3RyID0gdGhpcy5nZXRTaW5nbGVQYXRoU3RyKCk7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIuZGlzYWJsZWQgPSAhcGF0aFN0cjtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBncm91cENvbnRlbnQ6IHBhdGhTdHJcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIGdldFNpbmdsZVBhdGhTdHIoKSB7XG4gICAgdGhpcy50YXJnZXRHcm91cC5jaGlsZHJlbi5tYXAgPSBbXS5tYXA7XG4gICAgbGV0IHNpbmdsZVBhdGhDb29yZHMgPSAnJztcblxuICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLnRhcmdldEdyb3VwLmNoaWxkcmVuKSB7XG4gICAgICBzaW5nbGVQYXRoQ29vcmRzICs9IGAgJHtpdGVtLmdldEF0dHJpYnV0ZSgnZCcpfWA7XG4gICAgfVxuXG4gICAgaWYoIXNpbmdsZVBhdGhDb29yZHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gYDxwYXRoIGQ9XCIke3NpbmdsZVBhdGhDb29yZHN9XCIvPmA7XG4gIH1cblxuICB0YXJnZXRHcm91cE1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBldmVudC50YXJnZXQ7XG4gIH1cblxuICB1bnNlbGVjdCgpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVBhdGhzKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW2tleV0ucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnRhcmdldEdyb3VwLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fTtcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gIH1cblxuICAvLyBSZXR1cm4gc2NhbGUgdmFsdWUgaWYgc3ZnIHdhcyByZXNpemVkXG4gIGdldFNjYWxlKCkge1xuICAgIGNvbnN0IG1lYXN1cmVQYXRoID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCdtZWFzdXJlLXJlY3QnKTtcbiAgICBjb25zdCB3aWR0aCA9IG1lYXN1cmVQYXRoLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICBjb25zdCByZWN0ID0gbWVhc3VyZVBhdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICByZXR1cm4gd2lkdGggLyByZWN0LndpZHRoO1xuICB9XG5cbiAgc2NhbGVDb29yZChjb29yZCkge1xuICAgIHJldHVybiBjb29yZCAqIHRoaXMuc2NhbGU7XG4gIH1cbn1cbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAtLXRyYW5zaXRpb246IC4yNXM7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIH1cblxuICAgIDpob3N0IHN2ZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICA6aG9zdCAuY29udG91ciB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgc3Ryb2tlLW9wYWNpdHk6IC41O1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLW9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuICAgIDpob3N0IC5jb250b3VyLS1oaWRkZW4ge1xuICAgICAgc3Ryb2tlLW9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgIC5jb250cm9sIHtcbiAgICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG4gICAgLmNvbnRyb2w6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4ICNGRkYgaW5zZXQ7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgLmNvbnRyb2w6ZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzX19kb3dubG9hZHMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwibG9hZGluZ1wiXSAuY29udHJvbC0tZ2V0LFxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2wtLWdldCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cImxvYWRpbmdcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMsXG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbHNfX2Rvd25sb2FkcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5jb250cm9sICsgLmNvbnRyb2wge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzX19kb3dubG9hZHMgLmNvbnRyb2wge1xuICAgICAgb3BhY2l0eTogLjI7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPHN2ZyBjbGFzcz1cImNvbnRvdXJcIiB2aWV3Qm94PVwiMCAwIDYwMCA2MDBcIiBoaWRkZW4+XG4gICAgICA8Y2lyY2xlIHI9XCIzMDBcIiBjeD1cIjMwMFwiIGN5PVwiMzAwXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheT1cIjEwIDVcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIi8+XG4gICAgPC9zdmc+XG5cbiAgICA8c3ZnIGNsYXNzPVwic25vd2ZsYWtlXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjAwIDYwMFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxwYXRoIGlkPVwic2xpY2Utc2hhcGVcIiBkPVwiTTEzMC4xLDMwMC41LCAxMzAuMSwwLCAwLDc1elwiPjwvcGF0aD5cblxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJzbGljZS1jbGlwLXBhdGhcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2Utc2hhcGVcIi8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG5cbiAgICAgICAgPHN5bWJvbCBpZD1cInNsaWNlXCI+XG4gICAgICAgICAgPCEtLSBDbGlwcGVkIHNsaWNlIGNvbnRlbnQgLS0+XG4gICAgICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNzbGljZS1jbGlwLXBhdGgpXCJcbiAgICAgICAgICAgIGlkPVwidGFyZ2V0LWdyb3VwXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjVcIj5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ltYm9sPlxuXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJwYWlyLXNsaWNlc1wiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNzApXCI+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2VcIi8+XG4gICAgICAgICAgICA8IS0tIE1pcnJvcmVkIHNsaWNlIHRvIHNob3cgc3ltbWV0cnkgLS0+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2VcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYwLDApIHNjYWxlKC0xLDEpXCIvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zeW1ib2w+XG4gICAgICA8L2RlZnM+XG5cbiAgICAgIDwhLS0gVmlzaWJsZSBzbm93Zmxha2UgLS0+XG4gICAgICA8Zz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoOTAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDIxMCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwLCAzMDAsIDMwMClcIi8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWdldFwiPkdldCBzbm93Zmxha2U8L2J1dHRvbj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fZG93bmxvYWRzXCI+XG4gICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWRvd25sb2FkLXN2Z1wiPkRvd25sb2FkIFNWRzwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1kb3dubG9hZC1wbmdcIj5Eb3dubG9hZCBQTkc8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0ZsYWtlVmlldyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy50YXJnZXRHcm91cCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0LWdyb3VwJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHRoaXMuc25vd2ZsYWtlID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UnKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgIHRoaXMuY29udHJvbEdldCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZ2V0Jyk7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxpbmtzID17XG4gICAgICBwbmc6IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZG93bmxvYWQtcG5nJyksXG4gICAgICBzdmc6IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZG93bmxvYWQtc3ZnJylcbiAgICB9O1xuICAgIHRoaXMudGhlbWUgPSBbJyMyNTNCNTknLCAndHVycXVvaXNlJ107XG5cbiAgICB0aGlzLm91dHB1dFN0eWxlID0gdGhpcy5nZXRTdHlsZVN0cigpO1xuICAgIHRoaXMuY2hhbmdlVGhlbWUgPSB0aGlzLmNoYW5nZVRoZW1lLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS12aWV3JywgdGhpcy5jaGFuZ2VWaWV3KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsIHRoaXMuY2hhbmdlVGhlbWUpO1xuXG4gICAgdGhpcy5jb250cm9sR2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnbG9hZGluZyc7XG4gICAgICB0aGlzLmRvd25sb2FkSW1nKCk7XG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVZpZXcoZXZlbnQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICB0aGlzLnRhcmdldEdyb3VwLmlubmVySFRNTCA9IGV2ZW50LmRldGFpbC5ncm91cENvbnRlbnQ7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gIXRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MO1xuICB9XG5cbiAgY2hhbmdlVGhlbWUoZXZlbnQpIHtcbiAgICBpZihldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLnRoZW1lKSB7XG4gICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICAgIHRoaXMudGhlbWUgPSBldmVudC5kZXRhaWwudGhlbWU7XG4gICAgICB0aGlzLm91dHB1dFN0eWxlID0gdGhpcy5nZXRTdHlsZVN0cigpO1xuICAgIH1cbiAgfVxuXG4gIGdldEJhY2tncm91bmRTdHIoY29sb3JzTGlzdCkge1xuICAgIGxldCBiZ1N0ciA9ICcnO1xuXG4gICAgaWYoY29sb3JzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJnU3RyID0gY29sb3JzTGlzdFswXVxuICAgICAgcmV0dXJuIGJnU3RyO1xuICAgIH1cblxuICAgIGJnU3RyID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3JzTGlzdC5qb2luKCcsJyl9KWA7XG4gICAgcmV0dXJuIGJnU3RyO1xuICB9XG5cbiAgZ2V0U3R5bGVTdHIoKSB7XG4gICAgcmV0dXJuIGBiYWNrZ3JvdW5kOiAke3RoaXMuZ2V0QmFja2dyb3VuZFN0cih0aGlzLnRoZW1lKX07IGNvbG9yOiB3aGl0ZWA7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZS12aWV3JywgdGhpcy5fb25LZXlVcCk7XG4gIH1cblxuICBkb3dubG9hZEltZygpIHtcbiAgICB0aGlzLmZpbmFsU1ZHID0gdGhpcy5zbm93Zmxha2UuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRoaXMuZmluYWxTVkcuc3R5bGUgPSB0aGlzLm91dHB1dFN0eWxlO1xuXG4gICAgdGhpcy5wcmVwYXJlUG5nKCk7XG4gICAgdGhpcy5wcmVwYXJlU3ZnKCk7XG4gIH1cblxuICBwcmVwYXJlUG5nKCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgd2lkdGg6IDgwMCxcbiAgICAgIGhlaWdodDogODAwXG4gICAgfTtcblxuICAgIGNvbnN0IHhtbCA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcodGhpcy5maW5hbFNWRyk7XG4gICAgY29uc3Qgc3ZnNjQgPSBidG9hKHhtbCk7XG4gICAgY29uc3QgYjY0U3RhcnQgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnO1xuICAgIGNvbnN0IGltYWdlNjQgPSBiNjRTdGFydCArIHN2ZzY0O1xuXG4gICAgY29uc3QgaW1nT2JqID0gbmV3IEltYWdlKCk7XG4gICAgaW1nT2JqLnNyYyA9IGltYWdlNjQ7XG4gICAgaW1nT2JqLndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgaW1nT2JqLmhlaWdodCA9IGltYWdlLmhlaWdodDtcblxuICAgIGltZ09iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWdPYmosIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgbGV0IFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuaHJlZiA9IFVSTE9iai5jcmVhdGVPYmplY3RVUkwoYmxvYiwgaW1hZ2UudHlwZSwgMSk7XG4gICAgICAgIHRoaXMubGlua3MucG5nLmRvd25sb2FkID0gYHNub3dmbGFrZS5wbmdgO1xuXG4gICAgICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgICB9KTtcbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICBwcmVwYXJlU3ZnKCkge1xuICAgIGNvbnN0IGltYWdlID0ge1xuICAgICAgZXh0OiAncG5nJyxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIG5hbWU6ICdzbm93Zmxha2UnXG4gICAgfTtcblxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbdGhpcy5maW5hbFNWRy5vdXRlckhUTUxdLCB7dHlwZTogJ2ltYWdlL3N2Zyt4bWwnfSk7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICB0aGlzLmxpbmtzLnN2Zy5ocmVmID0gdXJsO1xuICAgIHRoaXMubGlua3Muc3ZnLmRvd25sb2FkID0gYHNub3dmbGFrZS5zdmdgO1xuXG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJ3JlYWR5JztcbiAgfVxufVxuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogNHJlbTtcbiAgICB9XG5cbiAgICAudmlzdWFsbHloaWRkZW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW46IC0xcHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNGRkYgaW5zZXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjVzO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgbWFyZ2luO1xuICAgIH1cblxuICAgIC5jb250cm9sOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjRkZGIGluc2V0LFxuICAgICAgICAwIDAgMCA0cHggcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzLS1jb2xsYXBzZWQgLmNvbnRyb2wge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtM3JlbTtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLS4yNXJlbTtcbiAgICAgIHJpZ2h0OiAtLjI1cmVtO1xuICAgICAgYm90dG9tOiAtLjI1cmVtO1xuICAgICAgbGVmdDogLS4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRkZGO1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA0cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OmZvY3VzOjphZnRlciB7XG4gICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjRkZGIGluc2V0O1xuICAgIH1cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZDpob3ZlciAuY29udHJvbC0tY3VycmVudDo6YWZ0ZXIge1xuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG4gICAgfVxuXG5cblxuICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgICAgIH1cbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzIGNvbnRyb2xzLS1jb2xsYXBzZWRcIj48L2Rpdj5cbmA7XG5cbmNvbnN0IHRoZW1lcyA9IFtcbiAge1xuICAgIG5hbWU6ICdTZWEnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwMjJFNDAnLFxuICAgICAgICAndGVhbCcsXG4gICAgICAgICd0dXJxdW9pc2UnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ05vcnRoIFNreScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzI1M0I1OScsXG4gICAgICAgICcjOTZEOUM2JyxcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEZWVwIE5pZ2h0JyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMDExNTI2JyxcbiAgICAgICAgJyMwMjJFNDAnLFxuICAgICAgICAnIzA3NEE1OScsXG4gICAgICAgICcjMjY2NTczJyxcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEZWVwIFNwYWNlJyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMDcxMjE4JyxcbiAgICAgICAgJyMxRTUyNzcnXG4gICAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU3RlZWxibHVlJyxcbiAgICBjb2xvcnM6IFsnc3RlZWxibHVlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZWFsJyxcbiAgICBjb2xvcnM6IFsndGVhbCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGFya3NsYXRlYmx1ZScsXG4gICAgY29sb3JzOiBbJ2RhcmtzbGF0ZWJsdWUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ09yYW5nZXJlZCcsXG4gICAgY29sb3JzOiBbJ29yYW5nZXJlZCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5kaWFucmVkJyxcbiAgICBjb2xvcnM6IFsnaW5kaWFucmVkJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGaXJlYnJpY2snLFxuICAgIGNvbG9yczogWydmaXJlYnJpY2snXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B1cnBsZScsXG4gICAgY29sb3JzOiBbJ3B1cnBsZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR3JheScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzMzMydcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCbGFjaycsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzAwMCdcbiAgICAgIF1cbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lU3dpdGNoZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJyk7XG4gICAgdGhpcy5jdXJyZW50VGhlbWVOdW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGVtZXMubGVuZ3RoKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBudWxsO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBjb2xsYXBzZWQ6ICdjb250cm9scy0tY29sbGFwc2VkJyxcbiAgICAgIGN1cnJlbnQ6ICdjb250cm9sLS1jdXJyZW50J1xuICAgIH1cblxuICAgIC8vIFNldCBjdXJyZW50IHRoZW1lIHRvIHBhZ2VcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcbiAgICB0aGlzLmFkZENvbnRyb2xzKCk7XG5cbiAgICB0aGlzLm9uQ29udHJvbENsaWNrID0gdGhpcy5vbkNvbnRyb2xDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoKSB7XG4gICAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGJnU3RyID0gdGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoZW1lLmNvbG9ycyk7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gJ2NvbnRyb2wnO1xuXG4gICAgICBpZihpbmRleCA9PT0gdGhpcy5jdXJyZW50VGhlbWVOdW0pIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgY29udHJvbC0tY3VycmVudCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRyb2xTdHIgPSBgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTmFtZX1cIlxuICAgICAgICB0aXRsZT1cIiR7dGhlbWUubmFtZX1cIlxuICAgICAgICBkYXRhLWluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQ6ICR7YmdTdHJ9XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPiR7dGhlbWUubmFtZX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPmA7XG5cbiAgICAgIHRoaXMuY29udHJvbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBjb250cm9sU3RyKTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNscy5jdXJyZW50fWApO1xuICAgIH0pXG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29udHJvbENsaWNrKTtcbiAgfVxuXG4gIG9uQ29udHJvbENsaWNrKGV2ZW50KSB7XG4gICAgaWYodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmNvbGxhcHNlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZVRoZW1lKCk7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmN1cnJlbnQpO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBldmVudC50YXJnZXQ7XG4gICAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZVRoZW1lKCkge1xuICAgIGNvbnN0IGNvbG9ycyA9IHRoZW1lc1t0aGlzLmN1cnJlbnRUaGVtZU51bV0uY29sb3JzO1xuICAgIHRoaXMuY29udHJvbHMuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yc1swXTtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZS10aGVtZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB0aGVtZTogY29sb3JzXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZVxuICAgIH0pKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==