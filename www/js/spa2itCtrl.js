// angular controllers definition

angular.module('spa2itApp.controllers', ['ngMaterial', 'ngAnimate'])
    .controller('TabsCtrl', ['$scope', '$location', '$http', '$mdSidenav',
        function ($scope, $location, $http, $mdSidenav) {
           $scope.tabSelected = -1;

           $scope.onTabSelected = function (tab) {
               console.log("onTabSelected");
               console.log("#/" + tab.label);
               $location.url(tab.label);
           };

           $scope.tabpages = [];
           $scope.infopages = []; // left
           $scope.quickrefpages = []; // right


           // ng-href="#/infopages"
           $scope.openLeftMenu = function () {
               $mdSidenav('left').toggle();
           };

           //  ng-href="#/quickrefpages"
           $scope.openRightMenu = function () {
               $mdSidenav('right').toggle();
           };
            
             $scope.closeMenu = function () {
               $mdSidenav('left').close();
               $mdSidenav('right').close();
           };


           // get TABS pages
           $http.get('http://2it.strong.no/Webdesk/get?page=1266774&properties=title,menuTitle,label,presentation&format=JSON&type=children')
               .success(function (data) {
                   $scope.tabpages = data.elements;

               })
               .error(function (data, status) {
                   $log.log('[ERROR ' + status + '] ' + data);
                   $scope.tabpages = [];
               });

           // get LEFT menu pages
           $http.get('http://2it.strong.no/Webdesk/get?page=1266815&properties=title,menuTitle,idSmallPicture,presentation&format=JSON&type=children')
               .success(function (data) {
                   // headings:
                   $scope.infopages = data.elements;
               
                    // get all sub-menu
                    var sm = 0;
                   for (sm = 0; sm < $scope.infopages.length; sm++) {
                        console.log(sm);
                       console.log("get submenu for " + $scope.infopages[sm].title);
                        // get LEFT sub-menu pages
                        $http.get('http://2it.strong.no/Webdesk/get?page='+$scope.infopages[sm].idPage+'&properties=idMainPage,title,menuTitle,idSmallPicture,presentation&format=JSON&type=children')
               .success(function (data) {
                   // headings:
                            console.log("found " +  data.elements.length);
                            console.log(sm);
                            // find the infopage with the idMainPage
                            for(var i=0; i<$scope.infopages.length;i++) {
                                if ($scope.infopages[i].idPage == data.elements[0].idMainPage) {
                                    $scope.infopages[i]['submenu'] = data.elements;
                                    break;
                                }
                            }
                            

               
                       })
                       .error(function (data, status) {
                           $log.log('[ERROR ' + status + '] ' + data);
                       });
                       
                    }  
                        
               
               })
               .error(function (data, status) {
                   $log.log('[ERROR ' + status + '] ' + data);
                   $scope.infopages = [];
               });

           // get RIGHT menu pages
           $http.get('http://2it.strong.no/Webdesk/get?page=1266809&properties=title,menuTitle,idSmallPicture,presentation&format=JSON&type=children')
               .success(function (data) {
                   $scope.quickrefpages = data.elements;
               })
               .error(function (data, status) {
                   $log.log('[ERROR ' + status + '] ' + data);
                   $scope.quickrefpages = [];
               });

    }])
// =================== SET UP IN THE ROUTER ====================
.controller('MainCtrl', ['$scope',
    function ($scope) {
        $scope.welcomeTo = 'Lucca';
    }])

.controller('PageCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        console.log("PageCtrl");
        console.log($routeParams);
        var idPage = $routeParams.idPage;
        console.log(idPage);
        $scope.page = {};
        $scope.subpages = [];

        // GET ONE PAGE ONLY
        $http.get('http://2it.strong.no/Webdesk/get?page=' + idPage + '&properties=title,menuTitle,idSmallPicture,presentation,text&format=JSON&type=page')
            .success(function (data) {
                $scope.page = data.elements[0];

                // GET SUBPAGES
                $http.get('http://2it.strong.no/Webdesk/get?page=' + $scope.page.idPage + '&properties=title,menuTitle,label,presentation&format=JSON&type=children')
                    .success(function (data) {
                        $scope.subpages = data.elements;
                    })
                    .error(function (data, status) {
                        $log.log('[ERROR ' + status + '] ' + data);
                        $scope.subpages = [];
                    });


            })
            .error(function (data, status) {
                $log.log('[ERROR ' + status + '] ' + data);
                $scope.page = {};
                $scope.subpages = [];
            });

    }])

