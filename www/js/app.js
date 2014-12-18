// angular app definition

angular.module('spa2it', ['ngRoute', 'ngAnimate', 'spa2it.controllers'])
    .config(function($routeProvider){
        $routeProvider
        .when('/',
        {
            controller: 'ListCtrl',
            templateUrl: 'view/list.html'
        })
        .when('/detail',
        {
            controller: 'DetailCtrl',
            templateUrl: 'view/detail.html'
        })
        .otherwise({ redirectTo: '/' });
    
});