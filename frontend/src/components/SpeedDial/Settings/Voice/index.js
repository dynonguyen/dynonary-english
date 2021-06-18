import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';
import SpeedIcon from '@material-ui/icons/Speed';
import VolumeUp from '@material-ui/icons/VolumeUp';
import React from 'react';
import AccentSelect from './Accent';
import useStyle from './style';

function VoiceSetting() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      {/* voice */}
      <div>
        <h3 className={classes.title}>Voice</h3>
        <AccentSelect />
      </div>

      {/* volume */}
      <div className="flex-col">
        <h3 className={classes.title}>Volume</h3>
        <div className="flex-center-between flex-grow-1">
          <VolumeUp className={classes.icon} />
          <Slider
            classes={{
              root: classes.slider,
              thumb: classes.thumbSlider,
              rail: classes.railSlider,
              track: classes.trackSlider,
            }}
            value={40}
          />
          <Input
            className={classes.input}
            value={1}
            onChange={null}
            disableUnderline
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
            }}
          />
        </div>
      </div>

      {/* speed */}
      <div className="flex-col">
        <h3 className={classes.title}>Speed</h3>
        <div className="flex-center-between flex-grow-1">
          <SpeedIcon className={classes.icon} />
          <Slider
            classes={{
              root: classes.slider,
              thumb: classes.thumbSlider,
              track: classes.trackSlider,
              rail: classes.railSlider,
            }}
            value={1}
          />
          <Input
            className={classes.input}
            value={100}
            onChange={null}
            disableUnderline
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default VoiceSetting;
