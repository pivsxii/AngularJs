(function () {
	"use strict";

	angular.module('public')
	.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['MenuService', 'UserService'];
	function SignUpController(MenuService, UserService)
	{
		var $ctrl = this;
		$ctrl.submitted = false;
		$ctrl.ok = false;
		$ctrl.ko = false;

		$ctrl.submit = function ()
		{
			$ctrl.submitted = true;
			if ($ctrl.info.menuChoice)
				$ctrl.info.menuChoice = $ctrl.info.menuChoice.toUpperCase();
			
			// Try to retrieve the dish 
			MenuService.getSingleItem($ctrl.info.menuChoice).then(
				function (data) 
				{
					$ctrl.ok = true;
					$ctrl.ko = false;
					$ctrl.info.dish = data;

					UserService.saveUserInfo($ctrl.info);
				},
				function ()
				{
					$ctrl.ok = false;
					$ctrl.ko = true;
				}
			);
		};
	}

})();
