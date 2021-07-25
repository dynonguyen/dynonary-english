const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const highscoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
    trim: true,
  },
  top: [
    {
      accountId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'account',
      },
      score: Number,
    },
  ],
});

const HighscoreModel = mongoose.model(
  'highscore',
  highscoreSchema,
  'highscores',
);

module.exports = HighscoreModel;
