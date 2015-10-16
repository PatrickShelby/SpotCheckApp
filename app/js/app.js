'use strict';

var spotCheckApp = angular.module('spotCheckApp', [
  'ngRoute',
  'spotCheckAnimations',

  'spotCheckControllers',
  'spotCheckServices'
]);

spotCheckApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/spots', {
        templateUrl: 'partials/spot-list.html',
        controller: 'SpotListCtrl'
      }).
      when('/spots/:spotId', {
        templateUrl: 'partials/spot-detail.html',
        controller: 'SpotDetailCtrl'
      }).
      otherwise({
        redirectTo: '/spots'
      });
  }]);