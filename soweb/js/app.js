'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute','ngResource','ngTouch','ngSanitize',
  'angularFileUpload',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).run(function($rootScope){$rootScope.selectedColor = {name:'black',code:'#000000'}}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'mainCtrl'});
  $routeProvider.when('/staff', {templateUrl: 'partials/personnel.html', controller: 'persCtrl'});
  $routeProvider.when('/reports', {templateUrl: 'partials/reports.html?type=fi', controller: 'rptCtrl'});
  $routeProvider.when('/pubs', {templateUrl: 'partials/publications.html', controller: 'ctrlPubs'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'mainCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'})
}]);
