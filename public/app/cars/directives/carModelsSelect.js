"use strict";

app.directive("carModelsSelect", function() {
    return {
        restrict: "A",
        templateUrl: "/partials/cars/car-models-select",
        replace: true
    }
});