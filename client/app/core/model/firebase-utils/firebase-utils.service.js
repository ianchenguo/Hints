(function () {
  'use strict';

  angular.module('hintsApp.core.model')
    .factory('fbUtils', fbUtils);


  fbUtils.$inject = ['Promise', '$firebaseArray', '$firebaseObject', 'FirebaseUrl'];
  function fbUtils(Promise, $firebaseArray, $firebaseObject, FirebaseUrl) {

    //ref :: String root -> Firebase ref
    let ref = root => new Firebase(FirebaseUrl + root);

    //key :: Firebase ref -> String key
    let key = ref => ref.key();

    //findByChildValue :: Firebase parentRef -> String child -> String value -> Promise $firebaseArrayy
    let findByChildValue = R.curry((parentRef, child, value) =>
      $firebaseArray(parentRef.orderByChild(child).equalTo(value)).$loaded());

    //push :: Firebase parentRef -> childObj -> Promise childRef
    let push = R.curry((parentRef, childObj) => $firebaseArray(parentRef).$add(childObj));

    //syncObject :: Firebase ref -> Promise $firebaseObject
    let syncObject = (ref) => $firebaseObject(ref).$loaded();

    //updateObject :: $firebaseObject -> Promise $firebaseObject
    let updateObject = obj => obj.$save().then(() => obj).catch(error => Promise.reject(error));

    //whenObjectUpdatedPartial :: $firebaseObject -> Observable $firebaseObject
    let whenObjectUpdatedPartial = R.compose(Rx.Observable.fromPromise, updateObject);

    return {
      ref: ref,
      key: key,
      findByChildValue: findByChildValue,
      push: push,
      syncObject: syncObject,
      updateObject: updateObject,
      whenObjectUpdatedPartial: whenObjectUpdatedPartial
    }
  }

}());
