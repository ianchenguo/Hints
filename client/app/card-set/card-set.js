(function () {
  "use strict";

  angular.module('hintsApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('base.cardSet', {
          url: '^/card-set',
          abstract:true,
          templateUrl: 'app/card-set/card-set.html',
          controller: 'CardSetCtrl as vm',
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
