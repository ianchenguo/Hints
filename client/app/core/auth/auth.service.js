(function () {
  'use strict';

  angular.module('hintsApp.core.auth')
    .factory('auth', auth);

  auth.$inject = ['$q', 'firebaseAuth'];

  function auth($q, firebaseAuth) {

    var login = function login(account) {
      return firebaseAuth.$authWithPassword(account)
        .then(value => value)
        .catch(reason => $q.reject(reason));
    };

    var register = function register(account) {
      return firebaseAuth.$createUser(account)
        .then(value => value)
        .catch(reason => $q.reject(reason));
    };

    var requireAuth = function requireAuth() {
      return firebaseAuth.$requireAuth()
        .then(value => value)
        .catch(reason => $q.reject(reason));
    };

    var logout = function logout() {
      return firebaseAuth.$unauth();
    };

    var getAuth = function getAuth() {
      return firebaseAuth.$getAuth();
    };

    return {
      login: login,
      register: register,
      requireAuth: requireAuth,
      logout: logout,
      getAuth: getAuth
    };
  }
}());
