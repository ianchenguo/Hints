(function () {
  "use strict";

  angular.module('hintsApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('base', {
          url: '/base',
          templateUrl: 'app/base/base.html',
          controller: 'BaseCtrl'
        });
    });

}());



