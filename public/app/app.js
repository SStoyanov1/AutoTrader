var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return auth.isAuthenticated();
            }
        }
    };

    $routeProvider
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when('/', {
           templateUrl: '/partials/main/home',
           controller: 'MainCtrl'
        })
        .when('/cars', {
            templateUrl: '/partials/cars/cars-list',
            controller: 'CarsListCtrl'
        })
        .when('/cars/add', {
            templateUrl: '/partials/cars/add-car',
            controller: 'AddCarCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/cars/:id', {
            templateUrl: '/partials/cars/car-details',
            controller: 'CarDetailsCtrl'
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.adminRole
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});