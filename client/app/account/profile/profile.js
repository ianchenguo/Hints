
(function () {
  "use strict";

  angular.module('hintsApp.account')
    .config(function ($stateProvider) {
      $stateProvider
        .state('profile', {
          url: '/profile',
          templateUrl: 'app/account/profile/profile.html',
          controller: 'ProfileCtrl as vm',
          resolve: {
            requireAuth: requireAuth,
            profile: profile
          }
        });
    });

  requireAuth.$inject = ['accountService'];
  function requireAuth(accountService) {
    return accountService.requireAuth();
  }

  profile.$inject = ['Users', 'auth'];
  function profile(Users, auth) {
    return auth.requireAuth()
    .then(authInfo => Users.getProfile(authInfo.uid).$loaded());
  }

}());



