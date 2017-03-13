'use strict';

const EditPost = function($scope, $state, $stateParams, Data) {
  const pid = $stateParams.pid;
  const session = Data.getSession();

  $scope.vm = {};
  $scope.vm.form = {};
  $scope.vm.error = false;
  $scope.vm.formSubmitted = false;
  $scope.vm.form = Data.Posts.get({ pid });

  const cleanup = () => {
    $scope.vm.form = {};
    $scope.vm.error = false;
    $scope.postForm.$setPristine();
    $scope.vm.formSubmitted = false;
    $state.go(`detail`, { pid },
      { location: true, inherit: false, relative: $state });
  };

  $scope.editPost = function() {
    if (session) {
      delete $scope.vm.form.name;
      $scope.vm.formSubmitted = true;
      if ($scope.postForm.$valid && $scope.postForm.$dirty) {
        $scope.vm.form.user_id = session.user.id;
        Data.Posts.update({ pid }, $scope.vm.form, cleanup);
      }
      else if ($scope.postForm.$valid) { $state.go(`home`); }
    }
    else {
      $scope.vm.error = true;
    }
  };
};
