'use strict';
(function () {
  angular.module('hintsApp.account')
    .config(function ($stateProvider) {
      $stateProvider
        .state('sign-up', {
          url: '/sign-up',
          templateUrl: 'app/account/sign-up/sign-up.html',
          controller: 'SignUpCtrl as vm',
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

