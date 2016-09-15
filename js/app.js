define(['controllers', 'directives', 'filters', 'services'], function() {
  'use strict';

  var module = angular.module('ExampleApp', [
    'ngRoute',
    'ExampleApp.controllers',
    'ExampleApp.directives',
    'ExampleApp.filters',
    'ExampleApp.services'
  ]);

  module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    });
    $routeProvider.when('/2', {
      templateUrl: 'templates/main2.html',
      controller: 'MainCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

  // используйте этот метод для регистрации функций, которые должны быть выполнены в случае, если инжектор завершил загрузку всех модулей
  module.run(['$rootScope', function($rootScope) {
    // TODO
  }]);
});