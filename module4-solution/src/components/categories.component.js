(function () {
	'use strict';

	var app = angular.module('MenuApp');

	app.component('categories', 
		{
		  	templateUrl: 'src/views/categoriesList.html',
		  	restrict: 'E',
		  	bindings: {
		    	items: '<'
		 	}
		}
	)
})();