app.controller('LoginCtrl', function($scope, $http, notifier) {
    $scope.login = function(user) {
        $http.post('/login', user)
            .success(function(data) {
                if (data.success) {
                    notifier.success('Successful login!');
                }
                else {
                    notifier.error('Username or password are not correct!');
                }
            });
    };
});
