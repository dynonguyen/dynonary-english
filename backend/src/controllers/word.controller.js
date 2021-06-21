const { cloudinary } = require('../configs/cloudinary.config');
const { isExistWord, uploadImage } = require('../services/common.service');
const { createNewWord } = require('../services/word.service');

exports.postContributeWord = async (req, res, next) => {
  try {
    const { picture, word, ...rest } = req.body;

    // check existence of word
    const isExist = await isExistWord(word);
    if (isExist) {
      return res
        .status(409)
        .json({ message: `Từ "${word}" đã tồn tại trong từ điển` });
    }

    // upload description picture if available
    let pictureUrl = null;
    if (picture) {
      pictureUrl = await uploadImage(picture, 'dynonary/words');
    }
    console.log(pictureUrl);

    // create the new word
    const isCreateSuccess = await createNewWord({
      word,
      picture: pictureUrl,
      ...rest,
    });

    if (isCreateSuccess) {
      return res.status(200).json({ message: 'Tạo từ mới thành công' });
    }
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  } catch (error) {
    console.error('POST CONTRIBUTE WORD ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
