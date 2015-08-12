(function () {
  'use strict';

  angular.module('hintsApp')
    .factory('cardSetCreationDialog', cardSetCreationDialog);

  cardSetCreationDialog.$inject = ['$mdDialog'];
  function cardSetCreationDialog($mdDialog) {

    let showDialog = function (ev) {
      $mdDialog
        .show({
          controller: 'CardSetCreationDialogCtrl',
          controllerAs: 'vm',
          bindToController: true,
          templateUrl: 'app/card-set/card-set-creation-dialog/card-set-creation-dialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: false
        })
        .then(value => {
        })
        .catch(value => {
        });
    };

    return {
      showDialog: showDialog
    }
  }

}());
