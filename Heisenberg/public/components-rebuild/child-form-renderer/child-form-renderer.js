angular.module('app')
.component('childFormRenderer', {
  templateUrl: './public/components-rebuild/child-form-renderer/child-form-renderer.html',
  controller: childFormRendererController,
  controllerAs: "childFormRenderer",
  bindings: {
    fieldsData: '<',
    fieldsMetaData: '<'
  }
});

function childFormRendererController($http) {
  var childFormRenderer = this;
  console.log("Inside child form renderer");
  //adding querySearch function in specific attr for autocomplete
  childFormRenderer.dataInitializer = function() {
    // for(fieldId in childFormRenderer.fieldsMetaData) {
    //   if(childFormRenderer.fieldsMetaData[fieldId].defaultValue !== undefined) {
    //     childFormRenderer.fieldsData[fieldMetaDataId] = childFormRenderer.fieldsMetaData[fieldId].defaultValue;
    //   }
    // }
  }
  childFormRenderer.$onInit=function(){
    for(key in childFormRenderer.fieldsMetaData)
    {
        console.log("#########################################################################");
      console.log(childFormRenderer.fieldsMetaData[key]);
      if(childFormRenderer.fieldsMetaData[key].specificAttr ==undefined)
      {
        console.log("undefined");
        childFormRenderer.fieldsMetaData[key].specificAttr={};
      }

      //console.log(childFormRenderer.fieldsMetaData[key].specificAttr);

      console.log(childFormRenderer.fieldsMetaData[key]);
      console.log(childFormRenderer.querySearch);
    //  if(childFormRenderer.fieldsMetaData[key][specificAttr] !=undefined)
      childFormRenderer.fieldsMetaData[key].specificAttr.querySearch = childFormRenderer.querySearch;
    }
  };
  console.log(childFormRenderer);

  var numberOfFields = Object.keys(childFormRenderer.fieldsMetaData).length;
  childFormRenderer.zero = 0;
  switch (numberOfFields) {
    case 1:
    childFormRenderer.flex = 60;
    childFormRenderer.flexOffset = 20;
    console.log("Case 1");
    break;
    case 2:
    childFormRenderer.flex = 40;
    childFormRenderer.flexOffset = 20;
    console.log("Case 2");
    break;
    case 3:
    childFormRenderer.flex = 25;
    childFormRenderer.flexOffset = 5;
    console.log("Case 3");
    break;
    default:
    childFormRenderer.flex = 20;
    childFormRenderer.flexOffset = 5;
    console.log("Case default");

  }
  // Reflecting the value changed in the custom input box
  childFormRenderer.onReflect = function(keyString,value,id) {
    console.log("Inside on reflect of childCardRenderer");
    console.log(value);
    childFormRenderer.fieldsData[id] = value;
  };






  //functions for autoComplete

  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {

      return (angular.lowercase(state).indexOf(lowercaseQuery) === 0);
    };
  }



  childFormRenderer.available=[];

  // childFormRenderer.querySearch=function (query) {
  //   console.log("inside query search");
  //   console.log(childFormRenderer.available);
  //   console.log(query);
  //   var results = query ? childFormRenderer.available.filter( createFilterFor(query) ) : [];
  //   return results;
  // }

  //childFormRenderer.autoCompleteInput.specificAttr.url="autoComplete.json";

  var timeout;

  childFormRenderer.querySearch =function(searchText,url,callBack)
  {
    console.log(searchText);
      $http({
        method: 'GET',
        // url: 'autoComplete.json'
        url:url,
      }).then(function successCallback(response) {
        childFormRenderer.available=response.data;
        console.log("url is $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
        console.log(url);
        console.log(" first inside sucess callback");
        console.log(response);
        console.log("inside sucess callback");
        console.log(childFormRenderer.available.states);

    // //  ctrl.querySearch(searchText);
    // var output=response.createFilterFor(searchText)
    var results = searchText ?childFormRenderer.available.states.filter( createFilterFor(searchText) ) : [];
       console.log("results are");
       console.log(results);
       callBack(results);

       //filteredData(results);
        }, function errorCallback(response) {

        });

  }

};
