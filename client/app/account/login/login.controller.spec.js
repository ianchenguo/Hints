'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('hintsApp.account'));
  beforeEach(module('hintsApp.mocks'));

  //inject mock services
  var auth, $state;
  beforeEach(inject((_$state_,_auth_) => {
    auth = _auth_;
    $state = _$state_;
  }));

  var LoginCtrl, scope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  //create spies
  var authDeferred, stateDeferred;
  beforeEach(inject(($q) => {
    authDeferred = $q.defer();
    stateDeferred = $q.defer();
    spyOn(auth, 'login').and.returnValue(authDeferred.promise);
    spyOn($state, 'go').and.returnValue(stateDeferred.promise);
  }));

  describe('State', () => {
    it('should expose account object to the view', () => {
      expect(angular.isObject(LoginCtrl.account)).toBe(true);
      expect(angular.isString(LoginCtrl.account.username)).toBe(true);
      expect(angular.isString(LoginCtrl.account.password)).toBe(true);
    });


    it('should expose error object to the view', () => {
      expect(angular.isObject(LoginCtrl.error)).toBe(true);
    });


    it('should expose login method to the view', () => {
      expect(angular.isFunction(LoginCtrl.login)).toBe(true);
    });
  });

  describe('login()', () => {

    var promise;
    beforeEach(() => {
      promise = LoginCtrl.login({});
    });


    it('should call auth service', () => {
      expect(auth.login).toHaveBeenCalled();
      expect(auth.login.calls.count()).toBe(1);
    });


    it('should navigate to home page on success', () => {

      var authValue = 'success';
      authDeferred.resolve(authValue);
      var stateValue = 'home';
      stateDeferred.resolve(stateValue);
      var handler = jasmine.createSpy('success');

      promise
        .then(handler);
      scope.$digest();

      expect(handler).toHaveBeenCalledWith(stateValue);
    });


    it('should update error object on auth failure', () => {

      var authReason = 'error';
      authDeferred.reject(authReason);

      var handler = jasmine.createSpy('error');

      promise
        .catch(handler);
      scope.$digest();

      expect(handler).toHaveBeenCalledWith(authReason);
      expect(LoginCtrl.error).toEqual(authReason);
    });
  });
});
