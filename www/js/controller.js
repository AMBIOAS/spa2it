// angular controllers definition

angular.module('spa2it.controllers', ['ngMaterial', 'ngAnimate'])
    .controller('ListCtrl', ['$scope','$http', function($scope,$http) {
        $scope.status = "all items";
        $scope.accommodations = []; //Accommodations.getList();
        // http://2it.strong.no/Webdesk/get?page=1266787&properties=title,idSmallPicture,presentation&format=JSON&type=children
        // mock/accommodations.json
        
       
                $http.get('http://2it.strong.no/Webdesk/get?page=1266787&properties=title,idSmallPicture,presentation&format=JSON&type=children')
                .success( function(data) {
                    $scope.accommodations = data.elements;
                })
                .error( function (data, status) {
                    $log.log('[ERROR '+status+'] '+data);
                    $scope.accommodations = [];
                });
    }])
    .controller('DetailCtrl', ['$scope', function ($scope) {
        $scope.status = "this only";
    }])
    .controller('TabsCtrl', ['$scope', function ($scope) {
        $scope.tabs = {
          selectedIndex : 0
        };
        // 1 2 3 4 5 6
        // 0 1 2 3 4 5
        $scope.next = function() {
          $scope.tabs.selectedIndex = Math.min($scope.tabs.selectedIndex + 1, 5) ;
        };
        $scope.previous = function() {
          $scope.tabs.selectedIndex = Math.max($scope.tabs.selectedIndex - 1, 0);
        };
        
    }]
    );