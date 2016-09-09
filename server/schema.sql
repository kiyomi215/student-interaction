DROP DATABASE student_interaction

CREATE DATABASE student_interaction;

USE student_interaction;

CREATE TABLE students (
	id integer NOT NULL AUTO_INCREMENT,
	name varChar(30),
	PRIMARY KEY (id)
)
