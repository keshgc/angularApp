var angApp = angular.module('angApp', [
    'ngRoute',
    'foodCtrl'
]);

angApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl : 'partials/list.html',
        controller:'ListCtrl'
    }).
    when('/details/:itemId',{
        templateUrl: 'partials/details.html',
        controller: 'DetailsCtrl'
    }).
         
     otherwise({
     redirectTo: '/list'
     });
    
} ]);