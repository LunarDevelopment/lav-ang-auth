# Lav-Ang-Auth

Laravel 5 Angular Boilerplate with Materialize, JWT-AUTH and Satellite for logins and authentications

Uses generator-angular for the Angular side. 

Uses Laravel and Composer for the API / backend.

## Todo

* Bind input maxlength to 140 chars - current selected tweet '@name'..
* infinite scroll tweet box 
* display how many times your outreached to @xxxx account in results list 
* example tweets spanning popular social media sectors
* could go for user info + send button + outreach count in accordion body 
* search term Web Development => google words to get array of top terms http://api.bing.com/osjson.aspx?query=web%20development 5000 /m = free for bing
* search for followers of @xxxxx like tweepi 
* adhear to twitters api limits on searches : Requests / 15-min window (user auth) = 180 https://dev.twitter.com/rest/reference/get/search/tweets
* Team setup to tweet to compiled list of different search terms with custom messages per rep.
* FAQs & Support Pages
* Blog 
* Settings Section
  - My profile
  - Avatar, profile, language, logout
  - Manage my alerts
  - Edit your alerts settings or delete alert
  - Manage notifications
  - Edit your email notification preferences
  - Manage my data exports
  - Download your previous mentions exports
  - Billing
  - View your invoices
  - Quota / Plan
  - Manage your quota and plan
  - Manage my payment cards
  - Add, remove, update
  - Help center
  - Check our FAQ
* tweet generator / create fake example tweets and template a message based on search term on example page.
* style UI based on twitter's button text / layouts etc.

##mention features
* unread 
* featured 
* favourites 
* activity log 

#SEO 
* meta name="google-site-verification" content=""
* ~~meta name="twitter:title" content="Tweads | Generate Warm Leads By Tweeting"~~ 
* meta name="twitter:description" content="Find out how to get leads by using Twitter to get email addresses from future customers. Tweets enables users to share their email address."
* meta name="twitter:image" content="https://g.twimg.com/smb/img/meta/twitter-business-2.jpg"
* meta name="twitter:url" content="https://business.twitter.com/solutions/leads-on-twitter"
* meta name="twitter:site" content="@TwitterSmallBiz"
* meta name="twitter:image:width" content="550"
* meta name="twitter:creator" content="@TwitterSmallBiz"
* meta name="twitter:image:height" content="323"
* meta name="twitter:card" content="summary" 
* meta name="google-site-verification" content="VOL9Qsd-cNMFa87NgJ1CH3c-YicByrmB6U5SYhNEkaY"
* meta name="og:url" content="https://business.twitter.com/solutions/leads-on-twitter" 
* meta name="og:image" content="https://g.twimg.com/sites/all/themes/gazebo/img/twitter-business.png" 
* meta name="og:title" content="Solutions | Twitter for Business" 
* meta name="og:description" content="Find out how to get leads by using Twitter to get email addresses from future customers. Tweets enables users to share their email address." 
* meta name="og:type" content="website" 
* meta name="og:site_name" content="Twitter for Business" 
* ~~meta name="description" content="Find out how to get leads by using Twitter to get email addresses from future customers. Tweets enables users to share their email address."~~ 
* ~~meta name="keywords" content="How to get leads"~~ 
* ~~meta name="generator" content="Drupal 7 (http://drupal.org)"~~
* meta itemprop="name" content="Mention" 
* meta itemprop="description" content="Media monitoring made easy with Mention. Create alerts on your name, brand, competitors and be informed in real-time of any mention on the web and social networks" 
* meta itemprop="image" content="https://en.mention.com//v/nte35z/bundles/mentionweb/v3/img/og-image.png"

## Setup 

`git clone https://github.com/LunarDevelopment/lav-ang-auth.git DIRECTORYNAME && cd DIRECTORYNAME`
`composer install`
`cd inventory-app && npm install && bower install`
`cd ../ && copy .env.example .env`
`php artisan key:generate`
- this alters the .env line `APP_KEY` to contain a unique app key
- edit the new .env to contain your database details, such as: 
```
DB_HOST=localhost
DB_DATABASE=inventory
DB_USERNAME=root
DB_PASSWORD=root
```
`php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\JWTAuthServiceProvider"`
`php artisan jwt:generate` 
`php artisan migrate` 
`php artisan db:seed` 
`php artisan serve`
[localhost](http://localhost:8000/dist/#/)


## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.

Laravel is accessible, yet powerful, providing powerful tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
