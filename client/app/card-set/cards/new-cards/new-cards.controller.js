'use strict';

angular.module('hintsApp')
  .controller('NewCardsCtrl', ['cardsService',function (cardsService) {

    let vm = this;

    let addWordCard = function addWordCard() {
      var cardConfig = {};
      cardConfig.backgroundColor = cardsService.randomColor();
      vm.wordCards.push(cardConfig);
    };

    let removeCard = function removeCard(index) {
        vm.wordCards = R.remove(index,1,vm.wordCards);
    };

    let activate = function activate() {
      vm.addWordCard();
      console.log(vm.wordCards);
    };




    vm.wordCards = [];
    vm.addWordCard = addWordCard;
    vm.removeWordCard = removeCard;
    vm.toggleLeftNav = cardsService.buildToggler('left');
    vm.toggleRightNav = cardsService.buildToggler('right');

    activate();
  }]);
