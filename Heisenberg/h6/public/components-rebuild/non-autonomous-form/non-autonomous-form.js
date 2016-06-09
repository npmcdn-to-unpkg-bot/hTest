angular.module('app')
    .component('nonAutonomousForm', {
       templateUrl: './public/components-rebuild/non-autonomous-form/non-autonomous-form.html',
       controller: nonAutonomousFormCtrl,
       controllerAs: "nonAutonomousForm",
       bindings: {
           fieldsData: '<',
           fieldsMetaData: '<',
           reflectFormFields: '&'
       }
    });

function nonAutonomousFormCtrl() {
    var nonAutonomousForm = this;
    console.log("*************************************");
    console.log("Inside non autonomuus form renderer");
    console.log("*************************************");
    console.log(nonAutonomousForm);
    var numberOfFields = Object.keys(nonAutonomousForm.fieldsMetaData).length;
    nonAutonomousForm.zero = 0;
    switch (numberOfFields) {
      case 1:
        nonAutonomousForm.flex = 60;
        nonAutonomousForm.flexOffset = 20;
        console.log("Case 1");
        break;
      case 2:
        nonAutonomousForm.flex = 40;
        nonAutonomousForm.flexOffset = 20;
        console.log("Case 2");
        break;
      case 3:
        nonAutonomousForm.flex = 30;
        nonAutonomousForm.flexOffset = 5;
        console.log("Case 3");
        break;
      default:
        nonAutonomousForm.flex = 20;
        nonAutonomousForm.flexOffset = 5;
        console.log("Case default");

    }

    // Reflecting the value changed in the custom input box
    nonAutonomousForm.onReflect = function(keyString,value,id) {
        console.log("Inside on reflect of childCardRenderer");
        console.log(value);
        nonAutonomousForm.fieldsData[id] = value;
        nonAutonomousForm.reflectFormFields({"keyString": keyString,"value":value,"id":id});
    };

};
