angular.module('app')
.component("allChildServicesComponent",{
  templateUrl:"public/components/allChildServicesComponent/allChildServicesComponent.html",
  controllerAs:"allChildServicesComponentCtrl",
  controller:["updateTravelPlan","childServicesInitializer",allChildServicesComponentCtrl],
  bindings: {
    "formType": '@',
    "currentThingId", "@"
  }

});

function allChildServicesComponentCtrl(updateTravelPlan,childServicesInitializer) {

}
