const SentenceModel = require('../models/sentence.model');

exports.createSentence = async (sentence, mean, note) => {
  try {
    const result = SentenceModel.create({ sentence, mean, note });

    if (result) return true;
    return false;
  } catch (error) {
    throw error;
  }
};
