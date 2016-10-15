(function () {
  'use strict';

  var app = angular.module('MenuApp');
  app.config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider)
  {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', 
    {
      url: '/',
      templateUrl: 'src/views/home.html'
    })

    // Categories page
    .state('categories', 
    {
      url: '/categories',
      templateUrl: 'src/views/categories.html',
      controller: 'CategoriesCtrl as ctrl',
      controllerAs : 'ctrl',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) 
          {
            return MenuDataService.getAllCategories();
          }
        ]
      }
    })

    // Singular category page
    .state('items', 
    {
      url: '/items/{shortName}',
      templateUrl: 'src/views/items.html',
      controller: 'ItemsCtrl as ctrl',
      controllerAs : 'ctrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) 
          {
            return MenuDataService.getItemsForCategory($stateParams.shortName);
          }
        ]
      }
    });

  }

})();
