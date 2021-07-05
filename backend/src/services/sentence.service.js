const SentenceModel = require('../models/sentence.model');

exports.createSentence = async (sentence, mean, note, topics) => {
  try {
    const result = SentenceModel.create({ sentence, mean, note, topics });

    if (result) return true;
    return false;
  } catch (error) {
    throw error;
  }
};
