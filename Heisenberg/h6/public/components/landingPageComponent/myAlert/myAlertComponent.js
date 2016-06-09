var app=angular.module("app");
app.component("myAlert",{

  templateUrl:"public/components/landingPageComponent/myAlert/myAlert.html",
  controllerAs:"alert",
  controller: myAlertController,
  bindings:{
alertdata:'<'

  }

});
 function myAlertController($scope,$http,$mdToast) {
  // console.log('inside controller');


  $scope.showToast1 = function() {
    $http.get("public/data/landing/myalert.json").success(function (response) {

       $scope.alertdata =response.alertdata;
      //  console.log(response.alertdata);
      console.log("in toast");
      var toast = $mdToast.simple()
                     .textContent($scope.alertdata[0])
                     .action('close')
                     .position('bottom center')
                     .highlightAction(false);
                  $mdToast.show(toast).then(function(response) {
                     if ( response == 'ok' ) {
                        //alert('You clicked \'OK\'.');
                        $mdToast.hide();
                     }
                  });
        //  $mdToast.show(
        //     $mdToast.simple()
        //        .textContent($scope.alertdata[0])
        //        .hideDelay(3000)
        //        .position('bottom center')
        //  );


     });

              };


}
//
// function myAlertController(){
//   var alert=this;
//   console.log(alert);
// }
