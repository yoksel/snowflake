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

  getMouseOffset(event) {
    let {left, top} = this.snowflake.getBoundingClientRect();
    let scale = this.scale;
    return {
      x: scale * (event.clientX - left),
      y: scale * (event.clientY - top)
    };
  }

  mouseDown(event) {
    // Start draw line, create path
    let elem = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let start = this.getMouseOffset(event);
    this.path = {
      elem,
      start
    };

    this.targetGroup.append(elem);

    this.snowflake.addEventListener('mousemove', this.mouseMove);
  }

  mouseMove(event) {
    // Move path end to pointer coordinates
    let {x, y} = this.getMouseOffset(event);
    let {start} = this.path;
    this.path.elem.setAttribute(
      'd',
      `M${start.x},${start.y} ${x},${y}`);

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

    let {x, y} = this.getMouseOffset(event);
    let {start} = this.path;

    this.path.elem.setAttribute(
      'd',
      `M${start.x},${start.y} ${x},${y}`);

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
    this.currentThemeNum = Math.floor(Math.random() * themes.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNKO0FBQ0E7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVBLG1EQUFtRCwrREFBZTtBQUNsRSxpREFBaUQsNkRBQWE7QUFDOUQsaURBQWlELDZEQUFhO0FBQzlELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqREQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLFVBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxLQUFLO0FBQ2QsU0FBUyxNQUFNO0FBQ2Y7QUFDQTtBQUNBLFVBQVUsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFLEdBQUcsRUFBRTs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEOztBQUVBLFNBQVMsS0FBSztBQUNkLFNBQVMsTUFBTTs7QUFFZjtBQUNBO0FBQ0EsVUFBVSxRQUFRLEdBQUcsUUFBUSxHQUFHLEVBQUUsR0FBRyxFQUFFOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsaUJBQWlCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN6VEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxzREFBc0Qsc0JBQXNCO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZTtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQixpQkFBaUIsV0FBVztBQUM1QixzQkFBc0IsTUFBTTtBQUM1Qiw2QkFBNkIsTUFBTTtBQUNuQyx5Q0FBeUMsV0FBVztBQUNwRDs7QUFFQTtBQUNBLDBEQUEwRCxpQkFBaUI7QUFDM0UsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgU25vd0ZsYWtlRWRpdG9yIGZyb20gJy4vbGliL1Nub3dGbGFrZUVkaXRvci5qcyc7XG5pbXBvcnQgU25vd0ZsYWtlVmlldyBmcm9tICcuL2xpYi9Tbm93Rmxha2VWaWV3LmpzJztcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vbGliL1RoZW1lU3dpdGNoZXIuanMnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UtZWRpdG9yJyk7XG4gIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc25vd2ZsYWtlLXZpZXcnKTtcbiAgY29uc3QgdGhlbWVTd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1zd2l0Y2hlcicpO1xuXG4gIGVkaXRvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgdmlldy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlLXZpZXcnLCB7XG4gICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9KTtcblxuICB0aGVtZVN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBnZXRCYWNrZ3JvdW5kU3RyKGV2ZW50LmRldGFpbC50aGVtZSlcblxuICAgIHZpZXcuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZS10aGVtZScsIHtcbiAgICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0Nikge1xuXG4gICAgICBlZGl0b3IuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JlbW92ZS1wYXRoJywge1xuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Nub3dmbGFrZS1lZGl0b3InLCBTbm93Rmxha2VFZGl0b3IpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbm93Zmxha2UtdmlldycsIFNub3dGbGFrZVZpZXcpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0aGVtZS1zd2l0Y2hlcicsIFRoZW1lU3dpdGNoZXIpO1xufSkoKTtcbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDUyMHB4O1xuXG4gICAgICAtLXRyYW5zaXRpb246IC4yNXM7XG4gICAgfVxuXG4gICAgOmhvc3Q6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICA6aG9zdCBzdmcge1xuICAgICAgd2lkdGg6IDUyMHB4O1xuICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICB9XG5cbiAgICBwYXRoIHtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZSB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwYXRoOmhvdmVyIHtcbiAgICAgIHN0cm9rZTogYXF1YTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuc2xpY2UtdGlwIHtcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0IHtcbiAgICAgIHN0cm9rZTogb3JhbmdlcmVkO1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0OmhvdmVyIHtcbiAgICAgIHN0cm9rZTogY3JpbXNvbjtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLmNvbnRyb2wge1xuICAgICAgcGFkZGluZzogLjI1cmVtIDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cbiAgICAuY29udHJvbDpub3QoOmRpc2FibGVkKTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJveC1zaGFkb3c6ICAwIDAgMCAycHggI0ZGRiBpbnNldDtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cbiAgICAuY29udHJvbDpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICA8c3ZnIGNsYXNzPVwic25vd2ZsYWtlXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjYwIDMwMFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxwYXRoIGlkPVwic2xpY2Utc2hhcGVcIiBkPVwiTTEzMC4xLDMwMC41LCAxMzAuMSwwLCAwLDc1elwiPjwvcGF0aD5cblxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJzbGljZS1jbGlwLXBhdGhcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2Utc2hhcGVcIi8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG5cbiAgICAgIDwhLS0gU2hhcGUgZm9yIG1lYXN1cmluZyBTVkcgc2NhbGluZyAtLT5cbiAgICAgIDxyZWN0IGlkPVwibWVhc3VyZS1yZWN0XCJcbiAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgeD1cIjBcIiB5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+PC9yZWN0PlxuXG4gICAgICA8dGV4dCBjbGFzcz1cInNsaWNlLXRpcFwiXG4gICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgIHk9XCI2MlwiIHg9XCIzMFwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKC0zMClcIj5QYWludCBoZXJlPC90ZXh0PlxuXG4gICAgICA8ZyBpZD1cInNsaWNlXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgPCEtLSBDb250b3VyIC0tPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2Utc2hhcGVcIlxuICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk9XCI1IDIuNVwiXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiLjVcIlxuICAgICAgICAgIHN0cm9rZS1vcGFjaXR5PVwiLjVcIi8+XG4gICAgICAgIDwhLS0gQ2xpcHBlZCBzbGljZSBjb250ZW50IC0tPlxuICAgICAgICA8ZyBjbGlwLXBhdGg9XCJ1cmwoI3NsaWNlLWNsaXAtcGF0aClcIlxuICAgICAgICAgIGlkPVwidGFyZ2V0LWdyb3VwXCJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCI1XCI+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cblxuICAgICAgPCEtLSBNaXJyb3JlZCBzbGljZSB0byBzaG93IHN5bW1ldHJ5IC0tPlxuICAgICAgPHVzZVxuICAgICAgICB4bGluazpocmVmPVwiI3NsaWNlXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI2MCwwKSBzY2FsZSgtMSwxKVwiXG4gICAgICAgIHN0eWxlPVwib3BhY2l0eTouMjVcIlxuICAgICAgICAvPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tY2xlYXJcIj5DbGVhcjwvYnV0dG9uPlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNub3dGbGFrZUVkaXRvciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5zbm93Zmxha2UgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLnNub3dmbGFrZScpO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignI3RhcmdldC1ncm91cCcpO1xuICAgIHRoaXMuY29udHJvbENsZWFyID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1jbGVhcicpO1xuICAgIHRoaXMuY29udHJvbENsZWFyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNjYWxlID0gdGhpcy5nZXRTY2FsZSgpO1xuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICAgIHRoaXMucGF0aHNDb3VudGVyID0gMDtcbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG5cbiAgICB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duID0gdGhpcy50YXJnZXRHcm91cE1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xlYXIgPSB0aGlzLmNsZWFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy51bnNlbGVjdCA9IHRoaXMudW5zZWxlY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZVVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZU1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5zbm93Zmxha2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd24pO1xuICAgIHRoaXMuc25vd2ZsYWtlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICAgIC8vIENhdGNoIGV2ZW50cyBmcm9tIHBhcmVudCBkb2N1bWVudFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigncmVtb3ZlLXBhdGgnLCB0aGlzLnJlbW92ZVBhdGhzKTtcbiAgICAvLyBDYXRjaCBldmVudHMgZm9yIHBhdGggaW5zaWRlIHBhdGhzIGdyb3VwXG4gICAgdGhpcy50YXJnZXRHcm91cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duKTtcblxuICAgIHRoaXMuY29udHJvbENsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGVhcik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNub3dmbGFrZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bik7XG4gICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcCk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZW1vdmUtcGF0aCcsIHRoaXMucmVtb3ZlUGF0aHMpO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy50YXJnZXRHcm91cE1vdXNlRG93bik7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyKTtcbiAgfVxuXG4gIGdldE1vdXNlT2Zmc2V0KGV2ZW50KSB7XG4gICAgbGV0IHtsZWZ0LCB0b3B9ID0gdGhpcy5zbm93Zmxha2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogc2NhbGUgKiAoZXZlbnQuY2xpZW50WCAtIGxlZnQpLFxuICAgICAgeTogc2NhbGUgKiAoZXZlbnQuY2xpZW50WSAtIHRvcClcbiAgICB9O1xuICB9XG5cbiAgbW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gU3RhcnQgZHJhdyBsaW5lLCBjcmVhdGUgcGF0aFxuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5nZXRNb3VzZU9mZnNldChldmVudCk7XG4gICAgdGhpcy5wYXRoID0ge1xuICAgICAgZWxlbSxcbiAgICAgIHN0YXJ0XG4gICAgfTtcblxuICAgIHRoaXMudGFyZ2V0R3JvdXAuYXBwZW5kKGVsZW0pO1xuXG4gICAgdGhpcy5zbm93Zmxha2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICB9XG5cbiAgbW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgLy8gTW92ZSBwYXRoIGVuZCB0byBwb2ludGVyIGNvb3JkaW5hdGVzXG4gICAgbGV0IHt4LCB5fSA9IHRoaXMuZ2V0TW91c2VPZmZzZXQoZXZlbnQpO1xuICAgIGxldCB7c3RhcnR9ID0gdGhpcy5wYXRoO1xuICAgIHRoaXMucGF0aC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHtzdGFydC54fSwke3N0YXJ0Lnl9ICR7eH0sJHt5fWApO1xuXG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gIH1cblxuICBtb3VzZVVwKGV2ZW50KSB7XG4gICAgLy8gUHJldmVudCBmaXJlIGV2ZW50IG9uIHBhcmVudFxuICAgIC8vIGFmdGVyIGhhbmRsaW5nIHBhdGggYnkgY2hpbGRcbiAgICBpZighdGhpcy5wYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2F0Y2ggY2xpY2sgdG8gaGlnaGxpZ2h0IHBhdGhcbiAgICBpZih0aGlzLmNsaWNrZWRQYXRoKSB7XG4gICAgICB0aGlzLm1vdXNlQ2xpY2tQYXRoKCk7XG5cbiAgICAgIC8vIFJlbW92ZSBsYXRlc3QgcGF0aFxuICAgICAgdGhpcy5wYXRoLmVsZW0ucmVtb3ZlKCk7XG4gICAgICB0aGlzLnNub3dmbGFrZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51bnNlbGVjdCgpO1xuXG4gICAgLy8gT3IgZml4IG5ldyBwYXRoXG4gICAgdGhpcy5wYXRoLmVsZW0uaWQgPSBgcGF0aC0ke3RoaXMucGF0aHNDb3VudGVyfWA7XG4gICAgdGhpcy5wYXRoc0NvdW50ZXIrKztcblxuICAgIGxldCB7eCwgeX0gPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcbiAgICBsZXQge3N0YXJ0fSA9IHRoaXMucGF0aDtcblxuICAgIHRoaXMucGF0aC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHtzdGFydC54fSwke3N0YXJ0Lnl9ICR7eH0sJHt5fWApO1xuXG4gICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICB9XG5cbiAgbW91c2VDbGlja1BhdGgoKSB7XG4gICAgY29uc3QgcGF0aElkID0gdGhpcy5jbGlja2VkUGF0aC5pZDtcbiAgICAgIHRoaXMuY2xpY2tlZFBhdGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlnaGxpZ2h0Jyk7XG5cbiAgICAgIGlmKHRoaXMuY2xpY2tlZFBhdGguY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHQnKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW3BhdGhJZF0gPSB0aGlzLmNsaWNrZWRQYXRoO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW3BhdGhJZF07XG4gICAgfVxuXG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZSgpIHtcbiAgICBjb25zdCBwYXRoU3RyID0gdGhpcy5nZXRTaW5nbGVQYXRoU3RyKCk7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIuZGlzYWJsZWQgPSAhcGF0aFN0cjtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBncm91cENvbnRlbnQ6IHBhdGhTdHJcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIGdldFNpbmdsZVBhdGhTdHIoKSB7XG4gICAgdGhpcy50YXJnZXRHcm91cC5jaGlsZHJlbi5tYXAgPSBbXS5tYXA7XG4gICAgbGV0IHNpbmdsZVBhdGhDb29yZHMgPSAnJztcblxuICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLnRhcmdldEdyb3VwLmNoaWxkcmVuKSB7XG4gICAgICBzaW5nbGVQYXRoQ29vcmRzICs9IGAgJHtpdGVtLmdldEF0dHJpYnV0ZSgnZCcpfWA7XG4gICAgfVxuXG4gICAgaWYoIXNpbmdsZVBhdGhDb29yZHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gYDxwYXRoIGQ9XCIke3NpbmdsZVBhdGhDb29yZHN9XCIvPmA7XG4gIH1cblxuICB0YXJnZXRHcm91cE1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBldmVudC50YXJnZXQ7XG4gIH1cblxuICB1bnNlbGVjdCgpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVBhdGhzKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW2tleV0ucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnRhcmdldEdyb3VwLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fTtcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gIH1cblxuICAvLyBSZXR1cm4gc2NhbGUgdmFsdWUgaWYgc3ZnIHdhcyByZXNpemVkXG4gIGdldFNjYWxlKCkge1xuICAgIGNvbnN0IG1lYXN1cmVQYXRoID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCdtZWFzdXJlLXJlY3QnKTtcbiAgICBjb25zdCB3aWR0aCA9IG1lYXN1cmVQYXRoLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICBjb25zdCByZWN0ID0gbWVhc3VyZVBhdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICByZXR1cm4gd2lkdGggLyByZWN0LndpZHRoO1xuICB9XG5cbn1cbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAtLXRyYW5zaXRpb246IC4yNXM7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgOmhvc3QgLmNvbnRvdXIge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHN0cm9rZS1vcGFjaXR5OiAuNTtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1vcGFjaXR5IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgICAuY29udHJvbCB7XG4gICAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdHJhbnNwYXJlbnQgaW5zZXQ7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuICAgIC5jb250cm9sOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogIDAgMCAwIDJweCAjRkZGIGluc2V0O1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIC5jb250cm9sOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIGNvbG9yOiAjNzc3O1xuICAgIH1cblxuICAgIC5jb250cm9sc19fZG93bmxvYWRzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cImxvYWRpbmdcIl0gLmNvbnRyb2wtLWdldCxcbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sLS1nZXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJsb2FkaW5nXCJdIC5jb250cm9sc19fZG93bmxvYWRzLFxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuY29udHJvbCArIC5jb250cm9sIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sc19fZG93bmxvYWRzIC5jb250cm9sIHtcbiAgICAgIG9wYWNpdHk6IC4yO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2wge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgPC9zdHlsZT5cblxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgIDxzdmcgY2xhc3M9XCJjb250b3VyXCIgdmlld0JveD1cIi0yMCAwIDY0MCA2MDBcIj5cbiAgICAgIDxjaXJjbGUgcj1cIjMwMFwiIGN4PVwiMzAwXCIgY3k9XCIzMDBcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMTAgNVwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjFcIlxuICAgICAgICBmaWxsPVwibm9uZVwiLz5cbiAgICA8L3N2Zz5cblxuICAgIDxzdmcgY2xhc3M9XCJzbm93Zmxha2VcIlxuICAgICAgdmlld0JveD1cIi0yMCAwIDY0MCA2MDBcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8cGF0aCBpZD1cInNsaWNlLXNoYXBlXCIgZD1cIk0xMzAuMSwzMDAuNSwgMTMwLjEsMCwgMCw3NXpcIj48L3BhdGg+XG5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwic2xpY2UtY2xpcC1wYXRoXCI+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlLXNoYXBlXCIvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJzbGljZVwiPlxuICAgICAgICAgIDwhLS0gQ2xpcHBlZCBzbGljZSBjb250ZW50IC0tPlxuICAgICAgICAgIDxnIGNsaXAtcGF0aD1cInVybCgjc2xpY2UtY2xpcC1wYXRoKVwiXG4gICAgICAgICAgICBpZD1cInRhcmdldC1ncm91cFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI1XCI+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N5bWJvbD5cblxuICAgICAgICA8c3ltYm9sIGlkPVwicGFpci1zbGljZXNcIj5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTcwKVwiPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlXCIvPlxuICAgICAgICAgICAgPCEtLSBNaXJyb3JlZCBzbGljZSB0byBzaG93IHN5bW1ldHJ5IC0tPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI2MCwwKSBzY2FsZSgtMSwxKVwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ltYm9sPlxuICAgICAgPC9kZWZzPlxuXG4gICAgICA8IS0tIFZpc2libGUgc25vd2ZsYWtlIC0tPlxuICAgICAgPGc+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDkwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE1MCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyMTAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMjcwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMzMCwgMzAwLCAzMDApXCIvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1nZXRcIj5HZXQgc25vd2ZsYWtlPC9idXR0b24+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2Rvd25sb2Fkc1wiPlxuICAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1kb3dubG9hZC1zdmdcIj5Eb3dubG9hZCBTVkc8L2E+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tZG93bmxvYWQtcG5nXCI+RG93bmxvYWQgUE5HPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNub3dGbGFrZVZpZXcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignI3RhcmdldC1ncm91cCcpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICB0aGlzLnNub3dmbGFrZSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuc25vd2ZsYWtlJyk7XG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmNvbnRyb2xHZXQgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWdldCcpO1xuICAgIHRoaXMuY29udHJvbEdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5saW5rcyA9IHtcbiAgICAgIHBuZzogdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1kb3dubG9hZC1wbmcnKSxcbiAgICAgIHN2ZzogdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1kb3dubG9hZC1zdmcnKVxuICAgIH07XG4gICAgdGhpcy50aGVtZSA9IFtcbiAgICAgICcjMjUzQjU5JyxcbiAgICAgICd0dXJxdW9pc2UnXG4gICAgXTtcblxuICAgIHRoaXMub3V0cHV0U3R5bGUgPSB0aGlzLmdldFN0eWxlU3RyKCk7XG5cbiAgICB0aGlzLmNoYW5nZVRoZW1lID0gdGhpcy5jaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJlcGFyZUltYWdlcyA9IHRoaXMucHJlcGFyZUltYWdlcy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5maW5hbFNpemVzID0ge1xuICAgICAgd2lkdGg6IDgwMCxcbiAgICAgIGhlaWdodDogODAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXZpZXcnLCB0aGlzLmNoYW5nZVZpZXcpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gICAgdGhpcy5jb250cm9sR2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmVwYXJlSW1hZ2VzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlLXZpZXcnLCB0aGlzLmNoYW5nZVZpZXcpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gICAgdGhpcy5jb250cm9sR2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmVwYXJlSW1hZ2VzKTtcbiAgfVxuXG4gIGNoYW5nZVZpZXcoZXZlbnQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICB0aGlzLnRhcmdldEdyb3VwLmlubmVySFRNTCA9IGV2ZW50LmRldGFpbC5ncm91cENvbnRlbnQ7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gIXRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MO1xuICB9XG5cbiAgY2hhbmdlVGhlbWUoZXZlbnQpIHtcbiAgICBpZihldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLnRoZW1lKSB7XG4gICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICAgIHRoaXMudGhlbWUgPSBldmVudC5kZXRhaWwudGhlbWU7XG4gICAgICB0aGlzLm91dHB1dFN0eWxlID0gdGhpcy5nZXRTdHlsZVN0cigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVJbWFnZXMoKSB7XG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZmluYWxTVkcgPSB0aGlzLnNub3dmbGFrZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGhpcy5maW5hbFNWRy5zdHlsZSA9IHRoaXMub3V0cHV0U3R5bGU7XG5cbiAgICB0aGlzLnByZXBhcmVQbmcoKTtcbiAgICB0aGlzLnByZXBhcmVTdmcoKTtcbiAgfVxuXG4gIGdldEJhY2tncm91bmRTdHIoY29sb3JzTGlzdCkge1xuICAgIGxldCBiZ1N0ciA9ICcnO1xuXG4gICAgaWYoY29sb3JzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJnU3RyID0gY29sb3JzTGlzdFswXVxuICAgICAgcmV0dXJuIGJnU3RyO1xuICAgIH1cblxuICAgIGJnU3RyID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3JzTGlzdC5qb2luKCcsJyl9KWA7XG4gICAgcmV0dXJuIGJnU3RyO1xuICB9XG5cbiAgZ2V0U3R5bGVTdHIoKSB7XG4gICAgcmV0dXJuIGBiYWNrZ3JvdW5kOiAke3RoaXMuZ2V0QmFja2dyb3VuZFN0cih0aGlzLnRoZW1lKX07IGNvbG9yOiB3aGl0ZWA7XG4gIH1cblxuICBwcmVwYXJlUG5nKCkge1xuICAgIGNvbnN0IHhtbCA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcodGhpcy5maW5hbFNWRyk7XG4gICAgY29uc3Qgc3ZnNjQgPSBidG9hKHhtbCk7XG4gICAgY29uc3QgYjY0U3RhcnQgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnO1xuICAgIGNvbnN0IGltYWdlNjQgPSBiNjRTdGFydCArIHN2ZzY0O1xuXG4gICAgY29uc3QgaW1nT2JqID0gbmV3IEltYWdlKCk7XG4gICAgaW1nT2JqLnNyYyA9IGltYWdlNjQ7XG4gICAgaW1nT2JqLndpZHRoID0gdGhpcy5maW5hbFNpemVzLndpZHRoO1xuICAgIGltZ09iai5oZWlnaHQgPSB0aGlzLmZpbmFsU2l6ZXMuaGVpZ2h0O1xuXG4gICAgaW1nT2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuZmluYWxTaXplcy53aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuZmluYWxTaXplcy5oZWlnaHQ7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nT2JqLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgdGhpcy5jYW52YXMudG9CbG9iKChibG9iKSA9PiB7XG4gICAgICAgIGxldCBVUkxPYmogPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgICAgIHRoaXMubGlua3MucG5nLmhyZWYgPSBVUkxPYmouY3JlYXRlT2JqZWN0VVJMKGJsb2IsICdwbmcnLCAxKTtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuZG93bmxvYWQgPSAnc25vd2ZsYWtlLnBuZyc7XG5cbiAgICAgICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIHByZXBhcmVTdmcoKSB7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt0aGlzLmZpbmFsU1ZHLm91dGVySFRNTF0sIHt0eXBlOiAnaW1hZ2Uvc3ZnK3htbCd9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIHRoaXMubGlua3Muc3ZnLmhyZWYgPSB1cmw7XG4gICAgdGhpcy5saW5rcy5zdmcuZG93bmxvYWQgPSAnc25vd2ZsYWtlLnN2Zyc7XG5cbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuICB9XG59XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgIH1cblxuICAgIC52aXN1YWxseWhpZGRlbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggI0ZGRiBpbnNldDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IG1hcmdpbiAuNXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBtYXJnaW47XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29udHJvbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4ICNGRkYgaW5zZXQsXG4gICAgICAgIDAgMCAwIDRweCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZCAuY29udHJvbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtLjI1cmVtO1xuICAgICAgcmlnaHQ6IC0uMjVyZW07XG4gICAgICBib3R0b206IC0uMjVyZW07XG4gICAgICBsZWZ0OiAtLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNGRkY7XG4gICAgICBhbmltYXRpb246IHJvdGF0aW9uIDRzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtLWN1cnJlbnQ6Zm9jdXM6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzLS1jb2xsYXBzZWQ6aG92ZXIgLmNvbnRyb2wtLWN1cnJlbnQge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNGRkYgaW5zZXQ7XG4gICAgfVxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgICB9XG5cblxuXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZylcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxuICAgICAgfVxuICAgIH1cbiAgPC9zdHlsZT5cblxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHMgY29udHJvbHMtLWNvbGxhcHNlZFwiPjwvZGl2PlxuYDtcblxuY29uc3QgdGhlbWVzID0gW1xuICB7XG4gICAgbmFtZTogJ1NlYScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzAyMkU0MCcsXG4gICAgICAgICd0ZWFsJyxcbiAgICAgICAgJ3R1cnF1b2lzZScsXG4gICAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTm9ydGggU2t5JyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMjUzQjU5JyxcbiAgICAgICAgJyM5NkQ5QzYnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RlZXAgTmlnaHQnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwMTE1MjYnLFxuICAgICAgICAnIzAyMkU0MCcsXG4gICAgICAgICcjMDc0QTU5JyxcbiAgICAgICAgJyMyNjY1NzMnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RlZXAgU3BhY2UnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwNzEyMTgnLFxuICAgICAgICAnIzFFNTI3NydcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdGVlbGJsdWUnLFxuICAgIGNvbG9yczogWydzdGVlbGJsdWUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1RlYWwnLFxuICAgIGNvbG9yczogWyd0ZWFsJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEYXJrc2xhdGVibHVlJyxcbiAgICBjb2xvcnM6IFsnZGFya3NsYXRlYmx1ZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT3JhbmdlcmVkJyxcbiAgICBjb2xvcnM6IFsnb3JhbmdlcmVkJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbmRpYW5yZWQnLFxuICAgIGNvbG9yczogWydpbmRpYW5yZWQnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0ZpcmVicmljaycsXG4gICAgY29sb3JzOiBbJ2ZpcmVicmljayddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUHVycGxlJyxcbiAgICBjb2xvcnM6IFsncHVycGxlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHcmF5JyxcbiAgICBjb2xvcnM6IFsnIzMzMyddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQmxhY2snLFxuICAgIGNvbG9yczogWycjMDAwJ11cbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lU3dpdGNoZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJyk7XG4gICAgdGhpcy5jdXJyZW50VGhlbWVOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGVtZXMubGVuZ3RoKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBudWxsO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBjb2xsYXBzZWQ6ICdjb250cm9scy0tY29sbGFwc2VkJyxcbiAgICAgIGN1cnJlbnQ6ICdjb250cm9sLS1jdXJyZW50J1xuICAgIH1cblxuICAgIC8vIFNldCBjdXJyZW50IHRoZW1lIHRvIHBhZ2VcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcbiAgICB0aGlzLmFkZENvbnRyb2xzKCk7XG5cbiAgICB0aGlzLm9uQ29udHJvbENsaWNrID0gdGhpcy5vbkNvbnRyb2xDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoKSB7XG4gICAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGJnU3RyID0gdGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoZW1lLmNvbG9ycyk7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gJ2NvbnRyb2wnO1xuXG4gICAgICBpZihpbmRleCA9PT0gdGhpcy5jdXJyZW50VGhlbWVOdW0pIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgY29udHJvbC0tY3VycmVudCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRyb2xTdHIgPSBgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTmFtZX1cIlxuICAgICAgICB0aXRsZT1cIiR7dGhlbWUubmFtZX1cIlxuICAgICAgICBkYXRhLWluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQ6ICR7YmdTdHJ9XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPiR7dGhlbWUubmFtZX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPmA7XG5cbiAgICAgIHRoaXMuY29udHJvbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBjb250cm9sU3RyKTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNscy5jdXJyZW50fWApO1xuICAgIH0pXG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29udHJvbENsaWNrKTtcbiAgfVxuXG4gIG9uQ29udHJvbENsaWNrKGV2ZW50KSB7XG4gICAgaWYodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmNvbGxhcHNlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZVRoZW1lKCk7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmN1cnJlbnQpO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBldmVudC50YXJnZXQ7XG4gICAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZVRoZW1lKCkge1xuICAgIGNvbnN0IGNvbG9ycyA9IHRoZW1lc1t0aGlzLmN1cnJlbnRUaGVtZU51bV0uY29sb3JzO1xuICAgIHRoaXMuY29udHJvbHMuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yc1swXTtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZS10aGVtZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB0aGVtZTogY29sb3JzXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZVxuICAgIH0pKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==