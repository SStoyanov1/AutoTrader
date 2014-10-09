"use strict";

app.controller("ModelsListCtrl",
    function ModelsListCtrl($scope) {
        $scope.sortAsc = true;
        $scope.models = [{
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            make: { name: "Lada" },
            name: "2105"
        }, {
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            make: { name: "Fiat" },
            name: "125p"
        }, {
            _id: "123r53-t54wgfse-rqfe24rq-r43fda",
            make: { name: "Porsche" },
            name: "918 Spyder"
        }];
    }
);