(function () 
{
	'use strict';

	var app = angular.module('Lunch Checker', [])
	
	app.controller('lunchCheckerCtrl', lunchCheckerCtrl);

	lunchCheckerCtrl.$inject = ['$scope'];

	function lunchCheckerCtrl($scope) 
	{
		$scope.dishes = "";
		$scope.outputMessage = "";

		$scope.checkDishes = function ()
		{
			if ($scope.dishes)
			{
				$scope.messageClass = "messageClassOk"
				$scope.boxClass = "boxClassOk"

				var dishesArray = $scope.dishes.split(",");
				var countNonEmpty = 0;

				for (var i = 0; i <= dishesArray.length - 1; i++) 
				{
					if (dishesArray[i])
						countNonEmpty++;
				}
		
				if (countNonEmpty < 4)
					$scope.outputMessage = "Enjoy!";
				else
					$scope.outputMessage = "Too Much!!";
			}
			else
			{
				$scope.messageClass = "messageClassKo"
				$scope.boxClass = "boxClassKo"
				$scope.outputMessage = "Please enter data first";
			}
		};
	};
})();