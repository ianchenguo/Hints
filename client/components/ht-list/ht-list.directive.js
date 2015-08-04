'use strict';

angular.module('hintsApp')
  .directive('htList', function () {
    return {
      templateUrl: 'components/ht-list/ht-list.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });