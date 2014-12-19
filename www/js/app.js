// angular app definition

var app = angular.module('spa2it', ['ngRoute', 'spa2it.controllers'])
    .config(function($routeProvider){
        $routeProvider
        .when('/',
        {
            controller: 'ListCtrl',
            templateUrl: 'view/list.html'
        })
        .when('/detail/:pageId',
        {
            controller: 'DetailCtrl',
            templateUrl: 'view/detail.html'
        })
        .otherwise({ redirectTo: '/' });
    
});