"use strict";

app.controller("CategoriesListCtrl",
    function CategoriesListCtrl($scope) {
        $scope.sortAsc = true;
        $scope.categories = [{
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            name: "Sedan"
        }, {
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            name: "Coupe"
        }, {
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            name: "SUV"
        }];
    }
);