/**
 * DETAIL CONTROLLER FILE
 */
'use strict';

const Detail = function($scope, $state, $stateParams, Data) {
  const id = Number($stateParams.id);
  const session = Data.hasSession();

  $scope.vm = {};
  $scope.vm.form = {};
  $scope.vm.error = false;
  $scope.vm.formSubmitted = false;
  $scope.vm.showComments = false;
  $scope.vm.blog = Data.Posts.get({
    id
  });
  $scope.vm.comments = Data.PostComments.query({
    id
  });

  $scope.delete = () => {
    if (session) {
      Data.Posts.delete({
        id
      });
      $state.go(`home`);
    } else {
      $scope.vm.error = true;
    }
  };

  const cleanup = () => {
    $scope.vm.form = {};
    $scope.vm.error = false;
    $scope.commentForm.$setPristine();
    $scope.vm.formSubmitted = false;
    $scope.vm.comments = Data.PostComments.query({
      id
    });
  };

  $scope.newComment = function() {
    if (session) {
      $scope.vm.formSubmitted = true;
      if ($scope.commentForm.$valid && $scope.commentForm.$dirty) {
        const comment = {
          user_id: session.user.id,
          post_id: id,
          body: $scope.vm.form.body,
        };
        Data.Comments.save(comment, cleanup);
      }
    } else {
      $scope.vm.error = true;
    }
  };
};
