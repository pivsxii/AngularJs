(function () {
	"use strict";

	angular.module('public')
	.controller('UserPrefController', UserPrefController);

	UserPrefController.$inject = ['UserService'];
	function UserPrefController(UserService)
	{
		var $ctrl = this;

		// Try to retrieve info about the user
		$ctrl.data = UserService.getUserInfo();
	}

})();
