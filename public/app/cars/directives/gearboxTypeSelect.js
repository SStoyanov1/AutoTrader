"use strict";

app.directive("gearboxTypeSelect", function() {
    return {
        restrict: "A",
        templateUrl: "/partials/cars/gearbox-type-select",
        replace: true
    }
});