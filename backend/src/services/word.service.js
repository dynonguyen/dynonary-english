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

exports.searchWord = async (word = '', limit = 20, select = '') => {
  try {
    const regex = new RegExp(`^${word}.*`, 'gi');
    const list = await WordModel.find({ word: regex })
      .limit(limit)
      .select(select);
    return list;
  } catch (error) {
    throw error;
  }
};

exports.getWordDetail = async (word = '') => {
  try {
    const res = await WordModel.findOne({ word });
    return res;
  } catch (error) {
    throw error;
  }
};
