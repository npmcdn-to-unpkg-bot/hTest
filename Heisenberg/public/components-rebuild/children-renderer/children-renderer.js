angular.module('app')
    .component('childrenRenderer', {
       templateUrl: './public/components-rebuild/children-renderer/children-renderer.html',
       controller: childrenRendererController,
       controllerAs: "childrenRenderer",
       bindings: {
         childrenFieldsData: "<",
         childrenFieldsMetaData: "<",
         selectedChildren: "<",
         childrenLabels: "<"
       }
    });
function childrenRendererController() {
  var childrenRenderer = this;
  console.log("}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}]");
  console.log("childrenFieldsMetaData");
  console.log(childrenRenderer.childrenFieldsMetaData);

  console.log("&*&*&*&* I am inside childrenRendererController");
  console.log(childrenRenderer);
  console.log(")))))))))))))))))))))))))))))))))))))))))))))))))))");
  console.log(childrenRenderer.selectedChildren);

  childrenRenderer.deleteChildGroup = function(childId){
    if(childrenRenderer.childrenFieldsData[childId] !== undefined) {
      delete(childrenRenderer.childrenFieldsData[childId]);
    }
  }

  // childrenRenderer.$onInit =  function() {
  //
  //   childrenRenderer.selectedChildren.forEach(function(childId)
  //    {
  //       if(childrenRenderer.childrenFieldsData[childId] === undefined){
  //         childrenRenderer.childrenFieldsData[childId] = [];
  //       }
  //    });
  // }


  // childrenRenderer.selectedChildren.forEach(function(childId)
  //  {
  //    console.log(childId);
  //   if(childrenRenderer.childrenFieldsData[childId] === undefined){
  //     childrenRenderer.childrenFieldsData[childId] = [{}];
  //   }
  // });

}
