"use strict";

app.controller("AddMakeCtrl",
    function AddMakeCtrl($scope, MakeResource, $location, notifier) {
        $scope.manipName = "Add new";
        $scope.buttonName = "ADD";

        $scope.manipulateMake = function(name) {
            MakeResource.getAll.save({ name: name },
                function () {
                    notifier.success(name + " make has been added!");
                    $location.path("/admin/makes");
                },
                function (response) {
                    notifier.error("An error occurred.");
                }
            );
        };
    }
);