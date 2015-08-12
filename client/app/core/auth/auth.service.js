(function () {
  'use strict';

  angular.module('hintsApp.core.auth')
    .factory('auth', auth);

  auth.$inject = ['firebaseAuth'];

  function auth(firebaseAuth) {

    var login = function login(account) {
      return firebaseAuth.$authWithPassword(account);
    };

    var register = function register(account) {
      return firebaseAuth.$createUser(account);
    };

    var requireAuth = function requireAuth() {
      return firebaseAuth.$requireAuth();
    };

    var logout = function logout() {
      return firebaseAuth.$unauth();
    };

    var auth = function getAuth() {
      return firebaseAuth.$getAuth();
    };

    return {
      login: login,
      register: register,
      requireAuth: requireAuth,
      logout: logout,
      auth: auth
    };
  }
}());
