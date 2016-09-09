var mysql = require('mysql');
var express = require('express');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'students'
});

var app = express();

db.connect(function(err) {
	if (!err) {
		console.log('Database is connected');
	} else {
		console.log('Error connecting database');
	}
});

app.get('/', function(req, res) {
	db.query('SELECT * from students', function(err, students) {
		db.end();
		if(!err) {
			console.log('Matching students: ', students);
		} else {
			console.log('Error while performing query.');
		}
	})
})

app.listen(3000);