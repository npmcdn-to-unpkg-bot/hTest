var app = angular.module("app").component("trainRenderer", {
    templateUrl: "./public/components-rebuild/train/child-renderer.html",
    controllerAs: "trainRenderer",
    controller: trainRendererCtrl,
    bindings: {
      "childFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@",
      "deleteAll": "&"
    }
});

function trainRendererCtrl()
{

  var trainRenderer = this;
  console.log("Inside trainRenderer");
  console.log(trainRenderer);

  trainRenderer.onDelete = function(index) {
    console.log("inside on delete");
    console.log(index);
    trainRenderer.deleteAll();
    // trainRenderer.childFieldsData.splice(index,1);
  }

  trainRenderer.onAdd = function(index) {
    trainRenderer.childFieldsData.push({"state":"initial"});
  }


  trainRenderer.onEdit = function() {
    console.log("I am inside of trainRenderer onedit");
    // console.log(index);
    trainRenderer.childFieldsData.state = "request";
  }

}
