(function () {
  "use strict";

  angular.module('hintsApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('base.cardSet.list', {
          url: '/list',
          templateUrl: 'app/card-set/card-set-list/card-set-list.html',
          controller: 'CardSetListCtrl as vm',
          resolve: {
            requireAuth: requireAuth,
            myCardSets: myCardSets
          }
        });
    });

  requireAuth.$inject = ['accountService'];
  function requireAuth(accountService) {
    return accountService.requireAuth();
  }

  requireAuth.$inject = ['auth', 'cardSets','coreUtils'];
  function myCardSets(auth, cardSets,coreUtils) {
    return R.ifElse(
      R.isNil,
      () => null,
      cardSets.findByOwner
    )(auth.auth().uid);
  }

}());



