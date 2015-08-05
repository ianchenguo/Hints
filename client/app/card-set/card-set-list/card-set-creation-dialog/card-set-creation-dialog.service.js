(function () {
  'use strict';

  angular.module('hintsApp')
    .factory('cardSetCreationDialog', cardSetCreationDialog);

  cardSetCreationDialog.$inject = ['$mdDialog','cardSetTags'];
  function cardSetCreationDialog($mdDialog,cardSetTags) {

    let showDialog = function (ev) {
      $mdDialog.show({
        controller: DialogController,
        controllerAs: 'vm',
        bindToController: true,
        templateUrl: 'app/card-set/card-set-list/card-set-creation-dialog/dialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false
      })
        .then(value => {
        })
        .catch(value => {
        });
    };

    function DialogController($mdDialog) {
      let vm = this;

      let createCardSet = function(cardSet) {

        return cardSetTags.tagsExist(cardSet.tags);
      };

      vm.hide = function () {
        $mdDialog.hide();
      };
      vm.cancel = function () {
        $mdDialog.cancel();
      };

      vm.cardSet = {
        title:'',
        desc:'',
        tags:[]
      };

      vm.createCardSet = createCardSet;

    }

    return {
      showDialog: showDialog
    }
  }

}());
