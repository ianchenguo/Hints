///**
// * Created by ianchenguo on 27/07/15.
// */
//'use strict';
//
////code here
//describe('Route: home', () => {
//  //load modules
//  beforeEach(module('hintsApp'));
//  beforeEach(module('hintsApp.mocks.auth'));
//
//  //cache templates
//  beforeEach(inject(($templateCache) => {
//    $templateCache.put('app/home/home.html', '');
//  }));
//
//  //inject services
//  var $injector, $rootScope, $state, auth;
//  beforeEach(inject((_$injector_, _$rootScope_, _$state_, _auth_) => {
//
//    $injector = _$injector_;
//    $rootScope = _$rootScope_;
//    $state = _$state_;
//    auth = _auth_;
//  }));
//
//  //spy on auth
//  var deferred;
//  beforeEach(inject(($q) => {
//    deferred = $q.defer();
//    spyOn(auth,'requireAuth').and.returnValue(deferred.promise);
//  }));
//
//  //it('state templateUrl should be home.html',
//  //  inject(function($rootScope, $state) {
//  //    $rootScope.$apply();
//  //    expect($state.current.templateUrl).toEqual('home.html');
//  //  }));
//  var viewDefinition;
//  beforeEach(() => {
//    viewDefinition = $state.get('home');
//    $injector.invoke(viewDefinition.resolve['requireAuth']);
//  });
//
//  it('should call auth before navigation', () => {
//    expect(auth.requireAuth).toHaveBeenCalled();
//    expect(auth.requireAuth.calls.count()).toBe(1);
//  });
//
//  it('should navigate to home if the user is authorised', () => {
//    var authSuccess = 'authorised';
//    deferred.resolve(authSuccess);
//
//
//  });
//
//});
