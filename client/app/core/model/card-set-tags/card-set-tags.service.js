(function () {
  'use strict';

  angular.module('hintsApp.core.firebaseModel')
    .factory('cardSetTags', cardSetTags);

  cardSetTags.$inject = ['$q', 'R', 'I', 'immutableHelper', 'modelUtils', 'auth'];
  function cardSetTags($q, R, I, immutableHelper, modelUtils, auth) {

    let tagCache = I.OrderedSet();

    let createCardSetTag = function createCardSetTag(params) {
      return I.Map({
        name: params.name,
        owner: params.owner,
        dateOfCreation: Firebase.ServerValue.TIMESTAMP
      });
    };

    let cardSetTagRef = modelUtils.ref('cardSetTags');

    let cardSetTagBranch = modelUtils.branch(cardSetTagRef);

    let cardSetTagNode = modelUtils.branchNode(cardSetTagRef);

    let addCardSetTagNode = modelUtils.add(cardSetTagBranch);

    let addCardSetTagNodes = function addCardSetTagNodes(tagArray) {

      let uid = auth.getAuth().uid;

      let log = value => {
        console.log(value);
        return value;
      };

      //Array -> OrderedSet
      let createTagSet = R.compose(
        I.OrderedSet,
        R.map(tag => createCardSetTag({
          name: tag,
          owner: uid
        }))
      );

      //Map -> Promise
      let mapper = R.compose(addCardSetTagNode, immutableHelper.toObject);

      //OrderedSet -> Iterable
      let addTags = R.map(
        R.compose(addCardSetTagNode, immutableHelper.toObject)
      );

      //refactor this function with ramda
      let handelPromises = promise =>
        promise
          .then(value => {
            let pairArray = R.map(e => {
              let pair = {};
              pair[e.key()] = true;
              return pair;
            }, value);

            return pairArray;
          })
          .catch(error => $q.reject(error));


      //Array -> Promise
      let done = R.compose(
        log,
        handelPromises,
        $q.all,
        immutableHelper.toArray,
        addTags,
        createTagSet);

      return done(tagArray);
    };

    return {
      create: createCardSetTag,
      all: cardSetTagBranch,
      get: cardSetTagNode,
      add: addCardSetTagNodes
    }
  }

}());
