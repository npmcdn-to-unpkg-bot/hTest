angular.module('app')
    .component('hotelSearchResultsComponent', {
        templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsComponent/hotelSearchResultsComponent.html',
        controllerAs: "hotelSearchResults",
        controller: hotelSearchResultsController
    });
var setObj = function (obj, keyString, value) {
    console.log("Before Replace ", keyString)
    keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    console.log("After first replace", keyString);
    keyString = keyString.replace(/^\./, '');           // strip a leading dot
    console.log("After second replace", keyString);
    var hierarchyWiseKeysArray = keyString.split('.');
    while (hierarchyWiseKeysArray.length > 1)
        obj = obj[hierarchyWiseKeysArray.shift()];
    return obj[hierarchyWiseKeysArray.shift()] = value;
};
function deleteDynamicKeyValuePair(obj, keyString) {
    console.log("Before Replace ", keyString)
    keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    console.log("After first replace", keyString);
    keyString = keyString.replace(/^\./, '');           // strip a leading dot
    console.log("After second replace", keyString);
    var hierarchyWiseKeysArray = keyString.split('.');
    console.log("before while");
    console.log(hierarchyWiseKeysArray);
    while (hierarchyWiseKeysArray.length > 1)
        obj = obj[hierarchyWiseKeysArray.shift()];
    console.log("before delte");
    console.log(obj);
    delete obj[hierarchyWiseKeysArray.shift()];
    return obj;
}
function hotelSearchResultsController($http, $rootScope) {
    var hotelSearchResults = this;
    hotelSearchResults.$onInit = function () {
        $http.get('public/data/hotelSearchResults.json').success(function (searchResults) {
            hotelSearchResults.searchResults = searchResults;
        });
        $http.get('public/data/hotelSearchResultsFilter.json').success(function (data) {
            hotelSearchResults.filters = data;
            hotelSearchResults.filters.forEach(function (filter) {
            });
        });
        hotelSearchResults.selectedFilters = {};
        hotelSearchResults.checkBoxInput = {};
        hotelSearchResults.rangeSliderInput = {};
        hotelSearchResults.rangeSlider = {
            domainList: {
                minValue: 20,
                maxValue: 80,
                options: {
                    id: 'demoRangeSlider',
                    floor: 5,
                    ceil: 95,
                    step: 1,
                    noSwitching: true,
                    // onStart: hotelSearchResults.reflect,
                    // onChange: hotelSearchResults.reflect,
                    // onEnd: hotelSearchResults.reflect
                }
            }
        }
    };
    hotelSearchResults.reflectValue = function (keyString, value, id) {
        console.log("Inside Reflect Value");
        console.log(keyString);
        console.log(value);
        console.log(id);
        // setObj(hotelSearchResults, keyString, value);
        if ((value.constructor == Array && value.length == 0) || (value.constructor == String && value == "")) {
            console.log("Filter is empty");
            deleteDynamicKeyValuePair(hotelSearchResults.selectedFilters, id);
            console.log("after delte");
            console.log(hotelSearchResults.selectedFilters);
        }
        else
            setObj(hotelSearchResults.selectedFilters, id, value);
    };
    hotelSearchResults.reflect = function (keyString, value, id) {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(keyString);
        console.log(value);
        console.log(id);
        setObj(hotelSearchResults, keyString, value);
        // if(value.length==0) delete hotelSearchResults.selectedFilters[id];
        // else hotelSearchResults.selectedFilters[id]= value;
    };
    hotelSearchResults.applyFilters = function (searchResult) {
        var counter = 0;
        for (filter in hotelSearchResults.selectedFilters) {
            if (filter == 'price') {
                if (hotelSearchResults.selectedFilters[filter][0] <= searchResult[filter] && hotelSearchResults.selectedFilters[filter][1] >= searchResult[filter]) {
                    console.log('if called');
                    counter++;
                    console.log(counter);
                }
            }
            else {
                hotelSearchResults.selectedFilters[filter].forEach(function (filterValue) {
                    if (filterValue == searchResult[filter]) {
                        counter++;
                        return;
                    }
                });
            }
        }
        if (counter == Object.keys(hotelSearchResults.selectedFilters).length) return true;
        else return false;
    }
};
// angular.module('app')
// .component('hotelSearchResultsComponent', {
// 	templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsComponent/hotelSearchResultsComponent.html',
// 	controllerAs:"hotelSearchResults",
// 	controller: hotelSearchResultsController
// });

