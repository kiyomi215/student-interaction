var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'student_interaction'
});

db.connect(function(err) {
	if (!err) {
		console.log('Database is connected');
	} else {
		console.log('Error connecting database');
	}
});

// app.get('/', function(req, res) {
// 	db.query('SELECT * from students', function(err, students) {
// 		db.end();
// 		if(!err) {
// 			console.log('Matching students: ', students);
// 		} else {
// 			console.log('Error while performing query.');
// 		}
// 	})
// })