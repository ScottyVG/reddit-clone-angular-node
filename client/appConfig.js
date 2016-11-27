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
      templateUrl: './list/list.html',
    })
    .state('new', {
      url: '/new',
      controller: 'NewPost',
      templateUrl: './new_post/new.html',
    })
    .state('edit', {
      url: '/edit/:id',
      controller: 'EditPost',
      templateUrl: './edit_post/edit.html',
    })
    .state('detail', {
      url: '/detail/:id',
      views: {
        '': {
          controller: 'Detail',
          templateUrl: './detail/detail.html',
        },
        'comments@detail': {
          controller: 'Detail',
          templateUrl: './detail/comments.html',
        },
      },
    })
    .state('login', {
      url: '/login',
      controller: 'Login',
      templateUrl: './login/login.html',
    });

  $locationProvider.html5Mode(true);
};
