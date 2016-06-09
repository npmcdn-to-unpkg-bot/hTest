angular.module("app").controller('dialogController', function ($scope, $location, $mdDialog, $mdMedia, mainService) {
    console.log("im in controller");

    dialog = this;
    $scope.typeOfTravel = 0;

    $scope.go = function () {
        console.log("i am inside go of landing page");
        console.log($scope);
        mainService.travelPlanInitializer($scope.typeOfTravel);
        $location.path('/travelBooking');

        $mdDialog.hide();
    };

    $scope.cancel = function () {

        $mdDialog.hide();
    };

});
