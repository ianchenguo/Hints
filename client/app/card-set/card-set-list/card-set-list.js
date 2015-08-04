'use strict';

angular.module('hintsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('base.cardSet.list', {
        url: '/list',
        templateUrl: 'app/card-set/card-set-list/card-set-list.html',
        controller: 'CardSetListCtrl as vm'
      });
  });
