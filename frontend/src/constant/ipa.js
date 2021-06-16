// audios
import aiAu from 'assets/audios/ipa/diphthongs/ai.mp3';
import eiAu from 'assets/audios/ipa/diphthongs/ei.mp3';
import eowAu from 'assets/audios/ipa/diphthongs/eow.mp3';
import iowAu from 'assets/audios/ipa/diphthongs/iow.mp3';
import oiAu from 'assets/audios/ipa/diphthongs/oi.mp3';
import owuAu from 'assets/audios/ipa/diphthongs/owu.mp3';
import uowAu from 'assets/audios/ipa/diphthongs/uow.mp3';
import aLongAu from 'assets/audios/ipa/vowels/a-long.mp3';
import aaAu from 'assets/audios/ipa/vowels/aa.mp3';
import aeAu from 'assets/audios/ipa/vowels/ae.mp3';
import eAu from 'assets/audios/ipa/vowels/e.mp3';
import iLongAu from 'assets/audios/ipa/vowels/i-long.mp3';
import iShortAu from 'assets/audios/ipa/vowels/i-short.mp3';
import oUkAu from 'assets/audios/ipa/vowels/o-uk.mp3';
import oAu from 'assets/audios/ipa/vowels/o.mp3';
import owLongAu from 'assets/audios/ipa/vowels/ow-long.mp3';
import owAu from 'assets/audios/ipa/vowels/ow.mp3';
import uLongAu from 'assets/audios/ipa/vowels/u-long.mp3';
import uShortAu from 'assets/audios/ipa/vowels/u-short.mp3';
import auAu from 'assets/audios/ipa/diphthongs/au.mp3';
// images
import aMS from 'assets/images/ipa/a.jpg';
import eMS from 'assets/images/ipa/e.jpg';
import eiMS from 'assets/images/ipa/ei.jpg';
import iMS from 'assets/images/ipa/i.jpg';
import ouMS from 'assets/images/ipa/ou.jpg';
import uMS from 'assets/images/ipa/u.jpg';

export const VOWELS = [
  {
    title: '😁 Nhóm âm cười',
    list: [
      {
        phonetic: 'ɪ',
        audioSrc: iShortAu,
        mouthShape: eMS,
        desc: 'i ngắn, đọc dứt khoát như đang kêu ai đó, miệng không căng',
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
        mouthShape: iMS,
        desc: 'i dài, miệng cười, nhấn mạnh, nặng và căng',
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
        audioSrc: uShortAu,
        mouthShape: uMS,
        desc: 'u ngắn, tròn môi nhẹ, dứt khoát, không căng',
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
        phonetic: 'u:',
        audioSrc: uLongAu,
        mouthShape: ouMS,
        desc: 'u dài, chu và tròn môi, căng và mạnh',
        examples: [
          {
            word: 'blue',
            phonetic: '/blu:/',
          },
          {
            word: 'group',
            phonetic: '/gru:p/',
          },
        ],
      },
    ],
  },
  {
    title: '😱 Nhóm âm shock',
    list: [
      {
        phonetic: 'ɔ:',
        audioSrc: oAu,
        mouthShape: aMS,
        desc: 'Như o dài, nặng và nhấn mạnh',
        examples: [
          {
            word: 'law',
            phonetic: '/lɔ:/',
          },
          {
            word: 'thought',
            phonetic: '/θɔ:t/',
          },
        ],
      },
      {
        phonetic: 'ɒ',
        audioSrc: oUkAu,
        mouthShape: aMS,
        desc: 'Đọc như o ngắn, dứt khoát. Âm này trong UK như ɔ: còn US như ɑ:',
        examples: [
          {
            word: 'got',
            phonetic: '/ɡɒt/',
          },
          {
            word: 'shot',
            phonetic: '/ʃɒt/',
          },
        ],
      },
    ],
  },
  {
    title: '😮 Nhóm âm mở',
    list: [
      {
        phonetic: 'e',
        audioSrc: eAu,
        mouthShape: eMS,
        desc: 'Mở miệng vừa, đọc như e. Giữ trọng tâm',
        examples: [
          {
            word: 'ten',
            phonetic: '/ten/',
          },
          {
            word: 'medal',
            phonetic: "/'medəl/",
          },
        ],
      },
      {
        phonetic: 'æ',
        audioSrc: aeAu,
        mouthShape: eiMS,
        desc: 'Mở miệng đọc nhẹ e nối liền a, bắt đầu với e và kết thúc a. Giữ trọng tâm',
        examples: [
          {
            word: 'back',
            phonetic: '/bæk/',
          },
          {
            word: 'trap',
            phonetic: '/træp/',
          },
        ],
      },
      {
        phonetic: 'ɑ:',
        audioSrc: aLongAu,
        mouthShape: aMS,
        desc: 'Đọc là a nhưng dài, nặng, nhấn mạnh. Giữ trọng tâm',
        examples: [
          {
            word: 'fast',
            phonetic: '/fɑ:st/',
          },
          {
            word: 'arm',
            phonetic: '/ɑ:m/',
          },
        ],
      },
      {
        phonetic: 'ʌ',
        audioSrc: aaAu,
        mouthShape: aMS,
        desc: 'Đọc như â. Giữ trọng tâm',
        examples: [
          {
            word: 'cup',
            phonetic: '/kʌp/',
          },
          {
            word: 'drum',
            phonetic: '/drʌm/',
          },
        ],
      },
    ],
  },
  {
    title: '😝 Nhóm âm ơ',
    list: [
      {
        phonetic: 'ə',
        audioSrc: owAu,
        mouthShape: uMS,
        desc: 'Đọc như ơ, cong nhẹ lưỡi nếu có r, dứt khoát',
        examples: [
          {
            word: 'ago',
            phonetic: '/əˈɡəʊ/',
          },
          {
            word: 'Never',
            phonetic: '/ˈnevə(r)/',
          },
        ],
      },
      {
        phonetic: 'ɜ:',
        audioSrc: owLongAu,
        mouthShape: uMS,
        desc: 'Đọc như ơ dài, cong lưỡi, nhấn mạnh',
        examples: [
          {
            word: 'bird',
            phonetic: '/bɜ:d/',
          },
          {
            word: 'nurse',
            phonetic: '/nɜ:s/',
          },
        ],
      },
    ],
  },
];

