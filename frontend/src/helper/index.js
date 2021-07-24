import { COLOR_VAR_KEYS, DEFAULTS, THEME_KEYS, VOICE_KEYS } from 'constant';
const htmlRoot = document.querySelector(':root');

// prevent execute continuously a function
export const debounce = (timer = null, cbFn, delay = 350) => {
  if (timer) {
    clearTimeout(timer);
  }
  return setTimeout(cbFn, delay);
};

// compare 2 arrays
export const equalArray = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

// get current root palettes
function getRootPalettes() {
  let palettes = [];
  const rootStyles = getComputedStyle(htmlRoot);

  COLOR_VAR_KEYS.forEach((item) => {
    let color = rootStyles.getPropertyValue(item.key);

    palettes.push({
      ...item,
      color: color[0] === '#' ? color : color.slice(1), // output ' #123456' => slice(1) = '#123456'
    });
  });

  return palettes;
}

// get custom palettes from local storage
export const getCustomPalettes = () => {
  const palettes = localStorage.getItem(THEME_KEYS.PALETTE_KEY);
  if (!palettes) {
    const newPalettes = getRootPalettes();
    localStorage.setItem(THEME_KEYS.PALETTE_KEY, JSON.stringify(newPalettes));
    return newPalettes;
  } else {
    return JSON.parse(palettes);
  }
};

// set palettes for root
export const setRootPalettes = () => {
  const palettes = getCustomPalettes();
  palettes?.forEach((item) => htmlRoot.style.setProperty(item.key, item.color));
};

// get window voice list
export const getSpeechSynthesis = () => {
  return new Promise((resolve) => {
    let synth = window.speechSynthesis;
    let intervalId;

    intervalId = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        clearInterval(intervalId);
        resolve(synth.getVoices());
      }
    }, 20);
  });
};

// update or add custom voice in local storage
export const updateLSVoice = (key, value) => {
  let current = localStorage.getItem(VOICE_KEYS.LS_KEY);
  let newLSVoice = {};

  if (current) {
    newLSVoice = JSON.parse(current);
    newLSVoice[key] = value;
  } else {
    newLSVoice = {
      voiceURI: DEFAULTS.VOICE_URI,
      speed: DEFAULTS.VOICE_SPEED,
      volume: DEFAULTS.VOICE_VOLUME,
    };
    newLSVoice[key] = value;
  }

  localStorage.setItem(VOICE_KEYS.LS_KEY, JSON.stringify(newLSVoice));
};

// optimize images
export const cloudinaryImgOptimize = (
  originSrc = '',
  width = 0,
  height = 0,
  fAuto = true,
  qAuto = true,
  others = '',
) => {
  if (!originSrc) return '';

  const cloudinaryBaseURL = 'https://res.cloudinary.com/dynonary/image/upload';
  const index = originSrc.indexOf(cloudinaryBaseURL);

  // Not cloudinary source
  if (index === -1) {
    return originSrc;
  }

  let optimize = `${width > 0 ? `w_${width},` : ''}${
    height > 0 ? `h_${height},` : ''
  }${fAuto ? 'f_auto,' : ''}${qAuto ? 'q_auto,' : ''}${
    others && others !== '' ? others : ''
  }`;

  if (optimize[optimize.length - 1] === ',')
    optimize = optimize.slice(0, optimize.length - 1);

  return originSrc.replace(
    cloudinaryBaseURL,
    `${cloudinaryBaseURL}/${optimize}`,
  );
};

export const addOrDelItemInArray = (arr = [], item) => {
  if (!arr || !Array.isArray(arr)) return arr;

  const index = arr.findIndex((i) => i === item);

  if (index === -1) {
    arr.push(item);
    return arr;
  }

  arr.splice(index, 1);
  return arr;
};

export const formatDate = (date = new Date()) => {
  try {
    const d = new Date(date);
    const day = `0${d.getDate()}`.slice(-2);
    const m = `0${d.getMonth() + 1}`.slice(-2);
    const y = d.getFullYear();
    return `${day}-${m}-${y}`;
  } catch (error) {
    return date;
  }
};
