(function () {
  'use strict';

  angular.module('hintsApp.core.firebaseModel')
    .factory('modelUtils', modelUtils);

  modelUtils.$inject = ['$firebaseArray', '$firebaseObject', 'FirebaseUrl'];
  function modelUtils($firebaseArray, $firebaseObject, FirebaseUrl) {

    let ref = function ref(root) {
      return new Firebase(FirebaseUrl + root);
    };

    let branch = function branch(ref) {
      return $firebaseArray(ref);
    };

    let branchNode = R.curry(
      (branch, key) => branch.$getRecord(key)
    );

    let node = R.curry(
      (ref, node) => $firebaseObject(ref.child(node))
    );

    let add = R.curry(
      (branch, obj) => {
        return branch.$add(obj);
      }
    );

    return {
      ref: ref,
      branch: branch,
      branchNode: branchNode,
      node: node,
      add:add
    }
  }

}());
