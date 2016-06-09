var app=angular.module("app");
app.component('resultComponent',{
  templateUrl:'public/components/trainSearchResultsParentComponent/trainSearchResultsComponent/resultComponent/resultComponent.html',
  controllerAs:'resultComponent',
  controller:resultComponentController,
  bindings:{
    one:'<'
  }
});
function resultComponentController() {
  resultComponent=this;
  resultComponent.showbutton=true;

};
