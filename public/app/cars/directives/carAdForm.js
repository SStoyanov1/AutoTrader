"use strict";

app.directive("carAdForm", function() {
    return {
        restrict: "A",
        templateUrl: "/partials/cars/car-ad-form",
        replace: true
    }
});