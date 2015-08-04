'use strict';

describe('Directive: htCardSets', function () {

  // load the directive's module and view
  beforeEach(module('hintsApp'));
  beforeEach(module('app/card-sets/ht-card-sets/ht-card-sets.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ht-card-sets></ht-card-sets>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the htCardSets directive');
  }));
});