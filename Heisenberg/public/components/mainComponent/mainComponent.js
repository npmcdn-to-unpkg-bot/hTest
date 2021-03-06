angular.module('app')
    .component("mainComponent", {
        templateUrl: "public/components/mainComponent/mainComponent.html",
        controllerAs: "mainComponent",
        controller: ["$rootScope", "$location", mainComponentController],
        $routeConfig: [
            {
                path: '/loginPage',
                name: 'LoginComponent',
                component: 'loginComponent'
            },
            {
                path: '/landingPage',
                name: 'LandingPageComponent',
                component: 'landingComponent'
            },
            {
                path: '/travelBooking',
                name: 'TravelBookingParentComponent',
                component: 'travelBookingParentComponent'
            },
            {
                path: '/stayBooking',
                name: 'StayBookingComponent',
                component: 'stayBookingComponent'
            },
            {
                path: '/flightSearchResults',
                name: 'FlightSearchResultsParentComponent',
                component: 'flightSearchResultsParentComponent'
            },
            {
                path: '/trainSearchResults',
                name: 'TrainSearchResultsParentComponent',
                component: 'trainSearchResultsParentComponent'
            },
            {
                path: '/hotelSearchResults',
                name: 'HotelSearchResultsParentComponent',
                component: 'hotelSearchResultsParentComponent'
            },
            {path: '/itinerary', name: 'ItineraryComponent', component: 'itineraryParentComponent'},
            {path: '/searchResults', name: 'SearchResultComponent', component: 'searchResult'},
            {path: '/**', redirectTo: ["LoginComponent"]},
        ]
    });

var setObj = function (obj, keyString, value) {
    console.log("Before Replace ", keyString);
    keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    console.log("After first replace", keyString);
    keyString = keyString.replace(/^\./, '');           // strip a leading dot
    console.log("After second replace", keyString);
    var hierarchyWiseKeysArray = keyString.split('.');

    while (hierarchyWiseKeysArray.length > 1)
        obj = obj[hierarchyWiseKeysArray.shift()];
    return obj[hierarchyWiseKeysArray.shift()] = value;

}

function mainComponentController($rootScope, $location, travelPlanManageService) {

    var mainComponent = this;
    mainComponent.travelPlanData = {};
    mainComponent.travelPlanInitializer = function (indexForTravelMode) {
        var modeOfTravel = ["oneWay", "twoWay", "multiWay"];
        mainComponent.travelPlanData = {
            "travelType": modeOfTravel[indexForTravelMode + 1],
            "state": "initial",
            "nodes": {},
            "edges": {}

        };

        var indexForNodesAndEdges = 0;
        while (indexForNodesAndEdges < indexForTravelMode + 1) {
            mainComponent.nodeEdgeInitializer("nodes");
            mainComponent.nodeEdgeInitializer("edges");
        }

        mainComponent.nodeEdgeInitializer("nodes");

    }

    mainComponent.nodeEdgeInitializer = function (nodeOrEdge) {
        var numberOfElements = Object.keys(mainComponent.travelPlanData[nodeOrEdge]).length;
        var id = nodeOrEdge.slice(0, -1) + numberOfElements;
        mainComponent.travelPlanData[nodeOrEdge][id] = {
            "status": "initial"
        };

        //  mainComponent.nodeEdgeInitializer[nodeEdgeInitializer]
    }


    mainComponent.insertInformationInTravelPlan = function (keyString, value) {
        setObj(mainComponent.travelPlanData, keyString, value);
    }
    mainComponent.insertNodeEdgeInfo = function (nodeOrEdge) {

    }

    mainComponent.childServicesInitializer = function (nodeOrEdge) {

    }

    mainComponent.insertChildServicesData = function (nodeOrEdge) {

    }
}
