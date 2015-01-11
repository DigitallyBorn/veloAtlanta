(function(angular) {
  var members = function($scope, membersApi) {
    $scope.members = membersApi.query();
  };

  angular.module('app').controller('membersController', ['$scope', 'membersApi', members]);
})(angular);
