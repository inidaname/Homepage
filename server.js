import express from 'express'
import path from 'path'
const app = express()
// var path = require("path");

app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('signup');
})

app.get('/studentdashboard', function(req, res){
	res.render('studentdashboard');
})

app.get('/studentprofile', function(req, res){
	res.render('studentprofile');
})

app.get('/studentsettings', function(req, res){
	res.render('studentsettings');
})

app.get('/helpcenter', function(req, res){
	res.render('helpcenter');
})

app.get('/studentstudy', function(req, res){
	res.render('studentstudy');
})

app.get('/studentlearn', function(req, res){
	res.render('studentlearn');
})

app.get('/studenttests', function(req, res){
	res.render('studenttests');
})

app.get('/studentresults', function(req, res){
	res.render('studentresults');
})

app.get('/studentnetwork', function(req, res){
	res.render('studentnetwork');
})

app.use('/', express.static(__dirname))

app.listen(8080)
console.log('running on port 8080')
