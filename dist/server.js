'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// var path = require("path");

app.set('views', _path2.default.join(__dirname, 'views/'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('signup');
});

app.get('/studentdashboard', function (req, res) {
	res.render('studentdashboard');
});

app.get('/studentprofile', function (req, res) {
	res.render('studentprofile');
});

app.get('/studentsettings', function (req, res) {
	res.render('studentsettings');
});

app.get('/helpcenter', function (req, res) {
	res.render('helpcenter');
});

app.get('/studentstudy', function (req, res) {
	res.render('studentstudy');
});

app.get('/studentlearn', function (req, res) {
	res.render('studentlearn');
});

app.get('/studenttests', function (req, res) {
	res.render('studenttests');
});

app.get('/studentresults', function (req, res) {
	res.render('studentresults');
});

app.get('/studentnetwork', function (req, res) {
	res.render('studentnetwork');
});

app.use('/', _express2.default.static(__dirname));

app.listen(8080);
console.log('running on port 8080');