const { addTopicsQuery } = require('../helper/word-pack.helper');
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

exports.getTotalSentences = async (topics = []) => {
  try {
    let query = {};

    // query multiple topic
    addTopicsQuery(topics, query);

    const total = await SentenceModel.countDocuments(query);
    return total;
  } catch (error) {
    throw error;
  }
};

exports.getSentenceList = async (page = 1, perPage = 20, topics = []) => {
  try {
    const pageInt = parseInt(page),
      perPageInt = parseInt(perPage);
    const skip = (pageInt - 1) * perPageInt;

    let query = {};
    // query multiple topic
    addTopicsQuery(topics, query);

    const list = await SentenceModel.find(query)
      .skip(skip)
      .limit(perPageInt)
      .select('-_id -isChecked -topics');

    return list;
  } catch (error) {
    throw error;
  }
};
