'use strict';

describe('Service: best', function () {

  // load the service's module
  beforeEach(module('whichIsBestApp'));

  // instantiate service
  var best;
  beforeEach(inject(function (_best_) {
    best = _best_;
  }));

  it('should do something', function () {
    expect(!!best).toBe(true);
  });

});
