// Importing the Modules
const express = require('express')
const path = require ('path')
const MongoClient = require('mongodb')

//Impoting the Routes
const helpCenter = require('./routes/helpCenter/help')
const studentNetwork = require('./routes/studentNetwork/studentNetwork')
const studentPath = require('./routes/studentPath/studentPath')
const studentProfile = require('./routes/studentProfile/studentProfile')

//initiating the app
const app = express()
const dburl = "mongodb://F0OHiaRgQFk8:4jZ9AQIrt3ss@ds139954.mlab.com:39954/startversity"
var database

app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('signup')
})

// Routes
app.use('/',studentProfile)
app.use('/', helpCenter)
app.use('/', studentPath)
app.use('/',studentNetwork)

// Static Files
app.use('/', express.static(__dirname))

app.get("/signup", function(req, res){
	let userName = req.query.name
	let userEmail = req.query.email
	let userType = req.query.type
	let userPassword = req.query.password
	let passwordConfirm = req.query.cPassword

	// 	Validate User Input
	//	Hash Password
	//	Add to DB
	//	Create User Session

	res.redirect("/studentprofile")
})

app.get("/login", function(req, res){
	res.redirect("/studentprofile")
})

// Connect to Database and Start Listening
console.log("Connecting...")
MongoClient.connect(dburl, function(err, db){
	if(err) throw err

	database = db

	app.listen(8080, function(){
		console.log('running on port 8080')
	})
})
