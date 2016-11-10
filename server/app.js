'use strict';
const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const methodOverride = require('method-override');
// *** routes *** //
const routes = require('./routes/index');
const users = require('./routes/users');


app.use('/', routes);
app.use(users);


process.env.NODE_ENV = process.env.NODE_ENV || 'development';


app.set('view engine', 'ejs');
// app.set('views', (path.join(__dirname, '..', 'views')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '..', 'views', 'malik-mockups')));

app.use(methodOverride('_method'));
app.use(function(req, res, next) {
  console.log('gotta know the enviroment', process.env.NODE_ENV);
  next();
})

const port = process.env.PORT || 3000;
// Server Listener
app.listen(port, function() {
    console.log(process.env.NODE_ENV, 'listening on port: ' + port);
});
