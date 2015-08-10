'use strict';

describe('Service: cardSetTags', function () {

  // load the service's module
  beforeEach(module('hintsApp.core'));

  // instantiate service
  var cardSetTags;
  beforeEach(inject(function (_cardSetTags_) {
    cardSetTags = _cardSetTags_;
  }));

  describe('interface', () => {
    it('should expose createTags()', () => {
      expect(cardSetTags.createTags()).toBeDefined();
    });
  });

  describe('createTags()', () => {

  });

});




