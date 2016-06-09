angular.module('app')
.controller('hotelSearchResultsController', function($scope, $http){
	$http.get('public/data/hotelSearchResults.json').success(function(searchresults){
		$scope.searchresults= searchresults;
	});
});
