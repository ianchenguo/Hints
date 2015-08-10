(function () {
  "use strict";

  angular.module('hintsApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('base', {
          abstract:true,
          url: '/',
          templateUrl: 'app/base/base.html',
          controller: 'BaseCtrl as vm'
        });
    });

}());



