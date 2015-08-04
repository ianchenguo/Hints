(function () {
  'use strict';

  angular.module('hintsApp')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$state', 'auth', 'requireAuth'];
  function HomeCtrl($state, auth, requireAuth) {
    let vm = this;

    let logout = function logout() {
      auth.logout();
      return $state.go('main');
    };

    vm.logout = logout;
  }
}());
