// import orm
var orm = require('../config/orm.js');

var spotter = {
    // select all data from workouts table
    selectAll: function(callback) {
        orm.selectAll('workouts', function(res) {
            callback(res);
        });
    },
    // insert new workout to workouts table
    insertOne: function(value, callback) {
        orm.insertOne('workouts', 'workout', value, function(res) {
            callback(res);
        });
    },
    // update workout by id
    updateOne: function(value, id, callback) {
        orm.updateOne('workouts', value, id, function(res) {
            callback(res);
        });
    }
}

// export db functions
module.exports = spotter;