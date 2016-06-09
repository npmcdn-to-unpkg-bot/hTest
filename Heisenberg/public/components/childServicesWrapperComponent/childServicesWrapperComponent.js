
angular.module("app")
  .component("childServicesWrapperComponent",{
    templateUrl:"public/components/childServicesWrapperComponent/childServicesWrapperComponent.html",
    controllerAs:"childServicesWrapperComponentCtrl",
    controller:childServicesWrapperComponentController,
    bindings: {
      formData: "<",
      bindDataKey: "<",
      formFieldEssentialData: "<",
      reflectFormData: "&",
      formFieldsServicesNames: "<"
    }
});

function childServicesWrapperComponentController()
{

  var childServicesWrapperComponentCtrl=this;
  childServicesWrapperComponentCtrl.childServicesGroups = {};
  for(childServiceId in childServicesWrapperComponentCtrl.formData) {
     childServiceData = childServicesWrapperComponentCtrl.formData[childServiceId];
     if(childServicesWrapperComponentCtrl.childServicesGroups[childServiceData.type] == undefined) {
       childServicesWrapperComponentCtrl.childServicesGroups[childServiceData.type] = {};
     }
     childServicesWrapperComponentCtrl.childServicesGroups[childServiceData.type][childServiceId] = childServicesWrapperComponentCtrl.formData[childServiceId];
  }
  childServicesWrapperComponentCtrl.reflectChangeInService = function(serviceData, serviceId, fieldId) {
    childServicesWrapperComponentCtrl.reflectFormData({"keyString": childServicesWrapperComponentCtrl.bindDataKey, "value":serviceData, "childServiceId": serviceId, "fieldId": fieldId});
  }

}
