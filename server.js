// Importing the Modules
import express from 'express'
import path from 'path'

//Impoting the Routes
import helpCenter from './routes/helpCenter/help'
import studentNetwork from './routes/studentNetwork/studentNetwork'
import studentPath from './routes/studentPath/studentPath'
import studentProfile from './routes/studentProfile/studentProfile'

//initiating the app
const app = express()


app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('signup');
})

// Routes
app.use('/',studentProfile)
app.use('/', helpCenter)
app.use('./', studentPath)
app.use('/',studentNetwork)

// Static Files
app.use('/', express.static(__dirname))


app.listen(8080)
console.log('running on port 8080')
