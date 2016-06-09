/**
 * Created by lenovo on 23-05-2016.
 */
var app = angular.module("app").component("edgeComponent", {

    templateUrl: "public/components/travelplancomponent/edgeComponent/edgeComponent.html",
    controllerAs: "edge",
    controller: edgeController,
    bindings: {
        'travelelement': '<',
        'currentedge':'<',
        'transitchildservices':'<',
        'currentnodeedgetravel':'&'
    }
});

function edgeController() {

    var edge = this;

    edge.selectededge = function (indexid,type) {
      console.log("Edge is clicked");
      console.log(indexid);
      console.log(type);
      console.log({'index':indexid,'type':type});
        edge.currentnodeedgetravel({clicked:{'index':indexid,'type':type }});
    };

}
