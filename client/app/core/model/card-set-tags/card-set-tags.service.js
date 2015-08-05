(function () {
  'use strict';

  angular.module('hintsApp.core.firebaseModel')
    .factory('cardSetTags', cardSetTags);

  cardSetTags.$inject = ['$q', 'R', 'I', 'immutableUtils', 'modelUtils', 'auth'];
  function cardSetTags($q, R, I, immutableUtils, modelUtils, auth) {

    let log = R.curry((tag, value) => {
      console.log(tag + ': ' + value);
      return value;
    });

    let cardSetTagRef = modelUtils.ref('cardSetTags');
    console.log(cardSetTagRef.child('aa'));

    //let cardSetTagBranch = modelUtils.branch(cardSetTagRef);

    let cardSetTagNode = modelUtils.branchNode(cardSetTagRef);

    //let addCardSetTagNode = modelUtils.add(cardSetTagBranch);

    //let cardSetTagQuery = moduelUtils.branch();


    //refactor with Ramda
    //tag :: tagString -> Map
    let tagMap = tagString => {
      let temp = {};
      temp[tagString] = {
        dateOfCreation: Firebase.ServerValue.TIMESTAMP,
        cardSets: []
      };

      console.log(temp);
      return I.Map(temp);
    };

    //tagList :: Array -> List
    let tagList = R.compose(
      I.List,
      R.map(tagMap)
    );

    let child = key => cardSetTagRef.child(key);

    //childExists :: Ref -> Promise
    let childExists = R.compose(
      modelUtils.exists,
      log('child'),
      child
    );

    //key :: Map -> keyString
    let key = map => immutableUtils.keys(map).next().value;


    //tagExists :: String -> Promise
    let tagExists = R.compose(
      childExists,
      log('key'),
      key
    );

    let handlePromises = promises => {
      promises.then(
          value => console.log(value)
      ).catch(
          error => {
          console.log(error);
          return $q.reject(error);
        }
      )
    };

    //tagsExist :: (tagObj) -> (Promise)
    let tagsExist = R.compose(
      handlePromises,
      $q.all,
      log('promiseArray'),
      immutableUtils.toArray,
      log('promiseList'),
      R.map(tagExists),
      log('tagList'),
      tagList,
      log('input')
    );


    //let addCardSetTagNodes = function addCardSetTagNodes(tagArray) {
    //

    //
    //  //Array -> OrderedSet
    //  let createTagSet = R.compose(
    //    I.OrderedSet,
    //    R.map(tag => createCardSetTag({
    //      name: tag,
    //      owner: uid
    //    }))
    //  );
    //
    //
    //  //Map -> Promise
    //  let mapper = R.compose(addCardSetTagNode, immutableUtils.toObject);
    //
    //  //OrderedSet -> Iterable
    //  //let addTags = R.map(
    //  //  R.compose(addCardSetTagNode, immutableUtils.toObject)
    //  //);
    //
    //  //refactor this function with ramda
    //  let handelPromises = promise =>
    //    promise
    //      .then(value => {
    //        let pairArray = R.map(e => {
    //          let pair = {};
    //          pair[e.key()] = true;
    //          return pair;
    //        }, value);
    //
    //        return pairArray;
    //      })
    //      .catch(error => $q.reject(error));
    //
    //
    //  //Array -> Promise
    //  let done = R.compose(
    //    log,
    //    handelPromises,
    //    $q.all,
    //    immutableUtils.toArray,
    //    addTags,
    //    createTagSet);
    //
    //  return done(tagArray);
    //};

    return {
      //create: createCardSetTag,
      //all: cardSetTagBranch,
      get: cardSetTagNode,
      //add: addCardSetTagNodes,
      tagsExist: tagsExist
    }
  }

}());
