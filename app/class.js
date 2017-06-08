function classController($scope, studentService) {

  $scope.newStudent = '';

  $scope.class = studentService.getStudents();

  $scope.addStudent = function() {
    if ($scope.newStudent !== '' && !$scope.class.includes($scope.newStudent)) {
      studentService.addStudent($scope.newStudent);
      $scope.newStudent = '';
    }
  };

  $scope.removeStudent = function() {
    studentService.removeStudent(this.student);
  };

}

angular.module('app').controller('classController', classController);