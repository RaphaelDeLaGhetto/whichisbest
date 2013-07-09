'use strict';

angular.module('whichIsBestApp', ['ngResource', 'ui.bootstrap'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/which_is_best.html',
        controller: 'PickCtrl'
      })
      .when('/this_is_best', {
		templateUrl: 'views/this_is_best.html', 
		controller: 'BestCtrl'
	  })
	  .when('/choice/:pickId', {
		templateUrl: 'views/choice.html', 
		controller: 'ChoiceCtrl'
		})
      .otherwise({
        redirectTo: '/'
      });
  }]);



