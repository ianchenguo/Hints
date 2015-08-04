'use strict';

describe('Controller: CardSetListCtrl', function () {

  // load the controller's module
  beforeEach(module('hintsApp'));

  var CardSetListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardSetListCtrl = $controller('CardSetListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
