var app = angular.module("app").component("childCardRenderer", {
    templateUrl: "./public/components-rebuild/child-card-renderer/child-card-renderer.html",
    controllerAs: "childCardRenderer",
    controller: childCardRendererCtrl,
    bindings: {
      "arrayOfChildFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@"
    }
});

function childCardRendererCtrl()
{

  var childCardRenderer = this;
  console.log("Inside childCardRenderer");
  console.log(childCardRenderer);

  childCardRenderer.onAdd = function() {
    console.log("Adding something");
  };

  childCardRenderer.onDelete = function(index) {
    console.log("Deleting index",index);
  };

  childCardRenderer.getModePref=function(type){
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

  childCardRenderer.getSeatPref=function(value){
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
}
