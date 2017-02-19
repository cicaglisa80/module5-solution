(function () {
"use strict";

angular.module('common')
.service('UserPreferenceService', UserPreferenceService);

UserPreferenceService.$inject = ['MenuService'];
function UserPreferenceService(MenuService) {
  var service = this;
  var currentUser = null;

  service.getUserPreference = function () {
    console.log('getting user prefs ', currentUser);
    return currentUser;
  };

  service.setUserPreference = function (user, dish) {
    currentUser = {};
    currentUser.firstname = user.firstname;
    currentUser.lastname = user.lastname;
    currentUser.phone = user.phone;
    currentUser.email = user.email;
    currentUser.shortname = user.shortname;
    currentUser.dish = dish;
  };
}

})();
