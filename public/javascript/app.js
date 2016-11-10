var app = angular.module('redditApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    var signupState = {
      name: 'signup',
      url: '/signup',
      templateUrl: 'partials/signup.html',
      controller: 'SignupController',
      //resolve property passes in key value pairs into the controller for you. this can be used to make a call to verify a user before you do anything on the view.
    }
    var loginState = {
      name: 'login',
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginController',
      //resolve property passes in key value pairs into the controller for you. this can be used to make a call to verify a user before you do anything on the view.
    }

    var postsState = {
      name: 'postsHome',
      url: '/posts',
      templateUrl: 'partials/posts.html',
      controller: 'PostsController'
    }



    $stateProvider.state(signupState);
    $stateProvider.state(loginState);
    $stateProvider.state('posts', postsState);


    $urlRouterProvider.otherwise('/');
  });
