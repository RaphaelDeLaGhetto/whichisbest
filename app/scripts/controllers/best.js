'use strict';

angular.module('whichIsBestApp')
  .controller('BestCtrl', function ($scope, $location, Pick, Best) {
	$scope.best = Best.pick;
	$scope.message = Best.message;

	// Get picks
	$scope.picks = Pick.query({}, 
			function() {
			});
  });
