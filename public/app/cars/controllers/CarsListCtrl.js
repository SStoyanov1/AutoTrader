app.controller('CarsListCtrl', function ($scope, identity, CarResource) {
    $scope.listTitle = "Search results";
    $scope.identity = identity;

    $scope.cars = CarResource.query();

    $scope.cars.forEach(function (item) {
        if (!item.photoUrl) {
            item.photoUrl = "img/no_photo.png";
        }
    });
});