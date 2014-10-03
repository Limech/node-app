

angular.module('app', ['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: '/partials/main/main',controller: 'mainCtrl'})
            .when('/injects', {templateUrl: 'partials/injects/inject-list', controller: 'injectsCtrl'})
            .when('/injects/:injectId', {templateUrl: '../partials/injects/inject-details'})
            .otherwise({redirectTo: '/injects'});
   });


angular.module('app').controller('mainCtrl',function($scope) {
    $scope.myVar = "Hello Angular";
});
