(function(angular) {
  var membersApi = function($resource, api_base_url) {
    return $resource(api_base_url + 'members/:id');
  };

  angular.module('app').factory('membersApi', ['$resource', 'api_base_url', membersApi]);
})(angular);
