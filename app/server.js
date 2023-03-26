const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use(bodyParser.urlencoded({
 
 extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile-picture', function (req, res) {
  res.sendFile(path.join(__dirname, "images/profile-1.jpg"));
});

const db = mysql.createConnection({
  host: 'mysql',
  port: '3306',
  user: 'jsapp',
  password: 'password',
  database: 'my_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.post('/update-profile', function (req, res) {
  res.sendFile(path.join(__dirname, "images/profile-1.jpg"));
  let userObj = req.body;

  /*let sql = `UPDATE users_ SET name = '${userObj.name}', email = '${userObj.email}', interests = '${userObj.interests}' WHERE id = 1`;*/
  let sql = `INSERT into users_(name, email, interests) values ('${userObj.name}', '${userObj.email}', '${userObj.interests}')`
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });

  // Send response
  res.send(userObj);
});

app.get('/get-profile', function (req, res) {
  let response = {};
  let sql = `SELECT * FROM users_`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    response = result[0];
    console.log(result);
    // Send response
    res.send(response ? response : {});
  });
});

app.get('/get-info', function (req, res) {
  let response = {};
  let sql = `SELECT * FROM users_`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    response = result;
    console.log(result);
    // Send response
    res.send(response ? response : {});
  });
});
app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
