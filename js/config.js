//Setting up routes
angular.module('ngseed').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/home.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);

//Setting Hashbang Location Mode
angular.module('ngseed').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);