/**
 * Created by ianchenguo on 26/07/15.
 */

'use strict';

(function () {


  //mock auth service
  var auth = {
    login: function() {return null;},
    register: function() {return null;},
    logout: function() {return null;}
  };

  var $state = {
    go: function() {return null;}
  };

  angular
    .module('hintsApp.mocks', [])
    .value('auth', auth)
    .value('$state', $state);


}());

