(function(angular) {
  var routes = function($routeProvider) {
    $routeProvider
      .when('/members', {
        templateUrl: '/app/members/members.html'
      })
      .when('/home', {
        templateUrl: '/app/home/home.html'
      })
      .otherwise({ redirectTo: '/home' });
  };
  angular.module('app').config(['$routeProvider', routes]);
})(angular);
