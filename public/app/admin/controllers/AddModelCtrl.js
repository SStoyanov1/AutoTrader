"use strict";

app.controller("AddModelCtrl",
    function AddModelCtrl($scope, $location, ModelResource, notifier) {
        $scope.manipName = "Add new";
        $scope.buttonName = "ADD";

        $scope.manipulateModel = function(model) {
            ModelResource.getAll.save(model,
                function() {
                    notifier.success(model.make + " " + model.name + " has been added successfully!");
                    $location.path("/admin/models");
                },
                function(response) {
                    console.log(response);
                    notifier.error("An error occurred.");
                }
            );
        }
    }
);