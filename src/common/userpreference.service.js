(function () {
"use strict";

angular.module('common')
.service('UserPreferenceService', UserPreferenceService);

//UserPreferenceService.$inject = ['$http', 'ApiPath'];
function UserPreferenceService() {
  var service = this;
  var currentUser = {};

  service.getUserPreference = function () {
    console.log('getting user prefs');
    return currentUser;
  };

  service.setUserPreference = function (user) {
    currentUser.firstname = user.firstname;
    currentUser.lastname = user.lastname;
    currentUser.phone = user.phone;
    currentUser.email = user.email;
    currentUser.menunumber = user.menunumber;
  };
}

})();
