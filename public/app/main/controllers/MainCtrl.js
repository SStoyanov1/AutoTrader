'use strict';

app.controller('MainCtrl', function($scope, $location, CarResource) {
    $scope.startYearFrom = 1920;
    $scope.startYearTo = $scope.startYearFrom;
    $scope.yearsFrom = generateYearsArray($scope.startYearFrom);
    $scope.filteredCars = CarResource.queryBased
        .query({ page: 1, sortBy: "published", desc: true }, function() {
            $scope.filteredCars.forEach(function (item) {
                if (!item.photoUrl) {
                    item.photoUrl = "img/no_photo.png";
                }
            });

            if ($scope.filteredCars.length === 10) {
                $scope.filteredCars.pop();
            }
        });

    function generateYearsArray(until) {
        var arr = [],
            currentYear = new Date().getFullYear();

        for (currentYear; currentYear >= until; currentYear -= 1) {
            arr.push(currentYear);
        }

        return arr;
    }

    $scope.updateToYears = function() {
        $scope.yearsTo = generateYearsArray($scope.ad.yearFrom);
    };

    $scope.search = function(ad) {
        $location.path("/cars").search(ad);
    };
});