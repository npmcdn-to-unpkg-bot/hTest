/**
 * Created by user on 02-05-2016.
 */
angular.module('app').controller("itineraryController",function($scope) {
   var travelPlanData=new Object();
   var sequence=[];
   var nodesData=new Object();
   var edgesData=new Object();
   var nodeObj=new Object();
   var edgeObj=new Object();
   var finalArray=[];

        $http.get('public/data/travelPlan.json').success(function(data) {
         $scope.travelPlanData=data;
          console.log($scope.travelPlanData);
          fun();
     });

 var fun=function(){
      sequence=$scope.travelPlanData['sequence'];
      console.log(sequence);

      nodesData=$scope.travelPlanData['nodes'];
      console.log(nodesData);

      edgesData=$scope.travelPlanData['edges'];
      console.log(edgesData);

     for(var i=0;i<sequence.length;i++){
         console.log('hello '+sequence[i].substr(0,4));

         if(sequence[i].substr(0,4)=='node') {
             nodeObj = nodesData[sequence[i]];
             finalArray.push(nodeObj);
         }
         else if(sequence[i].substr(0,4)=='edge'){
             edgeObj = edgesData[sequence[i]];
             finalArray.push(edgeObj);
         }

     }

     console.log(finalArray);
     $scope.jsonData=finalArray;

 }

});
