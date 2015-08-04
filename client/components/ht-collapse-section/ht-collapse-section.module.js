/**
 * Created by ianchenguo on 31/07/15.
 */

'use strict';

(function () {

//code here
  angular
    .module('hintsApp.components.collapseSection', [])
    .animation('.ht-collapse-section__content', function () {

      return {
        addClass: function (element, className, doneFn) {

          $(element).velocity({maxHeight: 0}, 500, [.55, 0, .1, 1]); // Velocity

        },
        removeClass: function (element, className, doneFn) {

          $(element).velocity({maxHeight: 999}, 500, [.55, 0, .1, 1]); // Velocity

        },
        setClass: function (element, addedClass, removedClass, doneFn) {

        }
      }
    });

}());
