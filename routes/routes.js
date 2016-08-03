var express = require('express');
var router = express.Router();
var educationController = require('../controllers/education_controller')
var Education = require('../models/education')

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
  res.render('../views/index', { title: 'Sprazzeus' });
});

router.get('/education', educationController.showEducation);

// /* GET profile page. */
// router.get('/profile', function (req, res, next) {
//   res.render('../views/profile', { title: 'Profile' });
// });
//
// /* GET links page. */
// router.get('/links', function (req, res, next) {
//   res.render('../views/links', { title: 'Links' });
// });
//
// /* GET projects page. */
// router.get('/projects', function (req, res, next) {
//   res.render('../views/projects', { title: 'Projects' });
// });
//
// /* GET projects/:name page. */
// router.get('/projects/:name', function (req, res, next) {
//   res.render('../views/project', { title: req.params.name });
// });
//
// /* GET skills page. */
// router.get('/skills', function (req, res, next) {
//   res.render('index', { title: 'Sprazzeus' });
// });
//
// /* GET education summary page. */
// router.get('/education', function (req, res, next) {
//   res.render('education_summary', { title: 'Education' });
// });
//
// /* GET education page. */
// router.get('/education/:name', function (req, res, next) {
//   res.render('education', { title: req.params.name });
// });
//
// /* GET work summary page. */
// router.get('/work', function (req, res, next) {
//   res.render('work_summary', { title: 'Work' });
// });
//
// /* GET work page. */
// router.get('/work/:name', function (req, res, next) {
//   res.render('work', { title: req.params.name });
// });

module.exports = router;
