var express = require('express');
var router = express.Router();

var educationController = require('../controllers/education_controller')
var Education = require('../models/education')
var projectController = require('../controllers/project_controller')
var Project = require('../models/project')

const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('../views/index', { title: 'Sprazzeus API' });
});

router.get('/education', educationController.showEducation);
router.get('/projects', projectController.showProject);

module.exports = router;
