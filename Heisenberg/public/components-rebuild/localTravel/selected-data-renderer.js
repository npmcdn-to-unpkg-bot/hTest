var app = angular.module("app").component("localTravelSelectedDataRenderer", {
  templateUrl: "./public/components-rebuild/localTravel/selected-data-renderer.html",
  controllerAs: "localTravelSelectedDataRenderer",
  controller: localTravelSelectedDataRendererCtrl,
  bindings: {
    "selectedMetaData": "<"
  }
});

function localTravelSelectedDataRendererCtrl()
{
  var localTravelSelectedDataRenderer=this;
  console.log("data");
  console.log(this);
  console.log("*****************************");
console.log(localTravelSelectedDataRenderer.selectedMetaData.type);
  if(localTravelSelectedDataRenderer.selectedMetaData.type=="localBus")
  {
    console.log("trrrrrr");
    localTravelSelectedDataRenderer.serviceLogo=localTravelSelectedDataRenderer.selectedMetaData.localBus.image;
    localTravelSelectedDataRenderer.serviceDetails=
    {
      "heading":localTravelSelectedDataRenderer.selectedMetaData.localBus.companyName,
      "description":
      {
        "busNumber": localTravelSelectedDataRenderer.selectedMetaData.localBus.busNumber,
        "busType": localTravelSelectedDataRenderer.selectedMetaData.localBus.busType,
        "seatsType": localTravelSelectedDataRenderer.selectedMetaData.localBus.seatsType
      }
    }

    localTravelSelectedDataRenderer.price=
    {
      "price": localTravelSelectedDataRenderer.selectedMetaData.localBus.price
    }
  }


  if(localTravelSelectedDataRenderer.selectedMetaData.type=="cab")
  {
    console.log("yo got it");
    console.log(  localTravelSelectedDataRenderer.serviceLogo=localTravelSelectedDataRenderer.selectedMetaData.cab);

    localTravelSelectedDataRenderer.serviceLogo=localTravelSelectedDataRenderer.selectedMetaData.cab.image;

    localTravelSelectedDataRenderer.serviceDetails=
    {
      "heading":localTravelSelectedDataRenderer.selectedMetaData.cab.companyName,
      "description":
      {
        "cabNumber": localTravelSelectedDataRenderer.selectedMetaData.cab.cabNumber,
        "driverDetails": localTravelSelectedDataRenderer.selectedMetaData.cab.driverDetails.name,
        "cabType": localTravelSelectedDataRenderer.selectedMetaData.cabType
      }
    }
    localTravelSelectedDataRenderer.price=
    {
      "price": localTravelSelectedDataRenderer.selectedMetaData.cab.estimatedPrice
    }

  }


  localTravelSelectedDataRenderer.beginDateTime=
  {
    "startTime": localTravelSelectedDataRenderer.selectedMetaData.pickupTime,
    "startDate": localTravelSelectedDataRenderer.selectedMetaData.pickupDate,
    "description":{
      "source": localTravelSelectedDataRenderer.selectedMetaData.source
    }
  }

  localTravelSelectedDataRenderer.endDateTime=
  {
    "endTime":localTravelSelectedDataRenderer.selectedMetaData.dropTime,
    "endDate":localTravelSelectedDataRenderer.selectedMetaData.dropDate,
    "description":{
      "destination":  localTravelSelectedDataRenderer.selectedMetaData.destination
    }
  }

  localTravelSelectedDataRenderer.deletelocalTravelChild=function()
  {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("inside deletelocalTravelChild");
    console.log(localTravelSelectedDataRenderer.index);
    localTravelSelectedDataRenderer.deleteSelectedLocalTravelChild({index:localTravelSelectedDataRenderer.index})
  }
  localTravelSelectedDataRenderer.editlocalTravelChild=function()
  {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("inside edit localTravelChild");
    console.log(localTravelSelectedDataRenderer.index);
    console.log(localTravelSelectedDataRenderer.editSelectedLocalTravelChild);
    localTravelSelectedDataRenderer.editSelectedLocalTravelChild({"index":localTravelSelectedDataRenderer.index});
  }

}
