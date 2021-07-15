const { isExistSentence } = require('../services/common.service');
const {
  createSentence,
  getTotalSentences: getTotalSentencesService,
  getSentenceList: getSentenceListService,
} = require('../services/sentence.service');

exports.postContributeSentence = async (req, res, next) => {
  try {
    const { sentence, mean, note, topics } = req.body;

    const isExist = await isExistSentence(sentence);

    if (isExist) {
      return res
        .status(409)
        .json({ message: 'Câu đã tồn tại. Vui lòng thêm câu khác. Cảm ơn' });
    }

    const isCreated = await createSentence(sentence, mean, note, topics);

    if (isCreated) {
      return res.status(200).json({ message: 'success' });
    }

    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  } catch (error) {
    console.error('POST CONTRIBUTE SENTENCE ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.getTotalSentences = async (req, res, next) => {
  try {
    let { topics } = req.query;
    topics = typeof topics === 'string' ? JSON.parse(topics) : [];

    const total = await getTotalSentencesService(topics);

    return res.status(200).json({ total });
  } catch (error) {
    console.error('GET TOTAL SENTENCES ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.getSentenceList = async (req, res, next) => {
  try {
    let { page = 1, perPage = 20, topics } = req.query;
    topics = typeof topics === 'string' ? JSON.parse(topics) : [];

    const sentenceList = await getSentenceListService(page, perPage, topics);

    return res.status(200).json({ sentenceList });
  } catch (error) {
    console.error(' ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
