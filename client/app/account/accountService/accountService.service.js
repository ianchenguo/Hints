(function () {
  'use strict';

  angular.module('hintsApp.account')
    .factory('accountService', accountService);

  accountService.$inject = ['$state', 'auth'];
  function accountService($state, auth) {

    var requireNoAuth = function requireNoAuth() {
      return auth.requireAuth()
        .then(() => $state.go('base.home'))
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
