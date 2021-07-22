// audios
import aiAu from 'assets/audios/ipa/diphthongs/ai.mp3';
import auAu from 'assets/audios/ipa/diphthongs/au.mp3';
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
// images
import aMS from 'assets/images/ipa/a.jpg';
import bMS from 'assets/images/ipa/b.jpg';
import dMS from 'assets/images/ipa/d.jpg';
import eMS from 'assets/images/ipa/e.jpg';
import eiMS from 'assets/images/ipa/ei.jpg';
import fMS from 'assets/images/ipa/f.jpg';
import iMS from 'assets/images/ipa/i.jpg';
import lMS from 'assets/images/ipa/l.jpg';
import ouMS from 'assets/images/ipa/ou.jpg';
import tMS from 'assets/images/ipa/t.jpg';
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
        desc: 'Như o dài hoặc ô, nặng và nhấn mạnh',
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
            phonetic: '/medəl/',
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

export const CONSONANTS = [
  {
    title: '💋 Nhóm 2 môi',
    list: [
      {
        phonetic: 'm',
        audioSrc: null,
        mouthShape: bMS,
        desc: 'Mím 2 môi, phát âm là m. Hữu thanh',
        examples: [
          {
            word: 'man',
            phonetic: '/mæn/',
          },
          {
            word: 'some',
            phonetic: '/sʌm/',
          },
        ],
      },
      {
        phonetic: 'p',
        audioSrc: null,
        mouthShape: bMS,
        desc: 'Mím 2 môi, phát âm là p dứt khoát, bật hơi. Vô thanh',
        examples: [
          {
            word: 'park',
            phonetic: '/pɑːk/',
          },
          {
            word: 'soup',
            phonetic: '/suːp/',
          },
        ],
      },
      {
        phonetic: 'b',
        audioSrc: null,
        mouthShape: bMS,
        desc: 'Mím 2 môi, phát âm là b dứt khoát, KHÔNG bật hơi. Hữu thanh',
        examples: [
          {
            word: 'bad',
            phonetic: '/bæd/',
          },
          {
            word: 'web',
            phonetic: '/web/',
          },
        ],
      },
    ],
  },
  {
    title: '👄 Nhóm môi răng',
    list: [
      {
        phonetic: 'f',
        audioSrc: null,
        mouthShape: fMS,
        desc: 'Răng trên chạm nhẹ môi dưới, thổi hơi nhẹ. Vô thanh',
        examples: [
          {
            word: 'fall',
            phonetic: '/fɔ:l/',
          },
          {
            word: 'safe',
            phonetic: '/seɪf/',
          },
        ],
      },
      {
        phonetic: 'v',
        audioSrc: null,
        mouthShape: fMS,
        desc: 'Răng trên chạm nhẹ môi dưới, phát âm v. Hữu thanh',
        examples: [
          {
            word: 'voice',
            phonetic: '/vɔɪs/',
          },
          {
            word: 'save',
            phonetic: '/seɪv/',
          },
        ],
      },
    ],
  },
  {
    title: '🦷 Nhóm răng',
    list: [
      {
        phonetic: 'θ',
        audioSrc: null,
        mouthShape: lMS,
        desc: 'Lưỡi đặt giữ 2 răng, cắn nhẹ đầu lưỡi (nhẹ thôi nhé 🙂), thổi hơi, thụt lưỡi vào và đọc "th". Vô thanh',
        examples: [
          {
            word: 'think',
            phonetic: '/θɪŋk/',
          },
          {
            word: 'thank',
            phonetic: '/θæŋk/',
          },
        ],
      },
      {
        phonetic: 'ð',
        audioSrc: null,
        mouthShape: lMS,
        desc: 'Lưỡi đặt giữ 2 răng, cắn nhẹ đầu lưỡi, rung dây thanh, thụt lưỡi vào và đọc "đ". Hữu thanh',
        examples: [
          {
            word: 'there',
            phonetic: '/ðeə(r)/',
          },
          {
            word: 'then',
            phonetic: '/ðen/',
          },
        ],
      },
    ],
  },
  {
    title: '😀 Nhóm ổ răng',
    list: [
      {
        phonetic: 't',
        audioSrc: null,
        mouthShape: tMS,
        desc: 'Âm tắc, chặn hơi, phát âm như t nhưng không rung dây thanh. Vô thanh',
        examples: [
          {
            word: 'tea',
            phonetic: '/tiː/',
          },
          {
            word: 'sent',
            phonetic: '/sent/',
          },
        ],
      },
      {
        phonetic: 'd',
        audioSrc: null,
        mouthShape: dMS,
        desc: 'Âm tắc, chặn hơi, phát âm như d. Hữu thanh',
        examples: [
          {
            word: 'stand',
            phonetic: '/stænd/',
          },
          {
            word: 'sand',
            phonetic: '/sænd/',
          },
        ],
      },
      {
        phonetic: 's',
        audioSrc: null,
        mouthShape: iMS,
        desc: 'Đọc là s nhanh, nhẹ, phát âm gió "xì xì", không rung. Vô thanh',
        examples: [
          {
            word: 'say',
            phonetic: '/seɪ/',
          },
          {
            word: 'rice',
            phonetic: '/raɪs/',
          },
        ],
      },
      {
        phonetic: 'z',
        audioSrc: null,
        mouthShape: iMS,
        desc: 'Đọc là s nhanh, nhẹ, phát âm gió như con ruồi kêu, rung. Hữu thanh',
        examples: [
          {
            word: 'zoo',
            phonetic: '/zuː/',
          },
          {
            word: 'rose',
            phonetic: '/rəʊz/',
          },
        ],
      },
      {
        phonetic: 'n',
        audioSrc: null,
        mouthShape: dMS,
        desc: 'Đọc như n nhưng hơi nghẹn lại. Hữu thanh',
        examples: [
          {
            word: 'no',
            phonetic: '/nəʊ/',
          },
          {
            word: 'button',
            phonetic: '/ˈbʌtn/',
          },
        ],
      },
      {
        phonetic: 'l',
        audioSrc: null,
        mouthShape: lMS,
        desc: 'Đọc là l. Hữu thanh',
        examples: [
          {
            word: 'leg',
            phonetic: '/leɡ/',
          },
          {
            word: 'call',
            phonetic: '/kɔːl/',
          },
        ],
      },
    ],
  },
  {
    title: '😗 Nhóm âm sau ổ răng',
    list: [
      {
        phonetic: 'ʃ',
        audioSrc: null,
        mouthShape: iMS,
        desc: 'Đọc là s nhẹ (uốn lưỡi), chu môi, hơi gió. Vô thanh',
        examples: [
          {
            word: 'She',
            phonetic: '/ʃiː/',
          },
          {
            word: 'wash',
            phonetic: '/wɒʃ/',
          },
        ],
      },
      {
        phonetic: 'ʒ',
        audioSrc: null,
        mouthShape: iMS,
        desc: 'Đọc là giơ nhẹ, phát âm ngắn. Hữu thanh',
        examples: [
          {
            word: 'casual',
            phonetic: '/ˈkæʒuəl/',
          },
          {
            word: 'vision',
            phonetic: '/ˈvɪʒn/',
          },
        ],
      },
      {
        phonetic: 'tʃ',
        audioSrc: null,
        mouthShape: tMS,
        desc: 'Đọc là ch. Vô thanh',
        examples: [
          {
            word: 'chuck',
            phonetic: '/tʃʌk/',
          },
          {
            word: 'match',
            phonetic: '/mætʃ/',
          },
        ],
      },
      {
        phonetic: 'dʒ',
        audioSrc: null,
        mouthShape: dMS,
        desc: 'Đọc là jơ (uốn lưỡi) ngắn và dứt khoát. Hữu thanh',
        examples: [
          {
            word: 'june',
            phonetic: '/dʒuːn/',
          },
          {
            word: 'page',
            phonetic: '/peɪdʒ/',
          },
        ],
      },
      {
        phonetic: 'r',
        audioSrc: null,
        mouthShape: uMS,
        desc: 'Đọc là r, cong lưỡi. Hữu thanh',
        examples: [
          {
            word: 'red',
            phonetic: '/red/',
          },
          {
            word: 'per',
            phonetic: '/pə(r)/',
          },
        ],
      },
    ],
  },
  {
    title: '💪 Nhóm âm ngạc cứng',
    list: [
      {
        phonetic: 'j',
        audioSrc: null,
        mouthShape: iMS,
        desc: 'Đọc như chữ z (nhấn mạnh). Khẩu hình như nhóm âm cười nhưng mạnh hơn. Hữu thanh',
        examples: [
          {
            word: 'yes',
            phonetic: '/jes/',
          },
          {
            word: 'menu',
            phonetic: '/ˈmenjuː/',
          },
        ],
      },
      {
        phonetic: 'w',
        audioSrc: null,
        mouthShape: ouMS,
        desc: 'Đọc như qu. Hữu thanh',
        examples: [
          {
            word: 'why',
            phonetic: '/waɪ/',
          },
          {
            word: 'question',
            phonetic: '/ˈkwestʃən/',
          },
        ],
      },
    ],
  },
  {
    title: '🍦 Nhóm âm mềm',
    list: [
      {
        phonetic: 'k',
        audioSrc: null,
        mouthShape: dMS,
        desc: 'Đọc như c nhưng nghẹn lại, không rung. Vô thanh',
        examples: [
          {
            word: 'cat',
            phonetic: '/kæt/',
          },
          {
            word: 'dark',
            phonetic: '/dɑːk/',
          },
        ],
      },
      {
        phonetic: 'g',
        audioSrc: null,
        mouthShape: dMS,
        desc: 'Đọc như g. Hữu thanh',
        examples: [
          {
            word: 'go',
            phonetic: '/ɡəʊ/',
          },
          {
            word: 'bag',
            phonetic: '/bæg/',
          },
        ],
      },
      {
        phonetic: 'ŋ',
        audioSrc: null,
        mouthShape: dMS,
        desc: 'Đọc như ng, nhẹ và dứt khoát. Hữu thanh',
        examples: [
          {
            word: 'singer',
            phonetic: '/ˈsɪŋə(r)/',
          },
          {
            word: 'tongue',
            phonetic: '/tʌŋ/',
          },
        ],
      },
    ],
  },
  {
    title: '😶 âm thanh môn',
    list: [
      {
        phonetic: 'h',
        audioSrc: null,
        mouthShape: aMS,
        desc: 'Đọc như h nhẹ nhàng, thở phào nhẹ nhõm. Vô thanh',
        examples: [
          {
            word: 'her',
            phonetic: '/hə(r)/',
          },
          {
            word: 'who',
            phonetic: '/huː/',
          },
        ],
      },
    ],
  },
];
