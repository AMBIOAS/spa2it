// angular app definition

angular.module('spa2itApp',  ['ngRoute', 'spa2itApp.controllers'])
.config(['$routeProvider', '$locationProvider', '$sceProvider',function($routeProvider,$locationProvider, $sceProvider){ //, $locationProvider){
        $sceProvider.enabled(false);
        //$locationProvider.html5Mode(true);
        
    $routeProvider
        .when('/', // accommodations
        {
            controller: 'MainCtrl',
            templateUrl: 'view/main.html'
        })
        .when('/page/:idPage', // any page
        {
            controller: 'PageCtrl',
            templateUrl: 'view/page.html'
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
        .otherwise({ redirectTo: '/' });
    
}])
;

