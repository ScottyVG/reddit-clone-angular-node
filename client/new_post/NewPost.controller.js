/**
 * NEW POST CONTROLLER FILE
 */
'use strict';

const NewPost = function($scope, $state, Data) {
  const session = Data.hasSession();

  $scope.vm = {};
  $scope.vm.form = {};
  $scope.vm.error = false;
  $scope.vm.formSubmitted = false;

  const cleanup = () => {
    $scope.vm.form = {};
    $scope.vm.error = false;
    $scope.postForm.$setPristine();
    $scope.vm.formSubmitted = false;
    $state.go('home');
  };

  $scope.newPost = function() {
    if (session) {
      $scope.vm.formSubmitted = true;
      if ($scope.postForm.$valid && $scope.postForm.$dirty) {
        const post = {
          user_id: session.user.id,
          description: $scope.vm.form.description,
          image: $scope.vm.form.image,
          title: $scope.vm.form.title,
          votes: 0,
        };

        Data.Posts.save(post, cleanup);
      }
    } else {
      $scope.vm.error = true;
    }
  };
};
