'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngStorage',
  'myApp.component',
  'myApp.record',
  'myApp.location',
  'myApp.MenuCtrl',
  'myApp.lists',
  'myApp.filters',
  'myApp.view2',
  'myApp.version',
  'ngMaterial',
  'ngMessages',
  'material.svgAssetsCache',
  'treeControl'
]).
config(['$locationProvider', '$routeProvider', '$mdIconProvider', function($locationProvider, $routeProvider, $mdIconProvider) {
  $locationProvider.hashPrefix('!');
  $mdIconProvider
    .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
    .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
  $routeProvider.otherwise({redirectTo: '/record/Puerquito-feliz'});
}]);
