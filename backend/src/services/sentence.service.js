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

exports.getTotalSentences = async () => {
  try {
    const total = await SentenceModel.countDocuments({});
    return total;
  } catch (error) {
    throw error;
  }
};

exports.getSentenceList = async (page = 1, perPage = 20) => {
  try {
    const pageInt = parseInt(page),
      perPageInt = parseInt(perPage);
    const skip = (pageInt - 1) * perPageInt;

    const list = await SentenceModel.find({})
      .skip(skip)
      .limit(perPageInt)
      .select('-_id -isChecked -topics');

    return list;
  } catch (error) {
    throw error;
  }
};
