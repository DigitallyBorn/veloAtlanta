(function(angular) {
  var membersApi = function($resource) {
    return $resource('/api/members/:id');
  };

  angular.module('app').factory('membersApi', ['$resource', membersApi]);
})(angular);
