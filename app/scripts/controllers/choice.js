'use strict';

angular.module('whichIsBestApp')
  .controller('ChoiceCtrl', function ($scope, Pick, $routeParams) {
	$scope.choice = Pick.get({ pickId: $routeParams.pickId }, function() {
	});
  });
