app.controller('CarsListCtrl', function($scope, identity, CarResource) {
    $scope.listTitle = "Search results";
    $scope.identity = identity;
    //$scope.cars = CarResource.query();
    $scope.cars = [{
        _id: "143ds4-rtewfsf4-3rwff4-54ref",
        make: { name: "Mercedes-Benz" },
        model: { name: "CLA" },
        engineType: { name: "Diesel" },
        gearboxType: { name: "Automatic" },
        yearOfProduction: 2013,
        photoUrl: "https://file.kbb.com/kbb/images/content/editorial/slideshow/2014-mercedes-benz-cla-drive/2014-mercedes-benz-cla-09-600-001.jpg",
        price: 120000
    }, {
        _id: "143ds4-rtewfsf4-3rwff4-54ref",
        make: { name: "Mercedes-Benz" },
        model: { name: "CLA" },
        engineType: { name: "Gasoline" },
        gearboxType: { name: "Automatic" },
        yearOfProduction: 2013,
        price: 120000
    }, {
        _id: "143ds4-rtewfsf4-3rwff4-54ref",
        make: { name: "Mercedes-Benz" },
        model: { name: "CLA" },
        engineType: { name: "Diesel" },
        gearboxType: { name: "Automatic" },
        yearOfProduction: 2013,
        photoUrl: "http://file.kelleybluebookimages.com/kbb/images/content/editorial/slideshow/2014-mercedes-benz-cla-class/mercedes-benz-cla-1-600-001.jpg",
        price: 125000
    }];

    $scope.cars.forEach(function(item) {
        if (!item.photoUrl) {
            item.photoUrl = "img/no_photo.png";
        }
    });
});