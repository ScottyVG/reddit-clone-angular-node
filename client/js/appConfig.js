/**
 * APP CONFIG FILE
 */
'use strict';

const appConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'List',
      templateUrl: './partials/list.html',
    })
    .state('new', {
      url: '/new',
      controller: 'NewPost',
      templateUrl: './partials/new.html',
    })
    .state('edit', {
      url: '/edit/:id',
      controller: 'EditPost',
      templateUrl: './partials/edit.html',
    })
    .state('detail', {
      url: '/detail/:id',
      views: {
        '': {
          controller: 'Detail',
          templateUrl: './partials/detail.html',
        },
        'comments@detail': {
          controller: 'Detail',
          templateUrl: './partials/comments.html',
        },
      },
    })
    .state('login', {
      url: '/login',
      controller: 'Login',
      templateUrl: './partials/login.html',
    });

  $locationProvider.html5Mode(true);
};
