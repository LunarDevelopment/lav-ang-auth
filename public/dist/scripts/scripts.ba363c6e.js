"use strict";angular.module("inventoryApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.materialize","satellizer"]).config(["$routeProvider","$authProvider","$httpProvider","$provide",function(a,b,c,d){function e(a,b){return{responseError:function(c){var d=b.get("$location"),e=["token_not_provided","token_expired","token_absent","token_invalid"];return angular.forEach(e,function(a,b){c.data.error===a&&(localStorage.removeItem("user"),d.path("/auth"))}),a.reject(c)}}}e.$inject=["$q","$injector"],d.factory("redirectWhenLoggedOut",e),c.interceptors.push("redirectWhenLoggedOut"),b.loginUrl="/api/authenticate",b.loginUrl="/api/authenticate",a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/user",{templateUrl:"views/user.html",controller:"UserCtrl",controllerAs:"user"}).when("/auth",{templateUrl:"views/auth.html",controller:"AuthCtrl",controllerAs:"auth"}).otherwise({redirectTo:"/auth"})}]).run(["$rootScope","$location",function(a,b){a.$on("$routeChangeStart",function(c,d){var e=JSON.parse(localStorage.getItem("user"));e&&(a.authenticated=!0,a.currentUser=e,"auth"===b.path()&&(c.preventDefault(),b.path("/user")))})}]),angular.module("inventoryApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("inventoryApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("inventoryApp").controller("UserCtrl",["$http","$auth","$rootScope",function(a,b,c){var d=this;d.users,d.error,d.getUsers=function(){a.get("api/authenticate").success(function(a){d.users=a}).error(function(a){d.error=a})},d.logout=function(){b.logout().then(function(){localStorage.removeItem("user"),c.authenticated=!1,c.currentUser=null})}}]),angular.module("inventoryApp").controller("AuthCtrl",["$auth","$location","$http","$rootScope",function(a,b,c,d){var e=this;e.loginError=!1,e.loginErrorText,e.login=function(){var f={email:e.email,password:e.password};a.login(f).then(function(){return c.get("api/authenticate/user")},function(a){e.loginError=!0,e.loginErrorText=a.data.error}).then(function(a){var c=JSON.stringify(a.data.user);localStorage.setItem("user",c),d.authenticated=!0,d.currentUser=a.data.user,b.path("/user")})}}]),angular.module("inventoryApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/auth.html",'<div class="row"> <div class="col s12 offset-m3 m6"> <div class="card-panel"> <h3>Login</h3> <form> <div class="form-group input-field"> <input id="email" type="email" class="form-control validate" ng-model="auth.email"> <label for="email">Email</label> </div> <div class="form-group input-field"> <input id="password" type="text" class="form-control validate" ng-model="auth.password" length="30"> <label for="password">Password</label> </div> <button class="btn btn-primary" ng-click="auth.login()">Submit</button> </form> </div> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.42092f92.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/user.html",'<!-- public/views/userView.html --><!--\n<div class="row">\n  <div class="col s12">\n    <ul class="tabs" tabs>\n      <li class="tab col s3"><a  class="active" href="#users">Users</a></li>\n      <li class="tab col s3"><a href="#test2">Test 2</a></li>\n      <li class="tab col s3"><a href="#test3">Test 3</a></li>\n      <li class="tab col s3"><a href="#test4">Test 4</a></li>\n    </ul>\n  </div>\n  <div id="users" class="col s12">\n    --> <div class="col-sm-6 col-sm-offset-3"> <div class="well"> <h5 ng-show="authenticated">Welcome, {{currentUser.name}}</h5> <h3>Users</h3> <div class="buttons" style="margin-bottom: 10px"> <button class="btn btn-primary" ng-click="user.getUsers()">Get Users!</button> <button class="btn btn-danger" ng-click="user.logout()">Logout</button> </div> <ul class="list-group" ng-if="user.users"> <li class="list-group-item" ng-repeat="user in user.users"> <h4>{{user.name}}</h4> <h5>{{user.email}}</h5> </li> </ul> <div class="alert alert-danger" ng-if="user.error"> <strong>There was an error: </strong> {{user.error.error}} <br>Please go back and login again </div> </div> </div> <!--\n  </div>\n  <div id="test2" class="col s12">Test 2</div>\n  <div id="test3" class="col s12">Test 3</div>\n  <div id="test4" class="col s12">Test 4</div>\n</div>\n-->')}]);