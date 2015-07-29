/**
 * Created by ianchenguo on 27/07/15.
 */
'use strict';

//code here
describe('Route: sign-up', () => {
  //load modules
  beforeEach(module('hintsApp.account'));
  beforeEach(module('hintsApp.mocks.account'));

  //cache templates
  beforeEach(inject(($templateCache) => {
    $templateCache.put('app/account/sign-up/sign-up.html', '');
  }));

  //inject services
  var $injector, $rootScope, $state, $location, accountService;
  beforeEach(inject((_$injector_, _$rootScope_, _$state_, _$location_, _accountService_) => {

    $injector = _$injector_;
    $rootScope = _$rootScope_;
    $state = _$state_;
    $location = _$location_;
    accountService = _accountService_;
  }));


  describe('resolve: requireNoAuth', () => {
    //spy on accountService
    var deferred;
    beforeEach(inject(($q) => {
      deferred = $q.defer();
      spyOn(accountService, 'requireNoAuth').and.returnValue(deferred.promise);
    }));

    //inject resolve
    var viewDefinition, promise;
    beforeEach(() => {
      viewDefinition = $state.get('sign-up');
      promise = $injector.invoke(viewDefinition.resolve['requireNoAuth']);
    });

    it('should call accountService before navigation', () => {
      expect(accountService.requireNoAuth).toHaveBeenCalled();
      expect(accountService.requireNoAuth.calls.count()).toBe(1);
    });
  });


  describe('state transition', () => {

    it('should change current state to sign-up', () => {
      $state.go('sign-up');
      $rootScope.$digest();
      expect($location.url()).toBe('/sign-up');
    });
  });
});
