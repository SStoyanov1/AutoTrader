'use strict';

app.controller('MainCtrl', function($scope, CarResource) {
    $scope.cars = CarResource.query();
});