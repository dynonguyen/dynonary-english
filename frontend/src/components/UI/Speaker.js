import SpeakerIcon from '@material-ui/icons/Speaker';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
const voices = window.speechSynthesis
  .getVoices()
  .filter((i) => i.lang.indexOf('en') !== -1);

const onPlayAudio = (audioSrc) => {
  const audio = new Audio(audioSrc);
  audio.play();
};

const onTextToSpeech = (text = '', voice, speed = 1, volume = 1) => {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = 'en';
  speech.text = text;
  speech.volume = volume;
  speech.voice = voice;
  speech.rate = speed;
  window.speechSynthesis.speak(speech);
};

function Speaker({ className, type, text, audioSrc }) {
  const { speed, voiceURI, volume } = useSelector((state) => state.voice);
  const voice = voices.find((i) => i.voiceURI === voiceURI);

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
