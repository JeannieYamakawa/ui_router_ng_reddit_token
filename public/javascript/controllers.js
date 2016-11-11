// 
// app.controller('SignupController', ['$scope', '$http', '$window','$location', 'CurrentUserService',function($scope, $http, $window, $location, CurrentUserService) {
//     $scope.submitSignupInfo = function(username, email, password){
//         $http.post('/signup', $scope.user)
//             .then(function (response) {
//                 console.log(response, 'response from post /signup');
//                 $window.localStorage.setItem('token', response.data.token);
//                 $location.path('/')
//             })
//     };
//
//     $scope.user = {};
//
// }]);


app.controller('LoginController', ['$scope', '$http', '$window','$location', 'CurrentUserService',function($scope, $http, $window, $location, CurrentUserService) {
    $http.post('/login', $scope.user)
        .then(function (response) {
            $window.localStorage.setItem('token', response.data.token);
            $location.path('/')
        })

}]);

//copied right into the config
// app.controller('PostsController', ['$scope', '$http', '$window','$location', 'CurrentUserService',function($scope, $http, $window, $location, CurrentUserService) {
//     $scope.someButtonPressed = function() {
//         // $state.go('users');
//         $http.get('/posts')
//              .success(function(response){
//                  $scope.posts = response.posts;
//                  console.log($scope.posts, 'this is the response in controller');
//              });
//     }
// }]);
