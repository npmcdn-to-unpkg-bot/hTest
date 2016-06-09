angular.module('app')
 .component('selectedDataDisplayComponent',{
   controller: selectedDataDisplayComponentController,
   controllerAs: "selectedDataDisplayComponent",
   templateUrl: "public/components-rebuild/child-selected-data-renderer/selected-data-display-component/selected-data-display-component.html",

   bindings: {
     serviceLogo:'<',
     serviceDetails:'<',
     beginDateTime:'<',
     endDateTime:'<',
     price:'<',
     extraDescription:'<',
     deleteChild:'&',
     editChild:'&'
   }
 });

 function selectedDataDisplayComponentController() {
   var selectedDataDisplayComponent=this;
  //   selectedDataDisplayComponent.serviceLogo="public/assets/images/taj1.png";
  //   selectedDataDisplayComponent.serviceDetails={
  //    "heading":"JW Mariott",
  //      "roomType": "Deluxe",
  //      "location": "hotel's exact address",
  //  }
   //
  //   selectedDataDisplayComponent.beginDateTime=
  //  {
  //    "startTime":  "2:00 PM",
  //    "startDate": "4/30/2016",
  //    "description":"",
  //  }
   //
  //   selectedDataDisplayComponent.endDateTime=
  //  {
  //    "endTime":"3:00 PM",
  //    "endDate":"5/01/2016",
  //     "description":"",
  //  }
   //
   //
  //   selectedDataDisplayComponent.price=
  //  {
  //    "price": "9000 INR"
  //  }

  // selectedDataDisplayComponent.modeKeyArray=[];
  // selectedDataDisplayComponent.seatKeyArray=[];
  // console.log('object is: '+selectedDataDisplayComponent.modeOrSeatKeyObject);
  // selectedDataDisplayComponent.$onInit = function() {
  //        console.log("Inside on init")
  //        console.log(selectedDataDisplayComponent.modeValue);
  //        selectedDataDisplayComponent.modeKeyArray=selectedDataDisplayComponent.modeKey({type:selectedDataDisplayComponent.modeValue});
  //        selectedDataDisplayComponent.seatKeyArray=selectedDataDisplayComponent.seatKey({value:selectedDataDisplayComponent.modeValue});
  //        console.log('array of key '+selectedDataDisplayComponent.modeKeyArray);
  //        console.log('seat key array '+selectedDataDisplayComponent.seatKeyArray);
  //     };


 }
