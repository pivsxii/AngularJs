(function () {
	'use strict';

	var app = angular.module('MenuApp');

	app.component('items', 
		{
		  	templateUrl: 'src/views/itemsList.html',
		  	restrict: 'E',
		  	bindings: {
		    	items: '<',
		    	categoryName: '<'
		 	}
		}
	)
})();