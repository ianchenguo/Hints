'use strict';

angular.module('hintsApp')
  .filter('cardSetTagNames', function () {
    return function (input) {
      return angular.isObject(input) ? R.values(input) : input;
    };
  });
