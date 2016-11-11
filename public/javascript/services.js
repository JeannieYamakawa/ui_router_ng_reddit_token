
app.service('submitSignupInfo', function() {
    this.currentUser = {};
    this.setCurrentUser = function(user) {
      this.currentUser = user;
    }
})
