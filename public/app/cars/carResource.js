app.factory('CarResource', function($resource) {
    var CarResource = $resource('/api/cars/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});
    return CarResource;
});