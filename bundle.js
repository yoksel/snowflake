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
      transition: all var(--transition);
      box-shadow: 0 0 0 2px transparent inset;
      text-decoration: none;
      color: var(--color-text);
      font: inherit;
      cursor: pointer;
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
      transition: all var(--transition);
      box-shadow: 0 0 0 2px transparent inset;
      text-decoration: none;
      color: var(--color-text);
      font: inherit;
      cursor: pointer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU25vd0ZsYWtlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9UaGVtZVN3aXRjaGVyL3RoZW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIvdG1wbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ0o7QUFDTTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FB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Ozs7Ozs7O0FDaFVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgU25vd0ZsYWtlRWRpdG9yIGZyb20gJy4vbGliL1Nub3dGbGFrZUVkaXRvci5qcyc7XG5pbXBvcnQgU25vd0ZsYWtlVmlldyBmcm9tICcuL2xpYi9Tbm93Rmxha2VWaWV3LmpzJztcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vbGliL1RoZW1lU3dpdGNoZXIvaW5kZXguanMnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsIChldmVudCkgPT4ge1xuICAgIGNoYW5nZVRoZW1lKGV2ZW50KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VUaGVtZShldmVudCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhY2tncm91bmRTdHIoZXZlbnQuZGV0YWlsLmNvbG9ycylcblxuICAgIGlmKCFldmVudC5kZXRhaWwuYWNjZW50cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQga2V5IGluIGV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLWNvbG9yLSR7a2V5fWAsIGV2ZW50LmRldGFpbC5hY2NlbnRzW2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Nub3dmbGFrZS1lZGl0b3InLCBTbm93Rmxha2VFZGl0b3IpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbm93Zmxha2UtdmlldycsIFNub3dGbGFrZVZpZXcpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0aGVtZS1zd2l0Y2hlcicsIFRoZW1lU3dpdGNoZXIpO1xufSkoKTtcbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDUyMHB4O1xuICAgIH1cblxuICAgIDpob3N0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgOmhvc3Qgc3ZnIHtcbiAgICAgIHdpZHRoOiA1MjBweDtcbiAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgfVxuXG4gICAgcGF0aCB7XG4gICAgICB0cmFuc2l0aW9uOiBzdHJva2UgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgcGF0aDpob3ZlciB7XG4gICAgICBzdHJva2U6IGFxdWE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnNsaWNlLXRpcCB7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhpZ2hsaWdodCB7XG4gICAgICBzdHJva2U6IG9yYW5nZXJlZDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodDpob3ZlciB7XG4gICAgICBzdHJva2U6IGNyaW1zb247XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgcGFkZGluZzogLjI1cmVtIDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5jb250cm9sOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogIDAgMCAwIDJweCB2YXIoLS1jb2xvci1iYXNlKSBpbnNldDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgICB9XG4gICAgLmNvbnRyb2w6ZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHR0cmFuc3ApO1xuICAgIH1cbiAgPC9zdHlsZT5cblxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgIDxzdmcgY2xhc3M9XCJzbm93Zmxha2VcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNjAgMzAwXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHBhdGggaWQ9XCJzbGljZS1zaGFwZVwiIGQ9XCJNMTMwLjEsMzAwLjUsIDEzMC4xLDAsIDAsNzV6XCI+PC9wYXRoPlxuXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cInNsaWNlLWNsaXAtcGF0aFwiPlxuICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNzbGljZS1zaGFwZVwiLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cblxuICAgICAgPCEtLSBTaGFwZSBmb3IgbWVhc3VyaW5nIFNWRyBzY2FsaW5nIC0tPlxuICAgICAgPHJlY3QgaWQ9XCJtZWFzdXJlLXJlY3RcIlxuICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICB4PVwiMFwiIHk9XCIwXCJcbiAgICAgICAgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj48L3JlY3Q+XG5cbiAgICAgIDx0ZXh0IGNsYXNzPVwic2xpY2UtdGlwXCJcbiAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgeT1cIjYyXCIgeD1cIjMwXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoLTMwKVwiPlBhaW50IGhlcmU8L3RleHQ+XG5cbiAgICAgIDxnIGlkPVwic2xpY2VcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICA8IS0tIENvbnRvdXIgLS0+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNzbGljZS1zaGFwZVwiXG4gICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheT1cIjUgMi41XCJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIuNVwiXG4gICAgICAgICAgc3Ryb2tlLW9wYWNpdHk9XCIuNVwiLz5cbiAgICAgICAgPCEtLSBDbGlwcGVkIHNsaWNlIGNvbnRlbnQgLS0+XG4gICAgICAgIDxnIGNsaXAtcGF0aD1cInVybCgjc2xpY2UtY2xpcC1wYXRoKVwiXG4gICAgICAgICAgaWQ9XCJ0YXJnZXQtZ3JvdXBcIlxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjVcIj5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuXG4gICAgICA8IS0tIE1pcnJvcmVkIHNsaWNlIHRvIHNob3cgc3ltbWV0cnkgLS0+XG4gICAgICA8dXNlXG4gICAgICAgIHhsaW5rOmhyZWY9XCIjc2xpY2VcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjYwLDApIHNjYWxlKC0xLDEpXCJcbiAgICAgICAgc3R5bGU9XCJvcGFjaXR5Oi4yNVwiXG4gICAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1jbGVhclwiPkNsZWFyPC9idXR0b24+XG4gIDwvZGl2PlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25vd0ZsYWtlRWRpdG9yIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLnNub3dmbGFrZSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuc25vd2ZsYWtlJyk7XG4gICAgdGhpcy50YXJnZXRHcm91cCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0LWdyb3VwJyk7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWNsZWFyJyk7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gICAgdGhpcy5wYXRoc0NvdW50ZXIgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fTtcblxuICAgIHRoaXMudGFyZ2V0R3JvdXBNb3VzZURvd24gPSB0aGlzLnRhcmdldEdyb3VwTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGVhciA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVuc2VsZWN0ID0gdGhpcy51bnNlbGVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2VEb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlVXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlTW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib2R5S2V5VXAgPSB0aGlzLmJvZHlLZXlVcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5zbm93Zmxha2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd24pO1xuICAgIHRoaXMuc25vd2ZsYWtlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICAgIC8vIENhdGNoIGV2ZW50cyBmb3IgcGF0aCBpbnNpZGUgcGF0aHMgZ3JvdXBcbiAgICB0aGlzLnRhcmdldEdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMudGFyZ2V0R3JvdXBNb3VzZURvd24pO1xuXG4gICAgdGhpcy5jb250cm9sQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5ib2R5S2V5VXApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd24pO1xuICAgIHRoaXMuc25vd2ZsYWtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy50YXJnZXRHcm91cE1vdXNlRG93bik7XG4gICAgdGhpcy5jb250cm9sQ2xlYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuYm9keUtleVVwKTtcbiAgfVxuXG4gIGdldE1vdXNlT2Zmc2V0KGV2ZW50KSB7XG4gICAgbGV0IHtsZWZ0LCB0b3B9ID0gdGhpcy5zbm93Zmxha2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogc2NhbGUgKiAoZXZlbnQuY2xpZW50WCAtIGxlZnQpLFxuICAgICAgeTogc2NhbGUgKiAoZXZlbnQuY2xpZW50WSAtIHRvcClcbiAgICB9O1xuICB9XG5cbiAgYm9keUtleVVwKGV2ZW50KSB7XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0Nikge1xuICAgICAgdGhpcy5yZW1vdmVQYXRocygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihldmVudCkge1xuICAgIC8vIFN0YXJ0IGRyYXcgbGluZSwgY3JlYXRlIHBhdGhcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgIGxldCBzdGFydCA9IHRoaXMuZ2V0TW91c2VPZmZzZXQoZXZlbnQpO1xuICAgIHRoaXMucGF0aCA9IHtcbiAgICAgIGVsZW0sXG4gICAgICBzdGFydFxuICAgIH07XG5cbiAgICB0aGlzLnRhcmdldEdyb3VwLmFwcGVuZChlbGVtKTtcblxuICAgIHRoaXMuc25vd2ZsYWtlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKTtcbiAgfVxuXG4gIG1vdXNlTW92ZShldmVudCkge1xuICAgIC8vIE1vdmUgcGF0aCBlbmQgdG8gcG9pbnRlciBjb29yZGluYXRlc1xuICAgIGxldCB7eCwgeX0gPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcbiAgICBsZXQge3N0YXJ0fSA9IHRoaXMucGF0aDtcbiAgICB0aGlzLnBhdGguZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICBgTSR7c3RhcnQueH0sJHtzdGFydC55fSAke3h9LCR7eX1gKTtcblxuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcChldmVudCkge1xuICAgIC8vIFByZXZlbnQgZmlyZSBldmVudCBvbiBwYXJlbnRcbiAgICAvLyBhZnRlciBoYW5kbGluZyBwYXRoIGJ5IGNoaWxkXG4gICAgaWYoIXRoaXMucGF0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhdGNoIGNsaWNrIHRvIGhpZ2hsaWdodCBwYXRoXG4gICAgaWYodGhpcy5jbGlja2VkUGF0aCkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrUGF0aCgpO1xuXG4gICAgICAvLyBSZW1vdmUgbGF0ZXN0IHBhdGhcbiAgICAgIHRoaXMucGF0aC5lbGVtLnJlbW92ZSgpO1xuICAgICAgdGhpcy5zbm93Zmxha2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudW5zZWxlY3QoKTtcblxuICAgIC8vIE9yIGZpeCBuZXcgcGF0aFxuICAgIHRoaXMucGF0aC5lbGVtLmlkID0gYHBhdGgtJHt0aGlzLnBhdGhzQ291bnRlcn1gO1xuICAgIHRoaXMucGF0aHNDb3VudGVyKys7XG5cbiAgICBsZXQge3gsIHl9ID0gdGhpcy5nZXRNb3VzZU9mZnNldChldmVudCk7XG4gICAgbGV0IHtzdGFydH0gPSB0aGlzLnBhdGg7XG5cbiAgICB0aGlzLnBhdGguZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICBgTSR7c3RhcnQueH0sJHtzdGFydC55fSAke3h9LCR7eX1gKTtcblxuICAgIHRoaXMuc25vd2ZsYWtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKTtcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2UoKTtcbiAgfVxuXG4gIG1vdXNlQ2xpY2tQYXRoKCkge1xuICAgIGNvbnN0IHBhdGhJZCA9IHRoaXMuY2xpY2tlZFBhdGguaWQ7XG4gICAgICB0aGlzLmNsaWNrZWRQYXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgICBpZih0aGlzLmNsaWNrZWRQYXRoLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0JykpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtwYXRoSWRdID0gdGhpcy5jbGlja2VkUGF0aDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtwYXRoSWRdO1xuICAgIH1cblxuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICB9XG5cbiAgZGlzcGF0Y2hDaGFuZ2UoKSB7XG4gICAgY29uc3QgcGF0aFN0ciA9IHRoaXMuZ2V0U2luZ2xlUGF0aFN0cigpO1xuICAgIHRoaXMuY29udHJvbENsZWFyLmRpc2FibGVkID0gIXBhdGhTdHI7XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlLXZpZXcnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgZ3JvdXBDb250ZW50OiBwYXRoU3RyXG4gICAgICB9LFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBnZXRTaW5nbGVQYXRoU3RyKCkge1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuY2hpbGRyZW4ubWFwID0gW10ubWFwO1xuICAgIGxldCBzaW5nbGVQYXRoQ29vcmRzID0gJyc7XG5cbiAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy50YXJnZXRHcm91cC5jaGlsZHJlbikge1xuICAgICAgc2luZ2xlUGF0aENvb3JkcyArPSBgICR7aXRlbS5nZXRBdHRyaWJ1dGUoJ2QnKX1gO1xuICAgIH1cblxuICAgIGlmKCFzaW5nbGVQYXRoQ29vcmRzKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8cGF0aCBkPVwiJHtzaW5nbGVQYXRoQ29vcmRzfVwiLz5gO1xuICB9XG5cbiAgdGFyZ2V0R3JvdXBNb3VzZURvd24oZXZlbnQpIHtcbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gZXZlbnQudGFyZ2V0O1xuICB9XG5cbiAgdW5zZWxlY3QoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRba2V5XS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVQYXRocygpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZSgpO1xuICB9XG5cbiAgLy8gUmV0dXJuIHNjYWxlIHZhbHVlIGlmIHN2ZyB3YXMgcmVzaXplZFxuICBnZXRTY2FsZSgpIHtcbiAgICBjb25zdCBtZWFzdXJlUGF0aCA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnbWVhc3VyZS1yZWN0Jyk7XG4gICAgY29uc3Qgd2lkdGggPSBtZWFzdXJlUGF0aC5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgY29uc3QgcmVjdCA9IG1lYXN1cmVQYXRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgcmV0dXJuIHdpZHRoIC8gcmVjdC53aWR0aDtcbiAgfVxuXG59XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICA6aG9zdCAuY29udG91ciB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgc3Ryb2tlLW9wYWNpdHk6IC41O1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLW9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgcGFkZGluZzogLjI1cmVtIDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5jb250cm9sOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogIDAgMCAwIDJweCB2YXIoLS1jb2xvci1iYXNlKSBpbnNldDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgICB9XG4gICAgLmNvbnRyb2w6ZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHR0cmFuc3ApO1xuICAgIH1cblxuICAgIC5jb250cm9sc19fZG93bmxvYWRzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cImxvYWRpbmdcIl0gLmNvbnRyb2wtLWdldCxcbiAgICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sLS1nZXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJsb2FkaW5nXCJdIC5jb250cm9sc19fZG93bmxvYWRzLFxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuY29udHJvbCArIC5jb250cm9sIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sc19fZG93bmxvYWRzIC5jb250cm9sIHtcbiAgICAgIG9wYWNpdHk6IC4yO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2wge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgPC9zdHlsZT5cblxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgIDxzdmcgY2xhc3M9XCJjb250b3VyXCIgdmlld0JveD1cIi0yMCAwIDY0MCA2MDBcIj5cbiAgICAgIDxjaXJjbGUgcj1cIjMwMFwiIGN4PVwiMzAwXCIgY3k9XCIzMDBcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMTAgNVwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjFcIlxuICAgICAgICBmaWxsPVwibm9uZVwiLz5cbiAgICA8L3N2Zz5cblxuICAgIDxzdmcgY2xhc3M9XCJzbm93Zmxha2VcIlxuICAgICAgdmlld0JveD1cIi0yMCAwIDY0MCA2MDBcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8cGF0aCBpZD1cInNsaWNlLXNoYXBlXCIgZD1cIk0xMzAuMSwzMDAuNSwgMTMwLjEsMCwgMCw3NXpcIj48L3BhdGg+XG5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwic2xpY2UtY2xpcC1wYXRoXCI+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlLXNoYXBlXCIvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuXG4gICAgICAgIDxzeW1ib2wgaWQ9XCJzbGljZVwiPlxuICAgICAgICAgIDwhLS0gQ2xpcHBlZCBzbGljZSBjb250ZW50IC0tPlxuICAgICAgICAgIDxnIGNsaXAtcGF0aD1cInVybCgjc2xpY2UtY2xpcC1wYXRoKVwiXG4gICAgICAgICAgICBpZD1cInRhcmdldC1ncm91cFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI1XCI+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N5bWJvbD5cblxuICAgICAgICA8c3ltYm9sIGlkPVwicGFpci1zbGljZXNcIj5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTcwKVwiPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlXCIvPlxuICAgICAgICAgICAgPCEtLSBNaXJyb3JlZCBzbGljZSB0byBzaG93IHN5bW1ldHJ5IC0tPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3NsaWNlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI2MCwwKSBzY2FsZSgtMSwxKVwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ltYm9sPlxuICAgICAgPC9kZWZzPlxuXG4gICAgICA8IS0tIFZpc2libGUgc25vd2ZsYWtlIC0tPlxuICAgICAgPGc+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDkwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE1MCwgMzAwLCAzMDApXCIvPlxuICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGFpci1zbGljZXNcIlxuICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyMTAsIDMwMCwgMzAwKVwiLz5cbiAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhaXItc2xpY2VzXCJcbiAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMjcwLCAzMDAsIDMwMClcIi8+XG4gICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYWlyLXNsaWNlc1wiXG4gICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMzMCwgMzAwLCAzMDApXCIvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1nZXRcIj5HZXQgc25vd2ZsYWtlPC9idXR0b24+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNfX2Rvd25sb2Fkc1wiPlxuICAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1kb3dubG9hZC1zdmdcIj5Eb3dubG9hZCBTVkc8L2E+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tZG93bmxvYWQtcG5nXCI+RG93bmxvYWQgUE5HPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNub3dGbGFrZVZpZXcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignI3RhcmdldC1ncm91cCcpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICB0aGlzLnNub3dmbGFrZSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuc25vd2ZsYWtlJyk7XG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmNvbnRyb2xHZXQgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWdldCcpO1xuICAgIHRoaXMuY29udHJvbEdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5saW5rcyA9IHtcbiAgICAgIHBuZzogdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1kb3dubG9hZC1wbmcnKSxcbiAgICAgIHN2ZzogdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1kb3dubG9hZC1zdmcnKVxuICAgIH07XG4gICAgdGhpcy50aGVtZSA9IFtcbiAgICAgICcjMjUzQjU5JyxcbiAgICAgICd0dXJxdW9pc2UnXG4gICAgXTtcbiAgICB0aGlzLmFjY2VudHMgPSB7XG4gICAgICBiYXNlOiAnI0ZGRidcbiAgICB9O1xuXG4gICAgdGhpcy5vdXRwdXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGVTdHIoKTtcblxuICAgIHRoaXMuY2hhbmdlVmlldyA9IHRoaXMuY2hhbmdlVmlldy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlVGhlbWUgPSB0aGlzLmNoYW5nZVRoZW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcmVwYXJlSW1hZ2VzID0gdGhpcy5wcmVwYXJlSW1hZ2VzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmZpbmFsU2l6ZXMgPSB7XG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiA4MDBcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXZpZXcnLCB0aGlzLmNoYW5nZVZpZXcpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsIHRoaXMuY2hhbmdlVGhlbWUpO1xuICAgIHRoaXMuY29udHJvbEdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJlcGFyZUltYWdlcyk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UtdmlldycsIHRoaXMuY2hhbmdlVmlldyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gICAgdGhpcy5jb250cm9sR2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmVwYXJlSW1hZ2VzKTtcbiAgfVxuXG4gIGNoYW5nZVZpZXcoZXZlbnQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICB0aGlzLnRhcmdldEdyb3VwLmlubmVySFRNTCA9IGV2ZW50LmRldGFpbC5ncm91cENvbnRlbnQ7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gIXRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MO1xuICB9XG5cbiAgY2hhbmdlVGhlbWUoZXZlbnQpIHtcbiAgICBpZihldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLmNvbG9ycykge1xuICAgICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgICB0aGlzLnRoZW1lID0gZXZlbnQuZGV0YWlsLmNvbG9ycztcbiAgICAgIHRoaXMuYWNjZW50cyA9IGV2ZW50LmRldGFpbC5hY2NlbnRzO1xuICAgICAgdGhpcy5vdXRwdXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGVTdHIoKTtcbiAgICB9XG4gIH1cblxuICBwcmVwYXJlSW1hZ2VzKCkge1xuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmZpbmFsU1ZHID0gdGhpcy5zbm93Zmxha2UuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRoaXMuZmluYWxTVkcuc3R5bGUgPSB0aGlzLm91dHB1dFN0eWxlO1xuICAgIC8vIEZpeCBwYWludCBTVkcgb24gY2FudmFzIGluIEZpcmVmb3hcbiAgICB0aGlzLmZpbmFsU1ZHLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt0aGlzLmZpbmFsU2l6ZXMud2lkdGh9cHhgKTtcbiAgICB0aGlzLmZpbmFsU1ZHLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7dGhpcy5maW5hbFNpemVzLmhlaWdodH1weGApO1xuXG4gICAgdGhpcy5wcmVwYXJlUG5nKCk7XG4gICAgdGhpcy5wcmVwYXJlU3ZnKCk7XG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGdldFN0eWxlU3RyKCkge1xuICAgIHJldHVybiBgYmFja2dyb3VuZDogJHt0aGlzLmdldEJhY2tncm91bmRTdHIodGhpcy50aGVtZSl9OyBjb2xvcjogJHt0aGlzLmFjY2VudHMuYmFzZX1gO1xuICB9XG5cbiAgcHJlcGFyZVBuZygpIHtcbiAgICBjb25zdCB4bWwgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMuZmluYWxTVkcpO1xuICAgIGNvbnN0IHN2ZzY0ID0gYnRvYSh4bWwpO1xuICAgIGNvbnN0IGI2NFN0YXJ0ID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJztcbiAgICBjb25zdCBpbWFnZTY0ID0gYjY0U3RhcnQgKyBzdmc2NDtcblxuICAgIGNvbnN0IGltZ09iaiA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ09iai5zcmMgPSBpbWFnZTY0O1xuICAgIGltZ09iai53aWR0aCA9IHRoaXMuZmluYWxTaXplcy53aWR0aDtcbiAgICBpbWdPYmouaGVpZ2h0ID0gdGhpcy5maW5hbFNpemVzLmhlaWdodDtcblxuICAgIGltZ09iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmZpbmFsU2l6ZXMud2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmZpbmFsU2l6ZXMuaGVpZ2h0O1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZ09iaiwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIHRoaXMuY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICBsZXQgVVJMT2JqID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICB0aGlzLmxpbmtzLnBuZy5ocmVmID0gVVJMT2JqLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuZG93bmxvYWQgPSAnc25vd2ZsYWtlLnBuZyc7XG5cbiAgICAgICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIHByZXBhcmVTdmcoKSB7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt0aGlzLmZpbmFsU1ZHLm91dGVySFRNTF0sIHt0eXBlOiAnaW1hZ2Uvc3ZnK3htbCd9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIHRoaXMubGlua3Muc3ZnLmhyZWYgPSB1cmw7XG4gICAgdGhpcy5saW5rcy5zdmcuZG93bmxvYWQgPSAnc25vd2ZsYWtlLnN2Zyc7XG5cbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuICB9XG59XG4iLCJpbXBvcnQge3RoZW1lcywgYmFzZUFjY2VudHN9IGZyb20gJy4vdGhlbWVzLmpzJztcbmltcG9ydCB7dGVtcGxhdGV9IGZyb20gJy4vdG1wbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lU3dpdGNoZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJyk7XG4gICAgdGhpcy5jdXJyZW50VGhlbWVOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGVtZXMubGVuZ3RoKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBudWxsO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5jbHMgPSB7XG4gICAgICBjb2xsYXBzZWQ6ICdjb250cm9scy0tY29sbGFwc2VkJyxcbiAgICAgIGN1cnJlbnQ6ICdjb250cm9sLS1jdXJyZW50J1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ29udHJvbHMoKTtcblxuICAgIHRoaXMub25Db250cm9sQ2xpY2sgPSB0aGlzLm9uQ29udHJvbENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUaGVtZSA9IHRoaXMuY2hhbmdlVGhlbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlUGFuZWwgPSB0aGlzLmNsb3NlUGFuZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZENvbnRyb2xzKCkge1xuICAgIHRoZW1lcy5mb3JFYWNoKCh0aGVtZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBiZ1N0ciA9IHRoaXMuZ2V0QmFja2dyb3VuZFN0cih0aGVtZS5jb2xvcnMpO1xuICAgICAgbGV0IGNsYXNzTmFtZSA9ICdjb250cm9sJztcbiAgICAgIGxldCBjb2xvciA9IGJhc2VBY2NlbnRzLmJhc2U7XG4gICAgICBpZih0aGVtZS5hY2NlbnRzKSB7XG4gICAgICAgIGNvbG9yID0gdGhlbWUuYWNjZW50cy5iYXNlO1xuICAgICAgfVxuXG4gICAgICBpZihpbmRleCA9PT0gdGhpcy5jdXJyZW50VGhlbWVOdW0pIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgY29udHJvbC0tY3VycmVudCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRyb2xTdHIgPSBgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTmFtZX1cIlxuICAgICAgICB0aXRsZT1cIiR7dGhlbWUubmFtZX1cIlxuICAgICAgICBkYXRhLWluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQ6ICR7YmdTdHJ9OyBjb2xvcjogJHtjb2xvcn1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5aGlkZGVuXCI+JHt0aGVtZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+YDtcblxuICAgICAgdGhpcy5jb250cm9scy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIGNvbnRyb2xTdHIpO1xuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY2xzLmN1cnJlbnR9YCk7XG4gICAgfSlcbiAgfVxuXG4gIGdldEJhY2tncm91bmRTdHIoY29sb3JzTGlzdCkge1xuICAgIGxldCBiZ1N0ciA9ICcnO1xuXG4gICAgaWYoY29sb3JzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJnU3RyID0gY29sb3JzTGlzdFswXVxuICAgICAgcmV0dXJuIGJnU3RyO1xuICAgIH1cblxuICAgIGJnU3RyID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3JzTGlzdC5qb2luKCcsJyl9KWA7XG4gICAgcmV0dXJuIGJnU3RyO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db250cm9sQ2xpY2spO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsIHRoaXMuY2hhbmdlVGhlbWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVBhbmVsKTtcblxuICAgIC8vIFNldCBjdXJyZW50IHRoZW1lIHRvIHBhZ2UgJiBjb21wb25lbnRcbiAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcbiAgfVxuXG4gIG9uQ29udHJvbENsaWNrKGV2ZW50KSB7XG4gICAgaWYodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmNvbGxhcHNlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lTnVtID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcblxuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCh0aGlzLmNscy5jdXJyZW50KTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgdGhpcy5jbG9zZVBhbmVsKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVBhbmVsKGV2ZW50KSB7XG4gICAgaWYoZXZlbnQudGFyZ2V0ID09PSB0aGlzIHx8IHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlVGhlbWUoKSB7XG4gICAgY29uc3QgdGhlbWUgPSB0aGVtZXNbdGhpcy5jdXJyZW50VGhlbWVOdW1dO1xuICAgIGlmKCF0aGVtZS5hY2NlbnRzKSB7XG4gICAgICB0aGVtZS5hY2NlbnRzID0gYmFzZUFjY2VudHM7XG4gICAgfVxuICAgIHRoaXMuY29udHJvbHMuc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmNvbG9yc1swXTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UtdGhlbWUnLCB7XG4gICAgICBkZXRhaWw6IHRoZW1lLFxuICAgICAgYnViYmxlczogdHJ1ZVxuICAgIH0pKTtcbiAgfVxuXG4gIGNoYW5nZVRoZW1lKGV2ZW50KSB7XG4gICAgaWYoIWV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvcihsZXQga2V5IGluIGV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KGAtLWNvbG9yLSR7a2V5fWAsIGV2ZW50LmRldGFpbC5hY2NlbnRzW2tleV0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGJhc2VBY2NlbnRzID0ge1xuICBiYXNlOiAnd2hpdGUnLFxuICBiYXNldHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxuICB0ZXh0OiAnYmxhY2snLFxuICB0ZXh0dHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICBob3ZlcjogJ2FxdWEnLFxuICBmb2N1czogJ29yYW5nZXJlZCcsXG4gIGZvY3VzaG92ZXI6ICdnb2xkJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lcyA9IFtcbiAge1xuICAgIG5hbWU6ICdTZWEnLFxuICAgIGNvbG9yczpcbiAgICAgIFtcbiAgICAgICAgJyMwMjJFNDAnLFxuICAgICAgICAndGVhbCcsXG4gICAgICAgICd0dXJxdW9pc2UnLFxuICAgICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ05vcnRoIFNreScsXG4gICAgY29sb3JzOlxuICAgICAgW1xuICAgICAgICAnIzI1M0I1OScsXG4gICAgICAgICcjOTZEOUM2JyxcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEZWVwIE5pZ2h0JyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMDExNTI2JyxcbiAgICAgICAgJyMwMjJFNDAnLFxuICAgICAgICAnIzA3NEE1OScsXG4gICAgICAgICcjMjY2NTczJyxcbiAgICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEZWVwIFNwYWNlJyxcbiAgICBjb2xvcnM6XG4gICAgICBbXG4gICAgICAgICcjMDcxMjE4JyxcbiAgICAgICAgJyMxRTUyNzcnXG4gICAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU3RlZWxibHVlJyxcbiAgICBjb2xvcnM6IFsnc3RlZWxibHVlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZWFsJyxcbiAgICBjb2xvcnM6IFsndGVhbCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGFya3NsYXRlYmx1ZScsXG4gICAgY29sb3JzOiBbJ2RhcmtzbGF0ZWJsdWUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0luZGlhbnJlZCcsXG4gICAgY29sb3JzOiBbJ2luZGlhbnJlZCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRmlyZWJyaWNrJyxcbiAgICBjb2xvcnM6IFsnZmlyZWJyaWNrJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdXJwbGUnLFxuICAgIGNvbG9yczogWydwdXJwbGUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1doaXRlJyxcbiAgICBjb2xvcnM6IFsnI0ZGRiddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIHRleHQ6ICcjRkZGJyxcbiAgICAgIHRleHR0cmFuc3A6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR3JheScsXG4gICAgY29sb3JzOiBbJyMzMzMnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0JsYWNrJyxcbiAgICBjb2xvcnM6IFsnIzAwMCddLFxuICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuXG4gICAgICAtLWNvbG9yLWJhc2U6IHdoaXRlO1xuICAgICAgLS1jb2xvci1iYXNldHJhbnNwOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICB9XG5cbiAgICAudmlzdWFsbHloaWRkZW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW46IC0xcHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFzZXRyYW5zcCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvciBpbnNldCxcbiAgICAgICAgMCAwIDRweCAycHggcmdiYSgwLDAsMCwuMjUpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIC40NXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBtYXJnaW47XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6bm90KGNvbnRyb2wtLWN1cnJlbnQpIHtcblxuICAgIH1cblxuICAgIC5jb250cm9sOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCBjdXJyZW50Q29sb3IgaW5zZXQsXG4gICAgICAgIDAgMCAwIDRweCB2YXIoLS1jb2xvci1iYXNldHJhbnNwKTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZCAuY29udHJvbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvciBpbnNldDtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLS4yNXJlbTtcbiAgICAgIHJpZ2h0OiAtLjI1cmVtO1xuICAgICAgYm90dG9tOiAtLjI1cmVtO1xuICAgICAgbGVmdDogLS4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1jb2xvci1iYXNlKTtcbiAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudDpmb2N1czo6YWZ0ZXIge1xuICAgICAgY29udGVudDogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZDpob3ZlciAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tY29sb3ItYmFzZSkgaW5zZXQ7XG4gICAgfVxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gICAgICB9XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9scyBjb250cm9scy0tY29sbGFwc2VkXCI+PC9kaXY+XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==