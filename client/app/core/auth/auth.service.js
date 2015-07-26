(function () {
  'use strict';

  angular.module('hintsApp.core.auth')
    .factory('auth', auth);

  auth.$inject = ['$q', 'firebaseAuth'];

  function auth($q, firebaseAuth) {

    var login = function login(account) {
      return firebaseAuth.$authWithPassword(account)
        .then(success => success)
        .catch(error => $q.reject(error));
    };

    var register = function register(account) {
      return firebaseAuth.$createUser(account)
        .then(user => login(account))
        .catch(error => $q.reject(error));
    };

    return {
      login: login,
      register: register
    };
  }
}());
