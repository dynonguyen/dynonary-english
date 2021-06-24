const WordModel = require('../models/word.model');

// ======== CORRECT WORD GAME ========
exports.getWordPack = async (packInfo = {}) => {
  try {
    const { topic, ...restPackInfo } = packInfo;

    // generate query string
    let query = {};
    for (let key in restPackInfo) {
      if (packInfo[key] !== '-1') {
        query[key] = packInfo[key];
      }
    }

    if (topic !== '-1') {
      query.topics = { $elemMatch: { $eq: topic } };
    }

    const packList = await WordModel.find(query)
      .limit(500)
      .select('-_id word mean phonetic synonyms');

    return packList;
  } catch (error) {
    throw error;
  }
};
