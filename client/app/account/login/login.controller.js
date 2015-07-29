
(function () {
  'use strict';

  angular.module('hintsApp.account')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$q', '$state', 'auth'];
  function LoginCtrl($q, $state, auth) {
    var vm = this;
    vm.account = {username: '', password: ''};
    vm.error = {};

    vm.login = function login(account) {
      return auth
        .login(account)
        .then(value => $state.go('home'))
        .catch(reason => {
          vm.error = reason;
          return $q.reject(reason);
        });

    }
  }

}());
