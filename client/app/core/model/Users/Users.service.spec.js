'use strict';

describe('Service: Users', function () {

  // load the service's module
  beforeEach(module('hintsApp.core.firebaseModel'));
  beforeEach(module('hintsApp.mocks.firebase'));

  // instantiate service
  var $firebaseObject, $firebaseArray, Users;
  beforeEach(inject(function (_$firebaseObject_, _$firebaseArray_, _Users_) {
    Users = _Users_;
    $firebaseObject = _$firebaseObject_;
    $firebaseArray = _$firebaseArray_;
  }));


  describe('Interface', () => {

    it('should expose getProfile()', function () {
      expect(angular.isFunction(Users.getProfile)).toBe(true);
    });

    it('should expose getDisplayName()', function () {
      expect(angular.isFunction(Users.getDisplayName)).toBe(true);
    });

    it('should expose users', function () {
      expect(Users.all).toBeDefined();
    });
  });

  describe('getProfile()', () => {

    it('should call $firebaseObject', () => {

      Users.getProfile('userLink');
      expect($firebaseObject).toHaveBeenCalled();
      expect($firebaseObject.calls.count()).toBe(1);
    });

  });

  describe('getDisplayName()', () => {

    it('should call $firebaseObject', () => {

      Users.getDisplayName('userLink');
      expect($firebaseArray).toHaveBeenCalled();
    });

  });


});
