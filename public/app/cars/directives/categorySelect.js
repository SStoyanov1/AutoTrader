"use strict";

app.directive("categorySelect", function() {
    return {
        restrict: "A",
        templateUrl: "/partials/cars/category-select",
        replace: true
    }
});