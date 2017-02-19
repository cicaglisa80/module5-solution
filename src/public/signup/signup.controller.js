(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserPreferenceService'];
function SignupController(UserPreferenceService) {
  var $ctrl = this;

  $ctrl.resetForm = function ()
  {
    console.log('resetting form');
    //$ctrl.loginForm.$setPristine();
  };

  $ctrl.signUpUser = function (user)
  {
    console.log('user to save: ', user);
    UserPreferenceService.setUserPreference(user);
  };
}

})();
