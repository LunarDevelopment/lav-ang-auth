'use strict';

/**
 * @ngdoc function
 * @name inventoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inventoryApp
 */
angular.module('inventoryApp')
  .controller('MainCtrl', function () {
    var vm = this;
    vm.collapsibleElements = [{
        icon: 'mdi-image-filter-drama',
        title: 'First',
        content: 'Lorem ipsum dolor sit amet.'
  }, {
        icon: 'mdi-maps-place',
        title: 'Second',
        content: 'Lorem ipsum dolor sit amet.'
  }, {
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    }];
  });
