angular.module('app')
.component('flightSearchResult', {
	templateUrl: 'public/components/flightSearchResultsParentComponent/flightSearchResultsComponent/flightSearchResults/flightSearchResults.html',
	controllerAs:"flightSearchResult",
	controller: flightSearchResultController,
	bindings: {
		flightSearchResult: '<'
	}
});

function flightSearchResultController(){
	var flightSearchResult = this;
	//Hardcoded data later to be fetched from the json
	flightSearchResult.from = "LHR";
	flightSearchResult.to = "JFK";
	flightSearchResult.sourceDetails = {
		date: "07 May 2016",
		source: "London Heathrow, London",
		country: "United Kingdom (LHR)"
	};
	
	flightSearchResult.destinationDetails = {
		date: "07 May 2016",
		source: "John F Kennedy Intl, New York",
		country: "United States (JFK)"
	};
	
	flightSearchResult.mealsInformation = {
		displayName: 'Meals Included',
		information: ''
	};
	
	flightSearchResult.baggageInformation = {
		displayName: 'Baggage Information',
		information: 'Check-in 2 Pieces/Person. Cabin 2 Pieces/Person'
	};
	console.table(this.flightSearchResult);
	flightSearchResult.showMore = false;
	flightSearchResult.viewMore = function() {
		flightSearchResult.showMore = true;
	};
}
