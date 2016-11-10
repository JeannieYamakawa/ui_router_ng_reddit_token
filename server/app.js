'use strict';
const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const dotenv = require('dotenv').config();
const methodOverride = require('method-override');
// *** routes *** //
const users = require('./routes/users');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


app.set('view engine', 'ejs');
// app.set('views', (path.join(__dirname, '..', 'views')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(users);

app.use(express.static('public'));

app.use(methodOverride('_method'));


const port = process.env.PORT || 3000;
// Server Listener
app.listen(port, function() {
    console.log(process.env.NODE_ENV, 'listening on port: ' + port);
});
