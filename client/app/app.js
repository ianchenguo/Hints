'use strict';

angular
  .module('hintsApp', [
    'hintsApp.core',
    'hintsApp.components',
    'hintsApp.account'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .constant('R',R)
  .constant('I',Immutable);
