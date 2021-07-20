import SpeakerIcon from '@material-ui/icons/Speaker';
import { onPlayAudio, onTextToSpeech } from 'helper/speaker.helper';
import useSpeaker from 'hooks/useSpeaker';
import PropTypes from 'prop-types';
import React from 'react';

let voiceInfo = null;

function Speaker(props) {
  const { className, type, text, audioSrc, isWrap } = props;

  // @best performance: reduce render useSpeaker 1115 times in irregular verb
  const { voice, speed, volume } =
    voiceInfo === null ? useSpeaker() : voiceInfo;

  if (!voiceInfo) {
    voiceInfo = { voice, speed, volume };
  }

  const handleClick = () => {
    if (type) {
      onTextToSpeech(text, voice, speed, volume);
    } else {
      onPlayAudio(audioSrc);
    }
  };

  return (
    <>
      {isWrap ? (
        <div onClick={handleClick}>{props.children}</div>
      ) : (
        <SpeakerIcon
          className={`dyno-speaker ${className}`}
          onClick={handleClick}
        />
      )}
    </>
  );
}

Speaker.propTypes = {
  audioSrc: PropTypes.any,
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.bool, // type = false: play audio, true: play text
  isWrap: PropTypes.bool,
  children: PropTypes.any,
};

Speaker.defaultProps = {
  audioSrc: '',
  className: '',
  text: '',
  type: true,
  isWrap: false,
};

export default Speaker;
