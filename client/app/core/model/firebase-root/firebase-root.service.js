(function () {
  'use strict';

  angular.module('hintsApp.core.model')
    .factory('firebaseRoot', firebaseRoot);

  firebaseRoot.$inject = ['FirebaseUrl'];

  function firebaseRoot(FirebaseUrl) {

    var ref = new Firebase(FirebaseUrl);

    return {
      ref: ref
    };
  }


}());
