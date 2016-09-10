var express = require('express');
var db = require('./db');

//Middleware
var morgan = require('morgan');
var parser = require('body-parser');

var app = express();
module.exports.app = app;

//app.set('port', 3000);

app.use(morgan('dev'));
app.use(parser.json());

// Serve the client files
app.use(express.static(__dirname + "/../client"));

app.listen(3000);

//app.listen(app.get('port'));
//console.log('Listening on', app.get('port'));

// app.get('/', function(req, res) {
// 	connection.query('SELECT * from students', function(err, students) {
// 		db.end();
// 		if(!err) {
// 			console.log('Matching students: ', students);
// 		} else {
// 			console.log('Error while performing query.');
// 		}
// 	})
// })