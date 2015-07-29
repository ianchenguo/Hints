'use strict';

describe('Controller: SignUpCtrl', function () {

  // load the controller's module
  beforeEach(module('hintsApp.account'));
  beforeEach(module('hintsApp.mocks'));

  //inject mock services
  var auth, $state;
  beforeEach(inject((_$state_,_auth_) => {
    auth = _auth_;
    $state = _$state_;
  }));

  var SignUpCtrl, scope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignUpCtrl = $controller('SignUpCtrl', {
      $scope: scope
    });
  }));

  //create spies
  var authDeferred, stateDeferred;
  beforeEach(inject(($q) => {
    authDeferred = $q.defer();
    stateDeferred = $q.defer();
    spyOn(auth, 'register').and.returnValue(authDeferred.promise);
    spyOn(auth, 'login').and.returnValue(authDeferred.promise);
    spyOn($state, 'go').and.returnValue(stateDeferred.promise);
  }));


  describe('State', () => {
    it('should expose account object to the view', () => {
      expect(angular.isObject(SignUpCtrl.account)).toBe(true);
      expect(angular.isString(SignUpCtrl.account.username)).toBe(true);
      expect(angular.isString(SignUpCtrl.account.password)).toBe(true);
    });


    it('should expose error object to the view', () => {
      expect(angular.isObject(SignUpCtrl.error)).toBe(true);
    });


    it('should expose createAccount method to the view', () => {
      expect(angular.isFunction(SignUpCtrl.createAccount)).toBe(true);
    });
  });


  describe('createAccount()', () => {

    var promise;
    beforeEach(() => {
      promise = SignUpCtrl.createAccount({});
    });


    it('should call auth service', () => {
      expect(auth.register).toHaveBeenCalled();
      expect(auth.register.calls.count()).toBe(1);
    });


    it('should navigate to home page on success', () => {

      var authSuccess = 'auth success';
      authDeferred.resolve(authDeferred);

      var stateValue = 'home';
      stateDeferred.resolve(stateValue);

      var handler = jasmine.createSpy('success');

      promise
        .then(handler);
      scope.$digest();

      expect(handler).toHaveBeenCalledWith(stateValue);
      expect(auth.login).toHaveBeenCalled();
      expect(auth.login.calls.count()).toBe(1);
    });

    it('should update error object on auth failure', () => {

      var authReason = 'auth error';
      authDeferred.reject(authReason);

      var handler = jasmine.createSpy('error');

      promise
        .catch(handler);
      scope.$digest();

      expect(handler).toHaveBeenCalledWith(authReason);
      expect(SignUpCtrl.error).toEqual(authReason);
    });
  });
});
