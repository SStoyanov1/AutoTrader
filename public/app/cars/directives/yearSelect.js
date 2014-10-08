"use strict";

app.directive("yearSelect", function() {
    return {
        restrict: "A",
        templateUrl: "/partials/cars/year-select",
        scope: {
            //item: "=model"
        },
        link: function(scope, element, attrs) {
            var $select = angular.element(element),
                startYear = 1920,
                currentYear = new Date().getFullYear(),
                option;

            // TODO: Sort out the mess
            $select.on("change", function() {
                console.log("Tolo");
                console.log(scope["ad"]);
            });

            for (currentYear; currentYear >= startYear; currentYear -= 1) {
                option = angular.element("<option>");
                option.html(currentYear);

                $select.append(option);
            }
        },
        replace: true
    }
});