export const DIPHTHONGS = [
  {
    title: '😯 Nhóm âm ơ',
    list: [
      {
        phonetic: 'iə',
        audioSrc: iowAu,
        mouthShape: eMS,
        desc: 'Đọc là iơ hoặc ia, cong lưỡi nếu có r',
        examples: [
          {
            word: 'here',
            phonetic: '/hiə(r)/',
          },
          {
            word: 'near',
            phonetic: '/niə(r)/',
          },
        ],
      },
      {
        phonetic: 'ʊə',
        audioSrc: uowAu,
        mouthShape: uMS,
        desc: 'Đọc là uơ hoặc ua, cong lưỡi nếu có r',
        examples: [
          {
            word: 'pure',
            phonetic: '/pjʊə(r)/',
          },
          {
            word: 'tour',
            phonetic: '/tʊə(r)/',
          },
        ],
      },
      {
        phonetic: 'eə',
        audioSrc: eowAu,
        mouthShape: eMS,
        desc: 'Đọc là eơ liền nhau, nhanh, ơ hơi câm',
        examples: [
          {
            word: 'care',
            phonetic: '/keə(r)/',
          },
          {
            word: 'hair',
            phonetic: '/heə(r)/',
          },
        ],
      },
    ],
  },
  {
    title: '😄 Nhóm âm ɪ',
    list: [
      {
        phonetic: 'eɪ',
        audioSrc: eiAu,
        mouthShape: eiMS,
        desc: 'Đọc là êi hoặc ây',
        examples: [
          {
            word: 'page',
            phonetic: '/peɪdʒ/',
          },
          {
            word: 'say',
            phonetic: '/seɪ/',
          },
        ],
      },
      {
        phonetic: 'aɪ',
        audioSrc: aiAu,
        mouthShape: aMS,
        desc: 'Đọc là ai',
        examples: [
          {
            word: 'five',
            phonetic: '/faɪv/',
          },
          {
            word: 'sky',
            phonetic: '/skaɪ/',
          },
        ],
      },
      {
        phonetic: 'ɔi',
        audioSrc: oiAu,
        mouthShape: uMS,
        desc: 'Đọc là oi',
        examples: [
          {
            word: 'boy',
            phonetic: '/bɔi/',
          },
          {
            word: 'join',
            phonetic: '/dʒɔin/',
          },
        ],
      },
    ],
  },
  {
    title: '🤯 Nhóm âm ơ',
    list: [
      {
        phonetic: 'əʊ',
        audioSrc: owuAu,
        mouthShape: uMS,
        desc: 'Đọc là âu, chu môi',
        examples: [
          {
            word: 'home',
            phonetic: '/həʊm/',
          },
          {
            word: 'low',
            phonetic: '/ləʊ/',
          },
        ],
      },
      {
        phonetic: 'aʊ',
        audioSrc: auAu,
        mouthShape: uMS,
        desc: 'Đọc như ao',
        examples: [
          {
            word: 'house',
            phonetic: '/haʊs/',
          },
          {
            word: 'flower',
            phonetic: '/ˈflaʊə(r)/',
          },
        ],
      },
    ],
  },
];

export const CONSONANTS = [];
