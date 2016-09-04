var mysql = require('mysql');
var express = require('express');

var db = mysql.createConnection({
	host: 'localhost',
	//user: '',
	//password: '',
	database: 'Students'
});

connection.connect();

