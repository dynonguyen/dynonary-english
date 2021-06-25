const { countWordPack } = require('../services/common.service');

exports.getTotalWordPack = async (req, res, next) => {
  try {
    const { packInfo } = req.query;
    const total = (await countWordPack(JSON.parse(packInfo))) || 0;
    return res.status(200).json({ total });
  } catch (error) {
    console.error('GET TOTAL WORD PACK ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
