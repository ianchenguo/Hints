'use strict';

angular.module('hintsApp.core')
  .factory('coreUtils', ['Promise',function (Promise) {

    let log = R.curry((tag, value) => {
      console.log(tag + ': ' + value);
      console.log(value);
      return value;
    });

    let logP = R.curry((tag, value) =>
      value
        .then(response => {
          console.log(tag + '-success: ' + response);
          console.log(response);
          return response;
        })
        .catch(error => {
          console.log(tag + '-error: ' + value);
          console.log(error);
          return Promise.reject(error);
        }));

    // Public API here
    return {
      log: log,
      logP:logP
    };
  }]);
