'use strict';

describe('Controller: CardSetDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('hintsApp'));

  var CardSetDetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardSetDetailsCtrl = $controller('CardSetDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
