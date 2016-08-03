var express = require('express');
var router = express.Router();
var education = require('education_controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('../views/index', { title: 'Sprazzeus' });
});

router.get('/education', (req, res) => {
  res.json(education);
});

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
