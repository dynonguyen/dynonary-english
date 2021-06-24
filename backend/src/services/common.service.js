const { cloudinary } = require('../configs/cloudinary.config');
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

exports.getWordPack = async (
  packInfo = {},
  skip = 0,
  limit = 500,
  select = '',
) => {
  try {
    const { topics, ...restPackInfo } = packInfo;
    const topicList = typeof topics === 'string' ? JSON.parse(topics) : topics;

    // generate query string
    let query = {};
    for (let key in restPackInfo) {
      if (packInfo[key] !== '-1') {
        query[key] = packInfo[key];
      }
    }

    if (topicList.length > 0) {
      let orList = [];
      topicList.forEach((topic) =>
        orList.push({ topics: { $elemMatch: { $eq: topic } } }),
      );
      console.log(orList);
      query['$or'] = orList;
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
