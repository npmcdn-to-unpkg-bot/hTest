var app = angular.module("app").component("busRenderer", {
    templateUrl: "./public/components-rebuild/bus/child-renderer.html",
    controllerAs: "busRenderer",
    controller: busRendererCtrl,
    bindings: {
      "childFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@",
      "deleteAll": "&"
    }
});

function busRendererCtrl()
{

  var busRenderer = this;
  console.log("Inside busRenderer");
  console.log(busRenderer);

  busRenderer.onDelete = function(index) {
    console.log("inside on delete");
    console.log(index);
    busRenderer.deleteAll();
    // busRenderer.childFieldsData.splice(index,1);
  }

  busRenderer.onAdd = function(index) {
    busRenderer.childFieldsData.push({"state":"initial"});
  }


  busRenderer.onEdit = function() {
    console.log("I am inside of busRenderer onedit");
    // console.log(index);
    busRenderer.childFieldsData.state = "request";
  }

}
