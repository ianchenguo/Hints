

(function () {
  'use strict';

  angular.module('hintsApp.components.htCard')
    .directive('htCardFace', function () {
      return {
        templateUrl: 'components/ht-card/ht-card-face/ht-card-face.html',
        restrict: 'E',
        scope: {
          title:'@'
        },
        bindToController: true,
        controllerAs: 'vm',
        controller: controller,
        link: link,
        transclude:true
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
