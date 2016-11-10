'use strict';
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const methodOverride = require('method-override');
// *** routes *** //
const routes = require('../routes/index');
const users = require('../routes/users');
app.use('/', routes);
app.use(users);


    // catch 404 and forward to error handler
app.use(function(req, res, next) {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.redirect('/login');
      })
    }
};



process.env.NODE_ENV = process.env.NODE_ENV || 'production';


app.set('view engine', 'ejs');
// app.set('views', (path.join(__dirname, '..', 'views')));

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
