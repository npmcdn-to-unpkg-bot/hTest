angular.module('app').controller('flightSearchResultController',function($scope,$http) {

  $scope.flightName = ["SpiceJet", "IndiGo", "JetAirways"]

  //ng-Click function
  $scope.selectFlight = function(s){
    console.log(s);
    console.log("hi");
  }

  $http.get("/public/data/flightSearchResults.json").success(function(results){
    console.log(results);
    $scope.flightSearchResults=results.seachResults;
    $scope.filters=results.filters;
  });
});
