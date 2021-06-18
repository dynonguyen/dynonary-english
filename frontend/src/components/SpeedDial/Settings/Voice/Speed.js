import Slider from '@material-ui/core/Slider';
import SpeedIcon from '@material-ui/icons/Speed';
import { debounce, updateLSVoice } from 'helper';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVoiceItem } from 'redux/slices/voice.slice';
import useStyle from './style';
let debounceTimer = null;

function VoiceSpeed() {
  const classes = useStyle();
  const { speed } = useSelector((state) => state.voice);
  const dispatch = useDispatch();
  const defaultSpeed = useRef(speed); // Fix error component is changing the controlled value

  const onSpeedChange = (value) => {
    if (value > 3 || value < 0.1) return;
    debounceTimer = debounce(debounceTimer, () => {
      dispatch(setVoiceItem({ key: 'speed', value }));
      updateLSVoice('speed', value);
    });
  };

  return (
    <div className="flex-center-between flex-grow-1">
      <SpeedIcon className={classes.icon} />

      <Slider
        classes={{
          root: classes.slider,
          thumb: classes.thumbSlider,
          rail: classes.railSlider,
          track: classes.trackSlider,
        }}
        defaultValue={defaultSpeed.current}
        min={0.1}
        max={3}
        step={0.1}
        onChange={(e, value) => onSpeedChange(value)}
      />
      <span className={classes.valueText}>{speed}</span>
    </div>
  );
}

export default VoiceSpeed;
