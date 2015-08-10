(function () {
  'use strict';

  angular.module('hintsApp.core.model')
    .factory('cardSetTags', cardSetTags);

  cardSetTags.$inject = ['Rx', 'R', 'I', 'Promise', 'promiseUtils', 'coreUtils', 'immutableUtils', 'fbUtils'];
  function cardSetTags(Rx, R, I, Promise, promiseUtils, coreUtils, immutableUtils, fbUtils) {

    let refString = childRefString => childRefString ? 'cardSetTags/' + childRefString : 'cardSetTags';

    let ref = fbUtils.ref(refString());

    //createTagObj :: tagString -> tagObj
    let tagObj = tagString => {
      return {
        name: tagString,
        dateOfCreation: Firebase.ServerValue.TIMESTAMP,
        cardSets: {}
      }
    };

    //findByName :: String tagName -> Promise $firebaseArray
    let findByName = fbUtils.findByChildValue(ref, 'name');

    //create :: String tagName -> Promise tagRef
    let create = R.compose(fbUtils.push(ref), tagObj);

    //syncedTag :: String tagKey -> Promise $firebaseObject
    let syncedTag = R.compose(fbUtils.syncObject, fbUtils.ref, refString);

    //whenTagSyncedPartial
    let whenTagSyncedPartial = R.compose(Rx.Observable.fromPromise, syncedTag);

    //whenTagQueriedPartial :: String tagName -> Observable $firebaseArray
    let whenTagQueriedPartial = R.compose(Rx.Observable.fromPromise, findByName);

    //whenTagQueriedPartial :: String tagName -> Observable tagRef
    let whenTagCreatedPartial = R.compose(Rx.Observable.fromPromise, fbUtils.push(ref), tagObj);


    return {
      create: create,
      findByName: findByName,
      syncedTag: syncedTag,
      whenTagQueriedPartial: whenTagQueriedPartial,
      whenTagCreatedPartial: whenTagCreatedPartial,
      whenTagSyncedPartial: whenTagSyncedPartial
    }
  }

}());
