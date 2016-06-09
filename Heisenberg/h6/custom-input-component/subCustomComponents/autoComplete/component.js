angular.module('app')
.component('autocompleteBox',{
    templateUrl: 'custom-input-component/subCustomComponents/autoComplete/nativeContent.html',
    controller:autocompleteBoxCtrl,
    controllerAs:"autocompleteBoxCtrl",
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function autocompleteBoxCtrl($http,$scope)
{
    var autocompleteBoxCtrl = this;
    console.log("Inside controller of autoCompleteBoxCtrl");
    console.log("specific attributes are");
    console.log(autocompleteBoxCtrl.specificAttr);
    console.log(this);
    autocompleteBoxCtrl.reflectValue = function(value) {
      console.log("reflect value in autocomplete");
      console.log(value);
      autocompleteBoxCtrl.reflectComponent({value:value});

    };

    // autocompleteBoxCtrl.states= loadAll($http);
    autocompleteBoxCtrl.selectedItem;
    autocompleteBoxCtrl.searchText;
    // autocompleteBoxCtrl.querySearch= querySearch;
    autocompleteBoxCtrl.queryData=['Alaska','Alabama'];

    // autocompleteBoxCtrl.filteredData(filteredData)
    // {
    //   autocompleteBoxCtrl.queryData=filteredData;
    // }

     autocompleteBoxCtrl.callBack=function(results)
     {
       console.log("Inside Auto Complete cb",results)
       autocompleteBoxCtrl.queryData=results;
     }

    console.log("states is ..............");

}
