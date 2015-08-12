(function () {
  'use strict';

  angular.module('hintsApp')
    .factory('cardSetListService', cardSetListService);

  cardSetListService.$inject = ['Rx', 'R', 'coreUtils', 'fbUtils'];
  function cardSetListService(Rx, R, coreUtils, fbUtils) {

    //[Object cardSets] -> [String tagName]
    //let whenFoundTagNamesFrom = cardSetArray => {
    //  let whenTagTupleReceived = Rx.Observable.from(cardSetArray)
    //    //get tag keys of each cardSet
    //    .map(
    //    R.ifElse(
    //      R.compose(R.isNil, R.prop('tags')),
    //      () => [],
    //      R.compose(R.keys,R.prop('tags'))
    //    ));
    //
    //
    //  return whenTagTupleReceived;
    //};


    return {

    }
  }

}());
