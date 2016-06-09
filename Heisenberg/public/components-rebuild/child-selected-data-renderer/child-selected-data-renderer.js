/**
 * Created by user on 12-05-2016.
 */

angular.module('app')
    .component('childSelectedDataRendererComponent',{
        templateUrl:'./public/components-rebuild/child-selected-data-renderer/child-selected-data-renderer.html',

        controllerAs:'childSelectedDataRendererComponent',
        bindings:{

            // selectedData:'<'
        },
        controller: childSelectedDataRendererController
    });

function childSelectedDataRendererController($scope){
      var childSelectedDataRendererComponent=this;



      childSelectedDataRendererComponent.serviceLogo="public/assets/images/taj1.png";
      childSelectedDataRendererComponent.serviceDetails={
       "heading":"JW Mariott",
       "description":
       {
         "roomType": "Deluxe",
         "location": "hotel's exact address"
       }
     }

      childSelectedDataRendererComponent.beginDateTime=
     {
       "startTime":  "2:00 PM",
       "startDate": "4/30/2016",
       "description":"",
     }

      childSelectedDataRendererComponent.endDateTime=
     {
       "endTime":"3:00 PM",
       "endDate":"5/01/2016",
        "description":"",
     }


      childSelectedDataRendererComponent.price=
     {
       "price": "9000 INR"
     }









     childSelectedDataRendererComponent.serviceLogo1="public/assets/images/localBus.png";
     childSelectedDataRendererComponent.serviceDetails1={
      "heading":"red bus",
      "description":
      {
        "busNumber": "AB 327014",
        "busType": "AC bus",
        "seatsType": "sleeper"
      }
    }

     childSelectedDataRendererComponent.beginDateTime1=
    {
      "startTime":  "2:00 PM",
      "startDate": "4/30/2016",
      "description":"",
    }

     childSelectedDataRendererComponent.endDateTime1=
    {
      "endTime":"3:00 PM",
      "endDate":"5/01/2016",
       "description":"",
    }


     childSelectedDataRendererComponent.price1=
    {
      "price": "11000 INR"
    }
    //  childSelectedDataRendererComponent.getModePref(type);
      // console.log("Inside child services component"+this);
      // console.log(this,$scope);
      // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      // console.log(childSelectedDataRendererComponent.value);
      // this.modePref = function(type) {
      //   console.log('type value: '+type);
      //   return this.getModePref({type:type});
      // };
      //
      // this.seatPref=function(value){
      //    return this.getSeatPref({value:value});
      // }
}
