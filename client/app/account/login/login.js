(function () {
  "use strict";

  angular.module('hintsApp.account')
    .config(function ($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/account/login/login.html',
          controller: 'LoginCtrl as vm',
          resolve: {
            requireNoAuth: requireNoAuth
          }
        });
    });

  requireNoAuth.$inject = ['accountService'];
  function requireNoAuth(accountService) {
    return accountService.requireNoAuth();
  }

}());



