var app=angular.module("app");

app.component("myFavourite",{

  templateUrl:"public/components/landingPageComponent/myFavourite/myFavourite.html",
  controllerAs:'favourite',
  controller: myFavouriteController,
  bindings:{
    locality:'<',
    fav:'&'
  }

});

function myFavouriteController($http){
  // $scope.fav=function(locality){
  //   $scope.locality = response[locality].data;

  //};
  var favourite =this;
  $http.get("public/data/landing/myFavourites.config.json").success(function (response) {

     favourite.favouriteDisplayName = response.headerDisplayName;

   });

  // $http.get("public/data/landing/myfavourites.json").success(function (response) {
  //
  //    $scope.locality = response.local.data;
  //    $scope.fav=function(locality){
  //      $scope.locality = response[locality].data;
  //    };
  //   console.log(response);
  //   var finalJson={};
    // $scope.finalJson=$scope.locality;
  // });
}
