(function() {

  var app = angular.module('githubViewer');

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    }
    var onRepos = function(data) {
      $scope.repos = data;
    }
    var onError = function(reason) {
      //$scope.error = "Error Happens!";
      alert(reason.data);
    }

    //$scope.username = $routeParams.username;
    $scope.repoSortOrder = 'name';
    github.getUser($routeParams.username).then(onUserComplete, onError);

  };


  app.controller("UserController", UserController);
}());