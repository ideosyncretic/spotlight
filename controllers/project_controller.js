const Project = require('../models/project')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

function showProject (req, res) {
  Project.find({}, function (err, data) {
    if(err) response.json({message: 'Cannot find project data'})
    res.status(200).json(data)
  })
}

module.exports = {showProject: showProject}
