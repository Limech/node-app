

angular.module('app').factory('injectSvc', function($resource) {

    var injectResource = $resource('/api/injects:_id', {_id: "@id"}, {
          update: {method: 'PUT', isArray:false}
    });

    return injectResource;

});