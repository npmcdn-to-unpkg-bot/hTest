angular.module('app').component("trainSearchResultsParentComponent", {
    templateUrl: 'public/components/trainSearchResultsParentComponent/trainSearchResultsParentComponent.html',
    controllerAs: "trainSearchResultsParent",
    controller: trainSearchResultsParentController
});
function trainSearchResultsParentController($http, $rootScope) {
    var trainSearchResultsParent = this;
    trainSearchResultsParent.travelPlanObject = [
        {
            type: "location",
            cityName: "Bangalore"
        },
        {
            type: "transit",
            childServices: {
                booking: {
                    requested: {mode: "flight"}
                }
            }
        },
        {
            type: "location",
            cityName: "Delhi"
        }
    ];

    trainSearchResultsParent.currentnodeedge = function (id, type) {
        console.log(id);
        console.log(type);

    };
}
