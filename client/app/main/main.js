'use strict';

angular.module('hintsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.main', {
        url: '^/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as vm'
      });
  });
