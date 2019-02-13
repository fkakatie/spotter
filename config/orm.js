// require connection
var connection = require('../config/connection.js');

// object for sql statement functions
const orm = {
    // select all data from table
    selectAll: function(tableName, callback) {
        var qString = 'SELECT * FROM ' + tableName + ';';

        console.log('selectAll: ' + qString);

        connection.query(qString, function(err, result) {
            
            if (err) throw err;
            callback(result);

        })
    },
    // insert new item to table
    insertOne: function(tableName, column, value, callback) {
        var qString = 'INSERT INTO ' + tableName + 
            ' (' + column + ') ' + 
            'VALUES (' + value + ';';

        console.log('insertOne: ' + qString);

        connection.query(qString, function(err, result) {
            
            if (err) throw err;
            callback(result);

        })
    },
    // update table item
    updateOne: function(tableName, value, id, callback) {
        var qString = 'UPDATE ' + tableName + 
            ' SET ' + value +  
            ' WHERE ' + id + ';';

        connection.query(qString, function(err, result) {
            
            if (err) throw err;
            callback(result);

        })
    }
}

// export orm object for the model
module.exports = orm;