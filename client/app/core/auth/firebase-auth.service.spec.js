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

  //mock firebaseRoot
  var firebaseRoot;
  beforeEach(module(function ($provide) {
    firebaseRoot = {
      ref: {}
    };
    $provide.value('firebaseRoot', firebaseRoot);
  }));

  // instantiate service
  var firebaseAuth;
  beforeEach(inject(function (_firebaseAuth_) {
    firebaseAuth = _firebaseAuth_;
  }));

  beforeEach(() => {
    spyOn(firebaseRoot, 'ref').and.returnValue({});
  });

  it('should call $firebaseAuth', function () {
    expect($firebaseAuth).toHaveBeenCalled();
    expect($firebaseAuth.calls.count()).toBe(1);
  });
  //
  //it('should call firebaseRoot', function () {
  //  expect(firebaseRoot.ref).toHaveBeenCalled();
  //  expect(firebaseRoot.ref.calls.count()).toBe(1);
  //});




});
