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
        res.render('index', hndbrsObj);
    })
});

router.put('/api/workouts/:id', function(req, res) {
    var value = req.body.queued;
    var id = req.params.id;
    spotter.updateOne(value, id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

router.post('/api/workouts', function(req, res) {
    var value = '"' + req.body.workout + '"';
    spotter.insertOne(value, function(result) {
        res.json({ id: result.insertId });
    })
});

// export routes
module.exports = router;