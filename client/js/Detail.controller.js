'use strict';

const Detail = function($scope, $state, $stateParams, Data) {
  const pid = Number($stateParams.pid);
  const session = Data.getSession();

  $scope.vm = {};
  $scope.vm.form = {};
  $scope.vm.error = false;
  $scope.vm.formSubmitted = false;
  $scope.vm.showComments = false;
  $scope.vm.blog = Data.Posts.get({ pid });
  $scope.vm.comments = Data.PostComments.query({ pid });

  $scope.delete = () => {
    if (session) {
      Data.Posts.delete({ pid });
      $state.go(`home`);
    }
    else {
      $scope.vm.error = true;
    }
  };

  const cleanup = () => {
    $scope.vm.form = {};
    $scope.vm.error = false;
    $scope.commentForm.$setPristine();
    $scope.vm.formSubmitted = false;
    $scope.vm.comments = Data.PostComments.query({ pid });
  };

  $scope.newComment = function() {
    if (session) {
      $scope.vm.formSubmitted = true;
      if ($scope.commentForm.$valid && $scope.commentForm.$dirty) {
        const comment = {
          user_id: session.user.id,
          post_id: pid,
          body: $scope.vm.form.body,
        };
        Data.Comments.save(comment, cleanup);
      }
    }
    else {
      $scope.vm.error = true;
    }
  };
};
