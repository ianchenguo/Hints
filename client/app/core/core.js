/**
 * Created by ianchenguo on 25/07/15.
 */

'use strict';

(function () {

//code here
  angular.module('hintsApp.core', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ui.router',
    'firebase',

    'hintsApp.core.firebaseModel',
    'hintsApp.core.auth'
  ])

}());
