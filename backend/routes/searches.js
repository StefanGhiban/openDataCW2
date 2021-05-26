const router = require('express').Router();
let Search = require('../models/search.model');

router.route('/').get((req, res) => {
    Search.find().limit(10).sort('-createdAt')
    .then(search => res.json(search))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const query = req.body.query;
  const newSearch = new Search({
    query
  });

  newSearch.save()
  .then(() => res.json('New search added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;