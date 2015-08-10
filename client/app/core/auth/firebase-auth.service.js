(function () {
  'use strict';

  angular.module('hintsApp.core.auth')
    .factory('firebaseAuth', firebaseAuth);

  firebaseAuth.$inject = ['$firebaseAuth', 'firebaseRoot'];

  function firebaseAuth($firebaseAuth, firebaseRoot) {

    return $firebaseAuth(firebaseRoot.ref);

  }
}());
