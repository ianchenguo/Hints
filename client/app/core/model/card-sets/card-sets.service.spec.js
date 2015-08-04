'use strict';

describe('Service: cardSets', function () {

  // load the service's module
  beforeEach(module('hintsApp'));

  // instantiate service
  var cardSets;
  beforeEach(inject(function (_cardSets_) {
    cardSets = _cardSets_;
  }));

  it('should do something', function () {
    expect(!!cardSets).toBe(true);
  });

});
