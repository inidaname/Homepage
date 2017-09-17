const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

//App configuration
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

//Views
app.set('view engine', 'ejs');

//Routes
app.get('/', function(req, res) {
    res.render('signup');
});

const studentProfile = require('./routes/studentProfile/studentProfile'),
    studentPath = require('./routes/studentPath/studentPath'),
    studentNetwork = require('./routes/studentNetwork/studentNetwork'),
    helpCenter = require('./routes/helpCenter/help');

app.use(studentProfile)
    .use(studentPath)
    .use(studentNetwork)
    .use(helpCenter)

//Server listener
let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})