var app = angular.module("app").component("busRenderer", {
    templateUrl: "./public/components-rebuild/bus/child-renderer.html",
    controllerAs: "busRenderer",
    controller: busRendererCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function busRendererCtrl()
{

  var busRenderer = this;
  console.log("Inside busRenderer");
  console.log(busRenderer);

}
