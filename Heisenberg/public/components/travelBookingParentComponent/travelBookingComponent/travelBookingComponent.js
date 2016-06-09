//
// angular.module('app')
//   .component('travelBooking',{
//     controller: travelBookingCtrl,
//     templateUrl: "public/components/travelBookingParentComponent/travelBookingComponent/travelBookingComponent.html",
//     controllerAs: 'travelBookingCtrl',
//     bindings: {
//       "currentFormData": "<",
//       "currentFormFieldsData": "<",
//       "essentialFieldsUpdate": "&",
//       "childServiesFormUpdate": "&"
//     }
//   });
//
// function travelBookingCtrl() {
//   var travelBookingCtrl = this;
//   var fieldKey;
//   travelBookingCtrl.essentialFormData = {};
//   for (fieldKey in travelBookingCtrl.currentFormData) {
//     if (!fieldKey ==="childServices") {
//       travelBookingCtrl.essentialFormData[fieldKey] = travelBookingCtrl.currentFormData[fieldKey];
//     }
//   }
// //travelBookingCtrl.currentFormFieldsEssentialData=travelBookingCtrl.currentFormFieldsData["essential"];
//   travelBookingCtrl.setObj = function(obj, keyString,value) {
//           console.log("Before Replace ", keyString)
//           keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
//           console.log("After first replace", keyString);
//           keyString = keyString.replace(/^\./, '');           // strip a leading dot
//           console.log("After second replace", keyString);
//           var hierarchyWiseKeysArray = keyString.split('.');
//
//           while (hierarchyWiseKeysArray.length > 1)
//           obj = obj[hierarchyWiseKeysArray.shift()];
//           return obj[hierarchyWiseKeysArray.shift()] = value;
//   };
//
//
//
//   travelBookingCtrl.essentialFieldsUpdateWrapper = function(keyString,value, fieldId) {
//     travelBookingCtrl.setObj(travelBookingCtrl,keyString,value);
//     travelBookingCtrl.essentialFieldsUpdate({"essentialFieldsValues": value, "fieldId":id });
//   }
//
//
//   travelBookingCtrl.childServiesFormUpdateWrapper = function(keyString,value, childServiceId, fieldId) {
//     travelBookingCtrl.setObj(travelBookingCtrl,keyString,value);
//     travelBookingCtrl.childServiesFormUpdate({"childServicesFormValues": value, "childServiceId": childServiceId, "fieldId": fieldId });
//   }
//
// //  travelBookingCtrl.currentFormFieldsEssentialData=travelBookingCtrl.currentFormFieldsData["essential"];
//
// //  travelBookingCtrl.currentFormFieldsChildServicesData=travelBookingCtrl.currentFormFieldsData["services"];
//   //travelBookingCtrl.currentFormFieldsServicesNames = travelBookingCtrl.currentFormFieldsData["servicesName"];
//
// }
