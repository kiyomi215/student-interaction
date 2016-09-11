var mysql = require('mysql');
var db = require('./db');
var Students = require('./controllers');


module.exports = {
	getAllStudents: function(req,res) {
		Students.getAll(function(err, students) {
			if (err) {return res.sendStatus(400);}
			res.send(students);
		})

	},

	getOneStudent: function(req, res) {
		var id = req.params.id;
		Students.getOne(id, function(err, student) {
			if (err) { return res.setStatus(400);}
			res.send(student);
		})
	},

	addOneStudent: function(req, res) {
		var student = req.body;
		Students.addOne(name, cohort, function(err, addedStudent) {
			if (err) { return res.sendStatus(400);}
			res.send(addedStudent);
		})
	},

	updateOneStudent: function(req, res) {
		var id = req.params.id;
		var student = req.body;
		Students.updateOne(id, student, function(err, updatedStudent) {
			if (err) { return res.sendStatus(400);}
			res.send(updatedStudent);
		})
	},

	deleteOneStudent: function(req, res) {
		var id = req.params.id;
		Students.deleteOne(id, function(err, student) {
			if (err) { return res.sendStatus(400);}
			res.status(200);
		})
	},

	deleteCohort: function(req, res) {
		var cohort = req.headers.cohort;
		Students.deleteAll(cohort, function(err, cohort) {
			if (err) { return res.sendStatus(400);}
			res.status(200);
		})
	}
}

