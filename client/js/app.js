'use strict';

angular.module(`redditApp`,
  [`angularMoment`, `ngAnimate`, `ui.router`, `ngResource`, `ngCookies`])
.factory(`Data`, [`$resource`, `$http`, `$cookies`, Data])
.controller(`Main`, [`$rootScope`, `$scope`, `$state`, `$cookies`, `Data`, Main])
.controller(`List`, [`$scope`, `$state`, `Data`, List])
.controller(`NewPost`, [`$scope`, `$state`, `Data`, NewPost])
.controller(`EditPost`, [`$scope`, `$state`, `$stateParams`, `Data`, EditPost])
.controller(`Detail`, [`$scope`, `$state`, `$stateParams`, `Data`, Detail])
.controller(`Login`, [`$rootScope`, `$scope`, `$state`, `$cookies`, `Data`, Login])
.config([`$stateProvider`, `$urlRouterProvider`, `$locationProvider`, appConfig]);

// initialize Materialize components
$(document).ready(() => {
  $(`.button-collapse`).sideNav();
  $(`.tooltipped`).tooltip({ delay: 0 });
  $(`select`).material_select();
});
