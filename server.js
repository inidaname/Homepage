var express = require('express');
var app = express();
// var path = require("path");

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/signup', function(req, res){
	res.render('signup');
});

app.use('/', express.static(__dirname));

app.listen(8080);
console.log('running …');