angular.module("app").component("landingComponent", {

   templateUrl: "public/components/landingPageComponent/landingComponent.html",
   controllerAs: "landing",
   controller: landingController,
   bindings: {
      alertdata: '<',
   },
   $canActivate: function ($location, TokenService) {
      var token = TokenService.getToken('token');
      console.log(token);
      TokenService.verifyToken().then(function () {

      });

      return true
   }


});
function landingController($scope, $http, $location) {

   var landing = this;


   // alertbox
   console.log("inside alert");
   $http.get("public/data/landing/myalert.json").success(function (response) {

      $scope.alertdata = response.alertdata;
      console.log("alert---" + response.alertdata);
   });

   $http.get("public/data/landing/myplans.json").success(function (response) {
      // $scope.finalData=response.data;
      // console.log($scope.finalData);
      $scope.completed = response.completed.date;
      $scope.current = response.current.date;
      $scope.future = response.future.date;

   });

   $http.get("public/data/landing/myworklist.json").success(function (response) {
      $scope.messages = response.what;

   });

   $http.get("public/data/landing/myfavourites.json").success(function (response) {

      $scope.locality = response.local.data;
      console.log("fav-----" + $scope.locality);
      $scope.fav = function (value) {
         $scope.locality = response[value].data;
      };

      // var finalJson={};
      // $scope.finalJson=$scope.locality;
   });
};
