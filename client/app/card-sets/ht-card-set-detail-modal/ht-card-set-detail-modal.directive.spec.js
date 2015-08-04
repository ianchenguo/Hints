'use strict';

describe('Directive: htCardSetDetailModal', function () {

  // load the directive's module and view
  beforeEach(module('hintsApp'));
  beforeEach(module('app/card-sets/ht-card-set-detail-modal/ht-card-set-detail-modal.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ht-card-set-detail-modal></ht-card-set-detail-modal>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the htCardSetDetailModal directive');
  }));
});