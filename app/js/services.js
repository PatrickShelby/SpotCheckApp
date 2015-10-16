'use strict';

/* Services */

var spotCheckServices = angular.module('spotCheckServices', ['ngResource']);

spotCheckServices.factory('Spot', ['$resource',
  function($resource){
    return $resource('spots/:spotId.json', {}, {
      query: {method:'GET', params:{spotId:'spots'}, isArray:true}
    });
  }]);