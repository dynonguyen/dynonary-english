const { updateTop } = require('../services/hightscore.service');

exports.putUpdateHighScore = async (req, res, next) => {
  try {
    const { name, score } = req.body;
    const { accountId } = req.user;
    if (!accountId) {
      return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }

    await updateTop(accountId, name, score);
  } catch (error) {
    console.error('PUT UPDATE HIGHT SCORE ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
