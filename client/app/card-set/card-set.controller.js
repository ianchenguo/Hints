(function () {
  'use strict';

  angular.module('hintsApp')
    .controller('CardSetCtrl', CardSetCtrl);

  CardSetCtrl.$inject = ['$state', 'auth', 'requireAuth'];
  function CardSetCtrl($state, auth, requireAuth) {
    let vm = this;

    let logout = function logout() {
      auth.logout();
      return $state.go('main');
    };

    vm.logout = logout;
  }
}());
