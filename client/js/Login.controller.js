/**
 * LOGIN CONTROLLER FILE
 */
'use strict';

const Login = function($scope, $state, Data) {
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
    $state.go('home');
  };

  $scope.login = function() {
    $scope.vm.loginSubmitted = true;
    if ($scope.loginForm.$valid && $scope.loginForm.$dirty) {
      Data.login($scope.vm.loginForm)
        .then(() => {
          cleanup();
        })
        .catch(() => {
          $scope.vm.error = true;
        });
    }
  };

  $scope.join = function() {
    $scope.vm.joinSubmitted = true;
    if ($scope.joinForm.$valid && $scope.joinForm.$dirty) {
      Data.join($scope.vm.joinForm)
        .then(() => {
          cleanup();
        })
        .catch(() => {
          $scope.vm.error = true;
        });
    }
  };
};
