// angular controllers definition

angular.module('spa2itApp.controllers', ['ngMaterial', 'ngAnimate'])
    .controller('TabsCtrl', ['$scope', '$location','$http', function($scope, $location, $http) {
        $scope.tabSelected = -1;
        $scope.showView = function(url){
            console.log(url);
           
            $location.path(url);
        };
        
        $scope.tabpages = []; 
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266774&properties=title,label,presentation&format=JSON&type=children')
        .success( function(data) {
            $scope.tabpages = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.tabpages = [];
        });
    }])
    // =================== SET UP IN THE ROUTER ====================
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.welcomeTo = 'Lucca';
    }])

    .controller('EventCtrl', ['$scope','$http', function($scope,$http) {
        $scope.event = []; 
        
        // GET ONE PAGE ONLY
        $http.get('http://2it.strong.no/Webdesk/get?page=1266902&properties=title,idSmallPicture,presentation,text&format=JSON&type=page')
        $http.get('http://2it.strong.no/Webdesk/get?page=1266902&properties=title,idSmallPicture,presentation,text&format=JSON&type=page')
        .success( function(data) {
            $scope.event = data.elements[0];
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.event = [];
        });
    }])
    .controller('CalendarCtrl', ['$scope','$http', function($scope,$http) {
        
        $scope.calendar = []; 
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266780&properties=title,idSmallPicture,presentation&format=JSON&type=children')
        .success( function(data) {
            $scope.calendar = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.calendar = [];
        });
    }])

    .controller('WeddingCtrl', ['$scope','$http', function($scope,$http) {
        $scope.wedding = []; 
        // GET ONE PAGE ONLY
        $http.get('http://2it.strong.no/Webdesk/get?page=1267020&properties=title,idSmallPicture,presentation,text&format=JSON&type=page')
        .success( function(data) {
            $scope.wedding = data.elements[0];
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.wedding = [];
        });
    }])
    .controller('AccommodationsCtrl', ['$scope','$http', function($scope,$http) {
        //console.log("AccommodationsCtrl");
        $scope.accommodations = []; 
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266787&properties=title,idSmallPicture,presentation,area-1&format=JSON&type=children')
        .success( function(data) {
            // process elements!!
            for(var i = 0; i < data.elements.length; i++) {
                var rawURL = data.elements[i]['area-1'];
                var imgURL = "http://placehold.it/320x320";
                if ("" != rawURL) {
                    imgURL = rawURL.replace(/w\d+-h\d+-no/,"h320");
                }
                data.elements[i]['imgURL'] = imgURL;
            }
            $scope.accommodations = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.accommodations = [];
        });
    }])
    .controller('AttractionsCtrl', ['$scope','$http', function($scope,$http) {
        $scope.attractions = []; 
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266777&properties=title,idSmallPicture,presentation,area-1&format=JSON&type=children')
        .success( function(data) {
            // process elements!!
            for(var i = 0; i < data.elements.length; i++) {
                var rawURL = data.elements[i]['area-1'];
                var imgURL = "http://placehold.it/320x320";
                if ("" != rawURL) {
                    imgURL = rawURL.replace(/w\d+-h\d+-no/,"h320");
                }
                data.elements[i]['imgURL'] = imgURL;
            }
            
            
            $scope.attractions = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.attractions = [];
        });
    }])
    .controller('ActivitiesCtrl', ['$scope','$http', function($scope,$http) {
        $scope.activities = []; 
        $scope.activitiesTrips = []; 
        $scope.activitiesParts = []; 
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266781&properties=title,idSmallPicture,presentation,area-1&format=JSON&type=children')
        .success( function(data) {// process elements!!
            for(var i = 0; i < data.elements.length; i++) {
                var rawURL = data.elements[i]['area-1'];
                var imgURL = "http://placehold.it/96x96";
                if ("" != rawURL) {
                    imgURL = rawURL.replace(/w\d+-h\d+-no/,"h320");
                }
                data.elements[i]['imgURL'] = imgURL;
            }
            
            $scope.activities = data.elements;
            
            // get Trips ==================================
            $http.get('http://2it.strong.no/Webdesk/get?page='+data.elements[0]['idPage']+'&properties=title,idSmallPicture,presentation,area-1&format=JSON&type=children')
            .success( function(data) {// process elements!!
                for(var i = 0; i < data.elements.length; i++) {
                    var rawURL = data.elements[i]['area-1'];
                    var imgURL = "http://placehold.it/320x320";
                    if ("" != rawURL) {
                        imgURL = rawURL.replace(/w\d+-h\d+-no/,"h320");
                    }
                    data.elements[i]['imgURL'] = imgURL;
                }

                $scope.activitiesTrips = data.elements;
            })
            .error( function (data, status) { 
                $log.log('[ERROR '+status+'] '+data);
                $scope.activities = [];
            }); // Trips
            
            // get Parts ==================================
            $http.get('http://2it.strong.no/Webdesk/get?page='+data.elements[1]['idPage']+'&properties=title,idSmallPicture,presentation,area-1&format=JSON&type=children')
            .success( function(data) {// process elements!!
                for(var i = 0; i < data.elements.length; i++) {
                    var rawURL = data.elements[i]['area-1'];
                    var imgURL = "http://placehold.it/160x160";
                    if ("" != rawURL) {
                        imgURL = rawURL.replace(/w\d+-h\d+-no/,"h160");
                    }
                    data.elements[i]['imgURL'] = imgURL;
                }

                $scope.activitiesParts = data.elements;
            })
            .error( function (data, status) { 
                $log.log('[ERROR '+status+'] '+data);
                $scope.activities = [];
            }); // Parts
            
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.activities = [];
        });
    }])
    .controller('InfoPagesCtrl', ['$scope','$http', function($scope,$http) {
        $scope.infopages = []; 
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266816&properties=title,idSmallPicture,presentation&format=JSON&type=children')
        .success( function(data) {
            $scope.infopages = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.infopages = [];
        });
    }])
    .controller('QuickRefPagesCtrl', ['$scope','$http', function($scope,$http) {
        $scope.quickrefpages = []; 
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266809&properties=title,idSmallPicture,presentation&format=JSON&type=children')
        .success( function(data) {
            $scope.quickrefpages = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.quickrefpages = [];
        });
    }])


;