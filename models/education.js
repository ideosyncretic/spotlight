const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  color: String,
  created_at: Date,
  updated_at: Date
});

educationSchema.pre('save', function (next) {
  let now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
