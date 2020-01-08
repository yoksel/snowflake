import SnowFlakeEditor from './lib/SnowFlakeEditor.js';
import SnowFlakeView from './lib/SnowFlakeView.js';
import ThemeSwitcher from './lib/ThemeSwitcher/index.js';

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

  window.customElements.define('snowflake-editor', SnowFlakeEditor);
  window.customElements.define('snowflake-view', SnowFlakeView);
  window.customElements.define('theme-switcher', ThemeSwitcher);
})();
