(function () {
	'use strict';

	var app = angular.module('MenuApp');
	app.controller('CategoriesCtrl', CategoriesCtrl);


	CategoriesCtrl.$inject = ['items'];
	function CategoriesCtrl(items) 
	{
	  var categoryList = this;
	  categoryList.items = items;
	}

})();
