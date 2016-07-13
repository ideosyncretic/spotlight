const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  date: String,
  description: String
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;
