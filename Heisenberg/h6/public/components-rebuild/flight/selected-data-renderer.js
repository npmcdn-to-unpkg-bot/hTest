var app = angular.module("app").component("flightSelectedDataRenderer", {
    templateUrl: "./public/components-rebuild/flight/selected-data-renderer.html",
    controllerAs: "flightSelectedDataRenderer",
    controller: flightSelectedDataRendererCtrl,
    bindings: {
      "selectedMetaData": "<",
      "deleteSelectedFlightChild":"&",
      "editSelectedFlightChild":"&",
      "index":"@"
    }
});

function flightSelectedDataRendererCtrl()
{
  var flightSelectedDataRenderer=this;
  console.log("flightSelectedDataRenderer^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log(flightSelectedDataRenderer.selectedMetaData);
  flightSelectedDataRenderer.serviceLogo=flightSelectedDataRenderer.selectedMetaData.image;
  flightSelectedDataRenderer.serviceDetails=
  {
    "heading":flightSelectedDataRenderer.selectedMetaData.companyName,
    "description":
    {
      "flightID": flightSelectedDataRenderer.selectedMetaData.flightID,
      "seatNumber": flightSelectedDataRenderer.selectedMetaData.seatNumber
    }
  }

  flightSelectedDataRenderer.beginDateTime=
  {
    "startTime": flightSelectedDataRenderer.selectedMetaData.travelStartTime,
    "startDate": flightSelectedDataRenderer.selectedMetaData.travelStartDate,
    "description":
    { "source":flightSelectedDataRenderer.selectedMetaData.sourceAirport
    }

  }
  flightSelectedDataRenderer.endDateTime=
 {
   "endTime":flightSelectedDataRenderer.selectedMetaData.travelEndDate,
   "endDate":flightSelectedDataRenderer.selectedMetaData.travelEndTime,
    "description": { "destination":flightSelectedDataRenderer.selectedMetaData.destinationAirport
    }
 }

 flightSelectedDataRenderer.price=
{
  "price": flightSelectedDataRenderer.selectedMetaData.price
}
flightSelectedDataRenderer.extraDescription=flightSelectedDataRenderer.selectedMetaData.preferences;

flightSelectedDataRenderer.deleteFlightChild=function()
{
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("inside deleteFlightChild");
  console.log(flightSelectedDataRenderer.index);
  flightSelectedDataRenderer.deleteSelectedFlightChild({index:flightSelectedDataRenderer.index})
}
flightSelectedDataRenderer.editFlightChild=function()
{
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("inside edit FlightChild");
  console.log(flightSelectedDataRenderer.index);
  console.log(flightSelectedDataRenderer.editSelectedFlightChild);
  flightSelectedDataRenderer.editSelectedFlightChild({"index":flightSelectedDataRenderer.index});
}

  console.log(flightSelectedDataRenderer);

}
