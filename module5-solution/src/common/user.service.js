(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() 
{
  var service = this;
  service.info = null;

  service.getUserInfo = function () 
  {
    return service.info;
  };

  service.saveUserInfo = function (userInfo) 
  {
    service.info = userInfo;
  }
}

})();
