(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htCollapseSection', function () {
      return {
        templateUrl: 'components/ht-collapse-section/ht-collapse-section.html',
        restrict: 'E',
        scope: {
          title: '@'
        },
        bindToController: true,
        controllerAs: 'vm',
        controller: controller,
        link: link,
        transclude: true
      };
    });

  function controller() {
    var vm = this;


  }

  function link(scope, element, attrs, ctrl, transclude) {

    transclude(function (clone) {
      if (clone.length) {
        element.find('icg-transclude').replaceWith(clone);
      }
    });

    var toggleShow = function () {
      scope.vm.isOpen = !scope.vm.isOpen;
    };

    scope.vm.isOpen = true;
    scope.vm.toggleShow = toggleShow;
  }

}());
