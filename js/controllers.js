define(['angular', 'services'], function() {
  'use strict';

  var controllers = angular.module('ExampleApp.controllers', ['ExampleApp.services']);

  controllers.controller('MainCtrl', ['$scope', MainCtrl]);

  function MainCtrl($scope) {
    $scope.content = 'Вывод шаблона Main.html.';
  }
});