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

    //findById :: String id -> Promise $firebaseObject
    let findById = R.compose(fbUtils.syncObject,refString);

    //whenTagFoundByIdFrom :: String id -> Observable $firebaseObject
    let whenTagFoundByIdFrom = R.compose(Rx.Observable.fromPromise,findById);

    //findByName :: String tagName -> Promise $firebaseArray
    let findByName = fbUtils.findByChild(ref, 'name');

    //whenTagQueriedByNamePartial :: String tagName -> Observable $firebaseArray
    let whenTagQueriedByNamePartial = R.compose(Rx.Observable.fromPromise, findByName);

    //findByCardSet :: String cardSetId -> Promise $firebaseArray
    let findByCardSet = fbUtils.findByChild(ref, 'cardSets');

    //whenTagQueriedByCardSetPartial :: String cardSetId -> Observable $firebaseArray
    let whenTagQueriedByCardSetPartial = R.compose(Rx.Observable.fromPromise, findByCardSet);

    //create :: String tagName -> Promise tagRef
    let create = R.compose(fbUtils.push(ref), tagObj);

    //whenTagCreatedPartial :: String tagName -> Observable tagRef
    let whenTagCreatedPartial = R.compose(Rx.Observable.fromPromise, fbUtils.push(ref), tagObj);

    //syncedTag :: String tagKey -> Promise $firebaseObject
    let syncedTag = R.compose(fbUtils.syncObject, fbUtils.ref, refString);

    //whenTagSyncedPartial :: String tagKey -> Observable $firebaseObject
    let whenTagSyncedPartial = R.compose(Rx.Observable.fromPromise, syncedTag);


    return {
      create: create,
      whenTagCreatedPartial: whenTagCreatedPartial,

      findById: findById,
      whenTagFoundByIdFrom: whenTagFoundByIdFrom,

      findByName: findByName,
      whenTagQueriedByCardSetPartial: whenTagQueriedByCardSetPartial,

      findByCardSet: findByCardSet,
      whenTagQueriedByNamePartial: whenTagQueriedByNamePartial,

      syncedTag: syncedTag,
      whenTagSyncedPartial: whenTagSyncedPartial
    }
  }

}());
