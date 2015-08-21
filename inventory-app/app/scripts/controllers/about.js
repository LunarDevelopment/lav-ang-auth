'use strict';

/**
 * @ngdoc function
 * @name inventoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inventoryApp
 * @requires Twitter Factory
 * @property {Array} tweets
 * @property {twitter} new instance of Twitter factory
 * @property {Object} style object of progress bar
 */
angular.module('inventoryApp')
  .controller('AboutCtrl', function (Twitter) {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.twitter = new Twitter();
    vm.tweets = null;
    vm.progress = {
      width: '0%'
    };
    /**
     * @ngdoc function
     * @name written
     * @description
     * Checks exampleTweet length !== 0 and updates progress bar to next step in tutorial
     * @property {Number} exampleTweet.length
     */
    vm.written = function () {
      if (vm.exampleTweet.length !== 0) {
        vm.progress.width = '25%';
      }
    };
    vm.exampleSearch = function () {
      if (vm.searchTerm.length !== 0) {
        vm.progress.width = '50%';
      }
    };
    /**
     * @description
     * Checks which example tweet has been selected and updates progress bar to next step in tutorial
     * @param {Object} target selected example tweet
     */
    vm.chosen = function (target) {
      vm.target = target;
      vm.progress.width = '75%';
    };
    /**
     * @description Emulates sending a tweet to potential client
     *
     */
    vm.sendExample = function () {
      vm.progress.width = '100%';
    };
  });
