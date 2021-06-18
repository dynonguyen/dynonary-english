import { createSlice } from '@reduxjs/toolkit';
import { DEFAULTS } from 'constant';

const voiceSlice = createSlice({
  name: 'voice',
  initialState: {
    voiceURI: DEFAULTS.VOICE_URI,
    speed: DEFAULTS.VOICE_SPEED,
    volume: DEFAULTS.VOICE_VOLUME,
  },
  reducers: {
    setVoiceItem(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    setVoice(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

const { reducer, actions } = voiceSlice;
export const { setVoiceItem, setVoice } = actions;
export default reducer;
