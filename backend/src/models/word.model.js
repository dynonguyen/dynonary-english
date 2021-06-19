const mongoose = require('mongoose');
const { SPECIALTY_TYPES, TOPIC_TYPES } = require('../constant');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  word: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
    lowercase: true,
  },

  mean: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },

  type: {
    // type is String because a string = 32 bit + (n char * 8) + 8 => max = 72 bit = 9 B
    // If type is number => 1 word = 64 bit = 8 B
    // However, the quantity of conj, prep is much less than the quantity of the other types.
    type: String,
    required: true,
    enum: ['n', 'adj', 'adv', 'v', 'conj', 'prep', 'pro', 'det'],
  },

  level: {
    type: String,
    required: true,
    enum: ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    default: 'A0',
  },

  phonetic: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },

  examples: [
    {
      type: String,
      maxLength: 150,
    },
  ],

  // link picture source
  picture: {
    type: String,
    trim: true,
  },

  specialty: {
    type: String,
    enum: SPECIALTY_TYPES.map((i) => i.type),
    default: '0',
  },

  topics: [
    {
      type: String,
      enum: TOPIC_TYPES.map((i) => i.type),
    },
  ],

  synonyms: [{ type: String, maxLength: 50 }],

  note: {
    type: String,
    trim: true,
    maxLength: 150,
  },
});

const WordModel = mongoose.model('word', wordSchema, 'words');

module.exports = WordModel;
