(function () {
  'use strict';

  angular.module('hintsApp.components.htCard')
    .directive('htCard', function () {
      return {
        templateUrl: 'components/ht-card/ht-card/ht-card.html',
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

    vm.card = {
      word: '',
      wordType: '',
      question: '',
      hints: []
    };

    vm.addHint = function addHint() {
      var hint = {type: '', content: ''};
      vm.card.hints.push(hint);
    };

    vm.removeHint = function removeHint(index) {
      vm.card.hints = R.remove(index,1,vm.card.hints);
    };

  }

  function link(scope, element, attrs, ctrl, transclude) {

    transclude(function (clone) {
      if (clone.length) {
        element.find('icg-transclude').replaceWith(clone);
      }
    });
  }

}());
