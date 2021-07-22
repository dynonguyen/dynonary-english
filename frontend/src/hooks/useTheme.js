import { THEME_KEYS } from 'constant';
import { setRootPalettes } from 'helper';
import { useEffect, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(THEME_KEYS.LIGHT);

  // get theme in local storage AND set theme to root
  useEffect(() => {
    const htmlRoot = document.querySelector(':root');
    let current = localStorage.getItem(THEME_KEYS.LS_KEY);

    // set default if no theme yet
    if (
      current !== THEME_KEYS.LIGHT &&
      current !== THEME_KEYS.DARK &&
      current !== THEME_KEYS.CUSTOM
    ) {
      current = THEME_KEYS.LIGHT;
      localStorage.setItem(THEME_KEYS.LS_KEY, THEME_KEYS.LIGHT);
    }

    // if theme is custom then set color for root
    if (current === THEME_KEYS.CUSTOM) {
      setRootPalettes();
    }

    htmlRoot.setAttribute(THEME_KEYS.ROOT_KEY, current);
    setTheme(current);
  }, []);

  return theme;
}

export default useTheme;
