'use strict';

describe('Service: cardSetListService', function () {

  // load the service's module
  beforeEach(module('hintsApp'));

  // instantiate service
  var cardSetListService;
  beforeEach(inject(function (_cardSetListService_) {
    cardSetListService = _cardSetListService_;
  }));

  it('should do something', function () {
    expect(!!cardSetListService).toBe(true);
  });

});
