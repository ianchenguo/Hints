'use strict';

angular.module('hintsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'app/sign-up/sign-up.html',
        controller: 'SignUpCtrl as vm'
      });
  });
