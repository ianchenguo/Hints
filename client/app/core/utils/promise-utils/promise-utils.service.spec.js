'use strict';

describe('Service: promiseUtils', function () {

  // load the service's module
  beforeEach(module('hintsApp'));

  // instantiate service
  var promiseUtils;
  beforeEach(inject(function (_promiseUtils_) {
    promiseUtils = _promiseUtils_;
  }));

  it('should do something', function () {
    expect(!!promiseUtils).toBe(true);
  });

});
