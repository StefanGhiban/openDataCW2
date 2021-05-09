const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const universitySchema = new Schema({
  ranking: { type: String, required: true },
  title: { type: String, required: true, lowercase: true },
  location: { type: String, required: true },
  teachingScore: { type: Number, required: true },
  overallScore: { type: String, required: true },
  researchScore : { type: Number, required: true },
  citationsScore: { type: Number, required: true },
  industryIncomeScore: { type: Number, required: true },
  intlOutlookScore: { type: Number, required: true },
}, {
  timestamps: true,
});

const University = mongoose.model('University', universitySchema);

module.exports = University;