(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserPreferenceService', 'MenuService'];
function SignupController(UserPreferenceService, MenuService) {
  var $ctrl = this;
  $ctrl.isUserSaved = UserPreferenceService.getUserPreference() !== null;
  $ctrl.nameNotFound = false;

  $ctrl.signUpUser = function (user)
  {
    //console.log('user to save: ', user);
    $ctrl.nameNotFound = false;

    var promise = MenuService.searchByShortName(user.shortname);

    promise.then(function (response) {
      //console.log('response ', response);

      $ctrl.isUserSaved = true;
      UserPreferenceService.setUserPreference(user, response);
    })
    .catch(function (error) {
      //console.log('error ', error);
      $ctrl.nameNotFound = true;
    })
  };
}

})();
