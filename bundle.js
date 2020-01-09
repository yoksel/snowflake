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
/* harmony import */ var _lib_ThemeSwitcher_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ThemeSwitcher/index.js */ "./src/lib/ThemeSwitcher/index.js");




(function() {
  document.addEventListener('change-theme', (event) => {
    changeTheme(event);
  });

  function getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  function changeTheme(event) {
    document.body.style.background = getBackgroundStr(event.detail.colors)

    if(!event.detail.accents) {
      return;
    }

    for(let key in event.detail.accents) {
      // console.log(key);
      document.documentElement.style.setProperty(`--color-${key}`, event.detail.accents[key]);
    }
  }

  window.customElements.define('snowflake-editor', _lib_SnowFlakeEditor_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  window.customElements.define('snowflake-view', _lib_SnowFlakeView_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  window.customElements.define('theme-switcher', _lib_ThemeSwitcher_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
      background: var(--color-base);
      border: 0;
      border-radius: .25rem;
      font: inherit;
      cursor: pointer;
      transition: all var(--transition);
      box-shadow: 0 0 0 2px transparent inset;
      color: var(--color-text);
    }
    .control:not(:disabled):hover {
      background: transparent;
      box-shadow:  0 0 0 2px var(--color-base) inset;
      color: var(--color-base);
    }
    .control:disabled {
      cursor: not-allowed;
      opacity: .5;
      color: var(--color-texttransp);
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
    this.bodyKeyUp = this.bodyKeyUp.bind(this);
  }

  connectedCallback() {
    this.snowflake.addEventListener('mousedown', this.mouseDown);
    this.snowflake.addEventListener('mouseup', this.mouseUp);
    // Catch events for path inside paths group
    this.targetGroup.addEventListener('mousedown', this.targetGroupMouseDown);

    this.controlClear.addEventListener('click', this.clear);

    document.addEventListener('keyup', this.bodyKeyUp);
  }

  disconnectedCallback() {
    this.snowflake.removeEventListener('mousedown', this.mouseDown);
    this.snowflake.removeEventListener('mouseup', this.mouseUp);
    this.targetGroup.removeEventListener('mousedown', this.targetGroupMouseDown);
    this.controlClear.removeEventListener('click', this.clear);
    document.removeEventListener('keyup', this.bodyKeyUp);
  }

  getMouseOffset(event) {
    let {left, top} = this.snowflake.getBoundingClientRect();
    let scale = this.scale;
    return {
      x: scale * (event.clientX - left),
      y: scale * (event.clientY - top)
    };
  }

  bodyKeyUp(event) {
    if(event.keyCode === 8 || event.keyCode === 46) {
      this.removePaths();
    }
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

    document.dispatchEvent(new CustomEvent('change-view', {
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
      background: var(--color-base);
      border: 0;
      border-radius: .25rem;
      font: inherit;
      cursor: pointer;
      transition: all var(--transition);
      box-shadow: 0 0 0 2px transparent inset;
      color: var(--color-text);
    }
    .control:not(:disabled):hover {
      background: transparent;
      box-shadow:  0 0 0 2px var(--color-base) inset;
      color: var(--color-base);
    }
    .control:disabled {
      cursor: not-allowed;
      opacity: .5;
      color: var(--color-texttransp);
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
    this.accents = {
      base: '#FFF'
    };

    this.outputStyle = this.getStyleStr();

    this.changeView = this.changeView.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.prepareImages = this.prepareImages.bind(this);

    this.finalSizes = {
      width: 800,
      height: 800
    };
  }

  connectedCallback() {
    document.addEventListener('change-view', this.changeView);
    document.addEventListener('change-theme', this.changeTheme);
    this.controlGet.addEventListener('click', this.prepareImages);
  }

  disconnectedCallback() {
    document.removeEventListener('change-view', this.changeView);
    document.removeEventListener('change-theme', this.changeTheme);
    this.controlGet.removeEventListener('click', this.prepareImages);
  }

  changeView(event) {
    this.controls.dataset.state = '';
    this.targetGroup.innerHTML = event.detail.groupContent;
    this.controlGet.disabled = !this.targetGroup.innerHTML;
  }

  changeTheme(event) {
    if(event.detail && event.detail.colors) {
      this.controls.dataset.state = '';
      this.theme = event.detail.colors;
      this.accents = event.detail.accents;
      this.outputStyle = this.getStyleStr();
    }
  }

  prepareImages() {
    this.controls.dataset.state = 'loading';
    this.finalSVG = this.snowflake.cloneNode(true);
    this.finalSVG.style = this.outputStyle;
    // Fix paint SVG on canvas in Firefox
    this.finalSVG.setAttribute('width', `${this.finalSizes.width}px`);
    this.finalSVG.setAttribute('height', `${this.finalSizes.height}px`);

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
    return `background: ${this.getBackgroundStr(this.theme)}; color: ${this.accents.base}`;
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
        this.links.png.href = URLObj.createObjectURL(blob);
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

/***/ "./src/lib/ThemeSwitcher/index.js":
/*!****************************************!*\
  !*** ./src/lib/ThemeSwitcher/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeSwitcher; });
/* harmony import */ var _themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes.js */ "./src/lib/ThemeSwitcher/themes.js");
/* harmony import */ var _tmpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tmpl.js */ "./src/lib/ThemeSwitcher/tmpl.js");



class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(_tmpl_js__WEBPACK_IMPORTED_MODULE_1__["template"].content.cloneNode(true));
    this.controls = this.elem.querySelector('.controls');
    this.currentThemeNum = Math.floor(Math.random() * _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"].length);
    this.currentThemeElem = null;
    this.isCollapsed = true;

    this.cls = {
      collapsed: 'controls--collapsed',
      current: 'control--current'
    }

    this.addControls();

    this.onControlClick = this.onControlClick.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.closePanel = this.closePanel.bind(this);
  }

  addControls() {
    _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"].forEach((theme, index) => {
      let bgStr = this.getBackgroundStr(theme.colors);
      let className = 'control';
      let color = _themes_js__WEBPACK_IMPORTED_MODULE_0__["baseAccents"].base;
      if(theme.accents) {
        color = theme.accents.base;
      }

      if(index === this.currentThemeNum) {
        className += ' control--current';
      }

      const controlStr = `<button
        type="button"
        class="${className}"
        title="${theme.name}"
        data-index="${index}"
        style="background: ${bgStr}; color: ${color}">
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
    document.addEventListener('change-theme', this.changeTheme);
    document.addEventListener('click', this.closePanel);

    // Set current theme to page & component
    this.dispatchChangeTheme();
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

      this.currentThemeElem.classList.remove(this.cls.current);
      event.target.classList.add(this.cls.current);
      this.currentThemeElem = event.target;

      this.closePanel(event);
    }
  }

  closePanel(event) {
    if(event.target === this || this.isCollapsed) {
      return;
    }

    this.isCollapsed = true;
    this.controls.classList.add(this.cls.collapsed);
  }

  dispatchChangeTheme() {
    const theme = _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"][this.currentThemeNum];
    if(!theme.accents) {
      theme.accents = _themes_js__WEBPACK_IMPORTED_MODULE_0__["baseAccents"];
    }
    this.controls.style.background = theme.colors[0];

    document.dispatchEvent(new CustomEvent('change-theme', {
      detail: theme,
      bubbles: true
    }));
  }

  changeTheme(event) {
    if(!event.detail.accents) {
      return;
    }
    for(let key in event.detail.accents) {
      this.style.setProperty(`--color-${key}`, event.detail.accents[key]);
    }
  }
}


/***/ }),

/***/ "./src/lib/ThemeSwitcher/themes.js":
/*!*****************************************!*\
  !*** ./src/lib/ThemeSwitcher/themes.js ***!
  \*****************************************/
/*! exports provided: baseAccents, themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseAccents", function() { return baseAccents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
const baseAccents = {
  base: 'white',
  basetransp: 'rgba(255,255,255,.5)',
  text: 'black',
  texttransp: 'rgba(0,0,0,.5)',
  hover: 'aqua',
  focus: 'orangered',
  focushover: 'gold'
};

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
    name: 'White',
    colors: ['#FFF'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Gray',
    colors: ['#333']
  },
  {
    name: 'Black',
    colors: ['#000'],
  },
];


/***/ }),

/***/ "./src/lib/ThemeSwitcher/tmpl.js":
/*!***************************************!*\
  !*** ./src/lib/ThemeSwitcher/tmpl.js ***!
  \***************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      position: relative
      min-width: 3rem;
      height: 4rem;

      --color-base: white;
      --color-basetransp: rgba(255,255,255,.5);
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
      background: var(--color-basetransp);
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
      box-shadow: 0 0 0 2px currentColor inset,
        0 0 4px 2px rgba(0,0,0,.25);
      cursor: pointer;
      transition: margin .45s;
      transition-property: box-shadow, margin;
    }

    .control:not(control--current) {

    }

    .control:last-child {
      margin-right: 0 !important;
    }

    .control:focus {
      outline: none;
      box-shadow: 0 0 0 4px currentColor inset,
        0 0 0 4px var(--color-basetransp);
    }

    .controls--collapsed .control {
      margin-right: -3rem;
      box-shadow: 0 0 0 2px currentColor inset;
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
      border: 1px dashed var(--color-base);
      animation: rotation 4s linear infinite;
      animation-play-state: paused;
    }

    .control--current:focus::after {
      content: none;
    }

    .controls--collapsed:hover .control--current {
      box-shadow: 0 0 0 2px var(--color-base) inset;
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9UaGVtZVN3aXRjaGVyL3RoZW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIvdG1wbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ0o7QUFDTTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELElBQUk7QUFDaEU7QUFDQTs7QUFFQSxtREFBbUQsK0RBQWU7QUFDbEUsaURBQWlELDZEQUFhO0FBQzlELGlEQUFpRCxtRUFBYTtBQUM5RCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDckNEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLFVBQVU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLEtBQUs7QUFDZCxTQUFTLE1BQU07QUFDZjtBQUNBO0FBQ0EsVUFBVSxRQUFRLEdBQUcsUUFBUSxHQUFHLEVBQUUsR0FBRyxFQUFFOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7O0FBRUEsU0FBUyxLQUFLO0FBQ2QsU0FBUyxNQUFNOztBQUVmO0FBQ0E7QUFDQSxVQUFVLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUU7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixpQkFBaUI7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQy9UQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0JBQXNCO0FBQ2pFLDRDQUE0Qyx1QkFBdUI7O0FBRW5FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUMsVUFBVSxrQkFBa0I7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHNEQUFzRCxzQkFBc0I7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFSQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNiOztBQUVwQjtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBLDBCQUEwQixpREFBUTtBQUNsQztBQUNBLHNEQUFzRCxpREFBTTtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBTTtBQUNWO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVc7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0IsaUJBQWlCLFdBQVc7QUFDNUIsc0JBQXNCLE1BQU07QUFDNUIsNkJBQTZCLE9BQU8sVUFBVSxNQUFNO0FBQ3BELHlDQUF5QyxXQUFXO0FBQ3BEOztBQUVBO0FBQ0EsMERBQTBELGlCQUFpQjtBQUMzRSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQU07QUFDeEI7QUFDQSxzQkFBc0Isc0RBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTbm93Rmxha2VFZGl0b3IgZnJvbSAnLi9saWIvU25vd0ZsYWtlRWRpdG9yLmpzJztcbmltcG9ydCBTbm93Rmxha2VWaWV3IGZyb20gJy4vbGliL1Nub3dGbGFrZVZpZXcuanMnO1xuaW1wb3J0IFRoZW1lU3dpdGNoZXIgZnJvbSAnLi9saWIvVGhlbWVTd2l0Y2hlci9pbmRleC5qcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgKGV2ZW50KSA9PiB7XG4gICAgY2hhbmdlVGhlbWUoZXZlbnQpO1xuICB9KTtcblxuICBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVRoZW1lKGV2ZW50KSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0QmFja2dyb3VuZFN0cihldmVudC5kZXRhaWwuY29sb3JzKVxuXG4gICAgaWYoIWV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBrZXkgaW4gZXZlbnQuZGV0YWlsLmFjY2VudHMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tY29sb3ItJHtrZXl9YCwgZXZlbnQuZGV0YWlsLmFjY2VudHNba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc25vd2ZsYWtlLWVkaXRvcicsIFNub3dGbGFrZUVkaXRvcik7XG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Nub3dmbGFrZS12aWV3JywgU25vd0ZsYWtlVmlldyk7XG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RoZW1lLXN3aXRjaGVyJywgVGhlbWVTd2l0Y2hlcik7XG59KSgpO1xuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogNTIwcHg7XG4gICAgfVxuXG4gICAgOmhvc3Q6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICA6aG9zdCBzdmcge1xuICAgICAgd2lkdGg6IDUyMHB4O1xuICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICB9XG5cbiAgICBwYXRoIHtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZSB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwYXRoOmhvdmVyIHtcbiAgICAgIHN0cm9rZTogYXF1YTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuc2xpY2UtdGlwIHtcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5cbiAgICAuaGlnaGxpZ2h0IHtcbiAgICAgIHN0cm9rZTogb3JhbmdlcmVkO1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0OmhvdmVyIHtcbiAgICAgIHN0cm9rZTogY3JpbXNvbjtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAuY29udHJvbCB7XG4gICAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhc2UpO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgICB9XG4gICAgLmNvbnRyb2w6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4IHZhcigtLWNvbG9yLWJhc2UpIGluc2V0O1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICAgIH1cbiAgICAuY29udHJvbDpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dHRyYW5zcCk7XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPHN2ZyBjbGFzcz1cInNub3dmbGFrZVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2MCAzMDBcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8cGF0aCBpZD1cInNsaWNlLXNoYXBlXCIgZD1cIk0xMzAuMSwzMDAuNSwgMTMwLjEsMCwgMCw3NXpcIj48L3BhdGg+XG5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwic2xpY2UtY2xpcC1wYXRoXCI+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlLXNoYXBlXCIvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuXG4gICAgICA8IS0tIFNoYXBlIGZvciBtZWFzdXJpbmcgU1ZHIHNjYWxpbmcgLS0+XG4gICAgICA8cmVjdCBpZD1cIm1lYXN1cmUtcmVjdFwiXG4gICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIHg9XCIwXCIgeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPjwvcmVjdD5cblxuICAgICAgPHRleHQgY2xhc3M9XCJzbGljZS10aXBcIlxuICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICB5PVwiNjJcIiB4PVwiMzBcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgtMzApXCI+UGFpbnQgaGVyZTwvdGV4dD5cblxuICAgICAgPGcgaWQ9XCJzbGljZVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgIDwhLS0gQ29udG91ciAtLT5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlLXNoYXBlXCJcbiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiNSAyLjVcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIi41XCJcbiAgICAgICAgICBzdHJva2Utb3BhY2l0eT1cIi41XCIvPlxuICAgICAgICA8IS0tIENsaXBwZWQgc2xpY2UgY29udGVudCAtLT5cbiAgICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNzbGljZS1jbGlwLXBhdGgpXCJcbiAgICAgICAgICBpZD1cInRhcmdldC1ncm91cFwiXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNVwiPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG5cbiAgICAgIDwhLS0gTWlycm9yZWQgc2xpY2UgdG8gc2hvdyBzeW1tZXRyeSAtLT5cbiAgICAgIDx1c2VcbiAgICAgICAgeGxpbms6aHJlZj1cIiNzbGljZVwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNjAsMCkgc2NhbGUoLTEsMSlcIlxuICAgICAgICBzdHlsZT1cIm9wYWNpdHk6LjI1XCJcbiAgICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWNsZWFyXCI+Q2xlYXI8L2J1dHRvbj5cbiAgPC9kaXY+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbm93Rmxha2VFZGl0b3IgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuc25vd2ZsYWtlID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UnKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJyN0YXJnZXQtZ3JvdXAnKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhciA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tY2xlYXInKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhci5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5zY2FsZSA9IHRoaXMuZ2V0U2NhbGUoKTtcbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgICB0aGlzLnBhdGhzQ291bnRlciA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9O1xuXG4gICAgdGhpcy50YXJnZXRHcm91cE1vdXNlRG93biA9IHRoaXMudGFyZ2V0R3JvdXBNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsZWFyID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudW5zZWxlY3QgPSB0aGlzLnVuc2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VVcCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VNb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlLZXlVcCA9IHRoaXMuYm9keUtleVVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNub3dmbGFrZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bik7XG4gICAgdGhpcy5zbm93Zmxha2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcCk7XG4gICAgLy8gQ2F0Y2ggZXZlbnRzIGZvciBwYXRoIGluc2lkZSBwYXRocyBncm91cFxuICAgIHRoaXMudGFyZ2V0R3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy50YXJnZXRHcm91cE1vdXNlRG93bik7XG5cbiAgICB0aGlzLmNvbnRyb2xDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXIpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmJvZHlLZXlVcCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNub3dmbGFrZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bik7XG4gICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcCk7XG4gICAgdGhpcy50YXJnZXRHcm91cC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duKTtcbiAgICB0aGlzLmNvbnRyb2xDbGVhci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5ib2R5S2V5VXApO1xuICB9XG5cbiAgZ2V0TW91c2VPZmZzZXQoZXZlbnQpIHtcbiAgICBsZXQge2xlZnQsIHRvcH0gPSB0aGlzLnNub3dmbGFrZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBzY2FsZSAqIChldmVudC5jbGllbnRYIC0gbGVmdCksXG4gICAgICB5OiBzY2FsZSAqIChldmVudC5jbGllbnRZIC0gdG9wKVxuICAgIH07XG4gIH1cblxuICBib2R5S2V5VXAoZXZlbnQpIHtcbiAgICBpZihldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSB7XG4gICAgICB0aGlzLnJlbW92ZVBhdGhzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gU3RhcnQgZHJhdyBsaW5lLCBjcmVhdGUgcGF0aFxuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5nZXRNb3VzZU9mZnNldChldmVudCk7XG4gICAgdGhpcy5wYXRoID0ge1xuICAgICAgZWxlbSxcbiAgICAgIHN0YXJ0XG4gICAgfTtcblxuICAgIHRoaXMudGFyZ2V0R3JvdXAuYXBwZW5kKGVsZW0pO1xuXG4gICAgdGhpcy5zbm93Zmxha2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICB9XG5cbiAgbW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgLy8gTW92ZSBwYXRoIGVuZCB0byBwb2ludGVyIGNvb3JkaW5hdGVzXG4gICAgbGV0IHt4LCB5fSA9IHRoaXMuZ2V0TW91c2VPZmZzZXQoZXZlbnQpO1xuICAgIGxldCB7c3RhcnR9ID0gdGhpcy5wYXRoO1xuICAgIHRoaXMucGF0aC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHtzdGFydC54fSwke3N0YXJ0Lnl9ICR7eH0sJHt5fWApO1xuXG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gIH1cblxuICBtb3VzZVVwKGV2ZW50KSB7XG4gICAgLy8gUHJldmVudCBmaXJlIGV2ZW50IG9uIHBhcmVudFxuICAgIC8vIGFmdGVyIGhhbmRsaW5nIHBhdGggYnkgY2hpbGRcbiAgICBpZighdGhpcy5wYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2F0Y2ggY2xpY2sgdG8gaGlnaGxpZ2h0IHBhdGhcbiAgICBpZih0aGlzLmNsaWNrZWRQYXRoKSB7XG4gICAgICB0aGlzLm1vdXNlQ2xpY2tQYXRoKCk7XG5cbiAgICAgIC8vIFJlbW92ZSBsYXRlc3QgcGF0aFxuICAgICAgdGhpcy5wYXRoLmVsZW0ucmVtb3ZlKCk7XG4gICAgICB0aGlzLnNub3dmbGFrZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51bnNlbGVjdCgpO1xuXG4gICAgLy8gT3IgZml4IG5ldyBwYXRoXG4gICAgdGhpcy5wYXRoLmVsZW0uaWQgPSBgcGF0aC0ke3RoaXMucGF0aHNDb3VudGVyfWA7XG4gICAgdGhpcy5wYXRoc0NvdW50ZXIrKztcblxuICAgIGxldCB7eCwgeX0gPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcbiAgICBsZXQge3N0YXJ0fSA9IHRoaXMucGF0aDtcblxuICAgIHRoaXMucGF0aC5lbGVtLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHtzdGFydC54fSwke3N0YXJ0Lnl9ICR7eH0sJHt5fWApO1xuXG4gICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICB9XG5cbiAgbW91c2VDbGlja1BhdGgoKSB7XG4gICAgY29uc3QgcGF0aElkID0gdGhpcy5jbGlja2VkUGF0aC5pZDtcbiAgICAgIHRoaXMuY2xpY2tlZFBhdGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlnaGxpZ2h0Jyk7XG5cbiAgICAgIGlmKHRoaXMuY2xpY2tlZFBhdGguY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHQnKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW3BhdGhJZF0gPSB0aGlzLmNsaWNrZWRQYXRoO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW3BhdGhJZF07XG4gICAgfVxuXG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZSgpIHtcbiAgICBjb25zdCBwYXRoU3RyID0gdGhpcy5nZXRTaW5nbGVQYXRoU3RyKCk7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIuZGlzYWJsZWQgPSAhcGF0aFN0cjtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UtdmlldycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBncm91cENvbnRlbnQ6IHBhdGhTdHJcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIGdldFNpbmdsZVBhdGhTdHIoKSB7XG4gICAgdGhpcy50YXJnZXRHcm91cC5jaGlsZHJlbi5tYXAgPSBbXS5tYXA7XG4gICAgbGV0IHNpbmdsZVBhdGhDb29yZHMgPSAnJztcblxuICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLnRhcmdldEdyb3VwLmNoaWxkcmVuKSB7XG4gICAgICBzaW5nbGVQYXRoQ29vcmRzICs9IGAgJHtpdGVtLmdldEF0dHJpYnV0ZSgnZCcpfWA7XG4gICAgfVxuXG4gICAgaWYoIXNpbmdsZVBhdGhDb29yZHMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gYDxwYXRoIGQ9XCIke3NpbmdsZVBhdGhDb29yZHN9XCIvPmA7XG4gIH1cblxuICB0YXJnZXRHcm91cE1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBldmVudC50YXJnZXQ7XG4gIH1cblxuICB1bnNlbGVjdCgpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVBhdGhzKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW2tleV0ucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnRhcmdldEdyb3VwLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fTtcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gIH1cblxuICAvLyBSZXR1cm4gc2NhbGUgdmFsdWUgaWYgc3ZnIHdhcyByZXNpemVkXG4gIGdldFNjYWxlKCkge1xuICAgIGNvbnN0IG1lYXN1cmVQYXRoID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCdtZWFzdXJlLXJlY3QnKTtcbiAgICBjb25zdCB3aWR0aCA9IG1lYXN1cmVQYXRoLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICBjb25zdCByZWN0ID0gbWVhc3VyZVBhdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICByZXR1cm4gd2lkdGggLyByZWN0LndpZHRoO1xuICB9XG5cbn1cbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIDpob3N0IC5jb250b3VyIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBzdHJva2Utb3BhY2l0eTogLjU7XG4gICAgICB0cmFuc2l0aW9uOiBzdHJva2Utb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAuY29udHJvbCB7XG4gICAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhc2UpO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgICB9XG4gICAgLmNvbnRyb2w6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4IHZhcigtLWNvbG9yLWJhc2UpIGluc2V0O1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICAgIH1cbiAgICAuY29udHJvbDpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogLjU7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dHRyYW5zcCk7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzX19kb3dubG9hZHMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwibG9hZGluZ1wiXSAuY29udHJvbC0tZ2V0LFxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2wtLWdldCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cImxvYWRpbmdcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMsXG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbHNfX2Rvd25sb2FkcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5jb250cm9sICsgLmNvbnRyb2wge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzX19kb3dubG9hZHMgLmNvbnRyb2wge1xuICAgICAgb3BhY2l0eTogLjI7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPHN2ZyBjbGFzcz1cImNvbnRvdXJcIiB2aWV3Qm94PVwiLTIwIDAgNjQwIDYwMFwiPlxuICAgICAgPGNpcmNsZSByPVwiMzAwXCIgY3g9XCIzMDBcIiBjeT1cIjMwMFwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk9XCIxMCA1XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMVwiXG4gICAgICAgIGZpbGw9XCJub25lXCIvPlxuICAgIDwvc3ZnPlxuXG4gICAgPHN2ZyBjbGFzcz1cInNub3dmbGFrZVwiXG4gICAgICB2aWV3Qm94PVwiLTIwIDAgNjQwIDYwMFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxwYXRoIGlkPVwic2xpY2Utc2hhcGVcIiBkPVwiTTEzMC4xLDMwMC41LCAxMzAuMSwwLCAwLDc1elwiPjwvcGF0aD5cblxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJzbGljZS1jbGlwLXBhdGhcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2Utc2hhcGVcIi8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG5cbiAgICAgICAgPHN5bWJvbCBpZD1cInNsaWNlXCI+XG4gICAgICAgICAgPCEtLSBDbGlwcGVkIHNsaWNlIGNvbnRlbnQgLS0+XG4gICAgICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNzbGljZS1jbGlwLXBhdGgpXCJcbiAgICAgICAgICAgIGlkPVwidGFyZ2V0LWdyb3VwXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjVcIj5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ltYm9sPlxuXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJwYWlyLXNsaWNlc1wiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNzApXCI+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2VcIi8+XG4gICAgICAgICAgICA8IS0tIE1pcnJvcmVkIHNsaWNlIHRvIHNob3cgc3ltbWV0cnkgLS0+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjc2xpY2VcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYwLDApIHNjYWxlKC0xLDEpXCIvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zeW1ib2w+XG4gICAgICA8L2RlZnM+XG5cbiAgICAgIDwhLS0gVmlzaWJsZSBzbm93Zmxha2UgLS0+XG4gICAgICA8Zz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoOTAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDIxMCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwLCAzMDAsIDMwMClcIi8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWdldFwiPkdldCBzbm93Zmxha2U8L2J1dHRvbj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fZG93bmxvYWRzXCI+XG4gICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWRvd25sb2FkLXN2Z1wiPkRvd25sb2FkIFNWRzwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1kb3dubG9hZC1wbmdcIj5Eb3dubG9hZCBQTkc8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0ZsYWtlVmlldyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy50YXJnZXRHcm91cCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0LWdyb3VwJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHRoaXMuc25vd2ZsYWtlID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zbm93Zmxha2UnKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgIHRoaXMuY29udHJvbEdldCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZ2V0Jyk7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxpbmtzID0ge1xuICAgICAgcG5nOiB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWRvd25sb2FkLXBuZycpLFxuICAgICAgc3ZnOiB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWRvd25sb2FkLXN2ZycpXG4gICAgfTtcbiAgICB0aGlzLnRoZW1lID0gW1xuICAgICAgJyMyNTNCNTknLFxuICAgICAgJ3R1cnF1b2lzZSdcbiAgICBdO1xuICAgIHRoaXMuYWNjZW50cyA9IHtcbiAgICAgIGJhc2U6ICcjRkZGJ1xuICAgIH07XG5cbiAgICB0aGlzLm91dHB1dFN0eWxlID0gdGhpcy5nZXRTdHlsZVN0cigpO1xuXG4gICAgdGhpcy5jaGFuZ2VWaWV3ID0gdGhpcy5jaGFuZ2VWaWV3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUaGVtZSA9IHRoaXMuY2hhbmdlVGhlbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByZXBhcmVJbWFnZXMgPSB0aGlzLnByZXBhcmVJbWFnZXMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZmluYWxTaXplcyA9IHtcbiAgICAgIHdpZHRoOiA4MDAsXG4gICAgICBoZWlnaHQ6IDgwMFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdmlldycsIHRoaXMuY2hhbmdlVmlldyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gICAgdGhpcy5jb250cm9sR2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmVwYXJlSW1hZ2VzKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZS12aWV3JywgdGhpcy5jaGFuZ2VWaWV3KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCB0aGlzLmNoYW5nZVRoZW1lKTtcbiAgICB0aGlzLmNvbnRyb2xHZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXBhcmVJbWFnZXMpO1xuICB9XG5cbiAgY2hhbmdlVmlldyhldmVudCkge1xuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MID0gZXZlbnQuZGV0YWlsLmdyb3VwQ29udGVudDtcbiAgICB0aGlzLmNvbnRyb2xHZXQuZGlzYWJsZWQgPSAhdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUw7XG4gIH1cblxuICBjaGFuZ2VUaGVtZShldmVudCkge1xuICAgIGlmKGV2ZW50LmRldGFpbCAmJiBldmVudC5kZXRhaWwuY29sb3JzKSB7XG4gICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICAgIHRoaXMudGhlbWUgPSBldmVudC5kZXRhaWwuY29sb3JzO1xuICAgICAgdGhpcy5hY2NlbnRzID0gZXZlbnQuZGV0YWlsLmFjY2VudHM7XG4gICAgICB0aGlzLm91dHB1dFN0eWxlID0gdGhpcy5nZXRTdHlsZVN0cigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVJbWFnZXMoKSB7XG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZmluYWxTVkcgPSB0aGlzLnNub3dmbGFrZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGhpcy5maW5hbFNWRy5zdHlsZSA9IHRoaXMub3V0cHV0U3R5bGU7XG4gICAgLy8gRml4IHBhaW50IFNWRyBvbiBjYW52YXMgaW4gRmlyZWZveFxuICAgIHRoaXMuZmluYWxTVkcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3RoaXMuZmluYWxTaXplcy53aWR0aH1weGApO1xuICAgIHRoaXMuZmluYWxTVkcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHt0aGlzLmZpbmFsU2l6ZXMuaGVpZ2h0fXB4YCk7XG5cbiAgICB0aGlzLnByZXBhcmVQbmcoKTtcbiAgICB0aGlzLnByZXBhcmVTdmcoKTtcbiAgfVxuXG4gIGdldEJhY2tncm91bmRTdHIoY29sb3JzTGlzdCkge1xuICAgIGxldCBiZ1N0ciA9ICcnO1xuXG4gICAgaWYoY29sb3JzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJnU3RyID0gY29sb3JzTGlzdFswXVxuICAgICAgcmV0dXJuIGJnU3RyO1xuICAgIH1cblxuICAgIGJnU3RyID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3JzTGlzdC5qb2luKCcsJyl9KWA7XG4gICAgcmV0dXJuIGJnU3RyO1xuICB9XG5cbiAgZ2V0U3R5bGVTdHIoKSB7XG4gICAgcmV0dXJuIGBiYWNrZ3JvdW5kOiAke3RoaXMuZ2V0QmFja2dyb3VuZFN0cih0aGlzLnRoZW1lKX07IGNvbG9yOiAke3RoaXMuYWNjZW50cy5iYXNlfWA7XG4gIH1cblxuICBwcmVwYXJlUG5nKCkge1xuICAgIGNvbnN0IHhtbCA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcodGhpcy5maW5hbFNWRyk7XG4gICAgY29uc3Qgc3ZnNjQgPSBidG9hKHhtbCk7XG4gICAgY29uc3QgYjY0U3RhcnQgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnO1xuICAgIGNvbnN0IGltYWdlNjQgPSBiNjRTdGFydCArIHN2ZzY0O1xuXG4gICAgY29uc3QgaW1nT2JqID0gbmV3IEltYWdlKCk7XG4gICAgaW1nT2JqLnNyYyA9IGltYWdlNjQ7XG4gICAgaW1nT2JqLndpZHRoID0gdGhpcy5maW5hbFNpemVzLndpZHRoO1xuICAgIGltZ09iai5oZWlnaHQgPSB0aGlzLmZpbmFsU2l6ZXMuaGVpZ2h0O1xuXG4gICAgaW1nT2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuZmluYWxTaXplcy53aWR0aDtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuZmluYWxTaXplcy5oZWlnaHQ7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nT2JqLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgdGhpcy5jYW52YXMudG9CbG9iKChibG9iKSA9PiB7XG4gICAgICAgIGxldCBVUkxPYmogPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgICAgIHRoaXMubGlua3MucG5nLmhyZWYgPSBVUkxPYmouY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICB0aGlzLmxpbmtzLnBuZy5kb3dubG9hZCA9ICdzbm93Zmxha2UucG5nJztcblxuICAgICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgcHJlcGFyZVN2ZygpIHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3RoaXMuZmluYWxTVkcub3V0ZXJIVE1MXSwge3R5cGU6ICdpbWFnZS9zdmcreG1sJ30pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgdGhpcy5saW5rcy5zdmcuaHJlZiA9IHVybDtcbiAgICB0aGlzLmxpbmtzLnN2Zy5kb3dubG9hZCA9ICdzbm93Zmxha2Uuc3ZnJztcblxuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdyZWFkeSc7XG4gIH1cbn1cbiIsImltcG9ydCB7dGhlbWVzLCBiYXNlQWNjZW50c30gZnJvbSAnLi90aGVtZXMuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZX0gZnJvbSAnLi90bXBsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTd2l0Y2hlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoZW1lcy5sZW5ndGgpO1xuICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IG51bGw7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGNvbGxhcHNlZDogJ2NvbnRyb2xzLS1jb2xsYXBzZWQnLFxuICAgICAgY3VycmVudDogJ2NvbnRyb2wtLWN1cnJlbnQnXG4gICAgfVxuXG4gICAgdGhpcy5hZGRDb250cm9scygpO1xuXG4gICAgdGhpcy5vbkNvbnRyb2xDbGljayA9IHRoaXMub25Db250cm9sQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVRoZW1lID0gdGhpcy5jaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VQYW5lbCA9IHRoaXMuY2xvc2VQYW5lbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoKSB7XG4gICAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGJnU3RyID0gdGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoZW1lLmNvbG9ycyk7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gJ2NvbnRyb2wnO1xuICAgICAgbGV0IGNvbG9yID0gYmFzZUFjY2VudHMuYmFzZTtcbiAgICAgIGlmKHRoZW1lLmFjY2VudHMpIHtcbiAgICAgICAgY29sb3IgPSB0aGVtZS5hY2NlbnRzLmJhc2U7XG4gICAgICB9XG5cbiAgICAgIGlmKGluZGV4ID09PSB0aGlzLmN1cnJlbnRUaGVtZU51bSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyBjb250cm9sLS1jdXJyZW50JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udHJvbFN0ciA9IGA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiXG4gICAgICAgIHRpdGxlPVwiJHt0aGVtZS5uYW1lfVwiXG4gICAgICAgIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZDogJHtiZ1N0cn07IGNvbG9yOiAke2NvbG9yfVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHloaWRkZW5cIj4ke3RoZW1lLm5hbWV9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5gO1xuXG4gICAgICB0aGlzLmNvbnRyb2xzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgY29udHJvbFN0cik7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbHMuY3VycmVudH1gKTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbnRyb2xDbGljayk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUGFuZWwpO1xuXG4gICAgLy8gU2V0IGN1cnJlbnQgdGhlbWUgdG8gcGFnZSAmIGNvbXBvbmVudFxuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2VUaGVtZSgpO1xuICB9XG5cbiAgb25Db250cm9sQ2xpY2soZXZlbnQpIHtcbiAgICBpZih0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50VGhlbWVOdW0gPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2VUaGVtZSgpO1xuXG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNscy5jdXJyZW50KTtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xzLmN1cnJlbnQpO1xuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICB0aGlzLmNsb3NlUGFuZWwoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlUGFuZWwoZXZlbnQpIHtcbiAgICBpZihldmVudC50YXJnZXQgPT09IHRoaXMgfHwgdGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgIHRoaXMuY29udHJvbHMuY2xhc3NMaXN0LmFkZCh0aGlzLmNscy5jb2xsYXBzZWQpO1xuICB9XG5cbiAgZGlzcGF0Y2hDaGFuZ2VUaGVtZSgpIHtcbiAgICBjb25zdCB0aGVtZSA9IHRoZW1lc1t0aGlzLmN1cnJlbnRUaGVtZU51bV07XG4gICAgaWYoIXRoZW1lLmFjY2VudHMpIHtcbiAgICAgIHRoZW1lLmFjY2VudHMgPSBiYXNlQWNjZW50cztcbiAgICB9XG4gICAgdGhpcy5jb250cm9scy5zdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JzWzBdO1xuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZS10aGVtZScsIHtcbiAgICAgIGRldGFpbDogdGhlbWUsXG4gICAgICBidWJibGVzOiB0cnVlXG4gICAgfSkpO1xuICB9XG5cbiAgY2hhbmdlVGhlbWUoZXZlbnQpIHtcbiAgICBpZighZXZlbnQuZGV0YWlsLmFjY2VudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yKGxldCBrZXkgaW4gZXZlbnQuZGV0YWlsLmFjY2VudHMpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoYC0tY29sb3ItJHtrZXl9YCwgZXZlbnQuZGV0YWlsLmFjY2VudHNba2V5XSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgYmFzZUFjY2VudHMgPSB7XG4gIGJhc2U6ICd3aGl0ZScsXG4gIGJhc2V0cmFuc3A6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KScsXG4gIHRleHQ6ICdibGFjaycsXG4gIHRleHR0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGhvdmVyOiAnYXF1YScsXG4gIGZvY3VzOiAnb3JhbmdlcmVkJyxcbiAgZm9jdXNob3ZlcjogJ2dvbGQnXG59O1xuXG5leHBvcnQgY29uc3QgdGhlbWVzID0gW1xuICB7XG4gICAgbmFtZTogJ1NlYScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzAyMkU0MCcsXG4gICAgICAgICd0ZWFsJyxcbiAgICAgICAgJ3R1cnF1b2lzZScsXG4gICAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTm9ydGggU2t5JyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMjUzQjU5JyxcbiAgICAgICAgJyM5NkQ5QzYnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RlZXAgTmlnaHQnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwMTE1MjYnLFxuICAgICAgICAnIzAyMkU0MCcsXG4gICAgICAgICcjMDc0QTU5JyxcbiAgICAgICAgJyMyNjY1NzMnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RlZXAgU3BhY2UnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwNzEyMTgnLFxuICAgICAgICAnIzFFNTI3NydcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdGVlbGJsdWUnLFxuICAgIGNvbG9yczogWydzdGVlbGJsdWUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1RlYWwnLFxuICAgIGNvbG9yczogWyd0ZWFsJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEYXJrc2xhdGVibHVlJyxcbiAgICBjb2xvcnM6IFsnZGFya3NsYXRlYmx1ZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5kaWFucmVkJyxcbiAgICBjb2xvcnM6IFsnaW5kaWFucmVkJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGaXJlYnJpY2snLFxuICAgIGNvbG9yczogWydmaXJlYnJpY2snXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B1cnBsZScsXG4gICAgY29sb3JzOiBbJ3B1cnBsZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV2hpdGUnLFxuICAgIGNvbG9yczogWycjRkZGJ10sXG4gICAgYWNjZW50czoge1xuICAgICAgLi4uYmFzZUFjY2VudHMsXG4gICAgICBiYXNlOiAnIzAwMCcsXG4gICAgICBiYXNldHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICAgICAgdGV4dDogJyNGRkYnLFxuICAgICAgdGV4dHRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHcmF5JyxcbiAgICBjb2xvcnM6IFsnIzMzMyddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQmxhY2snLFxuICAgIGNvbG9yczogWycjMDAwJ10sXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDRyZW07XG5cbiAgICAgIC0tY29sb3ItYmFzZTogd2hpdGU7XG4gICAgICAtLWNvbG9yLWJhc2V0cmFuc3A6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIH1cblxuICAgIC52aXN1YWxseWhpZGRlbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYXNldHJhbnNwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yIGluc2V0LFxuICAgICAgICAwIDAgNHB4IDJweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjQ1cztcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIG1hcmdpbjtcbiAgICB9XG5cbiAgICAuY29udHJvbDpub3QoY29udHJvbC0tY3VycmVudCkge1xuXG4gICAgfVxuXG4gICAgLmNvbnRyb2w6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29udHJvbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IGN1cnJlbnRDb2xvciBpbnNldCxcbiAgICAgICAgMCAwIDAgNHB4IHZhcigtLWNvbG9yLWJhc2V0cmFuc3ApO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkIC5jb250cm9sIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTNyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yIGluc2V0O1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtLjI1cmVtO1xuICAgICAgcmlnaHQ6IC0uMjVyZW07XG4gICAgICBib3R0b206IC0uMjVyZW07XG4gICAgICBsZWZ0OiAtLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNvbG9yLWJhc2UpO1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA0cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OmZvY3VzOjphZnRlciB7XG4gICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1jb2xvci1iYXNlKSBpbnNldDtcbiAgICB9XG4gICAgLmNvbnRyb2xzLS1jb2xsYXBzZWQ6aG92ZXIgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgICAgIH1cbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzIGNvbnRyb2xzLS1jb2xsYXBzZWRcIj48L2Rpdj5cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9