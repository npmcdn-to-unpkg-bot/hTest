angular.module("app")
    .controller('travelModeController', function ($http, $rootScope,$timeout, $q, $scope) {
      //Time Picker Start
      this.showTimePicker = function(ev) {
        $mdpTimePicker($scope.currentTime, {
          targetEvent: ev
        }).then(function(selectedDate) {
          $scope.currentTime = selectedDate;
        });
      }

      //Time Picker End
      $http.get('public/data/configjsons/nodemaster.json').success(function(data){
          $scope.nodeMaster=data;
      });

       $http.get('public/data/travelplan.json').success(function(data){
          //$scope.currentNode= data.node.node1;
      });

      $scope.myDate = new Date();
      $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth(),
      $scope.myDate.getDate());
    });
