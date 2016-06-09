var app = angular.module("app").component("childCardRendererWithoutIcons", {
    templateUrl: "./public/components-rebuild/child-card-renderer-without-icons/child-card-renderer-without-icons.html",
    controllerAs: "childCardRendererWithoutIcons",

    controller: childCardRendererWithoutIconsCtrl,
    bindings: {
      "childFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function childCardRendererWithoutIconsCtrl()
{

  var childCardRendererWithoutIcons = this;
  console.log("Inside childCardRendererWithoutIcons");
  console.log(childCardRendererWithoutIcons);

  childCardRendererWithoutIcons.onAdd = function() {
    console.log("Adding something");
  };

  childCardRendererWithoutIcons.onDelete = function(index) {
    console.log("Deleting index",index);
  };
}
