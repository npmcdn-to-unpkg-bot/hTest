var app = angular.module("app").component("stayBookingComponent", {
    templateUrl: "public/components/stayBookingComponent/stayBookingComponent.html",
    controllerAs: "stayBookingCtrl",
    controller: ["$http", stayBookingController]
});


function stayBookingController($http)
{


  var stayBookingCtrl = this;

  stayBookingCtrl.selectedFlight={
    "image":"public/assets/images/indigo.png",
    "companyName": "Air Costa",
    "flightID": "AC2456",
    "seatNumber": "45H",
    "sourceAirport":"koramangala airport",
    "destinationAirport":"delhi airport",
    "price": "876547 INR",
    "travelStartDate":"02/04/2016",
    "preferences": {
      "class": "Bussiness",
      "Nonstop": "true",
      "meals": "Non Veg",
      "extraBaggage": "14 Kg"
    },
    "travelStartTime": "2:00 AM",
    "travelEndDate": "5/2/2016",
    "travelEndTime": "3:00 AM"
  }
  stayBookingCtrl.selectedMetaDataLocalTravel={

      "source": "Rajiv nagar Chowk",
      "destination": "New Delhi IGI Airport",
      "type": "localBus",
      "pickupDate": "4/30/2016",
      "pickupTime": "10:00 AM",
      "dropDate": "4/30/2016",
      "dropTime": "12:00 PM",
      "localBus": {
        "image": "public/assets/images/localBus.png",
        "companyName": "red bus",
        "busNumber": "AB 327014",
        "busType": "AC bus",
        "seatsType": "sleeper",
        "price": "100 INR"
      }
  };
  stayBookingCtrl.selectedCabData={

                    "source": "Rajiv nagar Chowk",
                    "destination": "New Delhi IGI Airport",
                    "type": "cab",
                    "pickupDate": "4/30/2016",
                    "pickupTime": "10:00 AM",
                    "dropDate": "4/30/2016",
                    "dropTime": "12:00 PM",
                    "cab": {
                      "image": "public/assets/images/ola.png",
                      "companyName": "Uber",
                      "cabNumber": "DL AJ 5034",
                      "driverDetails": {
                        "name": "Job Elton"
                      },
                      "estimatedPrice": "800 INR",
                      "cabType": "sedan"
  }
}
  stayBookingCtrl.selectedMetaData={
    "image": "public/assets/images/taj1.png",
    "name": "JW Mariott",
    "rating": "5",
    "location": "hotel's exact address blah blah",
    "roomType": "Deluxe",
    "checkinDate": "4/30/2016",
    "checkinTime": "2:00 PM",
    "checkoutDate": "5/01/2016",
    "checkoutTime": "3:00 PM",
    "price": "9000 INR",
    "comments": "Some useful comment which you may want to convey to the hotel"
  };
  stayBookingCtrl.cardHeading = "Stay/Accomodation";


      stayBookingCtrl.getModePref=function(type){
        console.log('main component type value'+type);
        if(type=='flight'){
             model.array=['flightID','seatNumber'];
             console.log('inside '+model.array);
             return model.array;
        }
        else if(type=='train'){
             model.array=['trainNumber','coachNumber','seatNumber'];
             console.log('inside '+model.array);
             return model.array;
        }
        else if(type=='bus'){
             model.array=['busNumber','seatNumber'];
             console.log('inside '+model.array);
             return model.array;
        }
        else if(type=='cab'){
             model.array=['cabNumber','cabType'];
             console.log('inside '+model.array);
             return model.array;
        }
        else if(type=='localBus'){
             model.array=['busNumber','busType','seatsType'];
             console.log('inside '+model.array);
             return model.array;
        }
      }

      stayBookingCtrl.getSeatPref=function(value){
        if(value=='flight'){
             return ['class','meals','extraBaggage'];
        }
        else if(value=='train'){
             return ['class'];
        }
        else if(value=='bus'){
             return  ['class','seatType'];
        }
      }

    stayBookingCtrl.value={
      stay:[
        {selectedData:{
          image: "public/assets/images/hotel3.png",
          name: "JW Mariott",
          rating: "5",
          location: "hotel's exact address",
          roomType: "Deluxe",
          checkinDate: "6/30/2016",
          checkinTime: "2:00 PM",
          checkoutDate: "7/01/2016",
          checkoutTime: "3:00 PM",
          price: "10000 INR",
          comments: "Some useful comment which you may want to convey to the hotel"
      }
    }
      ]
};
  stayBookingCtrl.fieldsData = {
      "stay":[{
      "area": "Hari Nagar",
      "preferences": "ac",
      "checkinDate": "6/30/2016",
      "checkoutDate": "7/01/2016"
    }, {
      "area": "Hari Nagar",
      "preferences": "ac",
      "checkinDate": "6/30/2 016",
      "checkoutDate": "7/01/2016"
    }],
    "localTravel":[{
    "area": "Hari Nagar",
    "preferences": "ac",
    "checkinDate": "6/30/2016",
    "checkoutDate": "7/01/2016"
    },
     {
      "area": "Hari Nagar",
      "preferences": "ac",
      "checkinDate": "6/30/2016",
      "checkoutDate": "7/01/2016"
    }]
  };

  stayBookingCtrl.fieldsMetaData = {
    "stay":{
                "travelDate":{
                "mandatory": true,
                "displayName": "Some Good Travel date",
                "id": "checkindate",
                "type": "date"
              },
              "someOtherDate":{
              "mandatory": true,
              "displayName": "Travel date",
              "id": "checkindate",
              "type": "date"
            },
            "checkinDate":{
            "mandatory": true,
            "displayName": "Check-in Date",
            "id": "checkindate",
            "type": "date"
          },
          "checkoutDate":{
            "mandatory": true,
            "displayName": "Check-out Date",
            "id": "checkoutdate",
            "type": "date"
          }
          ,
          "preferences":{
            "mandatory": false,
            "displayName": "Preferences",
            "id": "preferences",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["ac","non-ac"]
            }
          },
            "preferencesss":{
              "mandatory": false,
              "displayName": "Preferences",
              "id": "preferences",
              "type": "singleSelect",
              "specificAttr":{
                "domainList":["ac","non-ac"]
              }
             },

              "prefer":{
                "mandatory": false,
                "displayName": "Preferences",
                "id": "preferences",
                "type": "singleSelect",
                "specificAttr":{
                  "domainList":["ac","non-ac"]
                }
             }
          }
      ,
      "localTravel":{
        "checkinDate":{
            "mandatory": true,
            "displayName": "Check-in Date",
            "id": "checkindate",
            "type": "date"
          },
          "checkoutDate":{
            "mandatory": true,
            "displayName": "Check-out Date",
            "id": "checkoutdate",
            "type": "date"
          }
          ,
          "preferences":{
            "mandatory": false,
            "displayName": "Preferences",
            "id": "preferences",
            "type": "singleSelect",
            "specificAttr":{
              "domainList":["ac","non-ac"]
            }
          }
      }
  };
  // stayBookingCtrl.selectedChildren = {
  //   "stay":"Stay",
  //   "localTravel":"Local Travel"
  // }

  console.log(stayBookingCtrl);

  stayBookingCtrl.onAdd = function() {
    console.log("Adding something");
  };

  stayBookingCtrl.onDelete = function(index) {
    console.log("Deleting index",index);
  };

  stayBookingCtrl.metaDataEssentialFieldsData = {
    "noDependencyData":{
      "location": {
        "mandatory": true,
        "displayName": "City",
        "id": "location",
        "type": "text"
      }
    },
    "modesToSelectTheServices": {
      "basicServices":{
        "mandatory": false,
        "displayName": "Select Basic Services",
        "id": "selectedServices",
        "type": "multiSelect",
        "specificAttr":{
          "domainList": ["stay","localTravel"]
          // "domainList":[{"serviceId":"stay", "serviceDisplayName": "Stay"},{"serviceId":"localTravel", "serviceDisplayName": "Local Travel"}],
          // "listLabelKey": "serviceId",
          // "listLabelValue": "serviceDisplayName"
        },

      }
    }
  };
  stayBookingCtrl.essentialFieldsData = {
    "location": "Banaras"

  };


  stayBookingCtrl.tempEssentialFieldsData = {
    "location": "Banaras",
    "basicServices": [{"serviceId":"stay", "serviceDisplayName": "Stay"},{"serviceId":"localTravel", "serviceDisplayName": "Local Travel"}]
  };

  stayBookingCtrl.essentialFieldsData = {
    "location": "Banaras"
  };

  // stayBookingCtrl.selectedChildren = ["stay", "localTravel"];
  stayBookingCtrl.childrenLabels = {
    "stay": "Stay",
    "localTravel": "Local Travel"
  };


  stayBookingCtrl.reflectSelectedChildren = function(arrayOfSelectedServices) {

    console.log("&&&&&&&&&&&&&&&&&&&&&");
    console.log(arrayOfSelectedServices);
    stayBookingCtrl.selectedChildren = arrayOfSelectedServices;

    // stayBookingCtrl.selectedChildrenFromEssentialFields = arrayUnique(stayBookingCtrl.selectedChildrenFromEssentialFields.concat(arrayOfSelectedServices));
    console.log(stayBookingCtrl.selectedChildren);

  }
  // stayBookingCtrl.tempChildrenFieldsData = ;
  // stayBookingCtrl.tempChildrenFieldsMetaData = ;
  // stayBookingCtrl.tempSelectedChildren = ;
  //
  //
  // chidren-fields-data="stayBookingCtrl.fieldsData" children-fields-meta-data="stayBookingCtrl.fieldsMetaData" selected-children="stayBookingCtrl.selectedChildren"



}//eof
