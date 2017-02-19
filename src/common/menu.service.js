(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', '$q', 'ApiPath'];
function MenuService($http, $q, ApiPath) {
  var service = this;
  var selectedDish = null;

  service.searchByShortName = function (shortName) {
   var response = $http({
     method: "GET",
     url: (ApiPath + "/menu_items/" + shortName + ".json")
   })
   .then(function (response) {
     console.log('here with result ', response.data);

     return response.data;
   })
   .catch(function(data, status) {
     console.log('error ', data);
     return $q.reject(status);
   });

   return response;
  };

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}

})();
