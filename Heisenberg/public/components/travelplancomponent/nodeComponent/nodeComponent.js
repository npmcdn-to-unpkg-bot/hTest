/**
* Created by lenovo on 23-05-2016.
*/
var app = angular.module("app").component("nodeComponent", {

  templateUrl: "public/components/travelplancomponent/nodeComponent/nodeComponent.html",
  controllerAs: "node",
  controller: nodeController,
  bindings: {
    'travelelement': '<',
    'currentnode':'<',
    'locationchildservices':'<',
    'currentnodeedgetravel':'&',
    "reflectselectedchild": "&",
    "metadata": "<"
  }
});

function nodeController(_) {

  var node = this;
  node.locationMetaData = node.metadata.essential.noDependencyData.location;
node.edit=false;
  node.onReflect = function(keyString,value,id) {
    console.log("Inside on reflect of childCardRenderer");
    console.log(value);
    node.travelelement[id] = value;
  };
  node.show_autocomplete=function(){
      if(node.edit==true)
      {
          node.edit=false;
      }
      else
      {
          node.edit=true;
      }

  };

  node.available = [];
  node.locationMetaData.specificAttr.querySearch = function(searchText,url,callBack)
  {
    console.log(searchText);
    $http({
      method: 'GET',
      // url: 'autoComplete.json'
      url:url,
    }).then(function successCallback(response) {
      node.available=response.data;
      console.log("url is $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
      console.log(url);
      console.log(" first inside sucess callback");
      console.log(response);
      console.log("inside sucess callback");
      console.log(node.available.states);

      // //  ctrl.querySearch(searchText);
      // var output=response.createFilterFor(searchText)
      var results = searchText ?node.available.states.filter( node.createFilterFor(searchText) ) : [];
      console.log("results are");
      console.log(results);
      callBack(results);

      //filteredData(results);
    }, function errorCallback(response) {});

  }

  node.createFilterFor = function(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {

      return (angular.lowercase(state).indexOf(lowercaseQuery) === 0);
    };
  };
  node.sendDetailsOfElement  = function(elementIndex) {
    var selectedChildren = [];


    for  (childGroup in node.travelelement.essential.modesToSelectTheServices) {
      selectedChildren = selectedChildren.concat(node.travelelement.essential.modesToSelectTheServices[childGroup]);

    }
    selectedChildren = _.uniq(selectedChildren);


    node.currentnodeedgetravel({"currentElement":travelelement, "currentElementIndex":elementIndex,"selectedChildren":selectedChildren});

  }

  node.sendDetailsOfChild = function(elementIndex, selectedChild) {

    console.log(" I am inside sendDetailsOfChild");
    console.log(elementIndex, selectedChild);
    console.log(node.metadata);

    console.log("after the loop");
    console.log(node.travelelement);
    node.reflectselectedchild({"currentElement":node.travelelement, "currentElementIndex":elementIndex,"selectedChild":selectedChild,"metadata":node.metadata});

  }
  // node.autoCompleteInput={};
  // node.edit=false;
  // console.log(node.currentnode);
  // console.log(node.locationchildservices);
  // selectedAutocompleteData=null;
  // node.selectednode=function(indexid,type){
  //   console.log("Node is clicked");
  //   console.log(indexid);
  //   console.log(type);
  //   console.log({'index':indexid,'type':type});
  //   node.currentnodeedgetravel({clicked:{'index':indexid,'type':type }});
  // };
  // node.nodekeys=Object.keys(node.locationchildservices);
  //
  //
  // node.states        = loadAll();
  // node.selectedItem  = null;
  // node.searchText    = null;
  // node.querySearch   = querySearch;
  // // ******************************
  // // Internal methods
  // // ******************************
  // /**
  //  * Search for states... use $timeout to simulate
  //  * remote dataservice call.
  //  */
  // function querySearch (query) {
  //   var results = query ? node.states.filter( createFilterFor(query) ) : [];
  //   return results;
  // }
  // /**
  //  * Build `states` list of key/value pairs
  //  */
  // function loadAll() {
  //   var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
  //           Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
  //           Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
  //           Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
  //           North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
  //           South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
  //           Wisconsin, Wyoming';
  //   return allStates.split(/, +/g).map( function (state) {
  //     return {
  //       value: state.toLowerCase(),
  //       display: state
  //     };
  //   });
  // }
  // /**
  //  * Create filter function for a query string
  //  */
  // function createFilterFor(query) {
  //   var lowercaseQuery = angular.lowercase(query);
  //   return function filterFn(state) {
  //     return (state.value.indexOf(lowercaseQuery) === 0);
  //   };
  // }

};
