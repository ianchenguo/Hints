
(function () {
  "use strict";

  angular.module('hintsApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('base.home', {
          url: '^/home',
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl as vm',
          resolve: {
            requireAuth: requireAuth
          }
        });
    });

  requireAuth.$inject = ['accountService'];
  function requireAuth(accountService) {
    return accountService.requireAuth();
  }

}());



