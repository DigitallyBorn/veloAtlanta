(function(angular) {
  var shellController = function($scope) {
    $scope.message = 'Hello, world!';
  };

  angular.module('app').controller('shellController', ['$scope', shellController]);
})(angular);
