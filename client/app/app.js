'use strict';

angular
  .module('hintsApp', [
    'hintsApp.core',
    'hintsApp.components',
    'hintsApp.account'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/main');

    $locationProvider.html5Mode(true);
  });
