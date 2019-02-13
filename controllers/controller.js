// setup express
var express = require('express');

// setup routes
var router = express.Router();

// import model
var spotter = require('../models/spotter.js');

// create routes
router.get('/', function(req, res) {
    spotter.selectAll(function(data) {
        var hndbrsObj = { workouts: data };

        console.log(hndbrsObj);

        res.render('index', hndbrsObj);
    })
});

// export routes
module.exports = router;