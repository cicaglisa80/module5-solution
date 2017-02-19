(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$scope'];
function SignupController($scope) {
  var $ctrl = this;

  $ctrl.resetForm = function ()
  {
    console.log('resetting form');
    $scope.loginForm.$setPristine();
  };

  $ctrl.signUpUser = function (user)
  {
    console.log('user ', user);
  };
}

})();