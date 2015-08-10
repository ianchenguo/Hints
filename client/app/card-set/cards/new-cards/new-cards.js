'use strict';

angular.module('hintsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cards.newCards', {
        url: '/new-cards',
        templateUrl: 'app/cards/new-cards/new-cards.html',
        controller: 'NewCardsCtrl as vm'
      });
  });
