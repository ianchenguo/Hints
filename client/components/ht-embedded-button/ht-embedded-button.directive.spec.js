//'use strict';
//
//describe('Directive: htEmbeddedButton', function () {
//
//  // load the directive's module and view
//  beforeEach(module('hintsApp'));
//  beforeEach(module('components/ht-embedded-button/ht-embedded-button.html'));
//
//  var element, scope;
//
//  beforeEach(inject(function ($rootScope) {
//    scope = $rootScope.$new();
//  }));
//
//  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<ht-embedded-button></ht-embedded-button>');
//    element = $compile(element)(scope);
//    scope.$apply();
//    expect(element.text()).toBe('this is the htEmbeddedButton directive');
//  }));
//});
