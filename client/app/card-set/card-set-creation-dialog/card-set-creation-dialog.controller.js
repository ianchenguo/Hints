(function () {
  'use strict';

  angular.module('hintsApp')
    .controller('CardSetCreationDialogCtrl', CardSetCreationDialogCtrl);

  CardSetCreationDialogCtrl.$inject = ['$mdDialog', 'auth', 'cardSets'];
  function CardSetCreationDialogCtrl($mdDialog, auth, cardSets) {
    let vm = this;

    let createCardSet = function (cardSet) {
      let subscription = cardSets.whenCreatedFrom(cardSet).subscribe(
          value => {
          console.log(value)
        },
          error => console.log(error),
        () => console.log('completed')
      );
    };

    vm.hide = function () {
      $mdDialog.hide();
    };
    vm.cancel = function () {
      $mdDialog.cancel();
    };

    vm.cardSet = {
      title: '',
      desc: '',
      tags: [],
      shared: false,
      owner: auth.auth().uid
    };

    vm.createCardSet = createCardSet;

  }
}());
