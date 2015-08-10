(function () {
  'use strict';

  angular.module('hintsApp.core')
    .factory('immutableUtils', immutableUtils);

  immutableUtils.$inject = ['R'];
  function immutableUtils(R) {

    //Iterable -> Array
    let toArray = iterable => iterable.toArray();

    //Iterable -> Object
    let toObject = iterable => iterable.toObject();

    let keys = iterable => iterable.keys();

    /*
     * http://drboolean.gitbooks.io/mostly-adequate-guide/content/ch8.html
     * var map = curry(function(f, any_functor_at_all) {
     * return any_functor_at_all.map(f);
     * });
     *
     * */

    //Function -> Iterable -> Function
    let map = R.curry((fn, functor) => functor.map(fn));

    // Public API here
    return {
      toArray: toArray,
      toObject: toObject,
      keys: keys

    };
  }
}());
