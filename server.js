var express = require('express');
var app = express();
var path = require("path");


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/signup', function(req, res){
	res.sendFile(path.join(__dirname+'/views/signup.html'));
});

app.use('/', express.static(__dirname));

var server = app.listen(3000, function(){
	var host = server.address().address;
	host = (host=== '::' ? 'localhost' : host);
	var port = server.address().port;

	console.log('listening at http://%s.%s', host, port);
});

