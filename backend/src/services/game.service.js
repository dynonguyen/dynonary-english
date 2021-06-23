const WordModel = require('../models/word.model');

// ======== CORRECT WORD GAME ========
exports.getWordPack = async (packInfo = {}) => {
  try {
    // generate query string
    let query = {};
    for (let key in packInfo) {
      if (packInfo[key] !== '-1') {
        query[key] = packInfo[key];
      }
    }

    const packList = await WordModel.find(query)
      .limit(1000)
      .select('-_id word mean phonetic synonyms');

    return packList;
  } catch (error) {
    throw error;
  }
};
