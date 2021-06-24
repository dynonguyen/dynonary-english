import React from 'react';
import AccentSelect from './Accent';
import VoiceSpeed from './Speed';
import useStyle from './style';
import VoiceVolume from './Volume';

function VoiceSetting() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      {/* voice */}
      <div className="w-100">
        <h3 className="dyno-label">Voice</h3>
        <AccentSelect />
      </div>

      {/* volume */}
      <div className="flex-col">
        <h3 className="dyno-label">Volume</h3>
        <VoiceVolume />
      </div>

      {/* speed */}
      <div className="flex-col">
        <h3 className="dyno-label">Speed</h3>
        <div className="flex-center-between flex-grow-1">
          <VoiceSpeed />
        </div>
      </div>
    </div>
  );
}

export default VoiceSetting;
