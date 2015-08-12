'use strict';

angular.module('hintsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('card-set-details', {
        url: '/card-set-details',
        templateUrl: 'app/card-set/card-set-details/card-set-details.html',
        controller: 'CardSetDetailsCtrl'
      });
  });