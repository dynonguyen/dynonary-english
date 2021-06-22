import SpeakerIcon from '@material-ui/icons/Speaker';
import { onPlayAudio, onTextToSpeech } from 'helper/speaker.helper';
import useSpeaker from 'hooks/useSpeaker';
import PropTypes from 'prop-types';
import React from 'react';

function Speaker({ className, type, text, audioSrc }) {
  const { voice, speed, volume } = useSpeaker();

  const handleClick = () => {
    if (type) {
      onTextToSpeech(text, voice, speed, volume);
    } else {
      onPlayAudio(audioSrc);
    }
  };

  return (
    <SpeakerIcon
      className={`dyno-speaker ${className}`}
      onClick={handleClick}
    />
  );
}

Speaker.propTypes = {
  audioSrc: PropTypes.any,
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.bool, // type = false: play audio, true: play text
};

Speaker.defaultProps = {
  audioSrc: '',
  className: '',
  text: '',
  type: true,
};

export default Speaker;
