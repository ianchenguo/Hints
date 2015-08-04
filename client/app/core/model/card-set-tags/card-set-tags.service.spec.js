'use strict';

describe('Service: cardSetTags', function () {

  // load the service's module
  beforeEach(module('hintsApp'));

  // instantiate service
  var cardSetTags;
  beforeEach(inject(function (_cardSetTags_) {
    cardSetTags = _cardSetTags_;
  }));

  it('should do something', function () {
    expect(!!cardSetTags).toBe(true);
  });

});
