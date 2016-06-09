
angular.module('app')
  .component('travelPlanForm',{
    controller: travelPlanFormCtrl,
    templateUrl: "public/components/travelPlanFormComponent/travelPlanFormComponent.html",
    controllerAs: 'travelPlanFormCtrl',
    bindings: {
      "currentFormData": "<",
      "currentFormFieldsData": "<",
      "essentialFieldsUpdate": "&",
      "childServiesFormUpdate": "&"
    }
  });

function travelPlanFormCtrl() {
  var travelPlanFormCtrl = this;
  var fieldKey;
  travelPlanFormCtrl.essentialFormData = {};
  for (fieldKey in travelPlanFormCtrl.currentFormData) {
    if (!fieldKey ==="childServices") {
      travelPlanFormCtrl.essentialFormData[fieldKey] = travelPlanFormCtrl.currentFormData[fieldKey];
    }
  }
//travelPlanFormCtrl.currentFormFieldsEssentialData=travelPlanFormCtrl.currentFormFieldsData["essential"];
  travelPlanFormCtrl.setObj = function(obj, keyString,value) {
          console.log("Before Replace ", keyString)
          keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
          console.log("After first replace", keyString);
          keyString = keyString.replace(/^\./, '');           // strip a leading dot
          console.log("After second replace", keyString);
          var hierarchyWiseKeysArray = keyString.split('.');

          while (hierarchyWiseKeysArray.length > 1)
          obj = obj[hierarchyWiseKeysArray.shift()];
          return obj[hierarchyWiseKeysArray.shift()] = value;
  };



  travelPlanFormCtrl.essentialFieldsUpdateWrapper = function(keyString,value, fieldId) {
    travelPlanFormCtrl.setObj(travelPlanFormCtrl,keyString,value);
    travelPlanFormCtrl.essentialFieldsUpdate({"essentialFieldsValues": value, "fieldId":id });
  }


  travelPlanFormCtrl.childServiesFormUpdateWrapper = function(keyString,value, childServiceId, fieldId) {
    travelPlanFormCtrl.setObj(travelPlanFormCtrl,keyString,value);
    travelPlanFormCtrl.childServiesFormUpdate({"childServicesFormValues": value, "childServiceId": childServiceId, "fieldId": fieldId });
  }

//  travelPlanFormCtrl.currentFormFieldsEssentialData=travelPlanFormCtrl.currentFormFieldsData["essential"];

//  travelPlanFormCtrl.currentFormFieldsChildServicesData=travelPlanFormCtrl.currentFormFieldsData["services"];
  //travelPlanFormCtrl.currentFormFieldsServicesNames = travelPlanFormCtrl.currentFormFieldsData["servicesName"];

}