// function hotelSearchResultsController($http,$rootScope){
//     var hotelSearchResults= this;
//     hotelSearchResults.$onInit= function(){
//         $http.get('public/data/hotelSearchResults.json').success(function(searchResults){
//             hotelSearchResults.searchResults= searchResults;
//         });

//         $http.get('public/data/hotelSearchResultsFilter.json').success(function(data){
//             hotelSearchResults.filters= data;
//             hotelSearchResults.filters.forEach(function(filter){
//                     if(filter.type=='rangeSlider')
//                         filter.options.domainList.options.onEnd= function(id, minValue, maxValue){
//                             hotelSearchResults.selectedFilters[id]= [minValue, maxValue];
//                             console.log(id);
//                             console.log(minValue);
//                             console.log(maxValue);
//                         };
//             });
//         });

//         hotelSearchResults.selectedFilters= {};
//         hotelSearchResults.checkBoxInput= {};
//         hotelSearchResults.rangeSliderInput= {};

//         hotelSearchResults.rangeSlider= {
//             domainList: {
//                             minValue: 20,
//                             maxValue: 80,
//                             options: {
//                                         id: 'demoRangeSlider',
//                                         floor: 5,
//                                         ceil: 95,
//                                         step: 1,
//                                         noSwitching: true,
//                                         // onStart: hotelSearchResults.reflect,
//                                         // onChange: hotelSearchResults.reflect,
//                                         // onEnd: hotelSearchResults.reflect
//                             }
//             }
//         }
//     };

//     hotelSearchResults.reflectValue = function(keyString, value, id) {
//         console.log("Inside Reflect Value");
//         console.log(keyString);
//         console.log(value);
//         console.log(id);
//         setObj(hotelSearchResults, keyString, value);
//         if(value.length==0) delete hotelSearchResults.selectedFilters[id];
//         else hotelSearchResults.selectedFilters[id]= value;
//     };

//     hotelSearchResults.reflect= function(keyString, value, id) {
//         console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//         console.log(keyString);
//         console.log(value);
//         console.log(id);
//         setObj(hotelSearchResults, keyString, value);
//         // if(value.length==0) delete hotelSearchResults.selectedFilters[id];
//         // else hotelSearchResults.selectedFilters[id]= value;
//     };

//     hotelSearchResults.applyFilters= function(searchResult){
//         var counter=0;
//         for (filter in hotelSearchResults.selectedFilters){
//             if(filter=='price'){
//                 if(hotelSearchResults.selectedFilters[filter][0]<=searchResult[filter] && hotelSearchResults.selectedFilters[filter][1]>=searchResult[filter]){
//                         console.log('if called');
//                         counter++;
//                         console.log(counter);
//                     }
//             }
//             else{
//                 hotelSearchResults.selectedFilters[filter].forEach(function(filterValue){
//                     if(filterValue==searchResult[filter]){
//                         counter++;
//                         return;
//                     }
//                 });
//             }
//         }
//         if(counter== Object.keys(hotelSearchResults.selectedFilters).length) return true;
//         else return false;
//     }
// };
// var setObj = function(obj, keyString,value) {
//         console.log("Before Replace ", keyString)
//         keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
//         console.log("After first replace", keyString);
//         keyString = keyString.replace(/^\./, '');           // strip a leading dot
//         console.log("After second replace", keyString);
//         var hierarchyWiseKeysArray = keyString.split('.');

//         while (hierarchyWiseKeysArray.length > 1)
//         obj = obj[hierarchyWiseKeysArray.shift()];
//         return obj[hierarchyWiseKeysArray.shift()] = value;
// };
// angular.module('app')
// .component('hotelSearchResultsComponent', {
//     templateUrl: 'public/components/hotelSearchResultsParentComponent/hotelSearchResultsComponent/hotelSearchResultsComponent.html',
//     controllerAs:"hotelSearchResults",
//     controller: hotelSearchResultsController
// });

