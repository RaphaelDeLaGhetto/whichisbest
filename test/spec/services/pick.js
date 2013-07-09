'use strict';

describe('Service: pick', function () {

  // load the service's module
  beforeEach(module('whichIsBestApp'));

  // instantiate service
  var pick;
  beforeEach(inject(function (_pick_) {
    pick = _pick_;
  }));

  it('should do something', function () {
    expect(!!pick).toBe(true);
  });

});
