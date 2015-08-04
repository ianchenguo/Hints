/**
 * Created by ianchenguo on 27/07/15.
 */
'use strict';

//code here
describe('Route: home', () => {
  //load modules
  beforeEach(module('hintsApp'));
  beforeEach(module('hintsApp.mocks.auth'));
  beforeEach(module('hintsApp.mocks.account'));
  beforeEach(module('hintsApp.mocks.model'));

  //cache templates
  beforeEach(inject(($templateCache) => {
    $templateCache.put('app/home/home.html', '');
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
      viewDefinition = $state.get('home');
      promise = $injector.invoke(viewDefinition.resolve['requireAuth']);
    });

    it('should call accountService before navigation', () => {
      expect(accountService.requireAuth).toHaveBeenCalled();
      expect(accountService.requireAuth.calls.count()).toBe(1);
    });
  });


});
