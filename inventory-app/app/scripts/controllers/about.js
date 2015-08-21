'use strict';

/**
 * @ngdoc function
 * @name inventoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inventoryApp
 */
angular.module('inventoryApp')
  .controller('AboutCtrl', function (Twitter, data) {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.twitter = new Twitter();
    vm.tweets = null;
    vm.getTweets = function () {
      data.searchTweets().success(function (results) {
        vm.tweets = results.statuses;
      });
    };
    vm.progress = {
      width: '0%'
    };
    vm.written = function () {
      if (vm.exampleTweet.length !== 0) {
        vm.progress.width = '25%';
      }
    };
    vm.chosen = function (target) {
      vm.target = target;
      vm.progress.width = '50%';
    };
    vm.sendExample = function () {
      vm.progress.width = '75%';
    };
  });