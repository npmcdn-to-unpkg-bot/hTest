angular.module('app').component("flightSearchResultsParentComponent",{
	templateUrl: 'public/components/flightSearchResultsParentComponent/flightSearchResultsParentComponent.html',
	controllerAs:"flightSearchResultsParent",
	controller: flightSearchResultsParentController
});
function flightSearchResultsParentController($http,$rootScope){
  var flightSearchResultsParent=this;
	var flightSearchResultsParent=this;
	flightSearchResultsParent.travelPlanObject = [
		{ type:"location",
		cityName:"Bangalore"
	},
	{
		type:"transit",
		childServices:
		{
			booking:{
				requested:{mode:"flight"}
			}
		}
	},
	{
		type:"location",
		cityName:"Delhi"
	}
	];

	flightSearchResultsParent.currentnodeedge = function (id, type) {
	console.log(id);
	console.log(type);

	};
    }
