app.controller('MyAdsCtrl', function($scope, identity, CarResource) {
    $scope.listTitle = "My ads";
    $scope.identity = identity;

    $scope.cars = [{
        _id: "143ds4-rtewfsf4-3rwff4-54ref",
        make: { name: "Mercedes-Benz" },
        model: { name: "CLA" },
        engineType: { name: "Diesel" },
        gearboxType: { name: "Automatic" },
        yearOfProduction: 2013,
        photoUrl: "https://file.kbb.com/kbb/images/content/editorial/slideshow/2014-mercedes-benz-cla-drive/2014-mercedes-benz-cla-09-600-001.jpg",
        price: 120000
    }];

    $scope.cars.forEach(function(item) {
        if (!item.photoUrl) {
            item.photoUrl = "img/no_photo.png";
        }
    });
});