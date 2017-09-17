// Importing the Modules
import express from 'express'
import path from 'path'
import MongoClient from 'mongodb'

//Impoting the Routes
import helpCenter from './routes/helpCenter/help'
import studentNetwork from './routes/studentNetwork/studentNetwork'
import studentPath from './routes/studentPath/studentPath'
import studentProfile from './routes/studentProfile/studentProfile'

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
app.use('./', studentPath)
app.use('/',studentNetwork)

// Static Files
app.use('/', express.static(__dirname))

// Connect to Database and Start Listening
console.log("Connecting...")
MongoClient.connect(dburl, function(err, db){
	if(err) throw err

	database = db

	app.listen(8080, function(){
		console.log('running on port 8080')
	})
})
