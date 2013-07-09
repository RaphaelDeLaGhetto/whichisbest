'use strict';

angular.module('whichIsBestApp')
  .controller('PickCtrl', function ($scope, $location, Pick, Best) {
	$scope.picks = Pick.query({}, 
			function() {
				shuffle($scope.picks);
				_refreshChoices();
			});
	
	// The left pick was chosen
	$scope.chooseLeft = function() {
		$scope.picks.push($scope.left);
		_refreshChoices();
	};

	// The right pick was chosen
	$scope.chooseRight = function() {
		$scope.picks.push($scope.right);
		_refreshChoices();
	};

	// Present next choices
	function _refreshChoices(){
		if ($scope.picks.length > 1) {
			$scope.left = _dequeue();
			$scope.right = _dequeue();
		} else {
			Best.pick = _dequeue();
			Best.message = "You like this one best!";
							
			$location.path('/this_is_best');
			$location.replace('/this_is_best');
		}
	};

	// Dequeue the picks array
	function _dequeue() {
		var pick = $scope.picks[0];
		if ($scope.picks.length > 0) {
			$scope.picks = $scope.picks.slice(1, $scope.picks.length);
		}
		return pick;
	};

	/**
	 * Jonas Raoni Soares Silva
	 * http://jsfromhell.com/array/shuffle [v1.0]
	 */
	function shuffle(o){ //v1.0
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   		return o;
	};  
  });
