(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htToolbar', htToolbar);

  htToolbar.$inject = ['layout'];
  function htToolbar(layout) {
    return {
      templateUrl: 'components/ht-toolbar/ht-toolbar.html',
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

    function controller($rootScope) {
      let vm = this;

      $rootScope.$on('$stateChangeSuccess',
        (event, toState, toParams, fromState, fromParams) =>
          layout.closeNav('left')());

      vm.toggleLeftNav = layout.buildToggler('left');


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
