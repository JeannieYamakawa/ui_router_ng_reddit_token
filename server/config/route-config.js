(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const users = require('../routes/users');
    const posts = require('../routes/posts');

    // *** register routes *** //
    app.use('/', routes);

    app.use(users);
    app.use(posts);
  };

})(module.exports);
