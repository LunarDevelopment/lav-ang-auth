'use strict';

/**
 * @ngdoc function
 * @name inventoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inventoryApp
 * @requires Twitter Factory
 * @requires $window to access global Materialize library's Toasts
 * @property {Array} tweets
 * @property {twitter} new instance of Twitter factory
 * @property {Object} style object of progress bar
 */
angular.module('inventoryApp')
  .controller('AboutCtrl', function (Twitter, $window) {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.exampleToast = {
      duration: 1000,
      message: 'You reached out!'
    };
    vm.twitter = new Twitter();
    vm.tweets = null;
    vm.exampleTweet = '';
    vm.searchTerm = '';
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
    /**
     * @description
     * Emulates a call to Twitter's API to get tweets related to search term
     * @param {String} searchTerm is pulled from model to run search.
     */
    vm.exampleSearch = function () {
      if (vm.searchTerm.length) {
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
    vm.sendExample = function (tweet) {
      tweet.classes = 'purple lighten-5';
      tweet.disabled = true;
      $window.Materialize.toast('You reached out!', 3000);
      vm.progress.width = '100%';
    };
  });