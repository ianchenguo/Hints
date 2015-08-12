(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htCardSetListItem', htCardSetListItem);

  htCardSetListItem.$inject = ['uiUtils'];
  function htCardSetListItem(uiUtils) {
    return {
      templateUrl: 'app/card-set/card-set-list/ht-card-set-list-item/ht-card-set-list-item.html',
      restrict: 'E',
      scope: {
        cardSetItem: '='
      },
      bindToController: true,
      controllerAs: 'vm',
      controller: controller,
      link: link,
      require: '^htCardSetList'
    };

    function controller() {
      let vm = this;

      vm.themeColor = uiUtils.randomColor();

    }

    function link(scope, element, attrs, ctrl, transclude) {
      scope.vm.toggleDetailsMenu = ctrl.toggleRightNav;
    }
  }

}());
