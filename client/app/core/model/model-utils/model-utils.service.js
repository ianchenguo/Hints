(function () {
  'use strict';

  angular.module('hintsApp.core.firebaseModel')
    .factory('modelUtils', modelUtils);


  modelUtils.$inject = ['$q', '$firebaseArray', '$firebaseObject', 'FirebaseUrl'];
  function modelUtils($q, $firebaseArray, $firebaseObject, FirebaseUrl) {

    let ref = function ref(root) {
      return new Firebase(FirebaseUrl + root);
    };

    let refChild = R.curry(
      (ref, child) => ref.child(child)
    );

    let setRef = R.curry(
      (ref, obj) => ref.set(obj)
    );

    let updateRef = R.curry(
      (ref, array) => ref.update(array)
    );


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

    let _exists = ref => ref.exists();


    let exists = ref => {
      let deferred = $q.defer();

      let check = R.ifElse(
        _exists,
        () => deferred.resolve(true),
        () => deferred.reject(false));

      ref.once('value', snapshot => {
        console.log('snapshot');
        console.log(snapshot);
        check(snapshot);
      });

      return deferred.promise;
    };

    return {
      ref: ref,
      refChild: refChild,
      setRef: setRef,
      updateRef: updateRef,
      branch: branch,
      branchNode: branchNode,
      node: node,
      add: add,
      exists: exists
    }
  }

}());
