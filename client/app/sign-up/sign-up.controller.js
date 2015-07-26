(function () {
  'use strict';

  angular.module('hintsApp')
    .controller('SignUpCtrl', SignUpCtrl);

  SignUpCtrl.$inject = ['$q', '$state', 'auth'];
  function SignUpCtrl($q, $state, auth) {
    var vm = this;
    vm.account = {username: '', password: ''};
    vm.error = {reason: ''};

    vm.createAccount = function createAccount(account) {
      return auth.register(account)
        .then(() => $state.go('home'))
        .catch((reason) => {
          vm.error.reason = reason;
          return $q.reject(reason);
        })
    };
  }

}());
