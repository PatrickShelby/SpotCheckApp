'use strict';

var spotCheckControllers = angular.module('spotCheckControllers', []);

spotCheckControllers.controller('SpotListCtrl', ['$scope', 'Spot',
  function($scope, Spot) {
    $scope.spots = Spot.query();
}]);

spotCheckControllers.controller('SpotDetailCtrl', ['$scope', '$routeParams', 'Spot',
  function($scope, $routeParams, Spot) {
    $scope.spot = Spot.get({spotId: $routeParams.spotId}, function(spot){
      $scope.mainImageUrl = spot.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
}]);
