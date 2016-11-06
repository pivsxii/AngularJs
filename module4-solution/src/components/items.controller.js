(function () {
	'use strict';

	var app = angular.module('MenuApp');
	app.controller('ItemsCtrl', ItemsCtrl);

	ItemsCtrl.$inject = ['items'];
	function ItemsCtrl(items) 
	{
		var itemsList = this;

		//console.log('alo');

		itemsList.items = items.menu_items;
		itemsList.category = items.category;

		//console.log(itemsList.category);
	}

})();
