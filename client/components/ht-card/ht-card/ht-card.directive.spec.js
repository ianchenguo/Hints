//'use strict';
//
//describe('Directive: htCard', function () {
//
//  // load the directive's module and view
//  beforeEach(module('hintsApp'));
//  beforeEach(module('components/ht-card/ht-card/ht-card.html'));
//
//  var element, scope;
//
//  beforeEach(inject(function ($rootScope) {
//    scope = $rootScope.$new();
//  }));
//
//  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<ht-card></ht-card>');
//    element = $compile(element)(scope);
//    scope.$apply();
//    expect(element.text()).toBe('this is the htCard directive');
//  }));
//});
