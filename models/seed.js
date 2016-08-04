var Education = require('./education');
var Work = require('./work');
var Project = require('./project');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// let education = new Education({
//   name: 'LASALLE College of the Arts',
//   date: '2010–2014',
//   description: 'Graduated from Design Communication, following completion of the Foundation in Visual Studies programme.'
// });
//
// education.save((err) => {
//   if (err) console.log(err);
//   else {
//     console.log('Education Created ', education);
//   }
// });

let education2 = new Education({
  name: 'General Assembly — Web Development Immersive Course',
  date: '2016',
  description: 'An intensive course that covers programming fundamentals, basic product development, front-end + back-end development, and developing a product in a team. Exposure to relevant technologies (like Javascript, HTML and CSS, Jquery and AJAX, Ruby and Ruby on Rails, Node and Express, React, et al) as well as processes like test-driven development and continuous integration (using tools like Codeship and CodeClimate).'
});

education2.save((err) => {
  if (err) console.log(err);
  else {
    console.log('Education Created ', education2);
  }
});

// let work1 = new Work({
//   name: 'Nuisance Labs',
//   date: '2015–2016',
//   description: 'Co-founded multidisciplinary nano-studio, crafting creative services ranging from branding to video.'
// });
//
// work1.save((err) => {
//   if (err) console.log(err);
//   else {
//     console.log('Work Created ', work1);
//   }
// });
//
// let work2 = new Work({
//   name: 'Fitness Ration',
//   date: '2016',
//   description: 'Worked on redesigning brand and collateral, designing the architecture and UI for retail website, taxonomy for products, new product packaging, conducting UX interviews and research with existing users.'
// });
//
// work2.save((err) => {
//   if (err) console.log(err);
//   else {
//     console.log('Work Created ', work2);
//   }
// });

// let project1 = new Project({
//   name: 'Mastermind',
//   date: '2016',
//   url: '',
//   github: 'link',
//   description: 'A simple browser-based game based on the classic.'
// });
//
// project1.save((err) => {
//   if (err) console.log(err);
//   else {
//     console.log('Project Created ', project1);
//   }
// });
//
// let project2 = new Project({
//   name: 'Jellyfish Wiki',
//   date: '2016',
//   github: 'link',
//   description: 'A micro-wiki made with Ruby on Rails.'
// });
//
// project2.save((err) => {
//   if (err) console.log(err);
//   else {
//     console.log('Project Created ', project2);
//   }
// });
