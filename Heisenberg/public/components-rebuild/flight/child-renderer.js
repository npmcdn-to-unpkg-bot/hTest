var app = angular.module("app").component("flightRenderer", {
    templateUrl: "./public/components-rebuild/flight/child-renderer.html",
    controllerAs: "flightRenderer",
    controller: flightRendererCtrl,
    bindings: {
      "childFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@",
      "deleteAll": "&"
    }
});

function flightRendererCtrl()
{

  var flightRenderer = this;
  console.log("Inside flightRenderer");
  console.log(flightRenderer);

  flightRenderer.onDelete = function(index) {
    console.log("inside on delete");
    console.log(index);
    flightRenderer.deleteAll();
    // flightRenderer.childFieldsData.splice(index,1);
  }

  flightRenderer.onAdd = function(index) {
    flightRenderer.childFieldsData.push({"state":"initial"});
  }


  flightRenderer.onEdit = function() {
    console.log("I am inside of flightRenderer onedit");
    // console.log(index);
    flightRenderer.childFieldsData.state = "request";
  }

}
