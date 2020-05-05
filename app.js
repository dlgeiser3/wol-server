require('dotenv').config();

var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); 

// ********* CONTROLLERS ********* //
var user = require('./controllers/usercontroller');
var log = require('./controllers/logcontroller');



app.use(bodyParser.json());
app.use(require('./middleware/headers'));


app.use('/user', user);
app.use('/api', log)

app.listen(3000, function () {
  console.log('********** App is listening on 3000 **********')
});