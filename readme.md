# Lav-Ang-Auth

Laravel 5 Angular Boilerplate with Materialize, JWT-AUTH and Satellite for logins and authentications

Uses generator-angular for the Angular side. 

Uses Laravel and Composer for the API / backend.

## Todo

* Bind input maxlength to 140 chars - current selected tweet '@name'..
* infinite scroll tweet box 
* example tweets spanning popular social media sectors
* could go for user info + send button + outreach count in accordion body 
* search term Web Development => google words to get array of top terms  
* search for followers of @xxxxx like tweepi 


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
