'use strict';

describe('Service: modelUtils', function () {

  // load the service's module
  beforeEach(module('hintsApp'));

  // instantiate service
  var modelUtils;
  beforeEach(inject(function (_modelUtils_) {
    modelUtils = _modelUtils_;
  }));

  it('should do something', function () {
    expect(!!modelUtils).toBe(true);
  });

});
