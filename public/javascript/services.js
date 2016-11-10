
    app.service('CurrentUserService', function() {
    this.currentUser = {};
    this.setCurrentUser = function(user) {
      this.currentUser = user;
    }

})
