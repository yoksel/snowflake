const template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        width: 520px;

        --transition: .15s;
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
      }
      .control:hover {
        background: none;
        box-shadow:  0 0 0 3px;
        color: #FFF;
      }
    </style>

    <svg viewBox="0 0 260 300">
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

    <div class="controls">
      <button type="button" class="control control--clear">Clear</button>
    </div>
  `;

export default class SnowFlakeEditor extends HTMLElement {
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
      // Catch  event from parent document
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
          checked: this.checked,
          groupContent: this.targetGroup.innerHTML
        },
        bubbles: true,
      }));
    }

    targetGroupMouseDown(event) {
      this.clickedPath = event.target;
    }

    unselect() {
      if(Object.values(this.selected).length > 0) {
        for(let key in this.selected) {
          this.selected[key].classList.remove('highlight');
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
