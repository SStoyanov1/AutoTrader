app.controller('CarsListCtrl', function($scope, CarResource) {
    var cars = CarResource.query();
    console.log(cars);
    $scope.hello = 'Zdrasti';
    $scope.cars = cars;
});