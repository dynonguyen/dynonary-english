const {
  getWordPack: serviceGetWordPack,
} = require('../services/common.service');

exports.getWordPack = async (req, res, next) => {
  try {
    const { page, perPage, packInfo } = req.query;
    const pageInt = parseInt(page),
      perPageInt = parseInt(perPage);
    const skip = (pageInt - 1) * perPageInt;

    const packList = await serviceGetWordPack(
      JSON.parse(packInfo),
      skip,
      perPageInt,
      '-_id type word mean level phonetic examples picture',
      null,
      { $and: [{ picture: { $ne: null } }, { picture: { $ne: '' } }] },
    );

    return res.status(200).json({ packList });
  } catch (error) {
    console.error('GET WORD PACK ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
