const { cloudinary } = require('../configs/cloudinary.config');

exports.uploadImage = async (imgSrc, folderName = '', config = {}) => {
  try {
    const result = await cloudinary.uploader.upload(imgSrc, {
      folder: folderName,
      ...config,
    });
    const { secure_url } = result;
    return secure_url;
  } catch (error) {
    throw error;
  }
};
