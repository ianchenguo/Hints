'use strict';

describe('Service: createCardSetDialog', function () {

  // load the service's module
  beforeEach(module('hintsApp'));

  // instantiate service
  var createCardSetDialog;
  beforeEach(inject(function (_createCardSetDialog_) {
    createCardSetDialog = _createCardSetDialog_;
  }));

  it('should do something', function () {
    expect(!!createCardSetDialog).toBe(true);
  });

});
