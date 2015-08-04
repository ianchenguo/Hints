/**
 * Created by ianchenguo on 27/07/15.
 */
'use strict';

//code here
describe('Route: login', () => {
  //load modules
  beforeEach(module('hintsApp.account'));
  beforeEach(module('hintsApp.mocks.auth'));
  beforeEach(module('hintsApp.mocks.account'));
  beforeEach(module('hintsApp.mocks.model'));

  //cache templates
  beforeEach(inject(($templateCache) => {
    ///home/ianchenguo/AppDev/Hints/client/app/account/login/login.html
    $templateCache.put('app/account/profile/profile.html', '');
  }));

  //inject services
  var $injector, $rootScope, $state, $location, accountService, Users, auth;
  beforeEach(inject((_$injector_,
                     _$rootScope_,
                     _$state_,
                     _$location_,
                     _accountService_,
                     _Users_,
                     _auth_) => {

    $injector = _$injector_;
    $rootScope = _$rootScope_;
    $state = _$state_;
    $location = _$location_;
    accountService = _accountService_;
    Users = _Users_;
    auth = _auth_;
  }));


  describe('resolve: requireAuth', () => {

    //if move the following block outside, $state.go will break. why?
    //spy on accountService
    var deferred;
    beforeEach(inject(($q) => {
      deferred = $q.defer();
      spyOn(accountService, 'requireAuth').and.returnValue(deferred.promise);
    }));

    //inject resolve
    var viewDefinition, promise;
    beforeEach(() => {
      viewDefinition = $state.get('profile');
      promise = $injector.invoke(viewDefinition.resolve['requireAuth']);
    });

    it('should call accountService before navigation', () => {
      expect(accountService.requireAuth).toHaveBeenCalled();
      expect(accountService.requireAuth.calls.count()).toBe(1);
    });
  });


  describe('resolve: profile', () => {

    //spy on auth and Users
    var authDeferred, userDeferred;
    beforeEach(inject(($q) => {
      authDeferred = $q.defer();
      userDeferred = $q.defer();
      spyOn(auth, 'requireAuth').and.returnValue(authDeferred.promise);
      spyOn(Users, 'getProfile').and.returnValue({$loaded: ()=> null});
    }));

    //inject resolve
    var viewDefinition, promise;
    beforeEach(() => {
      viewDefinition = $state.get('profile');
      promise = $injector.invoke(viewDefinition.resolve['profile']);
    });

    it('should call auth before navigation', () => {
      expect(auth.requireAuth).toHaveBeenCalled();
      expect(auth.requireAuth.calls.count()).toBe(1);
    });

    it('should call Users when the user is authorised', () => {
      authDeferred.resolve('authorised');
      $rootScope.$digest();

      expect(Users.getProfile).toHaveBeenCalled();
      expect(Users.getProfile.calls.count()).toBe(1);
    });
  });


  describe('state transition', () => {

    //spy on accountService
    var authDeferred, userDeferred;
    beforeEach(inject(($q) => {
      authDeferred = $q.defer();
      userDeferred = $q.defer();
      spyOn(auth, 'requireAuth').and.returnValue(authDeferred.promise);
    }));

    it('should change current state to profile', () => {
      authDeferred.resolve('authorised');
      $state.go('profile');
      $rootScope.$digest();
      expect($location.url()).toBe('/profile');
    });
  });
});
