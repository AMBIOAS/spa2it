// angular controllers definition

angular.module('spa2itApp.controllers', ['ngMaterial', 'ngAnimate'])
    .controller('TabsCtrl', ['$scope', '$location','$http', function($scope, $location, $http) {
        $scope.tabSelected = -1;
        $scope.showView = function(url){
            console.log(url);
           
            $location.path(url);
        };
        
        $scope.tabpages = []; //Accommodations.getList();
        
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
        $scope.event = []; //Accommodations.getList();
        
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
        
        $scope.calendar = []; //Accommodations.getList();
        
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
        $scope.wedding = []; //Accommodations.getList();
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
        $scope.accommodations = []; //Accommodations.getList();
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266787&properties=title,idSmallPicture,presentation&format=JSON&type=children')
        .success( function(data) {
            $scope.accommodations = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.accommodations = [];
        });
    }])
    .controller('AttractionsCtrl', ['$scope','$http', function($scope,$http) {
        $scope.attractions = []; //Accommodations.getList();
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266777&properties=title,idSmallPicture,presentation&format=JSON&type=children')
        .success( function(data) {
            $scope.attractions = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.attractions = [];
        });
    }])
    .controller('ActivitiesCtrl', ['$scope','$http', function($scope,$http) {
        $scope.activities = []; //Accommodations.getList();
        
        $http.get('http://2it.strong.no/Webdesk/get?page=1266781&properties=title,idSmallPicture,presentation&format=JSON&type=children')
        .success( function(data) {
            $scope.activities = data.elements;
        })
        .error( function (data, status) {
            $log.log('[ERROR '+status+'] '+data);
            $scope.activities = [];
        });
    }])
    .controller('InfoPagesCtrl', ['$scope','$http', function($scope,$http) {
        $scope.infopages = []; //Accommodations.getList();
        
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
        $scope.quickrefpages = []; //Accommodations.getList();
        
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