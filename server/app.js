var express = require('express');
var db = require('/.db');

//Middleware
var morgan = require('morgan');
var parser = require('body-parser');

var app = express();
module.exports.app = app;

app.set('port', 3000);

app.use(morgan('dev'));
app.user(parser.json());

app.listen(app.get('port'));