app.controller('CarDetailsCtrl', function($scope, identity, $routeParams, CarResource) {
    //$scope.car = CarResource.get({id: $routeParams.id});
    $scope.idenity = identity;

    // TODO: Sort the mess
    $scope.carData = {
        _id: "23rwfdq-twf3wq3-qt4fff2-354dxd",
        make: { name: "Ford" },
        model: { name: "Focus RS" },
        engineType: { name: "Gasoline" },
        gearboxType: { name: "Manual" },
        category: { name: "Hatchback" },
        color: { name: "Green" },
        region: { name: "Sofia" },
        engineDisplacement: 3300,
        yearOfProduction: 2008,
        mileage: 12000,
        horsepower: 550,
        price: 23555,
        photoUrl: "http://upload.wikimedia.org/wikipedia/commons/d/d3/Ford_Focus_II_RS.JPG",
        description: "DAASKDHjfh JHFJH FJhd fjahfj djfadfhafahjdfha",
        addedOn: new Date(),
        user: {
            username: "pesho",
            representativeName: "Supercaro",
            email: "pesho@supercaro.com",
            phoneNumber: "+1888 234 543"
        }
    };

    $scope.carData.addedOn = $scope.carData.addedOn.toUTCString();

    if (!$scope.carData.photoUrl) {
        $scope.carData.photoUrl = "img/no_photo.png";
    }
});