/**
 * Created by ianchenguo on 25/07/15.
 */

'use strict';

(function () {

//code here
  angular
    .module('hintsApp.core', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngMaterial',
      'ngAnimate',
      'ngAria',
      'ngMessages',
      'ui.router',
      'firebase',

      'hintsApp.core.model',
      'hintsApp.core.auth',
      'hintsApp.core.layout'
    ])
    .constant('R', R)
    .constant('Rx',Rx)
    .constant('Promise', Promise)
    .constant('I', Immutable);
}());
