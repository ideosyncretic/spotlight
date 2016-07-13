const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  url: String,
  github: String,
  date: String,
  description: String
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
