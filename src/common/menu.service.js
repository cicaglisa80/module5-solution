(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var selectedDish = null;

  service.searchByShortName = function (shortName) {
   var response = $http({
     method: "GET",
     url: (ApiPath + "/menu_items.json")
   })
   .then(function (result) {
     console.log('here with result ', result);
     var result = result.data.menu_items.filter(x => x.short_name === shortName);
     if (result.length > 0) {
       selectedDish = result[0];
     }
     console.log('result ', result);
     return result;
   });

   return response;
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
