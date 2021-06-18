import Tooltip from '@material-ui/core/Tooltip';
import { THEME_KEYS } from 'constant';
import { debounce } from 'helper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useStyle from './style';
let debounceTimer = null;
const htmlRoot = document.querySelector(':root');

function ColorBox({ color, label, colorKey }) {
  const classes = useStyle();
  const [value, setValue] = useState(color);
  const titleTooltip = `${label}: ${value}`;

  const onColorChange = (colorVal) => {
    debounceTimer = debounce(debounceTimer, () => {
      // Update UI
      htmlRoot.style.setProperty(colorKey, colorVal);

      // update local storage
      const lsPalettes = JSON.parse(
        localStorage.getItem(THEME_KEYS.PALETTE_KEY),
      );

      localStorage.setItem(
        THEME_KEYS.PALETTE_KEY,
        JSON.stringify(
          lsPalettes.map((item) =>
            item.key === colorKey ? { ...item, color: colorVal } : item,
          ),
        ),
      );

      // Update input color
      setValue(colorVal);
    });
  };

  return (
    <Tooltip title={titleTooltip}>
      <div className={classes.colorBox} style={{ backgroundColor: value }}>
        <input
          type="color"
          className={classes.colorBoxInput}
          value={value}
          onChange={(e) => onColorChange(e.target.value)}
        />
      </div>
    </Tooltip>
  );
}

function PaletteColor({ palettes }) {
  const classes = useStyle();

  return (
    <div className={classes.paletteRoot}>
      {palettes &&
        palettes.map((item, index) => (
          <ColorBox
            key={index}
            label={item.label}
            color={item.color}
            colorKey={item.key}
          />
        ))}
    </div>
  );
}

PaletteColor.propTypes = {
  palettes: PropTypes.array,
};

PaletteColor.defaultProps = {
  palettes: [],
};

ColorBox.propTypes = {
  colorKey: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
};

export default PaletteColor;
