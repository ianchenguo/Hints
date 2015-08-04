(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htSidenav', function () {
      return {
        templateUrl: 'components/ht-sidenav/ht-sidenav.html',
        restrict: 'E',
        scope: {},
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
  }

}());

