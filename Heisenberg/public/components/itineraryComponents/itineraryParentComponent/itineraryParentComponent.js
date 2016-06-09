
angular.module('app')
    .component('itineraryParentComponent',{

        templateUrl:'public/components/itineraryComponents/itineraryParentComponent/itineraryParentComponent.html',
        controllerAs:'model',
        bindings:{
          value:'<'

        },
        controller: mainController
    })

 function mainController(mainService){
    var model=this;

    console.log('inside mainController');
    model.travelPlanData=new Object();
    model.sequence=[];
    model.nodesData=new Object();
    model.edgesData=new Object();
    model.nodeObj=new Object();
    model.edgeObj=new Object();
    model.finalArray=[];

          /* $http.get('public/data/travelPlan.json').success(function(data) {
           model.travelPlanData=data;
           console.log(model.travelPlanData);
           fun();
         });*/

        model.$onInit=function(){
          //console.log('inside onInit model ');
          model.travelPlanData=mainService.getTravelPlanObject();
          console.log("kkkkkkkkkkkkkk "+model.travelPlanData);
          
        // fun();


         /*model.nodesData= mainService.getElementData('nodes','node1');
           console.log(model.nodesData);
           console.log("k");*/

          /*  model.edgesData= mainService.getEdges();
             console.log('edge master data');
             model.edgesData.then(function(data){
               console.log(data);
           })*/

          /* model.object={
             source: "Rajiv Chowk",
             destination: "New Delhi IGI Airport",
             type: "cab",
             pickupDate: "4/30/2016",
             pickupTime: "10:00 AM"
           };
           model.feedback=mainService.childServiesFormUpdate('nodes','node1','childServices','node1T1','requestedData',model.object);
           console.log(model.feedback);

           model.response=mainService.essentialFieldsUpdate('nodes','node1','city','bhopal');
           console.log(model.response);*/

      /*   model.res=mainService.travelPlanInitializer(1);
           console.log(model.res);

           model.travelPlanData=mainService.getTravelPlanObject();
           console.log(model.travelPlanData);*/

      }

  /*var fun=function(){
       model.sequence=model.travelPlanData['sequenceOfJobs'];
       console.log(model.sequence);

       model.nodesData=model.travelPlanData['nodes'];
       console.log(model.nodesData);

       model.edgesData=model.travelPlanData['edges'];
       console.log(model.edgesData);

      for(var i=0;i<model.sequence.length;i++){
          console.log('hello '+model.sequence[i].substr(0,4));

          if(model.sequence[i].substr(0,4)=='node') {
              model.nodeObj = model.nodesData[model.sequence[i]];
              model.finalArray.push(model.nodeObj);
          }
          else if(model.sequence[i].substr(0,4)=='edge'){
              model.edgeObj = model.edgesData[model.sequence[i]];
              model.finalArray.push(model.edgeObj);
          }

      }

      console.log(model.finalArray);
      model.jsonData=model.finalArray;

  }
*/

    model.getModePref=function(type){
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

    model.getSeatPref=function(value){
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
