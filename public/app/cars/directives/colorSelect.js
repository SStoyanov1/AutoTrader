"use strict";

app.directive("colorSelect", function() {
    return {
        restrict: "A",
        templateUrl: "/partials/cars/color-select",
        replace: true
    }
});