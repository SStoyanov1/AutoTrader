"use strict";

app.controller("MakesListCtrl",
    function MakesListCtrl($scope) {
        $scope.sortAsc = true;
        $scope.makes = [{
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            name: "Mercedes-Benz"
        }, {
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            name: "BMW"
        }, {
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            name: "Volkswagen"
        }];

        $scope.sort = function() {
            console.log($scope.sortAsc);

            if ($scope.sortAsc) {
                $scope.sortAsc = false;
            } else {
                $scope.sortAsc = true;
            }
        }
    }
);