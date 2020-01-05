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
      display: flex;
      align-items: center;

    }

    svg {
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
    <svg class="contour" viewBox="-20 0 640 600">
      <circle r="300" cx="300" cy="300"
        stroke="currentColor"
        stroke-dasharray="10 5"
        stroke-width="1"
        fill="none"/>
    </svg>

    <svg class="snowflake"
      viewBox="-20 0 640 600"
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
    this.links = {
      png: this.elem.querySelector('.control--download-png'),
      svg: this.elem.querySelector('.control--download-svg')
    };
    this.theme = [
      '#253B59',
      'turquoise'
    ];

    this.outputStyle = this.getStyleStr();

    this.changeTheme = this.changeTheme.bind(this);
    this.prepareImages = this.prepareImages.bind(this);

    this.finalSizes = {
      width: 800,
      height: 800
    };
  }

  connectedCallback() {
    this.addEventListener('change-view', this.changeView);
    this.addEventListener('change-theme', this.changeTheme);
    this.controlGet.addEventListener('click', this.prepareImages);
  }

  disconnectedCallback() {
    this.removeEventListener('change-view', this.changeView);
    this.removeEventListener('change-theme', this.changeTheme);
    this.controlGet.removeEventListener('click', this.prepareImages);
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

  prepareImages() {
    this.controls.dataset.state = 'loading';
    this.finalSVG = this.snowflake.cloneNode(true);
    this.finalSVG.style = this.outputStyle;

    this.preparePng();
    this.prepareSvg();
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

  preparePng() {
    const xml = new XMLSerializer().serializeToString(this.finalSVG);
    const svg64 = btoa(xml);
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;

    const imgObj = new Image();
    imgObj.src = image64;
    imgObj.width = this.finalSizes.width;
    imgObj.height = this.finalSizes.height;

    imgObj.addEventListener('load', () => {
      this.canvas.width = this.finalSizes.width;
      this.canvas.height = this.finalSizes.height;
      this.ctx.drawImage(imgObj, 0, 0, this.canvas.width, this.canvas.height);

      this.canvas.toBlob((blob) => {
        let URLObj = window.URL || window.webkitURL;
        this.links.png.href = URLObj.createObjectURL(blob, 'png', 1);
        this.links.png.download = 'snowflake.png';

        this.controls.dataset.state = 'ready';
      });
    }, false);
  }

  prepareSvg() {
    const blob = new Blob([this.finalSVG.outerHTML], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(blob);
    this.links.svg.href = url;
    this.links.svg.download = 'snowflake.svg';

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
    colors: ['#333']
  },
  {
    name: 'Black',
    colors: ['#000']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNKO0FBQ0E7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVBLG1EQUFtRCwrREFBZTtBQUNsRSxpREFBaUQsNkRBQWE7QUFDOUQsaURBQWlELDZEQUFhO0FBQzlELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqREQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtCQUFrQixHQUFHLGtCQUFrQixHQUFHLCtCQUErQixHQUFHLCtCQUErQjs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGtCQUFrQixHQUFHLGtCQUFrQixHQUFHLDBCQUEwQixHQUFHLDBCQUEwQjs7QUFFM0c7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGlCQUFpQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcFRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0Esc0RBQXNELHNCQUFzQjtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcFJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0IsaUJBQWlCLFdBQVc7QUFDNUIsc0JBQXNCLE1BQU07QUFDNUIsNkJBQTZCLE1BQU07QUFDbkMseUNBQXlDLFdBQVc7QUFDcEQ7O0FBRUE7QUFDQSwwREFBMEQsaUJBQWlCO0FBQzNFLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNub3dGbGFrZUVkaXRvciBmcm9tICcuL2xpYi9Tbm93Rmxha2VFZGl0b3IuanMnO1xuaW1wb3J0IFNub3dGbGFrZVZpZXcgZnJvbSAnLi9saWIvU25vd0ZsYWtlVmlldy5qcyc7XG5pbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tICcuL2xpYi9UaGVtZVN3aXRjaGVyLmpzJztcblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBlZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd2ZsYWtlLWVkaXRvcicpO1xuICBjb25zdCB2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNub3dmbGFrZS12aWV3Jyk7XG4gIGNvbnN0IHRoZW1lU3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtc3dpdGNoZXInKTtcblxuICBlZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHZpZXcuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZS12aWV3Jywge1xuICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgdGhlbWVTd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0QmFja2dyb3VuZFN0cihldmVudC5kZXRhaWwudGhlbWUpXG5cbiAgICB2aWV3LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UtdGhlbWUnLCB7XG4gICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9KTtcblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDggfHwgZXZlbnQua2V5Q29kZSA9PT0gNDYpIHtcblxuICAgICAgZWRpdG9yLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZW1vdmUtcGF0aCcsIHtcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbm93Zmxha2UtZWRpdG9yJywgU25vd0ZsYWtlRWRpdG9yKTtcbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc25vd2ZsYWtlLXZpZXcnLCBTbm93Rmxha2VWaWV3KTtcbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndGhlbWUtc3dpdGNoZXInLCBUaGVtZVN3aXRjaGVyKTtcbn0pKCk7XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA1MjBweDtcblxuICAgICAgLS10cmFuc2l0aW9uOiAuMjVzO1xuICAgIH1cblxuICAgIDpob3N0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgOmhvc3Qgc3ZnIHtcbiAgICAgIHdpZHRoOiA1MjBweDtcbiAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgfVxuXG4gICAgcGF0aCB7XG4gICAgICB0cmFuc2l0aW9uOiBzdHJva2UgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgcGF0aDpob3ZlciB7XG4gICAgICBzdHJva2U6IGFxdWE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnNsaWNlLXRpcCB7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhpZ2hsaWdodCB7XG4gICAgICBzdHJva2U6IG9yYW5nZXJlZDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodDpob3ZlciB7XG4gICAgICBzdHJva2U6IGNyaW1zb247XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgIC5jb250cm9sIHtcbiAgICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdHJhbnNwYXJlbnQgaW5zZXQ7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG4gICAgLmNvbnRyb2w6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4ICNGRkYgaW5zZXQ7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgLmNvbnRyb2w6ZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPHN2ZyBjbGFzcz1cInNub3dmbGFrZVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2MCAzMDBcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8cGF0aCBpZD1cInNsaWNlLXNoYXBlXCIgZD1cIk0xMzAuMSwzMDAuNSwgMTMwLjEsMCwgMCw3NXpcIj48L3BhdGg+XG5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwic2xpY2UtY2xpcC1wYXRoXCI+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlLXNoYXBlXCIvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuXG4gICAgICA8IS0tIFNoYXBlIGZvciBtZWFzdXJpbmcgU1ZHIHNjYWxpbmcgLS0+XG4gICAgICA8cmVjdCBpZD1cIm1lYXN1cmUtcmVjdFwiXG4gICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIHg9XCIwXCIgeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPjwvcmVjdD5cblxuICAgICAgPHRleHQgY2xhc3M9XCJzbGljZS10aXBcIlxuICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICB5PVwiNjJcIiB4PVwiMzBcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzApXCI+UGFpbnQgaGVyZTwvdGV4dD5cblxuICAgICAgPGcgaWQ9XCJzbGljZVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgIDwhLS0gQ29udG91ciAtLT5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlLXNoYXBlXCJcbiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiNSAyLjVcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIi41XCJcbiAgICAgICAgICBzdHJva2Utb3BhY2l0eT1cIi41XCIvPlxuICAgICAgICA8IS0tIENsaXBwZWQgc2xpY2UgY29udGVudCAtLT5cbiAgICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNzbGljZS1jbGlwLXBhdGgpXCJcbiAgICAgICAgICBpZD1cInRhcmdldC1ncm91cFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNVwiPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG5cbiAgICAgIDwhLS0gTWlycm9yZWQgc2xpY2UgdG8gc2hvdyBzeW1tZXRyeSAtLT5cbiAgICAgIDx1c2VcbiAgICAgICAgeGxpbms6aHJlZj1cIiNzbGljZVwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNjAsMCkgc2NhbGUoLTEsMSlcIlxuICAgICAgICBzdHlsZT1cIm9wYWNpdHk6LjI1XCJcbiAgICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWNsZWFyXCI+Q2xlYXI8L2J1dHRvbj5cbiAgPC9kaXY+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbm93Rmxha2VFZGl0b3IgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuc25vd2ZsYWtlID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UnKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJyN0YXJnZXQtZ3JvdXAnKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhciA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tY2xlYXInKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhci5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5zY2FsZSA9IHRoaXMuZ2V0U2NhbGUoKTtcbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgICB0aGlzLnBhdGhzQ291bnRlciA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9O1xuXG4gICAgdGhpcy50YXJnZXRHcm91cE1vdXNlRG93biA9IHRoaXMudGFyZ2V0R3JvdXBNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsZWFyID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudW5zZWxlY3QgPSB0aGlzLnVuc2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VVcCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VNb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuc25vd2ZsYWtlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICB0aGlzLnNub3dmbGFrZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwKTtcbiAgICAvLyBDYXRjaCBldmVudHMgZnJvbSBwYXJlbnQgZG9jdW1lbnRcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3JlbW92ZS1wYXRoJywgdGhpcy5yZW1vdmVQYXRocyk7XG4gICAgLy8gQ2F0Y2ggZXZlbnRzIGZvciBwYXRoIGluc2lkZSBwYXRocyBncm91cFxuICAgIHRoaXMudGFyZ2V0R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy50YXJnZXRHcm91cE1vdXNlRG93bik7XG5cbiAgICB0aGlzLmNvbnRyb2xDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXIpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd24pO1xuICAgIHRoaXMuc25vd2ZsYWtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVtb3ZlLXBhdGgnLCB0aGlzLnJlbW92ZVBhdGhzKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMudGFyZ2V0R3JvdXBNb3VzZURvd24pO1xuICAgIHRoaXMuY29udHJvbENsZWFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhcik7XG4gIH1cblxuICBtb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBTdGFydCBkcmF3IGxpbmUsIGNyZWF0ZSBwYXRoXG4gICAgdGhpcy5wYXRoID0ge1xuICAgICAgZWxlbTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyksXG4gICAgICBzdGFydDoge1xuICAgICAgICB4OiB0aGlzLnNjYWxlQ29vcmQoZXZlbnQub2Zmc2V0WCksXG4gICAgICAgIHk6IHRoaXMuc2NhbGVDb29yZChldmVudC5vZmZzZXRZKVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnRhcmdldEdyb3VwLmFwcGVuZCh0aGlzLnBhdGguZWxlbSk7XG5cbiAgICB0aGlzLnNub3dmbGFrZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gIH1cblxuICBtb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAvLyBNb3ZlIHBhdGggZW5kIHRvIHBvaW50ZXIgY29vcmRpbmF0ZXNcbiAgICB0aGlzLnBhdGguZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICBgTSR7dGhpcy5wYXRoLnN0YXJ0Lnh9LCR7dGhpcy5wYXRoLnN0YXJ0Lnl9ICR7dGhpcy5zY2FsZUNvb3JkKGV2ZW50Lm9mZnNldFgpfSwke3RoaXMuc2NhbGVDb29yZChldmVudC5vZmZzZXRZKX1gKTtcblxuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcChldmVudCkge1xuICAgIC8vIFByZXZlbnQgZmlyZSBldmVudCBvbiBwYXJlbnRcbiAgICAvLyBhZnRlciBoYW5kbGluZyBwYXRoIGJ5IGNoaWxkXG4gICAgaWYoIXRoaXMucGF0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhdGNoIGNsaWNrIHRvIGhpZ2hsaWdodCBwYXRoXG4gICAgaWYodGhpcy5jbGlja2VkUGF0aCkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrUGF0aCgpO1xuXG4gICAgICAvLyBSZW1vdmUgbGF0ZXN0IHBhdGhcbiAgICAgIHRoaXMucGF0aC5lbGVtLnJlbW92ZSgpO1xuICAgICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudW5zZWxlY3QoKTtcblxuICAgIC8vIE9yIGZpeCBuZXcgcGF0aFxuICAgIHRoaXMucGF0aC5lbGVtLmlkID0gYHBhdGgtJHt0aGlzLnBhdGhzQ291bnRlcn1gO1xuICAgIHRoaXMucGF0aHNDb3VudGVyKys7XG5cbiAgICBjb25zdCBjb29yZHMgPSB7XG4gICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgeTogZXZlbnQub2Zmc2V0WVxuICAgIH1cblxuICAgIHRoaXMucGF0aC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHt0aGlzLnBhdGguc3RhcnQueH0sJHt0aGlzLnBhdGguc3RhcnQueX0gJHt0aGlzLnNjYWxlQ29vcmQoY29vcmRzLngpfSwke3RoaXMuc2NhbGVDb29yZChjb29yZHMueSl9YCk7XG5cbiAgICB0aGlzLnNub3dmbGFrZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gIH1cblxuICBtb3VzZUNsaWNrUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoSWQgPSB0aGlzLmNsaWNrZWRQYXRoLmlkO1xuICAgICAgdGhpcy5jbGlja2VkUGF0aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWdobGlnaHQnKTtcblxuICAgICAgaWYodGhpcy5jbGlja2VkUGF0aC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRbcGF0aElkXSA9IHRoaXMuY2xpY2tlZFBhdGg7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRbcGF0aElkXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlKCkge1xuICAgIGNvbnN0IHBhdGhTdHIgPSB0aGlzLmdldFNpbmdsZVBhdGhTdHIoKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhci5kaXNhYmxlZCA9ICFwYXRoU3RyO1xuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIGdyb3VwQ29udGVudDogcGF0aFN0clxuICAgICAgfSxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgZ2V0U2luZ2xlUGF0aFN0cigpIHtcbiAgICB0aGlzLnRhcmdldEdyb3VwLmNoaWxkcmVuLm1hcCA9IFtdLm1hcDtcbiAgICBsZXQgc2luZ2xlUGF0aENvb3JkcyA9ICcnO1xuXG4gICAgZm9yKGxldCBpdGVtIG9mIHRoaXMudGFyZ2V0R3JvdXAuY2hpbGRyZW4pIHtcbiAgICAgIHNpbmdsZVBhdGhDb29yZHMgKz0gYCAke2l0ZW0uZ2V0QXR0cmlidXRlKCdkJyl9YDtcbiAgICB9XG5cbiAgICBpZighc2luZ2xlUGF0aENvb3Jkcykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7c2luZ2xlUGF0aENvb3Jkc31cIi8+YDtcbiAgfVxuXG4gIHRhcmdldEdyb3VwTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIHVuc2VsZWN0KCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW2tleV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUGF0aHMoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRba2V5XS5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRba2V5XTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9O1xuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgfVxuXG4gIC8vIFJldHVybiBzY2FsZSB2YWx1ZSBpZiBzdmcgd2FzIHJlc2l6ZWRcbiAgZ2V0U2NhbGUoKSB7XG4gICAgY29uc3QgbWVhc3VyZVBhdGggPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ21lYXN1cmUtcmVjdCcpO1xuICAgIGNvbnN0IHdpZHRoID0gbWVhc3VyZVBhdGguZ2V0QXR0cmlidXRlKCd3aWR0aCcpO1xuICAgIGNvbnN0IHJlY3QgPSBtZWFzdXJlUGF0aC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHJldHVybiB3aWR0aCAvIHJlY3Qud2lkdGg7XG4gIH1cblxuICBzY2FsZUNvb3JkKGNvb3JkKSB7XG4gICAgcmV0dXJuIGNvb3JkICogdGhpcy5zY2FsZTtcbiAgfVxufVxuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIC0tdHJhbnNpdGlvbjogLjI1cztcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICA6aG9zdCAuY29udG91ciB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgc3Ryb2tlLW9wYWNpdHk6IC41O1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLW9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgIC5jb250cm9sIHtcbiAgICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG4gICAgLmNvbnRyb2w6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4ICNGRkYgaW5zZXQ7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgLmNvbnRyb2w6ZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzX19kb3dubG9hZHMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwibG9hZGluZ1wiXSAuY29udHJvbC0tZ2V0LFxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2wtLWdldCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cImxvYWRpbmdcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMsXG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbHNfX2Rvd25sb2FkcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5jb250cm9sICsgLmNvbnRyb2wge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzX19kb3dubG9hZHMgLmNvbnRyb2wge1xuICAgICAgb3BhY2l0eTogLjI7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPHN2ZyBjbGFzcz1cImNvbnRvdXJcIiB2aWV3Qm94PVwiLTIwIDAgNjQwIDYwMFwiPlxuICAgICAgPGNpcmNsZSByPVwiMzAwXCIgY3g9XCIzMDBcIiBjeT1cIjMwMFwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk9XCIxMCA1XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMVwiXG4gICAgICAgIGZpbGw9XCJub25lXCIvPlxuICAgIDwvc3ZnPlxuXG4gICAgPHN2ZyBjbGFzcz1cInNub3dmbGFrZVwiXG4gICAgICB2aWV3Qm94PVwiLTIwIDAgNjQwIDYwMFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxwYXRoIGlkPVwic2xpY2Utc2hhcGVcIiBkPVwiTTEzMC4xLDMwMC41LCAxMzAuMSwwLCAwLDc1elwiPjwvcGF0aD5cblxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJzbGljZS1jbGlwLXBhdGhcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2Utc2hhcGVcIi8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG5cbiAgICAgICAgPHN5bWJvbCBpZD1cInNsaWNlXCI+XG4gICAgICAgICAgPCEtLSBDbGlwcGVkIHNsaWNlIGNvbnRlbnQgLS0+XG4gICAgICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNzbGljZS1jbGlwLXBhdGgpXCJcbiAgICAgICAgICAgIGlkPVwidGFyZ2V0LWdyb3VwXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjVcIj5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ltYm9sPlxuXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJwYWlyLXNsaWNlc1wiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNzApXCI+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2VcIi8+XG4gICAgICAgICAgICA8IS0tIE1pcnJvcmVkIHNsaWNlIHRvIHNob3cgc3ltbWV0cnkgLS0+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2VcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYwLDApIHNjYWxlKC0xLDEpXCIvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zeW1ib2w+XG4gICAgICA8L2RlZnM+XG5cbiAgICAgIDwhLS0gVmlzaWJsZSBzbm93Zmxha2UgLS0+XG4gICAgICA8Zz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoOTAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDIxMCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwLCAzMDAsIDMwMClcIi8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWdldFwiPkdldCBzbm93Zmxha2U8L2J1dHRvbj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fZG93bmxvYWRzXCI+XG4gICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWRvd25sb2FkLXN2Z1wiPkRvd25sb2FkIFNWRzwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1kb3dubG9hZC1wbmdcIj5Eb3dubG9hZCBQTkc8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0ZsYWtlVmlldyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy50YXJnZXRHcm91cCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0LWdyb3VwJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHRoaXMuc25vd2ZsYWtlID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UnKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgIHRoaXMuY29udHJvbEdldCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZ2V0Jyk7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxpbmtzID0ge1xuICAgICAgcG5nOiB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWRvd25sb2FkLXBuZycpLFxuICAgICAgc3ZnOiB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWRvd25sb2FkLXN2ZycpXG4gICAgfTtcbiAgICB0aGlzLnRoZW1lID0gW1xuICAgICAgJyMyNTNCNTknLFxuICAgICAgJ3R1cnF1b2lzZSdcbiAgICBdO1xuXG4gICAgdGhpcy5vdXRwdXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGVTdHIoKTtcblxuICAgIHRoaXMuY2hhbmdlVGhlbWUgPSB0aGlzLmNoYW5nZVRoZW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcmVwYXJlSW1hZ2VzID0gdGhpcy5wcmVwYXJlSW1hZ2VzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmZpbmFsU2l6ZXMgPSB7XG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiA4MDBcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdmlldycsIHRoaXMuY2hhbmdlVmlldyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCB0aGlzLmNoYW5nZVRoZW1lKTtcbiAgICB0aGlzLmNvbnRyb2xHZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXBhcmVJbWFnZXMpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UtdmlldycsIHRoaXMuY2hhbmdlVmlldyk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCB0aGlzLmNoYW5nZVRoZW1lKTtcbiAgICB0aGlzLmNvbnRyb2xHZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXBhcmVJbWFnZXMpO1xuICB9XG5cbiAgY2hhbmdlVmlldyhldmVudCkge1xuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MID0gZXZlbnQuZGV0YWlsLmdyb3VwQ29udGVudDtcbiAgICB0aGlzLmNvbnRyb2xHZXQuZGlzYWJsZWQgPSAhdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUw7XG4gIH1cblxuICBjaGFuZ2VUaGVtZShldmVudCkge1xuICAgIGlmKGV2ZW50LmRldGFpbCAmJiBldmVudC5kZXRhaWwudGhlbWUpIHtcbiAgICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgICAgdGhpcy50aGVtZSA9IGV2ZW50LmRldGFpbC50aGVtZTtcbiAgICAgIHRoaXMub3V0cHV0U3R5bGUgPSB0aGlzLmdldFN0eWxlU3RyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJlcGFyZUltYWdlcygpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5maW5hbFNWRyA9IHRoaXMuc25vd2ZsYWtlLmNsb25lTm9kZSh0cnVlKTtcbiAgICB0aGlzLmZpbmFsU1ZHLnN0eWxlID0gdGhpcy5vdXRwdXRTdHlsZTtcblxuICAgIHRoaXMucHJlcGFyZVBuZygpO1xuICAgIHRoaXMucHJlcGFyZVN2ZygpO1xuICB9XG5cbiAgZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICBnZXRTdHlsZVN0cigpIHtcbiAgICByZXR1cm4gYGJhY2tncm91bmQ6ICR7dGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoaXMudGhlbWUpfTsgY29sb3I6IHdoaXRlYDtcbiAgfVxuXG4gIHByZXBhcmVQbmcoKSB7XG4gICAgY29uc3QgeG1sID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyh0aGlzLmZpbmFsU1ZHKTtcbiAgICBjb25zdCBzdmc2NCA9IGJ0b2EoeG1sKTtcbiAgICBjb25zdCBiNjRTdGFydCA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCc7XG4gICAgY29uc3QgaW1hZ2U2NCA9IGI2NFN0YXJ0ICsgc3ZnNjQ7XG5cbiAgICBjb25zdCBpbWdPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdPYmouc3JjID0gaW1hZ2U2NDtcbiAgICBpbWdPYmoud2lkdGggPSB0aGlzLmZpbmFsU2l6ZXMud2lkdGg7XG4gICAgaW1nT2JqLmhlaWdodCA9IHRoaXMuZmluYWxTaXplcy5oZWlnaHQ7XG5cbiAgICBpbWdPYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5maW5hbFNpemVzLndpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5maW5hbFNpemVzLmhlaWdodDtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWdPYmosIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgbGV0IFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuaHJlZiA9IFVSTE9iai5jcmVhdGVPYmplY3RVUkwoYmxvYiwgJ3BuZycsIDEpO1xuICAgICAgICB0aGlzLmxpbmtzLnBuZy5kb3dubG9hZCA9ICdzbm93Zmxha2UucG5nJztcblxuICAgICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgcHJlcGFyZVN2ZygpIHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3RoaXMuZmluYWxTVkcub3V0ZXJIVE1MXSwge3R5cGU6ICdpbWFnZS9zdmcreG1sJ30pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgdGhpcy5saW5rcy5zdmcuaHJlZiA9IHVybDtcbiAgICB0aGlzLmxpbmtzLnN2Zy5kb3dubG9hZCA9ICdzbm93Zmxha2Uuc3ZnJztcblxuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdyZWFkeSc7XG4gIH1cbn1cbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDRyZW07XG4gICAgfVxuXG4gICAgLnZpc3VhbGx5aGlkZGVuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICB9XG5cbiAgICAuY29udHJvbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjRkZGIGluc2V0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIC41cztcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIG1hcmdpbjtcbiAgICB9XG5cbiAgICAuY29udHJvbDpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jb250cm9sOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggI0ZGRiBpbnNldCxcbiAgICAgICAgMCAwIDAgNHB4IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkIC5jb250cm9sIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTNyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtLWN1cnJlbnQge1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0uMjVyZW07XG4gICAgICByaWdodDogLS4yNXJlbTtcbiAgICAgIGJvdHRvbTogLS4yNXJlbTtcbiAgICAgIGxlZnQ6IC0uMjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgI0ZGRjtcbiAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudDpmb2N1czo6YWZ0ZXIge1xuICAgICAgY29udGVudDogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZDpob3ZlciAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI0ZGRiBpbnNldDtcbiAgICB9XG4gICAgLmNvbnRyb2xzLS1jb2xsYXBzZWQ6aG92ZXIgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICAgIH1cblxuXG5cbiAgICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gICAgICB9XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9scyBjb250cm9scy0tY29sbGFwc2VkXCI+PC9kaXY+XG5gO1xuXG5jb25zdCB0aGVtZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnU2VhJyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMDIyRTQwJyxcbiAgICAgICAgJ3RlYWwnLFxuICAgICAgICAndHVycXVvaXNlJyxcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOb3J0aCBTa3knLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMyNTNCNTknLFxuICAgICAgICAnIzk2RDlDNicsXG4gICAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGVlcCBOaWdodCcsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzAxMTUyNicsXG4gICAgICAgICcjMDIyRTQwJyxcbiAgICAgICAgJyMwNzRBNTknLFxuICAgICAgICAnIzI2NjU3MycsXG4gICAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGVlcCBTcGFjZScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzA3MTIxOCcsXG4gICAgICAgICcjMUU1Mjc3J1xuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1N0ZWVsYmx1ZScsXG4gICAgY29sb3JzOiBbJ3N0ZWVsYmx1ZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVGVhbCcsXG4gICAgY29sb3JzOiBbJ3RlYWwnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RhcmtzbGF0ZWJsdWUnLFxuICAgIGNvbG9yczogWydkYXJrc2xhdGVibHVlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPcmFuZ2VyZWQnLFxuICAgIGNvbG9yczogWydvcmFuZ2VyZWQnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0luZGlhbnJlZCcsXG4gICAgY29sb3JzOiBbJ2luZGlhbnJlZCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRmlyZWJyaWNrJyxcbiAgICBjb2xvcnM6IFsnZmlyZWJyaWNrJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdXJwbGUnLFxuICAgIGNvbG9yczogWydwdXJwbGUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dyYXknLFxuICAgIGNvbG9yczogWycjMzMzJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdCbGFjaycsXG4gICAgY29sb3JzOiBbJyMwMDAnXVxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTd2l0Y2hlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoZW1lcy5sZW5ndGgpO1xuICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IG51bGw7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGNvbGxhcHNlZDogJ2NvbnRyb2xzLS1jb2xsYXBzZWQnLFxuICAgICAgY3VycmVudDogJ2NvbnRyb2wtLWN1cnJlbnQnXG4gICAgfVxuXG4gICAgLy8gU2V0IGN1cnJlbnQgdGhlbWUgdG8gcGFnZVxuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2VUaGVtZSgpO1xuICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcblxuICAgIHRoaXMub25Db250cm9sQ2xpY2sgPSB0aGlzLm9uQ29udHJvbENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGRDb250cm9scygpIHtcbiAgICB0aGVtZXMuZm9yRWFjaCgodGhlbWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgYmdTdHIgPSB0aGlzLmdldEJhY2tncm91bmRTdHIodGhlbWUuY29sb3JzKTtcbiAgICAgIGxldCBjbGFzc05hbWUgPSAnY29udHJvbCc7XG5cbiAgICAgIGlmKGluZGV4ID09PSB0aGlzLmN1cnJlbnRUaGVtZU51bSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyBjb250cm9sLS1jdXJyZW50JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udHJvbFN0ciA9IGA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiXG4gICAgICAgIHRpdGxlPVwiJHt0aGVtZS5uYW1lfVwiXG4gICAgICAgIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZDogJHtiZ1N0cn1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5aGlkZGVuXCI+JHt0aGVtZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+YDtcblxuICAgICAgdGhpcy5jb250cm9scy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIGNvbnRyb2xTdHIpO1xuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xzLmN1cnJlbnR9YCk7XG4gICAgfSlcbiAgfVxuXG4gIGdldEJhY2tncm91bmRTdHIoY29sb3JzTGlzdCkge1xuICAgIGxldCBiZ1N0ciA9ICcnO1xuXG4gICAgaWYoY29sb3JzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJnU3RyID0gY29sb3JzTGlzdFswXVxuICAgICAgcmV0dXJuIGJnU3RyO1xuICAgIH1cblxuICAgIGJnU3RyID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3JzTGlzdC5qb2luKCcsJyl9KWA7XG4gICAgcmV0dXJuIGJnU3RyO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db250cm9sQ2xpY2spO1xuICB9XG5cbiAgb25Db250cm9sQ2xpY2soZXZlbnQpIHtcbiAgICBpZih0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lTnVtID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCh0aGlzLmNscy5jdXJyZW50KTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMuY29udHJvbHMuY2xhc3NMaXN0LmFkZCh0aGlzLmNscy5jb2xsYXBzZWQpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlVGhlbWUoKSB7XG4gICAgY29uc3QgY29sb3JzID0gdGhlbWVzW3RoaXMuY3VycmVudFRoZW1lTnVtXS5jb2xvcnM7XG4gICAgdGhpcy5jb250cm9scy5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3JzWzBdO1xuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlLXRoZW1lJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHRoZW1lOiBjb2xvcnNcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlXG4gICAgfSkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9