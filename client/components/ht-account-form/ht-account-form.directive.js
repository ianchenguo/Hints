(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htAccountForm', function () {
      return {
        templateUrl: 'components/ht-account-form/ht-account-form.html',
        restrict: 'E',
        scope: {
          title:'@',
          account: '=',
          error:'='
        },
        bindToController: true,
        controllerAs: 'vm',
        controller: controller,
        link: link,
        transclude:true
      };
    });

  controller.$inject = ['$state', 'auth'];
  function controller($state, auth) {
    var vm = this;

  }

  function link(scope, element, attrs) {

  }

}());
