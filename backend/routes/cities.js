const router = require('express').Router();
let City = require('../models/city.model');

router.route('/').get((req, res) => {
    City.find()
    .then(city => res.json(city))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/l/:name').get((req, res) => {
    City.find({name: req.params.name})
    .then(city => res.json(city))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;