.controller('EventCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.event = {};

        // GET ONE PAGE ONLY
        $http.get('http://2it.strong.no/Webdesk/get?page=1266902&properties=title,menuTitle,idSmallPicture,presentation,text&format=JSON&type=page')
            .success(function (data) {
                $scope.event = data.elements[0];
            })
            .error(function (data, status) {
                $log.log('[ERROR ' + status + '] ' + data);
                $scope.event = {};
            });
    }])
    .controller('CalendarCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $scope.calendar = [];

            $http.get('http://2it.strong.no/Webdesk/get?page=1266780&properties=title,menuTitle,idSmallPicture,introduction,text&format=JSON&type=children')
                .success(function (data) {
                    $scope.calendar = data.elements;
                    // GET SUBPAGES FOR EACH SEASON

                $scope.calendar[0].subpages = [];
                $scope.calendar[1].subpages = [];
                $scope.calendar[2].subpages = [];
                $scope.calendar[3].subpages = [];

                    console.log("get calendar subpages for:");
                    console.log($scope.calendar[0].idPage);
                 
                    // GET SUBPAGES 0
                    $http.get('http://2it.strong.no/Webdesk/get?page=' + $scope.calendar[0].idPage + '&properties=title,menuTitle,link,presentation&format=JSON&type=children')
                        .success(function (data) {
                            console.log("found " + data.elements.length + " in 0");
                            $scope.calendar[0].subpages = data.elements;
                        })
                        .error(function (data, status) {
                            $log.log('[ERROR ' + status + '] ' + data);
                            $scope.calendar[0].subpages = [];
                        });

                    // GET SUBPAGES 1
                    $http.get('http://2it.strong.no/Webdesk/get?page=' + $scope.calendar[1].idPage + '&properties=title,menuTitle,link,presentation&format=JSON&type=children')
                        .success(function (data) {
                            console.log("found " + data.elements.length + " in 1");
                            $scope.calendar[1].subpages = data.elements;
                        })
                        .error(function (data, status) {
                            $log.log('[ERROR ' + status + '] ' + data);
                            $scope.calendar[1].subpages = [];
                        });

                    // GET SUBPAGES 2
                    $http.get('http://2it.strong.no/Webdesk/get?page=' + $scope.calendar[2].idPage + '&properties=title,menuTitle,link,presentation&format=JSON&type=children')
                        .success(function (data) {
                            console.log("found " + data.elements.length + " in 2");
                            $scope.calendar[2].subpages = data.elements;
                        })
                        .error(function (data, status) {
                            $log.log('[ERROR ' + status + '] ' + data);
                            $scope.calendar[2].subpages = [];
                        });

                    // GET SUBPAGES 3
                    $http.get('http://2it.strong.no/Webdesk/get?page=' + $scope.calendar[3].idPage + '&properties=title,menuTitle,link,presentation&format=JSON&type=children')
                        .success(function (data) {
                            console.log("found " + data.elements.length + " in 3");
                            $scope.calendar[3].subpages = data.elements;
                        })
                        .error(function (data, status) {
                            $log.log('[ERROR ' + status + '] ' + data);
                            $scope.calendar[3].subpages = [];
                        });



                })
                .error(function (data, status) {
                    $log.log('[ERROR ' + status + '] ' + data);
                    $scope.calendar = [];
                });
    }])

