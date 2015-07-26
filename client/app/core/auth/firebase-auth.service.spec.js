'use strict';

describe('Service: firebaseAuth', function () {

  // load the service's module
  beforeEach(module('hintsApp.core.auth'));

  //mock $firebaseAuth
  var $firebaseAuth;
  beforeEach(module(function ($provide) {
    $firebaseAuth = jasmine.createSpy('$firebaseAuth').and.returnValue({});
    $provide.value('$firebaseAuth', $firebaseAuth);
  }));

  //mock firebaseModel
  var firebaseModel;
  beforeEach(module(function ($provide) {
    firebaseModel = {
      ref: {}
    };
    $provide.value('firebaseModel', firebaseModel);
  }));

  // instantiate service
  var firebaseAuth;
  beforeEach(inject(function (_firebaseAuth_) {
    firebaseAuth = _firebaseAuth_;
  }));

  beforeEach(() => {
    spyOn(firebaseModel, 'ref').and.returnValue({});
  });

  it('should call $firebaseAuth', function () {
    expect($firebaseAuth).toHaveBeenCalled();
    expect($firebaseAuth.calls.count()).toBe(1);
  });
  //
  //it('should call firebaseModel', function () {
  //  expect(firebaseModel.ref).toHaveBeenCalled();
  //  expect(firebaseModel.ref.calls.count()).toBe(1);
  //});




});
