(function () {
  'use strict';

  angular.module('hintsApp.core.layout')
    .factory('layout', layout);

  layout.$inject = ['$mdUtil', '$mdSidenav'];

  function layout($mdUtil, $mdSidenav) {

    /**
     * Build handler to open/close a SideNav
     *
     * Adapted from angular material demo
     */
    let buildToggler = function buildToggler(navID) {
      let debounceFn = $mdUtil.debounce(function () {
        $mdSidenav(navID)
          .toggle()
      }, 200);
      return debounceFn;
    };

    let closeNav = function closeNav(navID) {
      let debounceFn = $mdUtil.debounce(function () {
        $mdSidenav(navID)
          .close()
      }, 200);
      return debounceFn;
    };

    // Public API here
    return {
      buildToggler: buildToggler,
      closeNav:closeNav
    };
  }
}());
