'use strict';

describe('Directive: pick', function () {
  beforeEach(module('whichIsBestApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<pick></pick>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the pick directive');
  }));
});
