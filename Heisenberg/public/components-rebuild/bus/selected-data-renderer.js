var app = angular.module("app").component("busSelectedDataRenderer", {
    templateUrl: "./public/components-rebuild/bus/selected-data-renderer.html",
    controllerAs: "busSelectedDataRenderer",
    controller: busSelectedDataRendererCtrl,
    bindings: {
      "selectedMetaData": "<",
      "deleteSelectedbusChild":"&",
      "editSelectedbusChild":"&",
      "index":"@"
    }
});

function busSelectedDataRendererCtrl()
{
  var busSelectedDataRenderer=this;
  console.log("busSelectedDataRenderer^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log(busSelectedDataRenderer.selectedMetaData);
  busSelectedDataRenderer.serviceLogo=busSelectedDataRenderer.selectedMetaData.image;
  busSelectedDataRenderer.serviceDetails=
  {
    "heading":busSelectedDataRenderer.selectedMetaData.companyName,
    "description":
    {
      "busID": busSelectedDataRenderer.selectedMetaData.busID,
      "seatNumber": busSelectedDataRenderer.selectedMetaData.seatNumber
    }
  }

  busSelectedDataRenderer.beginDateTime=
  {
    "startTime": busSelectedDataRenderer.selectedMetaData.travelStartTime,
    "startDate": busSelectedDataRenderer.selectedMetaData.travelStartDate,
    "description":
    { "source":busSelectedDataRenderer.selectedMetaData.sourceAirport
    }

  }
  busSelectedDataRenderer.endDateTime=
 {
   "endTime":busSelectedDataRenderer.selectedMetaData.travelEndDate,
   "endDate":busSelectedDataRenderer.selectedMetaData.travelEndTime,
    "description": { "destination":busSelectedDataRenderer.selectedMetaData.destinationAirport
    }
 }

 busSelectedDataRenderer.price=
{
  "price": busSelectedDataRenderer.selectedMetaData.price
}
busSelectedDataRenderer.extraDescription=busSelectedDataRenderer.selectedMetaData.preferences;

busSelectedDataRenderer.deletebusChild=function()
{
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("inside deletebusChild");
  console.log(busSelectedDataRenderer.index);
  busSelectedDataRenderer.deleteSelectedbusChild({index:busSelectedDataRenderer.index})
}
busSelectedDataRenderer.editbusChild=function()
{
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("inside edit busChild");
  console.log(busSelectedDataRenderer.index);
  console.log(busSelectedDataRenderer.editSelectedbusChild);
  busSelectedDataRenderer.editSelectedbusChild({"index":busSelectedDataRenderer.index});
}

  console.log(busSelectedDataRenderer);

}
