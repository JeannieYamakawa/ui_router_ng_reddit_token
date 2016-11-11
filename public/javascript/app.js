var app = angular.module('redditApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    var signupState = {
      name: 'signup',
      url: '/signup',
      templateUrl: 'partials/signup.html',
      controller: function($scope, $http, $window, $location, CurrentUserService) {
          $scope.submitSignupInfo = function(username, email, password){
              $http.post('/signup', $scope.user)
                  .then(function (response) {
                      console.log(response, 'response from post /signup');
                      $window.localStorage.setItem('token', response.data.token);
                      $location.path('/posts')
                  })
          };
          $scope.user = {};
      },
    }
    var loginState = {
      name: 'login',
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    }

    var postsState = {
      name: 'posts',
      url: '/posts',
      templateUrl: 'partials/posts.html',
      requiresLogin: true,
      controller: function($scope, $http, $window, $location, submitSignupInfo) {
          $scope.someButtonPressed = function() {
              // $state.go('users');
              $http.get('/posts')
                   .success(function(response){
                       $scope.posts = response.posts;
                   });
          }
      },
      resolve: {
         submitSignupInfo: function ($http, $location, $state) {
           // if the browser has a token
           if (localStorage.getItem('token')) {
             // call /verify endpoint, and pass it the token
             const config = {
               headers: {
                 'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                }
             return $http.get('/verify', config)
               .then(function (response) {
                 return response.data
               })
               .catch(function () {
                 localStorage.clear();
                //  $location.path('/signup');
                $state.go('signup')
                 return null;
               })
           }
         }
    }
}
    $stateProvider.state('signup', signupState);
    $stateProvider.state('login',loginState);
    $stateProvider.state('posts', postsState);
    $urlRouterProvider.otherwise('/');
});




angular.module('redditApp').run(function ($rootScope, $location, $window, $state) {
      $rootScope.$on('$locationChangeSuccess', function (event, next, current) {
        // if the next route requires login and we don't have a token, then redirect to the homepage
        if ($state.current.requiresLogin) {
            //check for token and then continue if there is one
            if(!token){
                    $state.go('signup')
                }
        }//else $state.go('signup')
      });
});
