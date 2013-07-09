'use strict';

describe('Controller: BestCtrl', function () {

  // load the controller's module
  beforeEach(module('whichIsBestApp'));

  var BestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BestCtrl = $controller('BestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
