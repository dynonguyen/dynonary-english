const { cloudinary } = require('../configs/cloudinary.config');
const { convertPackInfoToQueryStr } = require('../helper/word-pack.helper');
const SentenceModel = require('../models/sentence.model');
const WordModel = require('../models/word.model');

exports.uploadImage = async (imgSrc, folderName = '', config = {}) => {
  try {
    const result = await cloudinary.uploader.upload(imgSrc, {
      folder: folderName,
      ...config,
    });
    const { secure_url = null } = result;
    return secure_url;
  } catch (error) {
    throw error;
  }
};

exports.isExistWord = async (word = '', type = '') => {
  try {
    if (word === '' || type === '') {
      return false;
    }

    return await WordModel.exists({ word, type });
  } catch (error) {
    throw error;
  }
};

exports.isExistSentence = async (sentence = '') => {
  if (sentence === '') return false;
  const newRegex = new RegExp(sentence, 'i');
  return await SentenceModel.exists({ sentence: newRegex });
};

exports.getWordPack = async (
  packInfo = {},
  skip = 0,
  limit = 500,
  select = '',
  expandQuery = null,
) => {
  try {
    let query = convertPackInfoToQueryStr(packInfo);

    // add expand query
    if (expandQuery && typeof expandQuery === 'object') {
      Object.assign(query, expandQuery);
    }

    const packList = await WordModel.find(query)
      .skip(skip)
      .limit(limit)
      .select(select);

    return packList;
  } catch (error) {
    throw error;
  }
};

exports.countWordPack = async (packInfo = {}) => {
  try {
    let query = convertPackInfoToQueryStr(packInfo);
    return await WordModel.countDocuments(query);
  } catch (error) {
    throw error;
  }
};
