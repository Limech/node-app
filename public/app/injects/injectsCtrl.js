angular.module('app').controller('injectsCtrl'), function($scope, injectSvc) {

    $scope.injects = injectSvc.query();

};
