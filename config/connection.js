var mysql = require('mysql');

var connection;

if (process.env.MDT_URL) {
    connection = mysql.createConnection(process.env.MDT_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "",
        database: 'burgers_db'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;