DROP DATABASE student_interaction

CREATE DATABASE student_interaction;

USE student_interaction;

CREATE TABLE students (
	id integer NOT NULL AUTO_INCREMENT,
	name varChar(30),
	PRIMARY KEY (id)
);

CREATE TABLE tapouts (
	id integer NOT NULL AUTO_INCREMENT,
	name varChar(10),
	PRIMARY KEY (id)	
);

CREATE TABLE projects (
	id integer NOT NULL AUTO_INCREMENT,
	name varChar(20),
	team varChar(25)
	PRIMARY KEY (id)
);
