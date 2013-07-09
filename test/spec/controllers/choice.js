'use strict';

describe('Controller: ChoiceCtrl', function () {

  // load the controller's module
  beforeEach(module('whichIsBestApp'));

  var ChoiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChoiceCtrl = $controller('ChoiceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
