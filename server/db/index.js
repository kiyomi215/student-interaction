var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'students'
});

var app = express();

connection.connect(function(err) {
	if (!err) {
		console.log('Database is connected');
	} else {
		console.log('Error connecting database');
	}
});

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

//connection.end();

app.listen(3000);

module.exports = connection;