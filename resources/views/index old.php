<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>Application</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <link rel="stylesheet" href="dist/styles/vendor.040461c6.css">
  <link rel="stylesheet" href="dist/styles/main.1759c43a.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900&subset=latin,greek,greek-ext,vietnamese,cyrillic-ext,latin-ext,cyrillic" rel="stylesheet" type="text/css"> </head>

<body ng-app="inventoryApp">
  <!--[if lte IE 8]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
  <!-- Add your site or application content here 
<nav class="purple lighten-1">
<div class="nav-wrapper">
<a href="#/" class="brand-logo center">Application</a>
<a href="#" class="button-collapse" data-activates="nav-mobile" data-sidenav="left" data-menuwidth="500" data-closeonclick="false">
Show side-nav
</a>
<ul class="right hide-on-med-and-down">
<li><a href="#/about">About</a>
</li>
<li ng-show="authenticated"><a href="#/user">Users</a>
</li>
<li ng-show="!authenticated"><a href="#/auth">Log In</a>
</li>
</ul>
<ul class="side-nav" id="nav-mobile">
<li><a href="#/about">About</a>
</li>
<li ng-show="authenticated"><a href="#/user">Users</a>
</li>
<li ng-show="!authenticated"><a href="#/auth">Log In</a>
</li>
</ul>
</div>
</nav>
-->
  <nav class="light-blue darken-1" role="navigation">
    <!-- <div class="container"> -->
    <div class="nav-wrapper">
      <div class="valign-demo valign-wrapper left">
        <a id="logo-container" href="#/" class="brand-logo waves-effect waves-light">
          <div class="hide-on-med-and-down"> <span class="left" style="padding-left:20px"><img src="dist/" width="36px"></span> <span class="left" style="padding-left:15px;font-size: 0.7em;font-weight:300">Application</span> </div>
          <div class="hide-on-large-only"> <span style="font-size: 0.7em;font-weight:300">Application</span> </div>
        </a>
      </div>
      <ul class="right hide-on-med-and-down">
        <li class="waves-effect waves-light"><a href="#/about">About</a> </li>
        <li class="waves-effect waves-light" ng-show="authenticated"><a href="#/user">Users</a> </li>
        <li class="waves-effect waves-light" ng-show="!authenticated"><a href="#/auth">Log In</a> </li>
      </ul>
      <ul class="side-nav" id="nav-mobile">
        <li class="waves-effect waves-light"><a href="#/about">About</a> </li>
        <li class="waves-effect waves-light" ng-show="authenticated"><a href="#/user">Users</a> </li>
        <li class="waves-effect waves-light" ng-show="!authenticated"><a href="#/auth">Log In</a> </li>
      </ul>
      <a href="#" class="button-collapse" data-activates="nav-mobile" data-sidenav="left" data-menuwidth="250" data-closeonclick="false"> <i class="mdi-navigation-menu"> </i> </a>
    </div>
    <!-- </div> -->
  </nav>
  <!--
<div class="container"> 

-->
  <div>
    <div ng-view=""></div>
  </div>
  <!--
