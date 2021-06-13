import { Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoonIcon from '@material-ui/icons/Brightness4';
import SunIcon from '@material-ui/icons/Brightness7';
import { THEME_KEYS } from 'constant';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function ThemeButton({ classes }) {
  const [isLight, setIsLight] = useState(
    localStorage.getItem(THEME_KEYS.LS_KEY) === THEME_KEYS.LIGHT ? true : false,
  );

  const onChangeTheme = () => {
    const root = document.querySelector(':root');
    const currentTheme = root.getAttribute(THEME_KEYS.ROOT_KEY);

    const newTheme =
      currentTheme === THEME_KEYS.LIGHT ? THEME_KEYS.DARK : THEME_KEYS.LIGHT;

    root.setAttribute(THEME_KEYS.ROOT_KEY, newTheme);
    localStorage.setItem(THEME_KEYS.LS_KEY, newTheme);
    setIsLight(!isLight);
  };

  return (
    <Tooltip title="Thay đổi chủ đề" placement="bottom">
      <IconButton onClick={onChangeTheme}>
        {isLight ? (
          <MoonIcon className={classes} />
        ) : (
          <SunIcon className={classes} />
        )}
      </IconButton>
    </Tooltip>
  );
}

ThemeButton.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ThemeButton;