.controller('WeddingCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.wedding = [];
        // GET ONE PAGE ONLY
        $http.get('http://2it.strong.no/Webdesk/get?page=1267020&properties=title,menuTitle,idSmallPicture,presentation,text&format=JSON&type=page')
            .success(function (data) {
                $scope.wedding = data.elements[0];
            })
            .error(function (data, status) {
                $log.log('[ERROR ' + status + '] ' + data);
                $scope.wedding = [];
            });
    }])
    .controller('AccommodationsCtrl', ['$scope', '$http',
        function ($scope, $http) {
            //console.log("AccommodationsCtrl");
            $scope.accommodations = [];

            $http.get('http://2it.strong.no/Webdesk/get?page=1266787&properties=title,menuTitle,idSmallPicture,presentation,area-1&format=JSON&type=children')
                .success(function (data) {
                    // process elements!!
                    for (var i = 0; i < data.elements.length; i++) {
                        var rawURL = data.elements[i]['area-1'];
                        var imgURL = "http://placehold.it/320x320";
                        if ("" != rawURL) {
                            imgURL = rawURL.replace(/w\d+-h\d+-no/, "h320");
                        }
                        data.elements[i]['imgURL'] = imgURL;
                    }
                    $scope.accommodations = data.elements;
                })
                .error(function (data, status) {
                    $log.log('[ERROR ' + status + '] ' + data);
                    $scope.accommodations = [];
                });
    }])
    .controller('AttractionsCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $scope.attractions = [];

            $http.get('http://2it.strong.no/Webdesk/get?page=1266777&properties=title,menuTitle,idSmallPicture,presentation,area-1&format=JSON&type=children')
                .success(function (data) {
                    // process elements!!
                    for (var i = 0; i < data.elements.length; i++) {
                        var rawURL = data.elements[i]['area-1'];
                        var imgURL = "http://placehold.it/320x320";
                        if ("" != rawURL) {
                            imgURL = rawURL.replace(/w\d+-h\d+-no/, "h320");
                        }
                        data.elements[i]['imgURL'] = imgURL;
                    }


                    $scope.attractions = data.elements;
                })
                .error(function (data, status) {
                    $log.log('[ERROR ' + status + '] ' + data);
                    $scope.attractions = [];
                });
    }])
    .controller('ActivitiesCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $scope.activities = [];
            $scope.activitiesTrips = [];
            $scope.activitiesParts = [];

            $http.get('http://2it.strong.no/Webdesk/get?page=1266781&properties=title,menuTitle,idSmallPicture,presentation,area-1&format=JSON&type=children')
                .success(function (data) { // process elements!!
                    for (var i = 0; i < data.elements.length; i++) {
                        var rawURL = data.elements[i]['area-1'];
                        var imgURL = "http://placehold.it/96x96";
                        if ("" != rawURL) {
                            imgURL = rawURL.replace(/w\d+-h\d+-no/, "h320");
                        }
                        data.elements[i]['imgURL'] = imgURL;
                    }

                    $scope.activities = data.elements;

                    // get Trips ==================================
                    $http.get('http://2it.strong.no/Webdesk/get?page=' + data.elements[0]['idPage'] + '&properties=title,menuTitle,idSmallPicture,presentation,area-1&format=JSON&type=children')
                        .success(function (data) { // process elements!!
                            for (var i = 0; i < data.elements.length; i++) {
                                var rawURL = data.elements[i]['area-1'];
                                var imgURL = "http://placehold.it/320x320";
                                if ("" != rawURL) {
                                    imgURL = rawURL.replace(/w\d+-h\d+-no/, "h320");
                                }
                                data.elements[i]['imgURL'] = imgURL;
                            }

                            $scope.activitiesTrips = data.elements;
                        })
                        .error(function (data, status) {
                            $log.log('[ERROR ' + status + '] ' + data);
                            $scope.activities = [];
                        }); // Trips

                    // get Parts ==================================
                    $http.get('http://2it.strong.no/Webdesk/get?page=' + data.elements[1]['idPage'] + '&properties=title,menuTitle,idSmallPicture,presentation,area-1&format=JSON&type=children')
                        .success(function (data) { // process elements!!
                            for (var i = 0; i < data.elements.length; i++) {
                                var rawURL = data.elements[i]['area-1'];
                                var imgURL = "http://placehold.it/160x160";
                                if ("" != rawURL) {
                                    imgURL = rawURL.replace(/w\d+-h\d+-no/, "h160");
                                }
                                data.elements[i]['imgURL'] = imgURL;
                            }

                            $scope.activitiesParts = data.elements;
                        })
                        .error(function (data, status) {
                            $log.log('[ERROR ' + status + '] ' + data);
                            $scope.activities = [];
                        }); // Parts

                })
                .error(function (data, status) {
                    $log.log('[ERROR ' + status + '] ' + data);
                    $scope.activities = [];
                });
    }])




;