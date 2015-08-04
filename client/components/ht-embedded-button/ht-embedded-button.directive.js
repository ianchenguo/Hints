
(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htEmbeddedButton', function () {
      return {
        templateUrl: 'components/ht-embedded-button/ht-embedded-button.html',
        restrict: 'E',
        scope: {
          ariaLable:'='
        },
        bindToController: true,
        controllerAs: 'vm',
        controller: controller,
        link: link,
        transclude: true
      };
    });

  controller.$inject = ['$state', 'auth'];
  function controller($state, auth) {
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

