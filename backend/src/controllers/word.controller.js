exports.postContributeWord = async (req, res, next) => {
  try {
    const { picture, word } = req.body;
  } catch (error) {
    console.error('POST CONTRIBUTE WORD ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
