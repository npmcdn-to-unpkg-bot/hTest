angular.module('app').controller('travelPreferenceController', function ($scope, $location, $mdDialog) {


    $scope.go = function () {
        $location.path('/Travelbooking');
        $mdDialog.hide();
    }

    $scope.typeOfTravel = 'oneWay';
})