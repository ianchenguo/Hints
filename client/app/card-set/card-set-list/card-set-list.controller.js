(function () {
  'use strict';

  angular.module('hintsApp')
    .controller('CardSetListCtrl', CardSetListCtrl);

  CardSetListCtrl.$inject = ['cardSetCreationDialog'];
  function CardSetListCtrl(cardSetCreationDialog) {
    let vm = this;

    vm.createCardSet = cardSetCreationDialog.showDialog;
  }
}());
