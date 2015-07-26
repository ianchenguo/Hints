//(function () {
//  'use strict';

  angular.module('hintsApp.core.firebaseModel')
    .factory('firebaseModel', firebaseModel);

  firebaseModel.$inject = ['FirebaseUrl'];

  function firebaseModel(FirebaseUrl) {

    var ref = new Firebase(FirebaseUrl);

    return {
      ref: ref
    };
  }


//}());
