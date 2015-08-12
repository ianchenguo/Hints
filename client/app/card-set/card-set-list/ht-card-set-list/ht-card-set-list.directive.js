(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htCardSetList', htCardSetListItem);

  htCardSetListItem.$inject = ['uiUtils','layout'];
  function htCardSetListItem(uiUtils,layout) {
    return {
      templateUrl: 'app/card-set/card-set-list/ht-card-set-list/ht-card-set-list.html',
      restrict: 'E',
      scope: {
        cardSets: "="
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: controller,
      link: link
    };

    function controller() {
      let vm = this;

      vm.toggleRightNav = layout.buildToggler('right');

    }

    function link(scope, element, attrs, ctrl, transclude) {

    }
  }

}());
