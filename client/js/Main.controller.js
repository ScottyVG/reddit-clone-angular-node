'use strict';

const Main = function($rootScope, $scope, $state, $cookies, Data) {
  $scope.vm = {};

  $scope.logout = function() {
    Data.logout()
    .then(() => {
      $rootScope.session = $cookies.get(`session`);
      $state.go(`home`, {}, { reload: true, inherit: false, notify: true });
    });
  };
};
