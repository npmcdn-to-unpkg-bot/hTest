angular.module('app').component("hotelSearchResultsParentComponent",{
	templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsParentComponent.html',
	controllerAs:"hotelSearchResultsParent",
	controller: hotelSearchResultsParentController
});
function hotelSearchResultsParentController($http,$rootScope, $state){
  var hotelSearchResultsParent=this;

  hotelSearchResultsParent.call= function(){
    $state.go('hotelSearchResults');
  };

  hotelSearchResultsParent.travelPlanObject = [
    { type:"location",
    cityName:"Bangalore"
  },
  {
    type:"transit",
    childServices:
    {
      booking:{
        requested:{mode:"flight"}
      }
    }
  },
  {
    type:"location",
    cityName:"Delhi"
  }
  ];

  hotelSearchResultsParent.fillSelectedData= function(){

  };

  // hotelSearchResultsParent.currentnodeedge = function (id, type) {
  // console.log(id);
  // console.log(type);
  // if(type=='stay') $state.go('hotelSearchResults');
  // else if(type=='flight') $state.go('flightSearchResults');
  // else if(type=='train')  $state.go('trainSearchResults');
  // };

  // hotelSearchResultsParent.currentnodeedge("ssd", 'train');
}