// var setObj = function(obj, keyString,value) {
//         console.log("Before Replace ", keyString)
//         keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
//         console.log("After first replace", keyString);
//         keyString = keyString.replace(/^\./, '');           // strip a leading dot
//         console.log("After second replace", keyString);
//         var hierarchyWiseKeysArray = keyString.split('.');

//         while (hierarchyWiseKeysArray.length > 1)
//         obj = obj[hierarchyWiseKeysArray.shift()];
//         return obj[hierarchyWiseKeysArray.shift()] = value;
// };


// function deleteDynamicKeyValuePair(obj, keyString) {
//   console.log("Before Replace ", keyString)
//   keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
//   console.log("After first replace", keyString);
//   keyString = keyString.replace(/^\./, '');           // strip a leading dot
//   console.log("After second replace", keyString);
//   var hierarchyWiseKeysArray = keyString.split('.');
//   console.log("before while");
//   console.log(hierarchyWiseKeysArray);
//   while (hierarchyWiseKeysArray.length > 1)
//     obj = obj[hierarchyWiseKeysArray.shift()];
//   console.log("before delte");
//   console.log(obj);
//   delete obj[hierarchyWiseKeysArray.shift()];
//   return obj;
// }

// function hotelSearchResultsController($http,$rootScope){
//     var hotelSearchResults= this;
//     hotelSearchResults.$onInit= function(){
//         $http.get('public/data/hotelSearchResults.json').success(function(searchResults){
//             hotelSearchResults.searchResults= searchResults;
//         });

//         $http.get('public/data/hotelSearchResultsFilter.json').success(function(data){
//             hotelSearchResults.filters= data;
//             hotelSearchResults.filters.forEach(function(filter){

//             });
//         });

//         hotelSearchResults.selectedFilters= {};
//         hotelSearchResults.checkBoxInput= {};
//         hotelSearchResults.rangeSliderInput= {};

//         hotelSearchResults.rangeSlider= {
//             domainList: {
//                             minValue: 20,
//                             maxValue: 80,
//                             options: {
//                                         id: 'demoRangeSlider',
//                                         floor: 5,
//                                         ceil: 95,
//                                         step: 1,
//                                         noSwitching: true,
//                                         // onStart: hotelSearchResults.reflect,
//                                         // onChange: hotelSearchResults.reflect,
//                                         // onEnd: hotelSearchResults.reflect
//                             }
//             }
//         }
//     };

//     hotelSearchResults.reflectValue = function(keyString, value, id) {
//         console.log("Inside Reflect Value");
//         console.log(keyString);
//         console.log(value);
//         console.log(id);
//         // setObj(hotelSearchResults, keyString, value);



//         if((value.constructor == Array && value.length==0) || (value.constructor == String && value == ""))
// 				{
// 					console.log("Filter is empty");
// 					deleteDynamicKeyValuePair(hotelSearchResults.selectedFilters,id);
// 					console.log("after delte");
// 					console.log(hotelSearchResults.selectedFilters);
// 				}
// 				else
// 				 	setObj(hotelSearchResults.selectedFilters, id, value);
//     };

//     hotelSearchResults.reflect= function(keyString, value, id) {
//         console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//         console.log(keyString);
//         console.log(value);
//         console.log(id);
//         setObj(hotelSearchResults, keyString, value);
//         // if(value.length==0) delete hotelSearchResults.selectedFilters[id];
//         // else hotelSearchResults.selectedFilters[id]= value;
//     };

//     hotelSearchResults.applyFilters= function(searchResult){
//         var counter=0;
//         for (filter in hotelSearchResults.selectedFilters){
//             if(filter=='price'){
//                 if(hotelSearchResults.selectedFilters[filter][0]<=searchResult[filter] && hotelSearchResults.selectedFilters[filter][1]>=searchResult[filter]){
//                         console.log('if called');
//                         counter++;
//                         console.log(counter);
//                     }
//             }
//             else{
//                 hotelSearchResults.selectedFilters[filter].forEach(function(filterValue){
//                     if(filterValue==searchResult[filter]){
//                         counter++;
//                         return;
//                     }
//                 });
//             }
//         }
//         if(counter== Object.keys(hotelSearchResults.selectedFilters).length) return true;
//         else return false;
//     }
// };
