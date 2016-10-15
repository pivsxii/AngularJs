(function () 
{
	'use strict';

	var app = angular.module('NarrowItDownApp', [])
	
	app.controller('NarrowItDownController', NarrowItDownController);
	app.service('MenuSearchService', MenuSearchService);
	app.constant('RestService', "https://davids-restaurant.herokuapp.com/menu_items.json");
	app.directive('foundItems', FoundItemsDirective);

	function FoundItemsDirective()
	{
		var ddo = {
    		templateUrl: 'views/foundItemsList.html',
    		restrict: 'E',
    		scope: {
    			items: '<',
    			searchDone : '<',
    			onRemove : '&'
    		}
		};

		return ddo;
	}

	NarrowItDownController .$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService)
	{
		var controller = this;
		controller.searchString = "";
		controller.found = "";
		controller.searchDone = false;

		controller.retrieveData = function()
		{
			controller.found = "";
			if (controller.searchString !== "")
			{
				MenuSearchService.getMatchedMenuItems(controller.searchString).then(function(foundItems) 
				{
					controller.found = foundItems;
					controller.searchDone = true;
				});
			}
		};

		controller.removeItem = function(index)
		{
			this.found.splice(index, 1);
		} 
	};

	MenuSearchService.$inject = ['$http', 'RestService']
	function MenuSearchService($http, RestService)
	{
		var param = {
      		method: "GET",
      		url: (RestService)
      	};

		this.getMatchedMenuItems = function(searchTerm)
		{
			return $http(param).then(function(response) 
			{
	    		var menuItems = response.data.menu_items;
	    		var foundItems = [];

				for (var index = 0; index < menuItems.length; index++)
				{
	   				if (menuItems[index].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
	   					foundItems.push(menuItems[index]);
	   			}

	    		return foundItems;	
			});
		}
    };
})();