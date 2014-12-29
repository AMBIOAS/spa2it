// angular app definition

angular.module('spa2itApp',  ['ngRoute', 'spa2itApp.controllers'])
.config(function($routeProvider,$sceProvider){ //, $locationProvider){
        $sceProvider.enabled(false);
        $routeProvider
        .when('/', // accommodations
        {
            controller: 'MainCtrl',
            templateUrl: 'view/main.html'
        })
        .when('/accommodations', 
        {
            controller: 'AccommodationsCtrl',
            templateUrl: 'view/accommodations.html'
        })
        .when('/attractions', 
        {
            controller: 'AttractionsCtrl',
            templateUrl: 'view/attractions.html'
        })
        .when('/activities', 
        {
            controller: 'ActivitiesCtrl',
            templateUrl: 'view/activities.html'
        })
        .when('/event', 
        {
            controller: 'EventCtrl',
            templateUrl: 'view/event.html'
        })
        .when('/calendar', 
        {
            controller: 'CalendarCtrl',
            templateUrl: 'view/calendar.html'
        })
        .when('/wedding', 
        {
            controller: 'WeddingCtrl',
            templateUrl: 'view/wedding.html'
        })
        .when('/infopages', 
        {
            controller: 'InfoPagesCtrl',
            templateUrl: 'view/infopages.html'
        })
        .when('/quickrefpages', 
        {
            controller: 'QuickRefPagesCtrl',
            templateUrl: 'view/quickrefpages.html'
        })
        .otherwise({ redirectTo: '/' });
    
    //$locationProvider.html5Mode(true);
    
})
;

