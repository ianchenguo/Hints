'use strict';

angular.module('hintsApp')
  .controller('CardsCtrl', ['cardsService', function (cardsService) {

    let vm = this;


    vm.toggleLeftNav = cardsService.buildToggler('left');
    vm.toggleRightNav = cardsService.buildToggler('right');

  }]);
