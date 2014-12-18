// angular controllers definition

angular.module('spa2it.controllers', ['ngMaterial'])
    .controller('ListCtrl', ['$scope', function ($scope) {
        $scope.status = "all items";
    }])
    .controller('DetailCtrl', ['$scope', function ($scope) {
        $scope.status = "this only";
    }]);