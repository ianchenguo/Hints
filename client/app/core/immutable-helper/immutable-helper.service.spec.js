'use strict';

describe('Service: immutableHelper', function () {

  // load the service's module
  beforeEach(module('hintsApp'));

  // instantiate service
  var immutableHelper;
  beforeEach(inject(function (_immutableHelper_) {
    immutableHelper = _immutableHelper_;
  }));

  it('should do something', function () {
    expect(!!immutableHelper).toBe(true);
  });

});
