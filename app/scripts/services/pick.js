'use strict';

angular.module('whichIsBestApp')
  .factory('Pick', function ($resource) {
	return $resource('picks/:pickId.json', {}, { 
    	query: { method:'GET', params: { pickId:'picks' }, isArray:true },
		get: { method:'GET', params: { pickId:0 }, isArray:false },
	});
  });
