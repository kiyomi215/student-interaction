var mysql = require('mysql');
var db = require('./db');

module.exports = {
	getAllStudents: function(req,res) {
		db.query('SELECT * FROM students', function(err, students) {
			//db.end();
			if(!err) {
				console.log('Matching students: ', students);
			} else {
				console.log('Error while fetching all students.', err);
			}
		})

	},

	getOneStudent: function(req, res) {
		var id = req.params._id;
		db.query('SELECT * FROM students WHERE id  = ?', id, function(err, student) {
			if (!err) {
				console.log ('Matching student: ', student);
			} else {
				console.log('Error while fetching student with id: ', id, ' ', err);
			}
		})
	},

	addOneStudent: function(req, res) {
		var name = req.params.name;
		var cohort = req.params.cohort;
		db.query('INSERT INTO students SET name = ? cohort = ?', [name, cohort], function (err, student) {
			if (!err) {
				console.log('Student has been added: ', student);
			} else {
				console.log('Error while adding student: ', name, ' ', err);
			}
		})
	},

	updateOneStudent: function(req, res) {
		var id = req.params._id;
		var name = req.params.name;
		db.query('UPDATE students SET name = ? WHERE id = ?', [name, id], function(err, student) {
			if (!err) {
				console.log('The student has been updated: ', student);
			} else {
				console.log('There was an error while updating student: ', name, ' ', err);
			}
		})
	},

	deleteOneStudent: function(req, res) {
		var id = req.params._id;
		db.query('DELETE FROM students WHERE id = ?', id, function(err, deleted) {
			if (!err) {
				console.log('Deletion successful', deleted);
			} else {
				console.log('Error while deleting student with id: ', id, ' ', err)
			}
		})
	},

	deleteCohort: function(req, res) {
		var cohort = req.params.cohort;
		db.query('DELETE FROM students WHERE cohort = ?', cohort, function(err, deleted) {
			if (!err) {
				console.log('Deleted all students in cohort: ', cohort);
			} else {
				console.log('Error while deleting cohort: ', cohort, ' ', err);
			}
		})
	}
}

