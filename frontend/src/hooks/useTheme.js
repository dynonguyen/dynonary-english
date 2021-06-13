import { THEME_KEYS } from 'constant';
import React, { useEffect, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(THEME_KEYS.LIGHT);

  // get theme in local storage AND set theme to root
  useEffect(() => {
    const current =
      localStorage.getItem(THEME_KEYS.LS_KEY) === THEME_KEYS.LIGHT
        ? THEME_KEYS.LIGHT
        : THEME_KEYS.DARK;

    document.querySelector(':root').setAttribute(THEME_KEYS.ROOT_KEY, current);
    setTheme(current);
  }, []);

  return theme;
}

export default useTheme;
