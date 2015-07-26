
(function () {
  'use strict';

  angular.module('hintsApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$q', '$state', 'auth'];
  function LoginCtrl($q, $state, auth) {
    var vm = this;
    vm.account = {username: '', password: ''};
    vm.error = {reason: ''};

    vm.login = function login(account) {
      return auth
        .login(account)
        .then(value => $state.go('home'))
        .catch(reason => {
          vm.error.reason = reason;
          return $q.reject(reason);
        });

    }
  }

}());
