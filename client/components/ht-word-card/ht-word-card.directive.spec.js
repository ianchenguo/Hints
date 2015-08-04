//'use strict';
//
//describe('Directive: htWordCard', function () {
//
//  // load the directive's module and view
//  beforeEach(module('hintsApp'));
//  beforeEach(module('components/ht-word-card/ht-word-card.html'));
//
//  var element, scope;
//
//  beforeEach(inject(function ($rootScope) {
//    scope = $rootScope.$new();
//  }));
//
//  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<ht-word-card></ht-word-card>');
//    element = $compile(element)(scope);
//    scope.$apply();
//    expect(element.text()).toBe('this is the htWordCard directive');
//  }));
//});
