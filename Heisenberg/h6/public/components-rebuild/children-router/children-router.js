angular.module('app')
    .component('childrenRouter', {
       templateUrl: './public/components-rebuild/children-router/children-router.html',
       controller: childrenRouterController,
       controllerAs: "childrenRouter",
       bindings: {
         childFieldsData: "<",
         metaDataOfChildFields: "<",
         cardHeading: "@",
         childId: "@",
         deleteAll: "&"
       }
    });
function childrenRouterController() {
  var childrenRouter = this;
  console.log("Inside childrenRouterController");
  console.log(childrenRouter);

  childrenRouter.deleteAllWrapper = function() {
    childrenRouter.deleteAll({"childId":childrenRouter.childId});
  }
}
