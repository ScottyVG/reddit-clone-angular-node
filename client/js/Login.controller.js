'use strict';

const Login = function($rootScope, $scope, $state, $cookies, Data) {
  $scope.vm = {};
  $scope.vm.loginForm = {};
  $scope.vm.loginSubmitted = false;
  $scope.vm.joinForm = {};
  $scope.vm.joinSubmitted = false;
  $scope.vm.error = false;

  const cleanup = () => {
    $scope.vm.loginForm = {};
    $scope.vm.loginSubmitted = false;
    $scope.vm.joinForm = {};
    $scope.vm.joinSubmitted = false;
    $scope.vm.error = false;
    $scope.loginForm.$setPristine();
    $scope.joinForm.$setPristine();
    $state.go(`home`, {}, { reload: true, inherit: false, notify: true });
  };

  $scope.login = function() {
    $scope.vm.loginSubmitted = true;
    if ($scope.loginForm.$valid && $scope.loginForm.$dirty) {
      Data.login($scope.vm.loginForm)
      .then(() => {
        $rootScope.session = $cookies.get(`session`);
        cleanup();
      })
      .catch(() => { $scope.vm.error = true; });
    }
  };

  $scope.join = function() {
    $scope.vm.joinSubmitted = true;
    if ($scope.joinForm.$valid && $scope.joinForm.$dirty) {
      Data.join($scope.vm.joinForm)
      .then(() => { cleanup(); })
      .catch(() => { $scope.vm.error = true; });
    }
  };
};
