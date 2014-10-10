app.controller('MyAdsCtrl', function ($scope, identity, CarResource) {
    $scope.listTitle = "My ads";
    $scope.identity = identity;

    $scope.cars = [];

    console.log(identity.currentUser);
    CarResource.queryBased.query({ user: identity.currentUser }, function (data) {
        console.log(data);
        for (var i = 0, carsLength = data.length; i < carsLength; i += 1) {
            // TODO: add if to filter only user ads
            $scope.cars.push(data[i]);
        }
    });

    $scope.cars.forEach(function (item) {
        if (!item.photoUrl) {
            item.photoUrl = "img/no_photo.png";
        }
    });
});