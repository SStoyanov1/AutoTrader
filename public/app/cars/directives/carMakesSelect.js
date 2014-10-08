"use strict";

app.directive("carMakesSelect", function() {
    return {
        restrict: "A",
        templateUrl: "/partials/cars/car-makes-select",
        replace: true
    }
});