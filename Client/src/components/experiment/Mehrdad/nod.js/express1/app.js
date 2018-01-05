var express = require('express');
//var bodyParser= require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bookmarker';
var app = express();

//app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000, function () {
    console.log("Server running at port 3000");
});

var db;

MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err);
console.log("✔️ Connected correctly to server");
db = database;
app.listen(3000, function () {
    console.log("Server running at port 3000");
});
});

/*app.listen(3000, function () {
    console.log("Server running at port 3000");
});



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log("getttt");
});

app.post('/bookmark', (req, res) => {
    console.log(req.body);
});




MongoClient.connect(url, (err, database) => {
    // ... do something here
});
