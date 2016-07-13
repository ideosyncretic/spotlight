const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  date: String,
  description: String
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
