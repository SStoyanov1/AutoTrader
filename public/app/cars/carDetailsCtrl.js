app.controller('CarDetailsCtrl', function($scope, $routeParams, CarResource) {
    $scope.car = CarResource.get({id: $routeParams.id});
});