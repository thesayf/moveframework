var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');

// DB configuration ============================================================
var configDB = require('./config/database.js');
mongoose.connect(configDB.url); // connect to our database

// Set Port ====================================================================
app.set('port', (process.env.PORT || 5002));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// routes ==================================================
require(__dirname + '/server/routes')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
