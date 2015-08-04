'use strict';

angular.module('hintsApp')
  .directive('htCardSetDetailModal', function () {
    return {
      templateUrl: 'app/card-sets/ht-card-set-detail-modal/ht-card-set-detail-modal.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });