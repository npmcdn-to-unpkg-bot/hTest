/**
 * Created by lenovo on 23-05-2016.
 */
var app = angular.module("app").component("nodeComponent", {

    templateUrl: "public/components/travelplancomponent/nodeComponent/nodeComponent.html",
    controllerAs: "node",
    controller: ["$timeout","$q",nodeController],
    bindings: {
        'travelelement': '<',
        'currentnode':'<',
        'locationchildservices':'<',
        'currentnodeedgetravel':'&'
    }
});

function nodeController($timeout, $q) {

    var node = this;
  node.autoCompleteInput={};
  node.edit=false;
  console.log(node.currentnode);
    console.log(node.locationchildservices);
    // selectedAutocompleteData=null;
    node.selectednode=function(indexid,type){
      console.log("Node is clicked");
      console.log(indexid);
      console.log(type);
      console.log({'index':indexid,'type':type});
      node.currentnodeedgetravel({clicked:{'index':indexid,'type':type }});
    };
    node.nodekeys=Object.keys(node.locationchildservices);
    node.show_autocomplete=function(){
        if(node.edit==true)
        {
            node.edit=false;
        }
        else
        {
            node.edit=true;
        }

    }

    node.states        = loadAll();
    node.selectedItem  = null;
    node.searchText    = null;
    node.querySearch   = querySearch;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? node.states.filter( createFilterFor(query) ) : [];
      return results;
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }

};
