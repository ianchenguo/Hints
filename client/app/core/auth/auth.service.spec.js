'use strict';

describe('Service: auth', function () {

  // load the service's module
  beforeEach(module('hintsApp.core.auth'));

  //mock firebaseAuth
  var firebaseAuth;
  beforeEach(module(function ($provide) {
    firebaseAuth = {
      $authWithPassword: () => null,
      $createUser: () => null,
      $requireAuth: () => null
    };
    $provide.value('firebaseAuth', firebaseAuth);
  }));

  // instantiate service
  var auth;
  var $q;
  var $rootScope;
  beforeEach(inject(function (_$rootScope_, _$q_, _auth_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    auth = _auth_;
  }));

  var deferred;
  //spy on firebaseAuth
  beforeEach(() => {
    deferred = $q.defer();
    spyOn(firebaseAuth, '$authWithPassword').and.returnValue(deferred.promise);
    spyOn(firebaseAuth, '$createUser').and.returnValue(deferred.promise);
    spyOn(firebaseAuth, '$requireAuth').and.returnValue(deferred.promise);
  });


  describe('login()', () => {

    var promise;
    beforeEach(() => {
      promise = auth.login({});
    });

    it('should be defined', () => {
      expect(auth.login).toBeDefined();
    });

    it('should call firebaseAuth', () => {
      expect(firebaseAuth.$authWithPassword).toHaveBeenCalled();
      expect(firebaseAuth.$authWithPassword.calls.count()).toBe(1);
    });

    it('should pass value on success', () => {
      var success = 'resolved';
      deferred.resolve(success);

      var handler = jasmine.createSpy('success');

      promise
        .then(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(success);
    });

    it('should reject with reason on error', () => {
      var error = 'rejected';
      deferred.reject(error);

      var handler = jasmine.createSpy('error');

      promise
        .catch(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(error);
    });
  });


  describe('register()', () => {

    var promise, login;
    beforeEach(() => {
      promise = auth.register({});
    });

    it('should be defined', () => {
      expect(auth.register).toBeDefined();
    });

    it('should call firebaseAuth', () => {
      expect(firebaseAuth.$createUser).toHaveBeenCalled();
      expect(firebaseAuth.$createUser.calls.count()).toBe(1);
    });

    it('should pass value on success', () => {
      var success = 'resolved';
      deferred.resolve(success);


      var handler = jasmine.createSpy('success');

      promise
        .then(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(success);
    });

    it('should reject with response on error', () => {
      var error = 'rejected';
      deferred.reject(error);

      var handler = jasmine.createSpy('error');

      promise
        .catch(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(error);
    });
  });


  describe('requireAuth()', () => {

    var promise;
    beforeEach(() => {
      promise = auth.requireAuth({});
    });

    it('should be defined', () => {
      expect(auth.requireAuth).toBeDefined();
    });

    it('should call firebaseAuth', () => {
      expect(firebaseAuth.$requireAuth).toHaveBeenCalled();
      expect(firebaseAuth.$requireAuth.calls.count()).toBe(1);
    });

    it('should pass the response on success', () => {
      var success = 'resolved';
      deferred.resolve(success);

      var handler = jasmine.createSpy('success');

      promise
        .then(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(success);
    });

    it('should reject the response on error', () => {
      var error = 'rejected';
      deferred.reject(error);

      var handler = jasmine.createSpy('error');

      promise
        .catch(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(error);
    });
  });

});
