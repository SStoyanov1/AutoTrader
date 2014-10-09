'use strict';

app.controller('MainCtrl', function($scope, CarResource, MakeResource, ModelResource) {
    $scope.cars = CarResource.query();
    $scope.startYearFrom = 1920;
    $scope.startYearTo = $scope.startYearFrom;

    $scope.makes = MakeResource.query();

    $scope.getMakeModels = function(makeName) {
        $scope.makes.forEach(function(item) {
            if (item.name === makeName) {
                $scope.models = ModelResource.query({ make: item._id });
                return;
            }
        });
    };

    function generateYearsArray(until) {
        var arr = [],
            currentYear = new Date().getFullYear();

        for (currentYear; currentYear >= until; currentYear -= 1) {
            arr.push(currentYear);
        }

        return arr;
    }

    $scope.yearsFrom = generateYearsArray($scope.startYearFrom);

    $scope.updateToYears = function() {
        $scope.yearsTo = generateYearsArray($scope.ad.yearFrom);
    };

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