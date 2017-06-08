function groupController($scope, studentService) {

  $scope.groupSize = 3;

  $scope.classSize = studentService.classSize;

  $scope.groups = studentService.getGroups($scope.groupSize);

  $scope.reshuffle = function() {
    studentService.reshuffle();
    $scope.groups = studentService.getGroups($scope.groupSize);
  };

  $scope.$watch(
    function() {
      return studentService.classSize;
    }, 
    function() {
      // Refresh data
      $scope.classSize = studentService.classSize;
      $scope.groups = studentService.getGroups($scope.groupSize);
    }
  );

}

angular.module('app').controller('groupController', groupController);