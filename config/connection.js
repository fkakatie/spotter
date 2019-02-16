// setup dotenv
require('dotenv').config();
var pw = require('../pw.js');

// setup mysql db
const mysql = require('mysql');
var connection;

// create connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: pw.pass.word,
        database: 'workouts_db'
    });
};

// make connection
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: \n' + err.stack);
        return;
    }
    console.log('Connected as ID ' + connection.threadId);
});

// export connection for orm
module.exports = connection;