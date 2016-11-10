
app.controller('SignupController', ['$scope', '$http', '$window','$location', function($scope, $http, $window, $location, name) {
    $scope.submitSignupInfo = function(username, email, password){
        $http.post('/signup', $scope.user)
        .then(function (response) {
        $window.localStorage.setItem('token', response.data.token);
        $location.path('/')
      })
    };
    $scope.user = {};

}]);


app.controller('LoginController', ['$scope', '$http', '$window','$location', function($scope, $http, $window, $location, name) {


}]);

app.controller('PostsController', ['$scope', '$http', '$window','$location', function($scope, $http, $window, $location, name) {


}]);
