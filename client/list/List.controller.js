/**
 * LIST CONTROLLER FILE
 */
'use strict';

const List = function($scope, $state, Data) {
  $scope.vm = {};
  $scope.vm.blogs = [];
  $scope.vm.search = '';
  $scope.vm.selected = 'votes';

  $scope.upVote = function() {
    this.blog.votes += 1;
    Data.Posts.update({
      id: this.blog.id
    }, {
      votes: this.blog.votes
    });
  };

  $scope.downVote = function() {
    this.blog.votes -= 1;
    Data.Posts.update({
      id: this.blog.id
    }, {
      votes: this.blog.votes
    });
  };

  $scope.vm.blogs = Data.Posts.query();
};
