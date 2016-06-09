var app=angular.module("app");
app.component('trainSearchResultsComponent',{
  templateUrl:'public/components/trainSearchResultsParentComponent/trainSearchResultsComponent/trainSearchResultsComponent.html',
  controllerAs:'trainSearchResults',
  controller:trainSearchResultsController

});
function trainSearchResultsController($http,$filter) {
  trainSearchResults=this;
  trainSearchResults.myorder="before";
  trainSearchResults.range=300;
  trainSearchResults.check=false;
  trainSearchResults.sortIcon=true;

  $http.get('public/data/trainInfo.json').success(function(data){

      trainSearchResults.list=data.trainResult;
      trainSearchResults.data=trainSearchResults.list;
      trainSearchResults.filters=data.filters;
      trainSearchResults.previousData=trainSearchResults.data;
  });





  trainSearchResults.reset=function() {
    console.log("im in reset");
    trainSearchResults.check=false;
    trainSearchResults.range=300;
    trainSearchResults.data=trainSearchResults.list;
    trainSearchResults.previousData=trainSearchResults.data;

  };

  trainSearchResults.sort=function(time){
    // console.log("im in sort"+time);

    trainSearchResults.myorder=time;
    //console.log("sort aaa"+trainSearchResults.myorder);
  };

  trainSearchResults.selectedFilters={};
  trainSearchResults.reflectValue=function(keyString,value, id){

    console.log("in reflectValue");
    // console.log(id);
    // console.log("in value : "+value);
    trainSearchResults.selectedFilters[id]=value;
    selectedFilters=trainSearchResults.selectedFilters;
    var afterFilter=[];
    count=0;
    for (variable in selectedFilters) {
      if(selectedFilters[variable].length==0){
        count++;
      }
    }
    if(count==Object.keys(selectedFilters).length ){
        trainSearchResults.data=trainSearchResults.previousData;
        count=0;
    }
    else{
       trainSearchResults.data=trainSearchResults.previousData;
       var array=trainSearchResults.data;

       for(train of array) {
         countids=0;
         for (id in selectedFilters) {
           countvalues=0;
           for(filter in selectedFilters[id]){
             if(id==="price"){
               if(train[id]>=selectedFilters[id][0] && train[id]<=selectedFilters[id][1]){
                 countvalues++;
               }
             }
             else if (id==="arrival_time" || id==="departure_time") {

               if (parseInt(train[id].substring(0,2))>=selectedFilters[id][0] && parseInt(train[id].substring(0,2))<=selectedFilters[id][1]) {
                  countvalues++;
               }
             }
             else{
               for (station of train[id]) {
                 if(station===selectedFilters[id][filter]){
                   countvalues++;
                 }
               }
             }

           }
           if(countvalues==selectedFilters[id].length){

             countids++;
           }
         }

         if(countids==Object.keys(selectedFilters).length){

           afterFilter.push(train);
         }
       }
       trainSearchResults.data=afterFilter;
      //  trainSearchResults.previousData=trainSearchResults.data;
   }
  }
};
