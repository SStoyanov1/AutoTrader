'use strict';

app.controller('MainCtrl', function($scope, CarResource) {
    $scope.cars = CarResource.query();
    $scope.filteredCars = [{
        _id: "23423rfds-344eads-654tafzd-qarzf42",
        make: { name: "Subaru" },
        model: { name: "Impreza" },
        price: 24000,
        yearOfProduction: 2004,
        gearboxType: { name: "Manual" },
        engineType: { name: "Gasoline" },
        photoUrl: "img/no_photo.png"
    },{
        _id: "23423rfds-344eads-654tafzd-qarzf42",
        make: { name: "Subaru" },
        model: { name: "Impreza" },
        price: 24000,
        yearOfProduction: 2004,
        gearboxType: { name: "Manual" },
        engineType: { name: "Gasoline" },
        photoUrl: "img/no_photo.png"
    }];

    $scope.search = function(ad) {
        console.log(ad);
    };
});