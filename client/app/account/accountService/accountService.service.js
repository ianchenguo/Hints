(function () {
  'use strict';

  angular.module('hintsApp.account')
    .factory('accountService', accountService);

  accountService.$inject = ['$q', '$state', 'auth'];
  function accountService($q, $state, auth) {

    var requireNoAuth = function requireNoAuth() {
      return auth.requireAuth()
        .then(() => $state.go('home'))
        .catch(reason => reason);
    };

    var requireAuth = function requireNoAuth() {
      return auth.requireAuth()
        .catch(() => $state.go('login'));
    };

    // Public API here
    return {
      requireNoAuth: requireNoAuth,
      requireAuth: requireAuth
    }
  }
}());
