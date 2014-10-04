'use strict';

app.controller('MainCtrl', function($scope) {
    $scope.cars = [
        {brand: 'Mazda', model: 'MX-6', year: '1990', published: new Date('2014-03-08') },
        {brand: 'BMW', model: '330', year: '1995', published: new Date('2014-06-08') },
        {brand: 'Mercedes', model: 'CLK', year: '2000', published: new Date('2014-09-08') }
    ];
});