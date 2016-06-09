angular.module('app')
  .component('travelBookingParentComponent', {
    templateUrl: "public/components/travelBookingParentComponent/travelBookingParentComponent.html",
    controller: ["mainService", "$location", travelBookingParentCtrl],
    controllerAs: "travelBookingParentCtrl",
    $canActivate: function (mainService) {
      return mainService.getPrerequisites().then(function (data) {
        mainService.serviceData = data;
        return true;
      });
    }
  });


function travelBookingParentCtrl(mainService, $location) {

  var travelBookingParentCtrl = this;
  console.log(travelBookingParentCtrl);

  console.log(mainService.serviceData);
  travelBookingParentCtrl.$onInit = function () {
    console.log(" I am inside on init");
    travelBookingParentCtrl.travelPlanObject = mainService.getTravelPlanObjectInitial();
    console.log(travelBookingParentCtrl.travelPlanObject);
    travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[0];
    console.log(travelBookingParentCtrl.currentSelectedObj);

    travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.travelPlanObject[0].childServices);

    travelBookingParentCtrl.elementFields = {
      "location": mainService.serviceData[0].data,
      "transit": mainService.serviceData[1].data
    };
    travelBookingParentCtrl.childrenLabels = {};
    for (elementType in travelBookingParentCtrl.elementFields) {

      for (mode in travelBookingParentCtrl.elementFields[elementType].essential.modesToSelectTheServices) {
        var modeData = travelBookingParentCtrl.elementFields[elementType].essential.modesToSelectTheServices[mode];
        Object.assign(travelBookingParentCtrl.childrenLabels, modeData.specificAttr.domainList)

      }
    }



    console.log(travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.type]);

    travelBookingParentCtrl.locationchildservices=mainService.serviceData[0].data.servicesDetails;

    travelBookingParentCtrl.transitchildservices=mainService.serviceData[1].data.servicesDetails;
  }


   //console.log(travelBookingParentCtrl.locationchildservices);

  travelBookingParentCtrl.reflectSelectedChild = function (selectedChildDetails) {

      console.log("i am inside reflectSelectedChild");
    console.log(selectedChildDetails);
    console.log("selectedChildDetails.metaData.essential.modesToSelectTheServices");
    console.log(selectedChildDetails.metaData.essential.modesToSelectTheServices);
    travelBookingParentCtrl.currentSelectedObj = selectedChildDetails.currentObject;
    travelBookingParentCtrl.selectedChildren = [selectedChildDetails.selectedChild];
    for( childGroup in selectedChildDetails.metaData.essential.modesToSelectTheServices) {
      console.log("Inside the loop");
      console.log(childGroup);
      console.log(selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].specificAttr.domainList);

      if(Object.keys(selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].specificAttr.domainList).indexOf(selectedChildDetails.selectedChild) > -1) {
        console.log("Inside first if");
        console.log(selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup]);
        if(selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] === undefined) {
          console.log("Property is not defined inside the object");
          console.log(selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].javascriptDataType);
          switch (selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].javascriptDataType) {
            case "String":
              console.log("inside string of when property is undefined");
              selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] =  selectedChildDetails.selectedChild;
              break;
            case "Array":
              console.log("inside array of when property is  undefined");
              selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] =  [selectedChildDetails.selectedChild];
              break;
            default:

          }
          break;
        }
        else {
          //When the property is defined inisde the oject
          console.log("Property is  defined inside the object");
          switch(selectedChildDetails.metaData.essential.modesToSelectTheServices[childGroup].javascriptDataType) {
            case "String":
                console.log("inside string when property is defined");
                if(selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup] === selectedChildDetails.selectedChild) {
                  console.log("Inside sendond if");

                  selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup]=selectedChildDetails.selectedChild;

                }
                break;

            case "Array":
                console.log("inside array of when property is defined");
              if(selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup].indexOf(selectedChildDetails.selectedChild) <0) {
                console.log("Inside sendond if");

                // selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup]=selectedChildDetails.selectedChild;

                selectedChildDetails.currentObject.essential.modesToSelectTheServices[childGroup].push(selectedChildDetails.selectedChild);
                // selectedChildDetails.currentObject.childServices[childGroup] = selectedChildDetails.metaData.servicesIntializer[childGroup];
              }
              break;
          }

          break;
        }

      }

    }


    travelBookingParentCtrl.reflectSelectedChildren([selectedChildDetails.selectedChild]);

  };
  //travelBookingParentCtrl.travelPlanExists = dataUpdateHelper.travelPlanExists();

  travelBookingParentCtrl.ifFirstElement = function () {
    //console.log("Inside first element");
    //console.log(travelBookingParentCtrl.currentSelectedObj);
    //console.log(travelBookingParentCtrl.travelPlanObject);
    if (travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) == 0)
      return true;
    return false;
  }

  travelBookingParentCtrl.ifLastElement = function () {
    if (travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) == travelBookingParentCtrl.travelPlanObject.length - 1)
      return true;
    return false;
  }

  travelBookingParentCtrl.goToNextElement = function () {
    console.log(" I am inside goToNextElement");
    if (travelBookingParentCtrl.ifLastElement()) {
      $location.path('/searchResults');
      // travelBookingParentCtrl.$router.navigate(['searchResult']);
    }
    else {
      console.log(travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj));

      travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) + 1];
      console.log("travelBookingParentCtrl.currentSelectedObj");
      console.log(travelBookingParentCtrl.currentSelectedObj);

      // So that the earlier selected child services are also shown on click of next button
      travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.currentSelectedObj.childServices);
    }



  }


  travelBookingParentCtrl.goToPreviousElement = function () {
    travelBookingParentCtrl.currentSelectedObj = travelBookingParentCtrl.travelPlanObject[travelBookingParentCtrl.travelPlanObject.indexOf(travelBookingParentCtrl.currentSelectedObj) - 1];

    // So that the earlier selected child services are also shown on click of previous button
    travelBookingParentCtrl.selectedChildren = Object.keys(travelBookingParentCtrl.currentSelectedObj.childServices);

  }

  travelBookingParentCtrl.reflectSelectedChildren = function (arrayOfSelectedChildren) {
    travelBookingParentCtrl.currentSelectedChildren = arrayOfSelectedChildren;
    console.log("I am inside reflectSelectedChildren");
    console.log(travelBookingParentCtrl.currentSelectedChildren);
    console.log(travelBookingParentCtrl.currentSelectedObj)
    for (cId in travelBookingParentCtrl.currentSelectedObj.childServices) {

      if (travelBookingParentCtrl.currentSelectedChildren.indexOf(cId) < 0) {
        delete travelBookingParentCtrl.currentSelectedObj.childServices[cId];
      }
    }
    travelBookingParentCtrl.currentSelectedChildren.forEach(function (childId) {
      console.log("Inside foreach of children list initial");
      if (travelBookingParentCtrl.currentSelectedObj.childServices[childId] == undefined) {
        console.log("I am going to intialize childServices");
        console.log(travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.type]);
        travelBookingParentCtrl.currentSelectedObj.childServices[childId] = travelBookingParentCtrl.elementFields[travelBookingParentCtrl.currentSelectedObj.type].servicesIntializer[childId];
      }
    });
  }
}
