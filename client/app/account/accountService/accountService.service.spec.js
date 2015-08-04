'use strict';

describe('Service: accountService', function () {

  // load the service's module
  beforeEach(module('hintsApp.account'));
  beforeEach(module('hintsApp.mocks.auth'));
  beforeEach(module('hintsApp.mocks.state'));

  //inject services
  var $rootScope, $state, auth;
  beforeEach(inject((_$rootScope_, _$state_, _auth_) => {
    $rootScope = _$rootScope_;
    $state = _$state_;
    auth = _auth_;
  }));

  //spy on auth
  var authDeferred, stateDeferred;
  beforeEach(inject(($q) => {
    authDeferred = $q.defer();
    stateDeferred = $q.defer();
    spyOn(auth,'requireAuth').and.returnValue(authDeferred.promise);
    spyOn($state,'go').and.returnValue(stateDeferred.promise);
  }));

  // instantiate service
  var accountService;
  beforeEach(inject(function (_accountService_) {
    accountService = _accountService_;
  }));

  describe('requireAuth()', () => {
    var promise;
    beforeEach(() => {
      promise = accountService.requireAuth();
    });

    it('should be defined', () => {
      expect(accountService.requireAuth).toBeDefined();
    });

    it('should call auth service', () => {
      expect(auth.requireAuth).toHaveBeenCalled();
      expect(auth.requireAuth.calls.count()).toBe(1);
    });

    it('should transfer to login state if the user is unauthorised', () => {
      var authReason = 'unauthorised';
      authDeferred.reject(authReason);
      var stateSuccess = 'login';
      stateDeferred.resolve(stateSuccess);

      var handler = jasmine.createSpy('error');
      promise
        .then(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(stateSuccess);
    });
  });

  describe('requireNoAuth()', () => {
    var promise;
    beforeEach(() => {
      promise = accountService.requireNoAuth();
    });

    it('should be defined', () => {
      expect(accountService.requireNoAuth).toBeDefined();
    });

    it('should call auth service', () => {
      expect(auth.requireAuth).toHaveBeenCalled();
      expect(auth.requireAuth.calls.count()).toBe(1);
    });

    it('should forward to home if the user is authorised', () => {
      var authSuccess = 'authorised';
      authDeferred.resolve(authSuccess);
      var stateSuccess = 'home';
      stateDeferred.resolve(stateSuccess);

      var handler = jasmine.createSpy('success');
      promise
        .then(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(stateSuccess);
    });

    it('should resolve in provided state if the user is unauthorised', () => {
      var authReason = 'unauthorised';
      authDeferred.reject(authReason);

      var handler = jasmine.createSpy('error');
      promise
        .then(handler);
      $rootScope.$digest();

      expect(handler).toHaveBeenCalledWith(authReason);
    });
  });


});
