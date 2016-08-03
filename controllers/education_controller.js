const Education = require('../models/education')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

function showEducation (req, res) {
  Education.find({}, function (err, data) {
    if(err) response.json({message: 'Cannot find education data'})
    res.status(200).json(data)
  })
}

module.exports = {showEducation: showEducation}
