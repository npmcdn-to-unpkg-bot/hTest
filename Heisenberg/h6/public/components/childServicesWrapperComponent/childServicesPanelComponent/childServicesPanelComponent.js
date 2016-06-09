
angular.module("app")
  .component("childServicesPanelComponent",{
    templateUrl:"public/components/childServicesWrapperComponent/childServicesPanelComponent/childServicesPanelComponent.html",
    controllerAs:"childServicesPanelComponentCtrl",
    controller:childServicesPanelComponentController,
    bindings:{
      serviceData:"<",
      serviceFields:"<",
      serviceGroupId:"<",
      serviceDisplayName:"<",
      reflectServiceDataChange:"&",
      addOneMoreService:"&",
      deleteTheSelectedService:"&"
    }
});

function childServicesPanelComponentController()
{
      var childServicesPanelComponentCtrl=this;
      console.log(" inside childServicesPanelComponent forms");
     childServicesPanelComponentCtrl.reflectedServiceData={}
     childServicesPanelComponentCtrl.reflectValue=function(keyString,value,id)
     {

        childServicesPanelComponentCtrl.reflectServiceDataChange({"serviceData": value, "serviceId": keyString , "fieldId": id});
     }

     childServicesPanelComponentCtrl.add=function()
     {
       childServicesPanelComponentCtrl.addOneMoreService();
     }

     childServicesPanelComponentCtrl.delete=function(serviceId)
     {
     childServicesPanelComponentCtrl.deleteTheSelectedService(serviceId)
     }
}
