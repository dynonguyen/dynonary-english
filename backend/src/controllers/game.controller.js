const { MAX } = require('../constant');
const { randomWordQuestionPack } = require('../helper/game.helper');
const { getWordPack } = require('../services/common.service');

// ======== CORRECT WORD GAME ========
exports.getWordPackCWG = async (req, res, next) => {
  try {
    const packInfo = req.query;
    const packages = await getWordPack(
      packInfo,
      0,
      500,
      '-_id word mean phonetic synonyms',
    );

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

// ======== WORD MATCH GAME ========
exports.getWordPackWMG = async (req, res, next) => {
  try {
    const packInfo = req.query;
    const seedList = await getWordPack(packInfo, 0, 500, '-_id word mean');
    if (seedList) {
      return res.status(200).json({
        wordPack: seedList
          .sort((_) => Math.random() - 0.5)
          .slice(0, MAX.LEN_WORD_PACK),
      });
    }

    return res.status(200).json({ wordPack: [] });
  } catch (error) {
    console.error('GET WORD PACK WMG ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
