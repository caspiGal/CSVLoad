var mysql = require('mysql');

module.exports.initDb = () => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "password"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE mydb", function(err, result) {
            if (err) throw err;
            console.log("Database created");
            var sql = "CREATE TABLE resturants (name VARCHAR(255), type VARCHAR(255), phone VARCHAR(255), location VARCHAR(255))";
            con.query(sql, function(err, result) {
                if (err) throw err;
                console.log("Table created");
            });
        });
    });
}

module.exports.saveTomySql = (data) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword",
        database: "mydb"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO resturants (name, address) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}