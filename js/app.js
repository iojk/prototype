// app.js

var prototypeApp = angular.module('prototypeApp', ['ngRoute']);

/* роутинг */
prototypeApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
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
			.otherwise({redirectTo: '/'})
		;
	}
]);
prototypeApp.controller('mainController', function($scope) { $scope.message = 'Everyone come and see how good I look!'; });
prototypeApp.controller('aboutController', function($scope) { $scope.message = 'Look! I am an about page.'; });
prototypeApp.controller('contactController', function($scope) { $scope.message = 'Contact us! JK. This is just a demo.'; });

/* amitgharat.wordpress.com/2013/02/03/an-approach-to-use-jquery-plugins-with-angularjs/ */
prototypeApp.directive('jq.draggable', function() {
    return {
    	restrict: 'A',
    	link: function() { $('.jq-draggable').draggable( { grid: [ 50, 20 ], cursor: 'crosshair' } ); }
    };
});
prototypeApp.directive('jq.indicator', function() {
    return {
    	restrict: 'A',
    	link: function() { click_indicator('.jq-indicator','active'); }
    };
});

$('head').prepend('\
	<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"><!-- эта meta должна быть первой, иначе не сработает! -->\
	<meta content="width=device-width, initial-scale=1.0" name="viewport"><!-- frontender.com.ua/mobile-web/wtf-viewport -->\
	<meta content="true" name="HandheldFriendly"><!-- frontender.com.ua/mobile-web/useful-mobile-head-elements -->\
	<meta charset="utf-8">\
	<title>Prototype</title>\
	<link rel="shortcut icon" href="../favicon.ico">\
	<link rel="icon" href="../favicon.ico">'
); // подключение метатегов, иконок
$('body').append('\
	<footer class="prototype-versions container-fluid navbar-fixed-bottom" ng-include="\'../versions.html\'"></footer>'
); // автоподключение футера