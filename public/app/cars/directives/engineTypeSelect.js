"use strict";

app.directive("engineTypeSelect", function() {
    return {
        restrict: "A",
        templateUrl: "/partials/cars/engine-type-select",
        replace: true
    }
});