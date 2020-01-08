import SnowFlakeEditor from './lib/SnowFlakeEditor.js';
import SnowFlakeView from './lib/SnowFlakeView.js';
import ThemeSwitcher from './lib/ThemeSwitcher.js';

(function() {
  document.addEventListener('change-theme', () => {
    document.body.style.background = getBackgroundStr(event.detail.theme)
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

  window.customElements.define('snowflake-editor', SnowFlakeEditor);
  window.customElements.define('snowflake-view', SnowFlakeView);
  window.customElements.define('theme-switcher', ThemeSwitcher);
})();
