const { isExistSentence } = require('../services/common.service');
const { createSentence } = require('../services/sentence.service');

exports.postContributeSentence = async (req, res, next) => {
  try {
    const { sentence, mean, note } = req.body;

    const isExist = await isExistSentence(sentence);

    if (isExist) {
      return res
        .status(409)
        .json({ message: 'Câu đã tồn tại. Vui lòng thêm câu khác. Cảm ơn' });
    }

    const isCreated = await createSentence(sentence, mean, note);

    if (isCreated) {
      return res.status(200).json({ message: 'success' });
    }

    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  } catch (error) {
    console.error('POST CONTRIBUTE SENTENCE ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
