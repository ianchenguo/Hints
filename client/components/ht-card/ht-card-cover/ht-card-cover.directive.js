'use strict';

angular.module('hintsApp')
  .directive('htCardCover', function () {
    return {
      templateUrl: 'components/ht-card/ht-card-cover/ht-card-cover.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
