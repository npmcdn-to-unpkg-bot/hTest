var app = angular.module("app").component("essentialFieldsRenderer", {
    templateUrl: "./public/components-rebuild/essential-fields-renderer/essential-fields-renderer.html",
    controllerAs: "essentialFieldsRenderer",
    controller: essentialFieldsRendererCtrl,
    bindings: {
      "essentialFieldsData": "<",
      "metaDataOfEssentialFields": "<",
      "reflectSelectedChildren": "&"
    }
});


function essentialFieldsRendererCtrl()
{
  var essentialFieldsRenderer = this;
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
  console.log('I am inside essentialFieldsRendererCtrl');
  console.log(essentialFieldsRenderer);

  essentialFieldsRenderer.arrayUnique = function(array) {
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i] === a[j])
                  a.splice(j--, 1);
          }
      }

      return a;
  }




  essentialFieldsRenderer.metaDataofNoDependencyfields = essentialFieldsRenderer.metaDataOfEssentialFields.noDependencyData;



  essentialFieldsRenderer.metaDataOfModesToSelectTheServices = essentialFieldsRenderer.metaDataOfEssentialFields.modesToSelectTheServices;
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
  console.log('I am inside essentialFieldsRendererCtrl');
  console.log(essentialFieldsRenderer.metaDataOfEssentialFields);
  console.log(essentialFieldsRenderer.metaDataOfModesToSelectTheServices);

  var noDependencyFields = Object.keys(essentialFieldsRenderer.metaDataOfModesToSelectTheServices);

  var noDependencyDataValues = [];
  essentialFieldsRenderer.reflectModes = function(keyString, value, id) {

    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(id);
    console.log(value);
    essentialFieldsRenderer.essentialFieldsData[id] = value;
    console.log("Before the loop");
    // console.log(essentialFieldsRenderer.metaDataOfModesToSelectTheServices);
    // console.log();
    Object.keys(essentialFieldsRenderer.metaDataOfEssentialFields.modesToSelectTheServices).forEach(function(noDependencyField){
      console.log("In the for loop");
      console.log(noDependencyFields);
      console.log(noDependencyField);
      console.log("valu isssssssssssssssssssssssssssssssssss");
      console.log(essentialFieldsRenderer.essentialFieldsData[noDependencyField]);

      if (essentialFieldsRenderer.essentialFieldsData[noDependencyField].constructor !== Array) {

        essentialFieldsRenderer.essentialFieldsData[noDependencyField] = [essentialFieldsRenderer.essentialFieldsData[noDependencyField]];
      }
      noDependencyDataValues = [];
      noDependencyDataValues = essentialFieldsRenderer.arrayUnique(noDependencyDataValues.concat(essentialFieldsRenderer.essentialFieldsData[noDependencyField]));

      console.log("Before reflection");
      console.log(noDependencyDataValues);
      console.log("Before reflection call");
      essentialFieldsRenderer.reflectSelectedChildren({"arrayOfSelectedServices": noDependencyDataValues });
    });
  }

}
