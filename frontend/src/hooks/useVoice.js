import { VOICE_KEYS } from 'constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setVoice } from 'redux/slices/voice.slice';

// get custom voice to store into redux
function useVoice() {
  const dispatch = useDispatch();

  useEffect(() => {
    const customVoice = localStorage.getItem(VOICE_KEYS.LS_KEY);
    if (customVoice) {
      dispatch(setVoice(JSON.parse(customVoice)));
    }
  }, []);

  return null;
}

export default useVoice;
