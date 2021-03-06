'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _help = require('./routes/helpCenter/help');

var _help2 = _interopRequireDefault(_help);

var _studentNetwork = require('./routes/studentNetwork/studentNetwork');

var _studentNetwork2 = _interopRequireDefault(_studentNetwork);

var _studentPath = require('./routes/studentPath/studentPath');

var _studentPath2 = _interopRequireDefault(_studentPath);

var _studentProfile = require('./routes/studentProfile/studentProfile');

var _studentProfile2 = _interopRequireDefault(_studentProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//initiating the app


//Impoting the Routes
var app = (0, _express2.default)(); // Importing the Modules

var dburl = "mongodb://F0OHiaRgQFk8:4jZ9AQIrt3ss@ds139954.mlab.com:39954/startversity";
var database;

app.set('views', _path2.default.join(__dirname, 'views/'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('signup');
});

// Routes
app.use('/', _studentProfile2.default);
app.use('/', _help2.default);
app.use('./', _studentPath2.default);
app.use('/', _studentNetwork2.default);

// Static Files
app.use('/', _express2.default.static(__dirname));

// Connect to Database and Start Listening
console.log("Connecting...");
_mongodb2.default.connect(dburl, function (err, db) {
	if (err) throw err;

	database = db;

	app.listen(8080, function () {
		console.log('running on port 8080');
	});
});