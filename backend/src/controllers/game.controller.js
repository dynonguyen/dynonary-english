const { MAX } = require('../constant');
const { randomWordQuestionPack } = require('../helper/game.helper');
const { getWordPack } = require('../services/game.service');

// ======== CORRECT WORD GAME ========
exports.getWordPackCWG = async (req, res, next) => {
  try {
    const packages = await getWordPack({ ...req.query });

    const packLen =
      packages.length > MAX.LEN_WORD_PACK ? MAX.LEN_WORD_PACK : packages.length;

    if (packLen < 4) {
      return res.status(200).json({ wordPack: [] });
    }
    const wordPack = randomWordQuestionPack(packages, packLen);
    return res.status(200).json({ wordPack });
  } catch (error) {
    console.error('GET WORD PACK CWG ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
