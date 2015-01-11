(function(angular) {
  var membersApi = function($resource) {
    return $resource('/members/:id');
  };

  angular.module('app').factory('membersApi', ['$resource', membersApi]);
})(angular);
