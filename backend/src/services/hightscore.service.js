const { MAX_TOP, HIGHSCORE_NAME } = require('../constant/highscore');
const HighscoreModel = require('../models/highscore.model');

exports.updateTop = async (accountId, name, score) => {
  try {
    const tops = await HighscoreModel.findOne({ name });

    let unit = '';
    for (let key in HIGHSCORE_NAME) {
      if (HIGHSCORE_NAME[key].name === name) {
        unit = HIGHSCORE_NAME[key].unit;
        break;
      }
    }

    let newTops = [];
    if (!Boolean(tops)) {
      newTops.push({ accountId, score: Number(score) });
      HighscoreModel.create({
        name,
        unit,
        top: newTops,
      });
    } else {
      newTops = tops.top.filter(
        (i) => i.accountId.toString() !== accountId.toString(),
      );
      newTops.push({ accountId, score: Number(score) });
      newTops = newTops
        .sort((a, b) => Number(a.score) - Number(b.score))
        .slice(0, MAX_TOP);
      await HighscoreModel.updateOne({ name }, { top: newTops });
    }
  } catch (error) {
    throw error;
  }
};
