// app.js

$.ajax({type:'GET',cache:true,dataType:'script',url:'../get/html/html-doc-head.js'}); // добавление метатегов и скриптов в заголовок html-документа
$('body').append('<footer class="prototype-versions container-fluid" ng-include="\'../versions.html\'"></footer>');

/* роутинг */
var prototypeApp = angular.module('prototypeApp', ['ngRoute']);
prototypeApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', { templateUrl: 'page/home.html', controller: 'mainController' })
			.when('/about', { templateUrl: 'page/about.html', controller: 'aboutController' })
			.when('/contact', { templateUrl: 'page/contact.html', controller: 'contactController' })
			.when('/icons', { templateUrl: 'page/icons.html', controller: 'iconsController' })
			.when('/forms', { templateUrl: 'page/forms.html', controller: 'formsController' })
			.when('/colors', { templateUrl: 'page/colors.html', controller: 'colorsController' })
			.when('/tables', { templateUrl: 'page/tables.html', controller: 'tablesController' })
			.otherwise({ redirectTo: '/' })
		;
	}
]);
prototypeApp.controller('mainController', function($scope, $http) {
	$scope.message = 'Everyone come and see how good I look!';
	$http.get('../get/json/countries.json').success(function(listCountries) { $scope.countries = listCountries; });
});
prototypeApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});
prototypeApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
prototypeApp.controller('iconsController', function($scope) {
	$scope.message = 'Icons Collections';
});
prototypeApp.controller('formsController', function($scope) {
	$scope.message = 'Forms Collections';
});
prototypeApp.controller('colorsController', function($scope) {
	$scope.message = 'Colors Elements';
});
prototypeApp.controller('tablesController', function($scope) {
	$scope.message = 'Grid Systems';
});

/* установка модификатора родителю по клику на дочернем элементе */
prototypeApp.directive('jq.indicator', function() {
    return { restrict: 'A', link: function() { click_indicator('.jq-indicator','active'); } };
});
/* ленивая подгрузка картинок */
prototypeApp.directive('jq.lazyload', function() {
    return { restrict: 'A', link: function() { $('.jq-lazyload').lazyload( { effect: 'fadeIn', event: 'scroll' } ); } };
});
/* тултипы qtip2.com */
prototypeApp.directive('jq.qtip', function() {
    return { restrict: 'A', link: function() { $('[title!=""]').qtip( {
		position: { target: 'mouse', adjust: { x: -10, y: 20 } },
		style: { classes: 'qtip-youtube qtip-rounded' }} ); }
	};
});
/* выбор даты и времени eonasdan.github.io/bootstrap-datetimepicker */
prototypeApp.directive('jq.datetimepicker', function() {
    return { restrict: 'A', link: function() { $('.jq-datetimepicker').datetimepicker( {
    	locale: 'ru',
    	icons: {
			time: "fa fa-clock-o",
			date: "fa fa-calendar",
			up: "fa fa-arrow-up",
			down: "fa fa-arrow-down"
		}
    } ); } };
});
/* перемещаемые элементы amitgharat.wordpress.com/2013/02/03/an-approach-to-use-jquery-plugins-with-angularjs  */
prototypeApp.directive('jq.draggable', function() {
    return { restrict: 'A', link: function() {
		$('.jq-draggable').draggable( {
			cursor: 'move',
			grid: [ 20, 20 ]
		} ); // для сплошных перемещаемых элементов
		$('.jq-drag-handle').draggable( {
			cursor: 'move',
			grid: [ 20, 20 ],
			handle: '.jq-drag-handler'
    	} ); // для перемещаемых элементов с хваталками
    } };
}); /* api.jqueryui.com/draggable */



