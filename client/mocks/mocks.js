/**
 * Created by ianchenguo on 26/07/15.
 */

'use strict';

(function () {


  //mock auth service
  var auth = {
    login: function () {
    },
    register: function () {
    },
    logout: function () {
    },
    requireAuth: function () {
    }
  };

  var $state = {
    go: function () {
    }
  };

  var accountService = {
    requireNoAuth: function () {
    },
    requireAuth: function () {
    }
  };

  var $firebaseObject = jasmine.createSpy('$firebaseObject').and.returnValue({});
  var $firebaseArray = jasmine
    .createSpy('$firebaseArray')
    .and.returnValue({
      $getRecord: function () {
        return {};
      }
    });

  var Users = {
    getProfile: function (uid) {
      return {
        $loaded:function() {}
      }
    },
    getDisplayName: function () {
    },
    getUser: function () {

    },
    users: {}
  };

  angular
    .module('hintsApp.mocks', [
      'hintsApp.mocks.auth',
      'hintsApp.mocks.state',
      'hintsApp.mocks.account',
      'hintsApp.mocks.firebase',
      'hintsApp.mocks.model'

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

  angular
    .module('hintsApp.mocks.firebase', [])
    .value('$firebaseArray', $firebaseArray)
    .value('$firebaseObject', $firebaseObject);

  angular
    .module('hintsApp.mocks.model', [])
    .value('Users', Users);

}());

