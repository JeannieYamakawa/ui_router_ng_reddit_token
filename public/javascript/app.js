var app = angular.module('redditApp', ['ui.router']);
// console.log('booyah');
app.config(function($stateProvider, $urlRouterProvider){
    var homeState = {
      name: 'home',
      url: '/',
      templateUrl: 'partials/signup.html',
      
    }

    var userState = {
      url: '/users',
      templateUrl: 'partials/users.html',
      controller: 'UserListController'
    }

    // var userDetailState = {
    //   url: '/:user_name',
    //   parent: userState,
    //   templateUrl: 'partials/userDetail.html',
    //   controller: 'UserDetailController'
    // }
    //
    // var userFoodState = {
    //   url: '/:food',
    //   parent: userState,
    //   templateUrl: 'partials/userDetail.html',
    //   controller: 'UserDetailController'
    // }
    $stateProvider.state(homeState);

    // $stateProvider.state('users', userState);
    // $stateProvider.state('users.detail', userDetailState);
    // $stateProvider.state('users.food', userFoodState);

    $urlRouterProvider.otherwise('/');
  });

    app.service('CurrentUserService', function() {
    this.currentUser = {};
    this.setCurrentUser = function(user) {
      this.currentUser = user;
    }

})
