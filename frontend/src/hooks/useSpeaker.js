import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

let globalVoices = [];

// get voice in redux
function useSpeaker() {
  const [voices, setVoices] = useState(globalVoices);
  const { speed, voiceURI, volume } = useSelector((state) => state.voice);
  const voice = voices.find((i) => i.voiceURI === voiceURI);

  useEffect(() => {
    if (globalVoices.length > 0) return;

    const intervalId = setInterval(() => {
      const voiceList = window.speechSynthesis.getVoices();
      if (voiceList.length > 0) {
        globalVoices = voiceList.filter((i) => i.lang.indexOf('en') !== -1);
        setVoices(voiceList.filter((i) => i.lang.indexOf('en') !== -1));
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  return { speed, volume, voice };
}

export default useSpeaker;
