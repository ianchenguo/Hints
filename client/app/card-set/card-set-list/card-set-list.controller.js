(function () {
  'use strict';

  angular.module('hintsApp')
    .controller('CardSetListCtrl', CardSetListCtrl);

  CardSetListCtrl.$inject = ['cardSetCreationDialog', 'myCardSets', 'coreUtils', 'uiUtils', 'cardSetListService'];
  function CardSetListCtrl(cardSetCreationDialog, myCardSets, coreUtils, uiUtils, cardSetListService) {
    let vm = this;


    vm.createCardSet = cardSetCreationDialog.showDialog;
    vm.localCardSets = myCardSets;

  }
}());
