(function () {
  'use strict';

  angular.module('hintsApp.core.firebaseModel')
    .factory('cardSets', cardSets);

  cardSets.$inject = ['$q', 'R', 'I', 'immutableHelper','modelUtils'];
  function cardSets($q,R,I,modelUtils) {

    let createCardSet = function createCardSet(params) {



      return Immutable.Map({
        title: params.title,
        desc: params.desc,
        owner: params.owner,
        tags: params.tags,
        shared: params.shared,
        dateOfCreation: Firebase.ServerValue.TIMESTAMP
      });
    };

    let cardSetRef = modelUtils.ref('cardSets');

    let cardSetBranch = modelUtils.branch(cardSetRef);

    let cardSetNode = modelUtils.branchNode(cardSetRef);

    let addCardSetNode = modelUtils.add(cardSetBranch);

    return {
      create: createCardSet,
      all: cardSetBranch,
      get: cardSetNode,
      add: addCardSetNode
    }
  }

}());
