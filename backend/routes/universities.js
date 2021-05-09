const router = require('express').Router();
let University = require('../models/university.model');

router.route('/').get((req, res) => {
    University.find()
    .then(universities => res.json(universities))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  University.find()
  .then(universities => res.json(universities))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/l/:location').get((req, res) => {
   University.find({location: req.params.location})
  .then(universities => res.json(universities))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/u/:university').get((req, res) => {
  University.find({title: req.params.university})
 .then(universities => res.json(universities))
 .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const ranking = Number(req.body.ranking);
  const title = req.body.title;
  const location = req.body.location;
  const overallScore = req.body.overallScore;
  const teachingScore = Number(req.body.teachingScore);
  const researchScore = Number(req.body.researchScore);
  const citationsScore = Number(req.body.citationsScore);
  const industryIncomeScore = Number(req.body.industryIncomeScore);
  const intlOutlookScore = Number(req.body.intlOutlookScore);

  const newUniversity = new University({
    ranking,
    title,
    location,
    overallScore,
    teachingScore,
    researchScore,
    citationsScore,
    industryIncomeScore,
    intlOutlookScore

  });

  newUniversity.save()
  .then(() => res.json('UNiversity added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
