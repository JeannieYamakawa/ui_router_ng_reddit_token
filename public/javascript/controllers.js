
app.controller('SignupController', ['$scope', '$http', '$window','$location', 'CurrentUserService',function($scope, $http, $window, $location, CurrentUserService) {
    $scope.submitSignupInfo = function(username, email, password){
        $http.post('/signup', $scope.user)
            .then(function (response) {
                $window.localStorage.setItem('token', response.data.token);
                $location.path('/')
            })
    };

    $scope.user = {};

}]);


app.controller('LoginController', ['$scope', '$http', '$window','$location', 'CurrentUserService',function($scope, $http, $window, $location, CurrentUserService) {
    $http.post('/login', $scope.user)
        .then(function (response) {
            $window.localStorage.setItem('token', response.data.token);
            $location.path('/')
        })

}]);

app.controller('PostsController', ['$scope', '$http', '$window','$location', 'CurrentUserService',function($scope, $http, $window, $location, CurrentUserService) {
    $scope.someButtonPressed = function() {
        // $state.go('users');
        $http.get('/posts')
             .success(function(res){
                 $scope.posts = res;
                 console.log(res, 'this is the response in controller');
             });
    }
    //    function getFromServer(){
    //      $http.get('/posts')
    //           .success(function(res){
    //               $scope.posts = res;
    //               console.log(res, 'this is the response in controller');
    //           });
    //    }
    //    getFromServer();
}]);
