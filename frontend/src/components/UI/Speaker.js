import SpeakerIcon from '@material-ui/icons/Speaker';
import PropTypes from 'prop-types';
import React from 'react';

const onPlayAudio = (audioSrc) => {
  const audio = new Audio(audioSrc);
  audio.play();
};

const onTextToSpeech = (text = '') => {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = 'en';
  speech.text = text;
  speech.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  speech.voice = voices[1];
  window.speechSynthesis.speak(speech);
};

function Speaker({ className, type, text, audioSrc }) {
  const handleClick = () => {
    if (type) {
      onTextToSpeech(text);
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
