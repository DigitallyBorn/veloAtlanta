(function(angular) {
  var members = function($scope) {
    $scope.members = [
      { name: 'Ricky Smith' },
      { name: 'Tim Smith'},
      { name: 'Chris Smith' }
    ];
  };

  angular.module('app').controller('membersController', ['$scope', members]);
})(angular);
