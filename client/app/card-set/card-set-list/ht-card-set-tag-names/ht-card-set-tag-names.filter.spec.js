'use strict';

describe('Filter: htCardSetTagNames', function () {

  // load the filter's module
  beforeEach(module('hintsApp'));

  // initialize a new instance of the filter before each test
  var htCardSetTagNames;
  beforeEach(inject(function ($filter) {
    htCardSetTagNames = $filter('htCardSetTagNames');
  }));

  it('should return the input prefixed with "htCardSetTagNames filter:"', function () {
    var text = 'angularjs';
    expect(htCardSetTagNames(text)).toBe('htCardSetTagNames filter: ' + text);
  });

});
