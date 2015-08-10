//'use strict';
//
//describe('Directive: htCardSetListItem', function () {
//
//  // load the directive's module and view
//  beforeEach(module('hintsApp'));
//  beforeEach(module('app/card-set/card-set-list/ht-card-set-list-item/ht-card-set-list-item.html'));
//
//  var element, scope;
//
//  beforeEach(inject(function ($rootScope) {
//    scope = $rootScope.$new();
//  }));
//
//  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<ht-card-set-list-item></ht-card-set-list-item>');
//    element = $compile(element)(scope);
//    scope.$apply();
//    expect(element.text()).toBe('this is the htCardSetListItem directive');
//  }));
//});
