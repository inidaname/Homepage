'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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
// Importing the Modules
var app = (0, _express2.default)();

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

app.listen(8080);
console.log('running on port 8080');