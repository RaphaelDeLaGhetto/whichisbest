'use strict';

angular.module('whichIsBestApp')
  .factory('Best', function () {
	return {
		pick: { 
			'imageUrl': 'images/which_is_best.png',
			'id': 'which_is_best',
	   	}, 
		message: 'Pick the best!',
	}
  });
