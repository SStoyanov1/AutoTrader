"use strict";

app.controller("AddCategoryCtrl",
    function AddCategoryCtrl($scope, $location, CategoryResource, notifier) {
        $scope.manipName = "Add new";
        $scope.buttonName = "ADD";

        $scope.manipulateCategory = function(name) {
            CategoryResource.getAll.save({ name: name },
                function () {
                    notifier.success(name + " category has been added!");
                    $location.path("/admin/categories");
                },
                function (response) {
                    notifier.error("An error occurred.");
                }
            );
        };
    }
);