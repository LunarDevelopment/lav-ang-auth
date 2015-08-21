'use strict';

/**
 * @ngdoc service
 * @name inventoryApp.twitter
 * @description
 * # twitter
 * Factory in the inventoryApp.
 */
angular.module('inventoryApp')
  .factory('Twitter', function ($http) {
    var twitter = function () {
      this.tweets = [];
      this.busy = false;
      this.after = '';
    };

    twitter.prototype.nextPage = function () {
      if (this.busy) return;
      this.busy = true;

      var url = "exampleTweets.json";
      $http.jsonp(url).success(function (data) {
        var tweets = data.data.statuses;
        for (var i = 0; i < tweets.length; i++) {
          this.tweets.push(tweets[i].data);
        }
        this.after = "t3_" + this.tweets[this.tweets.length - 1].id;
        this.busy = false;
      }.bind(this));
    };
    return twitter;
  });