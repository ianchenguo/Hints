(function () {
  'use strict';

  angular.module('hintsApp.core.model')
    .factory('cardSets', cardSets);

  cardSets.$inject = ['Rx', 'R', 'I', 'Promise', 'fbUtils', 'coreUtils', 'promiseUtils', 'cardSetTags'];
  function cardSets(Rx, R, I, Promise, fbUtils, coreUtils, promiseUtils, cardSetTags) {

    let ref = fbUtils.ref('cardSets');

    // params -> queryTags -> createNewTags -> createCardSetObj -> pushCardSet -> updateRelatedTags

    // cardSetObj :: Object params -> Object cardSetObj
    let cardSetObj = params => {
      return {
        title: params.title,
        desc: params.desc,
        owner: params.owner,
        tags: {},
        shared: params.shared,
        dateOfCreation: Firebase.ServerValue.TIMESTAMP
      }
    };

    // tagStrings :: Object cardSetParams -> [tagString]
    let whenTagStringsProvidedPartial = R.compose(Rx.Observable.from, R.prop('tags'));

    // findByName :: String tagString -> Promise $firebaseArray
    let findByName = fbUtils.findByChildValue(ref, 'name');

    let create = cardSetParams => {

      let whenTagStringsProvided = whenTagStringsProvidedPartial(cardSetParams);

      let whenTagsQueried =
        whenTagStringsProvided.zip(
          whenTagStringsProvided.concatMap(cardSetTags.whenTagQueriedPartial),
          (tagString, resultArray) => R.createMapEntry(tagString, resultArray)
        );

      let whenTagsCreated = whenTagsQueried
        .concatMap(R.ifElse(
          //if the tag does not exist
          R.compose(R.isNil, R.head, R.flatten, R.values),
          //create new tag in database, return its ref
          R.compose(cardSetTags.whenTagCreatedPartial, R.head, R.keys),
          //or return existed tag object
          R.compose(Rx.Observable.from, R.flatten, R.values)
        ))
        .map(R.ifElse(
          //if the item has $id property
          R.compose(R.has('$id')),
          //get its $id, and create [$id, true]
          R.compose(R.createMapEntry(R.__, true), R.prop('$id')),
          //or get its key, and create [key, true]
          R.compose(R.createMapEntry(R.__, true), fbUtils.key)
        ));

      let whenCardSetCreated = R.compose(Rx.Observable.fromPromise, fbUtils.push(ref), cardSetObj)(cardSetParams);

      let whenCardSetRetrieved = whenCardSetCreated.concatMap(R.compose(Rx.Observable.fromPromise, fbUtils.syncObject));
      //finish card set part
      let whenCardSetUpdated = whenCardSetRetrieved
        .zip(whenTagsCreated.toMap(R.compose(R.head, R.keys), R.compose(R.head, R.values)),
        (cardSetObj, tagMap) => {
          cardSetObj.tags = tagMap;
          return cardSetObj;
        })
        .flatMap(fbUtils.whenObjectUpdatedPartial);

      //finish tags part
      let whenTagsUpdated = whenTagsCreated
        .flatMap(R.keys())
        .flatMap(cardSetTags.whenTagSyncedPartial)
        .flatMap(whenCardSetCreated,
        //need to refactor this part
        (tagObj, cardRef) => {
          if (!tagObj.cardSets) tagObj.cardSets = {};
          tagObj.cardSets[cardRef.key()] = true;
          return tagObj;
        })
        .flatMap(fbUtils.whenObjectUpdatedPartial);

      let whenDone = whenCardSetUpdated.concat(whenTagsUpdated);


      let subscription = whenDone.subscribe(
          value => {
          console.log('sub');
          console.log(value)
        },
          error => console.log(error),
        () => console.log('completed')
      );
    };


    create({
      title: 'dummy title',
      desc: 'dummy desc',
      owner: 'dummy onwer',
      tags: ['123', '993', 'sadf'],
      shared: true,
      dateOfCreation: Firebase.ServerValue.TIMESTAMP
    });
    //create({tags:[]});

    return {
      create: create
    }
  }

}());
