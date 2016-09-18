(function () {
	
	'use strict';

	angular.module('myFirstApp', [])

	.controller('myFirstController', function ($scope) {

		$scope.name = 'Paolo'		
		$scope.sayHello = function () {
			return "Hello Coursera";
		}
	});

})();