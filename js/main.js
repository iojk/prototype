'use strict';

require.config({
  baseUrl: 'js/',
  waitSeconds: 0,
  paths: {
    'angular': '../libs/angular/angular.min',
    'angular-route': '../libs/angular/angular-route.min',
    'jquery': '../libs/jquery.min',
    'bootstrap': '../libs/bootstrap/js/bootstrap.min',
    'app': 'app',
    'controllers': 'controllers',
    'directives': 'directives',
    'filters': 'filters',
    'services': 'services'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'jquery': {
      exports: '$'
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'app': {
      deps: ['angular-route', 'bootstrap']
    },
    'controllers': {
      deps: ['angular-route']
    },
    'directives': {
      deps: ['angular-route']
    },
    'filters': {
      deps: ['angular-route']
    },
    'services': {
      deps: ['angular-route']
    }
  }
});

require(['app'], function() {
  angular.element(document).ready(function() {
    angular.bootstrap(document, ['ExampleApp']);
  });
});