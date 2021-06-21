const WordModel = require('../models/word.model');

exports.createNewWord = async (wordInfo) => {
  try {
    const newWord = await WordModel.create({ ...wordInfo });

    if (newWord) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