<div class="footer">
<div class="container">
<p><span class="glyphicon glyphicon-heart"></span> from the Yeoman team</p>
</div>
</div>
-->
  <footer class="page-footer light-green darken-1">
    <div class="container">
      <div class="row">
        <div class="col l3 s12 m6">
          <article id="text-6" class="panel widget widget_text">
            <h5 class="white-text">ABOUT APPLICATION</h5>
            <div class="textwidget">
              <p>A herp derp application for asynchronous derping and herping.</p>
              <p>SOCIAL MEDIA LINKS? | LONK | LONK </p>
            </div>
          </article>
        </div>
        <div class="col l3 s12 m6">
          <article id="su_siloed_terms-4" class="panel widget widget_su_siloed_terms">
            <h5 class="white-text">Categories</h5>
            <ul>
              <li class="cat-item cat-item-262"><a href="http://adbeus.com/coffee/chicago/">Chicago</a> </li>
              <li class="cat-item cat-item-238"><a href="http://adbeus.com/coffee/istanbul/" title="This list from Istanbul was curated by our local partner  Coffee In Istanbul">Istanbul</a> </li>
              <li class="cat-item cat-item-252"><a href="http://adbeus.com/coffee/london/" title="This list from London was curated by our local partner Nikita Ber">London</a> </li>
              <li class="cat-item cat-item-237"><a href="http://adbeus.com/coffee/los-angeles/" title="This list from Istanbul was curated by our local partner  LA Coffee Club">Los Angeles</a> </li>
              <li class="cat-item cat-item-8"><a href="http://adbeus.com/coffee/montreal/">Montreal</a> </li>
              <li class="cat-item cat-item-73"><a href="http://adbeus.com/coffee/nyc/">NYC</a> </li>
              <li class="cat-item cat-item-12"><a href="http://adbeus.com/coffee/ottawa/">Ottawa</a> </li>
              <li class="cat-item cat-item-74"><a href="http://adbeus.com/coffee/paris/" title="The coffee scene in Paris, France is changing. Here's a list of indie cafés bringing the third wave to the French capital. ">Paris</a> </li>
              <li class="cat-item cat-item-239"><a href="http://adbeus.com/coffee/prague/">Prague</a> </li>
              <li class="cat-item cat-item-19"><a href="http://adbeus.com/coffee/toronto/" title="This is our shortlist of the best independent coffee shops in Toronto.">Toronto</a> </li>
              <li class="cat-item cat-item-254"><a href="http://adbeus.com/coffee/vancouver/">Vancouver</a> </li>
              <li class="cat-item cat-item-261"><a href="http://adbeus.com/coffee/victoria/">Victoria</a> </li>
            </ul>
          </article>
        </div>
        <div class="col l3 s12 m6">
          <article id="nav_menu-3" class="panel widget widget_nav_menu">
            <h5 class="white-text">FRIENDS</h5>
            <div class="menu-friends-container">
              <ul id="menu-friends" class="menu">
                <li id="menu-item-3044" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3044"><a href="http://uneparisienneamontreal.com">Une Parisienne à Montréal</a> </li>
                <li id="menu-item-3362" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3362"><a href="http://christievuong.com">Christie Vuong</a> </li>
                <li id="menu-item-3046" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3046"><a href="http://cafefrenchtoast.com">Café French Toast</a> </li>
                <li id="menu-item-3045" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3045"><a href="http://tastet.ca">Tastet</a> </li>
                <li id="menu-item-3047" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3047"><a href="http://mtlbeanstalk.com">MTL Bean Stalk</a> </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="col l3 s12 m6">
          <article id="text-7" class="panel widget widget_text">
            <h5 class="white-text">DOWNLOAD OUR APP</h5>
            <div class="textwidget">
              <a target="_blank" href="IOSAPPSTORE"><img target="_blank" src="dist/images/ios.18c84926.png" alt="" class="responsive-img"> </a>
              <a target="_blank" href="ANDROIDAPPSTORE"><img target="_blank" src="dist/images/android.64f32dc0.png" alt="" class="responsive-img"> </a>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container"> Hand crafted by <a class="white-text text-lighten-4" href="http://lunar-development.co.uk">Lunar Development</a> </div>
    </div>
  </footer>
  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->
  <script>
    ! function (A, n, g, u, l, a, r) {
      A.GoogleAnalyticsObject = l, A[l] = A[l] || function () {
          (A[l].q = A[l].q || []).push(arguments)
        }, A[l].l = +new Date, a = n.createElement(g),
        r = n.getElementsByTagName(g)[0], a.src = u, r.parentNode.insertBefore(a, r)
    }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-XXXXX-X');
    ga('send', 'pageview');
  </script>
  <script src="dist/scripts/vendor.131a242b.js"></script>
  <script src="dist/scripts/scripts.a8017008.js"></script>
</body>

</html>