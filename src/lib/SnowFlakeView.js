const template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
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
        transition: stroke-opacity .25s;
      }
      :host .contour--hidden {
        stroke-opacity: 0;
      }
    </style>

    <svg class="contour" viewBox="0 0 600 600" hidden>
      <circle r="300" cx="300" cy="300"
        stroke="currentColor"
        stroke-dasharray="10 5"
        stroke-width="1"
        fill="none"/>
    </svg>

    <svg class="snowflake" viewBox="0 0 600 600">
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
  `;



export default class SnowFlakeView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(template.content.cloneNode(true));
    this.targetGroup = this.elem.querySelector('#target-group');
  }

  connectedCallback() {
    this.addEventListener('change-view', this.changeView);
  }

  changeView() {
    this.targetGroup.innerHTML = event.detail.groupContent;
  }

  disconnectedCallback() {
    this.removeEventListener('change-view', this._onKeyUp);
  }
}
