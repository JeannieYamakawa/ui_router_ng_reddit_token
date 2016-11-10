(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const ejs = require('ejs');
  const methodOverride = require('method-override');
  const passport = require('passport');

  // *** load environment variables *** //
  process.env.NODE_ENV = process.env.NODE_ENV || 'production';

  appConfig.init = function(app, express) {

    // *** view engine *** //
    app.set('view engine', 'ejs');
    app.set('views', (path.join(__dirname, '..', 'views')));

    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // app.use(express.static(path.join(__dirname, '..', 'views', 'malik-mockups')));

    app.use(methodOverride('_method'));
    app.use(function(req, res, next) {
      console.log('gotta know the enviroment', process.env.NODE_ENV);
      next();
    })
  };



})(module.exports);
