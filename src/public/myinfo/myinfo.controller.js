(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user'];
function MyInfoController(user) {
  var $ctrl = this;

  console.log('user ', user);
  $ctrl.user = user;
  $ctrl.isUserRegisterd = false;

  if (user !== null) {
    $ctrl.isUserRegisterd = true;
  }

}

})();
