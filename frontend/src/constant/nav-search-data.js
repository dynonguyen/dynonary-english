import { ROUTES } from 'constant';

const NAV_SEARCH_DATA = [
  {
    title: 'bảng phiên âm ipa',
    searchKey:
      'luyện nghe phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế ipa international phonetic alphabet',
    to: ROUTES.IPA,
  },
  {
    title: 'dịch văn bản',
    searchKey: 'translate anh-việt việt-anh',
    to: '/',
  },
  {
    title: '1000+ câu giao tiếp',
    searchKey:
      'luyện nghe nói câu tiếng anh giao tiếp communication sentences speak phrase',
    to: ROUTES.COMMUNICATION_PHRASE,
  },
  {
    title: 'từ vựng flashcard',
    searchKey: 'flash card phương pháp học vocabulary',
    to: ROUTES.FLASHCARD,
  },
  {
    title: 'từ điển Dynonary',
    searchKey:
      'danh sách từ phân loại cấp độ vocabulary dictionary level type list dynonary',
    to: ROUTES.DYNO_DICTIONARY,
  },
  {
    title: 'từ vựng TOEIC',
    searchKey: 'vocab vocabulary toeic exam từ thường gặp',
    to: ROUTES.TOEIC_DICTIONARY,
  },
  {
    title: 'từ yêu thích của bạn',
    searchKey: 'favorite list vocab vocabulary đã lưu của bạn',
    to: ROUTES.FAVORITE,
  },
  {
    title: 'động từ bất quy tắc',
    searchKey: 'irregular verb verbs list bảng động từ',
    to: ROUTES.IRREGULAR,
  },
  {
    title: 'học ngữ pháp',
    searchKey: 'grammar blog cấu trúc structure list',
    to: ROUTES.GRAMMAR,
  },
  {
    title: 'play games',
    searchKey: 'game play exam practice ôn tập luyện tập test exams',
    to: ROUTES.GAMES.HOME,
  },
  {
    title: 'game hãy chọn từ đúng',
    searchKey: 'correct word',
    to: ROUTES.GAMES.CORRECT_WORD,
  },
  {
    title: 'game hãy chọn từ đúng nâng cao',
    searchKey: 'correct word advance synonyms antonyms',
    to: ROUTES.GAMES.CORRECT_WORD_ADV,
  },
  {
    title: 'đóng góp',
    searchKey: 'contribute contribution help giúp đỡ nâng cao cải thiện',
    to: ROUTES.CONTRIBUTION,
  },
  {
    title: 'học cùng bạn bè',
    searchKey: 'learn with friend my friends connect game',
    to: '/',
  },
];

export default NAV_SEARCH_DATA;
