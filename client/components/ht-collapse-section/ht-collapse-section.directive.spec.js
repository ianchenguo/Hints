//'use strict';
//
//describe('Directive: htCollapseSection', function () {
//
//  // load the directive's module and view
//  beforeEach(module('hintsApp'));
//  beforeEach(module('compoments/ht-collapse-section/ht-collapse-section/ht-collapse-section.html'));
//
//  var element, scope;
//
//  beforeEach(inject(function ($rootScope) {
//    scope = $rootScope.$new();
//  }));
//
//  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<ht-collapse-section></ht-collapse-section>');
//    element = $compile(element)(scope);
//    scope.$apply();
//    expect(element.text()).toBe('this is the htCollapseSection directive');
//  }));
//});
