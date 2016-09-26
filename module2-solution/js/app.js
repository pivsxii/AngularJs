(function () 
{
	'use strict';

	var app = angular.module('ShoppingListCheckOff', [])
	
	app.controller('ToBuyController', ToBuyController );
	app.controller('AlreadyBoughtController', AlreadyBoughtController);
	app.service('ShoppingListService', ShoppingListService);

	ToBuyController .$inject = ['ShoppingListService'];
	function ToBuyController(ShoppingListService)
	{
		this.list = ShoppingListService.getToBuyList();

		this.buyItem = function (index) {
			ShoppingListService.buyItem(index);
		}
	};

	AlreadyBoughtController.$inject = ['ShoppingListService'];
	function AlreadyBoughtController(ShoppingListService)
	{
		this.list = ShoppingListService.getAlreadyBoughtList();
	};

	function ShoppingListService()
	{
		this.toBuyList = [{ name: "cookies", quantity: 10 }, { name: "packets of chips", quantity: 20 }, { name: "salad", quantity: 1 }, { name: "pizza", quantity: 3 }, { name: "goleador", quantity: 3 }];
		this.alreadyBoughtList = [];

		this.getToBuyList = function () {
			return this.toBuyList;
		};

		this.getAlreadyBoughtList = function () {
			return this.alreadyBoughtList;
		};

		this.buyItem = function (index) {
			this.alreadyBoughtList.push(this.toBuyList.splice(index, 1)[0]);
			console.log(this.alreadyBoughtList);
		};
	}
})();