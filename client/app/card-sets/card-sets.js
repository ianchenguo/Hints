'use strict';

angular.module('hintsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.cardSets', {
        url: '/card-sets',
        templateUrl: 'app/card-sets/card-sets.html',
        controller: 'CardSetsCtrl as vm'
      });
  });
