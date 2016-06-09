var app = angular.module("app").component("localTravelRenderer", {
    templateUrl: "./public/components-rebuild/localTravel/child-renderer.html",
    controllerAs: "localTravelRenderer",
    controller: localTravelRendererCtrl,
    bindings: {
      "childFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@",
      "deleteAll": "&"
    }
});

function localTravelRendererCtrl()
{


  var localTravelRenderer = this;
  console.log("inside localTravel %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(localTravelRenderer.childFieldsData);
  // localTravelRenderer.$onInit = function() {
  //   console.log("I am in localTravel renderer onit");
  //   console.log(localTravelRenderer.childFieldsData);
  //   if(localTravelRenderer.childFieldsData.length == 0) {
  //     console.log("I am inside if of localTravelRenderer");
  //     localTravelRenderer.childFieldsData.push({});
  //   }
  //   console.log(localTravelRenderer.childFieldsData);
  //   console.log("end of oninit localTravel");
  // }
  console.log("localTravel renderer");
  console.log(localTravelRenderer);

  localTravelRenderer.onDelete = function(index) {
    console.log("inside on delete");
    console.log(index);
    localTravelRenderer.childFieldsData.splice(index,1);
    if(index == 0)
      {
        console.log("Inside if of stayRenderer");
          localTravelRenderer.deleteAll();
      }
  }

  localTravelRenderer.onAdd = function(index) {
    localTravelRenderer.childFieldsData.push({"state":"initial"});
  }


  localTravelRenderer.onEdit = function(index) {
    console.log("I am inside of localTravelRenderer onedit");
    console.log(index);
    localTravelRenderer.childFieldsData[index].state = "request";
  }
}
