import Slider from '@material-ui/core/Slider';
import VolumeIcon from '@material-ui/icons/VolumeUp';
import { debounce, updateLSVoice } from 'helper';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVoiceItem } from 'redux/slices/voice.slice';
import useStyle from './style';
let debounceTimer = null;

function VoiceVolume() {
  const classes = useStyle();
  const { volume } = useSelector((state) => state.voice);
  const dispatch = useDispatch();
  const defaultVolume = useRef(volume); // Fix error component is changing the controlled value

  const onVolumeChange = (value) => {
    if (value > 1 || value < 0) return;
    debounceTimer = debounce(debounceTimer, () => {
      dispatch(setVoiceItem({ key: 'volume', value }));
      updateLSVoice('volume', value);
    });
  };

  return (
    <div className="flex-center-between flex-grow-1">
      <VolumeIcon className={classes.icon} />

      <Slider
        classes={{
          root: classes.slider,
          thumb: classes.thumbSlider,
          rail: classes.railSlider,
          track: classes.trackSlider,
        }}
        defaultValue={defaultVolume.current * 100}
        min={0}
        max={100}
        step={2}
        onChange={(e, value) => onVolumeChange(value / 100)}
      />
      <span className={classes.valueText}>{(volume * 100).toFixed(0)}</span>
    </div>
  );
}

export default VoiceVolume;
