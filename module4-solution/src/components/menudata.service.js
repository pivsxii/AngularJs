(function () 
{
	'use strict';

	var app = angular.module('data', []);
	app.service('MenuDataService', MenuDataService);
	app.constant('CategoriesUrl', 'https://davids-restaurant.herokuapp.com/categories.json');
	app.constant('DetailUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json');

	MenuDataService.$inject = ['$http', 'CategoriesUrl', 'DetailUrl']
	function MenuDataService($http, CategoriesUrl, DetailUrl)
	{
		var paramCategories = 
		{
      		method: "GET",
      		url: CategoriesUrl
      	};

      	var paramDetail = 
		{
      		method: "GET",
      		url: DetailUrl
      	};

		this.getAllCategories = function()
		{
			return $http(paramCategories).then(function(response) 
			{
	    		return  response.data
			});
		};

		this.getItemsForCategory = function(categoryShortName)
		{
			console.log('porova');
			paramDetail.params = {category: categoryShortName};

			return $http(paramDetail).then(function(response) 
			{
	    		return  response.data;
			});
		}
    };

})();