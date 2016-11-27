'use strict';

angular.module('redditCloneApp', ['angularMoment', 'ngAnimate', 'ui.router', 'ngResource', 'ngCookies'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$resourceProvider', appConfig])
  .controller('List', ['$scope', '$state', 'Data', List])
  .controller('NewPost', ['$scope', '$state', 'Data', NewPost])
  .controller('EditPost', ['$scope', '$state', '$stateParams', 'Data', EditPost])
  .controller('Detail', ['$scope', '$state', '$stateParams', 'Data', Detail])
  .controller('Login', ['$scope', '$state', 'Data', Login])
  .factory('Data', ['$resource', '$http', '$cookies', Data])
