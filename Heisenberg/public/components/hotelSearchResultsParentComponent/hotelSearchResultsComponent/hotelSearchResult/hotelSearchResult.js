angular.module('app')
.component('hotelSearchResult', {
	templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsComponent/hotelSearchResult/hotelSearchResult.html',
	controllerAs:"hotelSearchResult",
	controller: hotelSearchResultController,
	bindings: {
		hotelSearchResult: '<',
		selectedFilters: '<'
	}
});

function hotelSearchResultController(){

}
