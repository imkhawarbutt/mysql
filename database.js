const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    database: "db_viz4",
    user: "root",
    password: "root"
});

connection.connect((e) => {
    if (e) {
        throw e;
    }
    else {
        console.log("Connected with mysql");

    }

});


module.exports = connection 