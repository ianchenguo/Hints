(function () {
  'use strict';

  angular.module('hintsApp.core.model')
    .factory('Users', Users);

  Users.$inject = ['$firebaseArray', '$firebaseObject', 'FirebaseUrl'];
  function Users($firebaseArray, $firebaseObject, FirebaseUrl) {

    var usersRef = new Firebase(FirebaseUrl + 'users');
    var users = $firebaseArray(usersRef);

    var getProfile = function getProfile(uid) {
      return $firebaseObject(usersRef.child(uid));

    };

    var getDisplayName = function getDisplayName(uid) {
      return users.$getRecord(uid).displayName;
    };

    return {
      getProfile: getProfile,
      getDisplayName: getDisplayName,
      all: users
    }
  }

}());
