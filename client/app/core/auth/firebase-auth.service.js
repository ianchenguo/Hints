(function () {
  'use strict';

  angular.module('hintsApp.core.auth')
    .factory('firebaseAuth', firebaseAuth);

  firebaseAuth.$inject = ['$firebaseAuth', 'firebaseModel'];

  function firebaseAuth($firebaseAuth, firebaseModel) {

    return $firebaseAuth(firebaseModel.ref);

  }
}());
