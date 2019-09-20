const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const CricketScoreKeeper = require('./Cricket-Score-Keeper');

const app = express();

const cricketFactory = CricketScoreKeeper();

app.use(express.static('public'));

const handlebarSetup = exphbs({
    partialsDir: './views',
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    
    res.render('index')
  });

app.post('/input/overs', (req, res) => {;
    // cricketFactory.settingOvers(req.body.);
    res.redirect('/');
});

let PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});