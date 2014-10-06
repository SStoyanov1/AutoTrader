app.controller('LoginCtrl', function($scope, notifier, identity, auth, $location) {
    $scope.identity = identity;

    $scope.login = function(user) {
        auth.login(user).then(function(success) {
            if (success) {
                notifier.success('Successful login!');
            }
            else {
                notifier.error('Username or password are not correct!');
            }
        });
    };

    $scope.logout = function() {
        auth.logout().then(function() {
            notifier.success('Successful logout!');
            $scope.user.username = '';
            $scope.user.password = '';
            $location.path('/');
        })
    }
});