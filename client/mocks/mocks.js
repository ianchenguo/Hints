/**
 * Created by ianchenguo on 26/07/15.
 */

'use strict';

(function () {


  //mock auth service
  var auth = {
    login: function () {
      return null;
    },
    register: function () {
      return null;
    },
    logout: function () {
      return null;
    },
    requireAuth: function () {
      return null;
    }
  };

  var $state = {
    go: function () {
      return null;
    }
  };

  var accountService = {
    requireNoAuth: function () {
      return null;
    }
  };

  angular
    .module('hintsApp.mocks', [
      'hintsApp.mocks.auth',
      'hintsApp.mocks.state',
      'hintsApp.mocks.account'

    ]);

  angular
    .module('hintsApp.mocks.auth', [])
    .value('auth', auth);

  angular
    .module('hintsApp.mocks.state', [])
    .value('$state', $state);

  angular
    .module('hintsApp.mocks.account', [])
    .value('accountService', accountService);

}());

