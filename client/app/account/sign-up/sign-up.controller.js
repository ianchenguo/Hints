(function () {
  'use strict';

  angular.module('hintsApp.account')
    .controller('SignUpCtrl', SignUpCtrl);

  SignUpCtrl.$inject = ['$q', '$state', 'auth'];
  function SignUpCtrl($q, $state, auth) {
    var vm = this;
    vm.account = {username: '', password: ''};
    vm.error = {};

    vm.createAccount = function createAccount(account) {
      return auth.register(account)
        .then(auth.login(account))
        .then(() => $state.go('home'))
        .catch((reason) => {
          vm.error = reason;
          return $q.reject(reason);
        })
    };
  }

}());
