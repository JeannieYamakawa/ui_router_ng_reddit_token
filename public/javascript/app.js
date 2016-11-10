var app = angular.module('redditApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    var homeState = {
      name: 'home',
      url: '/',
      templateUrl: 'partials/signup.html',
      controller: 'HomeController',
      //resolve property passes in key value pairs into the controller for you. this can be used to make a call to verify a user before you do anything on the view.
    }


    var userState = {
      name: 'postsHome',
      url: '/posts',
      templateUrl: 'partials/users.html',
      controller: 'PostsController'
    }
    $stateProvider.state(homeState);

    // $stateProvider.state('users', userState);
    // $stateProvider.state('users.detail', userDetailState);
    // $stateProvider.state('users.food', userFoodState);

    $urlRouterProvider.otherwise('/');
  });



//     app.service('CurrentUserService', function() {
//     this.currentUser = {};
//     this.setCurrentUser = function(user) {
//       this.currentUser = user;
//     }
//
// })
