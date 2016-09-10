var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'student_interaction'
});

connection.connect(
//function(err) {
// 	if (!err) {
// 		console.log('Database is connected');
// 	} else {
// 		console.log('Error connecting database');
// 	}
// }
);



//connection.end();

module.exports = connection;