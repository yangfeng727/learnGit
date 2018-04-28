   angular.module("myApp",["ngRoute"])
    .controller("aController",function($scope,$route){
        $scope.hello = "hello,a!";
    })
    .controller("bController",function($scope){
        $scope.hello = "hello,b!";
    })
    .controller("myCtrl",function($scope,$location){

        $scope.$on("$viewContentLoaded",function(){
            console.log("ng-view content loaded!");
        });

        $scope.$on("$routeChangeStart",function(event,next,current){
            //event.preventDefault(); //cancel url change
            console.log("route change start!");
        });
    })
    .config(function($routeProvider, $locationProvider) {
          $routeProvider
           .when('/a', {
            templateUrl: 'a.html',
            controller: 'aController'
          })
        .when('/b', {
            templateUrl: 'b.html',
            controller: 'bController',
            resolve: {
                  // I will cause a 1 second delay
                  delay: function($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 3000);
                    return delay.promise;
                  }
            }
        })
        .otherwise({
            redirectTo: '/a'
          });
    });
// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {

// });