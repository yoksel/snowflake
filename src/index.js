console.clear();
import SnowFlakeEditor from './lib/SnowFlakeEditor.js';
import SnowFlakeView from './lib/SnowFlakeView.js';

import './style.css';

(function() {
  const editor = document.querySelector('snowflake-editor');
  const view = document.querySelector('snowflake-view');

  editor.addEventListener('change', () => {
    view.dispatchEvent(new CustomEvent('change-view', {
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

  window.customElements.define('snowflake-editor', SnowFlakeEditor);
  window.customElements.define('snowflake-view', SnowFlakeView);
})();
