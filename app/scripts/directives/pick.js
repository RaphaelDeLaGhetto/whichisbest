'use strict';

angular.module('whichIsBestApp')
  .directive('pick', function () {
	return {
		restrict: 'E',
		transclude: true,
		scope: { 
			path: '@path',
			pickid: '@pickid',
		},
		controller: function($scope, $element, $window) {

			// Modal operations
			$scope.open = function () {
    			$scope.shouldBeOpen = true;
	  		};

		    $scope.close = function () {
			    $scope.shouldBeOpen = false;
		  	};

			// Height
			$scope.getHeight = function() {
				return $window.innerHeight - 150;
			};

			$scope.$watch($scope.getHeight, function(newValue, oldValue) {
				if ($window.innerWidth < $window.innerHeight) {
					$scope.dimensions = "width:" + $scope.getWidth() + "px";
				}
			});

			// Width
			$scope.getWidth = function() {
				return $window.innerWidth - 150;
			};

			$scope.$watch($scope.getWidth, function(newValue, oldValue) {
				if ($window.innerWidth > $window.innerHeight) {
					$scope.dimensions = "height:" + $scope.getHeight() + "px";
				}
			});

			// Options
			$scope.opts = {
				backdropFade: true,
  				dialogFade: true
		    };

			$window.onresize = function(){
		        $scope.$apply();
		    }
		},
		template:
			'<div class="pick">' +
				'<img class="pick-image-style" ng-src="{{path}}" ng-click="open()" style="{{dimensions}};" />' +
				'<div modal="shouldBeOpen" close="close()" options="opts">' +
					'<div class="modal-header">' +
						'<pinterest pickid="{{pickid}}"></pinterest>' +
					'</div>' +
					'<div class="modal-body">' +
						'<img class="pick-image-style" ng-src="{{path}}" ng-click="close()" />' +
					'</div>' +
					'<div class="modal-footer">' +
						'<div style="float:right;">' +
							'<pinterest pickid="{{pickid}}"></pinterest>' +
						'</div>' +
						'<div style="float:left;">' +
							'<a href="https://www.facebook.com/pages/Wide-Angle-Photo/122494691202654" target="_blank">' +
								'Courtesy of Wide Angle Photo</a>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>',

		replace: true
	}
  });
