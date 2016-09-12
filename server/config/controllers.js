module.exports = {
	getAll: function(callback) {
		db.query('SELECT * FROM students', function(err, students) {
			if(!err) {
				callback(students);
			} else {
				console.log('Error while fetching all students.', err);
			}
		})
	},

	getOne: function(id, callback) {
		db.query('SELECT * FROM students WHERE id  = ?', id, function(err, student) {
			if (!err) {
				callback(student);
			} else {
				console.log('Error while fetching student with id: ', id, ' ', err);
			}
		})
	},

	addOne: function(student, callback) {
		var name = student.name;
		var cohort = student.cohort;
		db.query('INSERT INTO students SET name = ? cohort = ?', [name, cohort], function (err, newStudent) {
			if (!err) {
				callback(newStudent);
			} else {
				console.log('Error while adding student: ', name, ' ', err);
			}
		})
	},

	updateOne: function(id, student, callback) {
		var name = student.name;
		var cohort = student.cohort;
		db.query('UPDATE students SET name = ? cohort = ? WHERE id = ?', [name, cohort, id], function(err, updatedStudent) {
			if (!err) {
				callback(newStudent);
			} else {
				console.log('There was an error while updating student: ', name, ' ', err);
			}
		})
	},

	deleteOne: function(id, callback) {
		db.query('DELETE FROM students WHERE id = ?', id, function(err, deleted) {
			if (!err) {
				callback(deleted);
			} else {
				console.log('Error while deleting student with id: ', id, ' ', err)
			}
		})
	},

	deleteAll: function(cohort, callback) {
		db.query('DELETE FROM students WHERE cohort = ?', cohort, function(err, deleted) {
			if (!err) {
				callback(deleted);
			} else {
				console.log('Error while deleting cohort: ', cohort, ' ', err);
			}
		})
	}
};

