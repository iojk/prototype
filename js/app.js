// script.js

var prototypeApp = angular.module('prototypeApp', ['ngRoute']);

// роутинг
prototypeApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'page/home.html',
			controller  : 'mainController'
		})
		.when('/about', {
			templateUrl : 'page/about.html',
			controller  : 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'page/contact.html',
			controller  : 'contactController'
		})
		;
	$routeProvider.otherwise({redirectTo: ''}); // редирект в случае ошибочного адреса (изменить на /400)
	// $locationProvider.html5Mode(true).hashPrefix('#');  // для замены хешей в путях
});

// amitgharat.wordpress.com/2013/02/03/an-approach-to-use-jquery-plugins-with-angularjs/
prototypeApp.directive('jq.draggable', function() {
    return {
    	restrict: 'A',
    	link: function() { $('.jq-draggable').draggable( { grid: [ 50, 20 ], cursor: 'crosshair' } ); }
    };
});

prototypeApp.controller('mainController', function($scope) { $scope.message = 'Everyone come and see how good I look!'; });
prototypeApp.controller('aboutController', function($scope) { $scope.message = 'Look! I am an about page.'; });
prototypeApp.controller('contactController', function($scope) { $scope.message = 'Contact us! JK. This is just a demo.'; });