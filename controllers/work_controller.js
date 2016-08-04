const Work = require('../models/work')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

function showWork (req, res) {
  Work.find({}, function (err, data) {
    if(err) response.json({message: 'Cannot find work data'})
    res.status(200).json(data)
  })
}

module.exports = {showWork: showWork}
