import correctAudio from 'assets/audios/correct.mp3';
import incorrectAudio from 'assets/audios/incorrect.mp3';
// play an audio
export const onPlayAudio = (audioSrc) => {
  const audio = new Audio(audioSrc);
  audio.play();
};

// speak a text
export const onTextToSpeech = (text = '', voice, speed = 1, volume = 1) => {
  let speech = new SpeechSynthesisUtterance();
  window.speechSynthesis.cancel();

  speech.lang = 'en';
  speech.text = text;
  speech.volume = volume;
  speech.voice = voice;
  speech.rate = speed;

  window.speechSynthesis.speak(speech);
};

// play sound effect and read a word
export const playSoundAnswer = (
  word = '',
  isCorrect = true,
  voice,
  volume = 1,
  speed = 1,
  speakDelay = 1000,
) => {
  const vol = volume >= 0 && volume <= 1 ? volume : 1;
  const rate = speed >= 0 && speed <= 10 ? speed : 1;

  let audio = new Audio();
  audio.volume = vol;
  audio.playbackRate = rate;
  audio.src = isCorrect ? correctAudio : incorrectAudio;
  audio.play();

  setTimeout(() => {
    onTextToSpeech(word, voice, rate, vol);
  }, speakDelay);
};
