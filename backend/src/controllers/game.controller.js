const { getWordPack } = require('../services/game.service');
const MIN_CONFUSING_LIST = 20;
const DEFAULT_LEN_WORD_PACK = 100;

function generateWordWrongList(word = '', list = [], isCheck = false) {
  const n = list.length;
  if (!n || n <= 3) {
    return [];
  }
  const filteredList = isCheck ? list : list.filter((i) => i.word !== word);
  return filteredList
    .map((i) => ({ word: i.word, phonetic: i.phonetic }))
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function randomWordPackQuestion(list = [], amount = 100) {
  const n = amount < list.length ? amount : list.length;
  let result = [];

  // shuffle list and generate seed list
  const seedList = list.sort(() => Math.random() - 0.5).slice(0, n);
  let confusingList = list.slice(n + 1);
  const isEnough = confusingList.length > MIN_CONFUSING_LIST;

  for (let i = 0; i < n; ++i) {
    const { word, mean, phonetic } = seedList[i];
    result.push({
      word,
      mean,
      phonetic,
      // If size of confusing list too small then use all item of list
      wrongList: isEnough
        ? generateWordWrongList(word, confusingList, true)
        : generateWordWrongList(word, list, false),
    });
  }

  return result;
}

// ======== CORRECT WORD GAME ========
exports.getWordPackCWG = async (req, res, next) => {
  try {
    const packages = await getWordPack({ ...req.query });
    const packLen =
      packages.length > DEFAULT_LEN_WORD_PACK
        ? DEFAULT_LEN_WORD_PACK
        : packages.length;

    if (packLen < 4) {
      return res.status(200).json({ wordPack: [] });
    }
    const wordPack = randomWordPackQuestion(packages, packLen);
    return res.status(200).json({ wordPack });
  } catch (error) {
    console.error('GET WORD PACK CWG ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
