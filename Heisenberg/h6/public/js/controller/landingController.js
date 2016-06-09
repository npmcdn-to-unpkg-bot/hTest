angular.module("app").controller("con",function ($scope, $filter, $http, $q, $location, $mdDialog, $mdMedia) {
    // -------------------------------

    $scope.dayFormat = "d";

    // To select a single date, make sure the ngModel is not an array.
    $scope.selectedDate = null;

    // If you want multi-date select, initialize it as an array.
    $scope.selectedDate = [];

    $scope.firstDayOfWeek = 0; // First day of the week, 0 for Sunday, 1 for Monday, etc.
    $scope.setDirection = function (direction) {
        $scope.direction = direction;
        $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    $scope.dayClick = function (date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };

    $scope.prevMonth = function (data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function (data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;
    $scope.setDayContent = function (date) {

        // You would inject any HTML you wanted for
        // that particular date here.
        return "<p></p>";

        // You could also use an $http function directly.
        return $http.get("/some/external/api");

        // You could also use a promise.
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve("<p></p>");
        }, 1000);
        return deferred.promise;

    };
    // ----------------------------------
    var url = "myworklist.json";

    $http.get("public/data/landing/myworklist.json").success(function (response) {
        $scope.messages = response;
        console.log(response);

    });
    $http.get("public/data/landing/myplans.json").success(function (response) {
        $scope.completed = response.completed.date;
        $scope.current = response.current.date;
        $scope.future = response.future.date;
        console.log("res  " + $scope.completed);
    });

    $http.get("public/data/landing/alert.json").success(function (response) {
        $scope.array2 = response;
        console.log(response);
    });

    $http.get("public/data/landing/myfavourites.json").success(function (response) {
        $scope.fav=function(locality){
          $scope.localit = response[locality].data;
        }
        $scope.localit = response.local.data;
    });

    $scope.go = function (path) {
        console.log("hello");
        $location.path(path);
    }


    //code for intermediate page dialog


    $scope.showAdvanced = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        console.log("1");
        $mdDialog.show({
                controller: DialogController,
                /* templateUrl: 'dialog1.tmpl.html',*/
                templateUrl: 'views/HTML/travelPreferenceDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen

            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';

            }, function () {
                $scope.status = 'You cancelled the dialog.';

            });

        $scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function (wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });

    };


});


function DialogController($scope, $mdDialog) {

    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.hide();
    };

    $scope.answer = function (answer) {

        $mdDialog.hide(answer);
    };
}
