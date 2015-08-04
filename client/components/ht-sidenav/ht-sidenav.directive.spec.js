//'use strict';
//
//describe('Directive: htSidenav', function () {
//
//  // load the directive's module and view
//  beforeEach(module('hintsApp'));
//  beforeEach(module('component/ht-sidenav/ht-sidenav.html'));
//
//  var element, scope;
//
//  beforeEach(inject(function ($rootScope) {
//    scope = $rootScope.$new();
//  }));
//
//  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<ht-sidenav></ht-sidenav>');
//    element = $compile(element)(scope);
//    scope.$apply();
//    expect(element.text()).toBe('this is the htSidenav directive');
//  }));
//});
