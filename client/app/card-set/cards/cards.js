'use strict';

angular.module('hintsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cards', {
        url: '/cards',
        templateUrl: 'app/cards/cards.html',
        controller: 'CardsCtrl as vm'
      });
  });
