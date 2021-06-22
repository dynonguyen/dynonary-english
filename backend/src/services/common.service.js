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

exports.isExistWord = async (word = '') => {
  try {
    if (word === '') {
      return false;
    }

    return await WordModel.exists({ word });
  } catch (error) {
    throw error;
  }
};