(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htCardSetListItem', htCardSetListItem);

  function htCardSetListItem() {
    return {
      templateUrl: 'app/card-set/card-set-list/ht-card-set-list-item/ht-card-set-list-item.html',
      restrict: 'E',
      scope: {
        title: '@'
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: ['$rootScope', controller],
      link: link,
      transclude: true
    };

    function controller() {
      let vm = this;


    }

    function link(scope, element, attrs, ctrl, transclude) {

      transclude(function (clone) {
        if (clone.length) {
          element.find('icg-transclude').replaceWith(clone);
        }
      });
    }
  }

}());
