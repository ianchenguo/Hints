(function () {
  'use strict';

  angular.module('hintsApp')
    .directive('htCardSets', htHome);

  htHome.$inject = ['cardSets'];
  function htHome(cardSets) {
    return {
      templateUrl: 'app/card-sets/ht-card-sets/ht-card-sets.html',
      restrict: 'E',
      bindToController: true,
      controllerAs: 'vm',
      controller: controller,
      link: link,
      transclude: true
    };

    function controller() {
      let vm = this;

      vm.cardSet = cardSets.create({name:'test card set', owner: 'test onwer'});
      console.log(vm.cardSet);

      vm.saveCardSet = function(cardSet) {
        return cardSets.add(cardSet)
          .then(value => console.log('value' + value))
          .catch(error => console.log('error' + error));
      }
    }

    function link(scope, element, attrs) {

    }
  }
}());
