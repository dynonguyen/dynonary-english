import { COLOR_VAR_KEYS, THEME_KEYS } from 'constant';
const htmlRoot = document.querySelector(':root');

// prevent execute continuously a function
export const debounce = (timer = null, cbFn, delay = 350) => {
  if (timer) {
    clearTimeout(timer);
  }
  return setTimeout(cbFn, delay);
};

// get current root palettes
function getRootPalettes() {
  let palettes = [];
  const rootStyles = getComputedStyle(htmlRoot);

  COLOR_VAR_KEYS.forEach((item) => {
    let color = rootStyles.getPropertyValue(item.key);

    palettes.push({
      ...item,
      color: color[0] === '#' ? color : color.slice(1), // output ' #123456' => slice(1) = '#123456'
    });
  });

  return palettes;
}

// get custom palettes from local storage
export const getCustomPalettes = () => {
  const palettes = localStorage.getItem(THEME_KEYS.PALETTE_KEY);
  if (!palettes) {
    const newPalettes = getRootPalettes();
    localStorage.setItem(THEME_KEYS.PALETTE_KEY, JSON.stringify(newPalettes));
    return newPalettes;
  } else {
    return JSON.parse(palettes);
  }
};

// set palettes for root
export const setRootPalettes = () => {
  const palettes = getCustomPalettes();
  palettes?.forEach((item) => htmlRoot.style.setProperty(item.key, item.color));
};
