var app = angular.module("app").component("trainSelectedDataRenderer", {
    templateUrl: "./public/components-rebuild/train/selected-data-renderer.html",
    controllerAs: "trainSelectedDataRenderer",
    controller: trainSelectedDataRendererCtrl,
    bindings: {
      "selectedMetaData": "<",
      "deleteSelectedtrainChild":"&",
      "editSelectedtrainChild":"&",
      "index":"@"
    }
});

function trainSelectedDataRendererCtrl()
{
  var trainSelectedDataRenderer=this;
  console.log("trainSelectedDataRenderer^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log(trainSelectedDataRenderer.selectedMetaData);
  trainSelectedDataRenderer.serviceLogo=trainSelectedDataRenderer.selectedMetaData.image;
  trainSelectedDataRenderer.serviceDetails=
  {
    "heading":trainSelectedDataRenderer.selectedMetaData.companyName,
    "description":
    {
      "trainID": trainSelectedDataRenderer.selectedMetaData.trainID,
      "seatNumber": trainSelectedDataRenderer.selectedMetaData.seatNumber
    }
  }

  trainSelectedDataRenderer.beginDateTime=
  {
    "startTime": trainSelectedDataRenderer.selectedMetaData.travelStartTime,
    "startDate": trainSelectedDataRenderer.selectedMetaData.travelStartDate,
    "description":
    { "source":trainSelectedDataRenderer.selectedMetaData.sourceAirport
    }

  }
  trainSelectedDataRenderer.endDateTime=
 {
   "endTime":trainSelectedDataRenderer.selectedMetaData.travelEndDate,
   "endDate":trainSelectedDataRenderer.selectedMetaData.travelEndTime,
    "description": { "destination":trainSelectedDataRenderer.selectedMetaData.destinationAirport
    }
 }

 trainSelectedDataRenderer.price=
{
  "price": trainSelectedDataRenderer.selectedMetaData.price
}
trainSelectedDataRenderer.extraDescription=trainSelectedDataRenderer.selectedMetaData.preferences;

trainSelectedDataRenderer.deletetrainChild=function()
{
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("inside deletetrainChild");
  console.log(trainSelectedDataRenderer.index);
  trainSelectedDataRenderer.deleteSelectedtrainChild({index:trainSelectedDataRenderer.index})
}
trainSelectedDataRenderer.edittrainChild=function()
{
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log("inside edit trainChild");
  console.log(trainSelectedDataRenderer.index);
  console.log(trainSelectedDataRenderer.editSelectedtrainChild);
  trainSelectedDataRenderer.editSelectedtrainChild({"index":trainSelectedDataRenderer.index});
}

  console.log(trainSelectedDataRenderer);

}
