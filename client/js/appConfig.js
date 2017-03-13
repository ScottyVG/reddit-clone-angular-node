'use strict';

const appConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise(`/`);
  $stateProvider
  .state(`home`, {
    url: `/`,
    controller: `List`,
    templateUrl: `./views/list.html`,
  })
  .state(`new`, {
    url: `/new`,
    controller: `NewPost`,
    templateUrl: `./views/new.html`,
  })
  .state(`edit`, {
    url: `/edit/:pid`,
    controller: `EditPost`,
    templateUrl: `./views/edit.html`,
  })
  .state(`detail`, {
    url: `/detail/:pid`,
    views: {
      '': {
        controller: `Detail`,
        templateUrl: `./views/detail.html`,
      },
      'comments@detail': {
        controller: `Detail`,
        templateUrl: `./views/comments.html`,
      },
    },
  })
  .state(`login`, {
    url: `/login`,
    controller: `Login`,
    templateUrl: `./views/login.html`,
  });

  $locationProvider.html5Mode(true);
};
