angular.module('app')
    .component('travelBooking', {
       templateUrl: './public/components-rebuild/travel-booking/travel-booking.html',
       controller: travelBookingCtrl,
       controllerAs: "travelBooking",
       bindings: {
         "currentSelectedObj": "<",
         "metaDataOfObj": "<",
         "currentSelectedChildren": "<",
         "childrenLabels": "<"
       }
});

function travelBookingCtrl() {
  var travelBooking = this;
  console.log("Inside travelBookingCtrl################");
  console.log(travelBooking);

  travelBooking.arrayUnique = function(array) {
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i] === a[j])
                  a.splice(j--, 1);
          }
      }

      return a;
  }

  // travelBooking.$routerOnActivate = function() {
  //   console.log(travelBooking.metaDataOfObj.essential);
  // }

  // Essential Fiellds
  console.log(travelBooking);
  console.log("Printing essen",travelBooking.metaDataOfObj.essential);
  // travelBooking.metaDataOfObj.essential = travelBooking.metaDataOfObj.essential;
  // travelBooking.essentialFieldsData = travelBooking.currentSelectedObj.essential;
  travelBooking.arrayOfSelectedChildren = [];


  travelBooking.reflectSelectedChildren = function(arrayOfSelectedChildren) {
    travelBooking.currentSelectedChildren = arrayOfSelectedChildren;
    console.log("I am inside reflectSelectedChildren");
    console.log(travelBooking.currentSelectedChildren);
    for(cId in travelBooking.currentSelectedObj.childServices) {

      if(travelBooking.currentSelectedChildren.indexOf(cId) <0){
        delete travelBooking.currentSelectedObj.childServices[cId];
      }
    }
    travelBooking.currentSelectedChildren.forEach(function(childId){
      console.log("Inside foreach of children list initial");
      if(travelBooking.currentSelectedObj.childServices[childId] == undefined){
        console.log("I am going to intialize childServices");
        travelBooking.currentSelectedObj.childServices[childId] = travelBooking.metaDataOfObj.servicesIntializer[childId];
      }
    });
  }


  //This needs to be in a function which gets called before html is rendered
  // travelBooking.childrenLabels = {};
  // for(mode in travelBooking.metaDataOfObj.essential.modesToSelectTheServices)
  // {
  //   var modeData = travelBooking.metaDataOfObj.essential.modesToSelectTheServices[mode];
  //   Object.assign(travelBooking.childrenLabels,modeData.specificAttr.domainList)
  //
  // }

  // travelBooking.metaDataOfChildren = travelBooking.metaDataOfObj.services;

  // travelBooking.childrenData = travelBooking.currentSelectedObj.childServices;


}
