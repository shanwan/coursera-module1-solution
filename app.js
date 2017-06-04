(function () {
  'use strict';

  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    var maxItems = 3;
    $scope.lunchInput = '';
    $scope.sayMessage = '';
    $scope.checkList = function () {
      console.log($scope.lunchInput.length);
      if ($scope.lunchInput.length === 0) {
        $scope.sayMessage = 'Pls enter data first.'
      } else if ($scope.lunchInput.split(',').length > maxItems) {
        $scope.sayMessage = 'Too much!'
      } else if ($scope.lunchInput.split(',').length <= maxItems){
        $scope.sayMessage = 'Enjoy!'
      }
    }
  }
})();
