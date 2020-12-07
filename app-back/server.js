const express = require('express');
var mysql = require('mysql');
const port = 3001;
const db = require('./routes / db.js ');
const fileUpload = require('express-fileupload');
const dbService = require('./db-service');
var bodyParser = require('body-parser');
const cors = require('cors');
var server = require('http').createServer(app);

// //Create connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123"

// });

// // Connect
// db.connect((err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('mySql Connected ...')
// });

// const app = express();

// //Create DB
// app.get('/createdb', (req, res) => {
//     let sql = ' CREATE DATABASE nodemysql';
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('Database created ... ');


//     });
// });

// app.listen('3001', () => {
//     console.log('Server started on port 3001');
// });

dbService.initDb();
server.listen(port, () => {})


server.on('error', (err) => {
    console.log("THERE WAS AN ERROR");

})

app.use(cors());

//Optimal permissions
app.use(express.json({ limit: '30mb' })) // for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '30mb'
}));

//enable files upload
app.use(fileUpload({
    createParentPath: true
}));

app.use(('api', db));
module.exports = app;