const Education = require('../models/education')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

function findEducation (req, res, next) {
  education.find({}, function (err, data  ) {
    res.status(200).json(data)
  })
}


module.exports = findEducation
