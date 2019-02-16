// require connection
var connection = require('../config/connection.js');

// object for sql statement functions
const orm = {
    // select all data from table
    selectAll: function(tableName, callback) {
        var qString = 'SELECT * FROM ' + tableName + ';';
        connection.query(qString, function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },
    // insert new item to table
    insertOne: function(tableName, column, value, callback) {
        var qString = 'INSERT INTO ' + tableName + 
            ' (' + column + ') ' + 
            'VALUES (' + value + ');';
        connection.query(qString, function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },
    // update table item
    updateOne: function(tableName, column, value, idColumn, id, callback) {
        var qString = 'UPDATE ' + tableName + 
            ' SET ' + column + 
            ' = ' + value +  
            ' WHERE ' + idColumn +
            ' = ' + id + ';';
        connection.query(qString, function(err, result) {
            if (err) throw err;
            callback(result);
        })
    }
}

// export orm object for the model
module.exports = orm;