import eMS from 'assets/images/ipa/e.jpg';
import iMS from 'assets/images/ipa/i.jpg';
import uMS from 'assets/images/ipa/u.jpg';

import iShortAu from 'assets/audios/ipa/vowels/i-short.mp3';
import iLongAu from 'assets/audios/ipa/vowels/i-long.mp3';

export const VOWELS = [
  {
    title: '😊 Nhóm âm cười',
    list: [
      {
        phonetic: 'ɪ',
        audioSrc: iShortAu,
        desc: 'i ngắn, đọc dứt khoát như đang kêu ai đó, miệng không căng',
        mouthShape: eMS,
        examples: [
          {
            word: 'ship',
            phonetic: '/ʃɪp/',
          },
          {
            word: 'hit',
            phonetic: '/hɪt/',
          },
        ],
      },
      {
        phonetic: 'i:',
        audioSrc: iLongAu,
        desc: 'i dài, miệng cười, nhấn mạnh, nặng và căng',
        mouthShape: iMS,
        examples: [
          {
            word: 'sheep',
            phonetic: '/ʃi:p/',
          },
          {
            word: 'heat',
            phonetic: '/hi:t/',
          },
        ],
      },
    ],
  },
  {
    title: '💋 Nhóm âm hôn',
    list: [
      {
        phonetic: 'ʊ',
        audioSrc: null,
        desc: 'u ngắn, tròn môi nhẹ, dứt khoác, không căng',
        mouthShape: uMS,
        examples: [
          {
            word: 'foot',
            phonetic: '/fʊt/',
          },
          {
            word: 'put',
            phonetic: '/pʊt/',
          },
        ],
      },
      {
        phonetic: 'i:',
        audioSrc: null,
        desc: 'Miệng cười, nhấn mạnh, nặng và căng',
        mouthShape: iMS,
        examples: [
          {
            word: 'sheep',
            phonetic: '/ʃi:p/',
          },
          {
            word: 'bee',
            phonetic: '/bi:/',
          },
        ],
      },
    ],
  },
];
