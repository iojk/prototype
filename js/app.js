// app.js

$.ajax({type:'GET',cache:true,dataType:'script',url:'../get/html/html-doc-head.js'}); // добавление метатегов и скриптов в заголовок html-документа
$('body').append('<footer class="prototype-versions container-fluid" ng-include="\'../versions.html\'"></footer>');

/* роутинг */
var prototypeApp = angular.module('prototypeApp', ['ngRoute','angularUtils.directives.dirPagination']);
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
prototypeApp.controller('tablesController', function($scope, $http) {
	$scope.message = 'Grid Systems';
	$http.get('../get/json/countries.json').success(function(listCountries) { $scope.countries = listCountries; });
	$scope.sortType = 'code'; // set the default sort type
	$scope.sortReverse = false; // set the default sort order
	$scope.searchCountry = ''; // set the default search/filter term
	$scope.rowsPerPage = 5; // число строк таблицы для пажинации
	$scope.sorterNumFunc = function(sortType){ return parseInt(sortType); };
});

