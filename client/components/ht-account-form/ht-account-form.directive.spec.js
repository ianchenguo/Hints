//'use strict';
//
//describe('Directive: htAccountForm', function () {
//
//  // load the directive's module and view
//  beforeEach(module('hintsApp'));
//  beforeEach(module('components/ht-account-form/ht-account-form.html'));
//
//  //mock auth service
//  var auth;
//  beforeEach(module(($provide) => {
//    auth = {
//      register: () => null
//    };
//    $provide.value('auth', auth);
//  }));
//
//  //mock $state service
//  var $state;
//  beforeEach(module(($provide) => {
//    $state = {
//      go: () => null
//    };
//
//    $provide.value('$state', $state);
//  }));
//
//  var element, scope;
//  beforeEach(inject(function ($rootScope) {
//    scope = $rootScope.$new();
//  }));
//
//  //link scope and element
//  beforeEach(inject(function ($compile) {
//    element = angular.element('<ht-account-form></ht-account-form>');
//    element = $compile(element)(scope);
//    scope.$apply();
//  }));
//
//  //test directive linker
//  describe('Directive linker', function () {
//    //it('should make hidden element visible', inject(function ($compile) {
//    //  expect(element.text()).toBe('this is the icgSignUpForm directive');
//    //}));
//  });
//
//
//  //test directive controller
//  describe('Directive controller', function () {
//
//    var authDeferred;
//    var stateDeferred;
//    var auth;
//    beforeEach(inject(($q, _auth_) => {
//      authDeferred = $q.defer();
//      stateDeferred = $q.defer();
//      auth = _auth_;
//    }));
//
//    var ctrl;
//    beforeEach(function () {
//      ctrl = element.controller('htAccountForm');
//      spyOn(auth, 'register').and.returnValue(authDeferred.promise);
//      spyOn($state, 'go').and.returnValue(stateDeferred.promise);
//    });
//
//    describe('State', function () {
//
//      it('should expose username to the view', function () {
//        expect(angular.isObject(ctrl.account)).toBe(true);
//        expect(ctrl.account.username).toBeDefined();
//        expect(ctrl.account.password).toBeDefined();
//
//        expect(angular.isObject(ctrl.error)).toBe(true);
//        expect(ctrl.error.reason).toBeDefined();
//      });
//    });
//
//    describe('createAccount', () => {
//      it('should call auth service', () => {
//        ctrl.createAccount();
//        expect(auth.register).toHaveBeenCalled();
//        expect(auth.register.calls.count()).toBe(1);
//      });
//
//      it('should navigate to home page on success', (done) => {
//        var authValue = 'account created';
//        authDeferred.resolve(authValue);
//
//        var stateValue = 'home';
//        stateDeferred.resolve(stateValue);
//
//        var assertion = value => {
//          expect($state.go).toHaveBeenCalled();
//          expect($state.go.calls.count()).toBe(1);
//          expect(value).toEqual(stateValue);
//        };
//
//        ctrl.createAccount({})
//          .then(assertion)
//          .finally(done);
//
//        scope.$digest();
//      });
//
//      it('should update error state on auth failure', (done) => {
//        var authReason = 'account exists';
//        authDeferred.reject(authReason);
//
//        var assertion = reason => {
//          expect(reason).toEqual(authReason);
//          expect(ctrl.error.reason).toEqual(error);
//        };
//
//        ctrl.createAccount({})
//          .catch(assertion)
//          .finally(done);
//
//        scope.$digest();
//
//      });
//    });
//  });
//
//});
